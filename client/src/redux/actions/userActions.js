export function loginAction(formData) {
    return (dispatch) => {
        return fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => dispatch({
                    type: "LOGIN_USER",
                    payload: data
                }))
            } else {
                resp.json().then(err => dispatch({
                    type: "LOGIN_ERROR",
                    payload: err.errors
                }))
            }
        })
    }
}

export function loginPersist() {
    return (dispatch) => {
        return fetch("/me").then(resp => {
            if (resp.ok) {
                resp.json().then(data => dispatch({
                    type: "LOGIN_USER",
                    payload: data
                }))
            } else {
                resp.json().then(err => dispatch({
                    type: "LOGIN_ERROR",
                    payload: err.errors
                }))
            }
        })
    }
}

export function logoutAction() {
    return (dispatch) => {
        return fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                dispatch({
                    type: "LOGOUT_USER"
                })
            }
        })
    }
}
