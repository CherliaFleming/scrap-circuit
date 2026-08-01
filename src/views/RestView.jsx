import {useNavigate} from 'react-router-dom'
import { RestPickDrop } from "../components/RestPickDrop";

export const RestView = () => {
        const navigate = useNavigate();

const handleLogout = () => {
        localStorage.removeItem('id')
        navigate('/')
    }
            return (
                <div>
                        <h1>Restaurant View</h1>
                        < RestPickDrop />
                        <button onClick={handleLogout}>Logout</button>
                </div>
        )
}