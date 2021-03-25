import { ActionsPage } from "../pages/actions/actions.page";
import { ContactPage } from "../pages/contact/contact.page";
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
  {
    route: "/acties",
    label: "Acties",
    component: ActionsPage,
  },

  {
    route: "/contact",
    label: "Contact",
    component: ContactPage,
  },
];
