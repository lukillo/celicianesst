import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  public users: User[];

  constructor() {
    this.users = [];
  }

  private convertToUser(createUser: CreateUserDto): User {
    const user = new User();
    const today = new Date();

    user.telephone = createUser.telephone;
    user.password = createUser.password;
    user.firstName = createUser.firstName;
    user.lastName = createUser.lastName;
    user.email = createUser.email;
    user.createdAt = today.toISOString();
    user.updatedAt = null;
    user.fromDate = null;
    user.untilDate = null;

    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(email: string): User {
    const usr = this.users.filter(usr => usr.email == email)
    return usr[0]?  usr[0] : null;
  }

  create(createUser: CreateUserDto): User {  
    const user = this.convertToUser(createUser);
    
    this.users.push(user);
    return user;
  }
}
