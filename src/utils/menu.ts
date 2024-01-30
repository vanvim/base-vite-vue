import {
  MANAGE_EXAM,
  CIRCLE,
  MANAGE_SCHEDULE,
  MANAGE_COMPANY,
} from "./constant";
export const MENU = [
  {
    title: "menu.exam.title",
    path: "/",
    icon: MANAGE_EXAM,
    key: "manage_exam",
    active :  false,
    child: [
      {
        title: "menu.exam.child.category",
        path: "/category",
        key: "category",
        active :  false,
        icon: CIRCLE,
      },
      {
        title: "menu.exam.child.type",
        path: "/type_exam",
        key: "type_exam",
        active :  false,
        icon: CIRCLE,
      },
      {
        title: "menu.exam.child.exam",
        path: "/exam",
        key: "exam",
        active :  false,
        icon: CIRCLE,
      },
      {
        title: "menu.exam.child.draft",
        path: "/draft",
        key: "draft",
        active :  false,
        icon: CIRCLE,
      },
    ],
  },
  {
    title: "menu.schedule",
    path: "/schedule",
    key: "schedule",
    icon: MANAGE_SCHEDULE,
    active :  false,
  },
  {
    title: "menu.company",
    path: "/company",
    key: "company",
    icon: MANAGE_COMPANY,
    active :  false,
  },
];
