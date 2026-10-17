import rice from "../assets/rice.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-sm grid md:grid-cols-2">

        
        <div className="bg-[#fff0e2] p-10 md:p-14 flex flex-col justify-center items-center text-center">
          <img
            src={rice}
            alt="A bowl of rice"
            className="w-48 md:w-64 mb-8"
          />

          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            GOOD FOOD,
            <br />
            GOOD MOOD!
          </h1>

          <p className="font-body text-gray-600 mt-4 max-w-sm">
            Join our community to discover recipes, plan your meals, and share
            your own creations with the world.
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
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Let's make something delicious together.
          </p>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-gray-200 bg-[#f6f6f6] px-4 py-3 outline-none focus:border-[#fe8f35]"
              />
            </div>

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
                placeholder="Create a password"
                autoComplete="new-password"
                required
                minLength={8}
                className="w-full rounded-xl border border-gray-200 bg-[#f6f6f6] px-4 py-3 outline-none focus:border-[#fe8f35]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#fe8f35] py-3 font-semibold text-white transition hover:bg-[#ed7d25]"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#fe8f35] hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
