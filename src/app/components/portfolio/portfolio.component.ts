import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  public projects: Array<Number> = [1, 2, 3, 4, 5, 6];

}
