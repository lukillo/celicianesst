import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): string;
    getUser(id: string): string;
    addUser(createUserDto: CreateUserDto): import("./entities/user.entity").User;
}
