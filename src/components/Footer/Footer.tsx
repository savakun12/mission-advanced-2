import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { SocialIcons } from "./SocialIcons/SocialIcons";
import { FooterLink } from "./FooterLink/FooterLink";

const Footer = () => {
  return (
    <header className="flex justify-center border-t border-b-border bg-primary-background">
      <div className="flex h-auto w-[360px] flex-col gap-[16px] p-[20px] lg:max-h-[427px] lg:w-full lg:max-w-[1440px] lg:gap-[20px] lg:px-[120px] lg:py-[60px]">
        <div className="flex h-auto w-full max-w-[320px] flex-col gap-[16px] lg:max-h-[199px] lg:max-w-[1200px] lg:flex-row lg:justify-between">
          <div className="flex h-auto max-h-[148px] w-full max-w-[320px] flex-col gap-[16px] lg:max-h-[190px] lg:w-auto lg:max-w-[352px]">
            <div className="h-[36px] w-[170px] lg:h-[56px] lg:w-[204px]">
              <img
                src="/images/Logo.png"
                alt=""
                className="ml-[3.79px] mt-[5.44px] h-[25.18px] w-[161.61px] lg:ml-[5px] lg:mt-[13px] lg:h-[30.08px] lg:w-[193.03px]"
              />
            </div>
            <div className="flex h-auto max-h-[96px] w-full max-w-[320px] flex-col gap-[8px] lg:max-h-[118px] lg:w-auto lg:max-w-[352px] lg:gap-[12px]">
              <p className="h-[40px] w-[320px] text-body-medium font-bold text-dark-primary lg:h-[50px] lg:w-[352px] lg:text-body-large">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p className="h-[20px] text-body-medium-mobile font-normal text-dark-primary lg:text-body-medium">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="h-[20px] text-body-medium-mobile font-normal text-dark-primary lg:text-body-medium">
                +62-877-7123-1234
              </p>
            </div>
          </div>
          <div className="flex h-auto w-full max-w-[320px] flex-col gap-[12px] lg:max-h-[199px] lg:w-auto lg:max-w-[485px] lg:flex-row lg:gap-[48px]">
            <FooterLink label="Kategori">
              <a href="">Digital & Teknologi</a>
              <a href="">Pemasaran</a>
              <a href="">Manajemen Bisnis</a>
              <a href="">Pengembangan Diri</a>
              <a href="">Desain</a>
            </FooterLink>
            <FooterLink label="Perusahaan">
              <a href="">Tentang Kami</a>
              <a href="">FAQ</a>
              <a href="">Kebijakan Privasi</a>
              <a href="">Ketentuan Layanan</a>
              <a href="">Bantuan</a>
            </FooterLink>
            <FooterLink label="Komunistas">
              <a href="">Tips Sukses</a>
              <a href="">Blog</a>
            </FooterLink>
          </div>
        </div>
        <div className="lg:h-auto lg:max-h-[33px] lg:w-auto lg:max-w-[1200px] lg:border-b-[1px] lg:border-[#3A35411F] lg:pt-[32px]"></div>
        <div className="flex h-auto max-h-[91px] w-full max-w-[360px] flex-col-reverse gap-[12px] lg:max-h-[35px] lg:max-w-[1200px] lg:flex-row lg:items-center lg:justify-between">
          <p className="body-medium font-normal text-[#333333AD]">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
          <div className="flex gap-[15px]">
            <SocialIcons
              icon={
                <LinkedinIcon width={20} height={20} fill="#222325" stroke="" />
              }
            />
            <SocialIcons
              icon={
                <FacebookIcon width={20} height={20} fill="#222325" stroke="" />
              }
            />
            <SocialIcons icon={<InstagramIcon width={20} height={20} />} />
            <SocialIcons icon={<TwitterIcon width={20} height={20} />} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
