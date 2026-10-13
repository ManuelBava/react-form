import { useState } from "react";
import FormContent from "../UI/FormContent";
import InputContent from "../UI/InputContent";
import { PROMO_LIST, validatePromo } from "../../utils/promoCodes";

export default function PromoCodeContent() {
  // valida un codice promozionale inserito dall'utente mostrando lo sconto applicato o segnalando l'invalidità del codice

  const [result, setResult] = useState({
    valid: "",
    message: "",
    discount: "",
    type: "",
  });
  const [promo, setPromo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validatePromo(promo);
    setResult(validation);

    // Se vuoi aumentare il contatore di utilizzi (solo demo):
    if (validation.valid) {
      // incrementa `used` nel tuo array (in prod. farlo sul server)
      const promoObj = PROMO_LIST.find(
        (p) => p.code.toUpperCase() === promo.toUpperCase(),
      );
      if (promoObj) promoObj.used += 1;
    }
  }

  return (
    <>
      <FormContent
        buttonTitle="Apply"
        titleForm="Promo code"
        onSubmit={handleSubmit}
        visibilityButton={promo.length > 0}
      >
        {/* <!-- Campo promo --> */}
        <InputContent
          htmlFor="promo"
          labelText="promo"
          id="promo"
          placeholder="Insert here your promo code"
          type="text"
          value={promo}
          onChange={(e) => setPromo(e.target.value.trim())}
        />
      </FormContent>

      {result && promo.length > 0 && (
        <p
          className={`mt-3 text-sm ${
            result.valid ? "text-green-600" : "text-red-600"
          }`}
        >
          {result.message}
        </p>
      )}
    </>
  );
}
