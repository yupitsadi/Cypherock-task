import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const username = 'yupitsadi'; // GitHub username

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-xs overflow-hidden shadow-lg my-4 bg-sidenavcolor rounded-lg">
      <img className="w-full" src={userData.avatar_url} alt={`${username}'s avatar`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-center items-center">{userData.name}</div>
        <p className="text-gray-700 text-base">{userData.bio}</p>
      </div>
      <div className="px-6 py-4 flex justify-center items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Followers: {userData.followers}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
          Following: {userData.following}
        </span>
      </div>
      <div className="px-6 py-4 flex justify-center items-center bg-support">
        <a href={userData.html_url} className=" hover:text-indigo-700" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
};

export default ProfileCard;
