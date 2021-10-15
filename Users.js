import React, {useState} from 'react';
import UsersCard from './UsersCard';


// const Users = (props) => {

//     return (
//         <div>
//             <div className="container">
//                 <User {...props}/>
//                 {users &&
//                     users.map((users) => {
//                         return <Users {...users} />;
//                     })}
//             </div>
//         </div>
//     )
// }
  

// export default Users;

const Users = ({users}) => {
  // const [lastUser, setLastUser] = useState();


  // console.log("This is messages...");
  // console.log(props.userId?.name)
  return (
    <div className="container">
      {users && users.map((users) => {
        return <UsersCard key={users._id} {...users}/>
        console.log(users._id);
      })}
      </div>
      )}

export default Users
