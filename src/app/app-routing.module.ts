import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './core/second/second.component';
import { FirstComponent } from './core/first/first.component';


const routes: Routes = [
  { path: 'first', component: SecondComponent,
  children: [
    {
      path: 'child', // child route path
      component: SecondComponent, // child route component that the router renders
    },
    {
      path: 'child-b',
      component: SecondComponent, // another child route component that the router renders
    },
  ], },
  { path: '',   redirectTo: '/first', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: SecondComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
