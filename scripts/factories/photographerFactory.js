// import {Photographer} from "../pages/photographer";

function photographerFactory(data) {
  console.log(data);
  const { id, name, city, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;


  function getUserCardDOM() {
    const article = document.createElement("article");
    const articleHead = document.createElement("div");
    const articleBody = document.createElement("div");
    const linkCard = document.createElement("a");
    const img = document.createElement("img");
    const titleCard = document.createElement("h2");
    const cityCard = document.createElement("span")
    const taglineCard = document.createElement("p")
    const priceCard = document.createElement("p")

    articleHead.classList.add("article_head");
    articleBody.classList.add("article_body");
    cityCard.classList.add("article_body_city");
    taglineCard.classList.add("article_body_tagline");
    priceCard.classList.add("article_body_price");
    
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    linkCard.setAttribute("src", "/photographer.html")
    
    img.addEventListener("click", function() {
      // Photographer()
      window.location.href = `/photographer.html` + `?id=${id}`;
    });

    // linkCard.textContent = "/photographer.html"
    titleCard.textContent = name;
    cityCard.textContent = city;
    taglineCard.textContent = tagline;
    priceCard.textContent = price + "€/jour";

    article.appendChild(articleHead);
    article.appendChild(articleBody);
    // articleHead.appendChild(linkCard);
    // linkCard.appendChild(img)
    
    articleHead.appendChild(img);
    articleBody.appendChild(titleCard);
    articleBody.appendChild(cityCard);
    articleBody.appendChild(taglineCard);
    articleBody.appendChild(priceCard);

    return article;
  }
  return { name, city, tagline, picture, getUserCardDOM };
}
