import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

import { AddProductsComponent } from './add-products/add-products.component';
import { AppComponent } from '../app.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ListProductsComponent },
      { path: 'list', component: SuperAdminComponent },
      { path: 'view/:id', component: ViewProductsComponent },
      { path: 'edit/:id', component: EditProductsComponent },
      { path: 'delete/:id', component: ListProductsComponent },
      { path: 'add', component: AddProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
