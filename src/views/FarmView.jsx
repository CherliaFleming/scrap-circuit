import { useNavigate } from "react-router-dom";
import { FarmPickDrop } from "../components/FarmPickDrop";

export const FarmView = () => {
    const navigate = useNavigate();
//the logout button needs to clear something and navigate 
//revisted local storage method removeItem since deleting with logout
const handleLogout = () => {
    localStorage.removeItem('id')
    navigate('/')
  }
      return (
        <div>
            <h1>Farmer View</h1>
            < FarmPickDrop />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

