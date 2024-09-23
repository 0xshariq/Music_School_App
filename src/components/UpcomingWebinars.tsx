"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Introduction to Music History",
      description:
        "Explore the evolution of music from ancient times to the modern era.",
      slug: "introduction-to-music-history",
      isFeatured: false,
    },
    {
      title: "Vocal Techniques for Singers",
      description:
        "Improve your vocal techniques with exercises and professional advice.",
      slug: "vocal-techniques-for-singers",
      isFeatured: false,
    },
    {
      title: "Music Arrangement Basics",
      description:
        "Learn the essentials of arranging music for various ensembles and genres.",
      slug: "music-arrangement-basics",
      isFeatured: false,
    },
    {
      title: "Understanding Music Genres",
      description:
        "A comprehensive guide to different music genres and their characteristics.",
      slug: "understanding-music-genres",
      isFeatured: false,
    },
    {
      title: "Composing for Film and TV",
      description:
        "Discover the art of composing music specifically for film and television.",
      slug: "composing-for-film-and-tv",
      isFeatured: false,
    },
    {
      title: "Music Licensing and Copyright",
      description:
        "Learn about music licensing, copyright, and protecting your work.",
      slug: "music-licensing-and-copyright",
      isFeatured: false,
    },
    {
      title: "Mixing and Mastering Basics",
      description:
        "Gain foundational skills in mixing and mastering music tracks.",
      slug: "mixing-and-mastering-basics",
      isFeatured: false,
    },
    {
      title: "Building a Music Portfolio",
      description:
        "Tips and strategies for creating a professional music portfolio.",
      slug: "building-a-music-portfolio",
      isFeatured: false,
    },
    {
      title: "The Business of Music",
      description:
        "Understand the key aspects of managing a career in the music industry.",
      slug: "the-business-of-music",
      isFeatured: false,
    },
    {
      title: "Music Theory for Producers",
      description:
        "Music theory essentials tailored for music producers and beat makers.",
      slug: "music-theory-for-producers",
      isFeatured: false,
    },
    {
      title: "Advanced Audio Engineering",
      description:
        "Deep dive into advanced audio engineering techniques and practices.",
      slug: "advanced-audio-engineering",
      isFeatured: false,
    },
    {
      title: "Music Collaboration Online",
      description:
        "Learn how to collaborate with other musicians effectively online.",
      slug: "music-collaboration-online",
      isFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
          >
            <Button
              borderRadius="1.75rem"
              className="px-4 py-2 rounded bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
