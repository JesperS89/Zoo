import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import "./animal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = (props: IAnimalProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.animal.name}`);
  };

  return (
    <div key={props.animal.id} onClick={handleClick} className="animalwrapper">
      <div className="animalwrapper__imagewrapper">
        <img src={props.animal.imageUrl} alt={props.animal.name} />
      </div>

      {Date.now() - +new Date(props.animal.lastFed) > 14400000 && (
        <div className="animalwrapper__notification">
          <FontAwesomeIcon
            className="animalwrapper__icon"
            icon={faExclamationCircle}
          />
        </div>
      )}

      <div className="animalwrapper__namewrapper">
        <p className="animalwrapper__name">{props.animal.name}</p>
        <p className="animalwrapper__description">
          {props.animal.shortDescription}
        </p>
      </div>
    </div>
  );
};
