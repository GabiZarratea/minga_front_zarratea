export default function SignUp() {
    return (
      <>
        <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-[#f7f7f7]">
          
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#333]">
                Register an account
              </h2>
              </div>
              <div className="w-1/2 min-h-1/2 p-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="caret-indigo-600 space-y-6" action="#" method="POST">
  
                  <div className="h-fit rounded-lg w-full flex flex-col border border-gray-300 shadow-sm">
                      <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="px-4 placeholder:text-base outline-none rounded-t-lg block w-full rounded-none placeholder:px-28 border-none py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Full name"
                      />
                      <hr className="border-gray-200" />
                      <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="px-4 placeholder:text-base outline-none block w-full rounded-none placeholder:px-28 border-none py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Email address"
                      />
                      <hr className="border-gray-200" />
                      <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Password"
                      className="px-4 placeholder:text-base outline-none rounded-b-lg block w-full rounded-none border-none py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                  </div>
                  <p className="mt-10 text-center text-sm text-gray-500">
                  Do you already have an account?{" "}
                  <a
                  to={"/signin"}
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                  log in
                  </a>
              </p>
                  <div>
                  <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-gradient-to-t from-black to-[#444]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                      Sign up
                  </button>
                  </div>
              </form>
              </div>
          </div>
        </div>
      </>
    );
  }