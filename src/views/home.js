const title = import("../assets/title.gif");
const background = import("../assets/background.png");

export const load = (...data) => {
  const resource = [title, background];
  Promise.all(resource).then((file) => {
    file.forEach((file, index) => (resource[index].file = file.default));
    document.body.innerHTML = html(...data);
    htmlPost();
  });
};

export const html = () => {
  return `<header class="bg-hide fixed lyt-header grid pt-2">
      <div class="column w-3@sm is-lg txt-bold"><a href="./">Ashfahan</a></div>
      <div class="column hidden off-5 w-16 justify-end align-middle flex@sm">
        <div class="flex justify-around">
          <button class="btn is-min is-primary border-hide clr-black font-500">About</button>
          <button class="btn is-min is-primary border-hide clr-black font-500">Contact</button>
          <button class="btn is-min is-primary border-hide clr-black font-500">Product</button>
          <button class="btn is-min is-primary border-hide clr-black font-500">Blog</button>
        </div>
        <div class="btn is-sld is-primary icon ri-lg p-20px is-round ml-2 inline-flex"><i class="icon ri-shopping-bag-3-fill"></i></div>
        <div class="btn is-sld is-primary icon ri-lg p-20px is-round ml-2 inline-flex"><i class="icon ri-user-line"></i></div>
      </div>
      <div class="column hidden@sm flex align-middle justify-end realive z-top">
       <button id="hamburgermenu_open" class="flex p-0 p-7px btn is-fillin is-primary"><i class="icon ri-2x ri-menu-line"></i></button>
      </div>
    </header>
    <aside class="lyt-sidebar fixed p-2 flex align-middle is-y justify-center">
      <button id="hamburgermenu_close" class="absolute top-0 right-0 mt-1rem mr-20px flex p-0 p-7px btn is-fillin is-primary"><i class="icon ri-2x ri-close-line"></i></button>
      <div class="txt-center mb-8">
        <div><button class="btn is-min is-primary clr-black border-wide border-primary border-top-0 font-500 txt-4">About</button></div>
        <div><button class="btn is-min is-primary clr-black border-wide border-primary border-top-0 font-500 txt-4">Contact</button></div>
        <div><button class="btn is-min is-primary clr-black border-wide border-primary border-top-0 font-500 txt-4">Product</button></div>
        <div><button class="btn is-min is-primary clr-black border-wide border-primary border-top-0 font-500 txt-4">Blog</button></div>
      </div>
      <div class="mb-2 btn is-sld is-primary txt-5 is-round ml-2 inline-flex"><i class="icon ri-shopping-bag-3-fill"></i> Shopping Cart</div>
      <div class="mb-2 btn is-sld is-primary txt-5 is-round ml-2 inline-flex"><i class="icon ri-user-line"></i> Login / Sign Up</div>
    </aside>
    <main class="img-bg mt-header" style="background-position: unset; background-image: url(${background.file})">
      <section class="relative p-4 h-min-100vh grid align-middle h-100">
        <div class="column w-24 w-12@lg relative">
          <div class="title is-sm txt-bold">Scrap Any <span class="clr-white txt-outline-primary">Amazon Product</span> just enter the product <span class="clr-white txt-outline-primary">URL</span> and you are good to gooo!</div>
          <div class="bg-light py-2 px-4 is-pill mt-2 flex">
            <input type="search" id="url" placeholder="Enter Amazon Url" class="bg-hide input is-min" />
            <button id="searchbutton" class="btn is-sld is-primary is-pill py-2 px-6 ml-4 flex">Search <i class="ml-6 icon ri-search-2-line"></i></button>
          </div>
          <div id="error" class="hidden clr-error ml-4 mt-1rem" type="search" id="url">Please Enter Valid Amazon Product Url</div>
        </div>
        <div class="column w-24 w-12@lg relative txt-center"><img class="img" src="${title.file}" alt="" /></div>
      </section>
    </main>`;
};

export const htmlPost = () => {
  const sidebar = document.querySelector("aside");
  document.querySelector("#searchbutton").onclick = () => {
    const produturl = document.getElementById("url").value;
    console.log(produturl);
    if (produturl) window.location = `./result?url=${produturl}`;
    else {
      const error = document.getElementById("error");
      error.classList.remove("hidden");
    }
  };

  document.querySelector("#hamburgermenu_open").onclick = () => {
    sidebar.classList.add("active");
  };
  document.querySelector("#hamburgermenu_close").onclick = () => {
    sidebar.classList.remove("active");
  };
};
