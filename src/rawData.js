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
