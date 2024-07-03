import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "./components/header/header.component";
import { SecNavComponent } from "./components/sec-nav/sec-nav.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NgbModule, FormsModule, HeaderComponent, SecNavComponent,CommonModule]
})
export class AppComponent {
  title = 'enviri';
}
