import { generatePromoList } from "./generateRandomCodes";

export const PROMO_LIST = [
  {
    code: "WELCOME10",
    discount: 10, // 10%
    type: "percent",
    expires: "2027-12-31",
    maxUses: 100,
    used: 12,
    active: true,
  },
  {
    code: "FLAT5",
    discount: 5, // 5€
    type: "fixed",
    expires: "2026-12-31",
    maxUses: 50,
    used: 50,
    active: false, // disattivato
  },
];

const DEMO_PROMOS = generatePromoList(5);
PROMO_LIST.push(...DEMO_PROMOS);
console.log("Lista demo: ", DEMO_PROMOS);
console.log("Lista COMPLETA: ", PROMO_LIST);

/**
 * Verifica la validità di un codice.
 * @param {string} input  Codice inserito dall’utente (già normalizzato)
 * @returns {{valid: boolean, message: string, discount?: number, type?: string}}
 */
export function validatePromo(input) {
  // trova il record (case‑insensitive)
  const isTheCodeExists = PROMO_LIST.find(
    (p) => p.code.toUpperCase() === input.toUpperCase(),
  );

  if (!isTheCodeExists) {
    return { valid: false, message: "Codice non riconosciuto." };
  }
  if (!isTheCodeExists.active) {
    return { valid: false, message: "Codice momentaneamente non attivo." };
  }
  if (new Date() > new Date(isTheCodeExists.expires)) {
    return { valid: false, message: "Codice scaduto." };
  }
  if (isTheCodeExists.used >= isTheCodeExists.maxUses) {
    return { valid: false, message: "Codice esaurito." };
  }

  // Se arriva qui, è valido
  return {
    valid: true,
    message: `Sconto applicato! ${isTheCodeExists.discount}${
      isTheCodeExists.type === "percent" ? "%" : "€"
    }`,
    discount: isTheCodeExists.discount,
    type: isTheCodeExists.type,
  };
}
