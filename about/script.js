
let profileCount = 1;

const profileDetails = [
  {
    category: "Working Committee Members",
    members: [
      {
        name: "Sahil Dudhoria",
        phone: "+918777094257",
        email: "sahildudhoria@gmail.com",
        position: "WCM",
      },
      {
        name: "Sulagna Chatterjee",
        phone: "+918100293262",
        email: "csulagna.03@gmail.com",
        position: "WCM",
        insta: "https://www.instagram.com/sulagna_cjee?igsh=MWdybzQzeTMwMDZvcw==",
        linkedin: "https://www.linkedin.com/in/sulagna-chatterjee-607702221",
      },
      {
        name: "Sania Rahaman",
        phone: "+918391870993",
        email: "saniarahaman17@gmail.com",
        position: "WCM",
        insta: "https://www.instagram.com/__sania__17?igsh=YzdwYnNjMjlnZXdu",
      },
      {
        name: "Debarshi Mukherjee",
        phone: "+919051464021",
        email: "debarshigdsc@gmail.com",
        position: "WCM",
        insta: "https://www.instagram.com/deboz500?igsh=emFqcGU2dDYzdnFx",
        linkedin: "https://www.linkedin.com/in/debarshi-mukherjee-336544190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    category: "Organising Committee Members",
    members: [
      {
        name: "Shahmeer Mondal",
        phone: "+916296453513",
        email: "shahmeermondal1576@gmail.com",
        position: "Events OCM",
        insta: "https://www.instagram.com/__sambitious__",
        linkedin: "https://www.linkedin.com/in/shahmeer24mondal"
      },
      {
        name: "Riddhick Dalal",
        phone: "+919735593303",
        email: "riddhick14@gmail.com",
        position: "Events OCM",
        insta: "https://www.instagram.com/riddhick_14",
        linkedin: "https://www.linkedin.com/in/riddhick-dalal"
      },
      {
        name: "Priyanshu Acharya",
        phone: "+918116209351",
        email: "priyanshu1802@outlook.com",
        position: "Public Relations OCM",
        insta: "https://www.instagram.com/priyanshu___acharya/",
        linkedin: "http://www.linkedin.com/in/priyanshu-acharya",
      },
      {
        name: "Anushree Chakraborty",
        phone: "+918240942176",
        email: "anushreechakraborty56@gmail.com",
        position: "Public Relatoins OCM",
        insta: "https://www.instagram.com/shreeee.c?igsh=MXJ6M3B1eTFzM3pvdQ==",
        linkedin: "https://www.linkedin.com/in/anushree-chakraborty-3a6814299"
      },
      {
        name: "Ankita Jana",
        phone: "+918282967854",
        email: "ankitajana60@gmail.com",
        position: "Finance OCM",
        insta: "https://www.instagram.com/ankitajana21",
        linkedin: "https://www.linkedin.com/in/ankitajana21"
      },
      {
        name: "Aditya Vikram Singhania",
        phone: "+918017712562",
        email: "mailingadityavs@gmail.com",
        position: "Finance OCM",
        linkedin: "https://www.linkedin.com/in/aadityavs"
      },
      {
        name: "Ayush Ghatak",
        phone: "+919818643246",
        email: "ayushghatak@gmail.com",
        position: "Hospitality OCM",
        insta: "https://www.instagram.com/__ghatakayush__?igsh=MWNteDA1N2g4N3QzeQ==",
        linkedin: "https://www.linkedin.com/aadityavs"
      },
      {
        name: "Basabdutta Mondal",
        phone: "+918777795954",
        email: "basabduttamondal@gmail.com",
        position: "Hospitality OCM",
        insta: "https://www.instagram.com/basabdutta22",
      },
      {
        name: "Avinandan Mukherjee",
        phone: "+918274056062",
        email: "ea2avi10@gmail.com",
        position: "Logistics OCM",
        insta: "https://www.instagram.com/mukherjee_avinandan",
        linkedin: "https://www.linkedin.com/in/avinandan-mukherjee-a824a4241"
      },
      {
        name: "Ashish Joshi",
        phone: "+918732083812",
        email: "army.ashish.joshi@gmail.com",
        position: "Logistics OCM",
        insta: "https://www.instagram.com/ashish_joshiiiii?igsh=M2pkOTM5Mzl6Zmkw",
      },
    ],
  },
  {
    category: "Videography and Photography",
    members: [
      {
        name: "Mekhla Dutta",
        phone: "+918100523997",
        email: "mekhlabiz@gmail.com",
        position: "Videography Lead",
        insta: "https://www.instagram.com/mekhlabiz?utm_source=qr&igsh=MXNuMGRzbmZ1cjM1ZQ==",
      }
    ],
  },
  {
    category: "Design",
    members: [
      {
        name: "James Gomes",
        phone: "+917479378945",
        email: "designedbyjames05@gmail.com",
        position: "Design Lead",
        insta: "https://www.instagram.com/irl_james?igsh=MTN6c3M1ZjUzZWhzeg==",
        linkedin: "https://www.linkedin.com/in/james-gomes-129957250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ],
  },
  {
    category: "Systems",
    members: [
      {
        name: "Rudra Biswas",
        phone: "+918653209920",
        email: "rudraexabyte@gmail.com",
        position: "Systems Coordinator",
        insta: "https://www.instagram.com/rudra.zsh",
        linkedin: "https://www.linkedin.com/in/rudra-biswas-376723251"
      }
    ],
  },
  {
    category: "Cultural",
    members: [
      {
        name: "Rupsa Paul",
        phone: "+918420023791",
        email: "rupsapaul97@gmail.com",
        position: "Cultural Coordinator",
        insta: "https://www.instagram.com/dancephilic_rupsa",
        linkedin: "https://www.linkedin.com/in/rupsa-paul-80aa71257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ],
  },
  {
    category: "Web Development",
    members: [
      {
        name: "Sayantan Ghosh",
        phone: "+917001056020",
        email: "mail.sntn.dev@gmail.com",
        position: "Web Dev Lead",
        insta: "https://www.instagram.com/stravo.2",
        linkedin: "https://www.linkedin.com/in/sntn",
        github: "https://www.github.com/stravo1"
      },
      {
        name: "Arnab Chakraborty",
        phone: "+917001760855",
        email: "arnabchakraborty.ac50@gmail.com",
        position: "Web Dev Lead",
        linkedin: "https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav",
        insta: "https://www.instagram.com/anonymous_arnab/"
      },
      {
        name: "Rohit Roy",
        phone: "+919051809293",
        email: "deroyace97@gmail.com",
        position: "Frontend Dev",
        linkedin: "https://www.linkedin.com/in/rohit-roy-51b2b6222/",
        github: "https://github.com/DeRoyace",
        twitter: "https://twitter.com/deRohitRoyace"
      },
      {
        name: "Anatt Sibi",
        phone: "+918368598965",
        email: "anattsibi456@gmail.com",
        position: "Web Dev",
        linkedin: "https://www.linkedin.com/in/anatt-sibi-a4b3b0274/",
        insta: "https://www.instagram.com/anatt.sibi/?next=%2F"
      },
      {
        name: "Diptanil Saha",
        phone: "+917003135584",
        email: "diptanilsaha@protonmail.com",
        position: "Backend Dev",
        website: "https://diptanil.page/",
        github: "https://github.com/diptanilsaha",
        twitter: "https://twitter.com/DiptanilSaha"
      },

    ],
  }
]

const mobileWrapper = document.querySelector(".mobile .middle-section")

mobileWrapper.innerHTML += `
        <div class="profile-card card-1">
          <div class="card-wrapper-1">
            <img
              src="/assets/images/team-pictures/soumyadeep.jpg"
              alt="profile pic"
              class="profile-picture"
            />
            <div class="profile-name pixelated">Soumyadeep Lobwo</div>
          </div>
          <div class="card-wrapper-2 flex justify-between items-center">
            <div class="role">Convenor</div>
            <div class="profile-icons-group flex items-center">
              <a id="call" href="tel:+917980145025"
                ><span class="material-symbols-outlined">call</span></a
              >
              <div class="more-items relative flex flex-dir-col">
                <a class="more-item-links" href="mailto:soumyadeeplobwo@gmail.com"
                  ><img
                    class="mailbox-icon"
                    src="/assets/logos/mail-outlined.svg"
                    alt="mail"
                /></a>
                <a
                  class="more-item-links"
                  href="http://www.instagram.com/soumyadeepanthony"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    class="insta-icon"
                    src="/assets/logos/insta.svg"
                    alt="instagram"
                /></a>
                <div class="plus-icon-wrapper close" onclick="moreItems(0)">
                  <span class="plus-icon material-symbols-outlined"
                    >add_circle</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
`
profileCount++;

profileDetails.forEach((item) => {
  let innerHTML = ``;
  item.members.forEach((profile) => {
    let content = `
        <div class="profile-card card-${profileCount}">
            <div class="card-wrapper-1">
              <img
                src="/assets/images/team-pictures/${profile.name.split(" ")[0].toLowerCase()}.jpg"
                alt="profile pic"
                class="profile-picture"
              />
              <div class="profile-name">${profile.name}</div>
            </div>
            <div class="card-wrapper-2 flex justify-between items-center">
              <div class="role">${profile.position}</div>
              <div class="profile-icons-group flex items-center">
                <a id="call" href="tel:${profile.phone}"
                  ><span class="material-symbols-outlined">call</span></a
                >
                <div class="more-items relative flex flex-dir-col">
                  <a class="more-item-links" href="mailto:${profile.email}"
                    ><img
                      class="mailbox-icon"
                      src="/assets/logos/mail-outlined.svg"
                      alt="mail"
                  /></a>
                  ${profile.insta ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.insta}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="insta-icon"
                          src="/assets/logos/insta.svg"
                          alt="instagram"
                        /></a>
                    `: ``
      }
                  ${profile.linkedin ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/linkedin-outlined.svg"
                          alt="linkedin"
                        /></a>
                ` : ``
      }
                ${profile.github ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/github-outlined.svg"
                          alt="github"
                        /></a>
                ` : ``
      }
                ${profile.twitter ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.twitter}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/twitter-outlined.svg"
                          alt="github"
                        /></a>
                ` : ``
      }
                ${profile.website ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.website}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/twitter-outlined.svg"
                          alt="github"
                        /></a>
                ` : ``
      }
                  <div class="plus-icon-wrapper close" onclick="moreItems(${profileCount - 1})">
                    <span class="plus-icon material-symbols-outlined"
                      >add_circle</span
                    >
                  </div>
                </div>
              </div>
            </div>
        </div>
        `
    innerHTML = `
        ${innerHTML}
        ${content}
        `
    profileCount++;
  })
  innerHTML = `
    <header class="pixelated">${item.category}</header>
    <div class="team-members flex flex-wrap justify-center">
        ${innerHTML}
    </div>
    `
  mobileWrapper.innerHTML += innerHTML;
})

let callButtonCount = 0;

const desktopWrapper = document.querySelector(".desktop .RHS");
desktopWrapper.innerHTML += `
    <div class="profile-card card-${profileCount} mt-2rem">
        <div class="card-wrapper-1">
          <img
            src="/assets/images/team-pictures/soumyadeep.jpg"
            alt="profile pic"
            class="profile-picture"
          />
          <div class="profile-name">Soumyadeep Lobwo</div>
        </div>
        <div class="card-wrapper-2 flex justify-between items-center">
          <div class="role">Convenor</div>
          <div class="profile-icons-group flex items-center">
            <div id="call">
              <div class="phone-number-box hide-number">
                <span class="phone-number">+917980145025</span>
                <span
                  class="copy-icon material-symbols-outlined"
                  title="copy"
                  onclick="copyNumber(${callButtonCount})"
                  >content_copy</span
                >
              </div>
              <span
                class="call-icon material-symbols-outlined"
                onclick="phoneBox(${callButtonCount})"
                >call</span
              >
            </div>
            <div class="more-items relative flex flex-dir-col">
              <a class="more-item-links" href="mailto:soumyadeeplobwo@gmail.com"
                ><img
                  class="mailbox-icon"
                  src="/assets/logos/mail-outlined.svg"
                  alt="mail"
              /></a>
              <a
                class="more-item-links"
                href="http://www.instagram.com/soumyadeepanthony"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  class="insta-icon"
                  src="/assets/logos/insta.svg"
                  alt="instagram"
              /></a>
              <div class="plus-icon-wrapper close" onclick="moreItems(${profileCount - 1})">
                <!-- <span class="plus-icon material-symbols-outlined">add_circle</span> -->
                <img
                  class="plus-icon plus-icon-desktop plus-icon-desktop-hover"
                  src="/assets/logos/add-plus-circle.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </div>
`

profileCount++;
callButtonCount++;

profileDetails.forEach((item) => {
  let innerHTML = ``;
  item.members.forEach((profile) => {
    let content = `
            <div class="profile-card card-${profileCount}">
              <div class="card-wrapper-1">
                <img
                  src="/assets/images/team-pictures/${profile.name.split(" ")[0].toLowerCase()}.jpg"
                  alt="profile pic"
                  class="profile-picture"
                />
                <div class="profile-name">${profile.name}</div>
              </div>
              <div class="card-wrapper-2 flex justify-between items-center">
                <div class="role">${profile.position}</div>
                <div class="profile-icons-group flex items-center">
                  <div id="call">
                    <div class="phone-number-box hide-number">
                      <span class="phone-number">${profile.phone}</span>
                      <span
                        class="copy-icon material-symbols-outlined"
                        title="copy"
                        onclick="copyNumber(${callButtonCount})"
                        >content_copy</span
                      >
                    </div>
                    <span
                      class="call-icon material-symbols-outlined"
                      onclick="phoneBox(${callButtonCount})"
                      >call</span
                    >
                  </div>
                  <div class="more-items relative flex flex-dir-col">
                    <a class="more-item-links" href="mailto:${profile.email}"
                      ><img
                        class="mailbox-icon"
                        src="/assets/logos/mail-outlined.svg"
                        alt="mail"
                    /></a>
                    ${profile.insta ?
        `
                    <a
                        class="more-item-links"
                        href="${profile.insta}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                        class="insta-icon"
                        src="/assets/logos/insta.svg"
                        alt="instagram"
                    /></a>
                        `: ``
      }
                    ${profile.linkedin ?
        `
                    <a
                      class="more-item-links"
                      href="${profile.linkedin}"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img
                        class="linkedin-icon"
                        src="/assets/logos/linkedin-outlined.svg"
                        alt="linkedin"
                    /></a>
                        ` : ``
      }
                ${profile.github ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/github-outlined.svg"
                          alt="github"
                        /></a>
                ` : ``
      }
                ${profile.twitter ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.twitter}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/twitter-outlined.svg"
                          alt="github"
                        /></a>
                ` : ``
      }
                ${profile.website ?
        `
                        <a
                        class="more-item-links"
                        href="${profile.website}"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><img
                          class="linkedin-icon"
                          src="/assets/logos/web-outlined.svg"
                          alt="github"
                        /></a>
                ` : ``
      }
                    <div class="plus-icon-wrapper close" onclick="moreItems(${profileCount - 1})">
                      <!-- <span class="plus-icon material-symbols-outlined">add_circle</span> -->
                      <img
                        class="plus-icon plus-icon-desktop plus-icon-desktop-hover"
                        src="/assets/logos/add-plus-circle.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
    innerHTML = `
        ${innerHTML}
        ${content}
        `
    profileCount++;
    callButtonCount++;
  })
  innerHTML = `
    <header class="pixelated">${item.category}</header>
    <div class="team-members flex flex-wrap gap-2rem justify-center">
        ${innerHTML}
    </div>
    `
  desktopWrapper.innerHTML += innerHTML;
})

// Code scrolling effects of the page header:
// -- START
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".middle-section");
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
}

document.querySelector(".mobile").addEventListener("scroll", function () {
  let msgPositionFromTop = msg.getBoundingClientRect().top;
  console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
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
  }
  else {
    resetPositions();
  }
  setTimeout(() => {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    console.log(msgPositionFromTop);
    if (msgPositionFromTop > 110) {
      resetPositions()
    }
  }, 100)
});
//  -- END

// Code for plus icon on click action:
// -- START
let plus_icon = document.querySelectorAll('.plus-icon');
let plus_icon_desktop = document.querySelectorAll('.plus-icon-desktop')[0];
let plus_icon_wrapper = document.querySelectorAll('.plus-icon-wrapper');
let items_wrapper = document.querySelectorAll('.more-items');
let profile_card = document.querySelectorAll('.profile-card');

function openItems(n) {
  plus_icon[n].style.transform = "rotate(45deg)";
  plus_icon[n].style.color = "rgba(255, 255, 255, 0.8) !important";
  plus_icon[n].style.transitionDelay = "0s";
  plus_icon[n].style.filter = "invert(1)";
  plus_icon_wrapper[n].style.transitionDelay = "0s";
  plus_icon_wrapper[n].classList.add('open');
  plus_icon_wrapper[n].classList.remove('close');
  plus_icon_wrapper[n].style.background = "#999999";
  items_wrapper[n].style.background = "#ffffff75";
  items_wrapper[n].style.backdropFilter = "blur(3px)";
  items_wrapper[n].style.borderColor = "#00000075";
  items_wrapper[n].style.boxShadow = '0 0 10px 2px';
  let val = 0;
  for (let i = 0; i < item.length; i++) {
    val += 35;
    if (i == 0)
      val = 45;
    item[i].style.transitionDelay = '0.21s';
    item[i].style.opacity = 1;
    item[i].style.bottom = val + 'px';
  }
  items_wrapper[n].style.height = val + 45 + 'px';
  items_wrapper[n].style.transitionDelay = "0.12s";
  profile_card[n].style.bottom = "12px";
  profile_card[n].style.boxShadow = "rgba(46, 240, 240, 0.4) 0px 5px, rgba(46, 240, 240, 0.3) 0px 10px, rgba(46, 240, 240, 0.2) 0px 15px, rgba(46, 240, 240, 0.1) 0px 20px, rgba(46, 240, 240, 0.05) 0px 25px"
}

function closeItems(n) {
  plus_icon[n].style.transform = "rotate(0deg)";
  plus_icon[n].style.color = "rgba(0, 0, 0, 0.8)";
  plus_icon[n].style.transitionDelay = "0.2s";
  plus_icon[n].style.filter = "invert(0)";
  plus_icon_wrapper[n].style.transitionDelay = "0.2s";
  plus_icon_wrapper[n].style.background = "transparent";
  plus_icon_wrapper[n].classList.add('close');
  plus_icon_wrapper[n].classList.remove('open');
  for (let i = 0; i < item.length; i++) {
    item[i].style.transitionDelay = '0s';
    item[i].style.bottom = "5px";
    item[i].style.opacity = 0;
  }
  items_wrapper[n].style.transitionDelay = "0.05s";
  items_wrapper[n].style.height = '45px';
  items_wrapper[n].style.background = "transparent";
  items_wrapper[n].style.borderColor = "transparent";
  items_wrapper[n].style.backdropFilter = "none";
  items_wrapper[n].style.boxShadow = '0 0 0';
  profile_card[n].style.bottom = "0";
  profile_card[n].style.boxShadow = '0 0 0'
}

function initItems() {
  for (let i = 0; i < plus_icon.length; i++) {
    item = document.querySelectorAll('.card-' + (i + 1) + ' .more-item-links');
    closeItems(i);
  }
}

function moreItems(card_number) {
  if (plus_icon_wrapper[card_number].className.includes('close')) {
    initItems();
    item = document.querySelectorAll('.card-' + (card_number + 1) + ' .more-item-links');
    openItems(card_number);
  }
  else
    closeItems(card_number);
}

window.addEventListener('load', function (event) {
  initItems();
});

// -- END

let phone_number_box = document.querySelectorAll('.phone-number-box');

function openBox(n) {
  phone_number_box[n].classList.remove('hide-number');
  phone_number_box[n].classList.add('show-number');
}

function closeBox(n) {
  phone_number_box[n].classList.add('hide-number');
  phone_number_box[n].classList.remove('show-number');
}

function initBox() {
  for (let i = 0; i < phone_number_box.length; i++)
    closeBox(i);
}

function phoneBox(card_number) {

  if (phone_number_box[card_number].className.includes('hide-number')) {
    initBox();
    openBox(card_number);
  }
  else if (phone_number_box[card_number].className.includes('show-number')) {
    closeBox(card_number);
  }
}

document.addEventListener('click', function (event) {
  if (!event.target.className.includes('call-icon') && !event.target.className.includes('phone-number-box') && !event.target.className.includes('phone-number') && !event.target.className.includes('copy-icon')) {
    initBox();
  }
});

function copyNumber(card_number) {
  let copy_icon = document.querySelectorAll('.copy-icon');
  let phone_number = document.querySelectorAll('.phone-number');

  navigator.clipboard.writeText(phone_number[card_number].innerHTML);
  setTimeout(() => {
    copy_icon[card_number].innerHTML = "content_copy";
    copy_icon[card_number].style.color = "black";
  }, 1500);
  copy_icon[card_number].innerHTML = "check_box";
  copy_icon[card_number].style.color = "green";
}