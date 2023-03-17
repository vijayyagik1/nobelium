import { useState } from "react";
import "../CSS/component2.css";

export function Component2() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    // console.log(e.target.value);
    let totalChar = e.target.value;
    if (totalChar.length <= 100) {
      setInput(totalChar);
    }
  }

  return (
    <form>
      <label htmlFor="textArea" className="for">
        Write your queries below:
      </label>
      <textarea
        name="textArea"
        onChange={handleChange}
        placeholder="Character limit: 100"
        value={input}
      />
    </form>
  );
}