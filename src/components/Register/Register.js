import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold mt-20 mb-5">Please Register</h3>
      <form>
        <input
          className="border my-2 px-3 py-2 w-96"
          type="text"
          placeholder="Full Name"
        />{" "}
        <br />
        <input
          className="border my-2 px-3 py-2 w-96"
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          className="border my-2 px-3 py-2 w-96"
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          className="my-4 bg-indigo-600 text-white px-8 py-2 font-bold rounded cursor-pointer"
          type="submit"
          value="Register"
        />
        <br />
        <button className="bg-black text-white px-8 py-2 font-bold rounded cursor-pointer">
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
