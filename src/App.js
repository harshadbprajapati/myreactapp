import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TeacherLayout from "./components/TeacherLayout";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<div>Teacher Overview</div>}></Route>
            <Route
              path="/teacher/subjects"
              element={<div>Teacher Subjects</div>}
            ></Route>
            <Route
              path="/teacher/lectures"
              element={<div>Teacher Lectures</div>}
            ></Route>
            <Route path="/teacher/plan" element={<div>Teacher Plan</div>}></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<div>Admin Overview</div>}></Route>
            <Route path="/admin/add-staff" element={<div>Add Staff</div>}></Route>
            <Route
              path="/admin/delete-staff"
              element={<div>Delete Staff</div>}
            ></Route>
          </Route>
          <Route path="/*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


