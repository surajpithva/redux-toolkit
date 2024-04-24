import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of icecream - {numOfIcecreams} </h2>
      <button onClick={() => dispatch(ordered())}>order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        restock icecream
      </button>
    </div>
  );
};

export default IcecreamView;
