import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailSuggestionComponent } from './detail-suggestion/detail-suggestion.component';

const routes: Routes = [
  {path :'' , component: ListSuggestionComponent} , 
  {path : ':id' , component: DetailSuggestionComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionRoutingModule { }
