import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { Calendar, Clock, FileText, TrendingUp, Users } from 'lucide-react';

// Sample analytics data
const analyticsData = [
  { month: 'Jan', billableHours: 420, revenue: 84000, utilization: 85 },
  { month: 'Feb', billableHours: 380, revenue: 76000, utilization: 82 },
  { month: 'Mar', billableHours: 450, revenue: 90000, utilization: 88 },
];

// Sample resource data
const resourceData = [
  { 
    id: 1, 
    name: 'Jane Smith',
    role: 'Senior Consultant',
    skills: ['Cloud Architecture', 'DevOps', 'AWS'],
    availability: 0.75,
    currentProject: 'Cloud Migration',
    billableHours: 32,
    utilization: 80
  },
  // Add more sample data as needed
];

const AdvancedFeatures = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  // Custom Report Component
  const ReportGenerator = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Custom Report Builder</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Report Type
          </label>
          <select className="w-full border rounded-md p-2">
            <option>Project Progress</option>
            <option>Resource Utilization</option>
            <option>Financial Performance</option>
            <option>Time Tracking</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Range
          </label>
          <select className="w-full border rounded-md p-2">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Generate Report
        </button>
      </div>
    </div>
  );

  // Resource Allocation Component
  const ResourceAllocation = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Resource Management</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Resource</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Availability</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Utilization</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resourceData.map(resource => (
              <tr key={resource.id} className="border-t">
                <td className="px-6 py-4 whitespace-nowrap">{resource.name}</td>
                <td className="px-6 py-4">{resource.role}</td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 rounded-full h-2"
                      style={{ width: `${resource.availability * 100}%` }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4">{resource.utilization}%</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800">Assign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Time Tracking Component
  const TimeTracking = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Time Tracking</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Weekly Time Log</h4>
          <BarChart width={400} height={200} data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="billableHours" fill="#4F46E5" />
          </BarChart>
        </div>
        <div>
          <h4 className="font-medium mb-2">Quick Time Entry</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project
              </label>
              <select className="w-full border rounded-md p-2">
                <option>Cloud Migration</option>
                <option>ERP Implementation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hours
              </label>
              <input type="number" className="w-full border rounded-md p-2" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Log Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Analytics Component
  const Analytics = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Revenue Trends</h4>
            <LineChart width={400} height={200} data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#4F46E5" />
            </LineChart>
          </div>
          <div>
            <h4 className="font-medium mb-2">Utilization Rate</h4>
            <LineChart width={400} height={200} data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="utilization" stroke="#10B981" />
            </LineChart>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-medium text-gray-500">Average Billable Rate</h4>
          <p className="text-2xl font-bold mt-2">$185/hr</p>
          <div className="text-green-600 text-sm mt-2">↑ 12% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-medium text-gray-500">Project Profitability</h4>
          <p className="text-2xl font-bold mt-2">32%</p>
          <div className="text-green-600 text-sm mt-2">↑ 5% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-medium text-gray-500">Resource Utilization</h4>
          <p className="text-2xl font-bold mt-2">85%</p>
          <div className="text-red-600 text-sm mt-2">↓ 2% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-medium text-gray-500">Active Projects</h4>
          <p className="text-2xl font-bold mt-2">12</p>
          <div className="text-gray-600 text-sm mt-2">No change from last month</div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'reports':
        return <ReportGenerator />;
      case 'resources':
        return <ResourceAllocation />;
      case 'time':
        return <TimeTracking />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Analytics />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-md flex items-center ${
              activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <TrendingUp className="mr-2" size={20} />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 rounded-md flex items-center ${
              activeTab === 'reports' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="mr-2" size={20} />
            Reports
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 rounded-md flex items-center ${
              activeTab === 'resources' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="mr-2" size={20} />
            Resources
          </button>
          <button
            onClick={() => setActiveTab('time')}
            className={`px-4 py-2 rounded-md flex items-center ${
              activeTab === 'time' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Clock className="mr-2" size={20} />
            Time
          </button>
        </nav>
      </div>
      {renderContent()}
    </div>
  );
};

export default AdvancedFeatures;
