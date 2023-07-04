import axios from "axios";
export const apiUrl = "http://localhost:8080/api/"
export const api = axios.create({baseURL: apiUrl})
export const endpoints = {
    signin: "auth/signin",
    register: "auth/register"
}