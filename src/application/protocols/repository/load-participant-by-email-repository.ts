import { Participant } from 'domain/model';

export interface LoadParticipantByEmailRepository {
	loadByEmail(email: string, statusActive: string): Promise<Participant | null>;
}
