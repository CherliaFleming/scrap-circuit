import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

 const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8088/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        //stops the browser's default behavior for form submission
        event.preventDefault();
        
        const findUser = users.find((user) => user.email === email && user.password === password);
        if (findUser) {
            alert('Login successful!');
           if (findUser.role === 'farmer') {
            navigate('/farmer');
        }else if (findUser.role === 'restaurant') {
            navigate('/restaurant');
        }
    } else {
            alert('Invalid email or password.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};