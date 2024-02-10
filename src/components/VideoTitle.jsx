import { PLAY_ICON, INFO_ICON } from "../utils/icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video 2xl:pt-48 max-2xl:pt-32 pl-20 text-white bg-gradient-to-r from-black">
      <div className="w-4/12 max-[900px]:w-8/12">
        <h1 className="font-bold leading-tight text-6xl">{title}</h1>
        <p className="max-[920px]:hidden mt-5 text-[16px]">{overview}</p>

        <div className="flex items-center mt-8">
          <button className="px-6 py-2 mr-4 bg-white text-black text-xl font-bold flex items-center rounded-[4px] hover:bg-opacity-60 transition-opacity ">
            <span className="pr-2 scale-125">{PLAY_ICON}</span>
            <span>Play</span>
          </button>
          <button className=" bg-gray-300 max-[1060px]:px-2 px-8 py-2 bg-opacity-30 text-xl font-bold flex items-center rounded-[4px] hover:bg-opacity-20">
            <span className="pr-2 scale-125">{INFO_ICON}</span>
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
