import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="p-8 xl:py-2 text-white mt-4 sticky top-0 w-full bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
