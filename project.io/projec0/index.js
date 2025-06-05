function uploadNote() {
  const note = prompt("Enter note content:");
  if (note) {
    localStorage.setItem("userNote", note);
    alert("Note saved locally!");
  }
}

function setReminder() {
  const reminder = prompt("Set your reminder:");
  if (reminder) {
    localStorage.setItem("studyReminder", reminder);
    alert("Reminder saved locally!");
  }
}
