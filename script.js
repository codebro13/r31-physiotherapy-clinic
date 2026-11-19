const form = document.getElementById("bookingForm");
const messageBox = document.getElementById("formMessage");
const bookingList = document.getElementById("bookingList");
const STORAGE_KEY = "r31_appointments";

function getSavedBookings() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function renderBookings() {
  const bookings = getSavedBookings();
  bookingList.innerHTML = "";

  if (bookings.length === 0) {
    bookingList.innerHTML = '<li class="list-group-item">No bookings saved yet.</li>';
    return;
  }

  bookings.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${item.name} (${item.phone}) - ${item.session} on ${item.date} [${item.count} session(s)]`;
    bookingList.appendChild(li);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("patientName").value.trim();
  const phone = document.getElementById("patientPhone").value.trim();
  const email = document.getElementById("patientEmail").value.trim();
  const session = document.getElementById("sessionType").value;
  const date = document.getElementById("visitDate").value;
  const count = document.getElementById("sessionsCount").value;
  const consent = document.getElementById("consentCheck").checked;

  if (!name || !phone || !email || !session || !date || !consent) {
    messageBox.className = "mb-3 fw-semibold fs-5 text-danger";
    messageBox.textContent = "Please fill in all required fields and accept consent.";
    return;
  }

  const newBooking = { name, phone, email, session, date, count };
  const bookings = getSavedBookings();
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));

  messageBox.className = "mb-3 fw-semibold fs-5 text-success";
  messageBox.textContent = "Appointment booked and saved!";
  form.reset();
  renderBookings();
});

renderBookings();