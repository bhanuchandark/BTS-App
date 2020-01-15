export class Employee {
    empId:string;
    empName?:string;
    empEmail?:string;
    empPassword:string;
    empRole?:string;
    empUserName?:string;
    mgrId?:string;

    public constructor(empId:string, empName:string, empEmail:string, empPassword:string, empRole:string, empUserName:string, mgrId:string){
        this.empId=empId;
        this.empName=empName;
        this.empEmail=empEmail;
        this.empPassword=empPassword;
        this.empRole=empRole;
        this.empUserName=empUserName;
        this.mgrId=mgrId;
    }


}
