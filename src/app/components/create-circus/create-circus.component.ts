import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-create-circus',
  templateUrl: './create-circus.component.html',
  styleUrls: ['./create-circus.component.css']
})
export class CreateCircusComponent implements OnInit {
  public postForm: FormGroup
  public productForm: FormGroup

  constructor(
    private postService: PostService,
    private productService: ProductService,
    public formBuilder: FormBuilder,
    public router: Router,
    ) {
      this.productForm = this.formBuilder.group({
        name: [''],
        amount: [''],
        salePrice: [''],
        unitCost: ['']
      })
     }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.productService.createProductCircus(this.productForm.value)
    this.router.navigate(['circus'])
  }

}
