window.addEventListener("load", () => {
    console.log("page is loaded");

    // ====================================================
    // =================== animate logo ===================
    // ====================================================

    const svg = document.querySelector("svg");
    const container = document.querySelector(".svg-overlay");
    const logo = document.querySelector(".logo");
    container.addEventListener("click", () => {
        svg.classList.toggle("clicked");
        // container.classList.toggle("hide");
        // call back function
        // transitionend
        svg.addEventListener("transitionend", () => {
            container.style = "display: none;"
            console.log("transitionend");
        });
        // animationend
        // svg.addEventListener("animationend", () => {
        //     container.classList.toggle("hide");
        //     console.log("animationend");
        // });
    });
    // logo.addEventListener("click", () => {
    //     svg.classList.toggle("clicked");
    //     container.classList.toggle("hide");
    // });

    // ====================================================
    // ==================== fetch data ====================
    // ====================================================
    // fetch("./content/mydata.json")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data.about);
    //         // vars
    //         let mail1 = document.getElementById("nav-mail1");
    //         let mail2 = document.getElementById("nav-mail2");
    //         let linkedin = document.getElementById("nav-linkedin");
    //         let github = document.getElementById("nav-github");
    //         let prog_skills = document.getElementById("prog-skills");
    //         let tools_skills = document.getElementById("tools-skills");
    //         let other_skills = document.getElementById("other-skills");
    //         let about = document.getElementById("about-edit");
    //         let exp = document.getElementById("sec-content-experience");
    //         // contact
    //         mail1.href = "mailto:" + data.contacts.mail1;
    //         mail2.href = "mailto:" + data.contacts.mail2;
    //         linkedin.href = data.contacts.linkedin;
    //         github.href = data.contacts.github;
    //         // about
    //         about.innerHTML = data.about;
    //         // skills

    //         let sum =
    //             data.skills.programming.length +
    //             data.skills.tools.length +
    //             data.skills.other.length;
    //         let a = 0,
    //             b = 0,
    //             c = 0;

    //         for (let i = 0; i < sum; i++) {
    //             let skill = document.createElement("div");
    //             skill.className = "col-sm-3 col-6";
    //             let name = document.createElement("p");
    //             name.className = "skill-name";

    //             if (a < data.skills.programming.length) {
    //                 let name_temp = data.skills.programming[a].name;
    //                 let perc_temp = data.skills.programming[a].perc;
    //             } else if (b < data.skills.tools.length) {
    //                 let name_temp = data.skills.tools[b].name;
    //                 let perc_temp = data.skills.tools[b].perc;
    //             } else if (c < data.skills.other.length) {
    //                 let name_temp = data.skills.other[c].name;
    //                 let perc_temp = data.skills.other[c].perc;
    //             }

    //             name.innerHTML = name_temp;
    //             let bar_div_out = document.createElement("div");
    //             bar_div_out.className = "progress bg-grey";
    //             bar_div_out.innerHTML =
    //                 '<div class="progress-bar bg-dark" role="progressbar" style="width:' +
    //                 perc_temp +
    //                 '%" aria-valuenow="' +
    //                 perc_temp +
    //                 '" aria-valuemin="0" aria-valuemax="100">' +
    //                 perc_temp +
    //                 "%</div>";
    //             skill.appendChild(name);
    //             skill.appendChild(bar_div_out);

    //             if (a < data.skills.programming.length) {
    //                 prog_skills.appendChild(skill);
    //                 a++;
    //             } else if (b < data.skills.tools.length) {
    //                 tools_skills.appendChild(skill);
    //                 b++;
    //             } else if (c < data.skills.other.length) {
    //                 other_skills.appendChild(skill);
    //                 c++;
    //             }
    //         }
    //         // experience
    //         for (let i = 0; i < data.experience.length; i++) {
    //             let card_col = document.createElement("div");
    //             card_col.className =
    //                 "col-4 d-flex justify-content-center align-items-center exp-edit";

    //             let card = document.createElement("div");
    //             card.className = "card mb-1 card mx-auto mask-custom card-exp";
    //             let img = document.createElement("img");
    //             img.className = "card-img-exp";
    //             img.src = data.experience[i].img;
    //             img.alt = data.experience[i].place;
    //             let card_body = document.createElement("div");
    //             card_body.className =
    //                 "card-body d-flex flex-column justify-content-around card-body-exp scrollable";
    //             let title = document.createElement("h3");
    //             title.className = "card-title";
    //             title.innerHTML = data.experience[i].title;
    //             let subtitle = document.createElement("span");
    //             subtitle.className = "card-subtitle text-small";
    //             subtitle.innerHTML = data.experience[i].place;
    //             let subtitle2 = document.createElement("span");
    //             subtitle2.className = "card-subtitle text-small";
    //             subtitle2.innerHTML = data.experience[i].date;
    //             let description = document.createElement("p");
    //             description.className = "card-text smaller-text";
    //             description.innerHTML = data.experience[i].description;
    //             let link = document.createElement("a");
    //             link.className = "card-link";
    //             link.href = data.experience[i].link;
    //             link.innerHTML = data.experience[i].place;

    //             card_body.appendChild(title);
    //             card_body.appendChild(subtitle);
    //             card_body.appendChild(subtitle2);
    //             card_body.appendChild(description);
    //             card_body.appendChild(link);
    //             card.appendChild(img);
    //             card.appendChild(card_body);
    //             card_col.appendChild(card);

    //             exp.appendChild(card_col);
    //         }
    //         // <div
    //         //                             class="card mb-1 card mx-auto mask-custom card-exp"
    //         //                         >
    //         //                             <img
    //         //                                 src="https://via.placeholder.com/200x200"
    //         //                                 class="card-img card-img-exp"
    //         //                                 alt="..."
    //         //                             />
    //         //                             <div
    //         //                                 class="card-body d-flex flex-column justify-content-around card-body-exp"
    //         //                             >
    //         //                                 <h3 class="card-title">
    //         //                                     card title
    //         //                                 </h3>
    //         //                                 <span
    //         //                                     class="card-subtitle text-small"
    //         //                                     >card subtitle</span
    //         //                                 >
    //         //                                 <p class="card-text smaller-text">
    //         //                                     Lorem ipsum dolor sit amet
    //         //                                     consectetur adipisicing elit.
    //         //                                     Accusantium neque corrupti
    //         //                                     asperiores sit laboriosam nobis
    //         //                                     qui similique sint magnam
    //         //                                     accusamus distinctio voluptatem
    //         //                                     fuga in tempore facere omnis
    //         //                                     e90s,
    //         //                                 </p>
    //         //                             </div>
    //         //                         </div>
    //         // projects
    //     });
});
