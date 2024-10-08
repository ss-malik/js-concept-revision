import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import data from "./utils/data";

function App() {
  return (
    <>
      <Header />
      <Products data={data} name={"salman"} />
    </>
  );
}

export default App;
