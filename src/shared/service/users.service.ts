import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDto } from '../Dto/LoginDto';
import { RegisterDto } from '../Dto/RrgisterDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "https://localhost:7273/api/User/"
  constructor(private http:HttpClient) { }
Login(login:loginDto){
  let url = this.baseUrl+"login"
  return this.http.post<any>(url,{
    Email:login.Email,
    Password:login.Password
  })
}
Register(register:RegisterDto){
  let url = this.baseUrl+"Register"
  return this.http.post<any>(url,{
    UserName:register.UserName,
    Email:register.Email,
    Password:register.Password
  })
}
}
