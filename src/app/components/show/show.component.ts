import { Component, OnInit } from '@angular/core';
//importamos el modelo
import { Post } from 'src/app/post.model';
//importamos el servicio
import { PostService } from 'src/app/post.service';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  Posts: Post[] 
  products: Product[]
  total: number

  constructor(private postService: PostService, private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( (res) => {
      this.products = res.map( (e) => {
         return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Product)
         }
        })
    })
  }

  deleteRow = (product) => this.productService.deleteProduct(product)
  getTotal(){
    return this.productService.getTotal(this.products)
  }

}
