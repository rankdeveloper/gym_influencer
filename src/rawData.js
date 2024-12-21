import person1_before from "./assets/img/people1_before.avif";
import person1_after from "./assets/img/people1_after.avif";

import person2_before from "./assets/img/person2_before.avif";
import person2_after from "./assets/img/person2_after.avif";

import person3_before from "./assets/img/person3_before.avif";
import person3_after from "./assets/img/person3_after.avif";

//testiminial
import people1 from "./assets/img/what_people1.avif";
import people2 from "./assets/img/what_people2.avif";
import people3 from "./assets/img/what_people3.avif";

//gym img
import gym1 from "./assets/img/gym1.avif";
import gym2 from "./assets/img/gym2.avif";
import gym3 from "./assets/img/gym3.avif";
import gym4 from "./assets/img/gym4.avif";
import gym5 from "./assets/img/gym5.avif";
import gym6 from "./assets/img/gym6.avif";
import gym7 from "./assets/img/gym7.avif";

//blog
import blog1 from "./assets/img/blog1.avif";
import blog2 from "./assets/img/blog2.avif";
import blog3 from "./assets/img/blog3.avif";

// user blog
import b_user1 from "./assets/img/b_user1.avif";
import b_user2 from "./assets/img/b_user2.avif";
import b_user3 from "./assets/img/b_user3.avif";

import track from "./assets/img/track.avif";
import train from "./assets/img/train.avif";
import challenge from "./assets/img/challenge.avif";
import analyze from "./assets/img/analyzie.avif";
import connect from "./assets/img/connect.avif";

export const personData = [
  {
    id: 1,
    name: "Raj",
    age: 25,
    before_weight: 80,
    after_weight: 70,
    b_fast_before: 35,
    b_fast_after: 15,
    before_url: person1_before,
    after_url: person1_after,
    weeks: 30,
  },
  {
    id: 2,
    name: "Kamal",
    age: "30",
    before_weight: 90,
    after_weight: 69,
    b_fast_before: 39,
    b_fast_after: 19,
    before_url: person2_before,
    after_url: person2_after,
    weeks: 12,
  },
  {
    id: 3,
    name: "Poonannam",
    age: 21,
    before_weight: 80,
    after_weight: 70,
    b_fast_before: 30,
    b_fast_after: 15,
    before_url: person3_before,
    after_url: person3_after,
    weeks: 15,
  },
];

export const testimonialData = [
  {
    name: "Michael Field",
    role: "Software engineer",
    comment:
      "I love how user-friendly the app is. Logging workouts has never been easier!",
    rating: 5,
    imageUrl: people1,
  },
  {
    name: "Angelia Jolie",
    role: "Software engineer",
    comment:
      "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    rating: 5,
    imageUrl: people2,
  },
  {
    name: "Angelina Jolie",
    role: "Software engineer",
    comment:
      "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    rating: 5,
    imageUrl: people3,
  },
];

export const faqs = [
  {
    question: "How do I log my workouts?",
    answer:
      "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
  },
  {
    question: "Can I track my calories burned?",
    answer:
      "Yes, our app provides detailed calorie tracking for all your workouts.",
  },
  {
    question: "Is this application suitable for beginners?",
    answer:
      "Absolutely! We have specially designed programs for all fitness levels.",
  },
  {
    question: "What features does the application offer?",
    answer:
      "We offer comprehensive workout tracking, nutrition planning, and progress monitoring.",
  },
];

