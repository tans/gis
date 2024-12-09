import Nav from "@/components/app/nav";
import Presale from "@/components/app/presale";


import items from "@/lib/items";
export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    let _item = null
    for (let item of items) {
        if (item.id === Number(id)) {
            _item = item
            break
        }
    }
    return <>
        <Nav></Nav>
        <div className="flex items-start">
            <div className="w-60 p-2 pr-4">
                <div className="p-2 text-xs text-gray-600">所有数据服务</div>
                {items.map((item) => {
                    return <a href={"/data/" + item.id} key={item.id} className="text-xs block font-black border rounded hover:bg-gray-200 cursor-pointer p-2 mb-2 bg-gray-50">{item.title}</a>
                })}
            </div>
            <div className="flex-1">
                <div className="font-black my-2 text-lg">{_item?.title}</div>
                <div className="bg-gray-100 rounded p-2" dangerouslySetInnerHTML={{ __html: _item?.desc.replace(/\n/g, '<br/>') }} ></div>
                {_item?.imgs.map((i) => {
                    return <img key={i} src={i} className="w-full" />
                })}
                <Presale></Presale>
            </div>
        </div>
    </>

}