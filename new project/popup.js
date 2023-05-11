const videoUrl = document.getElementById('videoUrl');
const videoNote = document.getElementById('videoNote');
const saveBtn = document.getElementById('saveBtn');
const bookmarksContainer = document.getElementById('bookmarksContainer');
const seeMoreBtn = document.getElementById('seeMoreBtn');
const goBackBtn = document.getElementById('goBackBtn');

let bookmarks = [];
let currentIndex = 0;

function displayBookmarks() {
  bookmarksContainer.innerHTML = '';
  for (let i = currentIndex; i < currentIndex + 3 && i < bookmarks.length; i++) {
    const bookmark = document.createElement('div');
    bookmark.classList.add('bookmark');

    const link = document.createElement('a');
    link.href = bookmarks[i].url;
    link.textContent = bookmarks[i].url;
    link.target = '_blank';

    const note = document.createElement('p');
    note.textContent = `Note: ${bookmarks[i].note}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      bookmarks.splice(i, 1);
      saveBookmarksToLocal();
      displayBookmarks();
    });

    bookmark.appendChild(link);
    bookmark.appendChild(note);
    bookmark.appendChild(deleteBtn);
    bookmarksContainer.appendChild(bookmark);
  }
  seeMoreBtn.style.display = currentIndex + 3 < bookmarks.length ? 'block' : 'none';
  goBackBtn.style.display = currentIndex > 0 ? 'block' : 'none';
}

function saveBookmarksToLocal() {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function loadBookmarksFromLocal() {
  const bookmarksStr = localStorage.getItem('bookmarks');
  bookmarks = bookmarksStr ? JSON.parse(bookmarksStr) : [];
}

function saveBookmark() {
  const url = videoUrl.value;
  const note = videoNote.value;
  if (url && bookmarks.length < 500) {
    bookmarks.push({ url, note });
    saveBookmarksToLocal();
    videoUrl.value = '';
    videoNote.value = '';
    displayBookmarks();
  }
}

saveBtn.addEventListener('click', saveBookmark);
seeMoreBtn.addEventListener('click', () => {
  currentIndex += 3;
  displayBookmarks();
});
goBackBtn.addEventListener('click', () => {
  currentIndex -= 3;
  displayBookmarks();
});

loadBookmarksFromLocal();
displayBookmarks();
