import { Link } from "react-router-dom";
import "../App.css";
function Header({ list }) {
  return (
    <>
      <header className="header">
        <h1>
          <Link to="/" className="title-link-to-home">
            NC NEWS
          </Link>
        </h1>
        <h2><Link to='/topics' className='link-to-topics'>Topics</Link></h2>
      </header>
    </>
  );
}

export default Header;
