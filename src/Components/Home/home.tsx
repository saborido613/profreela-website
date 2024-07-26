function Home() {
  return (
    <div className="flex h-[85vh] bg-profreela_backgroundImage bg-contain bg-no-repeat bg-center text-white">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <p className="text-7xl lg:text-9xl font-bold">ProFreela</p>
        <hr className="bg-white h-1 w-[35vh] lg:w-[60vh]" />
        <p className="text-sm lg:text-xl">
          Um app feito de freela para freelas
        </p>
      </div>
    </div>
  );
}

export default Home;
