import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "=") {
      try {
        const formattedValue = value.replace(/x/g, "*").replace(/÷/g, "/");
        setValue(String(eval(formattedValue)));
      } catch (error) {
        setValue("Error");
      }
    } else {
      setValue(value + inputValue);
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="display">
              <input type="text" name="" id="" value={value} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={() => setValue("")} />
              <input
                type="button"
                value="DEL"
                onClick={() => setValue(value.slice(0, -1))}
              />
              <input type="button" value="%" onClick={handleButtonClick} />
              <input type="button" value="÷" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="7" onClick={handleButtonClick} />
              <input type="button" value="8" onClick={handleButtonClick} />
              <input type="button" value="9" onClick={handleButtonClick} />
              <input type="button" value="x" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="4" onClick={handleButtonClick} />
              <input type="button" value="5" onClick={handleButtonClick} />
              <input type="button" value="6" onClick={handleButtonClick} />
              <input type="button" value="-" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="1" onClick={handleButtonClick} />
              <input type="button" value="2" onClick={handleButtonClick} />
              <input type="button" value="3" onClick={handleButtonClick} />
              <input type="button" value="+" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="00" onClick={handleButtonClick} />
              <input type="button" value="0" onClick={handleButtonClick} />
              <input type="button" value="." onClick={handleButtonClick} />
              <input type="button" value="=" onClick={handleButtonClick} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
