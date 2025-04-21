import {Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus =  signal<'offline' | 'online' | 'unknown'>('offline');
  // private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => console.log(this.currentStatus()))
  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rdn = Math.random();
      if (rdn < 0.5) {
        this.currentStatus.set('online');
      } else if (rdn < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
