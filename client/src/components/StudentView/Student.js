import '../TeacherView/TeacherView.css' 
import { useSelector } from 'react-redux'
import Avatar from 'react-avatar';

const Student = () => {
    const student = useSelector(state => state.user)
    
    return (
        <div>
             <div className='teacher-header'>
                { student.picture_url ? <img className="avatar-picture" src={student.picture_url} alt="student_picture"></img> : <Avatar round='50%' name={student.combined_name} /> }
                <h1 id="teacher-header-text">Welcome {student.first_name}!</h1>
            </div>
            <h2 className='page-header'>Upcoming Lesson</h2>
        </div>
    )
}

export default Student
