import React, { useState } from 'react';
import { FileText, Clock, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

const ClientPortal = () => {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      name: "Cloud Migration",
      status: "In Progress",
      completion: 65,
      nextMilestone: "Database Migration",
      dueDays: 14,
      budget: {
        total: 200000,
        spent: 130000
      },
      updates: [
        {
          date: "2024-03-15",
          content: "Completed initial data transfer testing",
          type: "success"
        },
        {
          date: "2024-03-14",
          content: "Network configuration optimized",
          type: "info"
        }
      ],
      documents: [
        {
          name: "Project Charter",
          date: "2024-02-01"
        },
        {
          name: "Architecture Diagram",
          date: "2024-02-15"
        }
      ]
    }
  ];

  const project = projects.find(p => p.id === activeProject);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Client Portal</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Contact Support
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {project.status}
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Overall Progress</span>
                  <span>{project.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2" 
                    style={{ width: `${project.completion}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-600">Next Milestone</p>
                  <p className="font-medium">{project.nextMilestone}</p>
                  <p className="text-sm text-blue-600">Due in {project.dueDays} days</p>
                </div>
                <div>
                  <p className="text-gray-600">Budget Overview</p>
                  <p className="font-medium">${project.budget.spent.toLocaleString()} / ${project.budget.total.toLocaleString()}</p>
                  <p className="text-sm text-green-600">Within budget</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Project Updates</h3>
              <div className="space-y-4">
                {project.updates.map((update, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {update.type === 'success' ? (
                      <CheckCircle className="text-green-500 mt-1" size={20} />
                    ) : (
                      <AlertCircle className="text-blue-500 mt-1" size={20} />
                    )}
                    <div>
                      <p className="font-medium">{update.content}</p>
                      <p className="text-sm text-gray-500">{update.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Documents</h3>
              <div className="space-y-3">
                {project.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <FileText size={20} className="text-gray-500" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-gray-500" />
                    <span>Schedule Meeting</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100">
                  <div className="flex items-center space-x-3">
                    <MessageSquare size={20} className="text-gray-500" />
                    <span>Message Team</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientPortal;
