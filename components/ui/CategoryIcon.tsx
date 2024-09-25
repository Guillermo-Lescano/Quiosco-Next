import { Category } from "@prisma/client";

type CategoryIconProps = {
  category: Category; //el category es el que viene de la base de datos por ende ya trae los datos internos de la db (id, categoryId, name, slug)
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  return <div>{category.name}</div>;
}
