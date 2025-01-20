import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Über uns",
    newTab: false,
    path: "/about",
  },
  {
    id: 5,
    title: "Fortbildungen",
    newTab: false,
    path: "/fortbildungen"
  },

  {
    id: 6,
    title: "DDKI ToolBox",
    newTab: false,
    path: "/ai-examples",
    submenu: [
      {
        id: 66,
        title: "Arbeitsblatt Generator",
        newTab: false,
        path: "/ai-examples/content-writing-tool",
      },
      {
        id: 67,
        title: "KI Chatbot",
        newTab: false,
        path: "/ai-examples/business-name-generator",
      },
      {
        id: 69,
        title: "Persona Chat",
        newTab: false,
        path: "/ai-examples/product-name-generator",
      },
      {
        id: 68,
        title: "KI-Assistenten Builder",
        newTab: false,
        path: "/ai-examples/article-title-generator",
      },
      {
        id: 70,
        title: "QR Code Generator",
        newTab: false,
        path: "/ai-examples/spreadsheet-generator",
      },
      {
        id: 71,
        title: "KI-Assistenten erstellen",
        newTab: false,
        path: "/ai-examples/interview-question-generator",
      },
    ],
  },
];
export default menuData;
