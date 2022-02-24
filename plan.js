const families = [
  {
    name: person1,
    spouse: person1spouse,
    children: [
      {
        name: child1,
        spouse: child1spouse,
        children: [
          {
            name: grandchild1,
            spouse: granchildspouse,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: person2,
    spouse: person2spouse,
    children: [
      {
        name: child2,
        spouse: child2spouse,
        children: [
          {
            name: grandchild2,
            spouse: granchildspouse,
            children: [],
          },
        ],
      },
    ],
  },
];

//Keep it parent and child levels. i.e. "This is your parent", "This is your child", "This is your grandchildren"