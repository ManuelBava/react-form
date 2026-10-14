import { useState } from "react";
import FormContent from "../UI/FormContent";
import InputContent from "../UI/InputContent";

// calcola il preventivo moltiplicando ore e tariffa oraria, aggiungendo automaticamente un extra al totale se viene superata una certa soglia lavorativa
export default function PaymentQuote() {
  const [hours, setHours] = useState("");
  const [fare, setFare] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const h = Number(hours);
    const f = Number(fare);

    let resultQuote;

    if (h > 50) {
      const regularHours = 50;
      const extraHours = h - 50;
      const extraFare = f + 10;

      resultQuote = regularHours * f + extraHours * extraFare;
    } else {
      resultQuote = h * f;
    }

    setResult(resultQuote + " €");
    setHours("");
    setFare("");
  }

  return (
    <section>
      <div>
        <FormContent
          buttonTitle="Payment Quote"
          titleForm="Calculate your working quote here!"
          onSubmit={handleSubmit}
          visibilityButton={hours > 0 && fare > 0}
        >
          <InputContent
            htmlFor="hours"
            labelText="hours (Max: 70)"
            id="hours"
            placeholder="Insert here your hours"
            type="number"
            value={hours}
            min={0}
            max={70}
            onChange={(e) => {
              // controlliamo che il valore sia compreso tra 0 e 70
              const val = e.target.value;
              if (val === "") return setHours("");
              setHours(Math.min(70, Math.max(0, Number(val))));
            }}
          />
          <InputContent
            htmlFor="fare"
            labelText="fare (Max: 50 €)"
            id="fare"
            placeholder="Insert here your fare"
            type="number"
            value={fare}
            min={0}
            max={50}
            valuta={"€"}
            onChange={(e) => {
              // controlliamo che il valore sia compreso tra 0 e 50
              const val = e.target.value;
              if (val === "") return setFare("");
              setFare(Math.min(50, Math.max(0, Number(val))));
            }}
          />
        </FormContent>
      </div>
      <div>
        {result && <p> {`La tua quota settimanale sarà di ${result}`}</p>}
      </div>
    </section>
  );
}
