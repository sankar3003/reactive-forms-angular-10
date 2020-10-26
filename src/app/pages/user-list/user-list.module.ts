import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutes } from './user-list.routing';


@NgModule({
  imports: [

  CommonModule,
    UserListRoutes,

  ],
  declarations: [UserListComponent]
})
export class UserListModule { }
