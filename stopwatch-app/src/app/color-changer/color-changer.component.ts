import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-color-changer',
  standalone: true,
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class ColorChangerComponent {
  selectedColor: string = '';

  changeColor(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const color = target.value;
    this.selectedColor = color;
    document.body.style.backgroundColor = color;
  }

  resetColor(): void {
    this.selectedColor = '';
    document.body.style.backgroundColor = ''; 
  }
}
