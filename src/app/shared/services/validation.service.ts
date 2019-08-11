import { Injectable } from '@angular/core';

@Injectable()

export class ValidationService {

  constructor() {

    /**
     * Contains all potential validation messages for Savyt
     */

    return {
      'email': {
        'required': 'Email is required',
        'invalid': 'Email is invalid'
      },
      'password': {
        'required': 'Password is required'
      },
      'fullname': {
        'required': 'Full Name is required'
      },
      'generic': {
        'required': 'This field is required'
      }
    };
  }


}
