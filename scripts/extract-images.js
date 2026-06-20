// Extract all images + links from the current page, return as JSON
(function() {
  const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
    src: img.src,
    alt: img.alt || '',
    width: img.naturalWidth,
    height: img.naturalHeight,
  }));
  const bgImages = [];
  document.querySelectorAll('*').forEach(el => {
    const bg = window.getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none' && bg.includes('url(')) {
      const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
      if (match) bgImages.push({ src: match[1], tag: el.tagName, className: el.className.toString().slice(0,80) });
    }
  });
  const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.href).filter(h => h.startsWith('http'));
  return JSON.stringify({ imgs, bgImages, links: [...new Set(links)] }, null, 2);
})()
