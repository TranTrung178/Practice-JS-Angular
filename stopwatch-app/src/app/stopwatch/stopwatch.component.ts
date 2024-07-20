import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnDestroy {
  private timerId: any;
  private elapsedSeconds: number = 0;
  public displayTime: string = '12:00:00 AM';

  constructor() {
    this.updateDisplay();
  }

  start(): void {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.elapsedSeconds++;
        this.updateDisplay();
      }, 1000);
    }
  }

  stop(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset(): void {
    this.stop();
    this.elapsedSeconds = 0;
    this.updateDisplay();
  }

  private updateDisplay(): void {
    const totalSeconds = this.elapsedSeconds;
    const hours24 = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Convert to 12-hour format
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12
    const ampm = hours24 < 12 || hours24 === 24 ? 'AM' : 'PM';

    this.displayTime = [
      hours12.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':') + ' ' + ampm;
  }

  ngOnDestroy(): void { 
    this.stop();
  }
}
  