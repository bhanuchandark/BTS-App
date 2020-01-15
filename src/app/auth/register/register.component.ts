import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee = { empId: "", empName: "", empEmail: "", empPassword: "",empRole: "", empUserName: "", mgrId: "" };
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService
      .register(
        this.employee.empId,
        this.employee.empName,
        this.employee.empEmail,
        this.employee.empPassword,
        this.employee.empRole,
        this.employee.empUserName,
        this.employee.mgrId
      )
  }

}
