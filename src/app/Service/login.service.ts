import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Login } from '../Interface/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login!:Login;
  private API_URL = '';

  postLogin(userName:string,password:string):Observable<Login>{
    const login = {userName,password}
    return this.http.post<Login>(`${this.API_URL}`,login);
  }
}
