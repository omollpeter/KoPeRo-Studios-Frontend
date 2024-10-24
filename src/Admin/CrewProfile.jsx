import React from 'react';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import Sidebar, { SidebarItem } from '../Admin/Sidebar';
import { useParams } from 'react-router-dom';

const CrewProfile = () => {
  const { crewId } = useParams();
  return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem
          icon={<FiHome />}
          text='Dashboard'
          to={`/crew/dashboard/${crewId}`}
        />
        <SidebarItem icon={<CgProfile />} text='Profile' active />
      </Sidebar>
      <div>
        <h1>Profile Page</h1>
      </div>
    </div>
  );
};

export default CrewProfile;
