import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/shared/Models/Tasks';
import { TaskService } from 'src/shared/service/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  TaskId:any
  
  taskModel:Tasks =  new Tasks
  editForm=this.fb.group({
    Title:'',
    Descreption:'',
    Complation:'',
  });
  constructor(private fb:FormBuilder,private task:TaskService,private _Activatedroute:ActivatedRoute, private route:Router){}
  ngOnInit(): void {
    if(localStorage.getItem("Token")==null){
      this.route.navigate(['login'])
     }
    this.TaskId=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetById()
  }
  GetById(){
    this.task.GetById(this.TaskId).subscribe(respone=>{
      console.log(respone.result)
      this.taskModel.Id = respone.result.id
      this.taskModel.Title = respone.result.title
      this.taskModel.Description = respone.result.description
      this.taskModel.Completion = respone.result.completion
      this.taskModel.UsersId = respone.result.usersId
      console.log(this.taskModel)
      this.editForm.patchValue({
        Title:this.taskModel.Title,
        Descreption:this.taskModel.Description,
        Complation:this.taskModel.Completion
      })
    })
  }
  Update(){
    this.taskModel.Title = this.editForm.value.Title as string
    this.taskModel.Description = this.editForm.value.Descreption as string
    this.taskModel.Completion = this.editForm.value.Complation as string
    this.task.Update(this.taskModel).subscribe(respone=>{
      this.route.navigate(['Tasks'])
    })
  }
}
