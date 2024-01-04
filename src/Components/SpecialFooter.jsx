function SpecialFooter() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="-mt-5 ">
      <div className="h-px w-full opacity-50 bg-lightest"></div>
      <div className="text-white capitalize gap-5 text-sm mt-10 mb-20 flex relative">
        <p className="opacity-75 hover:opacity-100 cursor-pointer">Legal</p>
        <p className="opacity-75 hover:opacity-100 cursor-pointer">
          Privacy Center
        </p>
        <p className="opacity-75 hover:opacity-100 cursor-pointer">
          Privacy Policy
        </p>
        <p className="opacity-75 hover:opacity-100 cursor-pointer">cookies</p>
        <p className="opacity-75 hover:opacity-100 cursor-pointer">about ads</p>
        <p className="opacity-75 hover:opacity-100 cursor-pointer">
          accessibility
        </p>
        <p className="right-4 text-sm absolute text-lightest ">
          © {year} Spotify AB
        </p>
      </div>
      <p className="flex text-lightest -mt-12 text-sm items-center justify-center">
        Made with ❤️ by Shreekant Gumanju
      </p>
    </div>
  );
}
export default SpecialFooter;
