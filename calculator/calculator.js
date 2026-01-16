function add(a, b) {
  return Number(a) + Number(b);
}
function sub(a, c) {
  return Number(a) - Number(c);
}
function mul(a, b) {
  return Number(a) * Number(b);
}
function div(a, b) {
  if (Number(b) === 0) throw new Error('Division by zero');
  return Number(a) / Number(b);
}
function mod(a, b) {
  return Number(a) % Number(b);
}
module.exports = { add, sub, mul, div, mod };
