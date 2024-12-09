import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";

export default function home() {
  return (
    <div>
      <div>
        <Header />
        <hr className="w-full" />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
