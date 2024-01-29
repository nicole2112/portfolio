import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Project, ProjectImage } from '../../models/project';
import { CommonModule } from '@angular/common';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectModalComponent implements AfterViewInit   {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  
  @Input() project!: Project;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const carouselElement = this.el.nativeElement.querySelector('#projectCarousel');
    this.renderer.setProperty(carouselElement, 'carousel', {});  
  }

  openCodeUrl(): void {
    window.open(this.project.codeUrl, "_blank");
  }

  openProdUrl(): void {
    window.open(this.project.prodUrl, "_blank");
  }
}
