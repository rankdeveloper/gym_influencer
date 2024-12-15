import person1_before from "./assets/img/people1_before.avif";
import person1_after from "./assets/img/people1_after.avif";

import person2_before from "./assets/img/person2_before.avif";
import person2_after from "./assets/img/person2_after.avif";

import person3_before from "./assets/img/person3_before.avif";
import person3_after from "./assets/img/person3_after.avif";

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
