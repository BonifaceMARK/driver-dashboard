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
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-100 lg:ml-100 xl:ml-100">
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
