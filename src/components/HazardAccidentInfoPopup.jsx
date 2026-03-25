function HazardAccidentInfoPopup() {
  return (
    <>
      <div className="w-full h-auto">
        <header className="mb-4">
          <h1 className="font-semibold text-lg">Building Details</h1>
          <h5 className="font-semibold text-sm text-slate-400">
            Hazard & Accidents Information
          </h5>
        </header>
        <main className="border border-gray-200 h-full w-full bg-white  rounded-xl p-5 pt-6 flex flex-col gap-7">
          <section className="flex flex-col gap-6 w-full">
            <div>
              <h1 className="font-semibold text-xl mb-2">CCS Building</h1>
              <span className="bg-red-500 p-1 rounded-lg text-white text-xs font-semibold pl-2 pr-2">
                HighRisk
              </span>
            </div>
            <div>
              <div className="w-full flex flex-col gap-5">
                <div className="w-full rounded-lg bg-red-50 p-3 text-red-500 flex place-content-between items-center">
                  <div>
                    <span className="font-semibold text-sm">
                      Current Risk Level
                    </span>
                    <h1 className="font-bold text-2xl">High</h1>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div className="w-full rounded-lg bg-slate-50 p-3 text-slate-500 flex place-content-between items-center">
                  <div>
                    <span className="font-semibold text-sm">
                      Total Incidents
                    </span>
                    <h1 className="font-bold text-2xl text-black">5</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full">
            <h1 className="font-semibold text-lg mb-5">Recent Incidents</h1>
            <ul className="flex flex-col gap-3">
              <li className="w-full p-3 border gap-4 border-gray-200 rounded-lg flex hover:bg-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-10 bg-red-100 text-red-500 rounded-lg p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                <div className="w-full">
                  <div className="flex w-full items-center place-content-between">
                    <h1 className="text-lg font-semibold">Chemical</h1>
                    <span className="p-1 pl-2.5 pr-2.5 font-semibold text-xs text-white bg-red-500 rounded-lg">
                      High
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-slate-500">
                    Chemical spill in Laboratoty 204
                  </span>
                  <h4 className="text-sm text-slate-500">2026-03-10</h4>
                </div>
              </li>
              <li className="w-full p-3 border gap-4 border-gray-200 rounded-lg flex hover:bg-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-10 bg-yellow-100 text-yellow-500 rounded-lg p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                <div className="w-full">
                  <div className="flex w-full items-center place-content-between">
                    <h1 className="text-lg font-semibold">Chemical</h1>
                    <span className="p-1 pl-2.5 pr-2.5 font-semibold text-xs text-white bg-yellow-500 rounded-lg">
                      Medium
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-slate-500">
                    Chemical spill in Laboratoty 204
                  </span>
                  <h4 className="text-sm text-slate-500">2026-03-10</h4>
                </div>
              </li>
              <li className="w-full p-3 border gap-4 border-gray-200 rounded-lg flex hover:bg-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-10 bg-green-100 text-green-500 rounded-lg p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                <div className="w-full">
                  <div className="flex w-full items-center place-content-between">
                    <h1 className="text-lg font-semibold">Chemical</h1>
                    <span className="p-1 pl-2.5 pr-2.5 font-semibold text-xs text-white bg-green-500 rounded-lg">
                      Low
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-slate-500">
                    Chemical spill in Laboratoty 204
                  </span>
                  <h4 className="text-sm text-slate-500">2026-03-10</h4>
                </div>
              </li>
              <li className="w-full p-3 border gap-4 border-gray-200 rounded-lg flex hover:bg-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-10 bg-green-100 text-green-500 rounded-lg p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                <div className="w-full">
                  <div className="flex w-full items-center place-content-between">
                    <h1 className="text-lg font-semibold">Chemical</h1>
                    <span className="p-1 pl-2.5 pr-2.5 font-semibold text-xs text-white bg-green-500 rounded-lg">
                      Low
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-slate-500">
                    Chemical spill in Laboratoty 204
                  </span>
                  <h4 className="text-sm text-slate-500">2026-03-10</h4>
                </div>
              </li>
            </ul>
          </section>
          <footer className="w-full">
            <div>
              <h1 className="font-bold text-lg mb-3">Incident Types</h1>
              <ul className="flex flex-col gap-2">
                <li className="flex place-content-between">
                  <h2 className="flex gap-2 text-slate-500 font-semibold items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                      />
                    </svg>
                    Chemical
                  </h2>
                  <span className="font-bold ">3</span>
                </li>
                <li className="flex place-content-between">
                  <h2 className="flex gap-2 text-slate-500 font-semibold items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                    Slip Fall
                  </h2>
                  <span className="font-bold ">1</span>
                </li>
                <li className="flex place-content-between">
                  <h2 className="flex gap-2 text-slate-500 font-semibold items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                    Fire
                  </h2>
                  <span className="font-bold ">1</span>
                </li>
              </ul>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold p-3 rounded-lg mt-6 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              Generate Report
            </button>
          </footer>
        </main>
      </div>
    </>
  );
}

export default HazardAccidentInfoPopup;
