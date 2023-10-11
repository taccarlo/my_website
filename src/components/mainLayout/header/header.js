
import {Link} from 'react-router-dom';

function Header(){
   return( 
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container px-4">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                
              </ul>
            </div>
        </nav>
        </>
      ); 
}
export default Header;