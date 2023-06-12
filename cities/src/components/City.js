import { React, useState } from "react";
import "../styles/components/city.css";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";

const City = (props) => {
  const [visible, setVisible] = useState(false);

  const [rate, setRate] = useState(0);

  const handleClickButton = () => {
    setVisible(!visible);
  };

  /*ici on gère tout ce qui est lié au mécanisme de note des villes */
  const ratingSection = visible && (
    <div className="container">
      Notez cette ville !
      <div className="star-container">
        {[1, 2, 3, 4, 5].map((starValue) => {
          //si la note de la ville dépasse la valeur d'une étoile elle passe à on sinon elle passe à off
          /*const starState = rate >= starValue ? "on " : "off ";*/
          const starSrc = rate >= starValue ? "star.png" : "star-off.png";
          return (
            <img
              src={starSrc}
              alt="star"
              className="bi bi-star star-co "
              key={"id"+starValue}
              onClick={() =>
                rate !== starValue ? setRate(starValue) : setRate(starValue - 1)
              }
              /*si au click sur une étoile elle est active , elle se désactive et vice-versa */
            />
          );
        })}
      </div>
      ({rate} / 5)
    </div>
  );

  const images = props.imagesList.map((image) => {
    return (
      <div className="div-img" id="div-popover">
        <OverlayTrigger
          placement="auto"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => (
            <Tooltip id="div-popover" {...props}>
              {image.title}
            </Tooltip>
          )}
        >
          <img src={image.src} alt={image.title} />
        </OverlayTrigger>
      </div>
    );
  });

  // // const addInTheWishList = (city) => {
  // //     whishlist.push({
  // //       id: whishlist.length+1,
  // //   name: props.name,
  // //   country: props.country,
  // //   description: props.description,
  // //   image: props.image,
  // //     });
  // //     console.log(whishlist);
  // // }

  return (
    <div className="container city">
      <h2 className="text-center">Découvrir {props.name} en images</h2>
      <section className="container">
        <div className="container-fluid">{props.description}</div>
        <div className="img-fluid">{images}</div>
      </section>

      <div className="container-fluid rate">
        <Button variant="success" size="lg" onClick={handleClickButton}>
          Déjà visité ?
        </Button>
        {ratingSection}
      </div>

      {/* 
      A la place mettre le principe des notes avec des étoiles
      <div className="choice">
        <Button variant="success" size="lg">
          Ajouté à la liste des souhaits ?
        </Button>
        <Button variant="primary" size="lg">
          Retirer de la liste des souhaits
        </Button>
      </div> */}
    </div>
  );
};

export default City;
