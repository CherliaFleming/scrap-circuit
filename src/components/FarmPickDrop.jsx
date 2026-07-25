import { useEffect, useState } from 'react'
import './Farm.css'

export const FarmPickDrop = () => {
    const [schedules, setSchedules] = useState([]);
    const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('http://localhost:8088/schedules')
      .then((response) => response.json())
      .then((data) => setSchedules(data));
  }, []);

useEffect(() => {
    fetch('http://localhost:8088/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

const pickUpSchedules = schedules.filter((schedule) => {
  return  schedule.type === 'Pick-Up' && schedule.status === 'Scheduled'});

const dropOffSchedules = schedules.filter((schedule) => {
   return schedule.type === 'Drop-Off' && schedule.status === 'Scheduled'});    

const completedSchedules = schedules.filter((schedule) => {
   return schedule.status === 'Completed'});
return (
    <div>
        <div className="scheduled-pick-ups">
            {pickUpSchedules.map((schedule) => {
                const user = users.find((user) => user.id === schedule.restaurantId);
                return <div key={schedule.id}>
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                    <p>{schedule.compostType}</p>
                    <p>{user.phone}</p>
                    <p>{user.address}</p>
                </div>
})}
        </div>
        <div className="scheduled-drop-offs">
            {dropOffSchedules.map((schedule) => {
                const user = users.find((user) => user.id === schedule.restaurantId);
               return <div key={schedule.id}>
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                </div>
})}
        </div>

        <div className="completed-schedules">
            {completedSchedules.map((schedule) => {
                const user = users.find((user) => user.id === schedule.restaurantId);
                return <div key={schedule.id}>
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                </div>
            })}
        </div>
    </div>
);
}
