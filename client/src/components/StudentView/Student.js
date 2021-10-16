import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {
    const student = useSelector(state => state.user)
    
    return (
        <div>
            <h1>Welcome {student.first_name}!</h1>
        </div>
    )
}

export default Student
