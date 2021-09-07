import React from "react";
import { Image,  } from "react-bootstrap";
import "../styles/components/cardcity.css";

const CardCity = (props) => {
  /*pour le popover (le message qui s'affiche sur l'image au survol) */
//   const renderTooltip = (props_) => {
//     <Tooltip id="button-tooltip" {...props_}>
//       Découvrir {props.name} en images
//     </Tooltip>;
//   };

  return (
    <div className="div-city ">
      <div className="container-fluid">
        <h2 className="h2 text-center">
          {props.name} - {props.country}
        </h2>
        {/* <OverlayTrigger
          placement="right"
           delay={{ show: 250, hide: 400 }}
           overlay={renderTooltip}
         > */}
          <a href={"/" + props.name} title="Cliquer pour découvrir la ville" >
            
            <Image src={props.image} alt={props.name} />
          </a>
        {/* </OverlayTrigger> */}
      </div>
    </div>
  );
};

export default CardCity;
