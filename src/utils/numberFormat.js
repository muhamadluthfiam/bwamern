export default number => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  if (number <= 1000 || number >= 1000) {
    return formatNumbering.format(number);
  } else {
    return number;
  }
}