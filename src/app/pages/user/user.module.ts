import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListRoutes } from '../user-list/user-list.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutes } from './user.routing';

@NgModule({
  imports: [
FormsModule,
  CommonModule,
    UserRoutes,
    ReactiveFormsModule
  ],
  exports:[
    UserComponent
  ],
  declarations: [UserComponent]
})
export class UserModule { }
