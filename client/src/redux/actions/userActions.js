export function loginAction(formData) {
    return {
        type: "LOGIN_USER",
        payload: formData
    }
}