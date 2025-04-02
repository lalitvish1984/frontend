import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from 'react';
function Users({myname}) {

  // const [users,setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/dev/users")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setUsers(data))
  //     .catch((err) => console.error("This is some error:", err));
  // }, []);

  return (
    <div className="App">
       <h2>My User List: {myname}</h2>
        {/* {users.length > 0 ? (
          <ul>
            {users.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading users...</p>
        )} */}
    </div>
  );
}

export default Users;
