import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '', component: HomeComponent },
];
