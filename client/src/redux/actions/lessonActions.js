export function getUsersLessons() {
    return (dispatch) => {
        return fetch("/lessons")
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "GET_LESSONS",
            payload: data
        }))
    }
}

export function addLessonToStudent(newLessonData, arrayIndexOfStudent, setNewLessonData) {
    return (dispatch) => {
        return fetch('/lessons', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLessonData)
            })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => dispatch({
                    type: "ADD_LESSON",
                    payload: data,
                    studentIndex: arrayIndexOfStudent
                }))
                .then(setNewLessonData({
                    objective: "",
                    repertoire: "",
                    assignment: "",
                    date: new Date().toISOString().slice(0, 10),
                    user_id: "",
                    earned_grade: ""
                }))
            } else {
                resp.json().then(err => dispatch({
                    type: "ADD_LESSON_ERROR",
                    payload: err.errors
                }))
            }
        })
    }
}

export function deleteLesson(selectedLesson) {
    return (dispatch) => {
        return fetch(`/lessons/${selectedLesson}`, {
            method: "DELETE"
        })
    }
}