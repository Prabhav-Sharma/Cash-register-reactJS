//ES6 Version Code
import { useState } from "react";
import "./styles.css";

export default function App() {
  let [display, setDisplay] = useState("hidden");
  let [notes2000, setNotes2000] = useState(0);
  let [notes500, setNotes500] = useState(0);
  let [notes100, setNotes100] = useState(0);
  let [notes50, setNotes50] = useState(0);
  let [notes10, setNotes10] = useState(0);
  let [notes5, setNotes5] = useState(0);
  let [notes1, setNotes1] = useState(0);
  let [billAmount, setBillAmount] = useState(0);
  let [cashAmount, setCashAmount] = useState(0);
  let [buttonDisplay, setButtonDisplay] = useState("none");
  let [tableDisplay, setTableDisplay] = useState("none");
  let [balanceStat, setBalanceStat] = useState(0);

  const billAmountFn = (event) => {
    setBillAmount(event.target.value);
    setDisplay("number");
  };

  const cashAmountFn = (event) => {
    setCashAmount(event.target.value);
    setButtonDisplay("block");
  };
  const noteCalc = (output, amount, currency) => {
    let notes = Math.floor(amount / currency);
    output(notes);
    return amount - notes * currency;
  };

  const divideCash = () => {
    setTableDisplay("block");
    let returnAmount = cashAmount - billAmount;

    setBalanceStat(returnAmount);

    noteCalc(
      setNotes1,
      noteCalc(
        setNotes5,
        noteCalc(
          setNotes10,
          noteCalc(
            setNotes50,
            noteCalc(
              setNotes100,
              noteCalc(
                setNotes500,
                noteCalc(setNotes2000, returnAmount, 2000),
                500
              ),
              100
            ),
            50
          ),
          10
        ),
        5
      ),
      1
    );
  };
  return (
    <div className="App">
      <h1>Cash Register 🧾</h1>
      <h4>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h4>
      <input
        type="number"
        placeholder="Enter Bill Amount"
        onChange={billAmountFn}
      ></input>
      <input
        onChange={cashAmountFn}
        type={display}
        placeholder="Enter Cash Recieved"
      ></input>
      <button style={{ display: buttonDisplay }} onClick={divideCash}>
        Calculate
      </button>
      <h3 style={{ display: tableDisplay }}>The balance is ₹{balanceStat}</h3>
      <table style={{ display: tableDisplay }}>
        <tr>
          <th>₹2000</th>
          <th>₹500</th>
          <th>₹100</th>
          <th>₹50</th>
          <th>₹10</th>
          <th>₹5</th>
          <th>₹1</th>
        </tr>
        <tr>
          <td>{notes2000}</td>
          <td>{notes500}</td>
          <td>{notes100}</td>
          <td>{notes50}</td>
          <td>{notes10}</td>
          <td>{notes5}</td>
          <td>{notes1}</td>
        </tr>
      </table>
    </div>
  );
}
