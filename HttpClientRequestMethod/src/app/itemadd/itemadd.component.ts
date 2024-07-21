import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './itemadd.component.html',
  styleUrls: ['./itemadd.component.css']
})
export class ItemAddComponent {
  newItem: string = '';

  constructor(private itemService: ItemService) { }

  addItem() {
    const item = { title: this.newItem };
    this.itemService.addItem(item).subscribe(newItem => {
      console.log('Item added:', newItem);
    });
  }
}
