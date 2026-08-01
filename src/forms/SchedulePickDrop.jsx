import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FarmPickDrop } from '../components/FarmPickDrop';


const SchedulePickDrop = () => {
    const [farmName, setFarmName] = useState('');
    const [compostType, setCompostType] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const navigate = useNavigate();

    const handleFarmChange = (event) => {
        setFarmerName(event.target.value);
    };

    const handleCompostChange = (event) => {
        setCompostType(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (event) => {
        //stops the browser's default behavior for form submission
        event.preventDefault();
        fetch('http://localhost:8088/schedules', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                farmName,
                compostType,
                date,
                type
            })
        }).then(() => {
            navigate('/schedule')
        })
    };

    return (
        <div>
            <input type="text" placeholder="Farm Name" value={farmName} onChange={handleNameChange} />
        <input type="text" placeholder="Compost Type" value={compostType} onChange={handleCompostChange} />
        <input type="text" placeholder="Date" value={date} onChange={handleDateChange} />
        <input type="text" placeholder="Type" value={type} onChange={handleTypeChange} />
        <select value={type} onChange={handleTypeChange}>
            <option value="Pick-Up">Pick-Up</option>
            <option value="Drop-Off">Drop-Off</option>
        </select>
        <button type="submit">Submit</button>
        </div>
    )