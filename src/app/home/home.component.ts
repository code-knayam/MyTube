import { Component, OnInit } from '@angular/core';

import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoSections ;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoSections = this.videoService.getVideos();
  }

}
