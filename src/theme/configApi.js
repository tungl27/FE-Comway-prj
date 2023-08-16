import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";
export const getApiUrl = (endpoint) => endpoint;

export const LOGIN = getApiUrl("/Login");
export const GET_STAFF_LIST = getApiUrl("/Show_Staff_Screen");
export const GET_ORDER_LIST = getApiUrl("/Show_order_list");
export const DELETE_STAFF = getApiUrl("/Staff_Detail_Edit");
export const DELETE_ORDER = getApiUrl("/Delete_order");
export const CREATE_STAFF = getApiUrl("/Staff_Create");