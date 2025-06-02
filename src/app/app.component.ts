import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: '/src/output.css',
})
export class AppComponent {
  title = 'DMS Engenharia';

  isHamburguerOpen = false;

  toggleDropdown() {
    this.isHamburguerOpen = !this.isHamburguerOpen;
    console.log(this.isHamburguerOpen);
  }
  
}
