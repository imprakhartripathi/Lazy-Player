import { Component } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';

@Component({
  selector: 'app-root',
  template: '<app-video-player></app-video-player>',
  standalone: true,
  imports: [VideoPlayerComponent]
})
export class AppComponent {}
