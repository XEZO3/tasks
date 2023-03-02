import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from 'src/shared/Models/Tasks';
import { TaskService } from 'src/shared/service/task.service';
import { UsersService } from 'src/shared/service/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addform=this.fb.group({
    Title:'',
    Descreption:'',
    Complation:'Not Started',
  });
  taskModel:Tasks =  new Tasks
  constructor(private fb:FormBuilder,private task:TaskService, private route:Router){}
  ngOnInit(): void {
    if(localStorage.getItem("Token")==null){
      this.route.navigate([''])
     }
  }
Add(){
this.taskModel.Title = this.addform.value.Title as string
this.taskModel.Description = this.addform.value.Descreption as string
this.taskModel.Completion = this.addform.value.Complation as string
this.task.Add(this.taskModel).subscribe(respone=>{
  this.addform.patchValue({
    Title:'',
    Descreption:''
  })
});
}
}
