// quantifyText selects text (zero, one, two, few) based on quantity (count)
function quantifyText(count, {zero, one, two, many = `${count}` }) {
  let template = '';
  if (count === 0) {
    template = zero || many;
  } else if (count === 1) {
    template = one || many;
  } else if (count === 2) {
    template = two || many;
  } else {
    template = many;
  }
  return template.replace("{count}", count);
}

export default quantifyText;
