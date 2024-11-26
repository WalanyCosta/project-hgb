export enum EventStatus {
	DISABLED = 'desabilitado',
	WAITING = 'aguardando',
	CLOSE = 'fechado',
	DONE = 'feito',
	CANCELAD = 'cancelado',
}

export class Event {
	constructor(
		readonly id: string | null,
		private readonly name: string,
		private readonly limitParticipants: number,
		readonly dateEvent: Date,
		readonly hourEvent: string | number,
		private readonly ageRestriction: number,
		private readonly status: EventStatus,
	) {}

	public isExceedParticipantLimit(totalLimit: number): boolean {
		return this.limitParticipants < totalLimit;
	}

	public isMinor(birthday: Date): boolean {
		const currentYear = new Date().getFullYear();
		const yearOfBirth = birthday.getFullYear();
		const ageOfParticipant = yearOfBirth - currentYear;

		return ageOfParticipant > this.ageRestriction;
	}
}
