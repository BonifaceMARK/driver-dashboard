import boniImage from '../assets/boni.jpg'; // Correct path

const DriverProfile = () => {
  const driver = {
    name: "Mark Luis",
    status: "Active",
    licenseRestrictions: "Restriction A, B, C",
    plateNumber: "ABC1234",
    vehicles: [
      { model: "Toyota Camry", year: 2020 },
      { model: "Honda Civic", year: 2018 }
    ],
    violations: [
      { id: 1, type: "Speeding", fine: 150, status: "Admitted" },
      { id: 2, type: "Illegal Parking", fine: 100, status: "Contested" },
      { id: 3, type: "Running a Red Light", fine: 200, status: "Admitted" }
    ],
    transactionHistory: [
      { date: "2023-08-10", description: "Fine Payment for Speeding", amount: 150 },
      { date: "2023-07-20", description: "Vehicle Registration", amount: 300 },
    ]
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
      {/* Profile Information */}
      <div className="flex items-center mb-6 border-b border-gray-200 pb-4">
        <img src={boniImage} alt="Boni" className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{driver.name}</h2>
          <p className="text-gray-600">Status: <span className={`font-semibold ₱{driver.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{driver.status}</span></p>
          <p className="text-gray-600">License Restrictions: {driver.licenseRestrictions}</p>
          <p className="text-gray-600">Plate Number: {driver.plateNumber}</p>
        </div>
      </div>

      {/* Vehicles Possessed */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Vehicles Owned</h3>
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b">Model</th>
              <th className="p-2 border-b">Year</th>
            </tr>
          </thead>
          <tbody>
            {driver.vehicles.map((vehicle, index) => (
              <tr key={index}>
                <td className="p-2 border-b">{vehicle.model}</td>
                <td className="p-2 border-b">{vehicle.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Violation Counts */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Violations</h3>
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b">Type</th>
              <th className="p-2 border-b">Fine</th>
              <th className="p-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {driver.violations.map((violation) => (
              <tr key={violation.id}>
                <td className="p-2 border-b">{violation.type}</td>
                <td className="p-2 border-b">₱{violation.fine}</td>
                <td className="p-2 border-b">{violation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Transaction History</h3>
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b">Date</th>
              <th className="p-2 border-b">Description</th>
              <th className="p-2 border-b">Amount</th>
            </tr>
          </thead>
          <tbody>
            {driver.transactionHistory.map((transaction, index) => (
              <tr key={index}>
                <td className="p-2 border-b">{transaction.date}</td>
                <td className="p-2 border-b">{transaction.description}</td>
                <td className="p-2 border-b">₱{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverProfile;
