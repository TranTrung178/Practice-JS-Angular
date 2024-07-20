import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  imports: [CommonModule]
})
export class ItemListComponent {
  items: number[] = this.generateItems();

  // Phương thức tạo danh sách các phần tử ngẫu nhiên
  private generateItems(): number[] {
    const length = Math.floor(Math.random() * 12) + 4;
    return Array.from({ length }, (_, i) => i + 1);
  }

  // Phương thức lấy các phần tử hiển thị
  getVisibleItems(): number[] {
    const itemsToShow = Math.floor(this.items.length / 4) * 4;
    return this.items.slice(0, itemsToShow);
  }

  // Phương thức để làm mới danh sách các phần tử
  refreshItems(): void {
    this.items = this.generateItems();
  }
}
