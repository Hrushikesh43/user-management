import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClientModule } from '@angular/common/http';
import { UserGridComponent } from "./user-grid/user-grid.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponent, HttpClientModule, UserGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';

  
}
