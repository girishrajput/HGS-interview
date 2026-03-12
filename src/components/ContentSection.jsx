import { Zap, TrendingUp, Award, Users } from "lucide-react";
import aboutImg from "../assets/images/about-img.png";

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
        <button className="bg-dark-blue text-white px-10 py-2 rounded-full hover:bg-brand-teal transition-colors shadow-lg cursor-pointer">
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
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <div className="flex items-center justify-center size-16 bg-brand-teal rounded-full shadow-lg m-auto">
            <Zap className="mx-auto text-white" size={32} />
          </div>
          <h3 className="text-5xl font-semibold w-full">20%</h3>
          <p className="font-normal -mt-4">Lorem ipsum</p>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <div className="flex items-center justify-center size-16 bg-brand-teal rounded-full shadow-lg m-auto">
            <TrendingUp className="mx-auto text-white" size={32} />
          </div>
          <h3 className="text-5xl font-semibold w-full">1.2M</h3>
          <p className="font-normal -mt-4">dolor sit</p>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <div className="flex items-center justify-center size-16 bg-brand-teal rounded-full shadow-lg m-auto">
            <Award className="mx-auto text-white" size={32} />
          </div>
          <h3 className="text-5xl font-semibold w-full">15+</h3>
          <p className="font-normal -mt-4">awards</p>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <div className="flex items-center justify-center size-16 bg-brand-teal rounded-full shadow-lg m-auto">
            <Users className="mx-auto text-white" size={32} />
          </div>
          <h3 className="text-5xl font-semibold w-full">50+</h3>
          <p className="font-normal -mt-4">clients</p>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;