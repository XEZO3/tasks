import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { TokenIntercepterService } from 'src/shared/service/token-intercepter.service';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [{
    provide :HTTP_INTERCEPTORS,
    useClass : TokenIntercepterService,
    multi:true
  },
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
