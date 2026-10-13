export const currentLeadership = [
  {
    id: "current-leader-1",
    name: "Yasin Malik",
    role: "Chairman",
    category: "Current Leadership",
    location: "Srinagar, Jammu & Kashmir",
    description:
      "Yasin Malik is incarcerated and serving a life sentence in Tihar Jail, New Delhi. He is the Chairman of JKLF and has been a prominent figure in the political landscape of Jammu & Kashmir.",
    image: "/images/yasinmalik.jpg",
  },
  {
    id: "current-leader-2",
    name: "Raja Haq Nawaz",
    role: "Sr. Vice Chairman",
    category: "Current Leadership",
    location: "Kotli, Azad Kashmir",
    description:
      "Raja Haq Nawaz is the senior Vice Chairman of JKLF acting as Chairman in the absence of Yasin Malik. He is a key figure in the political activities of JKLF.",
    image: "/images/HaqNawaz.jpg",
  },
  {
    id: "current-leader-3",
    name: "Rafique Dar",
    role: "Spokesperson",
    category: "Current Leadership",
    location: "Rawalpindi, Pakistan",
    description:
      "Rafique Dar is the Spokesperson of JKLF and plays a crucial role in communicating the organization's stance and activities to the public.",
    image: "/images/RafiqDar.jpg",
  },
  {
    id: "current-leader-4",
    name: "Raja Zafar Khan",
    role: "Head of Diplomatic Bureau",
    category: "Current Leadership",
    location: "Luton, United Kingdom",
    description:
      "Raja Zafar Khan is the Head of the Diplomatic Bureau of JKLF and plays a crucial role in representing the organization internationally.",
    image: "/images/RajaZafarKhan.jpg",
  },
];

export const historicalFigures = [
  {
    id: "maqbool-bhat",
    name: "Maqbool Bhat",
    role: "Ideological Founder",
    category: "Historical Figure",
    description:
      "Biographical and archival material concerning his role in the political history associated with the movement.",
    image: "/images/maqboolbhat.jpg",
  },
  {
    id: "amanullah-khan",
    name: "Amanullah Khan",
    role: "Supreme Leader",
    category: "Historical Figure",
    description:
      "Biographical information, writings and archival material concerning his role in JKLF's development.",
    image: "/images/AmanullahKhan.jpg",
  },
  {
    id: "abdul-khaliq-ansari",
    name: "Abdul Khaliq Ansari",
    role: "Political Figure",
    category: "Political Figure",
    description:
      "Biographical, political and documentary material relating to his role within JKLF and its political history.",
    image: "/images/AbdulKhaliqAnsari.jpg",
  },
];

/*
  ORGANISATIONAL LEADERSHIP
  -------------------------
  To add an office holder, fill in their entry below:
    name:        full name, e.g. "Jane Doe"  (leave "" to show "To be announced")
    location:    city / country, e.g. "Mirpur, Azad Kashmir"  (optional)
    description: a short line about them  (optional)
    image:       photo path, e.g. "/images/JaneDoe.jpg"  (put the photo in public/images/),
                 or null for the placeholder icon
*/

const withIds = (groupId, office) =>
  office.map((person, index) => ({
    id: `${groupId}-office-${index + 1}`,
    ...person,
  }));

export const centralCommittee = {
  id: "central-committee",
  title: "Central Committee",
  description:
    "The Central Committee is the highest organisational body of JKLF, setting policy and overseeing the work of every zone.",
  office: withIds("central-committee", [
    {
      role: "Chairman",
      name: "Yasin Malik",
      location: "Srinagar, Jammu & Kashmir",
      description: "",
      image: "/images/yasinmalik.jpg",
    },
    {
      role: "Sr. Vice Chairman",
      name: "Raja Haq Nawaz",
      location: "Kotli, Azad Kashmir",
      description: "",
      image: "/images/HaqNawaz.jpg",
    },
    {
      role: "Vice Chairman",
      name: "Saleem Haroon",
      location: "Rawalpindi, Pakistan",
      description: "",
      image: "/images/SaleemHaroon.jpg",
    },
    {
      role: "Vice Chairman",
      name: "",
      location: "",
      description: "",
      image: null,
    },
    {
      role: "Vice Chairman",
      name: "",
      location: "",
      description: "",
      image: null,
    },
    {
      role: "Chief Organiser",
      name: "Sabir Gul",
      location: "Luton, United Kingdom",
      description: "",
      image: "/images/SabirGul.jpg",
    },
    {
      role: "General Secretary",
      name: "",
      location: "",
      description: "",
      image: null,
    },
    {
      role: "Spokesperson",
      name: "Rafique Dar",
      location: "Rawalpindi, Pakistan",
      description: "",
      image: "/images/RafiqDar.jpg",
    },
    {
      role: "Finance Secretary",
      name: "Manzoor Chishti",
      location: "Muzaffarabad, Azad Kashmir",
      description: "",
      image: "/images/ManzoorChishti.jpg",
    },
  ]),
};

// Separate from the zones; reports directly to the Central Committee.
export const diplomaticBureau = {
  id: "diplomatic-bureau",
  title: "Diplomatic Bureau",
  description:
    "Represents JKLF internationally. The Diplomatic Bureau is responsible for maintaining relations with foreign governments, international organisations and the diaspora.",
  office: withIds("diplomatic-bureau", [
    {
      role: "Head of Diplomatic Bureau",
      name: "Raja Zafar Khan",
      location: "Luton, United Kingdom",
      description: "",
      image: "/images/RajaZafarKhan.jpg",
    },
  ]),
};

export const organisationalZones = [
  {
    id: "ajkgb",
    code: "AJKGB",
    name: "Azad Jammu Kashmir & Gilgit-Baltistan",
    office: withIds("ajkgb", [
      {
        role: "President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Chief Organiser",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "General Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Publication Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Finance Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
    ]),
  },
  {
    id: "iok",
    code: "IOK",
    name: "Indian Occupied Kashmir",
    office: withIds("iok", [
      {
        role: "President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Chief Organiser",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "General Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Publication Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Finance Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
    ]),
  },
  {
    id: "uk",
    code: "UK",
    name: "United Kingdom",
    office: withIds("uk", [
      {
        role: "President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Chief Organiser",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "General Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Publication Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Finance Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
    ]),
  },
  {
    id: "eu",
    code: "EU",
    name: "Europe",
    office: withIds("eu", [
      {
        role: "President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Chief Organiser",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "General Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Publication Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Finance Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
    ]),
  },
  {
    id: "north-america",
    code: "North America",
    name: "North America",
    office: withIds("north-america", [
      {
        role: "President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Chief Organiser",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "General Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Publication Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Finance Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
    ]),
  },
  {
    id: "gulf",
    code: "Gulf",
    name: "Gulf",
    office: withIds("gulf", [
      {
        role: "President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Vice President",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Chief Organiser",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "General Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Publication Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
      {
        role: "Finance Secretary",
        name: "",
        location: "",
        description: "",
        image: null,
      },
    ]),
  },
];

export const allLeadershipProfiles = [
  ...currentLeadership,
  ...historicalFigures,
];