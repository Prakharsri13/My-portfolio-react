// node modules 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// register gas pulgin
gsap.registerPlugin(useGSAP, ScrollTrigger);




// node modules
import ReviewCard from "./Extracard";

const reviews = [
    {
        content: 'I solved over 25+ problems on LeetCode and HackerRank, and I attended multiple workshops on web development to enhance my skills.',

    },
    {
        content: 'I had the opportunity to perform on Doordarshan, where I showcased my talents, and I also participated in Thomso, the annual cultural festival at IIT Roorkee, which was an incredible experience.',

    },
    {
        content: 'I served as the General Secretary of the Cultural Council and the President of the Ninad Club at GLA University.',

    },
    {
        content: 'As a fresher, I have developed effective communication skills, strong leadership and observational abilities, and solid analytical skills through my academic and extracurricular experiences.'

    },
    // 
];

const Review = () => {

    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end: '400 80%',
                scrub: true,

            },
            x: '-1000'
        })
    })

    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Extra curricular
                </h2>
                <div className=" .scrub-slide grid gap-6 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] w-fit"
                >
                    {reviews.map(({ content }, index) => (
                        <ReviewCard
                            key={index}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
