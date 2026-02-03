import { DropletIcon } from "lucide-react";

import { Navibar } from "../Navbar/navibar";
import { Sidebar } from "../Sidebar/sidebar";
import { SidebarItem } from "../Sidebar/sidebar.types";

export function Wrapper() {
  const barreLateraleOptions: Array<SidebarItem> = [
    {
      label: "Cards",
      icon: <DropletIcon />,
      onClick: () => console.log("Just print the console"),
    },
  ];

  return (
    <main style={{ fontFamily: "system-ui" }}>
      <Sidebar content={barreLateraleOptions} />
      <Navibar children={<div>Content</div>} />
    </main>
  );
}
