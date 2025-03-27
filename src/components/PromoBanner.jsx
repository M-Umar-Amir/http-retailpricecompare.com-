export default function PromoBanner() {
  return (
    <div className="bg-customGreen py-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <h3 className="text-4xl md:text-6xl font-bold text-white animate-colorChange">
          BUY MORE, BUY SAVE
        </h3>
        <button className="bg-black text-white mt-4 md:mt-0 md:ml-10 py-3 px-8 text-lg md:text-xl font-semibold hover:bg-customGreen hover:text-white transition duration-300">
          CLICK HERE
        </button>
      </div>
    </div>
  );
}
