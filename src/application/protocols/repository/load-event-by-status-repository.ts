import { Event } from 'domain/model/event-model';

export interface LoadEventByStatusRepository {
	loadByStatus(status: string): Promise<Event | null>;
}
