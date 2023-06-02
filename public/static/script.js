window.addEventListener("load", () => {
    console.log("page is loaded");

    fetch("./content/mydata.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.about);
            // contact
            let mail1 = document.getElementById("nav-mail1");
            mail1.href = "mailto:" + data.contacts.mail1;
            let mail2 = document.getElementById("nav-mail2");
            mail2.href = "mailto:" + data.contacts.mail2;
            let linkedin = document.getElementById("nav-linkedin");
            linkedin.href = data.contacts.linkedin;
            let github = document.getElementById("nav-github");
            github.href = data.contacts.github;
            // about
            let about = document.getElementById("about-edit");
            about.innerHTML = data.about;
            // skills
            let prog_skills = document.getElementById("prog-skills");
            let tools_skills = document.getElementById("tools-skills");
            let other_skills = document.getElementById("other-skills");
            let sum =
                data.skills.programming.length +
                data.skills.tools.length +
                data.skills.other.length;
            let a = 0,
                b = 0,
                c = 0;

            for (let i = 0; i < sum; i++) {
                let skill = document.createElement("div");
                skill.className = "col-sm-3 col-6";
                let name = document.createElement("p");
                name.className = "skill-name";

                if (a < data.skills.programming.length) {
                    var name_temp = data.skills.programming[a].name;
                    var perc_temp = data.skills.programming[a].perc;
                } else if (b < data.skills.tools.length) {
                    var name_temp = data.skills.tools[b].name;
                    var perc_temp = data.skills.tools[b].perc;
                } else if (c < data.skills.other.length) {
                    var name_temp = data.skills.other[c].name;
                    var perc_temp = data.skills.other[c].perc;
                }

                name.innerHTML = name_temp;
                let bar_div_out = document.createElement("div");
                bar_div_out.className = "progress bg-grey";
                bar_div_out.innerHTML =
                    '<div class="progress-bar bg-dark" role="progressbar" style="width:' +
                    perc_temp +
                    '%" aria-valuenow="' +
                    perc_temp +
                    '" aria-valuemin="0" aria-valuemax="100">' +
                    perc_temp +
                    "%</div>";
                skill.appendChild(name);
                skill.appendChild(bar_div_out);

                if (a < data.skills.programming.length) {
                    prog_skills.appendChild(skill);
                    a++;
                } else if (b < data.skills.tools.length) {
                    tools_skills.appendChild(skill);
                    b++;
                } else if (c < data.skills.other.length) {
                    other_skills.appendChild(skill);
                    c++;
                }
            }
            // experience
            let exp = document.getElementById("sec-content-experience");
            for (let i = 0; i < data.experience.length; i++) {
                let card_col = document.createElement("div");
                card_col.className = "col-4 d-flex justify-content-center align-items-center exp-edit";

                let card = document.createElement("div");
                card.className = "card mb-1 card mx-auto mask-custom card-exp";
                let img = document.createElement("img");
                img.className = "card-img-exp";
                img.src = data.experience[i].img;
                img.alt = data.experience[i].place;
                let card_body = document.createElement("div");
                card_body.className = "card-body d-flex flex-column justify-content-around card-body-exp scrollable";
                let title = document.createElement("h3");
                title.className = "card-title";
                title.innerHTML = data.experience[i].title;
                let subtitle = document.createElement("span");
                subtitle.className = "card-subtitle text-small";
                subtitle.innerHTML = data.experience[i].place;
                let subtitle2 = document.createElement("span");
                subtitle2.className = "card-subtitle text-small";
                subtitle2.innerHTML = data.experience[i].date;
                let description = document.createElement("p");
                description.className = "card-text smaller-text";
                description.innerHTML = data.experience[i].description;
                let link = document.createElement("a");
                link.className = "card-link";
                link.href = data.experience[i].link;
                link.innerHTML = data.experience[i].place;

                card_body.appendChild(title);
                card_body.appendChild(subtitle);
                card_body.appendChild(subtitle2);
                card_body.appendChild(description);
                card_body.appendChild(link);
                card.appendChild(img);
                card.appendChild(card_body);
                card_col.appendChild(card);

                exp.appendChild(card_col);
            }
            // <div
            //                             class="card mb-1 card mx-auto mask-custom card-exp"
            //                         >
            //                             <img
            //                                 src="https://via.placeholder.com/200x200"
            //                                 class="card-img card-img-exp"
            //                                 alt="..."
            //                             />
            //                             <div
            //                                 class="card-body d-flex flex-column justify-content-around card-body-exp"
            //                             >
            //                                 <h3 class="card-title">
            //                                     card title
            //                                 </h3>
            //                                 <span
            //                                     class="card-subtitle text-small"
            //                                     >card subtitle</span
            //                                 >
            //                                 <p class="card-text smaller-text">
            //                                     Lorem ipsum dolor sit amet
            //                                     consectetur adipisicing elit.
            //                                     Accusantium neque corrupti
            //                                     asperiores sit laboriosam nobis
            //                                     qui similique sint magnam
            //                                     accusamus distinctio voluptatem
            //                                     fuga in tempore facere omnis
            //                                     e90s,
            //                                 </p>
            //                             </div>
            //                         </div>
            // projects
        });
});

/* 
window.addEventListener("load", () => {
    console.log("page is loaded");

    fetch("./pallets.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.palettes[0][0]);
            let main = document.getElementById('main');
            let title = document.createElement('h2');
            title.innerHTML = data.description;
            main.appendChild(title);

            main.style.background = "linear-gradient(" + data.palettes[0][1] + "," + data.palettes[0][2] + ")";

            for (let i = 0; i < data.palettes.lenght(); i++) {
                let listitem = document.createElement('li');
                let list = document.getElementById('list');
                let colorGradientlist = data.palettes[i];
                for (let j = 0; j < data.palettes.lenght; j++) {

                }

                listitem.style.background = "linear-gradient(" + data.palettes[0][1] + "," + data.palettes[0][2] + ")"
            }



        })

})
*/
