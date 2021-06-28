export const load = () => {
  document.body.innerHTML = html();
};

export const html = () => {
  return `
  <div class="h-min-100vh flex align-middle justify-center"> Page Not found</div>
  `;
};
