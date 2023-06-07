import React, { useState } from 'react'

function User() {
    const [user,setUser] = useState({name:'Hasan', surname: 'Surmen'})
  return (
    <div>
        <h2>User</h2>
        {user.name} {user.surname}

        <br />
        <br />
        <br />

        <div>
        {/* <button onClick= {()=> setUser({...user, name: 'Ahmet'})}> */}
        <button onClick= {()=> setUser(prev => ({...prev, name: 'Ahmet'}))}>
     {/* with callback func */}

            İsmi Değiştir
        </button>
        <button onClick= {()=> setUser(prev => ({...prev, surname: 'Hayırlı'}))}>
            Soyismi Degistir
        </button>
        </div>
    </div>
  )
}

export default User