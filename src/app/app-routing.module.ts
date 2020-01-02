

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) ,canActivate: [AuthGuard]},
  // {path:'',component:DashboardComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
