import "./MainMenu.css";
import MenuItems from "../MenuItems/MenuItems";

const MainMenu = () => {
  const data = require("../../json/main.json");

  const lorem = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. All the Lorem Ipsum generators on the internet tend to repeat predefined.";
  const { contents } = data;
  console.log(contents);
  const contentList = contents.map((content, i) => {
    return <MenuItems key={i} name={content.name} count={content.count} sub={content.sub} text={lorem} />;
  });
  return (
    <div>
      <div className="menu-cotainer">
        <h1 className="menu-container-header">Product</h1>
        {contentList}
      </div>
    </div>
  );
};

export default MainMenu;
