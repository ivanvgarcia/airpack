import React, { useState, useEffect } from 'react';
import { updateUser } from '../redux/actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../static/svgs/avatar.svg';
import { airpackAPI } from '../config/baseUrl';
import cookie from 'js-cookie';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!file) return;
    let data = new FormData();
    data.append('photo', file);
    updatePhoto(data);
  }, [file]);

  const updatePhoto = async data => {
    const token = cookie.get('token');

    const res = await airpackAPI.patch('/users/updateMe', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    dispatch(updateUser(res.data.data.user));
  };

  const handleFileChange = e => {
    if (!e.target.files) {
      return;
    }
    let file = e.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <img src={user.photo} alt="user" />
      <h4>{user.name}</h4>
      <input type="file" name="photo" onChange={handleFileChange} />
    </div>
  );
};

export default Profile;
