import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Project } from '../../models/project';
import { projectsData } from '../../core/ProjectsData';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: Array<Project> = projectsData;
  selectedProject: Project = {
    id: 0,
    title: '',
    description: '',
    images: [ ],
    codeUrl: ''
  }

  constructor() {
  }  

  get visibleProjects(): Project[] {
    return this.projects.filter(project => !project.hidden);
  }

  openModal(project: Project): void {
    this.selectedProject = project;
  }

}
