import { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  // Obtener datos del usuario
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        // Aquí deberías saber el id del usuario logueado, por ejemplo del token decodificado o guardarlo al hacer login
        // Para simplificar asumiré que lo guardas en localStorage
        const userId = localStorage.getItem('userId');
        if (!userId) return;

        const res = await fetch(`http://localhost:5000/users/${userId}`, {
          headers: { Authorization: 'Bearer ' + token }
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data);
          setForm({ name: data.name, email: data.email, password: '' });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token || !userId) {
      setMessage('Not authorized');
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(form.password ? form : { name: form.name, email: form.email })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Error updating profile');
      } else {
        setMessage('Profile updated');
        setUser({ ...user, name: form.name, email: form.email });
        setForm({ ...form, password: '' });
      }
    } catch (error) {
      setMessage('Server error');
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>My Profile</h2>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="New password (optional)" value={form.password} onChange={handleChange} />
      <button type="submit">Update Profile</button>
      <p>{message}</p>
    </form>
  );
}