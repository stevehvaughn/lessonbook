import Student from './StudentView/Student'
import Teacher from './TeacherView/Teacher'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.user)

    console.log(user)
   
    return (
        <div>
            { user.userInfo.teacher
            ? <Student />
            : <Teacher />
            }
        </div>
    )
}

export default Home
