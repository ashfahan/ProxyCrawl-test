import axios from "axios";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const title = import("../assets/title.gif");
const background = import("../assets/background.png");

function getquerypram(name) {
  const query = window.location.search
    .slice(1)
    .split("&")
    .reduce((query, pram) => {
      const [key, value] = pram.split("=");
      query[key] = value;
      return query;
    }, {});

  return name ? query[name] : query;
}

export const load = (...data) => {
  const resource = [title, background];
  Promise.all(resource).then((file) => {
    file.forEach((file, index) => (resource[index].file = file.default));
    const token = "h2HCtRw9r0ZIgn0wyR0hzA";
    const url = getquerypram(url).url;
    document.body.innerHTML = "<div>Loading Product info</div>";
    axios
      .get(`https://api.proxycrawl.com/?token=${token}&autoparse=true&url=${url}`)
      .then((resp) => {
        console.log(resp);
        document.body.innerHTML = html(resp.data.body);
        script();
      })
      .catch((error) => {
        document.body.innerHTML = "Error occured while loading product info";
        console.error(error);
      });
  });
};

export const html = (data) => {
  return `<header class="lyt-header grid py-1rem">
  <div class="column w-3 is-lg txt-bold">Ashfahan</div>
  <div class="column w-5 control has-icon-right">
    <input type="search" placeholder="Enter Amazon Url" class="bg-hide input is-min is-dark" />
    <i class="ml-6 is-right icon ri-search-2-line btn p-1rem"></i>
  </div>
  <div class="column w-66 justify-end align-middle flex">
    <div class="flex justify-around">
      <div class="btn is-min is-primary border-hide clr-black font-500">About</div>
      <div class="btn is-min is-primary border-hide clr-black font-500">Contact</div>
      <div class="btn is-min is-primary border-hide clr-black font-500">Product</div>
      <div class="btn is-min is-primary border-hide clr-black font-500">Blog</div>
    </div>
    <div class="btn is-sld is-primary icon ri-lg p-20px is-round ml-1rem">
      <i class="ri-shopping-bag-3-fill"></i>
    </div>
    <div class="btn is-sld is-primary icon ri-lg p-20px is-round ml-1rem">
      <i class="ri-user-line"></i>
    </div>
  </div>
  </header>
  <div class="px-1rem bg-light py-7px mb-4">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item" data-separator=">">
      <a href="#">Search</a>
    </li>
    <li class="breadcrumb-item" data-separator=">">
      <a href="#">Product</a>
    </li>
    <li class="breadcrumb-item" data-separator=">" aria-current="page">Item</li>
  </ol>
  </div>
  <main>
  <section class="relative p-1rem">
    <div class="grid">
      <div class="column p-2 w-14 relative">
        <div id="thumb" class="splide relative">
          <div class="splide__track">
            <ul class="splide__list">
            ${data.images
              .map((image) => {
                return `<li class="splide__slide bg-light flex align-middle">
                <img class="img p-1rem" src="${image}" />
              </li>`;
              })
              .join("")}
            ${data.videos
              .map((video) => {
                return `<li class="splide__slide bg-light flex align-middle">
                  <video paused class="img p-1rem" src="${video}" />
                </li>`;
              })
              .join("")}
            </ul>
          </div>
          <div class="absolute align-middle w-24 flex justify-between splide__arrows top-50 trans-y--50 txt-bold">
            <button class="static inline-flex btn is-sld is-box is-dark splide__arrow txt-3 splide__arrow--prev w-auto h-auto trans-none border left-0 o-100 p-1rem" type="button" aria-controls="thumb-track" aria-label="Previous slide">
              <i class="clr-inherit ri-arrow-left-line icon overflow-hidden"></i>
            </button>
            <button class="static inline-flex btn is-sld is-box is-dark splide__arrow txt-3 splide__arrow--next w-auto h-auto trans-none border right-0 o-100 p-1rem" type="button" aria-controls="thumb-track" aria-label="Go to first slide">
              <i class="clr-inherit ri-arrow-right-line icon overflow-hidden"></i>
            </button>
          </div>
          <div class="splide__progress mt-4">
            <div class="splide__progress__bar o-75 bg-primary"></div>
          </div>
        </div>
      </div>
      <div class="column p-22" id="properties">
        <ol class="breadcrumb mb-0 pl-0">
        ${data.breadCrumbs
          .map(({ name, link }) => {
            return `<li class="breadcrumb-item" data-separator=">">
            <a href="${link}">${name}</a>
          </li>`;
          })
          .join("")}
        </ol>

        <h1 class="txt-normal mb-0 clr-black">Sony A8H 65-inch TV: BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility - 2020 Model</h1>
          <div class="my-4 flex align-middle">
            ${
              data.isPrime
                ? `<div class="mx-2 flex">
                <i class="icon pr-1rem ri-check-double-line"></i> Amazon Prime Support
              </div> |`
                : ""
            }
            <div class="mx-2 ${data.inStock ? "clr-valid" : "clr-error"}">${data.inStock ? "In Stock" : "Out of stock"}</div>|
            <a class="mx-2 txt-decor-none clr-body" href="">
              Add your review
            </a>
            |
            <a class="mx-2 txt-decor-none clr-body flex clr-black txt-bold" href="">
              <i class="icon pr-1rem ri-share-fill"></i> Share
            </a>
          </div>
        <h2 class="clr-black">${data.price}</h2>
        <div>
          <h4 class="clr-black">— Description</h4>
          <div>${data.description}</div>
        </div>
        <div class="my-4">
          <div>
            <h4 class="clr-black">— Specification</h4>
          </div>
          <ul class="list-style-square">
          ${data.brand ? `<li>Brand : ${data.brand}</li>` : ""}
          ${data.merchantInfo?.name ? `<li>Merchant : ${data.merchantInfo?.name}</li>` : ""}
          ${data.customerReview ? `<li>Customer Review : ${data.customerReview} from ${data.customerReviewCount}</li>` : ""}
          ${data.shippingMessage ? `<li>Shipping : ${data.shippingMessage}</li>` : ""}
          ${data.warrantyMessage ? `<li>Warrenty : ${data.warrantyMessage}</li>` : ""}
        </div>
      </div>
    </div>
  </section>
  <section class="relative p-4">
    <ul class="nav nav-tabs border-hide" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="btn is-min mx-2 border-hide is-primary txt-4 txt-bold BebasNeue active" id="Detail-tab" data-bs-toggle="tab" data-bs-target="#Detail" type="button" role="tab" aria-controls="Detail" aria-selected="true">Detail</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="btn is-min mx-2 border-hide is-primary txt-4 txt-bold BebasNeue" id="Link-tab" data-bs-toggle="tab" data-bs-target="#Link" type="button" role="tab" aria-controls="Link" aria-selected="false">Link</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="btn is-min mx-2 border-hide is-primary txt-4 txt-bold BebasNeue" id="Reviews-tab" data-bs-toggle="tab" data-bs-target="#Reviews" type="button" role="tab" aria-controls="Reviews" aria-selected="false">Reviews</button>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="Detail" role="tabpanel" aria-labelledby="Detail-tab">
        <div class="my-4">
          <div>
            <h4 class="clr-black">— Product Specification</h4>
          </div>
          <ul class="list-style-square">
          ${data.productInformation
            .map((spec) => {
              return `<li>${spec.name} : ${spec.value}</li>`;
            })
            .join("")}
          </ul>
        </div>
        <div class="my-4">
          <div>
            <h4 class="clr-black">— Features</h4>
          </div>
          <ul class="list-style-square">
          ${data.features
            .map((feature) => {
              return `<li>${feature}</li>`;
            })
            .join("")}
          </ul>
        </div>
      </div>
      <div class="tab-pane fade" id="Link" role="tabpanel" aria-labelledby="Link-tab">
        <div class="my-4">
          <h4 class="clr-black">— Documentation</h4>
          <ul class="list-style-square">
          ${Object.entries(data.productGuidesAndDocuments)
            .map(([name, link]) => {
              return `<li><a href="${link}">${name}</a></li>`;
            })
            .join("")}
          </ul>
        </div>
        <div class="my-4">
          <div>
            <h4 class="clr-black">— Links</h4>
          </div>
          <ul class="list-style-square">
          ${data.byLineInfo ? `<li><a href="${data.byLineInfo.link}">${data.byLineInfo.name}</a></li>` : ""}
          </ul>
        </div>
      </div>
      <div class="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
        <div class="grid my-4">
          <div class="column">
          ${data.reviews
            .map((reivew) => {
              return `<div class="grid my-4">
            <div class="column w-2 txt-center">
              <img class="img is-circle" src="https://secure.gravatar.com/avatar/04e539821ff4f8328871e169672a66bf?s=60&d=mm&r=g" alt="" />
            </div>
            <div class="column">
              <div class="flex justify-between">
                <div class="mb-2">
                  <div class="flex">
                    <a href="${reivew.reviewerLink}" class="block BebasNeue txt-5">${reivew.reviewerName}</a>
                    ${reivew.reviewVerifiedPurchase ? `<div class="mx-7px flex align-middle"><i class="clr-valid icon ri-shield-check-fill"></i></div>` : ""}
                  </div>
                  <div>${reivew.reviewDate}</div>
                </div>
                <div class="flex">
                  <div class="mx-7px">Rating : ${reivew.reviewRating}</div>
                  <div class="mx-7px">
                    <i class="ri-file-copy-line"></i>
                  </div>
                </div>
              </div>
              <div class="txt-4 clr-black mb-2">${reivew.reviewTitle}</div>
              <div>${reivew.reviewText}</div>
              <div class="is-sm">${reivew.reviewVotes}</div>
            </div>
          </div>`;
            })
            .join("")}
          </div>
          <div class="column w-4">
            <div class="my-4 pt-10 sticky top-0">
              <h4 class="clr-black">— Ratings</h4>
              <div class="grid align-middle">
                <div class="column w-6">5 Star</div>
                <div class="progress column">
                  <div class="progress-bar" style="width: ${data.productReviewBottom[0]["5star"]}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="grid align-middle">
                <div class="column w-6">4 Star</div>
                <div class="progress column">
                  <div class="progress-bar" style="width: ${data.productReviewBottom[1]["4star"]}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="grid align-middle">
                <div class="column w-6">3 Star</div>
                <div class="progress column">
                  <div class="progress-bar" style="width: ${data.productReviewBottom[2]["3star"]}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="grid align-middle">
                <div class="column w-6">2 Star</div>
                <div class="progress column">
                  <div class="progress-bar" style="width: ${data.productReviewBottom[3]["2star"]}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="grid align-middle">
                <div class="column w-6">1 Star</div>
                <div class="progress column">
                  <div class="progress-bar" style="width: ${data.productReviewBottom[4]["1star"]}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </main>
  <footer class="lyt-footer bg-darkbg-black clr-disabled p-4 pb-2">
  <div class="txt-center p-10">
    <div class="display-4 txt-bold BebasNeue clr-white">Subscribe now and get 10% off new collection garments</div>
    <div class="mt-2 mb-4">Sign up to be the first to hear about exclusive deals, special offers and upcoming collections</div>
    <div class="w-12 mx-auto column w-5 control has-icon-right">
      <input type="search" placeholder="Enter Your Email here" class="bg-hide input is-min is-light" />
      <i class="ml-6 is-right icon ri-xl ri-arrow-right-line btn p-1rem"></i>
    </div>
  </div>
  <div class="grid justify-between">
    <div class="column">
      <div>©2020 Enzy copyright</div>
    </div>
    <div class="column txt-center">
      <div>Language English</div>
      <div>Currency USD</div>
    </div>
    <div class="column justify-end flex">
      <i class="icon clr-white ri-facebook-fill"></i>
      <i class="icon clr-white ri-firefox-fill"></i>
      <i class="icon clr-white ri-dribbble-line"></i>
      <i class="icon clr-white ri-codepen-line"></i>
    </div>
  </div>
  </footer>`;
};

export const script = () => {
  new Splide("#thumb", {
    type: "loop",
    perPage: 2,
    gap: "16px",
    autoplay: true,
    interval: 4000,
  }).mount();
};
