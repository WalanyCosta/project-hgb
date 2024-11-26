import { Participant } from 'domain/model';

export interface AddParticipantAndEventParticipantRepository {
	add(participant: Participant): Promise<void>;
}
