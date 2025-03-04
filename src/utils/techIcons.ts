import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { FaWrench } from "react-icons/fa";
import { createElement, ComponentType } from "react";

// Define default colors for each technology
const techColors: Record<string, string> = {
  mongodb: "text-green-500",
  mysql: "text-blue-600",
  django: "text-green-700",
  vue: "text-green-500",
  vuejs: "text-green-500",
  expressjs: "text-gray-500",
  python: "text-yellow-500",
  arduino: "text-blue-400",
  docker: "text-blue-400",
  java: "text-red-600",
  apachemaven: "text-red-500",
  opencv: "text-cyan-500",
  javafx: "text-blue-500",
  cmake: "text-blue-500",
  cplusplus: "text-blue-700",
  mqtt: "text-purple-500",
};

const getTechIcon = (tech: string): JSX.Element => {
  const formattedTech = tech.replace(/\s+/g, "").toLowerCase(); // Normalize input

  // Strictly typed object mapping
  const faIcons: Record<string, ComponentType<{ className?: string }>> = FaIcons;
  const siIcons: Record<string, ComponentType<{ className?: string }>> = SiIcons;

  // Get matching icon from FontAwesome or SimpleIcons
  const IconComponent = faIcons[`Fa${formattedTech.charAt(0).toUpperCase() + formattedTech.slice(1)}`] ||
                        siIcons[`Si${formattedTech.charAt(0).toUpperCase() + formattedTech.slice(1)}`];

  // Get predefined color or use default gray
  const iconColor = techColors[formattedTech] || "text-gray-300";

  return createElement(IconComponent || FaWrench, { className: `w-5 h-5 ${iconColor}` });
};

export default getTechIcon;