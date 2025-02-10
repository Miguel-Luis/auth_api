import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

type UserWithoutPassword = Omit<User, 'password'>;

export class UserEntity implements UserWithoutPassword {
    @ApiProperty()
    id: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}