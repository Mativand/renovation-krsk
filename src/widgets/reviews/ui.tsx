import React from "react";
import s from "./styles.module.scss";
import {VideoGallery} from "@/features/videoGallery";
import {Link} from "@nextui-org/react";
import {BlockTitle} from "@/shared/components/blockTitle";

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

const title: string = 'Отзывы клиентов о ремонте и примеры работ';

export const Reviews = () => {
    return (
        <section className={s.wrapper}>
            <div className="main-container">
                <div className="flex justify-between mb-10">
                    <BlockTitle text={title}/>
                    <Link href={'#'} className="hidden sm:block underline text-xl">Смотреть все работы</Link>
                </div>
                <VideoGallery videos={videos}/>
            </div>
        </section>
    );
}
