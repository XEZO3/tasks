import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Tasks } from 'src/shared/Models/Tasks';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  displayedColumns: string[] = ["No.",'title','Descreption','Action' ];
  counter:number=0
  dataSource: MatTableDataSource<Tasks> =  new MatTableDataSource<Tasks>();
  filterForm=this.fb.group({
Title:'',
Descreption:'',
complation:''
})
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    
  }
  GetAll(){

  }
}
