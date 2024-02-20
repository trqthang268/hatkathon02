const myProjects = [
    {
      imgUrl: "picture/Rectangle 6.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      imgUrl: "picture/Rectangle 4.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      imgUrl: "picture/Rectangle 8.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      imgUrl: "picture/Rectangle 12.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      imgUrl: "picture/Rectangle 13.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];

const form = document.getElementById("main-form");

let editIndex = -1;
let editExisting = false;

function renderProject () {
    const listProject = JSON.parse(localStorage.getItem("list-project"));
    const bodyTable = document.getElementById("table-body");
    bodyTable.innerHTML = ``;

    for(let i = 0; i < listProject.length; i++){
        const tr = document.createElement("tr");
        const project = listProject[i];
        tr.innerHTML += `
        <td>${i+1}</td>
        <td>${project.projectName}</td>
        <td>${project.imgUrl}</td>
        <td>${project.link}</td>
        <td>${project.tags}</td>
        <td>
            <button onclick="editProjects(${i})">Edit</button>
            <button onclick="deleteProjects(${i})">Delete</button>
        </td>
        `;
        bodyTable.appendChild(tr);
    }
};

function reSetForm() {
    imgUrl = "";
    projectName = "";
    link= "";
    tags= "";
};

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nameProject = document.getElementById("project-name").value;
    const imgProject = document.getElementById("project-img").value;
    const linkProject = document.getElementById("projects-link").value;
    const tagsProject = document.getElementById("project-tags").value;

    const project = {
        imgUrl: imgProject,
        projectName: nameProject,
        link: linkProject,
        tags: tagsProject,
    };

    const getProjectLocal = JSON.parse(localStorage.getItem("list-project")) || [];
    
    if (editExisting) {
        getProjectLocal[editIndex] = project; 
        editIndex = -1;
        editExisting = false;
        btnSubmit.textContent = "Add";
        reSetForm();

      } else {
        getProjectLocal.push(project);
      }    
    
    localStorage.setItem("list-project", JSON.stringify(getProjectLocal));
    reSetForm();
    renderProject();
});

function deleteProjects(index)   {
    const getDataLocal = JSON.parse(localStorage.getItem("list-project"));
    getDataLocal.splice(index, 1);
    localStorage.setItem("list-project", JSON.stringify(getDataLocal));
    renderProject();
}

function editProjects(index) {
    const getDataLocal = JSON.parse(localStorage.getItem("list-project"));
    document.getElementById("project-name").value = getDataLocal[index].projectName;
    document.getElementById("project-img").value = getDataLocal[index].imgUrl;
    document.getElementById("projects-link").value = getDataLocal[index].link;
    document.getElementById("project-tags").value = getDataLocal[index].tags;

    editIndex = index;
    editExisting = true;
    
    btnSubmit.textContent = "Update";
}

localStorage.setItem("list-project", JSON.stringify(myProjects));
renderProject();
