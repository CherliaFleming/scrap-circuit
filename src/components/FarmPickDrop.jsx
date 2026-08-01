import { useEffect, useState } from 'react'
import './Farm.css'

export const FarmPickDrop = () => {
    const [schedules, setSchedules] = useState([]);
    const [users, setUsers] = useState([]);
    const [compostTypes, setCompostTypes] = useState([]);

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

useEffect(() => {
    fetch('http://localhost:8088/compostTypes')
      .then((response) => response.json())
      .then((data) => setCompostTypes(data));
  }, []);

const pickUpSchedules = schedules.filter((schedule) => {
  return  schedule.type === 'Pick-Up' && schedule.status === 'Scheduled'});

const dropOffSchedules = schedules.filter((schedule) => {
   return schedule.type === 'Drop-Off' && schedule.status === 'Scheduled'});    

const completedSchedules = schedules.filter((schedule) => {
   return schedule.status === 'Completed'});

const handleComplete = (schedule) => {
    fetch(`http://localhost:8088/schedules/${schedule.id}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...schedule, 
            status:'Completed', 
        })
    }) 
    //allows card to dissapear on click 
    .then(() => {
        setSchedules(schedules.map((s) => {
            if (s.id === schedule.id) {
                return {
                    ...s,
                    status: 'Completed'
                }
            }
            return s    
        }))
    })
}
  
const handleDeny = (schedule) => {
    fetch(`http://localhost:8088/schedules/${schedule.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...schedule, 
            status:'Denied', 
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
        <div className="scheduled-pick-ups">
            {pickUpSchedules.map((schedule) => {
                const user = users.find((user) => user.id === schedule.restaurantId);
                const compost = compostTypes.find((compost) => compost.id === schedule.compostId);

                //safety check for drop off
                if (!user) {
                    return null;
                }
                return <div key={schedule.id}>
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                    <p>{compost.description}</p>
                    <p>{user.phone}</p>
                    <p>{user.address}</p>
                    <button onClick={() => handleComplete(schedule)}>Complete</button>
                <button onClick={() => handleDeny(schedule)}>Deny</button>
                </div>
                
})}
        </div>
        <div className="scheduled-drop-offs">
            {dropOffSchedules.map((schedule) => {
                const user = users.find((user) => user.id === schedule.restaurantId);
                const compost = compostTypes.find((compost) => compost.id === schedule.compostId);

                //safety check for pick up 
                if (!user) {
                    return null;
                }
               return <div key={schedule.id}>
                
                    <p>{user.name}</p>
                    <p>{schedule.date}</p>
                    <p>{compost.description}</p>
                    <button onClick={() => handleComplete(schedule)}>Complete</button>
                <button onClick={() => handleDeny(schedule)}>Deny</button>
                </div>
})}
        </div>

        <div className="completed-schedules">
            {completedSchedules.map((schedule) => {
                const user = users.find((user) => user.id === schedule.restaurantId);
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

