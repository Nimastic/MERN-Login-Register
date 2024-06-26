import React from 'react'
import { useState } from 'react'

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    return (
        <div>
            <form>
                <label> Name </label>
                <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                <label> Email </label>
                <input type='text' placeholder='enter email...'value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                <label> Password </label>
                <input type='text' placeholder='enter password...'value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}
