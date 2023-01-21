// export default number => {
//   const formatNumbering = new Intl.NumberFormat("id-ID");
//   if (number <= 1000 || number >= 1000) {
//     return formatNumbering.format(number);
//   } else {
//     return number;
//   }

//   const formatNumberingUS = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' });
//   if (number <= 1000 || number >= 1000) {
//     return formatNumbering.format(number);
//   } else {
//     return number;
//   }
// }
function formatNumberingIndonesian(number) {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  if (number <= 1000 || number >= 1000) {
      return formatNumbering.format(number);
    } else {
      return number;
    }
}

function formatCurrencyUS(number) {
  const formatNumbering = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' });
  return formatNumbering.format(number);
}

function formatDate(number) {
  return number
}

export { formatNumberingIndonesian, formatCurrencyUS, formatDate }