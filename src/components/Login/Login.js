import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h3 className="text-3xl font-bold mt-20 mb-5">Please Login</h3>
      <form>
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
          value="Login"
        />{" "}
        <br />
        <button
          onClick={signInWithGoogle}
          className="bg-black text-white px-8 py-2 font-bold rounded cursor-pointer"
        >
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
