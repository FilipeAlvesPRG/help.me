import './style.css'
import { Logo } from '../Logo';


export function NavbarComponent() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="logo"><Logo /></div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item px-3">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">Support</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">Updates</a>
              </li>
            </ul>
            <div className='logout-button'><button className="btn btn-outline-primary" type="submit">Logout</button></div>
          </div>
        </div>
      </nav>
    </div>
  );
}