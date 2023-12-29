import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherNavigation from './TeacherNavigation'

const TeacherLayout = () => {
  return (
    <div>
      <TeacherNavigation />
      <Outlet />
    </div>
  )
}

export default TeacherLayout;