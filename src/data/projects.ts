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
    comments: "This project reinforced full-stack development by integrating Vue.js, Node.js, and MongoDB. Emphasis was placed on modular code structure, API integration, and responsive design for seamless cross-platform functionality. Agile workflows, including milestone-based development and CI/CD deployment via GitLab and us helped streamline iterative improvements. Security considerations such as environment variable management and authentication handling were implemented. Structured communication ensured smooth teamwork. Overall, the project provided valuable experience in building scalable and maintainable web applications while adapting to real-world development constraints.",
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
    technology: ["Java", "Arduino", "MQTT"],
    authors: [
      { name: "Daniyl Akulich", github: "https://github.com/danone616" },
      { name: "Salman Babar", github: "https://github.com/salmanbabar" },
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" },
      { name: "Kai Rowley", github: "https://github.com/irmata" },
      { name: "Vlad Manea", github: "https://github.com/vldnic23" },
      { name: "Markus Warbert", github: "https://github.com/warbert" }
    ],
    comments: "This project strengthened my skills in hardware-software integration, real-time data processing, and IoT communication, mainly with MQTT protocol. Designing a three-tier system improved our understanding of distributed architecture. Hardware challenges, such as sensor inaccuracies, required adaptability. Commit tracking and structured reviews ensured traceability and quality. Manual testing and regular builds helped maintain stability. Overall, this experience provided insight into embedded systems and designing reliable, user-friendly plant monitoring solutions.",
    images: ["https://i.ibb.co/cXYZqHz5/Wiring.png", "https://i.ibb.co/8ngF52Jm/greenguardian-system.jpg", "https://i.ibb.co/C3wK38Wy/image.png"],
    githubLink: "https://github.com/danielvdh24/green-guardian",
    color: "rgba(46, 139, 87, 0.7)"
  },
  {
    id: "project3",
    name: "Cone Vision",
    description: "An algorithm to predict RC car steering values using cone detection.",
    demo: "https://player.vimeo.com/video/1062214798?h=67dd304ec9",
    features: ["Image recognition to detect cones and calculate steering angles for an RC car.", "Real-time sensor data integration and sensor input.", "Automated performance analysis and testing."],
    technology: ["Python", "cplusplus", "CMake", "Docker", "OpenCV"],
    authors: [
      { name: "Nasit Vurgun", github: "https://github.com/nasitv" },
      { name: "Kai Rowley", github: "https://github.com/kairowley" },
      { name: "Sam Hardingham", github: "https://github.com/samhardingham" },
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" }
    ],
    comments: "This project reinforced my integration on computer vision, embedded systems, and machine learning for autonomous navigation. Using Docker for containerization provided a structured Python environment, enabling smoother deployment and reproducibility. Developing a predictive steering algorithm required iterative testing and adapting to real-world constraints. Integrating C++ with image recognition highlighted the complexities of real-time processing on embedded hardware. Performance testing in GitLab’s CI/CD pipeline helped refine accuracy and efficiency. Overall, this experience enhanced our understanding of cyber-physical systems, software deployment, and autonomous vehicle control.",
    images: ["https://i.ibb.co/prxBD1zV/Design.png", "https://i.ibb.co/rKbj8CqC/Steering-Methods.jpg", "https://i.ibb.co/gZCB30Zb/Car.png"],
    githubLink: "https://github.com/danielvdh24/cphysical-systems",
    color: "rgba(75, 0, 130, 0.7)"
  },
  {
    id: "project4",
    name: "Weather Wise",
    description: "A lightweight program to find the latest weather data.",
    demo: "https://player.vimeo.com/video/1062366303?h=bb0b588461",
    features: ["Clean, intuitive interface built with JavaFX", "City & geolocation-based weather search", "Adaptive weather icons", "Invalid input validation"],
    technology: ["Java", "ApacheMaven"],
    authors: [
      { name: "Daniel Van Den Heuvel", github: "https://github.com/danielvdh24" }
    ],
    comments: "This project reinforced my JavaFX development, API integration, and UI design for real-time weather applications. Handling live data retrieval and error validation improved robustness. The Singleton pattern for API calls ensured efficient data fetching, while implementing adaptive icons and geolocation support improved usability. JavaFX for UI design provided valuable insights into modular development. Overall, this project improved my skills in real-time data processing and building user-friendly Java applications.",
    images: ["https://i.ibb.co/hRvQBHfL/Diagram.png", "https://i.ibb.co/TDGkZVkh/Singleton.png", "https://i.ibb.co/NRftTyp/Open-Weather.png"],
    githubLink: "https://github.com/danielvdh24/weather-wise",
    color: "rgba(48, 81, 180, 0.7)"
  }
];