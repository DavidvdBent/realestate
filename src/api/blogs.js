import axios from "axios";

export function getBlogs () {
    return axios
        .get('http://localhost:5000/blogs').then(res => res.data)
    }

export function getBlog (id) {
    return axios
        .get(`http://localhost:5000/blogs/${id}`).then(res => res.data)
}