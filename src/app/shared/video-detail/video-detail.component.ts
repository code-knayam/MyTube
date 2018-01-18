import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../shared/video.model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() videoDetail: Video;

  constructor() { }

  ngOnInit() {
  }

}
