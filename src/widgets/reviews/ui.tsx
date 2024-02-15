import React from "react";
import s from "./styles.module.scss";
import {VideoGallery} from "@/features/videoGallery";
import {Link} from "@nextui-org/react";

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
                <div className="flex text-center sm:text-left justify-between mb-10">
                    <h1 className="text-3xl">Отзывы клиентов о ремонте и примеры работ</h1>
                    <Link href={'#'} className="hidden sm:block underline text-xl">Смотреть все работы</Link>
                </div>
                <VideoGallery videos={videos}/>
            </div>
        </section>
    );
}
