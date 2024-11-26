import { UnprocessableEntityError } from 'domain/error/unprocessable-entity-error';
import { User, UserRole, UserStatus } from './user-model';
import { Event } from './event-model';

type ParticipantParams = {
	id?: string | null;
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: Date;
	gender: string;
	verificationCode: string;
	role?: UserRole;
	status?: UserStatus;
	isEmailValidated?: boolean;
	event?: Event;
};

export class Participant extends User {
	readonly birthday: Date;
	readonly gender: string;
	readonly event: Event | null;
	readonly phone: string;
	readonly totalParticipant: number;

	constructor(params: ParticipantParams) {
		super(
			null,
			params.name,
			params.email,
			params.password,
			false,
			UserStatus.ACTIVE,
			UserRole.PARTICIPANT,
			params.verificationCode,
		);
		this.gender = params.gender;
		this.birthday = params.birthday;
		this.phone = params.phone;
		this.event = params.event ?? null;
	}

	public isParticipantMinor() {
		if (this.event?.isMinor(this.birthday)) {
			throw new UnprocessableEntityError(
				'Acesso negado para participants menor de idade',
			);
		}
	}
}
