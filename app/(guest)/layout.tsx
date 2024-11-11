import Banner from '@/components/banner'
import React from 'react'

const Guestlayout = ({
    children
}:{children:React.ReactDOM}) => {
  return (
    <>
    <Banner/>
    {children}
    </>
  )
}

export default Guestlayout
