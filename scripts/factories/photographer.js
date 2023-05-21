function photographerFactory(data) {
  console.log(data);
  const { name, city, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const articleHead = document.createElement("div");
    const articleBody = document.createElement("div");
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
    titleCard.textContent = name;
    cityCard.textContent = city;
    taglineCard.textContent = tagline;
    priceCard.textContent = price + "€/jour";

    article.appendChild(articleHead)
    article.appendChild(articleBody)
    articleHead.appendChild(img)
    articleBody.appendChild(titleCard);
    articleBody.appendChild(cityCard);
    articleBody.appendChild(taglineCard);
    articleBody.appendChild(priceCard);

    return article;
  }
  return { name, city, tagline, picture, getUserCardDOM };
}
