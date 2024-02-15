'use client'

import React, {FC, useEffect, useState} from 'react';
import {cn, PaginationItemType, usePagination} from "@nextui-org/react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface VideoGalleryProps {
    videos: { id: string; title: string; desc: string, url: string }[];
}

export const VideoGallery: FC<VideoGalleryProps> = ({ videos }) => {

    const {activePage, range, setPage, onNext, onPrevious} = usePagination({
        total: videos.length,
        showControls: true,
    });

    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        setCurrentVideo(activePage - 1);
    }, [activePage]);

    return (
        <div className="flex flex-col gap-y-8">

            <div className={'sm:flex justify-between'}>
                <div className="sm:w-3/5 mb-8 sm:mb-0">
                    <div className="sm:w-4/5 mx-auto overflow-hidden rounded-xl shadow-lg">
                        <iframe
                            className="w-full h-96 aspect-video"
                            src={videos[currentVideo].url}
                            title={videos[currentVideo].title}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
                <div className="sm:w-2/5 sm:text-left text-center">
                    <div className="w-4/5 mx-auto">
                        <h2 className="text-2xl font-bold mb-4">{videos[currentVideo].title}</h2>
                        <p>{videos[currentVideo].desc}</p>
                    </div>
                </div>
            </div>

            <div className="w-full text-white">
                <div className="text-center">
                    <ul className="flex justify-center gap-2 items-center">
                        {range.map((page) => {
                            if (page === PaginationItemType.NEXT) {
                                return (
                                    <li key={page} aria-label="next page" className="w-10 h-10">
                                        <button
                                            className="w-full h-full bg-default-200 rounded-full flex items-center justify-center"
                                            onClick={onNext}
                                        >
                                            <FaChevronRight size="1.5em"/>
                                        </button>
                                    </li>
                                );
                            }

                            if (page === PaginationItemType.PREV) {
                                return (
                                    <li key={page} aria-label="previous page" className="w-10 h-10">
                                        <button
                                            className="w-full h-full bg-default-200 rounded-full flex items-center justify-center"
                                            onClick={onPrevious}
                                        >
                                            <FaChevronLeft size="1.5em"/>
                                        </button>
                                    </li>
                                );
                            }

                            if (page === PaginationItemType.DOTS) {
                                return (
                                    <li key={page} className="w-10 h-10">
                                        ...
                                    </li>
                                );
                            }

                            return (
                                <li key={page} aria-label={`page ${page}`} className="w-10 h-10">
                                    <button
                                        className={cn(
                                            "w-full h-full bg-default-300 rounded-full",
                                            activePage === page && "bg-yellow-400"
                                        )}
                                        onClick={() => setPage(page)}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
