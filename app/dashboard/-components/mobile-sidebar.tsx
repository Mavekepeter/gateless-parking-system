import React from 'react'
import {
    Sheet,
    SheetContent,
    
  } from "@/components/ui/sheet"
  import sidebar from '@/components/sidebar'

function Mobilesidebar({ open, setOpen} :{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}){
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className='p-0 w-[256px]'>
            <sidebar/>
        </SheetContent>
    </Sheet>
  )
}

export default Mobilesidebar
