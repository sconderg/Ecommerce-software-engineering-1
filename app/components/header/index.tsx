import SearchIcon from "@/app/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          ShopSmart
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="#" className="text-foreground hover:text-primary">
            Products
          </Link>
          <Link href="#" className="text-foreground hover:text-primary">
            About Us
          </Link>
          <Link href="#" className="text-foreground hover:text-primary">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-auto"
          />
          <Button variant="ghost" size="icon">
            <SearchIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
