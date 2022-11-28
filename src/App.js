import "./App.css";
import React from "react";
import {Link} from "react-scroll";

const beige = "#f2e9e4";
const darkbeige = "#c9ada7";
const brown = "#9a8c98";
const blue = "#4a4e69";
const navy = "#22223b";

const ColoredLine = ({ color, height = 5, width = "60%" }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: height,
      width: width,
    }}
  />
);

const SquareBox = ({ color, height = "40%", width = "60%", content }) => (
  <div
    style={{
      backgroundColor: color,
      marginTop: "30px",
      height: height,
      width: width,
    }}
  >
    <p>{content}</p>
  </div>
);

// this component implements a menu with a content display area
const MenuWithContent = ({ nothing }) => (
  <div className="menu-with-content">
    <div className="menu">
      <p>Thing</p>
      <p>Thing</p>
      <p>Thing</p>
      <p>Thing</p>
    </div>
    <div className="content">
      <h1>Thing</h1>
    </div>
  </div>
);

function App() {
  //FadeInSection from selbekk.io
  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0.1,
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      }, options);

      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <>
      {/* <div className="outer-box">
        <div className="inner-box">
          <p>Bla</p>
        </div>
        <div className="inner-box">
          <p>Bloo</p>
        </div>
      </div> */}

      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            {/* <li>
              <Link activeClass="active" smooth spy to="about">
                Welcome
              </Link>
            </li> */}
            <li>
              <Link activeClass="active" smooth spy to="projects">
                WORK
              </Link>
            </li>
            <li className= "title">
              <Link activeClass="active" smooth spy to="welcome">
              emilio.studio
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="welcome">
        <h1 className = "title">emilio.studio</h1>
      </section>
      <section id="projects">PROJECTS</section>
      <section id="blog">BLOG</section>
    </>
    /* <FadeInSection>
          <div className="body">
            <h1>welcome to "whyemil.io"</h1>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="body">
            <h1>this is my portfolio</h1>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="body">
            <h1>nothing is here yet i guess..</h1>
          </div>
        </FadeInSection> */
  );
}

export default App;
