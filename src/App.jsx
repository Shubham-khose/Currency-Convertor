import { useState } from "react";
import Input from "./Components/Input";
import useCurr from "./Hook/useCurr";

export default function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convAmt, setConvAmt] = useState(0);
  let currInfo = useCurr(from);
  let options = Object.keys(currInfo);
  let swap = () => {
    setFrom(to); // Here we are performing Swapping
    setTo(from);
    setAmount(convAmt);
    setConvAmt(amount);
  };
  let convert = () => {
    setConvAmt(amount * currInfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault(); // it will prevent page to refresh "data" on "UI" & do not save the DATA
                convert(); // it will convert given "from" to "to"
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  SWAP
                </button>
              </div>
              <div className="w-full mb-1">
                <Input
                  label="To"
                  amount={convAmt}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
                {/*find issue  */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
