import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { FormsModule } from '@angular/forms';
import { DetailSuggestionComponent } from './detail-suggestion/detail-suggestion.component';


@NgModule({
  declarations: [
    ListSuggestionComponent,
    DetailSuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionRoutingModule, 
    FormsModule
  ]
})
export class SuggestionModule { }
