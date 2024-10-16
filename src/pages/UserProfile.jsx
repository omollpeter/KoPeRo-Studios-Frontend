import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import profileImage from '../assets/profileImage.png';

const UserProfile = () => {
  const { userId } = useParams();
  const [userData, setUserdata] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.log('No access token found');
      return;
    }

    try {
      const res = await axios.get(
        `https://mady.tech/api/v1/auth/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserdata(res.data);
    } catch (error) {
      console.error(`Error getting user profile:`, error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  const [inputs, setInputs] = useState({
    picture: profileImage,
    email: '',
    first_name: '',
    last_name: '',
    profile: {
      address: '',
      town: '',
      description: '',
      portfolio_link: '',
    },
  });

  useEffect(() => {
    if (userData) {
      setInputs({
        picture: userData.picture || profileImage,
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        profile: {
          address: userData.profile?.address || '',
          town: userData.profile?.town || '',
          description: userData.profile?.description || '',
          portfolio_link: userData.profile?.portfolio_link || '',
        },
      });
    }
  }, [userData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      setInputs((prev) => ({
        ...prev,
        picture: URL.createObjectURL(file),
      }));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
    setIsEdit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('profile.')) {
      const profileField = name.split('.')[1];
      setInputs((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [profileField]: value,
        },
      }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');

    const formData = new FormData();
    formData.append('picture', selectedFile);
    formData.append('email', inputs.email);
    formData.append('first_name', inputs.first_name);
    formData.append('last_name', inputs.last_name);
    formData.append('address', inputs.profile.address);
    formData.append('town', inputs.profile.town);
    formData.append('description', inputs.profile.description);
    formData.append('portfolio_link', inputs.profile.portfolio_link);

    try {
      await axios.put(
        `https://mady.tech/api/v1/auth/profile/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('User info updated successfully!');
    } catch (err) {
      if (err.response) {
        console.log('Error:', err.response.data);
      } else {
        console.log('Error:', err.message);
      }
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col gap-4 justify-center items-center md:items-start'>
      <img
        src={inputs.picture}
        alt='Profile'
        className='cursor-pointer w-44 rounded-full shadow-lg shadow-blue hover:-translate-y-2 hover:shadow-sm duration-300'
        onClick={handleImageClick}
      />
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {isEdit ? (
        <div className='flex flex-row gap-4 text-light '>
          <input
            type='text'
            name='first_name'
            placeholder='First Name'
            onChange={handleChange}
            value={inputs.first_name}
            className='p-2 rounded-md bg-slate-800 w-44'
          />
          <input
            type='text'
            name='last_name'
            placeholder='Last Name'
            onChange={handleChange}
            value={inputs.last_name}
            className='p-2 rounded-md bg-slate-800 w-44'
          />
        </div>
      ) : (
        <p className='text-3xl'>{`${userData.first_name} ${userData.last_name}`}</p>
      )}
      <hr className='bg-slate-800 w-[400px]' />

      <div className='flex flex-col gap-3 mb-8'>
        <p className='text-2xl font-semibold'>CONTACT INFORMATION</p>
        <div className='flex  gap-5'>
          <p>Email: </p>
          <p className='text-blue'>{userData.email}</p>
        </div>
        <div className='flex gap-5'>
          <p>Address: </p>
          {isEdit ? (
            <input
              type='text'
              name='profile.address'
              onChange={handleChange}
              value={inputs.profile.address}
              className='p-1 rounded-md bg-slate-800'
            />
          ) : (
            <p>{userData.profile?.address || ''}</p>
          )}
        </div>
        <div className='flex gap-5'>
          <p>Town: </p>
          {isEdit ? (
            <input
              type='text'
              name='profile.town'
              onChange={handleChange}
              value={inputs.profile.town}
              className='p-1 rounded-md bg-slate-800 w-full'
            />
          ) : (
            <p>{userData.profile?.town || ''}</p>
          )}
        </div>
      </div>
      <div>
        {isEdit ? (
          <button
            className='border rounded-full p-3 border-blue hover:bg-blue'
            onClick={handleSubmit}
          >
            Save Information
          </button>
        ) : (
          <button
            className='border rounded-full p-3 border-blue hover:bg-blue'
            onClick={() => setIsEdit(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
