import { useEffect } from "react";

import burger from "../assets/burger_chicken.jpeg";
import dublinCrest from "../assets/dublin_crest.jpeg";
import lettuce from "../assets/lettuce.webp";
import dodosLogo from "../assets/dodosLogo.png";
const About = () => {
  //scroll to top of page on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-20">
      <h1
        style={{ fontFamily: "cooperBlack" }}
        className="text-4xl text-stone-800 mb-5"
      >
        About Us
      </h1>
      {/* initial blurb */}
      <div className="flex items-center justify-center flex-col sm:flex-row gap-10 mb-10 w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2">
        <p className="text-center ml-5 sm:ml-0">
          Dodo's is a family run business set up by two food loving brothers. We
          wanted to share our passion for good food with Dublin bellies so we
          set up shop in Harold's Cross. If you love great chicken, you'll love
          what we have to offer. The Dodo is officially back!
        </p>
        <img className="w-32 h-32 rounded-full" src={dodosLogo} />
      </div>
      {/* beliefs div */}
      <h2 className="text-2xl font-bold my-10">What we Believe</h2>
      <div className="w-11/12 md:w-3/4 lg:2/3">
        {/* first belief */}

        <div className="flex items-center justify-start gap-10 self-start mb-16">
          <img className="w-16 h-16 rounded-full" src={lettuce} />
          <div>
            <p className="">Simple Ingredients Done Well</p>
            <p className="text-stone-700 text-sm">
              A perfect balance of flavors
            </p>
          </div>
        </div>
        {/* second belief */}
        <div className="flex items-center  justify-end my-10 self-start gap-10 mb-16">
          <div className="flex flex-col w-auto sm:w-1/2">
            <p className="">Quality Over Quantity</p>
            <p className="text-stone-700 text-sm">
              By focussing on a honest straightforward menu, we can guarantee
              everything tastes delicious
            </p>
          </div>
          <img className="w-16 h-16 rounded-full" src={burger} />
        </div>
        {/* third belief */}
        <div className="flex items-center justify-start gap-10 my-10 self-start">
          <img className="w-16 h-16 rounded-full " src={dublinCrest} />
          <div className="flex flex-col w-auto sm:w-1/2">
            <p className="">Local Munch for Local People</p>
            <p className="text-stone-700 text-sm">
              We always try and source locally while still capturing exciting
              and noval tastes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
