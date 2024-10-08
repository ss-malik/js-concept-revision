import React, { useState } from "react";
// import data from "../utils/data";

function Products({ data }) {
  const [input, setInput] = useState("");
  const [filterData, setFilterData] = useState(data);

  function inputFunction(e) {
    setInput(e.target.value);
  }

  function recieveInput() {
    let res = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilterData(res);
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        onChange={inputFunction}
        style={{ padding: "10px", marginRight: "10px", fontSize: "16px" }}
        type="text"
        placeholder="enter your input"
      />
      <button
        onClick={recieveInput}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        search
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filterData.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt="" loading="lazy" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
