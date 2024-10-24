import React from 'react';
import Sidebar, { SidebarItem } from '../Admin/Sidebar';
import { useParams } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { MdBookOnline } from 'react-icons/md';

const CrewDashboard = () => {
  const { crewId } = useParams();
  const navigate = useNavigate();

  return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem icon={<FiHome />} text='Dashboard' active />
        <SidebarItem
          icon={<CgProfile />}
          text='Profile'
          to={`/crew/profile/${crewId}`}
        />
        <SidebarItem
          icon={<MdBookOnline />}
          text={'Appointments'}
          to={`/crew/appointments/${crewId}`}
        />
      </Sidebar>
      <div className='ml-10 mt-5'>
        <h1>Welcome to the Crew Dashboard</h1>
      </div>
    </div>
  );
};

export default CrewDashboard;
