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
    title: "Optimizing Water Management: IoT Crop Monitoring System",
    description:
      "This IoT-based project monitors soil moisture, pH levels, temperature, humidity, and rainfall. Based on the collected data, it automates the irrigation process.",
    githubLink:
      "https://github.com/Anirudhabg/Optimizing-Water-Management-IoT-Crop-Monitoring-System-.git",
  },
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
    githubLink: "https://github.com/Anirudhabg/transitflowTWP.git",
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
