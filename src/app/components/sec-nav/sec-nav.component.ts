import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sec-nav.component.html',
  styleUrl: './sec-nav.component.scss'
})
export class SecNavComponent {
  clicked:boolean = false;  
  
  toggle() {
    this.clicked = !this.clicked;
  }
}
