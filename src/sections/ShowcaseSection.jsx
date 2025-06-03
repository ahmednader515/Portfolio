import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import CodeSnippet from "../components/CodeSnippet";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const exampleCode = `// Example of a React component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`;

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
          title="أفضل مشاريعي"
          sub="🚀 أعمالي"
        />
        <div className="showcaselayout mt-32">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://www.mordesustudio.com/" target="_blank" rel="noopener noreferrer">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl absolute inset-0 cursor-pointer"
                >
                  <source src="/images/project3.mp4" type="video/mp4" />
                </video>
              </a>
            </div>
            <div className="text-content">
              <h2>
                موقع استوديو مورديسيو
              </h2>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] w-full">
                <a href="https://ez-round.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl absolute inset-0 cursor-pointer"
                  >
                    <source src="/images/project2.mp4" type="video/mp4" />
                  </video>
                </a>
              </div>
              <h2>متجر اليكتروني</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] w-full">
                <a href="https://www.antumalsabiqon.com/" target="_blank" rel="noopener noreferrer">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl absolute inset-0 cursor-pointer"
                  >
                    <source src="/images/project1.mp4" type="video/mp4" />
                  </video>
                </a>
              </div>
              <h2>موقع لعبة أنتم السابقون</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
