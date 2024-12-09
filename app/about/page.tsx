import Banner from "@/components/app/banner";
import Nav from "@/components/app/nav";

export default function () {

    return <>
        <Nav></Nav>
        <Banner></Banner>
        <div className="my-2 font-black text-lg">关于我们</div>

        <div className="flex items-center ">
            <div className="w-28"> GITHUB:</div> <div>未开源</div></div>

        <div className="flex items-center"><div className="w-28">  WEIXIN:</div><div>tianshe00</div> </div>
        <div className="flex items-center">
            <div className="w-28">
                公众号: </div>
        </div>
        <div className="flex items-center">
            <div className="w-28">
                TAOBAO:  </div>
            <a className="underline text-blue-800" href="https://shop497662817.taobao.com/?spm=pc_detail.29232929/evo365560b447259.shop_block.dshopinfo.47f67dd6tV0wcM" >GISer科研数据店</a></div>
    </>
}