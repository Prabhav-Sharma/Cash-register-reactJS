import { useState } from "react";
import "./styles.css";

export default function App() {
  var [display, setDisplay] = useState("hidden");
  var [notes2000, setNotes2000] = useState(0);
  var [notes500, setNotes500] = useState(0);
  var [notes100, setNotes100] = useState(0);
  var [notes50, setNotes50] = useState(0);
  var [notes10, setNotes10] = useState(0);
  var [notes5, setNotes5] = useState(0);
  var [notes1, setNotes1] = useState(0);
  var [billAmount, setBillAmount] = useState(0);
  var [cashAmount, setCashAmount] = useState(0);
  var [buttonDisplay, setButtonDisplay] = useState("none");
  var [tableDisplay, setTableDisplay] = useState("none");
  var [balanceStat, setBalanceStat] = useState(0);

  function billAmountFn(event) {
    setBillAmount(event.target.value);
    setDisplay("number");
  }

  function cashAmountFn(event) {
    setCashAmount(event.target.value);
    setButtonDisplay("block");
  }
  function noteCalc(output, amount, currency) {
    var notes = Math.floor(amount / currency);
    output(notes);
    return amount - notes * currency;
  }

  function divideCash() {
    setTableDisplay("block");
    var returnAmount = cashAmount - billAmount;

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
  }
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
