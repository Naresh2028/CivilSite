import { Component, OnInit } from '@angular/core';
import {Login} from '../Interface/login';
import {Router} from '@angular/router';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!:Login;

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private route: Router,private loginService:LoginService) { }

  ngOnInit(){

    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get password(){
    return this.loginForm.get('password');
  }


  SubmitLogin():void{

    if(this.loginForm.invalid){
      return;
    }

    const {userName,password} = this.loginForm.value;

    if(userName === 'test' && password === 'test'){
      alert('Form submit successfully!');
      this.loginForm.reset();
    }
    else{
      alert('something went wrong')
    }
    
  }

}
