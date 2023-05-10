chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveTime') {
      const video = document.querySelector('video');
      if (video) {
        const currentTime = video.currentTime;
        chrome.storage.sync.set({ videoTime: currentTime }, () => {
          alert('Video time saved: ' + currentTime);
        });
      } else {
        alert('No video found on this page.');
      }
    } else if (request.action === 'loadTime') {
      chrome.storage.sync.get('videoTime', (data) => {
        const video = document.querySelector('video');
        if (video && data.videoTime) {
          video.currentTime = data.videoTime;
          video.play();
        } else {
          alert('No video found or no saved time.');
        }
      });
    }
  });