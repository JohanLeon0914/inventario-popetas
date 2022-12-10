import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-edit-circus',
  templateUrl: './edit-circus.component.html',
  styleUrls: ['./edit-circus.component.css']
})
export class EditCircusComponent implements OnInit {

  public editForm: FormGroup
  postRef: any

  constructor(
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
    this.productService.getProductCircusById(id).subscribe( res => {
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
    this.productService.updateProductCircus(this.editForm.value, id)
    this.router.navigate(['circus'])
  }

}
