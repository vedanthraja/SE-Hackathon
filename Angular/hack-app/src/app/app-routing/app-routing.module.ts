import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'projects',     component: ProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
