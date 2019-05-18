import { User } from './../Classes/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase="https://obscure-oasis-87508.herokuapp.com"
  public authUser = false
  public Token
  constructor(public http:HttpClient) { }
  Register$($user)
  {
    return this.http.post(this.urlBase+"/auth/register",$user);
  }
  getUserByID(id)
  {
    let header = {headers: new HttpHeaders().set('x-auth-token', this.Token)} 
    return this.http.get(this.urlBase+"/user/"+id, header);
  }
  setItemList(id,title)
  {
    let header = {headers: new HttpHeaders().set('x-auth-token', this.Token)}
    return this.http.post(this.urlBase+"/user/"+id+"/add-todoo",{title} , header);
  }
  login(user)
  {
    console.log(user)

    // let header = {headers: new HttpHeaders().set('x-auth-token', this.Token)}
    return this.http.post(this.urlBase+"/auth/login",user);
  }
}
