import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  public editForm: FormGroup
  postRef: any

  constructor(
    private postService: PostService,
    private productService: ProductService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activeRoute: ActivatedRoute
    ) {
      this.editForm = this.formBuilder.group({
        name: [''],
        amount: [],
        salePrice: [],
        unitCost: []
      })
     }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.productService.getProductById(id).subscribe( res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        name: [this.postRef.name],
        amount: [this.postRef.amount],
        salePrice: [this.postRef.salePrice],
        unitCost: [this.postRef.unitCost],
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.productService.updateProduct(this.editForm.value, id)
    this.router.navigate([''])
  }

}
