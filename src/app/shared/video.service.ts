import { Video } from './video.model';


export class VideoService {

    videos: Video[] = [
      new Video(
         '1',
         'Video 1',
         'Channel 1',
         2000,
         new Date(2017, 10, 21),
         'Lorem Ipsum',
         'http://abs',
         320,
         120
      ),
      new Video(
         '2',
         'Video 2',
         'Channel 1',
         21000,
         new Date(2017, 10, 21),
         'Lorem Ipsum',
         'http://abs',
         320,
         120
      ),
      new Video(
         '3',
         'Video 3',
         'Channel 1',
         230000,
         new Date(2017, 10, 21),
         'Lorem Ipsum',
         'http://abs',
         320,
         120
      ),
      new Video(
         '4',
         'Video 4',
         'Channel 1',
         230,
         new Date(2017, 10, 21),
         'Lorem Ipsum',
         'http://abs',
         320,
         120
      ),
      new Video(
         '5',
         'Video 5',
         'Channel 1',
         20,
         new Date(2017, 10, 21),
         'Lorem Ipsum',
         'assets/video5.mp4',
         320,
         120
      )
    ];

    constructor() {

    }

    getVideos() {
        return this.videos.slice();
    }

    getVideo(index: string) {
      return this.videos.find(obj => obj.video_id === index);
    }

}
