import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
import { Button } from "./ui/moving-border";

const featuredWebinars = [
    {
        title: "Mastering Music Theory",
        description: "Join us for an in-depth webinar on mastering music theory. Whether you're a beginner or an experienced musician, this webinar will help you deepen your understanding of music fundamentals.",
        link: ""
    },
    {
        title: "Exploring Jazz Improvisation",
        description: "Explore the world of jazz improvisation in this exciting webinar. Learn essential techniques, scales, and concepts that will take your improvisational skills to the next level.",
        link: ""
    },
    {
        title: "Songwriting Workshop",
        description: "Unlock your creativity in our songwriting workshop. Discover techniques for crafting compelling lyrics, melodies, and chord progressions, and learn how to turn your musical ideas into finished songs.",
        link: ""
    },
    {
        title: "Introduction to Music Production",
        description: "Interested in music production? Join us for an introduction to the basics of music production. Learn about recording, editing, mixing, and more, and start creating your own professional-quality music.",
        link: ""
    },
    {
        title: "Introduction to Music Composition",
        description: "Unleash your creativity with our introduction to music composition webinar. Learn about musical form, structure, harmony, and develop the skills to create your own original compositions.",
        link: ""
    },
    {
        title: "The Art of Performance",
        description: "Join us for a webinar on the art of performance. Explore techniques for stage presence, overcoming stage fright, and delivering captivating performances that resonate with your audience.",
        link: ""
    },
    {
        title: "Exploring World Music",
        description: "Embark on a musical journey around the world with our webinar on exploring world music. Discover the rich diversity of musical traditions from different cultures and regions, and broaden your musical horizons.",
        link: ""
    },
    {
        title: "Music Technology in the Modern Age",
        description: "Stay ahead of the curve with our webinar on music technology in the modern age. Learn about the latest tools, software, and techniques for music production, recording, and performance.",
        link: ""
    }
];

function Webiners() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-teal-600 text-base font-semibold tracking-wide uppercase">Featured Webnier</h1>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance your Musical Journey</p>
            </div>
            <div className="flex justify-center width-full overflow-hidden mt-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-8xl mx-auto px-8">
                    <HoverEffect items={featuredWebinars} />
                </div>
            </div>
            <div className="mt-10 text-center">
                <Link href={"/courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-gray dark:bg-gray text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        View All Webiners
                    </Button>
                </Link>
            </div>

        </div>



    )
}

export default Webiners
