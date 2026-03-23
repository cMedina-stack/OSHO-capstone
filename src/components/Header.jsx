function Header() {
  return (
    <>
      <header className="w-full p-2 pl-6 pr-6 flex items-center place-content-between shadow">
        <div className="">
          <div>
            <h1 className="font-bold ">Camus Hazard Monitorng System</h1>
            <h5 className="text-xs">OSHO Safety Office</h5>
          </div>
        </div>
        <div className="flex gap-5">
          <ul className="flex gap-5">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Incident Reports</a>
            </li>
            <li>
              <a href="#">Data Entry</a>
            </li>
          </ul>
          <div>
            <button>Admin</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
