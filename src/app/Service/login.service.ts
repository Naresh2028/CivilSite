import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Login } from '../Interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private API_URL = '';

  postLogin(login:Login){
    return this.http.post(`${this.API_URL}`,login);
  }
}
