import './Lessons.css'

const Lesson = ({ objective, repertoire, assignment, earned_grade, date}) => {
    const formattedDate = date.strftime()

    console.log(formattedDate)
    
    return (
        <div className='single-lesson-container'>
            <h3>Lesson Date: {date}</h3>
        </div>
    )
}

export default Lesson