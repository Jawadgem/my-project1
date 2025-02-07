import Clients from "@/app/components/cleint";
import Dessert from "./dessert";
import Drinks from "./drinks";
import MainCourse from "./mainCourse";
import MenuFooter from "./menuFooter";
import MenuTop from "./menuTop";
import StarterMenu from "./startermenu";

const MainMenu = () => {
  return (
    <div className="bg-myWhite">
      <MenuTop />
      <StarterMenu />
      <MainCourse />
      <Clients />
      <Dessert />
      <Drinks />
      <MenuFooter />
    </div>
  );
};

export default MainMenu;
