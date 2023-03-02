import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/shared/Dto/RrgisterDto';
import { UsersService } from 'src/shared/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm=this.fb.group({
    UserName:'',
    Email:'',
    Password:''
  })
  registerDto:RegisterDto= new RegisterDto
constructor(private fb:FormBuilder,private user:UsersService, private route:Router){}
  ngOnInit(): void {
   if(localStorage.getItem("Token")!=null){
      this.route.navigate(['Tasks'])
   }
  }
register(){
  this.registerDto.UserName= this.registerForm.value.UserName as string

this.registerDto.Email= this.registerForm.value.Email as string
this.registerDto.Password= this.registerForm.value.Password as string
this.user.Register(this.registerDto).subscribe(respone=>{
  
   
   this.route.navigate(['login'])
  

})
}
}
