// node modules 



const aboutItems = [
    {
        label: 'Project done',
        number: 8
    },
    {
        label: 'Months of experience',
        number: 10
    }
];


const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">

                        Welcome! I&apos;m Prakhar Srivastava, a 2024 B.Tech graduate in Computer Science and Engineering from GLA University. I have worked on projects that have allowed me to gain practical experience with the MERN stack, version control, and data structures and algorithms using Java. I served as the General Secretary of the Cultural Council in my college, where I developed leadership and organizational skills while contributing to various university initiatives
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img
                            src="/images/prakharlogo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px] bg-white rounded-md p-1"
                        />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
