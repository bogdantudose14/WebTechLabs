import { useEffect, useState } from 'react'
import User from './User'
import UserForm from './UserForm'
import './UserList.css'

const SERVER = 'http://localhost:8080'

function UserList (props) {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    setUsers(data)
  }

  const addUser = async user => {
    await fetch(`${SERVER}/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }

  // if useEffect is called with an empty dependencies array, it will run the
  //callback only once, when the component is rendered for the first time

  useEffect(() => {
    getUsers() // fetch the data from the express server (start the server first!)
  }, [])

  return (
    <div className='user-list'>
      {/* render a "User" component for every data entry
      the key attribute is used by react for list management
      pass data to the "User" component through "item" prop => how you name the prop is up to you
      access the data in the "User" component by props.item */}
      {users.length > 0 && users?.map(e => <User key={e.id} item={e} />)}
      <UserForm onAdd={addUser} />
    </div>
  )
}

export default UserList
