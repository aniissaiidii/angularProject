import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './suggestion/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthUserComponent } from './auth-user/auth-user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path :'' , redirectTo : 'home' , pathMatch : 'full'},   
  { path: 'product', component: ProductComponent },
  { path: 'UserForm', component: AuthUserComponent},
  {path : 'suggestion' , loadChildren : () => import('./suggestion/suggestion.module').then(m => m.SuggestionModule)}, //lazyloading
  
 //{ path : 'suggestion' , component: ListSuggestionComponent},
  {path : '**' , component: NotFoundComponent }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
