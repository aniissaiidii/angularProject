import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string ="welcome to 4BI8"
  onButtonClick(){
    alert("Button Clicked!")
  }

}