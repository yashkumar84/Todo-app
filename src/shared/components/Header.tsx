import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home, Plus, List, Info } from "lucide-react";

const Header = () => {
  return (
    <div className="w-screen flex justify-center bg-gray-100 shadow-md">
      <NavigationMenu className="bg-gray-100 p-4 rounded-lg ">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex items-center gap-2`}
              >
                <Home className="w-4 h-4" />
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/add">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex items-center gap-2`}
              >
                <Plus className="w-4 h-4" />
                Add ToDo
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/list">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex items-center gap-2`}
              >
                <List className="w-4 h-4" />
                List ToDo
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex items-center gap-2`}
              >
                <Info className="w-4 h-4" />
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
