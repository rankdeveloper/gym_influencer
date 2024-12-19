export default function Misson() {
  return (
    <div className="p-10 px-auto md:px-[5.5rem]">
      <h1 className="text-[#cc0000] md:text-[#eb0000] md:text-6xl text-2xl  font-black text-center px-auto md:px-20 mb-6 md:mb-4 uppercase">
        Your Fitness.
        <br /> Our Mission.
      </h1>
      <p className="text-base md:text-xl text-[#efefef] leading-8 items-center mb-20 text-center second">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </p>

      <div className="counter flex-col md:flex justify-between items-center gap-3 text-[text-[#efefef] second">
        <div className="counter-item text-center border-b md:border-r border-[#1d1d20] px-4 py-5 md:pb-0">
          <h2 className="text-5xl mb-5 text-white">100k+</h2>
          <p className="text-sm text-[#797b85]">
            Workouts logged and progress tracked every month
          </p>
        </div>

        <div className="counter-item text-center border-b md:border-r border-[#1d1d20]  px-4 py-5 md:pb-0">
          <h2 className="text-5xl mb-5 text-white">500k+</h2>
          <p className="text-sm text-[#797b85]">
            Fitness enthusiasts connected through our platform
          </p>
        </div>

        <div className="counter-item text-center  px-4 py-5 md:pb-0">
          <h2 className="text-5xl mb-5 text-white">10+</h2>
          <p className="text-sm text-[#797b85]">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>
    </div>
  );
}
