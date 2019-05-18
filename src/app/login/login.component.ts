import { Router } from '@angular/router';
import { isObject } from 'util';
import {  UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:{email:"","password":""}={email:"","password":""}
  errors  =[]
  flag = false;
  constructor(private userSer:UserService, private router: Router) { }

  ngOnInit() {
  }
  login()
  {
    this.flag = true
    console.log(this.user)
    this.userSer.login(this.user).subscribe(
      (r:{user,token})=>this.loginAction(r.user, r.token ),
      (e)=>this.handError(e)
    )
  }
  loginAction(user, token)
  {
    this.flag = false
    this.userSer.authUser = user
    this.userSer.Token = token
    localStorage.setItem('Tokn', token)
    this.router.navigate(['user/',user._id]);

  }
  handError(e)
  {
    this.errors = []
    this.flag = false
    let error = e.error.errors
  
    if(isObject(error)) 
    {
      for (const err of error.details) {
        this.errors.push(err.message)
      }
    }
    else
    {
      this.errors.push(error)
    }
  }

}
