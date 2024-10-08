import "./App.css";
import Products from "./components/Products";

function App({ personData }) {
  // console.log("arg", arg);

  let a = 5;
  let b = 4;
  let c = 3;
  console.log(a + b);

  return (
    <>
      {personData.map((obj) => (
        <Products key={obj.name} name={obj.name} branch={obj.branch} />
      ))}
      {/* {personData.map((obj) => obj.name)}

      {personData.map((obj) => {
        return <Prop name={obj.name} branch={obj.branch} />;
      })} */}

      {/* <Prop name={personData[0].name} branch={personData[0].branch} />
      <Prop name="Sal" branch="mechanical" />
      <Prop name="Salm" branch="mechanical" />
      <Prop name="Salma" branch="mechanical" />
      <Prop name="Salman" branch="mechanical" /> */}
      <h2>react</h2>
      <p>`a+b+c =`{a + b + c}</p>
    </>
  );
}

export default App;
