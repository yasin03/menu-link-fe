import CarouselSection from "@/component/components/user/carousel/Carousel";
import Info from "@/component/components/user/home/Info";
import Info2 from "@/component/components/user/home/Info2";
import Info3 from "@/component/components/user/home/Info3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CarouselSection />
      <Info />
      <Info3 />
      <Info2 />
    </main>
  );
}
