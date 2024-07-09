// Navigation Section
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

// Project Section Display
const projects = [
  {
    title: "Twitter Sentiments Analysis",
    description:
      "The Twitter Sentiment Analysis project performs sentiment analysis on Twitter data using advanced machine learning techniques. It features a Flask backend for serving the sentiment analysis model and a Chrome extension for analyzing sentiments directly from Twitter.",
    githubLink: "https://github.com/Anirudhabg/Twitter_sentiment_analysis.git",
  },
  {
    title: "Transit-Flow: A Comprehensive Cargo Solution",
    description:
      "Transit-Flow is a cutting-edge cargo management solution, offering a comprehensive approach to streamline the complexities of logistics. Developed as part of an internship project, its frontend is meticulously crafted to provide an intuitive and responsive user experience. Leveraging HTML, CSS, JavaScript, and Figma, Transit-Flow presents a dynamic interface tailored to meet the diverse needs of cargo handling, tracking, and optimization. Whether managing shipments across borders or orchestrating seamless supply chain operations, Transit-Flow stands as a beacon of efficiency in the realm of cargo management solutions.",
    githubLink: "https://transitflow-anirudha.netlify.app/",
  },
  {
    title: "Expenso: Your Personal Money Manager",
    description:
      "Expenso revolutionizes personal finance management with its user-friendly Android application. Designed with precision using Figma, Expenso offers a seamless experience for users seeking to effortlessly track, categorize, and analyze their expenses. Say goodbye to the hassle of manual record-keeping and welcome a new era of financial efficiency. With Expenso, you can take control of your finances anytime, anywhere, empowering you to make informed decisions and achieve your financial goals. Powered by Android technology, Expenso is your ultimate companion in navigating the complexities of personal finance with ease.",
    githubLink:
      "https://www.figma.com/file/zBUrzHttwsw02AKlRfqpUN/Expesno-UX%2FUI-Design?type=design&node-id=0%3A1&mode=design&t=0xqGnkwX3VGXgBbg-1",
  },

  // Add more projects here
];

function generateProjectCards() {
  const projectGallery = document.getElementById("project-gallery");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.textContent = "Explore";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(githubLink);

    projectGallery.appendChild(card);
  });
}

generateProjectCards();

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Scroll animation fade in
function addFadeInAnimation() {
  var elements = document.querySelectorAll(".fade-in");
  elements.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", addFadeInAnimation);

document.addEventListener("DOMContentLoaded", addFadeInAnimation);
