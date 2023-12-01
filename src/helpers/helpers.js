/** Enmascaa el precio de la publicacion. Ej. 35.5 => $35.50 */
export const maskPrecio = (precio) => {
  if (precio === 0 || precio === "") {
    return "0.00";
  } else {
    return `$${parseFloat(precio).toFixed(2)}`;
  }
};

/** Desmascaa el precio de la publicacion. Ej. $35.50 => 35.0 */
export const unmaskPrecio = (precio) => {
  const noDollarSignPrecio = precio.substring(1);
  if (isNaN(noDollarSignPrecio)) {
    return "0.00";
  }
  return parseFloat(noDollarSignPrecio);
};
