// import React from "react";

// const home = () => {
//   return (
//     <>
//       <div className="support-container">
//         <div className="support-content">
//           <h2>What Support do you need?</h2>
//           <label className="radio-button">
//             <input type="radio" name="support" value="concept" />
//              &nbsp;Have Concept
//           </label>
//           <label className="radio-button">
//             <input type="radio" name="support" value="doc-ready" />
//             &nbsp;Entire Doc is Ready
//           </label>
//           <label className="radio-button">
//             <input type="radio" name="support" value="doc-ready" />
//             &nbsp;Other
//           </label>
//         </div>
//         <div className="next-btn">
//           <a href="/package"> Next</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default home;

import React from "react";
import Orb from "../Components/orb";
import WhyChooseUs from "../Components/WhyUs";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import Guidebook from "../Components/Guidebook";

const Home = () => {
  return (
    <div className="home-container">
      <div className="orb-section">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={41}
          forceHoverState={false}
        />
        <h1 className="welcome-text">Welcome to Silent Launch 4.0</h1>
        <p className="welccome-text">Smart publishing platform that guides students and authors through a streamlined, AI-powered publishing journey.</p>
        <a className="request-demo" href="/contact">Request Demo</a>
      </div>
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Guidebook />
    </div>
  );
};

export default Home;