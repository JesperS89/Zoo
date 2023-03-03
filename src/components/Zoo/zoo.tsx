import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getAnimals } from "../../services/animalService";
import { IAnimal } from "../../models/IAnimal";
import "./zoo.scss";
import { getFromLs, saveToLs } from "../../services/localStorageService";

export type MyContext = {
  animals: IAnimal[];
  setIsFed(a: IAnimal): void;
  countTimeSinceFed(): void;
};

export const Zoo = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(getFromLs());

  const countTimeSinceFed = () => {
    animals.map((a) => {
      if (a.isFed === true)
        if (Date.now() - +new Date(a.lastFed) > 3000) {
          a.isFed = false;
          let copy = [...animals];
          setAnimals(copy);
        }
    });
  };

  const setIsFed = (animal: IAnimal) => {
    let lastFed = new Date();

    animal.isFed = true;
    animal.lastFed = lastFed.toISOString();

    let copy = [...animals];
    setAnimals(copy);
  };

  useEffect(() => {
    countTimeSinceFed();

    const getData = async () => {
      let animalsFromApi = await getAnimals();

      saveToLs(animalsFromApi);
      setAnimals(animalsFromApi);
    };

    if (animals.length > 0) {
      return;
    } else {
      getData();
    }
  });

  useEffect(() => {
    saveToLs(animals);
  }, [animals]);

  return (
    <div className="zoo">
      <Outlet context={{ animals, setIsFed, countTimeSinceFed }} />
    </div>
  );
};
