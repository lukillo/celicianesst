import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): UserDto[];
    getUser(email: string): import("./entities/user.entity").User;
    addUser(createUserDto: CreateUserDto): import("./entities/user.entity").User;
}
