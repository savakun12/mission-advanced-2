import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { useLocation } from "react-router";
import useIsLoginStore from "@/stores/loginStore";
export function Template({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const { isLogin } = useIsLoginStore();
  return (
    <div className="grid">
      <Navbar islogin={isLogin} />
      {children}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
}
