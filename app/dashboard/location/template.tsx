import React from 'react'
import AddLocationButton from './-components/addLocation-button'

function LocactionsTemplate ({children}:
  {children:React.ReactNode}
){
  return (
    <div>
      <AddLocationButton/>
      {children} 
    </div>
  )
}

export default LocactionsTemplate
