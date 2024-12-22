import { Category } from "../types/product";

async function getCategories(): Promise<Category[]> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/products/categories"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

export default getCategories;
