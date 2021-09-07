import Student from './StudentView/Student'
import Teacher from './TeacherView/Teacher'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.user)
   
    return (
        <div>
            { user.userInfo.teacher_id 
            ? <Student />
            : <Teacher />
            }
        </div>
    )
}

export default Home
