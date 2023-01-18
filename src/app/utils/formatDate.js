export function formatDate() {
  const date = new Date().toLocaleDateString("en-ca");
  return date;
}
