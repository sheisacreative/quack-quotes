import React from "react";
import { RiShareLine, RiImage2Line, RiFileCopyLine } from "react-icons/ri";

export const actionIcons = [
  {
    id: 1,
    action: "Compartilhar",
    icon: <RiShareLine />,
  },
  {
    id: 2,
    action: "Baixar imagem",
    icon: <RiImage2Line />,
  },
  {
    id: 3,
    action: "Copiar",
    icon: <RiFileCopyLine />,
  },
];

export const backgroundGradients = [
  {
    id: 1,
    gradient: "linear-gradient(180deg, #FF7A00 0%, #DBB800 100%)",
  },
  {
    id: 2,
    gradient: "linear-gradient(180deg, #0047FF 0%, #00DBCE 100%)",
  },
  {
    id: 3,
    gradient: "linear-gradient(180deg, #A200DB 0%, #FF00B8 100%)",
  },
];
