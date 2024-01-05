import { Component, HostBinding, effect, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'));

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });    
  }
}
