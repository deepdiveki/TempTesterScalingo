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
    id: 6,
    title: "DDKI ToolBox",
    newTab: false,
    path: "https://ddki-chat.vercel.app/",
    submenu: [
      {
        id: 66,
        title: "Arbeitsblatt Generator",
        newTab: false,
        path: "/ki_tools_und_assistenten/content-writing-tool",
      },
      {
        id: 67,
        title: "KI Chatbot",
        newTab: false,
        path: "/ki_tools_und_assistenten/ki-chat",
      },
      {
        id: 69,
        title: "Persona Chat",
        newTab: false,
        path: "/ki_tools_und_assistenten/product-name-generator",
      },
      {
        id: 68,
        title: "KI-Assistenten Builder",
        newTab: false,
        path: "/ki_tools_und_assistenten/article-title-generator",
      },
      {
        id: 70,
        title: "QR Code Generator",
        newTab: false,
        path: "/ki_tools_und_assistenten/spreadsheet-generator",
      },
      {
        id: 71,
        title: "KI-Assistenten erstellen",
        newTab: false,
        path: "/ki_tools_und_assistenten/interview-question-generator",
      },
    ],
  },
  {
    id: 7,
    title: "Chatbot für Ihre Schule ",
    newTab: false,
    path: "/chatbot-fuer-ihre-schule"
  },
  {
    id: 5,
    title: "Fortbildungen",
    newTab: false,
    path: "/fortbildungen"
  },



];
export default menuData;
