import "./home.scss";
import { useOutletContext } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import { Animal } from "../animal/animal";
import { MyContext } from "../zoo";

export const Home = () => {
  const { animals } = useOutletContext<MyContext>();

  let html = animals.map((a: IAnimal) => {
    return <Animal animal={a} />;
  });

  return <div className="animals">{html}</div>;
};
