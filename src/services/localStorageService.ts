import { IAnimal } from "../models/IAnimal";

export const getFromLs = () => {
  let animalsFromLs = localStorage.getItem("animals");
  if (animalsFromLs) {
    return JSON.parse(localStorage.getItem("animals") || "");
  } else {
    return [];
  }
};

export const saveToLs = (animals: IAnimal[]) => {
  localStorage.setItem("animals", JSON.stringify(animals));
};
