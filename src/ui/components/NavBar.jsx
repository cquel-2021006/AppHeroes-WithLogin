import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { DcPage } from '../../heroes';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const rol = localStorage.getItem('rol');
  const nombre = localStorage.getItem('nombre');

  const onLogOut = () => {
    logout();
    navigate('/login', {
      replace: true
    });
  };

  return (
    <>


      <nav className="navbar navbar-expand-sm navbar-dark bg-dark padding-2" >
        <div className='container' >
          <span className="nav-item nav-link text-secondary mr-auto" >
            Rol: {rol}
          </span>

        </div>

        <div className='container' style={{ textAlign: "center"}}>
          <div className="navbar-collapse">
            <div className="navbar-nav">

              <Link className="navbar-brand" to="/">
                Asociaciones
              </Link>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/marvel">
                Marvel
              </NavLink>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/dc">
                DC
              </NavLink>

              <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/search">
                Search
              </NavLink>

              {(user.rol === 'ADMIN_ROLE') ?
                <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/admin">
                  Admin
                </NavLink> : ""
              }

              {
                (user.rol === "USER_ROLE")
                  ? <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/user">
                    User
                  </NavLink>
                  :
                  ""
              }

            </div>

          </div>
        </div>


        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link" style={{ color: "#60A6FF" }}>
              <h4>
                <span>{nombre}</span>
              </h4>

            </span>
            <button className="nav-item nav-link btn" onClick={onLogOut}>
              Log out
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};