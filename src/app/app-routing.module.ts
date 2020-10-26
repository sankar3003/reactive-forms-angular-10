import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/user',
    pathMatch:'full'
  },
  {
    path:'user',
    loadChildren:()=>import('./pages/user/user.module').then(m=>m.UserModule)
  },
  {
    path:'user-list',
    loadChildren:()=>import('./pages/user-list/user-list.module').then(m=>m.UserListModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
