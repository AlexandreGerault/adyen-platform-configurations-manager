import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />

      <main className="px-12 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
