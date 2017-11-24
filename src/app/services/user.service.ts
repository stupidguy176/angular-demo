import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user.model';


@Injectable()
export class UserService {
  userApiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(`${this.userApiUrl}/users`);
  }

  public getId(userId: string) {
    return this.http.get<User>(`${this.userApiUrl}/users/` + `${userId}`);
  }

  public createUser(user: any) {
    return this.http
      .post<User>(`${this.userApiUrl}/users`, user);
  }

  public deleteId(userId: string) {
    return this.http
      .delete<User>(`${this.userApiUrl}/users/` + `${userId}`);
  }

  public editUser(user: any) {
    return this.http.put(`${this.userApiUrl}/users/` + `${user.id}`, user);
  }
}
