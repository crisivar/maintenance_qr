import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
      <Sidebar />
            <main className="flex-grow">
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
