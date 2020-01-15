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
      .post<any>("http://192.168.43.230:7070/authenticate", {
        empId:username,
        empPassword:password
      })
      .pipe(
        map(data => {
          console.log(data);
          if (data === true) {
            this.LoggedIn = true;
            return true;
          } else {
            this.LoggedIn = false;
            return false;
          }
        })
      );
  }

  public register(empId, empName, empEmail, empPassword,empRole,empUserName) {
    
    console.log(empId)
    return this.httpClient
      .post<any>("http://192.168.43.230:7070/register", {
        empId:empId,
        empName:empName,
        empEmail:empEmail,
        empPassword:empPassword,
        empRole:empRole,
        empUserName:empUserName   
      })
      .pipe(
        map(data => {
          console.log(data);
          if (data === true) {
            return true;
          } else {
            return false;
          }
        })
      );
  }
}

