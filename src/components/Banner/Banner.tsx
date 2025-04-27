export function Banner() {
  return (
    <section
      style={{ backgroundImage: "url(/images/bg-banner.jpeg)" }}
      className="relative flex h-[400px] w-full max-w-[320px] flex-col items-center justify-center rounded-[4px] bg-cover bg-center px-[20px] py-[20px] before:absolute before:inset-0 before:z-0 before:rounded-[4px] before:bg-black before:bg-opacity-80 sm:h-[400px] sm:max-h-full sm:max-w-[1200px] sm:rounded-[4px]"
    >
      <div className="z-10 flex h-auto max-h-[304px] w-auto max-w-[280px] flex-col gap-[40px] sm:max-h-[216px] sm:max-w-[525px]">
        <div className="flex h-auto max-h-[168px] w-full max-w-[280px] flex-col gap-[4px] text-center sm:max-h-[118px] sm:w-auto sm:max-w-[525px]">
          <p className="sm:text-body-large text-body-medium font-medium text-[#C1C2C4]">
            NEWSLETTER
          </p>
          <div className="flex max-h-[142px] w-full max-w-[280px] flex-col gap-[10px] sm:h-auto sm:max-h-[89px] sm:w-auto sm:max-w-[525px]">
            <h3 className="text-heading-3-mobile font-heading-3 text-light-primary sm:text-heading-3">
              Mau Belajar Lebih Banyak?
            </h3>
            <p className="text-body-medium-mobile font-medium text-light-secondary sm:text-body-medium">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik&nbsp;hariesok.id
            </p>
          </div>
        </div>
        <div className="flex h-auto max-h-[96px] w-auto max-w-[280px] flex-col items-center gap-[16px] bg-transparent sm:max-h-[58px] sm:w-full sm:max-w-[525px] sm:gap-[20px] sm:rounded-[10px] sm:bg-white sm:py-[8px] sm:pl-[32px] sm:pr-[8px] lg:flex-row">
          <input
            type="email"
            placeholder="Masukan Emailmu"
            className="body-medium h-auto max-h-[40px] w-[280px] rounded-[10px] bg-white py-[10px] pl-[12px] pr-[8px] text-center font-normal text-[#333333AD] lg:h-[22px] lg:w-[333px] lg:rounded-none lg:bg-transparent lg:p-0 lg:text-left"
          />
          <button className="item-center flex max-h-[40px] w-full max-w-[280px] justify-center rounded-[10px] bg-[#FFBD3A] px-[26px] py-[10px] lg:h-auto lg:max-h-[42px] lg:w-auto lg:max-w-[132px] lg:gap-[8px] lg:p-0 lg:px-[26px] lg:py-[10px]">
            <span className="body-medium font-bold text-white">Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
}
