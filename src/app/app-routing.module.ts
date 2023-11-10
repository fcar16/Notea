import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { NewComponent } from './pages/new/new.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"home", component:NotesComponent,
  canActivate:[LoginGuard]},
  {path:"new", component:NewComponent,
  canActivate:[LoginGuard]},
  {path:"about", loadComponent:
  ()=>import('./pages/about/about.component').then(c=>c.AboutComponent)},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'login', component:LoginComponent,
  canActivate:[LoginGuard]},
  {path:'**', component:Error404Component}
  ];
  /**{path:'a',component:AComponent,
children:[
  {path:'suba', component:SubaComponent},
  {path:'subb', component:SubbComponent},
  {path:'**',redirectTo:'/a/suba', pathMatch:'full'},
  ],
canActivate:[GuardGuard]}, 
  {path:'b/:id/:page',loadComponent:()=> import('./pages/b/b.component').then(m=>m.BComponent)},
  {path:'',redirectTo:'/a', pathMatch:'full'},
  {path:'**', component:Error404Component}
];
**/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
