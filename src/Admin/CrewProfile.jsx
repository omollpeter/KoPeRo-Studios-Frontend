import React, { useEffect, useRef, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import Sidebar, { SidebarItem } from '../Admin/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import profileImage from '../assets/profileImage.png';
import axios from 'axios';
import StarRating from '../components/StarRating';
import { toast } from 'sonner';
import { MdBookOnline } from 'react-icons/md';

const CrewProfile = () => {
  const { crewId } = useParams();
  const [userData, setUserdata] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(profileImage);
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
        `https://mady.tech/api/v1/auth/crews/${crewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setUserdata(res.data);
      console.log('Image from backend:', res.data.image);

      if (res.data.image) {
        fetchImage(res.data.image);
      }
    } catch (error) {
      console.error(`Error getting user profile:`, error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [crewId]);

  const fetchImage = async (imagePath) => {
    const token = localStorage.getItem('accessToken');
    try {
      const res = await axios.get(`https://mady.tech${imagePath}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob',
      });

      const imageUrl = URL.createObjectURL(res.data);
      setImagePreview(imageUrl);
    } catch (error) {
      console.error('Error fetching image', error);
    }
  };

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    bio: '',
  });

  useEffect(() => {
    if (userData) {
      setInputs({
        first_name: userData.first_name || '',
        last_name: userData.last_name || '',
        phone: userData.phone || '',
        bio: userData.bio || '',
      });
    }
  }, [userData]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');

    const formData = new FormData();
    formData.append('first_name', inputs.first_name);
    formData.append('last_name', inputs.last_name);
    formData.append('phone', inputs.phone);
    formData.append('bio', inputs.bio);

    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      await axios.patch(
        `https://mady.tech/api/v1/auth/crews/${crewId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUserProfile();

      console.log('User info updated successfully!');
      toast.success('User info updated successfully');
      setIsEdit(false);
    } catch (err) {
      toast.error('Error updating user info');
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
          active
        />
        <SidebarItem
          icon={<MdBookOnline />}
          text={'My Appointments'}
          to={`/crew/appointments/${crewId}`}
        />
      </Sidebar>
      {/*---------User profile ---------*/}
      <div className='ml-10 mt-5'>
        <div className='flex flex-col gap-4 justify-center items-center md:items-start '>
          <img
            src={imagePreview}
            alt='Profile'
            className='cursor-pointer w-44 h-44 rounded-full object-cover shadow-lg shadow-blue hover:-translate-y-2 hover:shadow-sm duration-300'
            onClick={() => {
              fileInputRef.current.click();
              setIsEdit(true);
            }}
          />
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <div className='flex justify-center items-center gap-5'>
            <p className='text-3xl'>{userData.username}</p>
            <span>•</span>
            <p className='text-2xl  text-slate-400'>
              {userData.category.charAt(0).toUpperCase() +
                userData.category.slice(1)}
            </p>
          </div>
          <hr className='bg-slate-400 w-[400px]' />
          <StarRating rating={userData.average_rating} />
          <div className='flex flex-row gap-4 text-light w-[400px]'>
            {isEdit ? (
              <div className='flex flex-col gap-5 w-full'>
                <input
                  type='text'
                  name='first_name'
                  placeholder='First name'
                  onChange={handleChange}
                  value={inputs.first_name}
                  className='p-2 rounded-md bg-slate-800'
                />
                <input
                  type='text'
                  name='last_name'
                  placeholder='Last name'
                  onChange={handleChange}
                  value={inputs.last_name}
                  className='p-2 rounded-md bg-slate-800'
                />
                <input
                  type='text'
                  name='phone'
                  placeholder='Phone'
                  onChange={handleChange}
                  value={inputs.phone}
                  className='p-2 rounded-md bg-slate-800'
                />
                <textarea
                  name='bio'
                  placeholder='Bio'
                  onChange={handleChange}
                  value={inputs.bio}
                  className='p-2 rounded-md bg-slate-800'
                />
              </div>
            ) : (
              <div className='flex flex-col gap-3 text-lg '>
                <div className='flex flex-row gap-5'>
                  <p className=''>
                    <span className='text-slate-400'>First Name: </span>
                    {`${userData.first_name}`}
                  </p>
                  <p className=''>
                    <span className='text-slate-400'>Last name:</span>{' '}
                    {`${userData.last_name}`}
                  </p>
                </div>
                <p className='text-slate-400'>
                  Email: <span className='text-blue'>{userData.email}</span>
                </p>
                <p>
                  {' '}
                  <span className='text-slate-400'>Phone:</span>{' '}
                  {userData.phone || 'No phone number provided'}
                </p>
                <p>
                  {' '}
                  <span className='text-slate-400'>Bio:</span>{' '}
                  {userData.bio || 'No bio provided'}
                </p>
              </div>
            )}
          </div>

          <div className='flex justify-center items-center gap-4 h-14'>
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
            <button
              onClick={() => navigate('/user-appointments')}
              className='bg-blue text-light text-sm md:text-md font-semibold px-6 py-3 rounded-lg my-6 hover:scale-105 transition-all'
            >
              My Appointments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewProfile;
