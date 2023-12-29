import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavigation = () => {
  return (
    <>
      <h2>Admin's Dashboard</h2>
      <nav>
        <Link to={"/admin/overview"}>Overview</Link>
        <Link to={"/admin/add-staff"}>Add Staff</Link>
        <Link to={"/admin/delete-staff"}>Delete Staff</Link>
      </nav>
    </>
  );
}

export default AdminNavigation;


