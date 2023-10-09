import '../../../style/style.css';
import packageJson from '../../../../package.json';
import {Link} from 'react-router-dom';
function Header(){
    return( 
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
              <p className="m-0 text-white">{packageJson.name}</p>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              </ul>
            </div>
        </nav>

        </>
      ); 
}
export default Header;