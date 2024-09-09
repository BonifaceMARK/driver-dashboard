const Notifications = () => {
    const ticketHistory = [
      { date: "2023-08-10", description: "Fine Payment for Speeding", amount: 150, caseNo: "1234", top: "TOP5678", transactionNo: "TXN1001" },
      { date: "2023-07-20", description: "Vehicle Registration", amount: 300, caseNo: "1235", top: "TOP5679", transactionNo: "TXN1002" },
      { date: "2023-06-15", description: "Ticket for Illegal Parking", amount: 100, caseNo: "1236", top: "TOP5680", transactionNo: "TXN1003" }
    ];
  
    return (
      <div className="bg-white p-4 shadow rounded mb-4">
        <h2 className="text-lg font-semibold mb-4">Ticket History</h2>
  
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {ticketHistory.map((ticket, index) => (
              <div key={index} className="bg-gray-100 p-4 mb-4 rounded shadow border border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                    <span className="font-semibold">Date:</span>
                    <span>{ticket.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                    <span className="font-semibold">Description:</span>
                    <span>{ticket.description}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                    <span className="font-semibold">Case No.:</span>
                    <span>{ticket.caseNo}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                    <span className="font-semibold">TOP:</span>
                    <span>{ticket.top}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                    <span className="font-semibold">Transaction No.:</span>
                    <span>{ticket.transactionNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Amount:</span>
                    <span>₱{ticket.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Notifications;
  