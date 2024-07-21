import { Component } from '@angular/core';
import { ItemListComponent } from './itemlist/itemlist.component';
import { ItemAddComponent } from './itemadd/itemadd.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent, ItemAddComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClient Example';
}