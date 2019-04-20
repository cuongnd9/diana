function s4() {
  return Math.floor(new Date().getTime() * Math.random())
    .toString(16)
    .substr(1, 5);
}

export default function thinid() {
  return s4() + '-' + s4() + '_' + s4();
}
