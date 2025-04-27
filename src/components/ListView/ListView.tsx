import { Cards } from "./Cards/Cards";
import { Tabs } from "./Tabs/Tabs";
import { useProducts } from "@/hooks/products/useProducts";

export function ListView() {
  const { products } = useProducts();

  return (
    <div className="flex w-full max-w-[320px] flex-col gap-[24px] sm:h-auto sm:max-w-[1440px] sm:gap-[32px]">
      <div className="flex w-full max-w-[320px] flex-col gap-[10px] sm:h-auto sm:max-h-[67px] sm:w-auto sm:max-w-[623px]">
        <h3 className="text-heading-3-mobile font-heading-3 text-dark-primary sm:text-heading-3">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="text-body-medium-mobile font-medium text-dark-secondary sm:text-body-medium sm:tracking-medium">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <Tabs
        labels={[
          "Semua Kelas",
          "Pemasaran",
          "Desain",
          "Pengembangan Diri",
          "Bisnis",
        ]}
      />
      <div className="grid w-full max-w-[320px] grid-cols-1 place-items-center gap-[20px] sm:max-w-[1200px] sm:gap-[24px] lg:grid-cols-3">
        {products.slice(0, 9).map((data, index) => (
          <Cards
            key={index}
            courseImage={data.courseImage}
            altCourseImage={data.title}
            title={data.title}
            description={data.description}
            tutorImage={data.tutorImage}
            tutorAlt={data.tutorName}
            tutorName={data.tutorName}
            tutorPosition={data.tutorPosition}
            tutorCompany={data.tutorCompany}
            rating={data.rating ?? 0}
            reviewCount={data.reviewCount ?? 0}
            price={data.price ?? 0}
          />
        ))}
      </div>
    </div>
  );
}
