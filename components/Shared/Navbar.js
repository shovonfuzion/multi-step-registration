const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <h3 className="text-3xl font-bold mr-4">LOGO</h3>
            </div>
            <div className="flex items-center space-x-4 font-semibold">
              <a href="#">Link-1</a>
              <a href="#">Link-2</a>
              <a href="#">Link-3</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="py-2 px-3 bg-yellow-400 text-white rounded">
              LogIn
            </a>
            <a href="#" className="py-2 px-3 bg-yellow-400 text-white rounded">
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
