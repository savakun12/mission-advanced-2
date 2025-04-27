import { useEffect } from "react";
import { useLocation } from "react-router";
import useIsOpenStore from "../../stores/dropDownStore";

export function StateResetHandler() {
  const location = useLocation();
  const { setIsOpen } = useIsOpenStore(); // Tambahkan fungsi reset di store

  useEffect(() => {
    setIsOpen(false); // Reset state setiap kali halaman berubah
  }, [location, setIsOpen]);

  return null; // Tidak perlu render apa pun
}
