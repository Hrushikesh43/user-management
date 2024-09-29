import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClientModule } from '@angular/common/http';
import { UserGridComponent } from "./user-grid/user-grid.component";
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponent, HttpClientModule, UserGridComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'user-management';

  
}
