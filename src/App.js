import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import ComponentRenderer from "ComponentRenderer.js";
import Home from "MainLandingPage.js";
import Present from "components/events/present.js";
import Upcoming from "components/events/upcoming.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComingSoon from "components/cta/comingsoon.js";
import About from "pages/AboutUs.js";
import Contact from "pages/ContactUs.js";
import Team from "pages/Team.js";
import Careers from "pages/jobHome.js";
import Events from "components/events/event.js";
import Past from "components/events/past.js";
import Thanks from "components/thanks/thanks.js";
import Member from "components/membership/member.js";
import Privacy from "pages/PrivacyPolicy.js";
import Terms from "pages/TermsOfService.js";
import Projects from "components/projects/project.js";
import Quiz from "components/events/quiz/quiz.js";
import ThankYouSoMuch from "components/events/thanks.js";
import Coming from "components/events/comingsoon.js";
import Back from "components/job/openings/backend/backend.js";
import Front from "components/job/openings/frontend/frontend.js";
import Full from "components/job/openings/fullstack/fullstack.js";
import Setter from "components/job/openings/setter/setter.js";
import Tester from "components/job/openings/tester/tester.js";
import Editorial from "components/job/openings/editorialist/editorialist.js";
import Graphic from "components/job/openings/graphic/graphic.js";
import Motion from "components/job/openings/motion/motion.js";
import UIUX from "components/job/openings/uiux/uiux.js";


import Resources from "components/resources/resources.js";
import ComingNow from "components/resources/comingsoon.js";
import Error from "components/hero/error.js";


import Algo from "components/resources/algorithms/index.js";
import AI from "components/resources/ai/index.js";
import CP from "components/resources/cp/index.js";
import Security from "components/resources/hacking/index.js";
import Mobile from "components/resources/mobile/index.js";
import Open from "components/resources/open/index.js";
import Web from "components/resources/web/index.js";
import Language from "components/resources/language/index.js";
import Database from "components/resources/database/index.js";
import VersionControl from "components/resources/version_control/index.js";

import Calender from "components/projects/calendly.js";


export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route exact path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/upcoming">
          <Upcoming />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/present">
          <Present />
        </Route>
        <Route exact path="/past">
          <Past />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route exact path="/comingnow">
          <ComingNow />
        </Route>
        <Route exact path="/careers">
        <Careers />
        </Route>
        <Route exact path="/comingsoon">
          <ComingSoon />
        </Route>
        <Route exact path="/coming">
          <Coming />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/backend">
          <Back />
        </Route>
        <Route exact path="/frontend">
          <Front />
        </Route>
        <Route exact path="/fullstack">
          <Full />
        </Route>
        <Route path="/setter">
          <Setter />
        </Route>
        <Route exact path="/tester">
          <Tester />
        </Route>
        <Route exact path="/editorialist">
        <Editorial />
        </Route>
        <Route exact path="/graphic">
          <Graphic />
        </Route>
        <Route exact path="/motion">
          <Motion />
        </Route>
        <Route exact path="/uiux">
          <UIUX />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
        <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="/ThankYouSoMuch">
          <ThankYouSoMuch />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/member">
          <Member />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/algo">
          <Algo />
        </Route>
        <Route exact path="/ai">
          <AI />
        </Route>
        <Route exact path="/cp">
          <CP />
        </Route>
        <Route exact path="/Security">
          <Security />
        </Route>
        <Route exact path="/Language">
          <Language />
        </Route>
        <Route exact path="/Database">
          <Database />
        </Route>
        <Route exact path="/VersionControl">
          <VersionControl />
        </Route>
        <Route exact path="/mobile">
          <Mobile />
        </Route>
        <Route exact path="/open">
          <Open />
        </Route>
        <Route exact path="/web">
          <Web />
        </Route>
        <Route path="/">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
