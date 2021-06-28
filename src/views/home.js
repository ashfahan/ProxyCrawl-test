const title = import("../assets/title.gif");
const background = import("../assets/background.png");

export const load = (...data) => {
  const resource = [title, background];
  Promise.all(resource).then((file) => {
    file.forEach((file, index) => (resource[index].file = file.default));
    document.body.innerHTML = html(...data);
    script();
  });
};

export const html = () => {
  return `<header class="bg-hide fixed lyt-header grid pt-2">
      <div class="column w-3 is-lg txt-bold">Ashfahan</div>
      <div class="column off-5 w-16 justify-end align-middle flex">
        <div class="flex justify-around">
          <div class="btn is-min is-primary border-hide clr-black font-500">About</div>
          <div class="btn is-min is-primary border-hide clr-black font-500">Contact</div>
          <div class="btn is-min is-primary border-hide clr-black font-500">Product</div>
          <div class="btn is-min is-primary border-hide clr-black font-500">Blog</div>
        </div>
        <div class="btn is-sld is-primary icon ri-lg p-20px is-round ml-2 inline-flex"><i class="icon ri-shopping-bag-3-fill"></i></div>
        <div class="btn is-sld is-primary icon ri-lg p-20px is-round ml-2 inline-flex"><i class="icon ri-user-line"></i></div>
      </div>
    </header>
    <main class="img-bg" style="background-position: unset; background-image: url(${background.file})">
      <section class="relative p-4 h-min-100vh grid align-middle h-100">
        <div class="column relative">
          <div class="title is-sm txt-bold">We partner with <span class="txt-outline-primary clr-white">SaaS</span> and <span class="txt-outline-primary clr-white">digital product owners</span> to provide <span class="txt-outline-primary clr-white">design solutions</span> that scale for years to come.</div>
          <div class="bg-light py-2 px-4 is-pill mt-2 flex">
            <input type="search" id="url" placeholder="Enter Amazon Url" class="bg-hide input is-min" />
            <button id="searchbutton" class="btn is-sld is-primary is-pill py-2 px-6 ml-4 flex">Search <i class="ml-6 icon ri-search-2-line"></i></button>
          </div>
          <div id="error" class="hidden clr-error ml-4 mt-1rem" type="search" id="url">Please Enter Valid Amazon Product Url</div>
        </div>
        <div class="column relative txt-center"><img class="img" src="${title.file}" alt="" /></div>
      </section>
    </main>`;
};

export const script = () => {
  document.querySelector("#searchbutton").onclick = () => {
    const produturl = document.getElementById("url").value;
    console.log(produturl);
    if (produturl) window.location = `./result?url=${produturl}`;
    else {
      const error = document.getElementById("error");
      error.classList.remove("hidden");
    }
  };
};
