"use client";
import React from "react";
import coursesData from "../data/music_courses.json"
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

// import reactElementToJSXString from "react-element-to-jsx-string";
// import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

function FeaturedCourses() {
    const feaaturedCourses = coursesData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h1 className="text-teal-600 text-base font-semibold tracking-wide uppercase">Featured Courses</h1>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {feaaturedCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p>{course.title}</p>
                                    <p>{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className="mt-2">
                                        <ButtonsCard className="p-1 h-auto ">
                                            <div className=" absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                            <div className="px-1 py-auto  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                                Learn More
                                            </div>
                                        </ButtonsCard></Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-gray dark:bg-gray text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        View All Courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
