
function getTime() {

  const now = new Date();
  console.log(now);
  return [now.toLocaleString("en-GB"), now]
}
export default getTime;
