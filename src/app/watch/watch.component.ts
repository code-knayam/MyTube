import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../shared/video.model';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  videoDetail: Video;
  id: string;

  constructor(private route: ActivatedRoute,
              private videoService: VideoService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.id = params['v'];
        this.videoDetail = this.videoService.getVideo(this.id);
        console.log(this.videoDetail);
      }
    );
  }

}
