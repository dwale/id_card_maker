import {Injectable} from '@angular/core';
import {NewUser} from '../interfaces/new-user';
import {UserLogin} from '../../../shared/interfaces/user-login';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';

/**
 * Most of the commented code are as a result of switching from a multiple user system to a single user system after asking Isah
 */
@Injectable({
  providedIn: 'root'
})
export class PreLoginService {
  private user: NewUser;
  // private latestId: number;

  constructor(private router: Router) {
    // const users = this.getUsers();
    // if (users.length === 0) {
    //   this.latestId = 0;
    // } else {
    //   const lastId = users[users.length - 1].id;
    //   this.latestId = lastId + 1;
    // }
  }

  /**
   * Add user to the local storage
   *
   */
  private addUserToStorage(newUser: NewUser): void {
  localStorage.setItem('user', JSON.stringify({users: newUser}));
  }

  /**
   * Gets the user that's existing on the local storage
   */
  public  getUser(): NewUser {
    if (!isNullOrUndefined(localStorage.getItem('user'))) {
    const storedUserObject = JSON.parse(localStorage.getItem('user'));
    const storedUser = storedUserObject.users;
    return storedUser == null ? [] : storedUser;
    } else {
      return null;
    }
  }

  /**
   * Gets the users credentials from the sign up component and passes it to the addUserToStorage method
   *
   */
  public addUser(user: NewUser) {
    // user.id = this.latestId;
    // const users = this.getUser();
    // users.push(user);
    this.addUserToStorage(user);
    // this.latestId ++;
  }

  /**
   * Creates a session for the logged in user and helps the verify guard determine if a user can gain access to the application
   *
   */
  private storeSession(userLogin: UserLogin) {
    sessionStorage.setItem('Current User', JSON.stringify(userLogin));
  }

  /**
   * Validates the entered credentials with the one in the local Storage
   *
   */
  public validateLogin(userLogin: UserLogin) {
    const user = this.getUser();
    // const validUser = users.filter(user =>
    //   user.email === userLogin.email && user.password === userLogin.password
    // );
    console.log('users', user);
    if (isNullOrUndefined(this.getUser())) {
      this.storeSession(userLogin);
    } else {
      if (user.email === userLogin.email && user.password === userLogin.password) {
        this.storeSession(user);
        return true;
      } else {
        return false;
      }
    }
  }
}

