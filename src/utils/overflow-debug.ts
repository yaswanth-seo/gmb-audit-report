export function highlightOverflow(limit = 50) {
  const vw = document.documentElement.clientWidth;
  const offenders: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>("body *").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const scrollW = el.scrollWidth;
    if (rect.width > vw + 1 || scrollW > vw + 1) {
      el.style.outline = "2px solid red";
      el.style.outlineOffset = "-2px";
      offenders.push(el);
    }
  });
  // eslint-disable-next-line no-console
  console.log("[overflow] offenders:", offenders.slice(0, limit));
  return offenders;
}
