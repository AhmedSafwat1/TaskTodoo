import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userServ:UserService,private route:ActivatedRoute, private router: Router) { }
  @Input() auth;
  @Input() username;
  ngOnInit() {
    console.log(this.auth,this.username)
  }

  logout(event)
  {
    event.preventDefault()
    console.log(event)
    this.router.navigate(['login']);
    this.userServ.Token = ""
    
    if (localStorage.getItem('Tokn')) {
      localStorage.removeItem('Tokn');
     } 
  }

}
