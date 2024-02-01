// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".events-items");
let initialTopPaddingForMsg = "10px";

const resetPositions = () => {
  header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
  header.style.fontSize = "2.5rem";
  header.style.position = "sticky";
  header.style.paddingLeft = "40px";
  msg.style.opacity = "1";
  msg.style.paddingTop = initialTopPaddingForMsg;
  topSection.style.height = "45%";
  topSection.style.minHeight = "300px";
  sponsorSection.style.paddingTop = "70px";
  header.classList.remove("transparent-glass-bg-top");
};

document.querySelector(".mobile").addEventListener("scroll", function () {
  let msgPositionFromTop = msg.getBoundingClientRect().top;
  // console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition =
      "0.1s font-size, 0.025s padding, top 0.3s linear, 0.3s box-shadow";
    if (msgPositionFromTop < 85) {
      header.style.fontSize = "1.8rem";
      msg.style.transition = "none";
    }
    if (msgPositionFromTop < 55) {
      header.classList.add("transparent-glass-bg-top");
    }
    if (msgPositionFromTop <= 0) {
      msg.style.paddingTop = "65px";
      header.style.position = "fixed";
    }
  } else {
    resetPositions();
  }
  setTimeout(() => {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    console.log(msgPositionFromTop);
    if (msgPositionFromTop > 110) {
      resetPositions();
    }
  }, 100);
});

