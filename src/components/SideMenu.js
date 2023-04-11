import React from "react";
import Search from "/home/waylonw2077/Development/Code/Phase-2/react-hooks-dq-components/src/components/Search.js"
import MenuLinks from "/home/waylonw2077/Development/Code/Phase-2/react-hooks-dq-components/src/components/MenuLinks.js"
import Logo from "/home/waylonw2077/Development/Code/Phase-2/react-hooks-dq-components/src/components/Logo.js"

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo></Logo>
      <MenuLinks></MenuLinks>
      <Search></Search>
    </aside>
  );
}

export default SideMenu;
