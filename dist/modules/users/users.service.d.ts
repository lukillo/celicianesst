import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    users: User[];
    constructor();
    private convertToUser;
    findAll(): User[];
    findOne(email: string): User;
    create(createUser: CreateUserDto): User;
}
