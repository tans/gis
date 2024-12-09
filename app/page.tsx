import Banner from "@/components/app/banner";
import Nav from "@/components/app/nav";
import { Button } from "@/components/ui/button";

import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

import items from "@/lib/items"
export default function Home() {
  return (
    <>
      <Nav></Nav>

      <Banner></Banner>
      <div>

        {items.map((item) => {
          return <a href={"/data/" + item.id} key={item.id} className="block flex items-center shadow p-2 my-2 border rounded ">
            <div className="w-32">
              <AspectRatio ratio={1} className="bg-muted ">
                <Image
                  src={item.imgs[0]}
                  alt="Photo by Drew Beamer"
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div className="flex-1 p-2 ">

              <div className="font-black">
                {item.title}
              </div>
              <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br/>') }}>

              </div>
            </div>
          </a>
        })}
      </div>
    </>
  );
}
