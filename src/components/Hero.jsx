// Components 
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 reveal-up">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/images/header-small-photo.jpg"
                                width={40}
                                height={40}
                                alt="Prakhar Srivastava"
                                className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Learning to Develop Modern Websites with Future-Ready Skills
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="public/images/Prakhar_Srivastava_14_7m.pdf"
                            label="Download CV"
                            icon="download"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>
                <div className="hidden lg:block p-5 m-7">
                    <figure className="w-full max-w-[400px] ml:auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/images/high_Q.png"
                            alt="Prakhar Srivastava"
                            className="w-full"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero
