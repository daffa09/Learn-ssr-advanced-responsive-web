import { headers } from "next/headers";
import HomeDesktop from "./pages/home-desktop";
import HomeMobile from "./pages/home-mobile";
import { Product } from "./constant/product";

export default async function Home() {
  // Deteksi device
  const ua = (await headers()).get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad/i.test(ua);

  // Ambil data dari API publik
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  // Limit jumlah produk untuk mobile
  const filteredProducts = isMobile ? products.slice(0, 5) : products;

  return isMobile ? (
    <HomeMobile products={filteredProducts} />
  ) : (
    <HomeDesktop products={filteredProducts} />
  );
}
