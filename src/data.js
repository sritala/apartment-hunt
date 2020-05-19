import img1 from "./images/apartmentcityview.jpg";
import img2 from "./images/tworoom.jpg";
import img3 from "./images/tworoombalcony.jpg";
import img4 from "./images/threeroom.jpg";
import img5 from "./images/tworoombalcony.jpg";
import img6 from "./images/tworoom2.jpg";
import img7 from "./images/oneroom.jpg";
import img8 from "./images/tworoom2.jpg";
import img9 from "./images/threeroombalcony.jpg";
import img10 from "./images/threeroombalcony.jpg";
import img11 from "./images/oneroom.jpg";
import img12 from "./images/tworoombalcony2.jpg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "One room apartment",
      slug: "one-room",
      type: "1",
      price: 600,
      size: 29,
      capacity: 1,
      balcony: false,
      sauna: false,
      displayed: false,
      description: "Newly renovated single room apartment ",
      extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Two room apartment",
      slug: "two-room",
      type: "2",
      price: 900,
      size: 55,
      capacity: 1,
      balcony: false,
      sauna: false,
      displayed: false,
      description: "Two room apartment with nice city view",
      extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Two room apartment with balcony",
      slug: "two-room",
      type: "2",
      price: 1250,
      size: 56,
      capacity: 1,
      balcony: true,
      sauna: false,
      displayed: false,
      description: "Two room apartment with balcony",
      extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Three room apartment with balcony and sauna",
      slug: "three-room",
      type: "3",
      price: 1450,
      size: 75,
      capacity: 1,
      balcony: true,
      sauna: true,
      displayed: false,
      description: "Three room apartment with nice garden view ",
      extras: ["Internet"],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "Two room with balcony",
      slug: "two-room",
      type: "2",
      price: 1200,
      size: 57,
      capacity: 2,
      balcony: true,
      sauna: false,
      displayed: false,
      description: "Two room apartment with balcony",
      extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },    
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
        name: "Two room apartment",
        slug: "two-room",
        type: "2",
        price: 1000,
        size: 55,
        capacity: 1,
        balcony: false,
        sauna: false,
        displayed: false,
        description: "Two room apartment with nice city view",
        extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
        name: "One room apartment",
        slug: "one-room",
        type: "1",
        price: 700,
        size: 29,
        capacity: 1,
        balcony: false,
        sauna: false,
        displayed: false,
        description: "Newly renovated one room apartment ",
        extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
        name: "Two room apartment",
        slug: "two-room",
        type: "2",
        price: 1000,
        size: 55,
        capacity: 1,
        balcony: false,
        sauna: false,
        displayed: false,
        description: "Two room apartment with nice city view",
        extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
        name: "Three room apartment with balcony and sauna",
        slug: "Three-room",
        type: "3",
        price: 1400,
        size: 72,
        capacity: 3,
        balcony: true,
        sauna: true,
        displayed: false,
        description:
        'Three room apartment with balcony and sauna',
        extras: ["Internet"],
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
        name: "Three room apartment with balcony",
        slug: "Three-room",
        type: "3",
        price: 1400,
        size: 78,
        capacity: 3,
        balcony: true,
        sauna: false,
        displayed: false,
        description:
        'Three room apartment with balcony',
        extras: ["Internet"],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "Three room apartment with balcony",
      slug: "three-room",
      type: "3",
      price: 1400,
      size: 74,
      capacity: 3,
      balcony: true,
      sauna: false,
      displayed: false,
      description:
      'Three room apartment with balcony',
      extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "Two room apartment with balcony and sauna",
      slug: "two-room",
      type: "2",
      price: 1200,
      size: 57,
      capacity: 2,
      balcony: true,
      sauna: true,
      displayed: true,
      description: 
      "Two room apartment with balcony and sauna",
      extras: ["Internet"],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "One room apartment with french balcony",
      slug: "one-room",
      type: "1",
      price: 700,
      size: 30,
      capacity: 1,
      balcony: true,
      sauna: false,
      featured: true,
      description: "One room apartment with french balcony",
      extras: ["Internet",", ", "Water"],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        }
      ],
    },
  },
];
