const projects = [
    {
        title: "Avocado compiler",
        description: "A compiler that runs in avocados",
        image: "https://picsum.photos/200/200"
    },
    {
        title: "Skyline Tracker",
        description: "Real-time monitoring for urban architectural changes",
        image: "https://picsum.photos/201/201"
    },
    {
        title: "Cyber Coffee",
        description: "E-commerce platform for futuristic caffeine blends",
        image: "https://picsum.photos/202/202"
    },
    {
        title: "Nebula Dashboard",
        description: "Data visualization for deep space satellite telemetry",
        image: "https://picsum.photos/203/203"
    },
    {
        title: "Zenith Social",
        description: "A decentralized social network for minimalist developers",
        image: "https://picsum.photos/204/204"
    },
    {
        title: "Echo Logic",
        description: "Audio-driven task manager using voice recognition",
        image: "https://picsum.photos/205/205"
    },
    {
        title: "Pixel Quest",
        description: "2D browser-based RPG engine built with pure JavaScript",
        image: "https://picsum.photos/206/206"
    }
];

const main = document.querySelector("main");

for (let index = 0; index < projects.length; index++) {
    main.innerHTML += `
        <div class="bg-card text-text-light w-50 block p-3 rounded-2xl shadow-xs
        hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <a href="#">
                <img class="rounded" src="${projects[index].image}" alt="project placeholder" />
            </a>
            <a href="#">
                <h5 class="mt-2 mb-2 text-md font-semibold tracking-tight text-heading">Streamlining your design
                    process today.
                </h5>
            </a>
            <p class="mb-4 text-sm">In today’s fast-paced digital landscape</p>
        </div>
    `
}