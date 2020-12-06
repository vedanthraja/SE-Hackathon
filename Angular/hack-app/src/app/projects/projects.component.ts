
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectsService } from '../services/projects.service';
import { Project } from '../shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Observable<Project[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteProject() {
   this.projectsService.deleteAll()
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error => console.log('ERROR: ' + error));
 }
 reloadData() {
    this.projects = this.projectsService.getProjectsList();
  }

}
