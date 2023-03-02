import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { loginDto } from 'src/shared/Dto/LoginDto';
import { UsersService } from 'src/shared/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform=this.fb.group({
    Email:'',
    Password:''
  })
  loginDto:loginDto= new loginDto
constructor(private fb:FormBuilder,private user:UsersService, private route:Router){}
  ngOnInit(): void {
   if(localStorage.getItem("Token")!=null){
      this.route.navigate(['Tasks'])
   }
  }
login(){
this.loginDto.Email= this.loginform.value.Email as string
this.loginDto.Password= this.loginform.value.Password as string
this.user.Login(this.loginDto).subscribe(respone=>{
  if(respone.result.token!=null){
    localStorage.setItem("Token",respone.result.token);
   this.route.navigate(['Tasks'])
  }

})
}
}
