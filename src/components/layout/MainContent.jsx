import FeedbackContent from "../sections/FeedbackContent";
import PaymentQuote from "../sections/PaymentQuote";
import PromoCodeContent from "../sections/PromoCodeContent";
import SignUpNewsLetter from "../sections/SignUpNewsLetter";

export default function MainContent() {
  // registra i dati di prenotazione del tavolo confermando all'utente i dettagli inseriti (nome, n. ospiti e data) in una scheda di riepilogo

  // crea una rubrica telefonica consentendo l'inserimento di nuovi nominativi e la loro eliminazione
  return (
    <main className="container mx-auto px-4 text-center my-5">
      {/* <SignUpNewsLetter /> */}
      {/* <PromoCodeContent /> */}
      {/* <FeedbackContent /> */}
      <PaymentQuote />
    </main>
  );
}
