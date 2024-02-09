'use client'

import React, {FC, useEffect, useState} from 'react';
import {cn, PaginationItemType, usePagination} from "@nextui-org/react";
import {ChevronIcon} from "@nextui-org/shared-icons";

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

            <div className={'flex justify-between'}>
                <div className="w-3/5">
                    <div className="w-4/5 mx-auto overflow-hidden rounded-xl shadow-lg">
                        <iframe
                            className="w-full h-96 aspect-video"
                            src={videos[currentVideo].url}
                            title={videos[currentVideo].title}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="w-4/5 mx-auto">
                        <h2 className="text-2xl font-bold mb-4">{videos[currentVideo].title}</h2>
                        <p>{videos[currentVideo].desc}</p>
                    </div>
                </div>
            </div>

            <div className="w-full text-white">
                <div className="mx-auto w-40">
                    <ul className="flex gap-2 items-center">
                        {range.map((page) => {
                            if (page === PaginationItemType.NEXT) {
                                return (
                                    <li key={page} aria-label="next page" className="w-4 h-4">
                                        <button
                                            className="w-full h-full bg-default-200 rounded-full"
                                            onClick={onNext}
                                        >
                                            <ChevronIcon className="rotate-180"/>
                                        </button>
                                    </li>
                                );
                            }

                            if (page === PaginationItemType.PREV) {
                                return (
                                    <li key={page} aria-label="previous page" className="w-4 h-4">
                                        <button
                                            className="w-full h-full bg-default-200 rounded-full"
                                            onClick={onPrevious}
                                        >
                                            <ChevronIcon/>
                                        </button>
                                    </li>
                                );
                            }

                            if (page === PaginationItemType.DOTS) {
                                return (
                                    <li key={page} className="w-4 h-4">
                                        ...
                                    </li>
                                );
                            }

                            return (
                                <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
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
