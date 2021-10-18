import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './core/first/first.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: '',   redirectTo: '/first', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: FirstComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
