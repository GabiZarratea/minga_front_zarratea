import axios from "axios";
export const apiUrl = "http://localhost:8080/api/"
export const api = axios.create({baseURL: apiUrl})
export const endpoints = {
    signin: "auth/signin",
    signintoken: "auth/signintoken",
    register: "auth/register",
    signout: "auth/signout",
    read_mangas: "mangas",
    read_categories: "categories",
    chapters: "chapters"
}