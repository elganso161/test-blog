import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./Header.module.css";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/userReducer";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <header className={style.header}>
        <div className={style.headerContainer}>
          {/* <input type="text" /> */}
          <div>{email}</div>
          <button onClick={() => dispatch(removeUser)}>logOut</button>
          <div>
            <nav className={style.nav}>
              <li>
                <Link to="/">blog</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="register">register</Link>
              </li>
            </nav>
          </div>
        </div>
      </header>
    </>
  ) : (
    <>
      <header className={style.header}>
        <div className={style.headerContainer}>
          {/* <input type="text" /> */}
          <div>{email}</div>
          <div>
            <nav className={style.nav}>
              <li>
                <Link to="/">blog</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="register">register</Link>
              </li>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
