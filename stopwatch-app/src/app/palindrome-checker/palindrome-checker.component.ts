import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-palindrome-checker',
  standalone: true,
  templateUrl: './palindrome-checker.component.html',
  styleUrls: ['./palindrome-checker.component.css'],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PalindromeCheckerComponent {
  inputString: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome(): void {
    const cleanedString = this.cleanString(this.inputString);
    this.isPalindrome = this.isPalindromeString(cleanedString);
  }

  private cleanString(str: string): string {
    // Chuyển chuỗi về chữ thường và loại bỏ khoảng trắng và ký tự không phải chữ cái
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  }

  clear(): void {
    this.inputString = '';
    this.isPalindrome = null;
  }

  private isPalindromeString(str: string): boolean {
    return str === str.split('').reverse().join('');
  }
}
