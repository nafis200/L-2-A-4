const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-md
      xl:-mt-28 lg:-mt-16
      "
      >
        <h2 className="text-center text-2xl font-bold text-gray-700">
          Sign Up
        </h2>
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 shadow-sm hover:bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 shadow-sm hover:bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              autoComplete="current-password"
              required
            />
          </div>

          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ms-2 text-sm text-gray-600">Remember me</span>
          </label>

          <div className="text-right text-sm">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              Forgot your password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-8 flex justify-center text-center">
          <p className="text-sm font-bold text-gray-600">
            For query, please call:{" "}
            <span className="font-semibold text-indigo-600">
              013 12 xxx xxx
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
