import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import { ProductsRoutingModule } from './products/products-routing.module';

const routes: Routes = [
  { path: '', component: SignupComponent, pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'products',
    outlet: 'view-dashboard',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsRoutingModule],
  exports: [RouterModule, ProductsRoutingModule],
})
export class AppRoutingModule {}
