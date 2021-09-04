export function loginAction(formData) {
    return (dispatch) => {
        return fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "LOGIN_USER",
            payload: data
        }))
    }
}

