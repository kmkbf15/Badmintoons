import React from "react";
import TopBar from "../components/layout-components/top-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen flex flex-col">
      <TopBar />
      <div className="w-full bg-main-color-5">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
