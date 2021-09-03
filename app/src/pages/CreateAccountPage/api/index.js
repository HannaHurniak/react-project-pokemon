import api from './../../../api/config'

export const accountSignUp = (body) => api.post("/auth/signup", body);