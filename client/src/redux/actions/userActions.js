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

