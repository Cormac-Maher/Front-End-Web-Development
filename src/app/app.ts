import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentA} from './component-a/component-a'      // importing components
import {ComponentB} from './component-b/component-b'
// importing components A and B
@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, ComponentA, ComponentB],    // setting imports in component class
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {            // setting app class with name and age variables
  name: string = "Cormac";
  age: number = 20;
}
