import React from 'react'
import SidebarLayout from './-components/sidebar-layout'

function DashboardLayout({
    children
}:{
    children:React.ReactNode
}) {
  return (
    <SidebarLayout>{children}</SidebarLayout>
  )
}

export default DashboardLayout
