import logo from "/images/WayFreela-transparent.png";

export default function Logo() {
  return (
    <div className={`text-white font-bold `}>
      <a href="#" className="flex gap-5 items-center">
        <img src={logo} alt="WayFreela Logo" className="h-14" />
        <h1 className="text-3xl">WayFreela</h1>
      </a>
    </div>
  );
}
