import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project, ProjectImage } from '../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent implements OnChanges  {
  @Input() project!: Project;
  images: Array<ProjectImage> = [
    { name: 'Image 4', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { name: 'Image 5', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
  ]


  ngOnChanges(changes: SimpleChanges): void {
    const valueChange = changes['project'];
    // If no change occured then valueChanges will be undefined.
    if (valueChange) {
      // this.images = [...valueChange.currentValue.images];
      console.log(this.images) 
   }  
  }

    
}
