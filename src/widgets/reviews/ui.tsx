import React from "react";
import s from "./styles.module.scss";
import {VideoGallery} from "@/features/videoGallery";

const videos = [
    {
        id: '1', title: 'video_1', desc: 'some description', url: 'video.webm'
    },
    {
        id: '2', title: 'video_2', desc: 'some description', url: 'video.webm'
    },
    {
        id: '3', title: 'video_3', desc: 'some description', url: 'video.webm'
    },
]

export const Reviews = () => {
    return (
        <section className={s.wrapper}>
            <div className="main-container">
                <VideoGallery videos={videos}/>
            </div>
        </section>
    );
}
