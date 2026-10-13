import PromoCodeContent from "../sections/PromoCodeContent";
import SignUpNewsLetter from "../sections/SignUpNewsLetter";

export default function MainContent() {
  // raccogli il feedback dell'utente tramite un voto numerico (radio button) e un commento testuale fornendo una risposta personalizzata in base al punteggio ottenuto

  // calcola il preventivo moltiplicando ore e tariffa oraria, aggiungendo automaticamente un extra al totale se viene superata una certa soglia lavorativa

  // registra i dati di prenotazione del tavolo confermando all'utente i dettagli inseriti (nome, n. ospiti e data) in una scheda di riepilogo

  // crea una rubrica telefonica consentendo l'inserimento di nuovi nominativi e la loro eliminazione
  return (
    <main className="container mx-auto px-4 text-center my-5">
      {/* <SignUpNewsLetter /> */}
      <PromoCodeContent />
    </main>
  );
}
