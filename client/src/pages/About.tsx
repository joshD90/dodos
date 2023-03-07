const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20">
      <h1
        style={{ fontFamily: "cooperBlack" }}
        className="text-4xl text-stone-800 mb-5"
      >
        About Us
      </h1>
      <div className="flex items-center w-full justify-around">
        <p className="">Just a little bit about ourselves</p>
        <div className="w-32 h-32 rounded-full bg-blue-300"></div>
      </div>
      <h2 className="text-2xl font-bold my-10">What we Believe</h2>
      <div className="flex items-center w-full justify-around">
        <div className="w-16 h-16 rounded-full bg-blue-300"></div>
        <div>
          <p className="">Simple Ingredients Done Well</p>
          <p className="text-stone-700 text-sm">A perfect balance of flavors</p>
        </div>
      </div>
      <div className="flex items-center w-full justify-around my-10">
        <div className="flex flex-col w-1/2">
          <p className="">Quality Over Quantity</p>
          <p className="text-stone-700 text-sm">
            By focussing on a honest straightforward menu, we can guarantee
            everything tastes delicious
          </p>
        </div>
        <div className="w-16 h-16 rounded-full bg-blue-300"></div>
      </div>
      <div className="flex items-center w-full justify-around my-10">
        <div className="w-16 h-16 rounded-full bg-blue-300"></div>
        <div className="flex flex-col w-1/2">
          <p className="">Local Munch for Local People</p>
          <p className="text-stone-700 text-sm">
            We always try and source locally while still capturing exciting and
            noval tastes
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
