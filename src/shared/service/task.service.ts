import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskFilter } from '../Filters/TaskFilter';
import { Tasks } from '../Models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "https://localhost:7273/api/Task/"
  constructor(private http:HttpClient) { }
  GetAll(filter:TaskFilter){
    let url = this.baseUrl+"GetAll?Title="+filter.Title+"&Descreption="+filter.Description+"&Completion="+filter.Completion
    return this.http.get<any>(url);
  }
  Delete(id:number){
    let url = this.baseUrl+"Delete/"+id
    return this.http.delete<any>(url);
  }
  GetById(id:number){
    let url = this.baseUrl+"GetById/"+id
    return this.http.get<any>(url)
  }
  Add(Task:Tasks){
   let url = this.baseUrl+"Add"
   return this.http.post<any>(url,{
    Id:0,
    Title:Task.Title,
    Description:Task.Description,
    Completion:Task.Completion
   });
  }
  Update(Task:Tasks){
    let url = this.baseUrl+"Update"
   return this.http.put<any>(url,{
    Id:Task.Id,
    Title:Task.Title,
    Description:Task.Description,
    Completion:Task.Completion,
    UsersId:Task.UsersId
   });
  }
  
}
