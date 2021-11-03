import axios from "axios";

export const setData = async (): Promise<any> => {
  return fetch("http://localhost:5000/v1/dashboard/summary")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const fetchAlbums = async (): Promise<any> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
      return response.data;
    });
};
