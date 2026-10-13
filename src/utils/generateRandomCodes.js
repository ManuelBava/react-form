export function generateRandomCode(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    code += chars[idx];
  }
  return code;
}

/**
 * Genera N codici random con sconto casuale.
 * @param {number} count  Numero di codici da creare
 * @returns {Array<Object>}
 */
export function generatePromoList(count = 10) {
  const list = [];
  for (let i = 0; i < count; i++) {
    const code = generateRandomCode(8);
    const discount = Math.floor(Math.random() * 30) + 5; // randomo discount between 5‑34%
    const type = Math.random() < 0.7 ? "percent" : "fixed"; //genera un numero casuale, con decisione se il valore di type sarà percent o fixed
    const expires = new Date();
    expires.setMonth(expires.getMonth() + Math.floor(Math.random() * 6) + 1); // prende la data di oggi ed imposta casualmente il mese ad un valore aggiunto casuale tra 1‑6 mesi dopo il mese odierno

    list.push({
      code,
      discount,
      type,
      expires: expires.toISOString().split("T")[0],
      maxUses: Math.floor(Math.random() * 100) + 20,
      used: 0,
      active: true,
    });
  }
  return list;
}
