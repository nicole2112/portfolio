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
  filteredProjects!: Array<Project>;
  selectedProject: Project = {
    id: 0,
    title: '',
    description: '',
    images: [],
    codeUrl: ''
  }
  tags: Array<string> = ['All', 'Angular', '.NET', 'Firebase']
  selectedTags: { [key: string]: boolean } = {};

  constructor() {
    this.filteredProjects = this.projects;
    this.tags.forEach(tag => {
      this.selectedTags[tag] = false;
    });
    this.selectedTags['All'] = true;
  }

  get visibleProjects(): Project[] {
    return this.filteredProjects.filter(project => !project.hidden);
  }

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  updateSelectedTags(tag: string) {
    this.selectedTags[tag] = !this.selectedTags[tag];
    if (tag === 'All' && this.selectedTags[tag]) { // When 'All' tag is activated
      this.tags.forEach(tag => {
        if (tag != 'All') {
          this.selectedTags[tag] = false;
        }
      });
      this.resetFilter();
      return;
    }
    else if (tag !== 'All') { // When any other tag is activated, 'All' tag is deactivated
      this.selectedTags['All'] = false;
    }
    this.updateFilter();
  }

  updateFilter() {
    console.log(this.selectedTags)
    this.filteredProjects = this.projects.filter(project => {
      return project.tags?.some(tag => this.selectedTags[tag]);
    });
  }

  resetFilter() {
    this.filteredProjects = [...this.projects];
  }

}
