import { useState } from 'react';

export const Register = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleNameChange = (event) => {
    setName(event.target.value);
};

const handleAddressChange = (event) => {
    setAddress(event.target.value);
};

const handlePhoneChange = (event) => {
    setPhone(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

return (
    <div>
    <button onClick={() =>
        setRole('farmer')}>Farmer</button>
    <button onClick={() => setRole('restaurant')}>Restaurant</button>
    </div>
    if (role === 'farmer') {
    return (
        <div>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} />
        <input type="text" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        );
    }

if (role === 'restaurant') {
    return (
        <div>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} />
        <input type="text" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        );
    }



    );
}

