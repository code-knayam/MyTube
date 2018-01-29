export class Video {
    public video_id: string;
    public video_title: string;
    public video_channel: string;
    public video_views: number;
    public video_time: Date;
    public video_desc: string;
    public video_url: string;
    public video_likes: number;
    public video_dislikes: number;

    // tslint:disable-next-line:max-line-length
    constructor(video_id: string, video_title: string, video_channel: string, video_views: number, video_time: Date, video_desc: string, video_url: string, video_likes: number, video_dislikes: number) {
        this.video_id = video_id;
        this.video_title =  video_title;
        this.video_channel = video_channel;
        this.video_views = video_views;
        this.video_time = video_time;
        this.video_desc = video_desc;
        this.video_url = video_url;
        this.video_likes = video_likes;
        this.video_dislikes = video_dislikes;
    }

}
