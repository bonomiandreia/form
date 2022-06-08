import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-steps',
    loadChildren: () => import('./pages/steppers-form/steppers-form.module').then((m) => m.SteppersFormModule),
  },
  { path: '**', redirectTo: '/form-steps' },
  { path: '', pathMatch: 'full', redirectTo: '/form-steps' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
