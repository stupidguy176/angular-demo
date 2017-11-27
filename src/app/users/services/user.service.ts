import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { environment as config } from '@app/environments';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(`${config.rootApiUrl}/users`);
  }

  public getId(userId: string) {
    return this.http.get<User>(`${config.rootApiUrl}/users/` + `${userId}`);
  }

  public createUser(user: any) {
    return this.http
      .post<User>(`${config.rootApiUrl}/users`, user);
  }

  public deleteId(userId: string) {
    return this.http
      .delete<User>(`${config.rootApiUrl}/users/` + `${userId}`);
  }

  public editUser(user: any) {
    return this.http.put(`${config.rootApiUrl}/users/` + `${user.id}`, user);
  }
}
