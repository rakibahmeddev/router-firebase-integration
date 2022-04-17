import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span className="text-white mr-2">
          {user?.displayName && user.displayName}
        </span>
        {user?.uid ? (
          <button
            onClick={handleSignOut}
            className="bg-black text-white px-3 py-2 font-bold rounded"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
