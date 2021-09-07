import './TeacherView.css'

const StudentsOfTeacher = ({first_name, last_name, picture_url }) => {
    return (
        <div className='single-student-container'>
            <img className='student-avatar-picture' src={picture_url} alt={last_name}></img>
            <h5>{first_name} {last_name}</h5>
        </div>
    )
}

export default StudentsOfTeacher
