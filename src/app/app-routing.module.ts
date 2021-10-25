import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';

import { ProductsRoutingModule } from './products/products-routing.module';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'newmodule',
    loadChildren: () =>
      import('./newmodule/newmodule.module').then((m) => m.NewmoduleModule),
  },
  { path: 'home', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsRoutingModule],
  exports: [RouterModule, ProductsRoutingModule],
})
export class AppRoutingModule {}
