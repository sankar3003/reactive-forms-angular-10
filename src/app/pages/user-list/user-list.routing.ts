import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserListComponent
   },
];

export const UserListRoutes = RouterModule.forChild(routes);
