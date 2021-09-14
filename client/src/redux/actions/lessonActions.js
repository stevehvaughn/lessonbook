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
                    earned_grade: "",
                    user_id: newLessonData.user_id
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

export function deleteLesson(selectedLessonId, arrayIndexOfStudent) {
    return (dispatch) => {
        return fetch(`/lessons/${selectedLessonId}`, {
            method: "DELETE"
        })
        .then(dispatch({
            type: "DELETE_LESSON",
            payload: selectedLessonId,
            studentIndex: arrayIndexOfStudent
        }))
    }
}