import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularFirestore: AngularFirestore) { }

  getProducts() {
    return this.angularFirestore
            .collection("products")
            .snapshotChanges()
  }

  getProductsCircus() {
    return this.angularFirestore
            .collection("productsCircus")
            .snapshotChanges()
  }

  getTotal(listProducts: Product[]){
    let total = 0;
    listProducts.map((p) => {
      total += p.unitCost;
    })
    return total
  }

  getProductById(id: string) {
    return this.angularFirestore
            .collection("products")
            .doc(id)
            .valueChanges()
  }

  getProductCircusById(id: string) {
    return this.angularFirestore
            .collection("productsCircus")
            .doc(id)
            .valueChanges()
  }

  createProduct(product: Product) {
    return new Promise<any> ( (resolve, reject) => {
      this.angularFirestore
        .collection("products")
        .add(product)
        .then((response) => {
          console.log(response)
        },
        (error) =>{
          reject(error)
        })
    })
  }

  
  createProductCircus(product: Product) {
    return new Promise<any> ( (resolve, reject) => {
      this.angularFirestore
        .collection("productsCircus")
        .add(product)
        .then((response) => {
          console.log(response)
        },
        (error) =>{
          reject(error)
        })
    })
  }

  updateProduct(product: Product, id: string) {
    return this.angularFirestore
      .collection("products")
      .doc(id)
      .update({
        name: product.name,
        amount: product.amount,
        salePrice: product.salePrice,
        unitCost: product.unitCost
      })
  }

  updateProductCircus(product: Product, id: string) {
    return this.angularFirestore
      .collection("productsCircus")
      .doc(id)
      .update({
        name: product.name,
        amount: product.amount,
        salePrice: product.salePrice,
        unitCost: product.unitCost
      })
  }

  deleteProduct(products: Product) {
    return this.angularFirestore
      .collection("products")
      .doc(products.id)
      .delete()
  }

  deleteProductCircus(products: Product) {
    return this.angularFirestore
      .collection("productsCircus")
      .doc(products.id)
      .delete()
  }

}