const eventDetails = [
  {
    name: "Codeplay",
    description:
      "Where tech enthusiasts unite, showcasing innovation through collaborative coding, workshops, and networking.",
    modalDescription:
      "Welcome to CODEPLAY, where the world of coding transforms into an exhilarating game! Dive into the challenge, whether you`re a seasoned coder or a beginner. Solve puzzles, crack codes, and unravel the magic of programming in this thrilling event!<br><br>Rules:<ul><li>Team Size: One</li><li><strong>Round-1: Coding</strong><ul><li>A set of 4 questions will be given.</li><li>Participants need to analyze and write code for the questions.</li><li>Difficulty level ranges from easy to hard.</li><li>The event is held on Coding Ninjas platform.</li><li>Qualification to the next round is based on ranks in the Coding Ninjas Leaderboard.</li></ul></li><li><strong>Round-2: Blind Coding</strong><ul><li>Qualified participants are given one question in their chosen language, containing errors.</li><li>Errors are to be corrected, and the corrected program is typed into a notepad file.</li><li>Participants type the correct program with the monitor powered off.</li></ul></li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Webbed",
    description:
      "Unleash creativity &  Elevate your coding skills at this immersive web development event.",
    modalDescription:
      "Get ready to weave the digital canvas with WEBBED! This solo event challenges participants to craft a stunning stand-alone webpage using HTML, CSS, and vanilla JavaScript. Unleash your creativity with the same set of images provided to all, bringing your design to life!<br><br>Rules:<ul><li>Team Size: One</li><li>Create a stand-alone webpage (front end only) using HTML, CSS, and vanilla JavaScript, incorporating the same set of provided images.</li></ul>",
    formLink: "https://google.com",
    icon: "language",
  },
  {
    name: "Crypt-X",
    description:
      "Dive into the cryptic challenge, solve puzzles & crack encrypted messages.",
    modalDescription:
      "Unlock the secrets of encryption in CRYPT-X! Dive into the world of cipher codes, where participants embark on a quest to break through cryptographic puzzles. Whether you're a novice or an encryption expert, CRYPT-X promises an exciting challenge for all!<br><br>Rules:<ul><li>Team Size: One to Two</li><li>A set of n questions provided in password-protected .txt files.<li>The first question will be accessible to every participant.</li><li>The answer to the ith question serves as the password for the (i+1)th question file, 1<=i<=n-1.</li></ul>",
    formLink: "https://google.com",
    icon: "key",
  },
  {
    name: "Brainstorm",
    description:
      "Ignite your intellect in a thrilling quiz challenge, testing knowledge and quick thinking.",
    modalDescription:
      "Ignite your intellect in a thrilling quiz challenge, testing knowledge and quick thinking.",
    formLink: "https://google.com",
    icon: "psychology_alt",
  },
  {
    name: "Verb-O-War",
    description:
      "Engage in thought-provoking debates, where ideas clash and minds spark intellectual fireworks.",
    modalDescription:
      "Step into the arena of ideas with VERB-O-WAR! In this dynamic debate, teams of two engage in thought-provoking battles, with one participant advocating and the other opposing. From challenging prelims to the intense finals, it`s a clash of intellects in the Oxford style!<br><br>Rules:<ul><li>Team Size: Two (one participant for the motion, one against).</li><li><strong>Prelims:</strong><ul><li>One member of each team participates.</li><li>Topics revealed a day prior; each participant speaks for 2 minutes.</li></ul></li><li><strong>Finals:</strong><ul><li>Final topics disclosed a day prior for qualifying teams.</li><li>Debate conducted in Oxford style with 2+1 minutes per speaker and 1-minute rebuttal time.</li></ul></li></ul>",
    formLink: "https://google.com",
    icon: "campaign",
  },
  {
    name: "Digitbit",
    description:
      "Unleash creativity in hardware design challenges, where circuits come to life with innovation.",
    modalDescription:
      "Embark on the journey of DIGIBIT, where hardware circuit designing meets innovation! Teams of two dive into the realms of circuitry, solving challenges from multiple-choice prelims to hands-on finals. Efficiency and speed are the key as you bring circuit diagrams to life with provided materials.<br><br>Rules:<ul><li>Team Size: Two</li><li><strong>Prelims:</strong><ul><li>Multiple choice questions on the topic.</li><li>Qualification depends on total participants.</li></ul></li><li><strong>Finals:</strong><ul><li>Design a given circuit diagram.</li><li>Provided materials for implementation.</li><li>Teams scored on circuit efficiency and completion time.</li></ul></li></ul>",
    formLink: "https://google.com",
    icon: "electrical_services",
  },
  {
    name: "Em-Bleed",
    description:
      "Transform imagination into pixels at this digital art and design event, sparking creative brilliance.",
    modalDescription:
      "Unleash your creativity in EM-BLEED, where design meets expression! This solo event invites participants to craft captivating posters, digital artworks, or GIFs on a given topic. Let your imagination flow freely, adhering to guidelines that foster creativity and respect.<ul><li>Team Size: One</li><li>Design a poster, digital artwork, or GIF on the given topic using only PS or Adobe Illustrator, in .jpeg format, avoiding representation of individuals, organizations, brands, and religious sentiments, and ensuring originality.</li><li>Platform: macOS.</li></ul>",
    formLink: "https://google.com",
    icon: "palette",
  },
  {
    name: "Byte Tales",
    description:
      "Sculpt powerful narratives in tiny spaces, where words spark worlds in microfiction mastery",
    modalDescription:
      "Dive into the world of micro storytelling with BYTE TALES! Unleash your creativity in bite-sized paragraphs, each a narrative gem. Explore diverse themes and craft compelling tales within the tight embrace of a 50-word limit.<br><br>Rules: <ul><li>A theme will be given.</li><li>Participants need to write a short paragraph (word limit: 50 words) on the given theme.</li></ul>",
    formLink: "https://google.com",
    icon: "auto_stories",
  },
  {
    name: "X-Hunt",
    description:
      "Embark on a thrilling clue hunt, decode mysteries, and unravel the enigma.",
    modalDescription:
      "Embark on an adventurous journey with X-HUNT! In this clue hunting extravaganza, participants decode mysteries and solve puzzles. The treasure hunt unfolds, promoting teamwork and quick thinking, leading to exciting group-fies at every clue location.<br><br>Rules:<ul><li>Team Size: One</li><li><strong>Prelims:</strong> Participants answer a set of questions within the given time.</li><li><strong>Finals:</strong><ul><li>Teams of 4, with at least one member from St. Xavier’s College, Kolkata.</li><li>Active internet connection and WhatsApp required for teamwork.</li><li>Teams decipher clues, take group-fies at clue locations, and are scored based on completion and time.</li><li>Event Head explains detailed rules post-registration.</li></ul></li></ul>",
    formLink: "https://google.com",
    icon: "map",
  },

  {
    name: "Cube-X",
    description:
      "Twist, turn, and conquer the challenge in this Rubik's Cube-solving showdown.",
    modalDescription:
      "Get ready for the Rubik`s Cube Challenge! Navigate through mind-bending twists, speed-solving against the clock. From secretive prelims to the intense finals, bring your own cube, and let the colors whirl in a solo showdown of skill and speed!<br><br>Rules:<ul><li>Team Size: One</li><li><strong>Prelims:</strong><ul><li>Rules will be informed in the participant group.</li><li>Number of qualifiers depends on total participation.</li></ul></li><li><strong>Finals:</strong><ul><li>Same scramble given to each participant.</li><li>Mobile stopwatches used as timers (two minutes per solve).</li><li>Participants must bring their own Rubik’s cube.</li></ul></li></ul>",
    formLink: "https://google.com",
    icon: "deployed_code",
  },
  {
    name: "Snappit",
    description:
      "Capture the essence of moments, express creativity through lenses in this captivating photography event.",
    modalDescription:
      "Join Snappit, a celebration of smartphone photography! In this solo event, capture moments that speak volumes. Unleash your creativity with specific editing techniques while ensuring originality, fairness, and adherence to ethical standards.<ul><li>Team Size: One</li><li>Single entry per participant, capturing images exclusively with smartphones (no DSLR/Digital Camera).</li><li>Image format: JPG. Original photos with geotagged feature enabled.</li><li>Allowed editing includes cropping and color correction; heavy manipulations altering reality are not accepted.</li><li>Disqualification for plagiarism, inappropriate content, and rule violations.</li><li>Rules ensure fairness, creativity, and legal/ethical compliance.</li></ul>",
    formLink: "https://google.com",
    icon: "photo_camera",
  },
  {
    name: "Sudo-X",
    description:
      "Tackle number puzzles, sharpen your mind, and conquer Sudoku mastery in this event.",
    modalDescription:
      "Immerse yourself in the world of Sudo-X, where Sudoku enthusiasts embark on a thrilling challenge. With 4 Sudoku problems to solve, speed and precision are key. Be the fastest to conquer them all and claim victory in this solo puzzle-solving journey!<ul><li>Team Size: One</li><li>Solve 4 Sudoku problems sequentially; participants can proceed to the next one only after solving the current.</li><li>The fastest solver wins.</li></ul>",
    formLink: "https://google.com",
    icon: "grid_on",
  },
  {
    name: "Excelerate",
    description:
      "Dive into the adrenaline-fueled world of esports, where skills clash and champions emerge.",
    modalDescription:
      "eXcelerate (E-Sports) offers an electrifying experience in the realm of competitive gaming. Join the community for intense competitions, strategic battles, and the pursuit of digital glory!<ul><li><strong>Team Size:</strong> One</li><li><strong>Prelims (if required):</strong> <ul><li>All players must bring their own devices with proper internet connection and mandatory headphones/earphones.</li><li>Punctuality is crucial; players are required to arrive on time.</li><li>Tournament format: Knockout.</li><li>Game mode: 5 vs 5 Team Death Match.</li><li>Time limit: 8 minutes; for semi-final and final: 10 minutes.</li><li>Score limit: 40; for semi-final and final: 50.</li><li>Maps: Ranked TDM maps (16) - [Slums, Shoot House, Diesel, Express, Crash, Crossfire, Raid, Nuketown, Firing Range, Summit, Standoff, Hijacked, Crossroads Strike, Rush, Dome, Apocalypse].</li><li>All maps must be pre-downloaded; no added time will be allotted for downloading maps or adjusting loadouts.</li><li>Players are encouraged to record all matches played for evidence in case of accusations against opponents.</li><li>Banned weapons/items: SKS, XPR-50, M21 EBR, NA-45, SVD, large caliber ammo (HVK), any akimbo weapon, Thermite and Gas Grenade Bolts, RPD Infinite Ammo, DLQ Concussion Ammo, HS0405 Thunder Rounds, M4 underbarrel launcher, Hades Heartseekerma.</li><li>Allowed melee weapons: Any with default skin.</li><li>Banned items: Stim Shot, Gas Grenade, Cryo Bomb, Heartbeat Sensor, Trip Mine, Trip Sensor, Molotov, Contact Grenade.</li><li><strong>Banned Perks:</strong> <ul><li>Red - Restock, Tactician, Martyrdom.</li><li>Green - Quick Fix.</li><li>Blue - Shrapnel, Persistence.</li></ul></li><li><strong>Banned Operator Skills:</strong> <ul><li>Ballistic Shield, Shadow Blade, Bull Charge, K-9 Unit, Ballista EM3, H.I.V.E, Reactor Core.</li></ul></li><li>Private rooms created on the spot.</li><li>Opponents randomly selected from participating teams.</li><li>Matches may be livestreamed.</li><li>Verbal abuse or inappropriate behavior leads to team disqualification.</li><li>External devices, hacks, and cheats are strictly prohibited.</li><li>Players must remain in the game’s lobby after each match; leaving early may result in suspension.</li><li>Violation of regulations may lead to team disqualification at the moderator`s discretion.</li><li>Moderators` decisions are final.</li></ul></li><li><strong>Note:</strong> Detailed rules will be explained by the respective Event Head post-registration.</li></ul>",
    formLink: "https://google.com",
    icon: "sports_esports",
  },
];

