import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import StudentLogin from './StudentLogin';

function App() {
  return (
    <Router>
      <div className="marquee">
        <p className="marquee-text">
          Welcome to Engineering College India! | Admissions Open for 2025 | Explore new Courses
        </p>
      </div>
      <nav>
        <header className="header">
          <img src="/College image.jpg" alt="College Logo" className="logo" />
          <h1 className="college-name">Engineering and Technology India</h1>
        </header>
        <ul className="navbar">
          <li className="dropdown">
            <Link to="#">About Us</Link>
            <div className="dropdown-content">
              <Link to="/about-college">About College</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="#">Academics</Link>
            <div className="dropdown-content">
              <Link to="/academics/computer-science">Computer Science</Link>
              <Link to="/academics/information">Information Science</Link>
              <Link to="/academics/mechanical">Mechanical Engineering</Link>
              <Link to="/academics/aiml">AIML</Link>
              <Link to="/academics/data-science">Data Science</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="#">Facilities</Link>
            <div className="dropdown-content">
              <Link to="/facilities/library">Library</Link>
              <Link to="/facilities/classes">Classes</Link>
              <Link to="/facilities/grounds">Grounds</Link>
              <Link to="/facilities/staff">Staff</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="#">Logins</Link>
            <div className="dropdown-content">
              <Link to="/login/adminlogin">Admin Login</Link>
              <Link to="/login/studentlogin">Student Login</Link>
            </div>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login/adminlogin" element={<AdminLogin />} />
        <Route path="/login/studentlogin" element={<StudentLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
