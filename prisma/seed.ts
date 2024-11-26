import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	await prisma.event.create({
		data: {
			name: 'Tech Summit 2024',
			limiteParticipants: 1000,
			dateEvent: new Date('2024-12-25'),
			status: 'aguardando',
			hourEvent: '08:12',
			ageRestriction: 15,
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		await prisma.$disconnect();
		process.exit(1);
	});
