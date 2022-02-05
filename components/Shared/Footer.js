const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-center text-green-400">
              Swadesh
            </h3>
            <h3 className="text-3xl font-semibold text-green-400">
              Bangladesh
            </h3>
          </div>
          <div className="flex flex-col justify-start font-bold">
            <a href="#">About Swadesh</a>
            <a href="#">Read Our Blogs</a>
            <a href="#">FAQ</a>
          </div>
          <div className="flex flex-col justify-start font-bold">
            <a href="#" className="">
              Payment Option
            </a>
            <a href="#" className="">
              SignUp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
