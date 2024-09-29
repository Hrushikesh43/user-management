import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserGridComponent } from './user-grid/user-grid.component';

export const routes: Routes = [
    { path: 'user-form', component: UserFormComponent },
    { path: '', component: UserGridComponent, pathMatch: 'full' },
];
