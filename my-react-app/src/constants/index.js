import { temp_projects_bg, trackyoutransactions_bg, trackyourtransactions_logo, anpr_system_bg } from "../assets";

const projects = [
    {
      name: "TrackYourTranscations",
      description:
        "A personal finance tracker that seamlessly handles CSV uploads, uses AI to auto-categorise transactions, and visualises spending trends with clear, intuitive charts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800",
        },
        {
          name: "AWS EC2",
          color: "text-orange-600",
        },
        {
          name: "AWS Lambda",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500",
        },
        {
          name: "Tensorflow",
          color: "text-orange-500",
        },
        {
          name: "Python",
          color: "text-yellow-300",
        },
      ],
      image: trackyoutransactions_bg,
      source_code_link: "https://github.com/JoeTCode/spending-tracker",
      project_site_link: "https://trackyourtransactions.co.uk",
      project_site_logo: trackyourtransactions_logo,
    },
    {
      name: "ANPR System",
      description:
        "An intelligent system that detects, classifies, and reads vehicle number plates - distinguishing between EU and non-EU plates using YOLOv8, MobileNetV2, and PaddleOCR.",
      tags: [
        {
          name: "Python",
          color: "text-yellow-300",
        },
        {
          name: "PyTorch",
          color: "text-orange-600",
        },
        {
          name: "OpenCV",
          color: "text-green-500",
        },
        {
          name: "FastAPI",
          color: "text-teal-600",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "text-yellow-500",
        },
      ],
      image: anpr_system_bg,
      source_code_link: "https://github.com/JoeTCode/third-year-project",
    },
  ];
  
  export { projects };