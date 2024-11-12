import { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange, // if amount is change (it is a method)
  onCurrencyChange, // if currency is change
  currencyOptions = [],
  selectCurrency = "usd", // for select country bydefault "usd"
  amountDisable = false, // for any one cannot able to manipulate values
  currencyDisable = false,
  className = "",
}) {
  let amountInputId = useId();
  const handleAmountChange = (e) => {
    let value = e.target.value;

    // Remove leading zeros, but allow '0' if it's the only value
    if (value.startsWith("0") && value.length > 1) {
      value = value.replace(/^0+/, "");
    }

    // Call the onAmountChange prop with the new value
    onAmountChange(value === "" ? "" : Number(value)); // Pass an empty string when no input
  };
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          className="outline-none w-full bg-transparent py-1.5"
          value={amount}
          onChange={
            // (e) =>
            // onAmountChange && onAmountChange(Number(e.target.value) )
            handleAmountChange
          }
        />
        {/* //it is used when we change amount in input box then it will call
            // onAmountChane() method.. //Number(e.target.value) => it is used to
          // convert given value into "Number" because events are take value as a "string" */}
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          // onChange={onCurrencyChange} // here not need of conversion into string because (in javascript it is in string and we also need string)
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Input;

// !----------------------------------------------------------------------------------------------------------------

// import { useId } from "react";
// import PropTypes from "prop-types";

// function Input({
//   label,
//   amount = "", // Initial state as an empty string
//   onAmountChange = () => {},
//   onCurrencyChange = () => {},
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {
//   let amountInputId = useId();

//   // Handle the onChange event to remove leading zeros
//   const handleAmountChange = (e) => {
//     let value = e.target.value;

//     // Remove leading zeros, but allow '0' if it's the only value
//     if (value.startsWith("0") && value.length > 1) {
//       value = value.replace(/^0+/, "");
//     }

//     // Call the onAmountChange prop with the new value
//     onAmountChange(value === "" ? "" : Number(value)); // Pass an empty string when no input
//   };

//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className="w-1/2">
//         <label htmlFor={amountInputId} className="text-black/40 mb-2">
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisable}
//           className="outline-none w-full bg-transparent py-1.5"
//           value={amount}
//           onChange={handleAmountChange} // Use the custom handler
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(e) => onCurrencyChange(e.target.value)}
//           disabled={currencyDisable}
//         >
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// Optional: Add prop-types for better type-checking
// Input.propTypes = {
//   label: PropTypes.string.isRequired,
//   amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Updated to allow string for initial empty state
//   onAmountChange: PropTypes.func,
//   onCurrencyChange: PropTypes.func,
//   currencyOptions: PropTypes.arrayOf(PropTypes.string),
//   selectCurrency: PropTypes.string,
//   amountDisable: PropTypes.bool,
//   currencyDisable: PropTypes.bool,
//   className: PropTypes.string,
// };

// export default Input;
