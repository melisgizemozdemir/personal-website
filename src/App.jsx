import Home from "./pages/Home/Home";
import { GlobalProvider } from "./context";

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
