import { BcryptAdapter } from 'infra/libs/bcrypt-adapter';
import { DayjsAdapter } from 'infra/libs/dayjs-adapter';
import { NodeMailerAdapter } from 'infra/provider/nodemailer-adapter';
import { EventRepository } from 'infra/repository/prisma/event-repository';
import { ParticipantRepository } from 'infra/repository/prisma/participant-repository';
import { AddParticipantService } from './add-participant-service';

const nodeMailerAdapter = new NodeMailerAdapter();
const bcryptAdapter = new BcryptAdapter();
const dayjsAdapter = new DayjsAdapter();
const participantRepository = new ParticipantRepository();
const eventRepository = new EventRepository();

const addParticipantService = new AddParticipantService(
	participantRepository,
	bcryptAdapter,
	eventRepository,
	dayjsAdapter,
	participantRepository,
	nodeMailerAdapter,
);

export { addParticipantService };
