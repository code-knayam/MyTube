import { Component, OnInit } from '@angular/core';

import { VideoService } from '../shared/video.service';
import { Video } from '../shared/video.model';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoDetails: Video[] ;

  constructor(private videoService: VideoService, private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.startSpinner();
    this.videoService.getVideos().subscribe(
      (videos: Video[]) => {
        this.videoDetails = videos;
        this.spinnerService.stopSpinner();
      }
    );
  }

}
