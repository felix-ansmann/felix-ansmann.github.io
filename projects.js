// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS — Edit this file to add, remove, or reorder projects
//
//  Each project entry can have the following fields:
//
//    title   (required) — The project name shown in the list
//    venue   (required) — Institution, publisher, or collaborator
//    type    (required) — Category. Use one of: Projects / Research / Writing / Teaching / Other
//    images  (optional) — List of images shown as slideshow on hover (1 sec each)
//                         → Create a folder: assets/projects/your-project-name/
//                         → Drop all JPGs/PNGs into that folder
//                         → List them here in the order you want them shown:
//                           images: [
//                             "assets/projects/your-project-name/01.jpg",
//                             "assets/projects/your-project-name/02.jpg",
//                           ],
//                         → Delete this field entirely if there are no images
//    description (optional) — 2–3 line text shown when clicking the project row
//                         → Delete this line entirely if there is no description
//                         → To add a link inside the description, use:
//                           "Text text <a href='https://...' target='_blank'>Link text</a> more text."
//    link    (optional) — External URL — makes the TITLE clickable (only used when there is no description)
//                         → If the project has a description, put links inside the description instead
//                         → Delete this line or leave empty ("") for no link
//
//  HOW TO ADD A PROJECT:
//    1. Copy one of the blocks below (from { to },)
//    2. Paste it above the first entry (list is shown top-to-bottom on site)
//    3. Fill in the fields
//    4. Save the file
//
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Extreme Value",
    venue: "2025 – Trust Berlin",
    type: "Projects",
    description: "Video essay on how finance and computation turned environmental catastrophe into a speculative opportunity. Presented at <a href='https://trust.support' target='_blank'>Trust Berlin</a> as part of the group show Forked.",
    images: [
      "assets/projects/extreme-value/04.jpg",
      "assets/projects/extreme-value/01.jpg",
      "assets/projects/extreme-value/02.jpg",
      "assets/projects/extreme-value/03.jpg",
      "assets/projects/extreme-value/05.jpg",
    ],
  },
  {
    title: "Infrastructures of Risk Management",
    venue: "2025 – University of Vienna",
    type: "Research",
    description: "Presentation given at the University of Vienna as part of the <a href='https://infranorth.eu/beyond-infrastructure-conference/' target='_blank'>Beyond Infrastructure Conference</a> on the abstraction of risk through finance and computation.",
    images: [
      "assets/projects/infrastructures-of-risk-management/01.jpg",
      "assets/projects/infrastructures-of-risk-management/02.jpg",
      "assets/projects/infrastructures-of-risk-management/03.jpg",
      "assets/projects/infrastructures-of-risk-management/04.jpg",
      "assets/projects/infrastructures-of-risk-management/05.jpg",
      "assets/projects/infrastructures-of-risk-management/06.jpg",
    ],
  },
  {
    title: "Hemispherical Stacks Research Network",
    venue: "2024 – Antikythera",
    type: "Research",
    description: "Contributed to <a href='https://research.antikythera.org/#hemispherical-stacks' target='_blank'>Antikythera's</a> research on the geopolitical implications of computational technologies and scenario based foresight methodologies.",
    images: [
      "assets/projects/hemispherical-stacks-research-network/02.jpg",
    ],
  },
  {
    title: "Maps to Follow, Models to Emulate",
    venue: "2024 – DISC Journal",
    type: "Writing",
    description: "Essay on the mental models of globalization and their roots in the history of science and colonialism for <a href='https://pro-qm.de/product/disc-journal-issue-30-enchantment' target='_blank'>DISC Journal Issue 3.0</a>.",
    images: [
      "assets/projects/maps-to-follow-models-to-emulate/01.png",
      "assets/projects/maps-to-follow-models-to-emulate/02.png",
      "assets/projects/maps-to-follow-models-to-emulate/03.png",
    ],
  },
  {
    title: "Invisual Culture: Seeing and Computation",
    venue: "2024 – Academy of Fine Arts Leipzig",
    type: "Teaching",
    description: "Seminar on how images have been turned from a matter of aesthetics into a central resource for today's digital technologies – most predominantly AI.",
    images: [
      "assets/projects/invisual-culture/01.jpg",
      "assets/projects/invisual-culture/02.jpg",
      "assets/projects/invisual-culture/03.jpg",
      "assets/projects/invisual-culture/04.jpg",
      "assets/projects/invisual-culture/05.jpg",
    ],
  },
  {
    title: "Notes on the Culture of Financialization",
    venue: "2023 – New Practice in Art and Technology",
    type: "Research",
    description: "Research project on the interdependencies between today's technological landscape and the history of financialization at <a href='https://www.newpractice.net/' target='_blank'>New Practice in Art and Technology</a>.",
    images: [
      "assets/projects/notes-on-the-culture-of-financialization/01.jpg",
      "assets/projects/notes-on-the-culture-of-financialization/02.jpg",
      "assets/projects/notes-on-the-culture-of-financialization/03.jpg",
      "assets/projects/notes-on-the-culture-of-financialization/04.jpg",
    ],
  },
  {
    title: "Loops with Vladan Joler and Kim Albrecht",
    venue: "2023 – New Practice in Art and Technology",
    type: "Other",
    description: "Moderated <a href='https://www.newpractice.net/post/vladan-joler-kim-albrecht' target='_blank'>Loops Event</a> on creative practice and technology with guests Vladan Joler and Kim Albrecht.",
    images: [
      "assets/projects/loops/01.png",
    ],
  },
  {
    title: "Closed Loop / Scrying Mirror",
    venue: "2022 – Ars Electronica",
    type: "Projects",
    description: "Video installation created with Maurice Wald on predictive methodologies from divination to AI presented at <a href='https://ars.electronica.art/planetb/en/' target='_blank'>Ars Electronica</a>.",
    images: [
      "",
    ],
  },
  {
    title: "Mirror Work",
    venue: "2022 – Documenta 15",
    type: "Projects",
    description: "Video on the politics of personal data and the self screened at Temporary Home at Documenta 15.",
  },
  {
    title: "Aesthetics of Interiorization",
    venue: "2022 – New European Bauhaus Festival",
    type: "Research",
    description: "Presentation on the aesthetic paradigms of globalization and the politics they produce.",
  },
  {
    title: "NM Special Report",
    venue: "2022 – New Models",
    type: "Other",
    description: "Guest on <a href='https://www.newmodels.io/' target='_blank'>New Models</a> Podcast.",
  },
  {
    title: "Strelka Institute x University of the Arts Berlin",
    venue: "2022 – University of the Arts Berlin",
    type: "Teaching",
    description: "Facilitated workshop with the Strelka Institute on technological futures and speculative design.",
  },
  {
    title: "Y2K20 Codex",
    venue: "2021 – New Models",
    type: "Writing",
    description: "Contributed two articles to <a href='https://newmodels-io.myshopify.com/products/nm-2yk20-codex' target='_blank'>New Models Y2K20 Codex</a> publication.",
  },
  {
    title: "Black Swan DAO x UDK Berlin",
    venue: "2021 – University of the Arts Berlin",
    type: "Teaching",
    description: "Facilitated workshop with Black Swan DAO on alternative creative economies.",
  },
  {
    title: "Virtualities and Worldbuilding",
    venue: "2020 – University of the Arts Berlin",
    type: "Teaching",
    description: "Co-taught interdisciplinary studio on worldbuilding as a holistic design practice.",
  },
];
