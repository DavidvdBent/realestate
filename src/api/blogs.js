import axios from "axios";

export function getBlogs () {
    return axios
        .get('https://my-json-server.typicode.com/DavidvdBent/realestatedatabase/blogs').then(res => res.data)
    }

export function getBlog (id) {
    return axios
        .get(`https://my-json-server.typicode.com/DavidvdBent/realestatedatabase/blogs/${id}`).then(res => res.data)
}