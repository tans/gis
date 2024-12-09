
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"



export default function () {
    return <>
        <div className="flex items-center my-2">
            <div className="flex items-center ">
                <a href="https://gis.minapp.xin">
                    <img src="/img/logo.gif" className="w-8 h-8 rounded-full" />
                </a>
                <div className="mx-2 font-black">
                    Giser
                </div>
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                首页
                            </NavigationMenuLink>
                        </Link>
                        {/* <Link href="/resource" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                资源
                            </NavigationMenuLink>
                        </Link> */}
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                关于
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </div>

    </>
}