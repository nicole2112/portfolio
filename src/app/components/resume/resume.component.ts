import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ PdfViewerModule ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resumePdf = '/nicole2112/assets/resume/CV.pdf';

}
