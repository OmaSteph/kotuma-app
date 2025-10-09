import { MOCK_CASES } from "../data/mockData";
import { useAuth } from "../contexts/AuthContext";

const MyClients = () => {
  const { user } = useAuth();

  // Get unique clients from cases assigned to this lawyer
  const myClients = MOCK_CASES
    .filter(case_ => case_.lawyerId === user?.id)
    .reduce((clients, case_) => {
      const existingClient = clients.find(client => client.clientId === case_.clientId);
      if (!existingClient) {
        clients.push({
          clientId: case_.clientId,
          clientName: case_.clientName,
          cases: [case_],
          totalCases: 1,
          activeCases: case_.status === 'in_progress' ? 1 : 0
        });
      } else {
        existingClient.cases.push(case_);
        existingClient.totalCases += 1;
        if (case_.status === 'in_progress') {
          existingClient.activeCases += 1;
        }
      }
      return clients;
    }, [] as any[]);

  return (
    <div className="container lg:px-16 p-4">
      <div className="mb-6">
        <h2 className="font-semibold text-[32px] text-[#292929] mb-3">
          My Clients
        </h2>
        <p className="font-medium text-[#9DA4AE]">
          Manage your client relationships and cases
        </p>
      </div>

      {/* Clients Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Clients</h3>
          <p className="text-3xl font-bold text-[#03156B]">{myClients.length}</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Cases</h3>
          <p className="text-3xl font-bold text-green-600">
            {myClients.reduce((sum, client) => sum + client.activeCases, 0)}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Cases</h3>
          <p className="text-3xl font-bold text-blue-600">
            {myClients.reduce((sum, client) => sum + client.totalCases, 0)}
          </p>
        </div>
      </div>

      {/* Clients List */}
      {myClients.length > 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Client List</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {myClients.map((client) => (
              <div key={client.clientId} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#03156B] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {client.clientName.charAt(0)}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {client.clientName}
                      </h4>
                      <p className="text-gray-600">
                        {client.totalCases} case{client.totalCases !== 1 ? 's' : ''} • {client.activeCases} active
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      client.activeCases > 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {client.activeCases > 0 ? 'Active' : 'Inactive'}
                    </span>
                    
                    <button className="px-4 py-2 text-[#03156B] border border-[#03156B] rounded-lg hover:bg-[#03156B] hover:text-white transition-colors">
                      View Cases
                    </button>
                  </div>
                </div>
                
                {/* Recent Cases */}
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Recent Cases:</h5>
                  <div className="space-y-2">
                    {client.cases.slice(0, 2).map((case_: any) => (
                      <div key={case_.id} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 truncate flex-1">
                          {case_.title}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          case_.status === 'in_progress' 
                            ? 'bg-blue-100 text-blue-800'
                            : case_.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : case_.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {case_.status.replace('_', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
          <div className="text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No clients yet</h3>
            <p className="text-gray-600">
              You haven't been assigned any clients yet. Once clients start hiring you, they'll appear here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClients;