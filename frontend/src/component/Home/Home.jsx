import React from "react";
import clouds from "../../assets/clouds.png";

const Home = () => {
  return (
    <div>
      <div
        className="h-[70vh] bg-primary bg-cover bg-center"
        style={{ backgroundImage: `url(${clouds})` }}
      >
        <div className="flex h-[70vh] flex-col items-center justify-center">
          <h1 className="p-2 text-white sm:text-3xl lg:text-5xl">
            Loyal Connections, Lasting Impact.
          </h1>
          <h4 className="p-2 text-white sm:text-sm lg:text-2xl">
            The mobile communications platform that helps you build trust,
            reward loyalty, and drive engagement when it matters most.
          </h4>

          <button className="rounded-xl border-2 border-primary px-4 py-4 text-white transition duration-300 hover:bg-dark sm:text-sm lg:text-tiny"> Get Started Free</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
