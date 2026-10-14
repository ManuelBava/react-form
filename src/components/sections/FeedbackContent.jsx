import { useState } from "react";
import FormContent from "../UI/FormContent";
import InputContent from "../UI/InputContent";

// raccogli il feedback dell'utente tramite un voto numerico (radio button) e un commento testuale fornendo una risposta personalizzata in base al punteggio ottenuto

export default function FeedbackContent() {
  // Genera 10 voci: voto da 1 a 10
  const feedbacks = Array.from({ length: 10 }, (_, i) => ({
    vote: i + 1,
    review: "",
  }));

  const [reviewInput, setReviewInput] = useState(""); // <-- stato per l'input review
  const [selectedVote, setSelectedVote] = useState(null); // <-- stato per il radio
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Voto scelto:", selectedVote);
    console.log("Recensione:", reviewInput);
    // con forEach (blocco di istruzioni)
    feedbacks.forEach((item) => {
      if (item.vote === selectedVote) {
        item.review = reviewInput;
      }
    });
    setReviewInput("");
    setResult({ review: reviewInput, vote: selectedVote });
    console.log(feedbacks);
  }

  return (
    <section>
      <h2>Feedback Section</h2>

      <div className="flex gap-3">
        {/* ---- RADIO BUTTONS ---- */}
        <ul className="flex flex-col items-start">
          {feedbacks.map(({ vote }, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="radio"
                name="feedback"
                id={`feedback-${i}`}
                value={vote}
                checked={selectedVote === vote}
                onChange={() => setSelectedVote(vote)} // aggiorna lo stato
              />
              <label htmlFor={`feedback-${i}`} className="w-5">{vote}</label>
            </li>
          ))}
        </ul>

        {/* ---- FORM PER LA REVIEW ---- */}
        <FormContent
          buttonTitle="Review us"
          titleForm="Let Us Know How you Felt"
          onSubmit={handleSubmit}
          visibilityButton={reviewInput.length > 0}
        >
          <InputContent
            htmlFor="review"
            labelText="review"
            id="review"
            placeholder="Insert here your review"
            type="text"
            value={reviewInput}
            onChange={(e) => setReviewInput(e.target.value)}
          />
        </FormContent>
      </div>
      {result && (
        <p className={`mt-3 text-sm`}>
          {result.vote <= 5
            ? "Siamo spiacenti per la cattiva esperienza, prenderemo il suo feedback e lo useremo per migliorarci. Grazie"
            : "Siamo entusiasti per la positiva esperienza. Grazie di cuore!"}
        </p>
      )}
    </section>
  );
}
