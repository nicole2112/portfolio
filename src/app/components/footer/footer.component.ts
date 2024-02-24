import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faComments, faEnvelope, faMapMarker, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faPhone = faPhone;
  faComments = faComments;
  faEnvelope = faEnvelope;
  faMapMarker = faMapMarker;
  faLinkedin = faLinkedinIn;
  faEllipsis = faEllipsisH;
  faGithub = faGithub;

  openLinkedin(): void {
    window.open("https://linkedin.com/in/nicole-rodriguez-708a12237", "_blank");
  }

  openGithub(): void {
    window.open("https://github.com/nicole2112", "_blank");
  }
}
