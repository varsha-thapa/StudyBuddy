const uploadForm = document.getElementById('uploadForm');
const notesList = document.getElementById('notesList');

uploadForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const subject = document.getElementById('subject').value;
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong> (${subject}) - ${file.name}`;
    notesList.appendChild(listItem);

    uploadForm.reset();
  }
});
