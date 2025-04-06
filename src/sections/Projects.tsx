import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import porttoeyjira from "@/assets/images/Port-Toeyjira-Img.png";
import myporttoeyjira from "@/assets/images/Myport-Toeyjira-Img.png";
import justcamp from "@/assets/images/Just-Camp-Img.png";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "PORT TOEYJIRA",
    results: [
      { title: "Responsive on all devices" },
      { title: "50% faster load performance" },
      { title: "SEO optimized structure" },
    ],
    link: "https://port-toeyjira.vercel.app/",
    image: porttoeyjira,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "MYPORT TOEYJIRA",
    results: [
      { title: "Dynamic portfolio presentation" },
      { title: "Improved mobile user experience" },
      { title: "Clean and modern personal site" },
    ],
    link: "https://myport-toeyjira.vercel.app/",
    image: myporttoeyjira,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "JUSTCAMP",
    results: [
      { title: "Smooth booking experience" },
      { title: "50% faster site loading" },
      { title: "Mobile-friendly interface" },
    ],
    link: "https://toeyjirakid.github.io/Camping-Booking-Website/",
    image: justcamp,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{ top: `calc(64px + ${projectIndex * 40}px)`, }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
