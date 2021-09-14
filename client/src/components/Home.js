import Student from './StudentView/Student'
import Teacher from './TeacherView/Teacher'
import { useSelector } from 'react-redux'


const Home = () => {
    const user = useSelector(state => state.user)

    return (
        <div>
            { user.teacher
            ? <Student />
            : <Teacher />
            }
        </div>
    )
}

export default Home
