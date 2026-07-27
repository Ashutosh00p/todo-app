import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

// Authentication
export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

// Tasks
export const fetchTodos = () =>
  API.get("/tasks");

export const createTodo = (data) =>
  API.post("/tasks", data);

export const updateTodo = (id, data) =>
  API.put(`/tasks/${id}`, data);

export const deleteTodo = (id) =>
  API.delete(`/tasks/${id}`);

export default API;