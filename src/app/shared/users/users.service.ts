import { Injectable, Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Users } from '../../component/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dbPath  = '/users';
  usersRef: AngularFireList<Users> = null;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }
}
