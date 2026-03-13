import { Zap, TrendingUp, Award, Users } from "lucide-react";
import aboutImg from "../assets/images/about-img.png";
import statistics from "../data/statistics.json";

function ContentSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-10 items-center">
      <div className="flex gap-4 flex-wrap">
        <h2 className="text-5xl font-semibold mb-4 leading-14">
          Sed ut unde
          <span className="text-brand-teal block"> perspiciatis </span>
          omnis iste natus
        </h2>
        <p className="text-custom-dark mb-4 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-custom-dark mb-4 font-normal">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
        </p>
        <button className="bg-dark-blue text-white px-10 py-2 rounded-full hover:bg-brand-teal transition-colors cursor-pointer">
          Read More
        </button>
      </div>

      <div className="flex p-0 md:p-6">
        <img
          src={aboutImg}
          alt="about"
          className="rounded-xl"
        />
      </div>
      <div className="grid grid-cols-2 gap-10 text-center">
        {statistics.map((stat, index) => {
          const IconComponent = { Zap, TrendingUp, Award, Users }[stat.icon];
          return (
            <div key={index} className="flex gap-4 flex-wrap items-center justify-center">
              <div className="flex items-center justify-center size-16 bg-brand-teal rounded-full m-auto">
                <IconComponent className="mx-auto text-white" size={32} />
              </div>
              <h3 className="text-5xl font-semibold w-full">{stat.value}</h3>
              <p className="font-normal -mt-4">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ContentSection;