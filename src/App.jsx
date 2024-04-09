import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./customHooks/usCurrencyinfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromAmt, setFromAmt] = useState("usd");
  const [toAmt, setToAmt] = useState("inr");
  const [convertedAmt, setCnonvertedAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(fromAmt);

  let options = Object.keys(currencyInfo);

  const swap = () => {
    setFromAmt(toAmt);
    setToAmt(fromAmt);
    setCnonvertedAmt(amount);
    setAmount(convertedAmt);
  };
  const handleConvert = () => {
    setCnonvertedAmt(amount * currencyInfo[toAmt]);
  };

  function clearAll() {
    setCnonvertedAmt(0);
    setAmount(0);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConvert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(curr) => setFromAmt(curr)}
                selectCurrency={fromAmt}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOptions={options}
                onCurrencyChange={(curr) => setToAmt(curr)}
                selectCurrency={toAmt}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromAmt.toUpperCase()} to {toAmt.toUpperCase()}
            </button>
            <button
              type="button"
              className="w-full bg-red-500 text-white px-4 py-3 rounded-lg mt-2"
              onClick={clearAll}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  p;
}

export default App;
