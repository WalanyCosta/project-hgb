import { Participant, UserRole, UserStatus } from 'domain/model';

export function mapParticipant(participant: any) {
	return new Participant({
		id: participant.id,
		name: participant.user.nome,
		email: participant.user.email,
		birthday: participant.birthday,
		gender: participant.gender,
		password: participant.user.password,
		phone: participant.phone,
		verificationCode: participant.user.verificationCode,
		isEmailValidated: participant.user.emailVerificated,
		role: UserRole[participant.user.role as keyof typeof UserRole],
		status: UserStatus[participant.user.status as keyof typeof UserStatus],
	});
}
