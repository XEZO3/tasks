import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"Tasks",component:ShowComponent
  },
  {
    path:"Tasks/add",component:AddComponent
  },
  {
    path:"Tasks/edit/:id",component:EditComponent
  },
  {
    path:"register",component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
