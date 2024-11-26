import { prisma } from './config/prisma-client';
import { LoadEventByStatusRepository } from 'application/protocols';
import { Event } from 'domain/model/event-model';
import { mapEvent } from 'utils/maps/map-event';

export class EventRepository implements LoadEventByStatusRepository {
	async loadByStatus(status: string): Promise<Event | null> {
		const event = await prisma.event.findFirst({
			where: {
				status,
			},
		});

		return event ? mapEvent(event) : null;
	}
}
