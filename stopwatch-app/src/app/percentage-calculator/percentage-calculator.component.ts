import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-percentage-calculator',
  standalone: true,
  templateUrl: './percentage-calculator.component.html',
  styleUrls: ['./percentage-calculator.component.css'],
  imports: [CommonModule]
})

export class PercentageCalculatorComponent {
  numberA: number = 0;
  numberB: number = 0;
  percentage: number | null = null;

  generateNumbers(): void {
    this.numberA = this.getRandomNumber(100000, 999999); // 6 chữ số
    this.numberB = this.getRandomNumber(10, 999); // 2-3 chữ số

    if (this.numberB !== 0) {
      this.percentage = parseFloat((this.numberA / this.numberB).toFixed(2));
    } else {
      this.percentage = null; // Không chia cho 0
    }
  }

  clear(): void {
    this.numberA = 0;
    this.numberB = 0;
    this.percentage = null;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
