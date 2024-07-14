import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class VideoPlayerComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  showDialog = true;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const fileURL = URL.createObjectURL(file);
      this.videoPlayer.nativeElement.src = fileURL;
      this.showDialog = false;
      this.videoPlayer.nativeElement.play();
    }
  }

  changeMovie(): void {
    this.showDialog = true;
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.src = '';
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const video = this.videoPlayer.nativeElement;
    switch (event.key) {
      case ' ':
      case 'k':
        video.paused ? video.play() : video.pause();
        break;
      case 'j':
        video.currentTime -= 10;
        break;
      case 'l':
        video.currentTime += 10;
        break;
      case 'ArrowLeft':
        video.currentTime -= 5;
        break;
      case 'ArrowRight':
        video.currentTime += 5;
        break;
      case 'm':
        video.muted = !video.muted;
        break;
      case 'ArrowUp':
        video.volume = Math.min(video.volume + 0.1, 1);
        break;
      case 'ArrowDown':
        video.volume = Math.max(video.volume - 0.1, 0);
        break;
      case '0':
        video.currentTime = 0;
        break;
    }
  }
}
