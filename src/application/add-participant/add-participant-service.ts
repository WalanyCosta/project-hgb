import {
	AddParticipantAndEventParticipantRepository,
	LoadEventByStatusRepository,
	LoadParticipantByEmailRepository,
} from 'application/protocols/repository';
import { AddParticipantParam } from './add-participant-DTO';
import { Participant, UserStatus } from 'domain/model';
import { EventStatus } from 'domain/model/event-model';
import { LibraryDate, Hashed } from '../protocols/libs';
import { MailProvider } from 'application/protocols/provider/mail-provider';
import { BadRequestError } from 'domain/error/bad-request-error';

export class AddParticipantService {
	constructor(
		private readonly loadParticipantByEmailRepository: LoadParticipantByEmailRepository,
		private readonly hashed: Hashed,
		private readonly LoadEventByStatusRepository: LoadEventByStatusRepository,
		private readonly libraryDate: LibraryDate,
		private readonly addParticipantAndEventParticipantRepository: AddParticipantAndEventParticipantRepository,
		private readonly mailProvider: MailProvider,
	) {}

	async execute(param: AddParticipantParam): Promise<void> {
		const participantExists =
			await this.loadParticipantByEmailRepository.loadByEmail(
				param.email,
				UserStatus.ACTIVE,
			);

		if (participantExists) {
			throw new BadRequestError('Participant alright exists!');
		}

		const hashed = await this.hashed.hash(param.password);
		if (!hashed) {
			throw new Error('Internal Server Error');
		}

		const event = await this.LoadEventByStatusRepository.loadByStatus(
			EventStatus.WAITING,
		);

		if (!event) {
			throw new BadRequestError('No have events on open!');
		}

		if (
			event.isExceedParticipantLimit(12) ||
			this.libraryDate.isSameOrBefore(event.dateEvent)
		) {
			throw new BadRequestError('No have events on open!');
		}
		const verificationCode = Math.floor(
			100_000 + Math.random() * 900_000,
		).toString();

		const participant = new Participant({
			...param,
			password: hashed,
			event: event,
			verificationCode: verificationCode,
		});

		participant.isParticipantMinor();

		await this.addParticipantAndEventParticipantRepository.add(participant);

		const content = `
            Clique em finalizar o processo de cadastro e acessar a nossa plataforma

            <a href="localhost:3333/confirmar/${participant.verificationCode}">Clique em confirma</a>
        `;

		await this.mailProvider.sendEmail(
			`"${participant.name}" <${participant.email}>`,
			'Confirmação de email',
			content,
		);
	}
}
