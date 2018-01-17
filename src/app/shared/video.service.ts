

export class VideoService {

    videos = [
        {
          'section_title': 'Most Watched',
          'section_videoDetails': [
            {
              video_title: 'Video 1',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 2',
              video_channel: 'Channel 1',
              video_views: '2.1M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 3',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 4',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 5',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            }
          ]
        },
        {
          'section_title': 'Recently Added',
          'section_videoDetails': [
            {
              video_title: 'Video 1',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 2',
              video_channel: 'Channel 1',
              video_views: '2.1M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 3',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 4',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            },
            {
              video_title: 'Video 5',
              video_channel: 'Channel 1',
              video_views: '2.3M',
              video_time: '3 Months ago'
            }
          ]
        }
      ];

    constructor() {

    }

    getVideos() {
        return this.videos.slice();
    }

}
