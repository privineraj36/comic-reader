const editions = {
  english: { label: 'English', title: 'English Edition', file: 'comics/english.pdf' },
  tamil: { label: 'தமிழ்', title: 'Tamil Edition', file: 'comics/tamil.pdf' },
  malay: { label: 'Bahasa Melayu', title: 'Malay Edition', file: 'comics/malay.pdf' }
};
const reader = document.getElementById('reader');
const frame = document.getElementById('pdfFrame');
const title = document.getElementById('readerTitle');
const label = document.getElementById('readerLabel');
const openLink = document.getElementById('openPdf');
const downloadLink = document.getElementById('downloadPdf');

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => {
    const edition = editions[button.dataset.language];
    if (!edition) return;
    title.textContent = edition.title;
    label.textContent = `SHE & I · ${edition.label.toUpperCase()}`;
    frame.src = edition.file + '#view=FitH';
    openLink.href = edition.file;
    downloadLink.href = edition.file;
    downloadLink.setAttribute('download', `she-and-i-${button.dataset.language}.pdf`);
    reader.hidden = false;
    reader.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
document.getElementById('backButton').addEventListener('click', () => {
  frame.src = 'about:blank';
  reader.hidden = true;
  document.getElementById('languageChoices').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
