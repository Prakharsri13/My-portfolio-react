import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Extra',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/Prakharsri13'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/prakhar-srivastava-0501j2001'
    },
    // {
    //     label: 'Twitter X',
    //     href: '/'
    // },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/srivast_prakhar_1410'
    },

];


const Footer = () => {
    return (
        <footer
            className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-5 lg:max-w-[12ch] reveal-up" >
                            Let&apos;s work together today!
                        </h2>
                        <ButtonPrimary
                            href="mailto:prakharsrivast1410@gmail.com"
                            label="start project"
                            icon="chevron_right"
                            classes="reveal-up"
                            id="start-Project"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a
                        href="/"
                        className="bg-white rounded-md p-1 logo reveal-up">
                        <img
                            src="/public/images/prakharlogo.png"
                            width={30}
                            height={30}
                            alt="Logo" />
                    </a>
                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-200">Prakhar Srivastava</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer