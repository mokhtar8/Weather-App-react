import { Link } from "react-router";

const icons = [
  {
    id: 0,
    src: "/src/assets/images/landing page img/hut 1.png",
    outline: "/src/assets/images/landing page img/homepage.png",
    alt: "Home",
    size: " w-7  h-7",
    link: "/Landing",
  },
  {
    id: 1,
    src: "/src/assets/images/landing page img/calendar.png",
    outline: "/src/assets/images/landing page img/calendar (1) 1.png",
    alt: "Calendar",
    size: " w-7  h-7",
    link: "/DailyWeather",
  },
  {
    id: 2,
    src: "/src/assets/images/landing page img/waterlevel.png",
    outline: "/src/assets/images/landing page img/floods4 1.png",
    alt: "Hut",
    size: " w-12  h-12  mb-3",
    link: "/WeatherPage",
  },
  {
    id: 3,
    src: "/src/assets/images/landing page img/radar.png",
    outline: "/src/assets/images/landing page img/radar.png",
    alt: "Radar",
    size: " w-8  h-8",
    link: "/Rader",
  },
  {
    id: 4,
    src: "/src/assets/images/landing page img/emergency-call.png",
    outline: "/src/assets/images/landing page img/emergency-call (1) 1.png",
    alt: "Call",
    size: " w-6  h-6",
    link: "/EmergencyCantact",
  },
];
export default function Footer (){



    return (
           <div className=" fixed  bottom-0  w-full  bg-[#0B1C3D]   z-50">
        <div className=" flex  justify-between  items-baseline  px-6 ">
          {icons.map((icon) => {
            const isActive = location.pathname === icon.link;
            return (
              <Link
                key={icon.id}
                to={icon.link}
                className={`w-12 h-12 flex cursor-pointer items-center justify-center ${isActive}`}
              >
                <img
                  src={isActive ? icon.outline : icon.src}
                  alt={icon.alt}
                  className={`${icon.size} object-contain`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    )
 
}