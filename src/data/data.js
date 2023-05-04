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

export const tags = [
  { name: "Cidadania", slug: "cidadania" },
  { name: "Ciência", slug: "ciencia" },
  { name: "Coringas", slug: "coringas" },
  { name: "Educação", slug: "educacao" },
  { name: "Inclusão social", slug: "inclusao-social" },
  { name: "Infância e adolescência", slug: "infancia-e-adolescencia" },
  { name: "Meio ambiente", slug: "meio-ambiente" },
  { name: "Poder", slug: "poder" },
  { name: "Responsabilidade Social", slug: "responsabilidade-social" },
  { name: "Saúde", slug: "saude" },
  { name: "Saúde Mental", slug: "saude-mental" },
  { name: "Senso crítico", slug: "senso-critico" },
  { name: "Segurança Pública", slug: "seguranca-publica" },
  { name: "Tecnologia", slug: "tecnologia" },
  { name: "Violência", slug: "violencia" },
  { name: "Temas diversos", slug: "temas-diversos" },
];
