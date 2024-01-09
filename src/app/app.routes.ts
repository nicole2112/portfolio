import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    { path: 'portfolio', component: PortfolioComponent },
    { path: '', component: HomeComponent },
];
