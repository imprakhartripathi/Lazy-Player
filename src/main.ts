import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { VideoPlayerComponent } from './app/video-player/video-player.component';

bootstrapApplication(AppComponent).catch(err => console.error(err));