let eventSection = document.querySelector(".events-items");
let eventSectionDesktop = document.querySelector(".event-items-desktop");

eventDetails.forEach((event, index) => {
  let newEventDivDesktop = document.createElement("div");
  newEventDivDesktop.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-between items-start gap-1rem h-15rem rounded w-85p";
  newEventDivDesktop.innerHTML = `
  <div class="flex justify-between w-full items-center gap-1rem p-025rem">
    <div class="display text-xl z-5">${event.name}</div>
    <span class="material-symbols-outlined text-xl"> ${event.icon} </span>
  </div>
  <div class="z-5 text-base">
        ${event.description}
  </div>
  <div class="flex z-5 event-button-group w-full gap-05rem">
    <button class="register-button" onclick="openModal('${event.name}','${event.modalDescription}','${event.formLink}')">View Details</button>
  </div>
      `;
  eventSectionDesktop.appendChild(newEventDivDesktop);
  let newEventDiv = document.createElement("div");
  newEventDiv.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-between items-start gap-1rem h-15rem rounded w-85p";
  newEventDiv.innerHTML = `
  <div class="flex justify-between w-full items-center gap-1rem p-025rem">
    <div class="display text-xl z-5">${event.name}</div>
    <span class="material-symbols-outlined text-xl"> ${event.icon} </span>
  </div>
  <div class="z-5 text-base">
        ${event.description}
  </div>
  <div class="flex z-5 event-button-group w-full gap-05rem">
    <button class="register-button" onclick="openModal('${event.name}','${event.modalDescription}','${event.formLink}')">View Details</button>
  </div>
      `;
  eventSection.appendChild(newEventDiv);
})
