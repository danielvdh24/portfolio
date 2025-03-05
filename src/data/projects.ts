export interface Project {
  id: string;
  name: string;
  description: string;
  demo: string;
  features: string[];
  technology: string[];
  authors: { name: string; github: string }[];
  comments?: string;
  images: string[];
  githubLink: string;
  color?: string;
}

export const projectsData: Project[] = [
  {
    id: "project1",
    name: "Lindholmen Eats",
    description: "A web-based application for ordering food.",
    demo: "https://player.vimeo.com/video/1062141173?h=c0ab6ed5d4",
    features: ["Intuitive navigation with dedicated pages for menu browsing and restaurant details.", "Streamlined checkout process with options for pickup or delivery and order confirmation.", "Engaging UI elements, including dynamic shopping cart updates and interactive product selection.", "Google Maps API for location tracking."],
    technology: ["MongoDB", "VueJS", "Express"],
    authors: [
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" },
      { name: "Nasit Vurgun", github: "https://github.com/vurg" },
      { name: "Kai Rowley", github: "https://github.com/irmata" }
    ],
    comments: "This project was a deep dive into full-stack development with Vue.js, Node.js, and MongoDB. I focused on keeping the code modular, integrating APIs smoothly, and making sure everything worked well across different devices. Working with an agile mindset by using milestones, pipelines on GitLab, and regular iterations—really helped streamline development. Security was a big consideration too, from handling authentication to managing environment variables properly. Good communication kept the team on the same page, and overall, this project gave me hands-on experience in building scalable and maintainable web apps under real-world conditions.",
    images: [
      "https://i.ibb.co/DPFKywLX/Map.png",
      "https://i.ibb.co/hvWz2Qk/Menu.png",
      "https://i.ibb.co/jv8nsfFC/Order.png"
    ],
    githubLink: "https://github.com/danielvdh24/lindholmen-eats",
    color: "rgba(146, 120, 69, 0.7)"
  },
  {
    id: "project2",
    name: "Green Guardian",
    description: "A plant monitoring system built with Arduino.",
    demo: "https://player.vimeo.com/video/1062198373?h=8b0e41d4c5",
    features: ["Moisture, light, and temperature sensors detect plant conditions and trigger LEDs, buzzers, and notifications.", "Real-time data exchange between Wio Terminal, MQTT Broker, and PC GUI.", "Presets for different plant species to maintain optimized water and light settings.", "Adjustable light and water schedules."],
    technology: ["Java", "Arduino", "CPLUSPLUS", "MQTT"],
    authors: [
      { name: "Daniyl Akulich", github: "https://github.com/danone616" },
      { name: "Salman Babar", github: "https://github.com/salmanbabar" },
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" },
      { name: "Kai Rowley", github: "https://github.com/irmata" },
      { name: "Vlad Manea", github: "https://github.com/vldnic23" },
      { name: "Markus Warbert", github: "https://github.com/warbert" }
    ],
    comments: "This project pushed me to work with hardware-software integration, real-time data processing, and IoT communication using the MQTT protocol. We programmed the Wio Terminal with Arduino IDE (basically C++), and setting up a three-tier system gave me a solid understanding of distributed architecture. There were plenty of challenges such as like sensor inaccuracies that forced us to adapt and problem-solve. Commit tracking and structured reviews helped maintain quality, and manual testing ensured stability. In the end, this project gave me great experience in embedded systems and designing reliable, user-friendly IoT solutions.",
    images: ["https://i.ibb.co/cXYZqHz5/Wiring.png", "https://i.ibb.co/8ngF52Jm/greenguardian-system.jpg", "https://i.ibb.co/C3wK38Wy/image.png", "https://i.ibb.co/tMZ82GsG/Grass.png", "https://i.ibb.co/LzkDQ8Fz/Wifi.png"], 
    githubLink: "https://github.com/danielvdh24/green-guardian",
    color: "rgba(46, 139, 87, 0.7)"
  },
  {
    id: "project3",
    name: "Cone Vision",
    description: "An algorithm to predict RC car steering values using cone detection.",
    demo: "https://player.vimeo.com/video/1062214798?h=67dd304ec9",
    features: ["Image recognition to detect cones and calculate steering angles for an RC car.", "Real-time sensor data integration and sensor input.", "Automated performance analysis and testing."],
    technology: ["Python", "CPLUSPLUS", "CMake", "Docker", "OpenCV"],
    authors: [
      { name: "Nasit Vurgun", github: "https://github.com/nasitv" },
      { name: "Kai Rowley", github: "https://github.com/kairowley" },
      { name: "Sam Hardingham", github: "https://github.com/samhardingham" },
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" }
    ],
    comments: "This project brought together computer vision, embedded systems, and machine learning to develop an autonomous navigation system. Using Docker helped create a consistent environment whilst working on Python, making deployment and testing smoother. We worked on a predictive steering algorithm, which meant a lot of iteration and fine-tuning to handle real-world constraints. Integrating C++ for image recognition showed me just how tricky real-time processing can be on embedded hardware. Performance testing in GitLab’s CI/CD pipeline helped refine the system for better accuracy and efficiency. This was a hands-on learning experience in cyber-physical systems, deployment, and autonomous vehicle control.",
    images: ["https://i.ibb.co/prxBD1zV/Design.png", "https://i.ibb.co/rKbj8CqC/Steering-Methods.jpg", "https://i.ibb.co/gZCB30Zb/Car.png"],
    githubLink: "https://github.com/danielvdh24/cphysical-systems",
    color: "rgba(75, 0, 130, 0.7)"
  },
  {
    id: "project4",
    name: "Weather Wise",
    description: "A lightweight program to find the latest weather data.",
    demo: "https://player.vimeo.com/video/1062366303?h=bb0b588461",
    features: ["Clean, intuitive interface built with JavaFX.", "City & geolocation-based weather search.", "Adaptive weather icons.", "Invalid input validation."],
    technology: ["Java", "ApacheMaven"],
    authors: [
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" }
    ],
    comments: "This project was all about JavaFX development, API integration, and UI design for a real-time weather application. I learned a lot about handling live data, making sure error validation was solid, and keeping the app reliable. Using the Singleton pattern for API calls made data fetching more efficient, and adding geolocation support and adaptive icons improved usability. JavaFX was a great way to dive deeper into modular development, and overall, this project helped me sharpen my skills in real-time data processing and building smooth, user-friendly Java applications.",
    images: ["https://i.ibb.co/hRvQBHfL/Diagram.png", "https://i.ibb.co/TDGkZVkh/Singleton.png", "https://i.ibb.co/NRftTyp/Open-Weather.png"],
    githubLink: "https://github.com/danielvdh24/weather-wise",
    color: "rgba(48, 81, 180, 0.7)"
  },
  {
    id: "project5",
    name: "Smart Match",
    description: "An AI-model for resume analysis and job role matching.",
    demo: "https://player.vimeo.com/video/1062576739?h=438f030d5c",
    features: ["Match job seekers with relevant job positions based on their resumes.", "Admin dashboard to train new models, manage resumes, and select model versions for better classification accuracy."],
    technology: ["Python", "Docker", "Django", "MySQL"],
    authors: [
      { name: "Mika Rannisto", github: "https://github.com/mikarannistro" },
      { name: "Kai Rowley", github: "https://github.com/irmata" },
      { name: "Hashem Ibrahim", github: "https://github.com/hashem" },
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" },
      { name: "Abdullahi Mahamed", github: "https://github.com/abdullahimahamed" },
      { name: "Vilmer Hedin", github: "https://github.com/vilmerhedin" }
    ],
    comments: "This project was a great learning experience in machine learning, cloud deployment, and software architecture. We used TF-IDF and Naive Bayes classification to improve resume-to-job matching, and deploying everything with Docker and Kubernetes made sure it ran smoothly in the cloud. Setting up CI/CD pipelines in GitLab automated testing and updates, which really improved reliability. One of the bigger challenges was handling data persistence in the cloud, but we solved that with persistent disks. Early on, we didn’t plan the structure as well as we should have, which led to some inefficiencies—definitely a lesson learned about proper documentation and system design from the start. Looking ahead, adding job listing integrations and PDF resume uploads would make the system even better.",
    images: ["https://i.ibb.co/R4S0rrd7/Admin.png", "https://i.ibb.co/HL2TC8Xh/Resumes.png", "https://i.ibb.co/wNbCw18q/Derivative.png"],
    githubLink: "https://github.com/danielvdh24/smart-match",
    color: "rgba(180, 160, 48, 0.7)"
  },
  {
    id: "project6",
    name: "Serpent",
    description: "A snake game built with JavaFX.",
    demo: "https://player.vimeo.com/video/1062888147?h=fe3d1ae96a",
    features: ["Interactive UI with glowing effects and smooth animations.", "Tracked leaderboard that saves high scores persistently.", "Real-time collision detection for responsive gameplay."],
    technology: ["Java", "ApacheMaven"],
    authors: [
      { name: "Erik Nisbet", github: "https://github.com/nisbeterik" },
      { name: "Asim Altinisik", github: "https://github.com/Indomet" },
      { name: "Marko Mosjov", github: "https://github.com/marko" },
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" },
      { name: "Rizwan Rafiq", github: "https://github.com/rizwanrafiq1214" }
    ],
    comments: "This was one of my very first projects, and designing a playable Snake game in JavaFX with Maven was incredibly fun. I learned about game loops, event handling, collision detection, and real-time user input processing. Structuring it with Maven improved my understanding of dependency management, while working with JavaFX’s scene graph and animations taught me UI-driven development. Debugging movement issues and optimizing game logic pushed my problem-solving skills. Overall, this project strengthened my OOP fundamentals and was a great introduction to event-driven programming and interactive applications.",
    images: ["https://i.ibb.co/bjrpJ6YW/Serpent-Game.png", "https://i.ibb.co/spDRmssX/Leaderboard.png"],
    githubLink: "https://github.com/danielvdh24/serpent",
    color: "rgba(117, 110, 133, 0.7)"
  }
];