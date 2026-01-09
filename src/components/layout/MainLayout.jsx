import Navbar from "./Navbar";
import Footer from "./Footer"; // if you already have footer

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar variant="solid" />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
