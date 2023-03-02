import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TaskFilter } from 'src/shared/Filters/TaskFilter';
import { Tasks } from 'src/shared/Models/Tasks';
import { TaskService } from 'src/shared/service/task.service';
import { UsersService } from 'src/shared/service/users.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  displayedColumns: string[] = ["No.",'title','Descreption','Completion','Action' ];
  counter:number=0
  dataSource: MatTableDataSource<Tasks> =  new MatTableDataSource<Tasks>();
  filterForm=this.fb.group({
Title:'',
Descreption:'',
complation:''
})
taskFilter:TaskFilter= new TaskFilter
constructor(private fb:FormBuilder,private Task:TaskService,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem("Token")==null){
      this.router.navigate([''])
     }
    this.GetAll(this.taskFilter)
  }
  GetAll(filter:TaskFilter){
this.Task.GetAll(filter).subscribe(respone=>{
  this.dataSource = respone.result
})
  }
  filter(){
    this.taskFilter.Title = this.filterForm.value.Title as string
    this.taskFilter.Description = this.filterForm.value.Descreption as string
    this.taskFilter.Completion = this.filterForm.value.complation as string
    this.GetAll(this.taskFilter)
  }
  deleteTask(id:number){
this.Task.Delete(id).subscribe(respone=>{
  this.GetAll(this.taskFilter)
})
  }
}
