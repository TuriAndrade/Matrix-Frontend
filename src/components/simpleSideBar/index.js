import React from "react";
import { Back } from "../../svgs/icons";
import Link from "next/link";

export default function SimpleSideBar() {
  return (
    <div className="sideBar sideBar--closed">
      <Link href="/">
        <a className="sideBar__item">
          <div className="sideBar__itemIconBox">
            <Back className="sideBar__itemIcon uIconSmall" />
          </div>
        </a>
      </Link>
    </div>
  );
}
