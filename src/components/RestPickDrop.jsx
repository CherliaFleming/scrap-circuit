import { useEffect, useState } from 'react'
import './Rest.css'

export const RestPickDrop = () => {
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

const scheduledPickDrops= schedules.filter((schedule) => {
  return  (schedule.type === 'Pick-Up' || schedule.type === 'Drop-Off') &&  schedule.status === 'Scheduled'});

const completedPickDrops = schedules.filter((schedule) => {
   return (schedule.type === 'Drop-Off' || schedule.type === 'Pick-Up') && schedule.status === 'Completed'});

const deniedPickDrops = schedules.filter((schedule) => {
   return (schedule.type === 'Pick-Up' || schedule.type === 'Drop-Off') && schedule.status === 'Denied'});

const handleDelete = (schedule) => {
    fetch(`http://localhost:8088/schedules/${schedule.id}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...schedule, 
            status:'Scheduled', 
        })
    }) 
    //allows card to dissapear on click 
    .then(() => {
        setSchedules(schedules.map((s) => {
            if (s.id === schedule.id) {
                return {
                    ...s,
                    status: 'Scheduled'
                }
            }
            return s    
        }))
    })
}
  
const handleEdit = (schedule) => {
    fetch(`http://localhost:8088/schedules/${schedule.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...schedule, 
            status:'Scheduled', 
        })
    })
    .then(() => {
        setSchedules(schedules.map((s) => {
            if (s.id === schedule.id) {
                return {
                    ...s,
                    status: 'Denied'
                }
            }
            return s    
        }))
    })
}
    
return (
    <div>
        <div className="scheduled-pick-drops">
            {scheduledPickDrops.map((schedule) => {
                const user = users.find((user) => user.id === schedule.farmId);
                //safety check for drop off
                if (!user) {
                    return null;
                }
                return <div key={schedule.id}>
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                    <button onClick={() => handleDelete(schedule)}>Delete</button>
                <button onClick={() => handleEdit(schedule)}>Edit</button>
                </div>
                
})}
        </div>
        <div className="completed-pick-drops">
            {completedPickDrops.map((schedule) => {
                const user = users.find((user) => user.id === schedule.farmId);
                //safety check for pick up 
                if (!user) {
                    return null;
                }
               return <div key={schedule.id}>
                
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                </div>
})}
        </div>

        <div className="denied-picks">
            {deniedPickDrops.map((schedule) => {
                const user = users.find((user) => user.id === schedule.farmId);
                //safety check for pick up 
                if (!user) {
                    return null;
                }
                return <div key={schedule.id}>
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                </div>
            })}
        </div>
    </div>
);
}

