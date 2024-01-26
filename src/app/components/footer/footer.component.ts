import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faComments, faEnvelope, faMapMarker, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
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
}
