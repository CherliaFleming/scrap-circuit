import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SchedulePickDrop = () => {
    const [farmerName, setFarmerName] = useState('');
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
