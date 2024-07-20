import { Component } from '@angular/core';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { PercentageCalculatorComponent } from './percentage-calculator/percentage-calculator.component'
import { PalindromeCheckerComponent } from './palindrome-checker/palindrome-checker.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { ColorChangerComponent } from './color-changer/color-changer.component'
import { TextFormatterComponent } from './text-formatter/text-formatter.component'
import { ItemListComponent } from './item-list/item-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    StopwatchComponent,
    PercentageCalculatorComponent,
    PalindromeCheckerComponent,
    TodoListComponent,
    ColorChangerComponent,
    TextFormatterComponent,
    ItemListComponent,
  ] 
})
export class AppComponent { 
  title = 'stopwatch-app';
}
