export const load = () => {
  document.body.innerHTML = html();
};

export const html = () => {
  return `
  <div class="flex align-middle txt-center justify-center h-min-100vh">
    <div>
      <div style="max-width:200px" class="mx-auto"><i class="icon title is-lg clr-error ri-alert-line"></i></div>
      <div class="txt-2 BebasNeue">Page Not Found</div>
    </div>
  </div>
  `;
};
