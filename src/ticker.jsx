function NewsTicker() {
    return (
<div className="flex flex-row bg-black -ml-12 max-w h-15 items-center gap-6 overflow-hidden">
      <div className="relative overflow-hidden whitespace-nowrap flex-1">
        <div className="animate-marquee inline-block">
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>

          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
          </span>
          <span className="text-white font-semibold text-2xl font-light tracking-wide mx-5">
          NEWSLETTER+++
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
export default NewsTicker;