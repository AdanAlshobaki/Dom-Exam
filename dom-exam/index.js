const sec1=document.getElementsByClassName("page__header");
const section1=document.getElementsByClassName("navbar__menu");
const ul=document.getElementById("navbar__list");
const section=document.querySelectorAll("section");

for(let i=0;i<section.length;i++){
    const sections=section[i];
    const Id=sections.id;
    
      const sectionsName =  sections.getAttribute("data-nav");
    const item=document.createElement("li");
      const anchor = document.createElement("a");

  anchor.href = `#${Id}`;
  anchor.text = sectionsName;

  item.appendChild(anchor)
    ul.appendChild(item);
}



