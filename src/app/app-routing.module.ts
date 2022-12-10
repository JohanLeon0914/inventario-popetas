import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditCircusComponent } from './components/edit-circus/edit-circus.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowCircusComponent } from './components/show-circus/show-circus.component';
import { ShowComponent } from './components/show/show.component';
import { CreateCircusComponent } from './components/create-circus/create-circus.component'

const routes: Routes = [
  { path: '', component: ShowComponent },
  { path: 'circus', component: ShowCircusComponent },
  { path: 'create', component: CreateComponent },
  { path: 'createCircus', component:  CreateCircusComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: 'editCircus/:id', component: EditCircusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
