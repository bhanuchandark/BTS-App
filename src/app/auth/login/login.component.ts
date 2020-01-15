import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  invalidLogin = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  checkLogin() {
    this.authService
      .validateUser(this.username, this.password)
      .subscribe(data => {
        if (data == true) {
          this.invalidLogin = false;
          console.log("success")
          this.router.navigateByUrl("/register");
        } else {
          console.log("bye")
          console.log(data)
          
          this.invalidLogin = true;
        }
      });
  }
  

  // checkLogin(){
  //   if(this.username=="bhanu@gmail.com" && this.password=="bhanu"){
  //     console.log("Hello")
  //     this.invalidLogin = false;
  //     this.router.navigateByUrl("/register");
  //   }else{
  //     this.invalidLogin = true;
  //     console.log("bye")
  //   }
  // }

}
