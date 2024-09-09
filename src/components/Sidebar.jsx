const Sidebar = () => {
    return (
      <div className="w-64 h-full bg-gray-800 text-white">
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
  