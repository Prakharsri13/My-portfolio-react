// node modules
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/enrollment-page.png',
        title: 'Enrollment page',
        tags: ['API', 'Validation', 'mern stack', 'mongodb'],
        projectLink: 'https://meetup-enrollment-ui.vercel.app/signup'
    },
    {
        imgSrc: '/images/word-counter.png',
        title: 'Word Counter',
        tags: ['JS', 'CSS'],
        projectLink: 'https://prakhar-word-counter.netlify.app'
    },
    {
        imgSrc: '/images/Online-Compiler.png',
        title: 'Online-compiler',
        tags: ['Codemirror', 'API', 'Compilex', 'NodeJS'],
        projectLink: 'https://online-compiler-compilex.netlify.app'
    },
    {
        imgSrc: '/images/tick-tack-toe.png',
        title: 'Tick-tack-toe',
        tags: ['Development'],
        projectLink: 'https://ps-tic-tac-toe-game.netlify.app'
    },
    {
        imgSrc: '/images/Calculator.png',
        title: 'Calculator',
        tags: ['Eval', 'Development'],
        projectLink: 'https://tail-calculator.netlify.app'
    },
    {
        imgSrc: '/images/portfolio.png',
        title: 'Portfolio',
        tags: ['React', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map((work, index) => (
                        <ProjectCard
                            key={index}
                            imgSrc={work.imgSrc}
                            title={work.title}
                            tags={work.tags}
                            projectLink={work.projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
