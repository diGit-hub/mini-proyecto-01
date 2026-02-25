const skills = [
    {
        name: "html",
        image: "html.svg"
    },
    {
        name: "css",
        image: "css.svg"
    },
    {
        name: "javascript",
        image: "javascript.svg"
    },
    {
        name: "github",
        image: "github.svg"
    },
    {
        name: "react",
        image: "react.svg"
    },
    {
        name: "tailwind",
        image: "tailwind.svg"
    },
    {
        name: "figma",
        image: "figma.svg"
    },
    {
        name: "linux",
        image: "linux.svg"
    }
];

const additionalSkills = [
    {
        name: "firebase",
        image: "firebase.svg"
    },
    {
        name: "express",
        image: "express.svg"
    },
    {
        name: "nodejs",
        image: "nodejs.svg"
    },
    {
        name: "python",
        image: "python.svg"
    },
    {
        name: "c#",
        image: "c-sharp.svg"
    },
    {
        name: "nextjs",
        image: "nextjs.svg"
    },
    {
        name: "android",
        image: "android.svg"
    }
];

const skillsGrid = document.querySelector("#skills-grid");

for(let index = 0; index < skills.length; index++){
    skillsGrid.innerHTML += `
        <div class="px-4 py-8 rounded-lg bg-foreground flex items-center justify-center
        animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_1]">
            <img class="w-12 sm:w-14 md:w-16 lg:w-20 h-auto" alt="${skills[index].name} icon" src="/${skills[index].image}">
        </div>
        `
}

const additionalSkillsGrid = document.querySelector("#additional-skills");

for(let index = 0; index < additionalSkills.length; index++){
    additionalSkillsGrid.innerHTML += `
        <img class="animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_1]" alt="${additionalSkills[index].name} icon" src="/${additionalSkills[index].image}">
    `
}