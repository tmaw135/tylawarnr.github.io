
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const measurements = document.getElementById('measurements').value;

  if (!name || !email || !measurements) {
    alert('Please fill in all fields.');
    return false;
  }
  return true;
}
