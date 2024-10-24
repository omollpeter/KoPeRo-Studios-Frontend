import React from 'react';
import { useParams } from 'react-router-dom';

const CrewDashboard = () => {
  const { crewId } = useParams();

  return <div>CREW DASHBOARD</div>;
};

export default CrewDashboard;
