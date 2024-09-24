import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, login, setToken } from '../services/authService';
import '../Styles/Auth.css'; 
const mockUser = {
  email: 'pavan@gmail.com',
  password: '12345',
};
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === mockUser.email && password === mockUser.password) {
      // Navigate to task list if login is successful
      navigate('/tasks');
    } else {
      console.error('Invalid email or password');
    }
    // try {
    //   if (isLogin) {
    //     const res = await login(email, password);
    //     setToken(res.data.token);
    //   } else {
    //     const res = await signup(name, email, password);
    //     setToken(res.data.token);
    //   }
    //   navigate('/tasks');
    // } catch (err) {
    //   console.error(err);
    //   alert('Authentication failed');
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                {isLogin ? 'Login' : 'Signup'}
              </button>
            </form>
            <button
              className="btn btn-secondary w-100"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
