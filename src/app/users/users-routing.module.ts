import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    // path:'user/:id',
    path:'user',
    component:UserComponent,
    canActivate:[AuthGuard]
    },
    {
      path:'userdetails',
      component:UserDetailsComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'edituser/:id',
      component:EditUserDetailsComponent,
      canActivate:[AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