export const gyms = [
  {
    id: "1",
    name: "Physc Gym Nerul 24/7",
    image: gym1,
    phone: "+91 1234567890",
    address: " Nerul, Navi Mumbai, Maharashtra, 400706",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15086.84530312852!2d73.016683!3d19.032438!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzU2LjgiTiA3M8KwMDEnMDAuMSJF!5e0!3m2!1sen!2sus!4v1734459176276!5m2!1sen!2sus",
  },
  {
    id: "2",
    name: "Iron Fitness",
    image: gym2,
    phone: "+91 1234567890",
    address: "2801 14th St NW, Washington, DC 20009",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15084.925421058208!2d73.065921!3d19.053563!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAzJzEyLjgiTiA3M8KwMDMnNTcuMyJF!5e0!3m2!1sen!2sus!4v1734459256729!5m2!1sen!2sus",
  },
  {
    id: "3",
    name: "Hydropower Fitness & Gym",
    image: gym3,
    phone: "+91-22-0001-0211",
    address: "28345 Industrial Blvd, Hayward, CA 94545",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15955.44999535032!2d36.693236!3d-1.254175!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTUnMTUuMCJTIDM2wrA0MSczNS43IkU!5e0!3m2!1sen!2sus!4v1734459317198!5m2!1sen!2sus",
  },
  {
    id: "4",
    name: "Yuva Fitness",
    image: gym4,
    phone: "+91 1234567890",
    address: "Nerul, Navi Mumbai",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d124137.24721244365!2d80.06740051873598!3d13.517849258284897!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDMxJzQ0LjkiTiA4MMKwMDcnMDkuNyJF!5e0!3m2!1sen!2sus!4v1734459410022!5m2!1sen!2sus",
  },

  {
    id: "5",
    name: "Ozone The Gym",
    image: gym5,
    phone: "+91 1234567890",
    address: "Nerul, Navi Mumbai",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13319.186377973685!2d-112.07816!3d33.428547!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDI1JzQyLjgiTiAxMTLCsDA0JzQxLjQiVw!5e0!3m2!1sen!2sus!4v1734459472983!5m2!1sen!2sus",
  },
  {
    id: "6",
    name: "The Square Gym",
    image: gym6,
    phone: "+91 1234567890",
    address: "Nerul, Navi Mumbai",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13061.893070556383!2d-107.525709!3d35.069906!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDA0JzExLjciTiAxMDfCsDMxJzMyLjYiVw!5e0!3m2!1sen!2sus!4v1734459529834!5m2!1sen!2sus",
  },

  {
    id: "7",
    name: "Arnolds Total Fitness",
    image: gym7,
    phone: "+91 1234567890",
    address: "Nerul, Navi Mumbai",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12287.862883495052!2d-104.999573!3d39.650486!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzAxLjgiTiAxMDTCsDU5JzU4LjUiVw!5e0!3m2!1sen!2sus!4v1734459584984!5m2!1sen!2sus",
  },
];

export const blogData = [
  {
    id: 1,
    isLarge: true,
    title: "Conquering Consistency: How to Make Exercise a Habit You Love",
    date: "Jun 28, 2024",
    author: "Benjamin",
    category: "Exercise",
    btnColor: "bg-[#e02d2e]",
    imageUrl: blog1,
    b_user: b_user1,
  },
  {
    id: 2,
    title: "Weight Loss: A Sustainable Approach for a Healthier You",
    date: "Jun 28, 2024",
    author: "Jessica",
    btnColor: "bg-[#e4660a]",
    category: "Weight Loss",
    imageUrl: blog2,
    b_user: b_user2,
  },

  {
    id: 3,
    title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
    date: "Jun 23, 2024",
    author: "David",
    category: "Nutrition",
    btnColor: "bg-[#2a990b] ",
    imageUrl: blog3,
    b_user: b_user3,
  },
];

export const activities = [
  { activity: "Rowing", text: "TRACK", imageUrl: track },
  {
    activity: "Weight Lifting",
    text: "ANALYZE",
    imageUrl: analyze,
  },
  { activity: "Yoga", text: "TRAIN", imageUrl: train },
  {
    activity: "Aerobics",
    text: "CONNECT",
    imageUrl: connect,
  },
  {
    activity: "Swimming",
    text: "CHALLENGE",
    imageUrl: challenge,
  },
];
