import api from './../../../api/config'

export const loginSignIn = (body) => api.post("/auth/signIn", body);