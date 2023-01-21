import React, { useState } from 'react';

function ProfileForm() { 
  const [formData, setFormData] = useState({
    name: '',
    association: '',
    location: ''
  });

  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    // code to send formData to the server or save it to local storage
    console.log(formData);
    setFormData({
      name: '',
      association: '',
      location: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Association:
        <input type="text" name="association" value={formData.association} onChange={handleChange} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default ProfileForm;