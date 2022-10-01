export function formatDate(date: number) {
  const myDate = new Date(date);
  const day = formatNumberDate(myDate.getDate());
  const month = formatNumberDate(myDate.getMonth());
  const year = formatNumberDate(myDate.getFullYear());

  return `${day}.${month}.${year}`;
}

function formatNumberDate(date: number) {
  if (date <= 9) {
    return `0${date}`;
  } else {
    return date;
  }
}
