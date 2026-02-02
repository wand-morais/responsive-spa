import { INavbarProps } from "./navibar.types";
import "./styles.css";

export const Navibar = ({ children }: INavbarProps) => {
  return <div className="navbar">{children}</div>;
};
