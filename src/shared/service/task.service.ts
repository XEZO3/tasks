import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "https://localhost:7273/api/Task/"
  constructor(private http:HttpClient) { }
  GetAll(){
    let url = this.baseUrl+"GetAll"
    return this.http.get<any>(url);
  }
  Delete(id:number){
    let url = this.baseUrl+"Delete/"+id
    return this.http.get<any>(url);
  }
  filter(){
    
  }
}
