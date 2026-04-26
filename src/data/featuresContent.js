import {
  LuUserCheck,
  LuActivity,
  LuCalendarClock,
  LuUsers,
} from "react-icons/lu";

import { CgGym } from "react-icons/cg";
import { FaHeartbeat } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";

const featuresContent = [
  {
    Icon: CgGym, // LuUserCheck,
    title: "Strength Training", // "Expert Personal Training",
    description: "Build muscle and get stronger", // "Get matched with certified trainers who create customized workout plans tailored to your specific body goals and fitness level.",
  },
  {
    Icon: FaHeartbeat, // LuActivity,
    title: "Cardio Program", // Modern Fitness Gear",
    description: "Improve endurance and burn fat", // "Train with top-of-the-line cardio and strength equipment designed to maximize your performance and ensure your safety.",
  },
  {
    Icon: LuBicepsFlexed, // LuCalendarClock,
    title: "Flexibility", // "Flexible 24/7 Access",
    description: "Increase mobility and prevent injury", // "Your schedule shouldn't stop your progress. Access our facilities any time of the day or night, 365 days a year.",
  },
  {
    Icon: IoStatsChart, // LuUsers,
    title: "Track Progress", // "Nutrition & Wellness",
    description: "Monitor your progress and stay motivated", //"Beyond the gym floor, we provide professional nutritional guidance to help you fuel your body and recover faster.",
  },
];

export default featuresContent;
