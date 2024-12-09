'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



export default function () {
    return <>
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <a href="/data">
                        <img
                            src="/img/banner.jpg"
                            className="rounded w-full"
                            style={{ height: "33vw", maxHeight: '300px' }}
                        />
                    </a>
                </CarouselItem>
                <CarouselItem>
                    <a href="/about">
                        <img
                            src="/img/flow.png"
                            className="rounded w-full"
                            style={{ height: "33vw", maxHeight: '300px' }}
                        />
                    </a>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </>
}