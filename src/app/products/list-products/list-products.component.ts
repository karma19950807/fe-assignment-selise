import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductsModel } from '../products.model';

export interface Products {
  id: number;
  tracking_no: string;
  palce_of_booking: string;
  pobox_no: number;
  to: string;
  from: string;
  weight: number;
  amount: number;
  datetime: string;
}

const ELEMENT_DATA: Products[] = [];

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tracking_no',
    'place_of_booking',
    'pobox_no',
    'to',
    'from',
    'weight',
    'amount',
    'datetime',
    'actions',
  ];
  dataSource = ELEMENT_DATA;

  // listProducts: Observable<object>;
  productLists: Products[] = [];

  onClickEditForm!: FormGroup;

  productModelObj: ProductsModel = new ProductsModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProducts();
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        this._snackbar.open('Product was deleted successfully');
        this.listProducts();
      },
      (err) => {
        this._snackbar.open('Unable to delete the product');
      }
    );
  }

  deleteProduct() {
    // this.activatedRoute.params.subscribe((data) => {
    //   this.userId = data.id;
    // });
    // this.productService.deleteProduct(this.userId).subscribe(
    //   (res) => {
    //     this._snackbar.open('Product was deleted successfully');
    //     this.router.navigate(['http://localhost:4200/products/list']);
    //   },
    //   (err) => {
    //     this._snackbar.open('Unable to delete the product');
    //   }
    // );
  }

  listProducts() {
    this.productService.listProducts().subscribe((res) => {
      this.productLists = res;
    });
  }
}
