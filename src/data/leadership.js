export const currentLeadership = [
  {
    id: "current-leader-1",
    name: "Leader Name",
    role: "Position / Office",
    category: "Current Leadership",
    location: "Region / Country",
    description:
      "A concise biography and description of the individual's current organisational responsibilities.",
    image: null,
  },
  {
    id: "current-leader-2",
    name: "Leader Name",
    role: "Position / Office",
    category: "Current Leadership",
    location: "Region / Country",
    description:
      "A concise biography and description of the individual's current organisational responsibilities.",
    image: null,
  },
];

export const officeBearers = [
  {
    id: "office-bearer-1",
    name: "Office Bearer",
    role: "Secretary / Department",
    region: "Central Organisation",
    image: null,
  },
  {
    id: "office-bearer-2",
    name: "Office Bearer",
    role: "Political Affairs",
    region: "Central Organisation",
    image: null,
  },
  {
    id: "office-bearer-3",
    name: "Office Bearer",
    role: "International Affairs",
    region: "International",
    image: null,
  },
  {
    id: "office-bearer-4",
    name: "Office Bearer",
    role: "Information / Media",
    region: "Central Organisation",
    image: null,
  },
  {
    id: "office-bearer-5",
    name: "Office Bearer",
    role: "Regional Office",
    region: "Region",
    image: null,
  },
  {
    id: "office-bearer-6",
    name: "Office Bearer",
    role: "Regional Office",
    region: "Region",
    image: null,
  },
];

export const historicalFigures = [
  {
    id: "maqbool-bhat",
    name: "Maqbool Bhat",
    role: "Historical Figure",
    category: "Historical Figure",
    description:
      "Biographical and archival material concerning his role in the political history associated with the movement.",
    image: null,
  },
  {
    id: "amanullah-khan",
    name: "Amanullah Khan",
    role: "Historical Figure",
    category: "Historical Figure",
    description:
      "Biographical information, writings and archival material concerning his role in JKLF's development.",
    image: null,
  },
  {
    id: "yasin-malik",
    name: "Yasin Malik",
    role: "Political Figure",
    category: "Political Figure",
    description:
      "Biographical, political and documentary material relating to his role within JKLF and its political history.",
    image: null,
  },
];

export const formerLeadership = [
  {
    id: "former-leader-1",
    name: "Former Leader",
    role: "Former Position",
    period: "Year – Year",
    image: null,
  },
  {
    id: "former-leader-2",
    name: "Former Leader",
    role: "Former Position",
    period: "Year – Year",
    image: null,
  },
];

export const allLeadershipProfiles = [
  ...currentLeadership,
  ...officeBearers,
  ...historicalFigures,
  ...formerLeadership,
];