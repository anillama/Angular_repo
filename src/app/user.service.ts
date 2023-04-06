import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseURL = "http://localhost:8080/api/v1/users";
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]> {
    console.log("UserService class");
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(userInfo: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, userInfo);
  }
}
