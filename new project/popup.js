class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word, index) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.isEndOfWord = true;
      currentNode.index = index;
    }
  
    search(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          return [];
        }
        currentNode = currentNode.children[char];
      }
      return this.getWords(currentNode, word);
    }
  
    getWords(node, prefix) {
      const words = [];
      if (node.isEndOfWord) {
        words.push({ index: node.index, word: prefix });
      }
      for (const char in node.children) {
        words.push(...this.getWords(node.children[char], prefix + char));
      }
      return words;
    }
  }
  
  const videoUrl = document.getElementById('videoUrl');
  const videoNote = document.getElementById('videoNote');
  const videoTime = document.getElementById('videoTime');
  const saveBtn = document.getElementById('saveBtn');
  const saveTimeBtn = document.getElementById('saveTimeBtn');
  const bookmarksContainer = document.getElementById('bookmarksContainer');
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const goBackBtn = document.getElementById('goBackBtn');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const trie = new Trie();
  
  let bookmarks = [];
  let currentIndex = 0;
  
  function displayBookmarks(bookmarksToDisplay = bookmarks) {
    bookmarksContainer.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + 3 && i < bookmarksToDisplay.length; i++) {
      const bookmark = document.createElement('div');
      bookmark.classList.add('bookmark');
  
      const link = document.createElement('a');
      link.href = bookmarksToDisplay[i].url;
      link.textContent = bookmarksToDisplay[i].url;
      link.target = '_blank';
  
      const note = document.createElement('p');
      note.textContent = `Note: ${bookmarksToDisplay[i].note}`;
  
      const times = document.createElement('p');
      if (bookmarksToDisplay[i].times) {
        times.textContent = `Times: ${bookmarksToDisplay[i].times.join(', ')}`;
      }
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        bookmarks.splice(i, 1);
        saveBookmarksToLocal();
        displayBookmarks();
      });
  
      bookmark.appendChild(link);
      bookmark.appendChild(note);
      bookmark.appendChild(times);
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
    bookmarks.forEach((bookmark, index) => {
      trie.insert(bookmark.note.toLowerCase(), index);
    });
  }
  
  function saveBookmark() {
    const url = videoUrl.value;
    const note = videoNote.value;
    if (url && note && bookmarks.length < 500) {
      bookmarks.push({ url, note });
      trie.insert(note.toLowerCase(), bookmarks.length - 1);
      saveBookmarksToLocal();
      videoUrl.value = '';
      videoNote.value = '';
      displayBookmarks();
    } else {
      alert('Please provide both the video URL and note.');
    }
  }
  
  function saveTime() {
    const time = videoTime.value;
    const url = videoUrl.value;
    if (time && url) {
      const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.url === url);
      if (bookmarkIndex !== -1) {
        bookmarks[bookmarkIndex].times = bookmarks[bookmarkIndex].times || [];
        bookmarks[bookmarkIndex].times.push(time);
        saveBookmarksToLocal();
        videoTime.value = '';
        displayBookmarks();
      } else {
        alert('Please save the video URL first.');
      }
    } else {
      alert('Please provide both the video URL and time.');
    }
  }
  
  function searchNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      const results = trie.search(searchTerm);
      displayBookmarks(results.map(result => bookmarks[result.index]));
    } else {
      displayBookmarks();
    }
  }
  
  saveBtn.addEventListener('click', saveBookmark);
  saveTimeBtn.addEventListener('click', saveTime);
  seeMoreBtn.addEventListener('click', () => {
    currentIndex += 3;
    displayBookmarks();
  });
  goBackBtn.addEventListener('click', () => {
    currentIndex -= 3;
    displayBookmarks();
  });
  searchBtn.addEventListener('click', searchNotes);
  
  loadBookmarksFromLocal();
  displayBookmarks();
  