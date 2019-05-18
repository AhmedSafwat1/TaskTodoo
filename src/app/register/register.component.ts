import { User } from './../Classes/user';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isArray, isObject } from 'util';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegister:User = new User("","","");
  errors  =[]
  flag = false;
  constructor(
    public userService:UserService,
    private router: Router

    ) { }

  ngOnInit() {
  }
  // logObject(name)
  // {
  //   console.log(name)
  // }
  save()
  {
    this.flag = true
    console.log(this.userRegister)
    let data = {
      "name":this.userRegister.name,
      "password":this.userRegister.password,
      "email":this.userRegister.email
      
    }
    this.userService.Register$(data)
    .subscribe(
      (r:{user:{},token:string})=>this.register(r.user, r.token),
      (e)=>this.handError(e)
      
      )
  }
  register(user, token)
  {
    this.flag = false
    this.userService.authUser = user
    this.userService.Token = token
    localStorage.setItem('Tokn', token)
    this.router.navigate(['login']);

  }
  reset()
  {
    this.userRegister.name = ""
    this.userRegister.email = ""
    this.userRegister.password =""
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
