import { Button } from "@/elements/Buttons";

export function Hero() {
  return (
    <section
      className="relative flex h-auto max-h-[400px] w-full max-w-[320px] flex-col items-center justify-center gap-[24px] rounded-[10px] px-[20px] py-[64px] sm:max-w-[1200px]"
      style={{
        backgroundImage: "url('/images/Hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-10 rounded-[10px] bg-black opacity-80"></div>
      <div className="relative z-20 flex h-auto max-h-[262px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[215px] sm:max-w-[920px]">
        <h2 className="text-center font-heading text-heading-3-mobile font-large-bold text-light-primary lg:text-heading-1">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h2>
        <p className="text-center font-body text-body-small font-medium tracking-small text-light-primary lg:text-body-medium">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
      </div>
      <Button className="relative z-20 h-auto max-h-[40px] w-full max-w-[280px] bg-primary-default py-[10px] font-body text-body-small font-small-regular tracking-small text-light-primary sm:max-h-[42px] sm:max-w-[369px] sm:text-body-medium sm:font-medium-bold">
        Temukan Video Course untuk Dipelajari!
      </Button>
    </section>
  );
}
