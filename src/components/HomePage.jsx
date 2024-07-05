import React from 'react';
import ProfileCard from './ProfileCard';

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center py-3 border-2 inset-0">
        HomePage
      </div>
      <div className="flex justify-center items-center">
        <div className="centerMe max-w-md p-3">
          <div>This is an assignment for Cypherock</div>
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
