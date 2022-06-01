import React from "react";
import { ReactNode } from "react";
import "./Layout.scss";
type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="background-content">
      <main className="content">{children}</main>
    </div>
  );
}
