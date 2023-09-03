import HeaderStore from "../../components/HeaderStore";
import { Route, Routes } from "react-router-dom";
import ContentHome from "../../components/ContentHome";
import Cart from "../Cart";

export default function Home() {

  return (
    <div className="pb-20 h-screen overflow-y-auto">
      <div className="h-80 bg-slate-500 bg-[url('https://i.imgur.com/mQ1dLlv.png')] bg-contain rounded-b-[2rem] shadow-xl" />
      <div className="container mx-auto h-full">
        <HeaderStore />
        <Routes>
          <Route path="/" element={<ContentHome />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
