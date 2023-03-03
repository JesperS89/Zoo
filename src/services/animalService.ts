import axios from "axios";
import { IAnimal } from "../models/IAnimal";

const API_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  let response = await axios.get<IAnimal[]>(`${API_URL}`);
  return response.data;
};
