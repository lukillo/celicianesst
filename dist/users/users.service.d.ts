import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    users: User[];
    constructor();
    private convertToUser;
    getHello(): string;
    findOne(id: string): string;
    create(createUser: CreateUserDto): User;
}
