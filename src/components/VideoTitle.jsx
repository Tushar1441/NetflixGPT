import { PLAY_ICON, INFO_ICON } from "../utils/icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-52 pl-16 text-white">
      <div className="w-4/12">
        <h1 className="font-bold leading-tight text-6xl">{title}</h1>
        <p className="mt-6 text-[15px] text-sm">{overview}</p>

        <div className="flex items-center mt-8">
          <button className="px-6 py-2 mr-4 bg-white text-black text-xl font-bold flex items-center rounded-sm">
            <span className="pr-1">{PLAY_ICON}</span> Play
          </button>
          <button className=" bg-gray-300 px-5 py-2 bg-opacity-30 text-xl font-bold flex items-center rounded-sm">
            <span className="pr-1">{INFO_ICON}</span>More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
