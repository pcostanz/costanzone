// Favicon generator utility
export const generateFavicon = (letter: string): string => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  if (!ctx) return "";

  // Set background - transparent
  // ctx.fillStyle = '#0f172a'; // slate-950 background
  // ctx.fillRect(0, 0, 32, 32);

  // Set text properties
  ctx.fillStyle = "#10b981"; // emerald-500 text color
  ctx.font = "bold 32px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw the letter
  ctx.fillText(letter.toUpperCase(), 16, 16);

  return canvas.toDataURL("image/png");
};

export const createFaviconLink = (dataUrl: string): HTMLLinkElement => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = dataUrl;
  return link;
};

export const updateFavicon = (letter: string): void => {
  const dataUrl = generateFavicon(letter);

  // Remove existing favicon links
  const existingLinks = document.querySelectorAll('link[rel="icon"]');
  existingLinks.forEach((link) => link.remove());

  // Add new favicon
  const newLink = createFaviconLink(dataUrl);
  document.head.appendChild(newLink);
};
