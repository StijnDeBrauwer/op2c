import { HomePage } from "../pages/home/home.page";
import { WhatDoWeDoPage } from "../pages/whatDoWeDo/whatDoWeDo.page";
import { WhoAreWePage } from "../pages/whoAreWe/whoAreWe.page";

export const Routes = [
  {
    route: "/home",
    label: "Home",
    component: HomePage,
  },
  {
    route: "/wie-zijn-we",
    label: "Wie zijn we?",
    component: WhoAreWePage,
  },
  {
    route: "/wat-doen-we",
    label: "Wat doen we?",
    component: WhatDoWeDoPage,
  },
];
