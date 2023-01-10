import "./App.css";
import React from "react";
import { Link } from "react-scroll";

// const ColoredLine = ({ color, height = 5, width = "60%" }) => (
//   <hr
//     style={{
//       color: color,
//       backgroundColor: color,
//       height: height,
//       width: width,
//     }}
//   />
// );

function App() {
  return (
    <div className ="content">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li className="title">
              <Link activeClass="ba" smooth spy to="welcome">
                <p className="titleText">emilio.studio</p>
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                work
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="blog">
                about
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="welcome">
        <div className="welcomeContent">
        <h1>Welcome</h1>
        </div>
        {/* <p>This is my portfolio website</p> */}
      </section>
      <section id="projects">WORK</section>
      <section id="blog">ABOUT</section>
    </div>
  );
}

export default App;
