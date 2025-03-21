import { prisma } from "@/src/lib/prisma";

type Props = {};

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProducts(params.category);
  console.log(products);
  //con los params lo que ahcemos es leer el parametro category que esta en la url, osea es el dato pasado por query
  return <div>Order Page</div>;
}
