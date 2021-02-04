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
import Blog from "components/blogs/blog.js";
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
import ThankYou from "components/membership/thanks.js";
import Projects from "components/projects/project.js";
import Registration from "components/events/quiz.js"
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
import Hacking from "components/resources/hacking/index.js";
import Mobile from "components/resources/mobile/index.js";
import Open from "components/resources/open/index.js";
import Web from "components/resources/web/index.js";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/upcoming">
          <Upcoming />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/present">
          <Present />
        </Route>
        <Route path="/past">
          <Past />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/comingnow">
          <ComingNow />
        </Route>
        <Route path="/careers">
        <Careers />
        </Route>
        <Route path="/comingsoon">
          <ComingSoon />
        </Route>
        <Route path="/coming">
          <Coming />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/backend">
          <Back />
        </Route>
        <Route path="/frontend">
          <Front />
        </Route>
        <Route path="/fullstack">
          <Full />
        </Route>
        <Route path="/setter">
          <Setter />
        </Route>
        <Route path="/tester">
          <Tester />
        </Route>
        <Route path="/editorialist">
        <Editorial />
        </Route>
        <Route path="/graphic">
          <Graphic />
        </Route>
        <Route path="/motion">
          <Motion />
        </Route>
        <Route path="/uiux">
          <UIUX />
        </Route>
        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="/ThankYouSoMuch">
          <ThankYouSoMuch />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/member">
          <Member />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
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
        <Route exact path="/hacking">
          <Hacking />
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
