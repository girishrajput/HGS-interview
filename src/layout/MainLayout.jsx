import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />

      <main className="min-h-screen p-6">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;