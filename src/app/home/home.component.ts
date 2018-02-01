import { Component, OnInit } from '@angular/core';

import { VideoService } from '../shared/video.service';
import { Video } from '../shared/video.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoDetails: Video[] ;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoDetails = this.videoService.getVideos();
  }

  setVideos() {
    this.videoService.setVideos().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
