"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
      'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
  },
  {
    title: 'Live Feedback & Engagement',
    description:
      'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
  },
  {
    title: 'Limitless Learning Opportunities',
    description:
      'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
  },
  {
    title: 'Masterclass Series with Industry Legends',
    description:
      'Gain exclusive insights from industry legends through our Masterclass Series. Learn the secrets of the trade from those who have shaped the music industry, and elevate your skills to professional levels.',
  },
  {
    title: 'One-on-One Mentorship Programs',
    description:
      'Take advantage of our one-on-one mentorship programs designed to provide personalized guidance from experienced musicians. Tailor your learning journey to fit your unique goals and accelerate your path to musical excellence.',
  },
  {
    title: 'State-of-the-Art Facilities',
    description:
      'Practice and perform in state-of-the-art facilities that inspire creativity. Our fully-equipped studios and performance spaces are designed to support every aspect of your musical development.',
  },
  {
    title: 'Collaborative Learning Environment',
    description:
      'Join a community of like-minded musicians where collaboration is encouraged. Our group classes and ensemble opportunities foster teamwork and help you build connections that last a lifetime.',
  },
  {
    title: 'Performance Opportunities',
    description:
      'Showcase your talent through our regular performance opportunities. Whether in recitals, concerts, or community events, gain the confidence and experience needed to shine on any stage.',
  },
  {
    title: 'Flexible Learning Schedules',
    description:
      'Balance your musical education with your personal life through our flexible learning schedules. Choose from a variety of class times that suit your needs, allowing you to pursue your passion without compromise.',
  },
  {
    title: 'Customized Learning Paths',
    description:
      'Every musician’s journey is unique. Our customized learning paths allow you to focus on the areas of music that resonate with you most, ensuring your education is as unique as your sound.',
  },
  {
    title: 'Innovative Music Technology',
    description:
      'Explore the intersection of music and technology with our innovative courses on digital music production, sound engineering, and more. Stay ahead of the curve and learn how to integrate technology into your music.',
  },
  {
    title: 'Global Music Exploration',
    description:
      'Broaden your musical horizons with our courses on global music traditions. Learn the rich cultural histories behind different genres and incorporate new influences into your musical repertoire.',
  },
  {
    title: 'Music Theory & Composition Mastery',
    description:
      'Deepen your understanding of music theory and composition. Our expert instructors guide you through advanced concepts, helping you create music that is both technically proficient and artistically expressive.',
  },
  {
    title: 'Music Business & Industry Insights',
    description:
      'Prepare for a successful career in music with our courses on the business side of the industry. Learn about marketing, copyright, contracts, and more, equipping you with the knowledge to thrive as a professional musician.',
  },
  {
    title: 'Community Outreach & Engagement',
    description:
      'Give back to the community through our outreach programs. Perform at local events, teach music to underprivileged youth, and make a positive impact through your musical talents.',
  }
];


function StickyScrollReveal() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default StickyScrollReveal