import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userData, setUserData] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', userData);
      alert('User data submitted successfully!');
      setUserData({ name: '', email: '', age: '' });
    } catch (error) {
      console.error('Error submitting user data:', error);
      alert('Error submitting user data. Please try again.');
    }
  };

  return (
    <div>
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

