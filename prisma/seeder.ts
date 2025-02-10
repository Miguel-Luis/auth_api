import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const [miguel, andrea] = await prisma.$transaction(
        async (prisma) => {
            const miguel = await prisma.user.create({
                data: {
                    email: 'migue.doe@mail.com',
                    firstName: 'Luis Miguel',
                    lastName: 'Gonzalez Giraldo',
                    password: '123456',
                },
            });

            const andrea = await prisma.user.create({
                data: {
                    email: 'andre.doe@mail.com',
                    firstName: 'Andrea',
                    lastName: 'Castro Ramirez',
                    password: '123456',
                },
            });

            return [miguel, andrea];
        },
    );

    console.log([miguel, andrea]);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });