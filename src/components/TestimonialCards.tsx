"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Joining the music academy was the best decision I ever made. The instructors are incredibly talented and supportive, and I've grown so much as a musician.",
        name: "Emily Johnson",
        title: "Piano Student"
    },
    {
        quote: "I've been taking guitar lessons here for over a year now, and I've improved more than I ever thought possible. The atmosphere is always positive and encouraging, and I look forward to every lesson.",
        name: "Michael Smith",
        title: "Guitar Student"
    },
    {
        quote: "As a parent, I couldn't be happier with the music academy. My daughter has developed a true passion for music thanks to the dedicated teachers and diverse range of classes offered.",
        name: "Sarah Lee",
        title: "Parent"
    },
    {
        quote: "The vocal training I've received here has been top-notch. The instructors are knowledgeable, patient, and truly invested in helping each student reach their full potential.",
        name: "David Rodriguez",
        title: "Vocal Student"
    }
];

function TestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
            <h2 className="text-4xl font-bold text-center mb-8 z-10">Hear our harmony: Voices of success</h2>
            <div className="flex justify-center width-full overflow-hidden mt-20 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>

    );
}

export default TestimonialCards
