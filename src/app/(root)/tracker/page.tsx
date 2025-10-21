import Tracker from "@/pages/Tracker";
import React from "react";

export const metadata = {
  title: "Money Tracker",
  description: "Track your expenses and income effortlessly.",
};

export default function page() {
  return (
    <div>
      <Tracker />
    </div>
  );
}
