const myTechStack = [
    {
    name: "Android",
    img: "https://i.postimg.cc/cHdfNH2Z/android.png",
    exp: "2",
    },
    {
      name: "Angular",
      img: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      exp: "1",
    },
    {
      name: "Bootstrap",
      img: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      exp: "3",
    },
    {
      name: "Vue",
      img: "https://i.postimg.cc/dt91z6v7/vue.png",
      exp: "2",
    },
    {
      name: "React",
      img: "https://i.postimg.cc/XNdXg3zk/react.png",
      exp: "2 / 3",
    },
    {
      name: "Mongodb",
      img: "https://i.postimg.cc/PfgYt2B2/mongodb.png",       
      exp: "0.25",
    },
    {
      name: "Laravel",
      img: "https://i.postimg.cc/RZzFYYjx/laravel.png",
      exp: "1",
    },
    {
      name: "Node.js", 
      img: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
      exp: "5 / 6",
    },
  ];
localStorage.setItem("list-tech", JSON.stringify(myTechStack));

const btnSubmit = document.getElementById("btn-submit");

function pushTech () {
    const listTechStack = JSON.parse(localStorage.getItem("list-tech"));
    const techStack = document.getElementById("techstack-main");
    techStack.innerHTML=``;
    for(let i = 0; i < listTechStack.length; i++){
        const div = document.createElement("div");
        const teck = listTechStack[i];
        div.innerHTML += `<div class="tech tech-${i+1}"><img src="${teck.img}" alt="${teck.name},${teck.exp}" width="100px" height="100px"><br>Name :${teck.name}<br>Exp: ${teck.exp} Years</div>`;
        console.log(div);
        div.classList.add("tech")
        techStack.appendChild(div);
    };
};
pushTech(); 


function renderTech () {
    const listProject = JSON.parse(localStorage.getItem("list-project"));
    const bodyProject = document.getElementById("myProjects");
    bodyProject.innerHTML = ``;
    for(let j = 0; j < listProject.length ; j++){
        const divpro = document.createElement("div");
        const tech = listProject[j];
        divpro.innerHTML += `
        <img src="${tech.imgUrl}" alt="img-1" width="375px" height="260px">
        <p class="tile">${tech.projectName}</p>
        <p class="sample">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
        <p class="stack"><b>Tech stack :</b> ${tech.tags}</p>
        <div class="link-git"><p><i class="fa-solid fa-link"></i><a href="${tech.link}">Live Priview</a></p>
        <p><i class="fa-brands fa-github"></i><a href="${tech.link}">View Code</a></p></div>
        `;
        divpro.classList.add("content")
        bodyProject.appendChild(divpro);
    };
};
renderTech();
