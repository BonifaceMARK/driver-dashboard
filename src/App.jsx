import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import Notifications from './components/Notifications';
import Status from './components/Status';
import DriverProfile from './components/DriverProfile';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-64 md:w-72 lg:w-80 xl:w-96 bg-gray-800 text-white" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 p-4">
          {/* Dashboard Content */}
          <DashboardContent />

          {/* Driver Profile, Status, and Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DriverProfile />
            <Status />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
