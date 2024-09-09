const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white h-full w-64 md:w-48 lg:w-64 xl:w-80 fixed top-0 left-0">
        <div className="p-4 text-2xl font-bold">Driver Dashboard</div>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-700">Profile</li>
            <li className="py-2 px-4 hover:bg-gray-700">Settings</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  