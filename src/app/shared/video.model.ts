export class Video {
    public video_id: string;
    public video_title: string;
    public video_channel: string;
    public video_views: number;
    public video_time: Date;
    public video_desc: string;

    constructor(video_id: string, video_title: string, video_channel: string, video_views: number, video_time: Date, video_desc: string) {
        this.video_id = video_id;
        this.video_title =  video_title;
        this.video_channel = video_channel;
        this.video_views = video_views;
        this.video_time = video_time;
        this.video_desc = video_desc;
    }

}
