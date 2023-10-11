import React, { useState, useContext } from 'react'
import { AuthContext } from '../../app/auth'

export default function Dashboard() {
    const authContext = useContext(AuthContext)

    return (
        <div>
            <h1 className='page-title'>Dashboard</h1>
            
        </div>
    )
}
