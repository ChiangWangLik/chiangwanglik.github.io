(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(32)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(17),r=t.n(c),s=t(3),m=t(4),i=(t(27),t(28),["btn--primary","btn--outline"]),o=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,l=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=i.includes(c)?c:i[0],E=o.includes(r)?r:o[0];return n.a.createElement(m.b,{to:"/about-me",className:"btn-mobile"},n.a.createElement("button",{className:"btn ".concat(s," ").concat(E),onClick:l,type:t},a))};var u=function(){var e=Object(l.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(!0),i=Object(s.a)(r,2),o=i[0],u=i[1],d=function(){return c(!1)},f=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(l.useEffect)(function(){f()},[]),window.addEventListener("resize",f),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:d},"Edward ",n.a.createElement("i",{className:"fa-solid fa-seedling"})),n.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},n.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/",className:"nav-links",onClick:d},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/skills",className:"nav-links",onClick:d},"Skills")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/experience",className:"nav-links",onClick:d},"Experience")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/about-me",className:"nav-links-mobile",onClick:d},"About Me"))),o&&n.a.createElement(E,{buttonStyle:"btn--outline"},"ABOUT ME"))))},d=t(1);t(8),t(29);var f=function(){return n.a.createElement("div",{className:"hero-container"},n.a.createElement("video",{src:"videos/Star-Gazing.mp4",autoPlay:!0,loop:!0,muted:!0}),n.a.createElement("h1",null,"Opportunity Knocks"),n.a.createElement("p",null,"Are you ready to seize it?"),n.a.createElement("div",{className:"hero-btns"},n.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Know more about me")))};var p=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"cards__item"},n.a.createElement(m.b,{className:"cards__item__link",to:e.path},n.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},n.a.createElement("img",{src:e.src,alt:"Travel",className:"cards__item__img"})),n.a.createElement("div",{className:"cards__item__info"},n.a.createElement("h5",{className:"cards__item__text"},e.text)))))};t(30);var N=function(){return n.a.createElement("div",{className:"cards"},n.a.createElement("h1",null,"Investigate into my profile!"),n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("ul",{className:"cards__items"},n.a.createElement(p,{src:"images/skills-icon.jpg",text:"Essential assets for me to contribute in a team effectively",label:"Skills",path:"/skills"}),n.a.createElement(p,{src:"images/experience-icon.jpg",text:"Knowledge and understanding through practical involment",label:"Experience",path:"/experience"})))))};t(31);var v=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"footer-links"},n.a.createElement("div",{className:"footer-link-items"},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(m.b,{className:"social-logo",to:"/"},"Edward ",n.a.createElement("i",{className:"fa-solid fa-seedling"})))),n.a.createElement("div",{className:"footer-link-items"},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(m.b,{className:"social-logo",to:"mailto:21lysec@gmail.com",target:"_blank"},"Email ",n.a.createElement("i",{className:"fa-regular fa-envelope"})))),n.a.createElement("div",{className:"footer-link-items"},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(m.b,{className:"social-logo",to:"https://www.linkedin.com/in/edward-chiang-488449290/",target:"_blank","aria-label":"LinkedIn"},"LinkedIn ",n.a.createElement("i",{className:"fab fa-linkedin"}))))),n.a.createElement("section",{className:"social-media"},n.a.createElement("div",{className:"social-media-wrap"},n.a.createElement("small",{className:"website-rights"},"Edward \xa9 2023"))))};var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement(N,null),n.a.createElement(v,null))};function h(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"skills"},n.a.createElement("h1",{className:"page-title"},"SKILLS"),n.a.createElement("div",{className:"box"},n.a.createElement("h1",null,"Skills"),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("div",{className:"level"},n.a.createElement("span",null,"Beginner"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("span",null,"Expert")),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("div",{className:"skills-container"},n.a.createElement("div",{className:"skills-items"},n.a.createElement("h2",null,"Software"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("p",null,"Canva"),n.a.createElement("p",null,"-"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("p",null,"Docker"),n.a.createElement("p",null,"Postman"),n.a.createElement("p",null,"Matlab"),n.a.createElement("p",null,"Shapr3D"),n.a.createElement("p",null,"WordPress"),n.a.createElement("p",null,"Wix"),n.a.createElement("p",null,"Visme"),n.a.createElement("p",null,"-"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("p",null,"Fusion360"),n.a.createElement("p",null,"Bitrix24")),n.a.createElement("div",{className:"skills-items"},n.a.createElement("h2",null,"Programming"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("p",null,"HTML"),n.a.createElement("p",null,"CSS"),n.a.createElement("p",null,"JavaScript"),n.a.createElement("p",null,"Vue.js"),n.a.createElement("p",null,"-"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("p",null,"Python"),n.a.createElement("p",null,"C++/C"),n.a.createElement("p",null,"Flutter & Dart"),n.a.createElement("p",null,"-"),n.a.createElement("span",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("p",null,"Java"),n.a.createElement("p",null,"PHP"),n.a.createElement("p",null,"SQL"))),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("h1",null,"Language"),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("div",{className:"skills-container"},n.a.createElement("div",{className:"skills-items"},n.a.createElement("h3",null,"Cantonese"),n.a.createElement("h3",null,"English"),n.a.createElement("h3",null,"Mandarin")),n.a.createElement("div",{className:"skills-items"},n.a.createElement("h4",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("h4",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"})),n.a.createElement("h4",null,n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}),n.a.createElement("i",{className:"fa-solid fa-star"}))))),n.a.createElement(v,null)))}function g(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"experience"},n.a.createElement("h1",{className:"page-title"},"EXPERIENCE"),n.a.createElement("div",{className:"box"},n.a.createElement("h1",null,"Experience"),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("h3",{className:"datetime"},"Nov 2022 - Dec 2022"),n.a.createElement("h3",{className:"company"},"Centre for the Enhancement of Teaching and Learning"),n.a.createElement("p",{className:"position"},"Student Research Assistant"),n.a.createElement("p",{className:"description"},"Interview students on their effectiveness on learning, collect and verify data obtained, analyze the learning performance of students."),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("h3",{className:"datetime"},"Jun 2022 - Aug 2022"),n.a.createElement("h3",{className:"company"},"Biomed Technology Holdings Limited"),n.a.createElement("p",{className:"position"},"Information Technology Assistant"),n.a.createElement("p",{className:"description"},"- Website building: WordPress (Elementor), Vue.js, Docker",n.a.createElement("br",null),"Build a website from scratch to deliver information and courses offered",n.a.createElement("br",null),n.a.createElement("br",null),"- Mobile app creation: Flutter, Dart",n.a.createElement("br",null),"Frontend development to display information about the products.",n.a.createElement("br",null),n.a.createElement("br",null),"- Leaflets design: Canva, Visme",n.a.createElement("br",null),"Design leaflets for propaganda and website displaying."),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("h3",{className:"datetime"},"Feb 2020 - May 2021"),n.a.createElement("h3",{className:"company"},"JSF Team"),n.a.createElement("p",{className:"position"},"Customer Service Assistant"),n.a.createElement("p",{className:"description"},"Communicate with customers on product purchasing, update social media regularly to attract potential customers, pack products ready for delivery.")),n.a.createElement(v,null)))}function k(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"about-me"},n.a.createElement("h1",{className:"page-title"},"ABOUT ME"),n.a.createElement("div",{className:"box"},n.a.createElement("img",{src:"images/propic.JPG",alt:""}),n.a.createElement("h2",null,"Chiang Wang Lik Edward"),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("h1",null,"Profile"),n.a.createElement("p",null,"HKU Graduate"),n.a.createElement("p",null,"Bachelor of Biomedical Engineering; Minor in Computer Science"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"Able to work alone, able to cooperate with teammates"),n.a.createElement("p",null,"A self-motivated man eager to learn new things"),n.a.createElement("p",null,"Good interpersonal skills to get along with people"),n.a.createElement("p",null,"Fluent Chinese, English and Mandarin"),n.a.createElement("hr",{className:"rounded"}),n.a.createElement("div",{className:"name-container"},n.a.createElement("div",{className:"name-intro"},n.a.createElement("p",null,n.a.createElement("i",null,"E")," - Enthusiastic"),n.a.createElement("p",null,n.a.createElement("i",null,"A")," - Attentive")),n.a.createElement("div",{className:"name-intro"},n.a.createElement("p",null,n.a.createElement("i",null,"D")," - Diligent"),n.a.createElement("p",null,n.a.createElement("i",null,"R")," - Respectful")),n.a.createElement("div",{className:"name-intro"},n.a.createElement("p",null,n.a.createElement("i",null,"W")," - Well-considered"),n.a.createElement("p",null,n.a.createElement("i",null,"D")," - Dedicated")))),n.a.createElement(v,null)))}function w(){var e=Object(d.l)().pathname;return Object(l.useEffect)(function(){window.scrollTo(0,0)},[e]),null}var _=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(w,null),n.a.createElement(u,null),n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,Component:b}),n.a.createElement(d.a,{path:"/skills",Component:h}),n.a.createElement(d.a,{path:"/experience",Component:g}),n.a.createElement(d.a,{path:"/about-me",Component:k}))))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(_,null))},8:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.19c4acca.chunk.js.map