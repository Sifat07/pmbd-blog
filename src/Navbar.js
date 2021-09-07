import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Json Placeholder Posts</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#1ca862',
          borderRadius: '8px' 
        }}>New Post</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;