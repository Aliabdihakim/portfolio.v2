import clsx from "clsx";
import styles from "./Header.module.css";
import { WavesBackground } from "./WavesBackground/WavesBackground";
import { Major_Mono_Display } from "next/font/google";

const major = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <h1 className={clsx(major.className, "text-7xl")}>Ali Abdihakim</h1>
      <WavesBackground />
    </div>
  );
};

export default Header;
