import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-formatter',
  standalone: true,
  templateUrl: './text-formatter.component.html',
  styleUrls: ['./text-formatter.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TextFormatterComponent {
  inputText: string = '';
  formattedText: string = '';

  formatText(): void {
    this.formattedText = this.cleanText(this.inputText);
  }

  private cleanText(text: string): string {
    // Thay thế nhiều khoảng trắng bằng một khoảng trắng
    let cleanedText = text.replace(/\s+/g, ' ').trim();

    // Định dạng chữ cái đầu tiên sau dấu chấm và giữ lại dấu chấm
    cleanedText = cleanedText.replace(/(\. *)([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase());

    // Định dạng chữ cái đầu tiên của chuỗi nếu có
    cleanedText = cleanedText.charAt(0).toUpperCase() + cleanedText.slice(1);

    return cleanedText;
  

  }

}
