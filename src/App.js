import Nav from "./Nav";
function App() {
  return (
    <div className="bg-[url('../public/images/bg2.jpg')] w-full h-screen bg-no-repeat bg-cover">
      <Nav />
      <div className="flex flex-row justify-end gap-6 p-4 mr-8 text-white text-lg  font-roboto items-center">
        <p>Gmail</p>
        <p>Images</p>
        <svg
          className="bg-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-grid-3x3-gap-fill"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
            fill="white"
          ></path>{" "}
        </svg>
        <svg
          className="bg-gray-400 rounded-full p-1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-users"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center h-[500px] text-white text-[80px] font-semibold font-roboto">
        <div>Google</div>
        <form className="w-[60%] md:w-[500px]">
          <div class="relative block rounded-full  md:w-full h-12 pl-10 text-black border border-gray-300  bg-gray-50 placeholder-black-50 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block rounded-full w-full h-12 text-sm border-0"
              placeholder="Search Google or type a URL"
            ></input>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="absolute right-2.5 bottom-2.5 rounded-lg h-[30px] w-[30px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="google-voice-search"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 3">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="#fff"
                      d="M1 12C1 4 4 1 12 1s11 3 11 11-3 11-11 11S1 20 1 12"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M12 14.52A2.54 2.54 0 0 0 14.57 12V6.12a2.58 2.58 0 0 0-5.15 0V12A2.55 2.55 0 0 0 12 14.52Z"
                    ></path>
                    <path
                      fill="#34a853"
                      d="M11.15 17.81h1.71v2.59h-1.71Z"
                    ></path>
                    <path
                      fill="#f4b400"
                      d="M7.72 12H6a5.81 5.81 0 0 0 1.76 4.16L9 15a4.16 4.16 0 0 1-1.28-3Z"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="M12 16.2A4.33 4.33 0 0 1 9 15l-1.24 1.15A6 6 0 0 0 12 17.88 5.93 5.93 0 0 0 18 12h-1.72A4.24 4.24 0 0 1 12 16.2Z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;