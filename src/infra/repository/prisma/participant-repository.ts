import {
	AddParticipantAndEventParticipantRepository,
	LoadParticipantByEmailRepository,
} from 'application/protocols';
import { Participant, UserRole, UserStatus } from 'domain/model';
import { prisma } from './config/prisma-client';
import { mapParticipant } from 'utils/map-participants';

export class ParticipantRepository
	implements
		LoadParticipantByEmailRepository,
		AddParticipantAndEventParticipantRepository
{
	async loadByEmail(
		email: string,
		statusActive: string,
	): Promise<Participant | null> {
		const participant = await prisma.participant.findFirst({
			include: {
				user: true,
			},
			where: {
				AND: [
					{
						user: {
							status: statusActive,
							role: UserRole.PARTICIPANT,
							email,
						},
					},
				],
			},
		});
		return participant ? mapParticipant(participant) : null;
	}

	async add(participant: Participant): Promise<void> {
		await prisma.$transaction(async (prismaTransaction) => {
			const user = await prismaTransaction.user.create({
				data: {
					nome: participant.name,
					email: participant.email,
					password: participant.password,
					role: participant.role,
					emailVerificated: participant.isEmailValidated,
					verificationCode: participant.verificationCode,
					status: participant.prstatus,
				},
			});

			const newParticipant = await prismaTransaction.participant.create({
				data: {
					phone: participant.phone,
					gender: participant.gender,
					birthday: participant.birthday,
					userId: user.id,
				},
				include: {
					user: true,
				},
			});

			await prismaTransaction.eventParticipant.create({
				data: {
					participantId: newParticipant.id,
					eventId: participant.event.id ?? '',
				},
			});
		});
	}
}
