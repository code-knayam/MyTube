import { Video } from './video.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

    // videos: Video[] = [
    //   new Video(
    //      '1',
    //      'Video 1',
    //      'Channel 1',
    //      2000,
    //      new Date(2017, 10, 21),
    //      'Lorem Ipsum',
    //      'http://abs',
    //      320,
    //      120
    //   ),
    //   new Video(
    //      '2',
    //      'Video 2',
    //      'Channel 1',
    //      21000,
    //      new Date(2017, 10, 21),
    //      'Lorem Ipsum',
    //      'http://abs',
    //      320,
    //      120
    //   ),
    //   new Video(
    //      '3',
    //      'Video 3',
    //      'Channel 1',
    //      230000,
    //      new Date(2017, 10, 21),
    //      'Lorem Ipsum',
    //      'http://abs',
    //      320,
    //      120
    //   ),
    //   new Video(
    //      '4',
    //      'Video 4',
    //      'Channel 1',
    //      230,
    //      new Date(2017, 10, 21),
    //      'Lorem Ipsum',
    //      'http://abs',
    //      320,
    //      120
    //   ),
    //   new Video(
    //      '5',
    //      'Video 5',
    //      'Channel 1',
    //      20,
    //      new Date(2017, 10, 21),
    //      'Lorem Ipsum',
    //      'assets/video5.mp4',
    //      320,
    //      120
    //   )
    // ];

    videos: Video[];

    constructor(private httpClient: HttpClient) {}

    getVideos() {
        return this.videos.slice();
    }

    getVideo(index: string) {
      return this.videos.find(obj => obj.video_id === index);
    }

    likeVideo(index) {
      this.videos.find(obj => obj.video_id === index).video_likes++;
    }

    unlikeVideo(index) {
      this.videos.find(obj => obj.video_id === index).video_dislikes++;
    }

    setVideos() {
      return this.httpClient.put('https://mytube-117fc.firebaseio.com/videos.json', this.videos);
    }

    fetchVideos() {
      return this.httpClient.get<Video[]>('https://mytube-117fc.firebaseio.com/videos.json')
      .subscribe(
        (videos: Video[]) => {
          this.videos = videos;
        }
      );
    }

}
