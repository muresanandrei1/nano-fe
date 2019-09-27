import { apiCall } from "../api";

export const getAllCars = () => apiCall("get", "/api/cars");

export const getCarById = id => apiCall("get", `/api/cars/${id}`);
