import girl from "../assets/images/home/banner.png";
import food1 from "../assets/images/home/b-food1.png";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* text */}
        <div className="md:w-1/2 space-y-12 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-bGreen">Food</span>
          </h2>
          <p className="text-base text-[#4A4A4A] font-medium">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="py-3 px-8 bg-bGreen font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
        {/* image */}
        <div className="md:w-1/2 relative">
          <img src={girl} alt="" />
          <div className="flex gap-9 absolute right-0 bottom-[-56px]">
            <div className="flex items-center gap-4 py-2 px-3 rounded-2xl bg-white shadow-md w-64">
              <img src={food1} alt="food" className="rounded-2xl" />
              <div className="space-y-2">
                <h5 className="font-medium mb-1">Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>
                  <span className="text-[#FF7979] text-xs">$</span>18.00
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 px-3 rounded-2xl bg-white shadow-md w-64">
              <img src={food1} alt="food" className="rounded-2xl" />
              <div className="space-y-2">
                <h5 className="font-medium mb-1">Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>
                  <span className="text-[#FF7979] text-xs">$</span>18.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
