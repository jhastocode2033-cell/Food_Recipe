import ramen from "../assets/ramen.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-sm grid md:grid-cols-2">

        
        <div className="bg-[#fff0e2] p-10 md:p-14 flex flex-col justify-center items-center text-center">
          <img
            src={ramen}
            alt="A bowl of ramen"
            className="w-48 md:w-64 mb-8"
          />

          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            WELCOME
            <br />
            BACK!
          </h1>

          <p className="font-body text-gray-600 mt-4 max-w-sm">
            Your next favorite recipe is waiting. Sign in and get back to
            creating something delicious.
          </p>

          <Link
            to="/"
            className="mt-8 text-[#fe8f35] font-semibold hover:underline"
          >
            ← Back to Home
          </Link>
        </div>


        <div className="p-8 md:p-14 flex flex-col justify-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Log In
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Welcome back to your kitchen.
          </p>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-[#f6f6f6] px-4 py-3 outline-none focus:border-[#fe8f35]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-gray-200 bg-[#f6f6f6] px-4 py-3 outline-none focus:border-[#fe8f35]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#fe8f35] py-3 font-semibold text-white transition hover:bg-[#ed7d25]"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#fe8f35] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}