import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";
//prisma client tiene toda la info para poder interactuar con nuestra db

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.category.createMany({
      data: categories
    })
    await prisma.product.createMany({
      data: products
    })
  } catch (error) {
    console.log(error)
  }
}

//lo que hacemos aca es ejecutar la funcion main , si todo sale bien entonces esperamos a que se desconecte
//esto cierra y no deja la conexion abierta
// si hay algun error, y detiene la ejecucion y frena la db
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })