import api from "./config";

export const login = async (loginData) => {
    const response = api.post("auth/login", loginData)
    return response
}

export const signup = async (signupData) => {
    const response = api.post("auth/signup", signupData)
    return response
}