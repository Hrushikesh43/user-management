// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-grid', pathMatch: 'full' },
  { path: 'user-grid', component: UserGridComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-update/:number', component: UserUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
