import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

type Props = {};

async function getCategories() {
  return await prisma.category.findMany(); //el findMany es para traer todos los registros
}

const OrderSidebar = async (props: Props) => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className="mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
