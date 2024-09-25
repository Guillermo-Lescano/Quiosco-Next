import { prisma } from "@/src/lib/prisma";

type Props = {};

async function getCategories() {
  return await prisma.category.findMany(); //el findMany es para traer todos los registros
}

const OrderSidebar = async (props: Props) => {
  const categories = await getCategories();
  console.log(categories);
  return <aside className="md:w-72 md:h-screen bg-white">Order Aside</aside>;
};

export default OrderSidebar;
