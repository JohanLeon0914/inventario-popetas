import { Injectable } from '@angular/core';

//modulos para manejar la DB de firestore
import { AngularFirestore } from '@angular/fire/compat/firestore'

//importamos nuestra clase modelo
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  //metodos para el CRUD
  getPosts() {
    return this.angularFirestore
            .collection("posts")
            .snapshotChanges()
  }

  getPostById(id: string) {
    return this.angularFirestore
            .collection("posts")
            .doc(id)
            .valueChanges()
  }

  createPost(post: Post) {
    return new Promise<any> ( (resolve, reject) => {
      this.angularFirestore
        .collection("posts")
        .add(post)
        .then((response) => {
          console.log(response)
        },
        (error) =>{
          reject(error)
        })
    })
  }

  updatePost(post: Post, id: string) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .update({
        title: post.title,
        content: post.content,
        author: post.author
      })
  }

  deletePost(post: Post) {
    return this.angularFirestore
      .collection("posts")
      .doc(post.id)
      .delete()
  }

}
