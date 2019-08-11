import {Injectable} from '@angular/core';
import {NewUser} from '../interfaces/new-user';
import {UserLogin} from '../../../shared/interfaces/user-login';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreLoginService {
  private users: NewUser[];
  private latestId: number;

  constructor(private router: Router) {
    const users = this.getUsers();
    if (users.length === 0) {
      this.latestId = 0;
    } else {
      const lastId = users[users.length - 1].id;
      this.latestId = lastId + 1;
    }
  }

  private addUserToStorage(newUser: NewUser[]): void {
  localStorage.setItem('users', JSON.stringify({users: newUser}));
  }

  public  getUsers(): NewUser[] {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    return storedUsers == null ? [] : storedUsers.users;
  }

  public addUser(user: NewUser) {
    user.id = this.latestId;
    console.log(user);
    const users = this.getUsers();
    users.push(user);
    this.addUserToStorage(users);
    this.latestId ++;
  }

  public validateLogin(userLogin: UserLogin) {
    const users = this.getUsers();
    console.log(userLogin.email, userLogin.password);
    const validUser = users.filter(user =>
      user.email === userLogin.email && user.password === userLogin.password
    );
    sessionStorage.setItem('Current User', JSON.stringify(validUser));
    this.router.navigate(['../../../user']);
    return validUser;
  }
}

