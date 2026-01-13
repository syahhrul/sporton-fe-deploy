import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import Products from "./components/home/products";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CategoriesSection/>
      <Products/>
    </main>
  )
}
