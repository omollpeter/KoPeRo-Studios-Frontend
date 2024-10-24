import React from 'react';
import Sidebar, { SidebarItem } from '../Admin/Sidebar';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdBookOnline } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const CrewAppointments = () => {
  const { crewId } = useParams();

  return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem
          icon={<FiHome />}
          text='Dashboard'
          to={`/crew/dashboard/${crewId}`}
        />
        <SidebarItem
          icon={<CgProfile />}
          text='Profile'
          to={`/crew/profile/${crewId}`}
        />
        <SidebarItem icon={<MdBookOnline />} text={'My Appointments'} active />
      </Sidebar>
      <div>
        <h1>Appointments</h1>
      </div>
    </div>
  );
};

export default CrewAppointments;
