import React from 'react'
import Link from "next/link";
import {cn} from "@/lib/utils";
import {SquareDashedMousePointerIcon} from "lucide-react";

function Logo({
    fontSize = "2xl",
    iconSize = 20,
              }:{
    fontSize?: string;
    iconSize?: number;
}) {
    return (
       <Link href="/"
       className={cn(
           "text-2xl font-extrabold flex items-center gap-2", fontSize)}
       >
           <div className={`rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 p-2 `}>
               <SquareDashedMousePointerIcon size={iconSize}  className={`stroke-white`}/>

           </div>
           <div>
               <span className={`bg-gradient-to-r from-violet-600 to-violet-700  bg-clip-text text-transparent`}>
                   E-Lib
               </span>
               <span className={`text-stone-700 dark:text-stone-300`}>
                   rary
               </span>
           </div>

       </Link>
    )
}
export default Logo