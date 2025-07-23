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



const Home = () => {
  return (
    <div className="home-container">
      <div className="orb-section">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
        <h1 className="welcome-text">Welcome to Silent Launch 4.0</h1>
        <p className="welccome-text">Smart publishing platform that guides students and authors through a streamlined, AI-powered publishing journey.</p>
      </div>
    </div>
  );
};

export default Home;

