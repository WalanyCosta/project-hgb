import { Event, EventStatus } from 'domain/model/event-model';

export function mapEvent(event: any) {
	return new Event(
		event.id,
		event.name,
		event.limiteParticipants,
		event.dateEvent,
		event.hourEvent,
		event.ageRestriction,
		EventStatus[event?.status as keyof typeof EventStatus],
	);
}
