import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import { MyContext } from "../zoo";
import "./animaldetails.scss";

export const AnimalDetails = () => {
  const { animals, setIsFed, countTimeSinceFed } =
    useOutletContext<MyContext>();

  const { name } = useParams();

  useEffect(() => {
    countTimeSinceFed();
  }, []);

  const handleClick = (a: IAnimal) => {
    setIsFed(a);
  };

  let html = animals
    .filter((a) => a.name === name)
    .map((a: IAnimal) => {
      return (
        <div key={a.id} className="animaldetailwrapper">
          <div className="animaldetailwrapper__imagewrapper">
            <img src={a.imageUrl} alt={a.name} />
          </div>
          <p>
            {a.name}
            {a.isFed ? (
              <span> är mätt</span>
            ) : (
              <span>
                {" "}
                är hungrig
                {Date.now() - +new Date(a.lastFed) > 14400000 && (
                  <span> och har inte ätit på över 4 timmar</span>
                )}
              </span>
            )}
          </p>
          {!a.isFed && (
            <button
              onClick={() => {
                handleClick(a);
              }}
              className="glowing-btn"
            >
              <span className="glowing-txt">
                M<span className="faulty-letter">a</span>ta {a.name}
              </span>
            </button>
          )}
        </div>
      );
    });

  return <div className="animaldetails">{html}</div>;
};
