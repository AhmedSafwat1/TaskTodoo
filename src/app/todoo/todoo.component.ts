import { User } from './../Classes/user';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todoo',
  templateUrl: './todoo.component.html',
  styleUrls: ['./todoo.component.css']
})
export class TodooComponent implements OnInit {
  public user = new User("","","")
  public flagLoad = true
  public id;
  public title:string = ""
  public message = ""
  public flag=0
  constructor(private userServ:UserService,private route:ActivatedRoute, private router: Router) { 
    this.user.todoList = []
  }

  ngOnInit() {

    if(localStorage.getItem("Tokn") === null)
    {
      
      this.router.navigate(['login']);
    }
    console.log("d"+localStorage.getItem("Tokn"))
    this.userServ.Token = localStorage.getItem("Tokn")
    this.id = this.route.snapshot.paramMap.get("id")
    this.userServ.getUserByID(this.id).subscribe(
      (r:{data,message})=>{this.SetDate(r.data)},
      (e)=>this.handlError(e)
    )

  }
  SetDate(user)
  {
    this.flagLoad = false
    console.log(user)
    this.user = user
  }
  handlError(e)
  {
    console.log(e)
    this.router.navigate(['errors']);
    this.flagLoad = false
  }
  saveTodo()
  {
    this.userServ.setItemList(this.id, this.title).subscribe(
      (r:{data,message})=>this.handleSaveTodoo(r.data),
      e=>this.handlErrorTodoo(e)
    )
  }
  handleSaveTodoo(user)
  {
    console.log(user)
    this.user = user  
    this.title = ""
    this.flag = 2;
    this.message = "Add item to You Todoo Sucess"
  }
  handlErrorTodoo(err)
  {
    this.flag = 1;
    this.message = "Add item to You Todoo faild"
    console.log(err)
  }
  


}
