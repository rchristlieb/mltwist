import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HostDetailsPage } from "./pages/HostDetailsPage";
import { HostsPage } from "./pages/HostsPage";
import { PropertiesPage } from "./pages/PropertiesPage";
import { PropertiesDetailsPage } from "./pages/PropertyDetailsPage";
// import NewArticle from "./NewArticle";
// import ArticleOne from "./ArticleOne";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 bg-indigo-600">
        <div className="flex">
          <div className="w-64">
            <Header />
          </div>
          <div></div>
        </div>
      </div>
      <div className="main h-auto flex grow">
        <div className="w-64 bg-indigo-600">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<PropertiesPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertiesDetailsPage />} />
            <Route path="/hosts" element={<HostsPage />} />
            <Route path="/hosts/:id" element={<HostDetailsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
