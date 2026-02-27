import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './listcomponent/listcomponent';    // imported list component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent],      // imported list component
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count:number = 0;
  hide:boolean = true;

  onButtonClick(){                    // method for mutton clicked
    alert("Button was clicked");
    this.count++;
  }

  onDoubleClick(){                 // method for unhiding text on double click
    if(this.hide === true){
      this.hide = false;
    } else{
      this.hide = true;
    } 
  }  
}
