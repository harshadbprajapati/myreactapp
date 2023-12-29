import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavigation from "./AdminNavigation";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavigation />
      <Outlet />
    </div>
  )
}

export default AdminLayout;