import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  LoggedIn: boolean = false;
  constructor(private httpClient: HttpClient) {}

  public isLoggedIn() {
    return this.LoggedIn;
  }

  public logout() {
    this.LoggedIn = false;
  }

  public validateUser(username, password) {
    return this.httpClient
      .post<any>("http://localhost:9090/Employee/authenticate", {
        username,
        password
      })
      .pipe(
        map(data => {
          if (data.success === true) {
            this.LoggedIn = true;
            return true;
          } else {
            this.LoggedIn = false;
            return false;
          }
        })
      );
  }
  
  public register(empId, empName, empEmail, empPassword,empRole,empUserName,mgrId) {
    return this.httpClient
      .post<any>("http://localhost:9090/Employee/register", {
        empId,
        empName,
        empEmail,
        empPassword,
        empRole,
        empUserName,
        mgrId
      })
      .pipe(
        map(data => {
          console.log(data);
          if (data.success === true) {
            return true;
          } else {
            return false;
          }
        })
      );
  }
}

