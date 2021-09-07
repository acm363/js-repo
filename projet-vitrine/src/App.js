import { React, useEffect } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Contact from "./pages/Contact";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";
import Home from "./pages/Home";
import {AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const history = useHistory();

  /*console.log('location:',location);
    console.log('history :', history);
    console.log(window.location.href.toString());*/

  useEffect(() => {
    const handleScroolToElement = (e) => {
      // console.log(`scroll : ${e.wheelDeltaY}`)
      const url = window.location.origin + "/";

      //router de la souris
      /**
       *
       * @param {*} prevPage le chemin de la page d'avant
       * @param {*} nextPage le chemin de la page d'après
       */
      const wheelRouter = (nextPage, prevPage) => {
        //si le scroll est vers le bas
        if (e.wheelDeltaY < 0) {
            setTimeout(
                ()=>{
                    history.push(nextPage);
                },600
            )
        }
        //sinon le scroll de la molette est vers le haut
        else if (e.wheelDeltaY > 0) {
            setTimeout(
                ()=>{
                    history.push(prevPage);
                },600
            )
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
              setTimeout(
                  ()=>{
                    history.push("project-1");
                  },600
              )
          }
          break;
        case url + "project-1":
          wheelRouter("project-2", "");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("contact", "project-3");
          break;
        case url + "contact":
            wheelRouter("","project-4");
            break;
        default:
          console.log("default case in switch");
      }
    };
    //wheel <=> mouvement molette de la souris
    window.addEventListener("wheel", handleScroolToElement);
  }, [history]);
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route  path="/project-1" component={Project1} />
        <Route  path="/project-2" component={Project2} />
        <Route  path="/project-3" component={Project3} />
        <Route  path="/project-4" component={Project4} />
        <Route  path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
