export enum UserRole {
	ADMIN = 'admin',
	PARTICIPANT = 'participante',
}

export enum UserStatus {
	ACTIVE = 'ativo',
	DISABLE = 'desativo',
	REMOVED = 'removido',
}

export class User {
	constructor(
		readonly id: string | null,
		readonly name: string,
		readonly email: string,
		readonly password: string,
		readonly isEmailValidated: boolean,
		readonly prstatus: UserStatus,
		readonly role: UserRole,
		readonly verificationCode: string,
	) {}
}
