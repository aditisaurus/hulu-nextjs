import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroIcons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";


function Header() {
    return (
        <header className="" >
         <div>
          <HeaderItem title='HOME' Icon={HomeIcon} />
         </div>
             <h1>This is the header</h1>
             <Image className="object-contain" src = "https://links.papareact.com/ua6" alt=""
             width={200}
             height={100} />
        </header>
        
    )
}

export default Header
