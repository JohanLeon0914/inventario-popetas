import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-show-circus',
  templateUrl: './show-circus.component.html',
  styleUrls: ['./show-circus.component.css']
})
export class ShowCircusComponent implements OnInit {

  products: Product[]
  total: number

  constructor(private postService: PostService, private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.productService.getProductsCircus().subscribe( (res) => {
      this.products = res.map( (e) => {
         return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Product)
         }
        })
    })
  }

  deleteRow = (product) => this.productService.deleteProductCircus(product)
  getTotal(){
    return this.productService.getTotal(this.products)
  }

}
