import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";

import "./App.css";
import ParticlesBg from "particles-bg";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [dotColor, setDotColor] = useState(theme === 'dark' ? '#FFFFFF' : '#000000');

  useEffect(() => {
    setDotColor(theme === 'dark' ? '#FFFFFF' : '#000000');
  }, [theme]);

  return (
    <>
      <div className="particles-container">
        <ParticlesBg color={dotColor} type="cobweb" bg={true} />
      </div>

      <Router basename={process.env.PUBLIC_URL}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <ScrollToTop>
          <Headermain setTheme={setTheme} />
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </>
  );
}
