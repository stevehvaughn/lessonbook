export function getUsersLessons() {
    return (dispatch) => {
        return fetch("/users-lessons")
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "GET_LESSONS",
            payload: data
        }))
    }
}

export function addLessonToStudent(newLessonData) {
    return (dispatch) => {
        return fetch('/lessons', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLessonData)
            })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "ADD_LESSON",
            payload: data
        }))
    }
}

export function deleteLesson(selectedLesson) {
    return (dispatch) => {
        return fetch(`/lessons/${selectedLesson}`, {
            method: "DELETE"
        })
    }
}