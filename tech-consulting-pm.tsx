import React, { useState } from 'react';
import { Kanban, Layers, Users, Calendar, DollarSign, FileText, AlertCircle, CheckCircle } from 'lucide-react';

// Sample data structure
const initialProjects = [
  {
    id: 1,
    name: "ERP Implementation",
    client: "TechCorp Inc",
    status: "In Progress",
    completion: 65,
    budget: 150000,
    spent: 89000,
    risks: 2,
    team: 8
  },
  {
    id: 2,
    name: "Cloud Migration",
    client: "DataFlow Systems",
    status: "Planning",
    completion: 25,
    budget: 200000,
    spent: 45000,
    risks: 3,
    team: 12
  }
];

export default function ProjectDashboard() {
  const [projects] = useState(initialProjects);
  const [activeTab, setActiveTab] = useState('overview');

  const Sidebar = () => (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-8">TechPM Console</h2>
      <nav>
        <button 
          onClick={() => setActiveTab('overview')}
          className={`flex items-center w-full p-3 mb-2 rounded ${activeTab === 'overview' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <Layers className="mr-2" size={20} />
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`flex items-center w-full p-3 mb-2 rounded ${activeTab === 'projects' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <Kanban className="mr-2" size={20} />
          Projects
        </button>
        <button 
          onClick={() => setActiveTab('team')}
          className={`flex items-center w-full p-3 mb-2 rounded ${activeTab === 'team' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <Users className="mr-2" size={20} />
          Team
        </button>
        <button 
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center w-full p-3 mb-2 rounded ${activeTab === 'calendar' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <Calendar className="mr-2" size={20} />
          Calendar
        </button>
      </nav>
    </div>
  );

  const MetricCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">Client: {project.client}</p>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="text-gray-800 font-medium">{project.completion}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 rounded-full h-2" 
            style={{ width: `${project.completion}%` }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Budget</p>
          <p className="text-lg font-bold">${project.budget.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Spent</p>
          <p className="text-lg font-bold">${project.spent.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Team Size</p>
          <p className="text-lg font-bold">{project.team}</p>
        </div>
        <div>
          <p className="text-gray-600">Risk Items</p>
          <p className="text-lg font-bold">{project.risks}</p>
        </div>
      </div>
    </div>
  );

  const MainContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard 
                title="Active Projects" 
                value={projects.length} 
                icon={<Kanban size={24} className="text-blue-600" />}
              />
              <MetricCard 
                title="Total Budget" 
                value={`$${projects.reduce((acc, proj) => acc + proj.budget, 0).toLocaleString()}`}
                icon={<DollarSign size={24} className="text-green-600" />}
              />
              <MetricCard 
                title="Team Members" 
                value={projects.reduce((acc, proj) => acc + proj.team, 0)}
                icon={<Users size={24} className="text-purple-600" />}
              />
              <MetricCard 
                title="Risk Items" 
                value={projects.reduce((acc, proj) => acc + proj.risks, 0)}
                icon={<AlertCircle size={24} className="text-red-600" />}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Active Projects</h3>
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Management</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Planning</h3>
                {projects.filter(p => p.status === 'Planning').map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">In Progress</h3>
                {projects.filter(p => p.status === 'In Progress').map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Completed</h3>
                {projects.filter(p => p.status === 'Completed').map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">Coming Soon</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <MainContent />
      </main>
    </div>
  );
}
