import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
export interface MenuItem {
    id: string,
    href: string,
    title: string
}

function sidebar(){
  return (
    <div className="flex flex-col z-10 w-[256px] bg-gray-800 text-white h-full overflow-auto p-4">
        <h1 className='text-2xl pl-4'>
            <Link href="/dashboard">Dashboard</Link>
        </h1>
    </div>
  )
}

export default sidebar