function LoremTicker() {
    return (
<div className="flex flex-row bg-black -ml-12 max-w ml-30 mr-30 h-15 items-center gap-6 overflow-hidden">
      <div className="relative overflow-hidden whitespace-nowrap flex-1">
        <div className="animate-marquee inline-block">
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>

          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
          <span className="text-white text-lg font-light tracking-wide mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
    );
}
export default LoremTicker;