
import BottomNav from '@/components/navigations/BottomNav'
import Navbar  from '@/components/navigations/Navbar'
import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
      <BottomNav />
    </div>
  )
}
