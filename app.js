const LESSON_ITEMS = [
  { category: "Greetings", english: "Hello", tagalog: "Kumusta", pronunciation: "koo-MOOS-tah" },
  { category: "Greetings", english: "Good morning", tagalog: "Magandang umaga", pronunciation: "mah-GAHN-dahng oo-MAH-gah" },
  { category: "Greetings", english: "Good afternoon", tagalog: "Magandang hapon", pronunciation: "mah-GAHN-dahng hah-PON" },
  { category: "Greetings", english: "Good evening", tagalog: "Magandang gabi", pronunciation: "mah-GAHN-dahng gah-BEE" },
  { category: "Greetings", english: "How are you?", tagalog: "Kumusta ka?", pronunciation: "koo-MOOS-tah kah" },
  { category: "Basics", english: "Yes", tagalog: "Oo", pronunciation: "OH-oh" },
  { category: "Basics", english: "No", tagalog: "Hindi", pronunciation: "hin-DEE" },
  { category: "Basics", english: "Please", tagalog: "Pakiusap", pronunciation: "pah-kee-OO-sap" },
  { category: "Basics", english: "Thank you", tagalog: "Salamat", pronunciation: "sah-LAH-mat" },
  { category: "Basics", english: "You're welcome", tagalog: "Walang anuman", pronunciation: "wah-LAHNG ah-noo-MAHN" },
  { category: "Basics", english: "Excuse me", tagalog: "Mawalang galang", pronunciation: "mah-wah-LAHNG gah-LAHNG" },
  { category: "Basics", english: "Sorry", tagalog: "Pasensya na", pronunciation: "pah-SEN-shah nah" },
  { category: "Questions", english: "What is your name?", tagalog: "Ano ang pangalan mo?", pronunciation: "AH-noh ang pah-NGAH-lan moh" },
  { category: "Questions", english: "Where are you from?", tagalog: "Taga saan ka?", pronunciation: "tah-GAH sah-AHN kah" },
  { category: "Questions", english: "How much is this?", tagalog: "Magkano ito?", pronunciation: "mag-KAH-noh ee-TOH" },
  { category: "Questions", english: "Where is the bathroom?", tagalog: "Nasaan ang banyo?", pronunciation: "nah-sah-AHN ang BAHN-yoh" },
  { category: "Questions", english: "Can you help me?", tagalog: "Pwede mo ba akong tulungan?", pronunciation: "PWEH-deh moh bah ah-KOHNG too-LOO-ngan" },
  { category: "Everyday", english: "I understand", tagalog: "Naiintindihan ko", pronunciation: "nah-ee-in-tin-dee-HAN koh" },
  { category: "Everyday", english: "I don't understand", tagalog: "Hindi ko maintindihan", pronunciation: "hin-DEE koh mah-in-tin-dee-HAN" },
  { category: "Everyday", english: "I like this", tagalog: "Gusto ko ito", pronunciation: "GOOS-toh koh ee-TOH" },
  { category: "Everyday", english: "I am learning Tagalog", tagalog: "Nag-aaral ako ng Tagalog", pronunciation: "nag-ah-AH-ral ah-KOH nang tah-GAH-log" },
  { category: "Everyday", english: "I am hungry", tagalog: "Gutom ako", pronunciation: "GOO-tom ah-KOH" },
  { category: "Everyday", english: "I am thirsty", tagalog: "Uhaw ako", pronunciation: "OO-haw ah-KOH" },
  { category: "Numbers", english: "One", tagalog: "Isa", pronunciation: "EE-sah" },
  { category: "Numbers", english: "Two", tagalog: "Dalawa", pronunciation: "dah-LAH-wah" },
  { category: "Numbers", english: "Three", tagalog: "Tatlo", pronunciation: "TAHT-loh" },
  { category: "Numbers", english: "Four", tagalog: "Apat", pronunciation: "AH-paht" },
  { category: "Numbers", english: "Five", tagalog: "Lima", pronunciation: "LEE-mah" },
  { category: "Food", english: "Water", tagalog: "Tubig", pronunciation: "TOO-big" },
  { category: "Food", english: "Rice", tagalog: "Kanin", pronunciation: "kah-NIN" },
  { category: "Food", english: "Delicious", tagalog: "Masarap", pronunciation: "mah-SAH-rap" },
  { category: "Food", english: "Coffee", tagalog: "Kape", pronunciation: "kah-PEH" },
  { category: "Food", english: "I want to eat", tagalog: "Gusto kong kumain", pronunciation: "GOOS-toh kong koo-MAH-in" }
];

const CORE_PACK_V2_ITEMS = [
  { category: "Greetings", english: "Goodbye", tagalog: "Paalam", pronunciation: "pah-AH-lam" },
  { category: "Greetings", english: "See you later", tagalog: "Kita tayo mamaya", pronunciation: "kee-TAH tah-YOH mah-MAH-yah" },
  { category: "Greetings", english: "Welcome", tagalog: "Maligayang pagdating", pronunciation: "mah-lee-GAH-yang pag-dah-TING" },
  { category: "Greetings", english: "Take care", tagalog: "Ingat ka", pronunciation: "EE-ngat kah" },
  { category: "Greetings", english: "Long time no see", tagalog: "Matagal tayong hindi nagkita", pronunciation: "mah-tah-GAL tah-YONG hin-DEE nag-kee-TAH" },
  { category: "Greetings", english: "Good luck", tagalog: "Suwertehin ka sana", pronunciation: "swer-teh-HIN kah SAH-nah" },
  { category: "Greetings", english: "How is your day?", tagalog: "Kumusta ang araw mo?", pronunciation: "koo-MOOS-tah ang AH-raw moh" },
  { category: "Greetings", english: "I'm fine", tagalog: "Mabuti ako", pronunciation: "mah-BOO-tee ah-KOH" },

  { category: "Basics", english: "Maybe", tagalog: "Siguro", pronunciation: "see-GOO-roh" },
  { category: "Basics", english: "Of course", tagalog: "Siyempre", pronunciation: "syem-PREH" },
  { category: "Basics", english: "No problem", tagalog: "Walang problema", pronunciation: "wah-LANG pro-ble-MAH" },
  { category: "Basics", english: "Wait", tagalog: "Sandali", pronunciation: "san-dah-LEE" },
  { category: "Basics", english: "Hurry up", tagalog: "Bilisan mo", pronunciation: "bee-LEE-san moh" },
  { category: "Basics", english: "Be careful", tagalog: "Mag-ingat ka", pronunciation: "mag-EE-ngat kah" },
  { category: "Basics", english: "I agree", tagalog: "Sang-ayon ako", pronunciation: "sang-AH-yon ah-KOH" },
  { category: "Basics", english: "I don't know", tagalog: "Hindi ko alam", pronunciation: "hin-DEE koh ah-LAM" },
  { category: "Basics", english: "That's okay", tagalog: "Ayos lang", pronunciation: "AH-yos lang" },
  { category: "Basics", english: "It's fine", tagalog: "Okay lang", pronunciation: "oh-KAY lang" },

  { category: "Questions", english: "What time is it?", tagalog: "Anong oras na?", pronunciation: "AH-nong OH-ras nah" },
  { category: "Questions", english: "Who is that?", tagalog: "Sino iyon?", pronunciation: "SEE-noh EE-yon" },
  { category: "Questions", english: "Why?", tagalog: "Bakit?", pronunciation: "bah-KEET" },
  { category: "Questions", english: "When will you arrive?", tagalog: "Kailan ka darating?", pronunciation: "kai-LAN kah dah-rah-TING" },
  { category: "Questions", english: "Which one?", tagalog: "Alin doon?", pronunciation: "ah-LIN doh-ON" },
  { category: "Questions", english: "Can I ask something?", tagalog: "Pwede ba akong magtanong?", pronunciation: "PWEH-deh bah ah-KONG mag-tah-NONG" },
  { category: "Questions", english: "Is this correct?", tagalog: "Tama ba ito?", pronunciation: "tah-MAH bah ee-TOH" },
  { category: "Questions", english: "Do you speak English?", tagalog: "Nagsasalita ka ba ng Ingles?", pronunciation: "nag-sah-sa-LEE-tah kah bah nang ING-gles" },

  { category: "Everyday", english: "I am tired", tagalog: "Pagod ako", pronunciation: "pah-GOD ah-KOH" },
  { category: "Everyday", english: "I am busy", tagalog: "Abala ako", pronunciation: "ah-bah-LAH ah-KOH" },
  { category: "Everyday", english: "I am ready", tagalog: "Handa na ako", pronunciation: "han-DAH nah ah-KOH" },
  { category: "Everyday", english: "Let's go", tagalog: "Tara na", pronunciation: "tah-RAH nah" },
  { category: "Everyday", english: "I need help", tagalog: "Kailangan ko ng tulong", pronunciation: "kai-LAN-gan koh nang TOO-long" },
  { category: "Everyday", english: "I am at home", tagalog: "Nasa bahay ako", pronunciation: "nah-sah bah-HIGH ah-KOH" },
  { category: "Everyday", english: "I am at work", tagalog: "Nasa trabaho ako", pronunciation: "nah-sah trah-BAH-hoh ah-KOH" },
  { category: "Everyday", english: "I am on my way", tagalog: "Papunta na ako", pronunciation: "pah-POON-tah nah ah-KOH" },
  { category: "Everyday", english: "Please repeat", tagalog: "Pakiulit", pronunciation: "pah-kee-OO-leet" },
  { category: "Everyday", english: "Speak slowly", tagalog: "Dahan-dahan magsalita", pronunciation: "dah-HAN dah-HAN mag-sah-LEE-tah" },

  { category: "Numbers", english: "Six", tagalog: "Anim", pronunciation: "AH-nim" },
  { category: "Numbers", english: "Seven", tagalog: "Pito", pronunciation: "pee-TOH" },
  { category: "Numbers", english: "Eight", tagalog: "Walo", pronunciation: "wah-LOH" },
  { category: "Numbers", english: "Nine", tagalog: "Siyam", pronunciation: "SYAM" },
  { category: "Numbers", english: "Ten", tagalog: "Sampu", pronunciation: "sam-POO" },
  { category: "Numbers", english: "Twenty", tagalog: "Dalawampu", pronunciation: "dah-lah-WAM-poo" },
  { category: "Numbers", english: "Fifty", tagalog: "Limampu", pronunciation: "lee-MAM-poo" },
  { category: "Numbers", english: "One hundred", tagalog: "Isang daan", pronunciation: "EE-sang dah-AHN" },

  { category: "Food", english: "Breakfast", tagalog: "Almusal", pronunciation: "al-moo-SAL" },
  { category: "Food", english: "Lunch", tagalog: "Tanghalian", pronunciation: "tang-hah-LEE-yan" },
  { category: "Food", english: "Dinner", tagalog: "Hapunan", pronunciation: "hah-poo-NAN" },
  { category: "Food", english: "Fish", tagalog: "Isda", pronunciation: "ees-DAH" },
  { category: "Food", english: "Chicken", tagalog: "Manok", pronunciation: "mah-NOK" },
  { category: "Food", english: "Pork", tagalog: "Baboy", pronunciation: "bah-BOY" },
  { category: "Food", english: "Vegetables", tagalog: "Gulay", pronunciation: "goo-LAI" },
  { category: "Food", english: "Spicy", tagalog: "Maanghang", pronunciation: "mah-ang-HANG" },
  { category: "Food", english: "I'm full", tagalog: "Busog na ako", pronunciation: "boo-SOG nah ah-KOH" },

  { category: "Travel", english: "Airport", tagalog: "Paliparan", pronunciation: "pah-lee-PAH-ran" },
  { category: "Travel", english: "Bus station", tagalog: "Istasyon ng bus", pronunciation: "ees-tah-SYON nang boos" },
  { category: "Travel", english: "Train station", tagalog: "Istasyon ng tren", pronunciation: "ees-tah-SYON nang tren" },
  { category: "Travel", english: "Ticket", tagalog: "Tiket", pronunciation: "tee-KET" },
  { category: "Travel", english: "Hotel", tagalog: "Hotel", pronunciation: "hoh-TEL" },
  { category: "Travel", english: "Reservation", tagalog: "Reserbasyon", pronunciation: "reh-ser-bah-SYON" },
  { category: "Travel", english: "Passport", tagalog: "Pasaporte", pronunciation: "pah-sah-POR-teh" },
  { category: "Travel", english: "How much is the fare?", tagalog: "Magkano ang pamasahe?", pronunciation: "mag-KAH-noh ang pah-mah-SAH-heh" },
  { category: "Travel", english: "I need a taxi", tagalog: "Kailangan ko ng taxi", pronunciation: "kai-LAN-gan koh nang TAK-see" },
  { category: "Travel", english: "Please take me here", tagalog: "Dito po ako", pronunciation: "DEE-toh poh ah-KOH" },

  { category: "Family", english: "Mother", tagalog: "Nanay", pronunciation: "nah-NIGH" },
  { category: "Family", english: "Father", tagalog: "Tatay", pronunciation: "tah-TIGH" },
  { category: "Family", english: "Older brother", tagalog: "Kuya", pronunciation: "KOO-yah" },
  { category: "Family", english: "Older sister", tagalog: "Ate", pronunciation: "AH-teh" },
  { category: "Family", english: "Younger sibling", tagalog: "Bunso", pronunciation: "BOON-soh" },
  { category: "Family", english: "Child", tagalog: "Anak", pronunciation: "ah-NAK" },

  { category: "Time", english: "Today", tagalog: "Ngayon", pronunciation: "nga-YON" },
  { category: "Time", english: "Tomorrow", tagalog: "Bukas", pronunciation: "BOO-kas" },
  { category: "Time", english: "Yesterday", tagalog: "Kahapon", pronunciation: "kah-hah-PON" },
  { category: "Time", english: "Morning", tagalog: "Umaga", pronunciation: "oo-MAH-gah" },
  { category: "Time", english: "Evening", tagalog: "Gabi", pronunciation: "gah-BEE" },
  { category: "Time", english: "Night", tagalog: "Gabi", pronunciation: "gah-BEE" },
  { category: "Time", english: "Now", tagalog: "Ngayon na", pronunciation: "nga-YON nah" },
  { category: "Time", english: "Later", tagalog: "Mamaya", pronunciation: "mah-MAH-yah" },
  { category: "Time", english: "Early", tagalog: "Maaga", pronunciation: "mah-AH-gah" },

  { category: "Directions", english: "Left", tagalog: "Kaliwa", pronunciation: "kah-LEE-wah" },
  { category: "Directions", english: "Right", tagalog: "Kanan", pronunciation: "kah-NAN" },
  { category: "Directions", english: "Straight ahead", tagalog: "Derecho lang", pronunciation: "deh-REH-choh lang" },
  { category: "Directions", english: "Near", tagalog: "Malapit", pronunciation: "mah-LAH-pit" },
  { category: "Directions", english: "Far", tagalog: "Malayo", pronunciation: "mah-LAH-yoh" },
  { category: "Directions", english: "Across", tagalog: "Kabila", pronunciation: "kah-bee-LAH" },
  { category: "Directions", english: "At the corner", tagalog: "Sa kanto", pronunciation: "sah KAN-toh" },
  { category: "Directions", english: "Turn left", tagalog: "Kumaliwa ka", pronunciation: "koo-mah-LEE-wah kah" },
  { category: "Directions", english: "Turn right", tagalog: "Kumanan ka", pronunciation: "koo-mah-NAN kah" }
];

const SURVIVAL_TAGALOG_PHRASES = [
  { english: "Hello", tagalog: "Kumusta" },
  { english: "How are you?", tagalog: "Kumusta ka?" },
  { english: "Thank you", tagalog: "Salamat" },
  { english: "Please", tagalog: "Pakiusap" },
  { english: "Excuse me", tagalog: "Mawalang galang" },
  { english: "Sorry", tagalog: "Pasensya na" },
  { english: "Yes", tagalog: "Oo" },
  { english: "No", tagalog: "Hindi" },
  { english: "Where is the bathroom?", tagalog: "Nasaan ang banyo?" },
  { english: "Can you help me?", tagalog: "Pwede mo ba akong tulungan?" },
  { english: "How much is this?", tagalog: "Magkano ito?" },
  { english: "Do you speak English?", tagalog: "Nagsasalita ka ba ng Ingles?" },
  { english: "Please repeat", tagalog: "Pakiulit" },
  { english: "Speak slowly", tagalog: "Dahan-dahan magsalita" },
  { english: "I don't understand", tagalog: "Hindi ko maintindihan" },
  { english: "I need help", tagalog: "Kailangan ko ng tulong" },
  { english: "I am on my way", tagalog: "Papunta na ako" },
  { english: "Water", tagalog: "Tubig" },
  { english: "Rice", tagalog: "Kanin" },
  { english: "I want to eat", tagalog: "Gusto kong kumain" },
  { english: "How much is the fare?", tagalog: "Magkano ang pamasahe?" },
  { english: "I need a taxi", tagalog: "Kailangan ko ng taxi" },
  { english: "Turn left", tagalog: "Kumaliwa ka" },
  { english: "Turn right", tagalog: "Kumanan ka" },
  { english: "Straight ahead", tagalog: "Derecho lang" }
];

const SURVIVAL_TAGALOG_SIGNATURES = new Set(
  SURVIVAL_TAGALOG_PHRASES.map((item) => getCustomSignature(item.english, item.tagalog))
);

const STORAGE_KEY = "johns_tagalog_coach_progress_v1";
const LEGACY_STORAGE_KEYS = [
  "aral_tagalog_progress_v1",
  "tagalog_sprint_progress_v2",
  "tagalog_sprint_progress_v1"
];
const XP_PER_LEVEL = 100;
const DEFAULT_GOAL_TARGET = 10;
const MAX_REVIEW_QUEUE = 25;
const CUSTOM_PACK_VERSION = 1;
const DAILY_CHALLENGE_TYPES = {
  correct_answers: {
    title: "Land 5 correct answers in Quiz or Typing.",
    target: 5
  },
  xp_gain: {
    title: "Earn 30 XP in Quiz or Typing.",
    target: 30
  },
  strong_accuracy: {
    title: "Get 3 correct answers in a row.",
    target: 3
  }
};
const QUIZ_DIFFICULTY = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard"
};
const ITEM_DIFFICULTY_LABELS = {
  beginner: "Beginner",
  intermediate: "Intermediate"
};
const REVIEW_DELAYS_MS = {
  again: 15 * 60 * 1000,
  good: 12 * 60 * 60 * 1000,
  easy: 3 * 24 * 60 * 60 * 1000
};

const CATEGORY_UNITS = {
  Greetings: 1,
  Basics: 1,
  Numbers: 1,
  Questions: 2,
  Everyday: 3,
  Food: 3,
  Time: 2,
  Directions: 2,
  Travel: 3,
  Family: 3
};

const CATEGORY_DIFFICULTY = {
  Greetings: "beginner",
  Basics: "beginner",
  Numbers: "beginner",
  Questions: "beginner",
  Everyday: "beginner",
  Food: "beginner",
  Family: "beginner",
  Time: "intermediate",
  Directions: "intermediate",
  Travel: "intermediate"
};

const CATEGORY_GRAMMAR = {
  Greetings: "Use polite particles like 'po' to sound respectful.",
  Basics: "Tagalog order can be flexible, but markers carry meaning.",
  Questions: "Question words like 'ano' and 'saan' often come early.",
  Everyday: "Notice markers like 'ang', 'ng', and 'sa' in common phrases.",
  Numbers: "Numbers are often paired with context words when counting things.",
  Food: "'Gusto ko' means 'I want' and is very common in food phrases.",
  Travel: "Location markers like 'sa' are common in transportation phrases.",
  Family: "Family titles are often used directly as names in conversation.",
  Time: "Time words usually come early to set context for the sentence.",
  Directions: "Imperative forms and direction words often appear together."
};

const PHRASE_GRAMMAR = {
  "Kumusta ka?": "'ka' is informal 'you'. Add 'po' to be polite.",
  Salamat: "Add 'po' for respect: 'Salamat po.'",
  "Ano ang pangalan mo?": "'ang' marks the focused noun phrase.",
  "Magkano ito?": "'ito' means 'this' near the speaker.",
  "Nasaan ang banyo?": "'Nasaan' asks location.",
  "Pwede mo ba akong tulungan?": "'ba' marks yes/no question tone.",
  "Gusto ko ito": "'Gusto ko' is a common pattern for likes/wants.",
  "Nag-aaral ako ng Tagalog": "'Nag-' often marks ongoing action."
};

const BASE_ITEMS = [...LESSON_ITEMS, ...CORE_PACK_V2_ITEMS].map((item) => ({
  ...item,
  unit: CATEGORY_UNITS[item.category] || 1,
  difficulty: resolveItemDifficulty(item),
  paths: SURVIVAL_TAGALOG_SIGNATURES.has(getCustomSignature(item.english, item.tagalog)) ? ["survival"] : [],
  source: "base",
  grammar: PHRASE_GRAMMAR[item.tagalog] || CATEGORY_GRAMMAR[item.category] || "Study word order and markers in this phrase."
}));

const CURRICULUM_VERSION = 1;
const LEARN_RETRY_GAP = 2;
const LEARN_PATTERN_STREAK_TARGET = 2;
const UNIT_CHECKPOINT_SIZE = 10;
const UNIT_CHECKPOINT_PASS_PCT = 80;
const LEARN_MODES = {
  review: "review",
  learn: "learn"
};
const LEARN_PATTERN_LABELS = {
  ako_statement: "Ako Statement",
  gusto_need: "Gusto / Need",
  nasaan_question: "Nasaan Question",
  pwede_request: "Pwede Request"
};
const TAGALOG_WORD_GLOSSARY = {
  ako: "I / me",
  ko: "my / I (genitive)",
  kong: "my + linker",
  ay: "topic linker",
  si: "name marker",
  gusto: "want / like",
  kailangan: "need",
  ng: "object marker",
  ang: "topic marker",
  sa: "in / at / to",
  na: "already / now",
  ba: "question particle",
  nasaan: "where is",
  pwede: "can / may",
  mo: "you / your",
  "ako'ng": "I + linker",
  akoang: "I + topic",
  ito: "this",
  doon: "there",
  dito: "here"
};
const LEARN_PATTERN_FALLBACKS = {
  ako_statement: [
    { english: "I am learning Tagalog", tagalog: "Nag-aaral ako ng Tagalog" },
    { english: "I am tired", tagalog: "Pagod ako" },
    { english: "I am on my way", tagalog: "Papunta na ako" }
  ],
  gusto_need: [
    { english: "I like this", tagalog: "Gusto ko ito" },
    { english: "I want to eat", tagalog: "Gusto kong kumain" },
    { english: "I need help", tagalog: "Kailangan ko ng tulong" }
  ],
  nasaan_question: [
    { english: "Where is the bathroom?", tagalog: "Nasaan ang banyo?" }
  ],
  pwede_request: [
    { english: "Can you help me?", tagalog: "Pwede mo ba akong tulungan?" },
    { english: "Can I ask something?", tagalog: "Pwede ba akong magtanong?" }
  ]
};
const CURRICULUM_UNITS = [
  {
    unit: 1,
    id: "unit_1",
    title: "Unit 1: Foundations",
    lessons: [
      { id: "u1_greetings", title: "Greetings", categories: ["Greetings"] },
      { id: "u1_basics", title: "Basics", categories: ["Basics"] },
      { id: "u1_numbers", title: "Numbers", categories: ["Numbers"] }
    ],
    patterns: ["ako_statement", "gusto_need"]
  },
  {
    unit: 2,
    id: "unit_2",
    title: "Unit 2: Conversation",
    lessons: [
      { id: "u2_questions", title: "Questions", categories: ["Questions"] },
      { id: "u2_time", title: "Time", categories: ["Time"] },
      { id: "u2_directions", title: "Directions", categories: ["Directions"] }
    ],
    patterns: ["nasaan_question", "pwede_request"]
  },
  {
    unit: 3,
    id: "unit_3",
    title: "Unit 3: Everyday Use",
    lessons: [
      { id: "u3_everyday", title: "Everyday", categories: ["Everyday"] },
      { id: "u3_food", title: "Food", categories: ["Food"] },
      { id: "u3_travel", title: "Travel", categories: ["Travel"] },
      { id: "u3_family", title: "Family", categories: ["Family"] }
    ],
    patterns: ["ako_statement", "gusto_need", "nasaan_question", "pwede_request"]
  }
];

const categorySelect = document.getElementById("categorySelect");
const focusSelect = document.getElementById("focusSelect");
const directionSelect = document.getElementById("directionSelect");
const pathSelect = document.getElementById("pathSelect");
const goalButtons = Array.from(document.querySelectorAll(".goal-pill"));
const resetProgressBtn = document.getElementById("resetProgressBtn");
const pronounceBtn = document.getElementById("pronounceBtn");
const levelBadge = document.getElementById("levelBadge");
const modeTitle = document.getElementById("modeTitle");
const promptLine = document.getElementById("promptLine");
const questionLine = document.getElementById("questionLine");
const hintLine = document.getElementById("hintLine");
const metaLine = document.getElementById("metaLine");
const feedbackLine = document.getElementById("feedbackLine");
const coachingCard = document.getElementById("coachingCard");
const coachingAnswer = document.getElementById("coachingAnswer");
const coachingPronunciation = document.getElementById("coachingPronunciation");
const coachingHint = document.getElementById("coachingHint");
const quizOptions = document.getElementById("quizOptions");
const typingForm = document.getElementById("typingForm");
const typingSubmitBtn = typingForm ? typingForm.querySelector("button[type='submit']") : null;
const typingInput = document.getElementById("typingInput");
const typingResultIcon = document.getElementById("typingResultIcon");
const primaryActionBtn = document.getElementById("primaryActionBtn");
const nextBtn = document.getElementById("nextBtn");
const actionsBar = document.getElementById("actionsBar");
const endSessionBtn = document.getElementById("endSessionBtn");
const xpValue = document.getElementById("xpValue");
const streakValue = document.getElementById("streakValue");
const accuracyValue = document.getElementById("accuracyValue");
const masteredValue = document.getElementById("masteredValue");
const challengeTitle = document.getElementById("challengeTitle");
const challengeFill = document.getElementById("challengeFill");
const challengeProgressText = document.getElementById("challengeProgressText");
const challengeStatusText = document.getElementById("challengeStatusText");
const badgeCountText = document.getElementById("badgeCountText");
const badgeList = document.getElementById("badgeList");
const goalRing = document.getElementById("goalRing");
const goalProgressText = document.getElementById("goalProgressText");
const goalStatusText = document.getElementById("goalStatusText");
const reviewQueueCount = document.getElementById("reviewQueueCount");
const ratingBar = document.getElementById("ratingBar");
const ratingButtons = Array.from(document.querySelectorAll(".rating-btn"));
const sessionSummary = document.getElementById("sessionSummary");
const sessionDurationValue = document.getElementById("sessionDurationValue");
const sessionAttemptsValue = document.getElementById("sessionAttemptsValue");
const sessionAccuracyValue = document.getElementById("sessionAccuracyValue");
const sessionXpDeltaValue = document.getElementById("sessionXpDeltaValue");
const sessionWeakAreasValue = document.getElementById("sessionWeakAreasValue");
const sessionRecommendationValue = document.getElementById("sessionRecommendationValue");
const startNewSessionBtn = document.getElementById("startNewSessionBtn");
const customWordForm = document.getElementById("customWordForm");
const customEnglish = document.getElementById("customEnglish");
const customTagalog = document.getElementById("customTagalog");
const customCategory = document.getElementById("customCategory");
const customPronunciation = document.getElementById("customPronunciation");
const customGrammar = document.getElementById("customGrammar");
const customSubmitBtn = document.getElementById("customSubmitBtn");
const cancelCustomEditBtn = document.getElementById("cancelCustomEditBtn");
const customStatusLine = document.getElementById("customStatusLine");
const exportCustomBtn = document.getElementById("exportCustomBtn");
const importCustomBtn = document.getElementById("importCustomBtn");
const importCustomInput = document.getElementById("importCustomInput");
const customItemsList = document.getElementById("customItemsList");
const modeButtons = Array.from(document.querySelectorAll(".mode-btn"));
const journeyButtons = Array.from(document.querySelectorAll(".journey-btn"));
const reviewControls = document.getElementById("reviewControls");
const reviewModeToggle = document.getElementById("reviewModeToggle");
const reviewQueueBadge = document.querySelector(".review-queue-badge");
const learnHeader = document.getElementById("learnHeader");
const learnUnitTitle = document.getElementById("learnUnitTitle");
const learnProgressText = document.getElementById("learnProgressText");
const learnRecommendationText = document.getElementById("learnRecommendationText");
const learnUnitSelect = document.getElementById("learnUnitSelect");
const sentenceBuilderCard = document.getElementById("sentenceBuilderCard");
const sentenceBuilderLabel = document.getElementById("sentenceBuilderLabel");
const sentenceBuilderType = document.getElementById("sentenceBuilderType");
const sentenceBuilderInstruction = document.getElementById("sentenceBuilderInstruction");
const sentencePatternGuide = document.getElementById("sentencePatternGuide");
const sentenceWordMap = document.getElementById("sentenceWordMap");
const checkpointCard = document.getElementById("checkpointCard");
const checkpointResultLine = document.getElementById("checkpointResultLine");
const checkpointSummaryLine = document.getElementById("checkpointSummaryLine");

const progress = loadProgress();
ensureCurriculumState(true);

const state = {
  mode: "flashcard",
  journeyMode: progress.curriculum.activeMode === LEARN_MODES.learn ? LEARN_MODES.learn : LEARN_MODES.review,
  category: "all",
  focus: "smart",
  direction: "tl_to_en",
  path: "all",
  currentItem: null,
  answerRevealed: false,
  quizAnswered: false,
  seenTracked: false,
  editingCustomId: null,
  learnPrompt: null,
  learnAnswered: false
};

let session = createEmptySession();

init();

function init() {
  ensureDailyChallenge();
  ensureCurriculumState();
  populateCategories();
  bindEvents();
  focusSelect.value = state.focus;
  directionSelect.value = state.direction;
  pathSelect.value = state.path;
  syncJourneyButtons();
  syncLearnUnitSelect();
  toggleJourneyLayout();
  syncGoalButtons();
  renderCustomItems();
  setNextQuestion();
  renderStats();
}

function populateCategories() {
  const categories = Array.from(new Set(getStudyItems().map((item) => item.category))).sort();
  categorySelect.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All";
  categorySelect.append(allOption);

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });

  const categoryStillValid = state.category === "all" || categories.includes(state.category);
  if (!categoryStillValid) {
    state.category = "all";
  }
  categorySelect.value = state.category;
}

function bindEvents() {
  categorySelect.addEventListener("change", (event) => {
    state.category = event.target.value;
    setNextQuestion();
  });

  focusSelect.addEventListener("change", (event) => {
    state.focus = event.target.value;
    setNextQuestion();
  });

  directionSelect.addEventListener("change", (event) => {
    state.direction = event.target.value;
    setNextQuestion();
  });

  pathSelect.addEventListener("change", (event) => {
    state.path = event.target.value;
    setNextQuestion();
  });

  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      scheduleCurrentItem(button.dataset.rating);
    });
  });

  goalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextGoal = Number(button.dataset.goal) || DEFAULT_GOAL_TARGET;
      if (nextGoal === getGoalTarget()) {
        return;
      }
      progress.goalTarget = nextGoal;
      persistProgress();
      syncGoalButtons();
      renderGoalProgress();
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (state.mode === button.dataset.mode) {
        return;
      }
      state.mode = button.dataset.mode;
      modeButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-selected", String(active));
      });
      setNextQuestion();
    });
  });

  journeyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const requestedMode = button.dataset.journey === LEARN_MODES.learn ? LEARN_MODES.learn : LEARN_MODES.review;
      if (state.journeyMode === requestedMode) {
        return;
      }
      state.journeyMode = requestedMode;
      progress.curriculum.activeMode = requestedMode;
      syncJourneyButtons();
      toggleJourneyLayout();
      persistProgress();
      setNextQuestion();
    });
  });

  if (learnUnitSelect) {
    learnUnitSelect.addEventListener("change", (event) => {
      const nextUnit = Number(event.target.value) || 1;
      setActiveLearnUnit(nextUnit);
    });
  }

  primaryActionBtn.addEventListener("click", handlePrimaryAction);
  nextBtn.addEventListener("click", setNextQuestion);
  endSessionBtn.addEventListener("click", endSession);
  resetProgressBtn.addEventListener("click", resetProgress);
  pronounceBtn.addEventListener("click", speakCurrentTagalog);
  startNewSessionBtn.addEventListener("click", startNewSession);
  customWordForm.addEventListener("submit", handleCustomSubmit);
  cancelCustomEditBtn.addEventListener("click", cancelCustomEdit);
  customItemsList.addEventListener("click", handleCustomListClick);
  exportCustomBtn.addEventListener("click", exportCustomItems);
  importCustomBtn.addEventListener("click", () => importCustomInput.click());
  importCustomInput.addEventListener("change", handleImportCustomFile);

  typingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleTypingAnswer();
  });

  document.addEventListener("keydown", (event) => {
    if (event.repeat) {
      return;
    }

    const activeTag = document.activeElement?.tagName || "";
    if (activeTag === "INPUT") {
      return;
    }

    if (event.key === "Enter" && state.mode !== "typing") {
      event.preventDefault();
      handlePrimaryAction();
    }

    if (event.key.toLowerCase() === "n") {
      if (state.journeyMode === LEARN_MODES.learn) {
        return;
      }
      event.preventDefault();
      setNextQuestion();
    }
  });
}

function setNextQuestion() {
  if (state.journeyMode === LEARN_MODES.learn) {
    setNextLearnQuestion();
    return;
  }

  state.learnPrompt = null;
  state.learnAnswered = false;
  const pool = getFilteredItems();
  if (!pool.length) {
    questionLine.textContent = state.focus === "due" ? "No due cards right now." : "No items in this category yet.";
    promptLine.textContent = "";
    hintLine.textContent = "";
    metaLine.textContent = "";
    feedbackLine.textContent = "";
    quizOptions.innerHTML = "";
    clearTypingOutcome();
    hideCoachingCard();
    hideRatingBar();
    setPrimaryActionVisible(false);
    pronounceBtn.disabled = true;
    return;
  }

  state.currentItem = getNextItem(pool, state.currentItem);
  state.answerRevealed = false;
  state.quizAnswered = false;
  state.seenTracked = false;
  feedbackLine.textContent = "";
  feedbackLine.className = "feedback-line";
  clearTypingOutcome();
  hideCoachingCard();
  hideRatingBar();
  pronounceBtn.disabled = false;

  renderModeLayout();
}

function renderModeLayout() {
  if (!state.currentItem) {
    return;
  }

  hideLearnCards();
  nextBtn.textContent = "Next Card";
  setPrimaryActionVisible(true);
  const prompt = getPromptConfig(state.currentItem);
  clearTypingOutcome();
  quizOptions.innerHTML = "";

  promptLine.textContent = prompt.promptLabel;
  questionLine.textContent = prompt.questionText;
  hintLine.textContent = prompt.hintText;
  metaLine.textContent = buildMetaLabel(state.currentItem, { includeCategory: !isChoiceMode(state.mode) });

  if (state.mode === "flashcard") {
    modeTitle.textContent = "Flashcards";
    primaryActionBtn.textContent = "Reveal Answer";
    primaryActionBtn.disabled = false;
    pronounceBtn.disabled = false;
    typingForm.classList.add("hidden");
    quizOptions.classList.add("hidden");
    return;
  }

  if (state.mode === "quiz") {
    const difficulty = getAdaptiveChoiceDifficulty();
    modeTitle.textContent = "Multiple Choice Quiz";
    primaryActionBtn.textContent = "Reveal Answer";
    primaryActionBtn.disabled = false;
    pronounceBtn.disabled = false;
    typingForm.classList.add("hidden");
    quizOptions.classList.remove("hidden");
    hintLine.textContent = `Difficulty: ${QUIZ_DIFFICULTY[difficulty]} options`;
    renderQuizOptions(prompt.answerField);
    return;
  }

  modeTitle.textContent = "Typing Challenge";
  primaryActionBtn.textContent = "Show Answer";
  primaryActionBtn.disabled = false;
  pronounceBtn.disabled = true;
  if (typingSubmitBtn) {
    typingSubmitBtn.textContent = "Check";
  }
  typingInput.placeholder =
    prompt.answerField === "tagalog" ? "Type your Tagalog answer..." : "Type your English answer...";
  quizOptions.classList.add("hidden");
  typingForm.classList.remove("hidden");
}

function renderQuizOptions(answerField) {
  const answer = state.currentItem[answerField];
  const decoys = getAdaptiveDecoys(answerField, answer);
  const options = [answer, ...decoys];
  shuffle(options);

  options.forEach((text) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = text;
    btn.addEventListener("click", () => handleQuizAnswer(text, answer, btn));
    quizOptions.append(btn);
  });
}

function isChoiceMode(mode) {
  return mode === "quiz";
}

function getAdaptiveChoiceDifficulty() {
  const stats = progress.choiceStats || {};
  const correct = Math.max(0, Number(stats.correct) || 0);
  const incorrect = Math.max(0, Number(stats.incorrect) || 0);
  const attempts = correct + incorrect;
  if (attempts < 8) {
    return "easy";
  }

  const accuracy = correct / attempts;
  if (accuracy >= 0.85 && attempts >= 20) {
    return "hard";
  }
  if (accuracy >= 0.68) {
    return "medium";
  }
  return "easy";
}

function normalizeDifficulty(value, fallback = "beginner") {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "beginner" || normalized === "intermediate") {
    return normalized;
  }
  return fallback;
}

function resolveItemDifficulty(item) {
  const explicitDifficulty = normalizeDifficulty(item?.difficulty || "", "");
  if (explicitDifficulty) {
    return explicitDifficulty;
  }
  const byCategory = normalizeDifficulty(CATEGORY_DIFFICULTY[item?.category] || "", "");
  if (byCategory) {
    return byCategory;
  }
  return "beginner";
}

function getItemDifficultyLabel(item) {
  const difficulty = resolveItemDifficulty(item);
  return ITEM_DIFFICULTY_LABELS[difficulty] || ITEM_DIFFICULTY_LABELS.beginner;
}

function getAdaptiveDecoys(answerField, answer) {
  const answerNorm = normalize(answer);
  const answerTokens = new Set(answerNorm.split(" ").filter(Boolean));
  const currentDifficulty = resolveItemDifficulty(state.currentItem);
  const decoyField = answerField === "tagalog" ? "tagalog" : "english";
  const allItems = getStudyItems();
  const uniqueByValue = new Map();

  allItems.forEach((item) => {
    const value = item[decoyField];
    if (typeof value !== "string") {
      return;
    }
    const normalizedValue = normalize(value);
    if (!normalizedValue || normalizedValue === answerNorm || uniqueByValue.has(normalizedValue)) {
      return;
    }
    uniqueByValue.set(normalizedValue, { value, item });
  });

  const decoyEntries = Array.from(uniqueByValue.values());
  const difficulty = getAdaptiveChoiceDifficulty();
  if (difficulty === "easy") {
    return sample(decoyEntries.map((entry) => entry.value), 3);
  }

  if (difficulty === "medium") {
    const sameCategoryAndDifficulty = decoyEntries
      .filter(
        (entry) =>
          entry.item.category === state.currentItem.category &&
          resolveItemDifficulty(entry.item) === currentDifficulty
      )
      .map((entry) => entry.value);
    const picked = sample(sameCategoryAndDifficulty, 3);
    if (picked.length < 3) {
      const sameDifficulty = decoyEntries
        .filter(
          (entry) => resolveItemDifficulty(entry.item) === currentDifficulty && !picked.includes(entry.value)
        )
        .map((entry) => entry.value);
      picked.push(...sample(sameDifficulty, 3 - picked.length));
    }
    if (picked.length < 3) {
      const sameCategory = decoyEntries
        .filter((entry) => entry.item.category === state.currentItem.category && !picked.includes(entry.value))
        .map((entry) => entry.value);
      picked.push(...sample(sameCategory, 3 - picked.length));
    }
    if (picked.length < 3) {
      const leftovers = decoyEntries
        .map((entry) => entry.value)
        .filter((value) => !picked.includes(value));
      picked.push(...sample(leftovers, 3 - picked.length));
    }
    return picked;
  }

  const scored = decoyEntries
    .map((entry) => {
      const valueNorm = normalize(entry.value);
      const tokens = valueNorm.split(" ").filter(Boolean);
      const overlap = tokens.filter((token) => answerTokens.has(token)).length;
      const lengthDelta = Math.abs(valueNorm.length - answerNorm.length);
      let score = overlap * 3 - lengthDelta * 0.08;
      if (entry.item.category === state.currentItem.category) {
        score += 1.4;
      }
      if (resolveItemDifficulty(entry.item) === currentDifficulty) {
        score += 1.15;
      }
      if ((valueNorm[0] || "") === (answerNorm[0] || "")) {
        score += 0.45;
      }
      return { ...entry, score };
    })
    .sort((a, b) => b.score - a.score);

  const hardPool = scored.slice(0, Math.min(8, scored.length)).map((entry) => entry.value);
  const hardPicked = sample(hardPool, 3);
  if (hardPicked.length < 3) {
    const leftovers = scored
      .map((entry) => entry.value)
      .filter((value) => !hardPicked.includes(value));
    hardPicked.push(...sample(leftovers, 3 - hardPicked.length));
  }
  return hardPicked;
}

function trackChoiceModeResult(isCorrect) {
  if (!isChoiceMode(state.mode)) {
    return;
  }
  if (!progress.choiceStats || typeof progress.choiceStats !== "object") {
    progress.choiceStats = { correct: 0, incorrect: 0 };
  }

  if (isCorrect) {
    progress.choiceStats.correct = (Number(progress.choiceStats.correct) || 0) + 1;
  } else {
    progress.choiceStats.incorrect = (Number(progress.choiceStats.incorrect) || 0) + 1;
  }
  persistProgress();
}

function getStudyItems() {
  return [...BASE_ITEMS, ...getCustomStudyItems()];
}

function getCustomStudyItems() {
  if (!Array.isArray(progress.customItems)) {
    return [];
  }
  return progress.customItems.map((item) => ({
    id: item.id,
    category: item.category || "Custom",
    english: item.english,
    tagalog: item.tagalog,
    pronunciation: item.pronunciation || "N/A",
    difficulty: resolveItemDifficulty(item),
    grammar:
      item.grammar ||
      CATEGORY_GRAMMAR[item.category] ||
      "Study word order and markers in this phrase.",
    unit: null,
    paths: [],
    source: "custom"
  }));
}

function getPathFilteredItems() {
  const items = getStudyItems();
  if (state.path === "survival") {
    return items.filter((item) => Array.isArray(item.paths) && item.paths.includes("survival"));
  }

  if (state.path === "custom") {
    return items.filter((item) => item.source === "custom");
  }

  if (state.path.startsWith("unit_")) {
    const unitNum = Number(state.path.replace("unit_", ""));
    if (unitNum > 0) {
      return items.filter((item) => item.unit === unitNum);
    }
  }

  return items;
}

function handlePrimaryAction() {
  if (state.journeyMode === LEARN_MODES.learn) {
    handleLearnPrimaryAction();
    return;
  }

  if (!state.currentItem) {
    return;
  }

  const prompt = getPromptConfig(state.currentItem);

  if (state.mode === "flashcard") {
    if (state.answerRevealed) {
      return;
    }
    state.answerRevealed = true;
    ensureSeenTracked();
    feedbackLine.textContent = `Answer: ${prompt.answerText}`;
    feedbackLine.className = "feedback-line";
    hideCoachingCard();
    showRatingBar();
    setPrimaryActionVisible(false);
    return;
  }

  if (isChoiceMode(state.mode)) {
    if (state.quizAnswered) {
      return;
    }
    state.quizAnswered = true;
    ensureSeenTracked();
    revealCorrectQuizOption(prompt.answerText);
    disableQuizOptions();
    hideCoachingCard();
    showRatingBar();
    setPrimaryActionVisible(false);
    return;
  }

  ensureSeenTracked();
  addXp(1);
  feedbackLine.textContent = `Answer: ${prompt.answerText}`;
  feedbackLine.className = "feedback-line";
  hideCoachingCard();
  showRatingBar();
  setPrimaryActionVisible(false);
}

function handleQuizAnswer(choice, answer, selectedButton) {
  if (state.quizAnswered || !state.currentItem) {
    return;
  }

  ensureSeenTracked();
  const prompt = getPromptConfig(state.currentItem);

  const isCorrect = normalize(choice) === normalize(answer);
  state.quizAnswered = true;

  if (selectedButton) {
    selectedButton.classList.add(isCorrect ? "quiz-option-correct" : "quiz-option-incorrect");
  }
  revealCorrectQuizOption(answer);
  disableQuizOptions();
  setPrimaryActionVisible(false);

  if (isCorrect) {
    removeFromReviewQueue(state.currentItem);
    addScore({ correct: 1, xp: 9, item: state.currentItem, itemCorrect: 1 });
    trackChoiceModeResult(true);
    feedbackLine.textContent = "";
    hideCoachingCard();
    showRatingBar();
    setPrimaryActionVisible(false);
    return;
  }

  addToReviewQueue(state.currentItem);
  addScore({ incorrect: 1, xp: -4, item: state.currentItem, itemIncorrect: 1 });
  trackChoiceModeResult(false);
  feedbackLine.textContent = "";
  showWrongAnswerCoaching(state.currentItem, prompt);
  showRatingBar();
  setPrimaryActionVisible(false);
}

function handleTypingAnswer() {
  if (state.journeyMode === LEARN_MODES.learn) {
    handleLearnTypingAnswer();
    return;
  }

  if (!state.currentItem) {
    return;
  }

  const prompt = getPromptConfig(state.currentItem);
  const typed = normalize(typingInput.value);
  if (!typed) {
    return;
  }

  ensureSeenTracked();

  const answer = normalize(prompt.answerText);
  const isCorrect = typed === answer;

  if (isCorrect) {
    removeFromReviewQueue(state.currentItem);
    addScore({ correct: 1, xp: 12, item: state.currentItem, itemCorrect: 1 });
    setTypingOutcome(true);
    feedbackLine.textContent = "";
    hideCoachingCard();
    showRatingBar();
    setPrimaryActionVisible(false);
    return;
  }

  addToReviewQueue(state.currentItem);
  addScore({ incorrect: 1, xp: -5, item: state.currentItem, itemIncorrect: 1 });
  setTypingOutcome(false);
  feedbackLine.textContent = "";
  showWrongAnswerCoaching(state.currentItem, prompt);
  showRatingBar();
  setPrimaryActionVisible(false);
}

function setPrimaryActionVisible(visible) {
  primaryActionBtn.hidden = !visible;
  syncActionBarVisibility();
}

function syncActionBarVisibility() {
  if (!actionsBar) {
    return;
  }
  const hideActions = primaryActionBtn.hidden && nextBtn.hidden;
  actionsBar.classList.toggle("hidden", hideActions);
}

function disableQuizOptions() {
  const buttons = quizOptions.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function revealCorrectQuizOption(answer) {
  const buttons = quizOptions.querySelectorAll("button");
  buttons.forEach((button) => {
    if (normalize(button.textContent || "") === normalize(answer)) {
      button.classList.add("quiz-option-correct");
    }
  });
}

function setTypingOutcome(isCorrect) {
  typingInput.classList.remove("typing-input-correct", "typing-input-incorrect");
  typingResultIcon.classList.remove("show", "typing-result-correct", "typing-result-incorrect");

  if (isCorrect) {
    typingInput.classList.add("typing-input-correct");
    typingResultIcon.textContent = "\u2713";
    typingResultIcon.classList.add("show", "typing-result-correct");
    return;
  }

  typingInput.classList.add("typing-input-incorrect");
  typingResultIcon.textContent = "\u2715";
  typingResultIcon.classList.add("show", "typing-result-incorrect");
}

function clearTypingOutcome() {
  typingInput.value = "";
  typingInput.classList.remove("typing-input-correct", "typing-input-incorrect");
  typingResultIcon.textContent = "";
  typingResultIcon.classList.remove("show", "typing-result-correct", "typing-result-incorrect");
}

function getFilteredItems() {
  const byPath = getPathFilteredItems();
  const byCategory = state.category === "all" ? byPath : byPath.filter((item) => item.category === state.category);

  if (state.focus === "due") {
    return byCategory.filter(isDueItem);
  }

  if (state.focus === "new") {
    const onlyNew = byCategory.filter((item) => getItemStats(item).seen === 0);
    return onlyNew.length ? onlyNew : byCategory;
  }

  if (state.focus === "review") {
    const weak = byCategory.filter(isWeakItem);
    if (weak.length) {
      return weak;
    }
    const seen = byCategory.filter((item) => getItemStats(item).seen > 0);
    return seen.length ? seen : byCategory;
  }

  return byCategory;
}

function getItemDueAt(item) {
  if (!item || !progress.reviewSchedule || typeof progress.reviewSchedule !== "object") {
    return null;
  }
  const dueAt = Number(progress.reviewSchedule[itemKey(item)]);
  return Number.isFinite(dueAt) && dueAt > 0 ? dueAt : null;
}

function isDueItem(item) {
  const dueAt = getItemDueAt(item);
  if (!dueAt) {
    return false;
  }
  return dueAt <= Date.now();
}

function isWeakItem(item) {
  const stats = getItemStats(item);
  if (stats.seen === 0) {
    return false;
  }

  const attempts = stats.correct + stats.incorrect;
  if (!attempts) {
    return true;
  }

  const accuracy = stats.correct / attempts;
  return stats.incorrect > stats.correct || accuracy < 0.65;
}

function getNextItem(items, previous) {
  if (items.length <= 1) {
    return items[0];
  }

  const previousKey = previous ? itemKey(previous) : null;
  const queuedPool = getQueuedItemsFromPool(items, previousKey);
  if (queuedPool.length) {
    return queuedPool[0];
  }

  const pool = previous
    ? items.filter((item) => item.tagalog !== previous.tagalog || item.english !== previous.english)
    : items;

  if (!pool.length) {
    return items[0];
  }

  if (state.focus === "smart") {
    const duePool = pool.filter(isDueItem);
    if (duePool.length) {
      const dueWeights = duePool.map(getSmartWeight);
      return weightedRandom(duePool, dueWeights);
    }
  }

  if (state.focus !== "smart") {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const weights = pool.map(getSmartWeight);
  return weightedRandom(pool, weights);
}

function getSmartWeight(item) {
  const stats = getItemStats(item);
  const attempts = stats.correct + stats.incorrect;
  let weight = 1;

  if (stats.seen === 0) {
    weight += 2.5;
  }

  if (attempts > 0) {
    const accuracy = stats.correct / attempts;
    weight += (1 - accuracy) * 2;
  }

  weight += stats.incorrect * 1.2;
  weight -= stats.correct * 0.3;

  return Math.max(0.35, weight);
}

function weightedRandom(items, weights) {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (!total) {
    return items[Math.floor(Math.random() * items.length)];
  }

  let threshold = Math.random() * total;
  for (let i = 0; i < items.length; i += 1) {
    threshold -= weights[i];
    if (threshold <= 0) {
      return items[i];
    }
  }

  return items[items.length - 1];
}

function getPromptConfig(item) {
  const learningTagalog = state.direction === "en_to_tl";
  const answerField = learningTagalog ? "tagalog" : "english";
  const questionField = learningTagalog ? "english" : "tagalog";
  const promptLabel = learningTagalog
    ? "Translate this English phrase into Tagalog:"
    : "Translate this Tagalog phrase into English:";

  return {
    questionField,
    answerField,
    questionText: item[questionField],
    answerText: item[answerField],
    hintText: `Pronunciation (Tagalog): ${item.pronunciation}`,
    promptLabel
  };
}

function buildMetaLabel(item, options = {}) {
  const includeCategory = options.includeCategory !== false;
  const stats = getItemStats(item);
  const attempts = stats.correct + stats.incorrect;
  const mastery = attempts ? `${Math.round((stats.correct / attempts) * 100)}%` : "N/A";
  const parts = [`Seen: ${stats.seen}`, `Mastery: ${mastery}`];
  if (includeCategory) {
    parts.unshift(`Category: ${item.category}`);
    parts.splice(1, 0, `Level: ${getItemDifficultyLabel(item)}`);
  }
  return parts.join(" | ");
}

function getItemStats(item) {
  const key = itemKey(item);
  if (!progress.itemStats[key]) {
    return { seen: 0, correct: 0, incorrect: 0 };
  }
  const entry = progress.itemStats[key];
  return {
    seen: Number(entry.seen) || 0,
    correct: Number(entry.correct) || 0,
    incorrect: Number(entry.incorrect) || 0
  };
}

function ensureItemStats(item) {
  const key = itemKey(item);
  if (!progress.itemStats[key]) {
    progress.itemStats[key] = { seen: 0, correct: 0, incorrect: 0 };
    return progress.itemStats[key];
  }

  const current = progress.itemStats[key];
  progress.itemStats[key] = {
    seen: Number(current.seen) || 0,
    correct: Number(current.correct) || 0,
    incorrect: Number(current.incorrect) || 0
  };
  return progress.itemStats[key];
}

function itemKey(item) {
  return `${item.tagalog}|||${item.english}`;
}

function getQueuedItemsFromPool(items, previousKey) {
  if (!Array.isArray(progress.reviewQueue) || !progress.reviewQueue.length) {
    return [];
  }

  const itemByKey = new Map(items.map((item) => [itemKey(item), item]));
  const queuedItems = progress.reviewQueue.map((key) => itemByKey.get(key)).filter(Boolean);
  if (!queuedItems.length) {
    return [];
  }

  if (previousKey) {
    const alternate = queuedItems.find((item) => itemKey(item) !== previousKey);
    if (alternate) {
      return [alternate];
    }
  }

  return [queuedItems[0]];
}

function addToReviewQueue(item) {
  if (!item) {
    return;
  }

  const key = itemKey(item);
  const baseQueue = Array.isArray(progress.reviewQueue) ? progress.reviewQueue : [];
  const deduped = baseQueue.filter((entry) => entry !== key);
  deduped.unshift(key);
  progress.reviewQueue = deduped.slice(0, MAX_REVIEW_QUEUE);
}

function removeFromReviewQueue(item) {
  if (!item || !Array.isArray(progress.reviewQueue) || !progress.reviewQueue.length) {
    return;
  }

  const key = itemKey(item);
  progress.reviewQueue = progress.reviewQueue.filter((entry) => entry !== key);
}

function getCoachingHint(item) {
  if (item?.grammar) {
    return item.grammar;
  }
  return PHRASE_GRAMMAR[item?.tagalog] || CATEGORY_GRAMMAR[item?.category] || "Watch word order and common particles in this phrase.";
}

function showWrongAnswerCoaching(item, prompt) {
  if (!coachingCard || !item || !prompt) {
    return;
  }
  coachingAnswer.textContent = prompt.answerText;
  coachingPronunciation.textContent = item.pronunciation || "No pronunciation available yet.";
  coachingHint.textContent = getCoachingHint(item);
  coachingCard.classList.remove("hidden");
}

function hideCoachingCard() {
  if (!coachingCard) {
    return;
  }
  coachingCard.classList.add("hidden");
  coachingAnswer.textContent = "";
  coachingPronunciation.textContent = "";
  coachingHint.textContent = "";
}

function showRatingBar() {
  if (!ratingBar) {
    return;
  }
  ratingButtons.forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-pressed", "false");
  });
  ratingBar.classList.remove("hidden");
}

function hideRatingBar() {
  if (!ratingBar) {
    return;
  }
  ratingBar.classList.add("hidden");
  ratingButtons.forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-pressed", "false");
  });
}

function scheduleCurrentItem(rating) {
  if (!state.currentItem || !rating || !REVIEW_DELAYS_MS[rating]) {
    return;
  }

  const key = itemKey(state.currentItem);
  const now = Date.now();
  const dueAt = now + REVIEW_DELAYS_MS[rating];
  if (!progress.reviewSchedule || typeof progress.reviewSchedule !== "object") {
    progress.reviewSchedule = {};
  }
  progress.reviewSchedule[key] = dueAt;

  if (rating === "again") {
    addToReviewQueue(state.currentItem);
  } else {
    removeFromReviewQueue(state.currentItem);
  }

  ratingButtons.forEach((button) => {
    const active = button.dataset.rating === rating;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  persistProgress();
  renderStats();
}

function createCustomItemId() {
  return `custom_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function getCustomSignature(english, tagalog) {
  return `${normalize(english)}|||${normalize(tagalog)}`;
}

function normalizeCustomCategory(value) {
  const trimmed = String(value || "").trim();
  return trimmed || "Custom";
}

function setCustomStatus(message, type = "info") {
  if (!customStatusLine) {
    return;
  }
  customStatusLine.textContent = message || "";
  customStatusLine.className = "custom-status-line";
  if (type === "success") {
    customStatusLine.classList.add("custom-status-success");
  } else if (type === "error") {
    customStatusLine.classList.add("custom-status-error");
  }
}

function findDuplicateStudyItem({ english, tagalog, ignoreCustomId = null }) {
  const signature = getCustomSignature(english, tagalog);
  return (
    getStudyItems().find((item) => {
      if (item.source === "custom" && item.id === ignoreCustomId) {
        return false;
      }
      return getCustomSignature(item.english, item.tagalog) === signature;
    }) || null
  );
}

function setCustomFormMode(editing) {
  const isEditing = Boolean(editing);
  state.editingCustomId = editing ? editing.id : null;
  customSubmitBtn.textContent = isEditing ? "Save Changes" : "Add To Pack";
  cancelCustomEditBtn.classList.toggle("hidden", !isEditing);
}

function cancelCustomEdit(input = false) {
  const silent = typeof input === "boolean" ? input : false;
  setCustomFormMode(null);
  customWordForm.reset();
  if (!silent) {
    setCustomStatus("Edit canceled.");
  }
}

function migrateProgressKey(oldKey, newKey) {
  if (!oldKey || !newKey || oldKey === newKey) {
    return;
  }

  if (progress.itemStats[oldKey] && !progress.itemStats[newKey]) {
    progress.itemStats[newKey] = progress.itemStats[oldKey];
  }
  delete progress.itemStats[oldKey];

  if (progress.reviewSchedule[oldKey] && !progress.reviewSchedule[newKey]) {
    progress.reviewSchedule[newKey] = progress.reviewSchedule[oldKey];
  }
  delete progress.reviewSchedule[oldKey];

  if (Array.isArray(progress.reviewQueue) && progress.reviewQueue.length) {
    progress.reviewQueue = normalizeReviewQueue(progress.reviewQueue.map((entry) => (entry === oldKey ? newKey : entry)));
  }
}

function removeCustomItemProgressData(item) {
  const key = itemKey(item);
  delete progress.itemStats[key];
  delete progress.reviewSchedule[key];
  if (Array.isArray(progress.reviewQueue) && progress.reviewQueue.length) {
    progress.reviewQueue = progress.reviewQueue.filter((entry) => entry !== key);
  }
}

function renderCustomItems() {
  customItemsList.innerHTML = "";
  const items = Array.isArray(progress.customItems) ? progress.customItems : [];
  if (!items.length) {
    const empty = document.createElement("li");
    empty.className = "custom-item-empty";
    empty.textContent = "No custom entries yet.";
    customItemsList.append(empty);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "custom-item";

    const textWrap = document.createElement("div");
    textWrap.className = "custom-item-text";

    const title = document.createElement("p");
    title.className = "custom-item-title";
    title.textContent = `${item.english} -> ${item.tagalog}`;

    const meta = document.createElement("p");
    meta.className = "custom-item-meta";
    const pronunciation = item.pronunciation ? ` | Pronunciation: ${item.pronunciation}` : "";
    meta.textContent = `Category: ${item.category} | Level: ${getItemDifficultyLabel(item)}${pronunciation}`;

    textWrap.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "custom-item-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "edit-custom-btn";
    editBtn.dataset.action = "edit";
    editBtn.dataset.id = item.id;
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "remove-custom-btn";
    deleteBtn.dataset.action = "delete";
    deleteBtn.dataset.id = item.id;
    deleteBtn.textContent = "Delete";

    actions.append(editBtn, deleteBtn);
    li.append(textWrap, actions);
    customItemsList.append(li);
  });
}

function handleCustomSubmit(event) {
  event.preventDefault();

  const draft = {
    english: customEnglish.value.trim(),
    tagalog: customTagalog.value.trim(),
    category: normalizeCustomCategory(customCategory.value),
    pronunciation: customPronunciation.value.trim(),
    grammar: customGrammar.value.trim()
  };

  if (!draft.english || !draft.tagalog) {
    setCustomStatus("English and Tagalog are required.", "error");
    return;
  }

  const duplicate = findDuplicateStudyItem({
    english: draft.english,
    tagalog: draft.tagalog,
    ignoreCustomId: state.editingCustomId
  });

  if (duplicate) {
    const sourceLabel = duplicate.source === "custom" ? "custom pack" : "built-in lessons";
    setCustomStatus(`Duplicate phrase found in ${sourceLabel}.`, "error");
    return;
  }

  if (!Array.isArray(progress.customItems)) {
    progress.customItems = [];
  }

  let statusMessage = "Custom phrase added.";
  if (state.editingCustomId) {
    const editIndex = progress.customItems.findIndex((item) => item.id === state.editingCustomId);
    if (editIndex >= 0) {
      const previous = progress.customItems[editIndex];
      const updated = {
        ...previous,
        ...draft,
        updatedAt: new Date().toISOString()
      };
      progress.customItems[editIndex] = updated;
      migrateProgressKey(itemKey(previous), itemKey(updated));
      statusMessage = "Custom phrase updated.";
    }
  } else {
    progress.customItems.unshift({
      id: createCustomItemId(),
      ...draft,
      difficulty: "beginner",
      createdAt: new Date().toISOString()
    });
  }

  cancelCustomEdit(true);
  persistProgress();
  populateCategories();
  renderCustomItems();
  renderStats();
  setNextQuestion();
  setCustomStatus(statusMessage, "success");
}

function handleCustomListClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const itemId = button.dataset.id;
  const items = Array.isArray(progress.customItems) ? progress.customItems : [];
  const item = items.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  if (button.dataset.action === "edit") {
    setCustomFormMode(item);
    customEnglish.value = item.english || "";
    customTagalog.value = item.tagalog || "";
    customCategory.value = item.category || "";
    customPronunciation.value = item.pronunciation || "";
    customGrammar.value = item.grammar || "";
    setCustomStatus("Editing custom phrase.");
    customEnglish.focus();
    return;
  }

  if (button.dataset.action === "delete") {
    const confirmed = window.confirm(`Delete "${item.english} -> ${item.tagalog}" from your custom pack?`);
    if (!confirmed) {
      return;
    }
    progress.customItems = items.filter((entry) => entry.id !== itemId);
    removeCustomItemProgressData(item);
    if (state.editingCustomId === itemId) {
      cancelCustomEdit(true);
    }
    persistProgress();
    populateCategories();
    renderCustomItems();
    renderStats();
    setNextQuestion();
    setCustomStatus("Custom phrase deleted.", "success");
  }
}

function exportCustomItems() {
  const items = Array.isArray(progress.customItems) ? progress.customItems : [];
  const payload = {
    version: CUSTOM_PACK_VERSION,
    exportedAt: new Date().toISOString(),
    items
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `johns_tagalog_custom_pack_${getISODate(new Date())}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setCustomStatus(`Exported ${items.length} custom phrase${items.length === 1 ? "" : "s"}.`, "success");
}

async function handleImportCustomFile(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const raw = await file.text();
    const parsed = JSON.parse(raw);
    const incomingItems = Array.isArray(parsed) ? parsed : parsed?.items;
    const normalizedItems = normalizeCustomItems(incomingItems);
    if (!normalizedItems.length) {
      setCustomStatus("No valid custom phrases found in that file.", "error");
      return;
    }

    if (!Array.isArray(progress.customItems)) {
      progress.customItems = [];
    }

    let added = 0;
    let skipped = 0;
    normalizedItems.forEach((item) => {
      const duplicate = findDuplicateStudyItem({ english: item.english, tagalog: item.tagalog });
      if (duplicate) {
        skipped += 1;
        return;
      }
      progress.customItems.push(item);
      added += 1;
    });

    if (added) {
      persistProgress();
      populateCategories();
      renderCustomItems();
      renderStats();
      setNextQuestion();
    }

    setCustomStatus(`Import complete: ${added} added, ${skipped} skipped.`, added ? "success" : "error");
  } catch {
    setCustomStatus("Import failed. Please use a valid JSON custom-pack file.", "error");
  } finally {
    importCustomInput.value = "";
  }
}

function ensureSeenTracked() {
  if (!state.currentItem || state.seenTracked) {
    return;
  }

  const stats = ensureItemStats(state.currentItem);
  stats.seen += 1;
  state.seenTracked = true;
  updateStreak();
  persistProgress();
  renderStats();
}

function sample(source, count) {
  const copy = [...source];
  shuffle(copy);
  return copy.slice(0, Math.min(count, copy.length));
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function createEmptySession() {
  return {
    startedAt: Date.now(),
    correct: 0,
    incorrect: 0,
    xpDelta: 0,
    categoryStats: {}
  };
}

function trackSessionScore({ correct = 0, incorrect = 0, xp = 0, item = null, itemCorrect = 0, itemIncorrect = 0 }) {
  session.correct += correct;
  session.incorrect += incorrect;
  session.xpDelta += xp;

  if (!item || (!itemCorrect && !itemIncorrect)) {
    return;
  }

  const category = item.category || "Custom";
  if (!session.categoryStats[category]) {
    session.categoryStats[category] = { correct: 0, incorrect: 0 };
  }
  session.categoryStats[category].correct += itemCorrect;
  session.categoryStats[category].incorrect += itemIncorrect;
}

function trackSessionXp(amount) {
  session.xpDelta += amount;
}

function addScore({ correct = 0, incorrect = 0, xp = 0, item = null, itemCorrect = 0, itemIncorrect = 0 }) {
  progress.correct += correct;
  progress.incorrect += incorrect;
  adjustXp(xp);
  trackDailyChallengeProgress({ correct, incorrect, xp });
  updateStreak();
  trackSessionScore({ correct, incorrect, xp, item, itemCorrect, itemIncorrect });

  if (item) {
    const stats = ensureItemStats(item);
    stats.correct += itemCorrect;
    stats.incorrect += itemIncorrect;
  }

  persistProgress();
  renderStats();
  if (state.currentItem) {
    metaLine.textContent = buildMetaLabel(state.currentItem, { includeCategory: !isChoiceMode(state.mode) });
  }
}

function addXp(amount) {
  adjustXp(amount);
  updateStreak();
  trackSessionXp(amount);
  persistProgress();
  renderStats();
}

function renderStats() {
  const attempts = progress.correct + progress.incorrect;
  const accuracy = attempts ? Math.round((progress.correct / attempts) * 100) : 0;
  const masteredCount = getStudyItems().filter(isMasteredItem).length;
  const level = getLevelFromXp(progress.xp);
  xpValue.textContent = progress.xp;
  streakValue.textContent = `${progress.streak} day${progress.streak === 1 ? "" : "s"}`;
  accuracyValue.textContent = `${accuracy}%`;
  masteredValue.textContent = String(masteredCount);
  levelBadge.textContent = `Level ${level}`;
  renderGoalProgress();
  syncGoalButtons();
  renderReviewQueueCount();
  renderSessionSummary();
  renderMotivation({ attempts, accuracy, masteredCount });
  updateLearnHeader();
}

function renderMotivation({ attempts, accuracy, masteredCount }) {
  renderDailyChallenge();
  renderMilestoneBadges({ attempts, accuracy, masteredCount });
}

function renderDailyChallenge() {
  if (!challengeTitle || !challengeFill || !challengeProgressText || !challengeStatusText) {
    return;
  }

  ensureDailyChallenge();
  const challenge = progress.dailyChallenge;
  const challengeType = DAILY_CHALLENGE_TYPES[challenge.type] || DAILY_CHALLENGE_TYPES.correct_answers;
  const target = Number(challenge.target) || challengeType.target;
  const rawProgress = Math.max(0, Number(challenge.progress) || 0);
  const completed = Boolean(challenge.completed) || rawProgress >= target;
  const current = Math.min(target, rawProgress);
  const pct = Math.min(100, Math.round((current / target) * 100));

  challengeTitle.textContent = challengeType.title;
  challengeFill.style.width = `${pct}%`;
  challengeProgressText.textContent = formatChallengeProgress(challenge.type, current, target);
  challengeStatusText.textContent = completed ? "Completed for today" : "In progress";
  challengeStatusText.classList.toggle("is-complete", completed);
}

function renderMilestoneBadges({ attempts, accuracy, masteredCount }) {
  if (!badgeList || !badgeCountText) {
    return;
  }

  const badges = [
    {
      title: "Rising Learner",
      description: "Reach 100 total XP.",
      unlocked: progress.xp >= 100
    },
    {
      title: "Consistency",
      description: "Build a 3-day streak.",
      unlocked: progress.streak >= 3
    },
    {
      title: "Sharp Recall",
      description: "Hold 80%+ accuracy over 20 attempts.",
      unlocked: attempts >= 20 && accuracy >= 80
    },
    {
      title: "Phrase Master",
      description: "Master 5 phrases.",
      unlocked: masteredCount >= 5
    }
  ];

  badgeList.innerHTML = "";
  badges.forEach((badge) => {
    const li = document.createElement("li");
    li.className = `badge-chip${badge.unlocked ? " is-unlocked" : ""}`;

    const title = document.createElement("p");
    title.className = "badge-chip-title";
    title.textContent = `${badge.unlocked ? "\u2713 " : ""}${badge.title}`;

    const desc = document.createElement("p");
    desc.className = "badge-chip-desc";
    desc.textContent = badge.description;

    li.append(title, desc);
    badgeList.append(li);
  });

  const unlockedCount = badges.filter((badge) => badge.unlocked).length;
  badgeCountText.textContent = `${unlockedCount}/${badges.length} unlocked`;
}

function formatChallengeProgress(challengeType, current, target) {
  if (challengeType === "xp_gain") {
    return `${current}/${target} XP`;
  }
  if (challengeType === "strong_accuracy") {
    return `${current}/${target} streak`;
  }
  return `${current}/${target} correct`;
}

function getGoalTarget() {
  const target = Number(progress.goalTarget);
  if (target === 10 || target === 20 || target === 30) {
    return target;
  }
  return DEFAULT_GOAL_TARGET;
}

function syncGoalButtons() {
  const target = getGoalTarget();
  goalButtons.forEach((button) => {
    const buttonGoal = Number(button.dataset.goal) || DEFAULT_GOAL_TARGET;
    const active = buttonGoal === target;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderGoalProgress() {
  const target = getGoalTarget();
  const correct = Math.max(0, Number(progress.correct) || 0);
  const completed = Math.min(correct, target);
  const remaining = Math.max(0, target - correct);
  const percent = Math.min(100, Math.round((completed / target) * 100));

  goalRing.style.setProperty("--goal-pct", `${percent}%`);
  goalProgressText.textContent = `${completed}/${target}`;
  goalStatusText.textContent = remaining ? `${remaining} to go` : "Goal complete";
}

function renderReviewQueueCount() {
  if (!reviewQueueCount) {
    return;
  }
  const count = Array.isArray(progress.reviewQueue) ? progress.reviewQueue.length : 0;
  reviewQueueCount.textContent = String(count);
}

function trackDailyChallengeProgress({ correct = 0, incorrect = 0, xp = 0 }) {
  ensureDailyChallenge();
  const challenge = progress.dailyChallenge;
  if (!challenge || challenge.completed) {
    return;
  }

  const target = Number(challenge.target) || 1;
  const current = Number(challenge.progress) || 0;
  let nextProgress = current;

  if (challenge.type === "correct_answers") {
    nextProgress += Math.max(0, correct);
  } else if (challenge.type === "xp_gain") {
    nextProgress += Math.max(0, xp);
  } else if (challenge.type === "strong_accuracy") {
    if (incorrect > 0) {
      nextProgress = 0;
    } else if (correct > 0) {
      nextProgress += correct;
    }
  }

  challenge.progress = Math.max(0, Math.min(target, nextProgress));
  challenge.completed = challenge.progress >= target;
}

function ensureDailyChallenge() {
  const today = getISODate(new Date());
  const challenge = progress.dailyChallenge;

  if (challenge && challenge.date === today && DAILY_CHALLENGE_TYPES[challenge.type]) {
    challenge.target = Number(challenge.target) || DAILY_CHALLENGE_TYPES[challenge.type].target;
    challenge.progress = Math.max(0, Number(challenge.progress) || 0);
    challenge.completed = Boolean(challenge.completed) || challenge.progress >= challenge.target;
    return;
  }

  const challengeType = pickDailyChallengeType(today);
  const challengeConfig = DAILY_CHALLENGE_TYPES[challengeType] || DAILY_CHALLENGE_TYPES.correct_answers;
  progress.dailyChallenge = {
    date: today,
    type: challengeType,
    target: challengeConfig.target,
    progress: 0,
    completed: false
  };
  persistProgress();
}

function pickDailyChallengeType(isoDate) {
  const challengeKeys = Object.keys(DAILY_CHALLENGE_TYPES);
  const numeric = Number(isoDate.replace(/-/g, ""));
  if (!challengeKeys.length || !Number.isFinite(numeric)) {
    return "correct_answers";
  }
  return challengeKeys[numeric % challengeKeys.length];
}

function getSessionWeakAreas(limit = 3) {
  const entries = Object.entries(session.categoryStats || {}).filter(([, stats]) => (stats.incorrect || 0) > 0);
  entries.sort((a, b) => {
    const incorrectDiff = (b[1].incorrect || 0) - (a[1].incorrect || 0);
    if (incorrectDiff !== 0) {
      return incorrectDiff;
    }
    return (a[1].correct || 0) - (b[1].correct || 0);
  });
  return entries.slice(0, limit).map(([category, stats]) => ({
    category,
    incorrect: stats.incorrect || 0,
    correct: stats.correct || 0
  }));
}

function getSessionRecommendation(attempts, accuracy, weakAreas) {
  const dueCount = getStudyItems().filter(isDueItem).length;
  if (dueCount >= 3) {
    return "Due Only - clear your scheduled review cards.";
  }
  if (attempts >= 4 && accuracy < 70) {
    return "Review Weak Items - tighten up recall before adding new cards.";
  }
  if (weakAreas.length > 0) {
    return `Review Weak Items - focus on ${weakAreas[0].category} next.`;
  }
  if (attempts >= 6 && accuracy >= 85) {
    return "New First - strong session, ready to add new material.";
  }
  return "Smart Mix - keep a balanced study rotation.";
}

function renderSessionSummary() {
  if (!sessionSummary) {
    return;
  }
  const attempts = session.correct + session.incorrect;
  const accuracy = attempts ? Math.round((session.correct / attempts) * 100) : 0;
  const weakAreas = getSessionWeakAreas();
  const durationMins = Math.floor((Date.now() - session.startedAt) / (60 * 1000));
  const xpDelta = session.xpDelta;
  const xpLabel = `${xpDelta >= 0 ? "+" : ""}${xpDelta}`;

  sessionDurationValue.textContent = durationMins > 0 ? `${durationMins} min` : "<1 min";
  sessionAttemptsValue.textContent = String(attempts);
  sessionAccuracyValue.textContent = `${accuracy}%`;
  sessionXpDeltaValue.textContent = xpLabel;
  sessionWeakAreasValue.textContent = weakAreas.length
    ? weakAreas.map((entry) => `${entry.category} (${entry.incorrect} wrong)`).join(", ")
    : "None this session.";
  sessionRecommendationValue.textContent = getSessionRecommendation(attempts, accuracy, weakAreas);
}

function endSession() {
  renderSessionSummary();
  feedbackLine.textContent = "Session summary updated.";
  feedbackLine.className = "feedback-line";
}

function startNewSession() {
  session = createEmptySession();
  renderSessionSummary();
  feedbackLine.textContent = "New session started.";
  feedbackLine.className = "feedback-line";
}

function updateStreak() {
  const today = getISODate(new Date());
  if (progress.lastStudyDate === today) {
    return;
  }

  if (!progress.lastStudyDate) {
    progress.streak = 1;
    progress.lastStudyDate = today;
    return;
  }

  const previous = new Date(`${progress.lastStudyDate}T00:00:00`);
  const expected = new Date(previous);
  expected.setDate(previous.getDate() + 1);

  if (getISODate(expected) === today) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }

  progress.lastStudyDate = today;
}

function getISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function normalizeReviewQueue(rawQueue) {
  if (!Array.isArray(rawQueue)) {
    return [];
  }

  const seen = new Set();
  const normalized = [];
  rawQueue.forEach((entry) => {
    if (typeof entry !== "string" || !entry || seen.has(entry)) {
      return;
    }
    seen.add(entry);
    normalized.push(entry);
  });
  return normalized.slice(0, MAX_REVIEW_QUEUE);
}

function normalizeReviewSchedule(rawSchedule) {
  if (!rawSchedule || typeof rawSchedule !== "object" || Array.isArray(rawSchedule)) {
    return {};
  }

  const normalized = {};
  Object.entries(rawSchedule).forEach(([key, value]) => {
    const dueAt = Number(value);
    if (typeof key !== "string" || !key || !Number.isFinite(dueAt) || dueAt <= 0) {
      return;
    }
    normalized[key] = dueAt;
  });
  return normalized;
}

function normalizeCustomItem(rawItem) {
  if (!rawItem || typeof rawItem !== "object") {
    return null;
  }

  const english = String(rawItem.english || "").trim();
  const tagalog = String(rawItem.tagalog || "").trim();
  if (!english || !tagalog) {
    return null;
  }

  return {
    id: typeof rawItem.id === "string" && rawItem.id ? rawItem.id : createCustomItemId(),
    english,
    tagalog,
    category: normalizeCustomCategory(rawItem.category),
    pronunciation: String(rawItem.pronunciation || "").trim(),
    grammar: String(rawItem.grammar || "").trim(),
    difficulty: resolveItemDifficulty(rawItem),
    createdAt: rawItem.createdAt || new Date().toISOString()
  };
}

function normalizeCustomItems(rawItems) {
  if (!Array.isArray(rawItems)) {
    return [];
  }

  const seenSignatures = new Set();
  const seenIds = new Set();
  const normalized = [];
  rawItems.forEach((rawItem) => {
    const item = normalizeCustomItem(rawItem);
    if (!item) {
      return;
    }

    const signature = getCustomSignature(item.english, item.tagalog);
    if (seenSignatures.has(signature)) {
      return;
    }
    seenSignatures.add(signature);

    while (seenIds.has(item.id)) {
      item.id = createCustomItemId();
    }
    seenIds.add(item.id);
    normalized.push(item);
  });

  return normalized;
}

function normalizeDailyChallenge(rawChallenge) {
  if (!rawChallenge || typeof rawChallenge !== "object") {
    return null;
  }

  const type = String(rawChallenge.type || "");
  if (!DAILY_CHALLENGE_TYPES[type]) {
    return null;
  }

  const target = Number(rawChallenge.target) || DAILY_CHALLENGE_TYPES[type].target;
  const progressValue = Math.max(0, Number(rawChallenge.progress) || 0);

  return {
    date: String(rawChallenge.date || ""),
    type,
    target,
    progress: Math.min(target, progressValue),
    completed: Boolean(rawChallenge.completed) || progressValue >= target
  };
}

function normalizeChoiceStats(rawChoiceStats) {
  if (!rawChoiceStats || typeof rawChoiceStats !== "object") {
    return { correct: 0, incorrect: 0 };
  }

  return {
    correct: Math.max(0, Number(rawChoiceStats.correct) || 0),
    incorrect: Math.max(0, Number(rawChoiceStats.incorrect) || 0)
  };
}

function loadProgress() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        const legacyRaw = localStorage.getItem(legacyKey);
        if (legacyRaw) {
          raw = legacyRaw;
          break;
        }
      }
    }
    if (!raw) {
      return defaultProgress();
    }

    const parsed = JSON.parse(raw);
    const itemStats = {};
    if (parsed.itemStats && typeof parsed.itemStats === "object") {
      Object.entries(parsed.itemStats).forEach(([key, value]) => {
        itemStats[key] = {
          seen: Number(value.seen) || 0,
          correct: Number(value.correct) || 0,
          incorrect: Number(value.incorrect) || 0
        };
      });
    }

    return {
      xp: Number(parsed.xp) || 0,
      correct: Number(parsed.correct) || 0,
      incorrect: Number(parsed.incorrect) || 0,
      streak: Number(parsed.streak) || 0,
      lastStudyDate: parsed.lastStudyDate || null,
      goalTarget: Number(parsed.goalTarget) || DEFAULT_GOAL_TARGET,
      reviewQueue: normalizeReviewQueue(parsed.reviewQueue),
      reviewSchedule: normalizeReviewSchedule(parsed.reviewSchedule),
      dailyChallenge: normalizeDailyChallenge(parsed.dailyChallenge),
      choiceStats: normalizeChoiceStats(parsed.choiceStats),
      customItems: normalizeCustomItems(parsed.customItems),
      itemStats,
      curriculum: normalizeCurriculumProgress(parsed.curriculum)
    };
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return {
    xp: 0,
    correct: 0,
    incorrect: 0,
    streak: 0,
    lastStudyDate: null,
    goalTarget: DEFAULT_GOAL_TARGET,
    reviewQueue: [],
    reviewSchedule: {},
    dailyChallenge: null,
    choiceStats: { correct: 0, incorrect: 0 },
    customItems: [],
    itemStats: {},
    curriculum: defaultCurriculumProgress()
  };
}

function persistProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function resetProgress() {
  const confirmed = window.confirm("Reset accuracy, streak, and item mastery? (XP will stay the same)");
  if (!confirmed) {
    return;
  }

  progress.correct = 0;
  progress.incorrect = 0;
  progress.streak = 0;
  progress.lastStudyDate = null;
  progress.reviewQueue = [];
  progress.reviewSchedule = {};
  progress.itemStats = {};
  progress.curriculum = defaultCurriculumProgress();
  state.journeyMode = LEARN_MODES.review;
  syncJourneyButtons();
  syncLearnUnitSelect();
  toggleJourneyLayout();
  session = createEmptySession();
  persistProgress();
  renderStats();
  setNextQuestion();
  feedbackLine.textContent = "Practice stats reset. XP kept.";
  feedbackLine.className = "feedback-line";
}

function speakCurrentTagalog() {
  if (state.journeyMode === LEARN_MODES.learn && state.learnPrompt) {
    const speechText = state.learnPrompt.speechText || state.learnPrompt.answerText || state.learnPrompt.questionText || "";
    const spoken = speakText(speechText, "tl-PH", { voiceType: "tagalog" });
    if (spoken) {
      feedbackLine.textContent = "Playing Learn Path pronunciation.";
      feedbackLine.className = "feedback-line";
    }
    return;
  }

  if (!state.currentItem) {
    return;
  }

  const prompt = getPromptConfig(state.currentItem);
  const speakingTagalog = prompt.questionField === "tagalog";
  let speechText = prompt.questionText;
  let speechLang = getSpeechLanguage(prompt.questionField);
  let voiceType = speakingTagalog ? "tagalog" : "english";

  // Browser Tagalog voices are often poor; prefer pronunciation guide with an English voice.
  if (speakingTagalog && state.currentItem.pronunciation) {
    speechText = formatPronunciationForSpeech(state.currentItem.pronunciation);
    speechLang = "en-US";
    voiceType = "english";
  }

  const spoken = speakText(speechText, speechLang, { voiceType });
  if (spoken) {
    feedbackLine.textContent =
      speakingTagalog && state.currentItem.pronunciation
        ? "Playing pronunciation guide."
        : "";
    feedbackLine.className = "feedback-line";
  }
}

function getSpeechLanguage(questionField) {
  return questionField === "english" ? "en-US" : "tl-PH";
}

function speakText(text, lang = "tl-PH", options = {}) {
  const showUnsupportedMessage = options.showUnsupportedMessage !== false;
  const voiceType = options.voiceType || "default";
  if (!("speechSynthesis" in window)) {
    if (showUnsupportedMessage) {
      feedbackLine.textContent = "Speech is not supported in this browser.";
      feedbackLine.className = "feedback-line feedback-bad";
    }
    return false;
  }

  const cleanText = typeof text === "string" ? text.trim() : "";
  if (!cleanText) {
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const preferredVoice = getPreferredSpeechVoice(voiceType);
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang || lang;
  } else {
    utterance.lang = lang;
  }
  utterance.rate = voiceType === "tagalog" ? 0.9 : 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return true;
}

function getPreferredSpeechVoice(voiceType) {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    return null;
  }

  if (voiceType === "tagalog") {
    return (
      voices.find((voice) => /^fil\b|^tl\b/i.test(voice.lang)) ||
      voices.find((voice) => /tagalog|filipino/i.test(voice.name)) ||
      null
    );
  }

  if (voiceType === "english") {
    return (
      voices.find((voice) => /^en-us\b/i.test(voice.lang)) ||
      voices.find((voice) => /^en\b/i.test(voice.lang)) ||
      null
    );
  }

  return null;
}

function formatPronunciationForSpeech(pronunciation) {
  return String(pronunciation || "")
    .replace(/[-_/]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function adjustXp(delta) {
  progress.xp = Math.max(0, progress.xp + delta);
}

function getLevelFromXp(xp) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

function isMasteredItem(item) {
  const stats = getItemStats(item);
  const attempts = stats.correct + stats.incorrect;
  if (attempts < 6) {
    return false;
  }
  return stats.correct / attempts >= 0.85;
}

function defaultCurriculumProgress() {
  return {
    version: CURRICULUM_VERSION,
    activeMode: LEARN_MODES.review,
    activeUnit: 1,
    recommendedUnit: 1,
    lessonStatusById: {},
    patternMasteryById: {},
    checkpointByUnit: {},
    learnQueueState: createDefaultLearnQueueState()
  };
}

function createDefaultLearnQueueState() {
  return {
    lessonId: null,
    phase: "introduce",
    introOrder: [],
    introCursor: 0,
    retryBuffer: [],
    builderDrills: [],
    builderCursor: 0,
    checkpointOrder: [],
    checkpointCursor: 0,
    checkpointCorrect: 0,
    checkpointIncorrect: 0,
    completed: false
  };
}

function normalizeCurriculumProgress(rawCurriculum) {
  const defaults = defaultCurriculumProgress();
  if (!rawCurriculum || typeof rawCurriculum !== "object") {
    return defaults;
  }

  const activeUnit = Number(rawCurriculum.activeUnit) || defaults.activeUnit;
  const recommendedUnit = Number(rawCurriculum.recommendedUnit) || defaults.recommendedUnit;
  const activeMode =
    rawCurriculum.activeMode === LEARN_MODES.learn || rawCurriculum.activeMode === LEARN_MODES.review
      ? rawCurriculum.activeMode
      : defaults.activeMode;

  const lessonStatusById = {};
  if (rawCurriculum.lessonStatusById && typeof rawCurriculum.lessonStatusById === "object") {
    Object.entries(rawCurriculum.lessonStatusById).forEach(([key, value]) => {
      if (typeof key !== "string") {
        return;
      }
      const normalizedStatus =
        value === "completed" || value === "in_progress" || value === "not_started" ? value : "not_started";
      lessonStatusById[key] = normalizedStatus;
    });
  }

  const patternMasteryById = {};
  if (rawCurriculum.patternMasteryById && typeof rawCurriculum.patternMasteryById === "object") {
    Object.entries(rawCurriculum.patternMasteryById).forEach(([key, value]) => {
      if (typeof key !== "string" || !value || typeof value !== "object") {
        return;
      }
      patternMasteryById[key] = {
        attempts: Math.max(0, Number(value.attempts) || 0),
        correct: Math.max(0, Number(value.correct) || 0),
        streak: Math.max(0, Number(value.streak) || 0),
        mastered: Boolean(value.mastered)
      };
    });
  }

  const checkpointByUnit = {};
  if (rawCurriculum.checkpointByUnit && typeof rawCurriculum.checkpointByUnit === "object") {
    Object.entries(rawCurriculum.checkpointByUnit).forEach(([key, value]) => {
      if (!value || typeof value !== "object") {
        return;
      }
      checkpointByUnit[key] = {
        attempts: Math.max(0, Number(value.attempts) || 0),
        bestScore: Math.max(0, Number(value.bestScore) || 0),
        lastScore: Math.max(0, Number(value.lastScore) || 0),
        passed: Boolean(value.passed),
        lastAttemptAt: value.lastAttemptAt || null
      };
    });
  }

  let learnQueueState = createDefaultLearnQueueState();
  if (rawCurriculum.learnQueueState && typeof rawCurriculum.learnQueueState === "object") {
    const rawQueue = rawCurriculum.learnQueueState;
    learnQueueState = {
      lessonId: typeof rawQueue.lessonId === "string" ? rawQueue.lessonId : null,
      phase:
        rawQueue.phase === "introduce" ||
        rawQueue.phase === "builder" ||
        rawQueue.phase === "checkpoint" ||
        rawQueue.phase === "completed"
          ? rawQueue.phase
          : "introduce",
      introOrder: Array.isArray(rawQueue.introOrder) ? rawQueue.introOrder.filter((entry) => typeof entry === "string") : [],
      introCursor: Math.max(0, Number(rawQueue.introCursor) || 0),
      retryBuffer: Array.isArray(rawQueue.retryBuffer) ? rawQueue.retryBuffer.filter(Boolean) : [],
      builderDrills: Array.isArray(rawQueue.builderDrills) ? rawQueue.builderDrills.filter(Boolean) : [],
      builderCursor: Math.max(0, Number(rawQueue.builderCursor) || 0),
      checkpointOrder: Array.isArray(rawQueue.checkpointOrder)
        ? rawQueue.checkpointOrder.filter(Boolean)
        : [],
      checkpointCursor: Math.max(0, Number(rawQueue.checkpointCursor) || 0),
      checkpointCorrect: Math.max(0, Number(rawQueue.checkpointCorrect) || 0),
      checkpointIncorrect: Math.max(0, Number(rawQueue.checkpointIncorrect) || 0),
      completed: Boolean(rawQueue.completed)
    };
  }

  return {
    version: Number(rawCurriculum.version) || CURRICULUM_VERSION,
    activeMode,
    activeUnit,
    recommendedUnit,
    lessonStatusById,
    patternMasteryById,
    checkpointByUnit,
    learnQueueState
  };
}

function ensureCurriculumState(skipPersist = false) {
  if (!progress.curriculum || typeof progress.curriculum !== "object") {
    progress.curriculum = defaultCurriculumProgress();
  }
  progress.curriculum = normalizeCurriculumProgress(progress.curriculum);

  let didChange = false;
  const lessonStatus = progress.curriculum.lessonStatusById;
  const allLessons = CURRICULUM_UNITS.flatMap((unit) => unit.lessons);
  allLessons.forEach((lesson) => {
    if (!lessonStatus[lesson.id]) {
      lessonStatus[lesson.id] = "not_started";
      didChange = true;
    }
  });

  const patternStats = progress.curriculum.patternMasteryById;
  const allPatterns = Array.from(new Set(CURRICULUM_UNITS.flatMap((unit) => unit.patterns)));
  allPatterns.forEach((patternId) => {
    if (!patternStats[patternId]) {
      patternStats[patternId] = { attempts: 0, correct: 0, streak: 0, mastered: false };
      didChange = true;
    }
  });

  const checkpointByUnit = progress.curriculum.checkpointByUnit;
  CURRICULUM_UNITS.forEach((unit) => {
    const key = String(unit.unit);
    if (!checkpointByUnit[key]) {
      checkpointByUnit[key] = {
        attempts: 0,
        bestScore: 0,
        lastScore: 0,
        passed: false,
        lastAttemptAt: null
      };
      didChange = true;
    }
  });

  const validUnits = new Set(CURRICULUM_UNITS.map((unit) => unit.unit));
  if (!validUnits.has(progress.curriculum.activeUnit)) {
    progress.curriculum.activeUnit = 1;
    didChange = true;
  }

  const recommendedUnit = getRecommendedUnit();
  if (progress.curriculum.recommendedUnit !== recommendedUnit) {
    progress.curriculum.recommendedUnit = recommendedUnit;
    didChange = true;
  }

  if (!progress.curriculum.learnQueueState || typeof progress.curriculum.learnQueueState !== "object") {
    progress.curriculum.learnQueueState = createDefaultLearnQueueState();
    didChange = true;
  }

  if (didChange && !skipPersist) {
    persistProgress();
  }
}

function syncJourneyButtons() {
  journeyButtons.forEach((button) => {
    const active = button.dataset.journey === state.journeyMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function toggleJourneyLayout() {
  const isLearn = state.journeyMode === LEARN_MODES.learn;
  if (reviewControls) {
    reviewControls.classList.toggle("hidden", isLearn);
  }
  if (reviewModeToggle) {
    reviewModeToggle.classList.toggle("hidden", isLearn);
  }
  if (reviewQueueBadge) {
    reviewQueueBadge.classList.toggle("hidden", isLearn);
  }
  if (learnHeader) {
    learnHeader.classList.toggle("hidden", !isLearn);
  }
  nextBtn.hidden = isLearn;
  nextBtn.disabled = isLearn;
  if (typingSubmitBtn) {
    typingSubmitBtn.textContent = isLearn ? "Check Sentence" : "Check";
  }
  if (!isLearn) {
    hideLearnCards();
    state.learnPrompt = null;
    state.learnAnswered = false;
  }
  syncActionBarVisibility();
  updateLearnHeader();
}

function hideLearnCards() {
  if (sentenceBuilderCard) {
    sentenceBuilderCard.classList.add("hidden");
  }
  if (checkpointCard) {
    checkpointCard.classList.add("hidden");
  }
}

function syncLearnUnitSelect() {
  if (!learnUnitSelect || !progress.curriculum) {
    return;
  }
  learnUnitSelect.value = String(progress.curriculum.activeUnit || 1);
}

function getCurriculumUnit(unitNumber) {
  return CURRICULUM_UNITS.find((unit) => unit.unit === unitNumber) || CURRICULUM_UNITS[0];
}

function getUnitLessons(unitNumber) {
  const unit = getCurriculumUnit(unitNumber);
  if (!unit) {
    return [];
  }
  return unit.lessons.map((lesson) => ({
    ...lesson,
    unit: unit.unit,
    unitTitle: unit.title,
    patterns: [...unit.patterns]
  }));
}

function getRecommendedUnit() {
  for (const unit of CURRICULUM_UNITS) {
    const unitLessons = getUnitLessons(unit.unit);
    const hasPending = unitLessons.some((lesson) => getLessonStatus(lesson.id) !== "completed");
    if (hasPending) {
      return unit.unit;
    }
  }
  return CURRICULUM_UNITS[CURRICULUM_UNITS.length - 1].unit;
}

function updateLearnHeader() {
  if (!learnHeader || state.journeyMode !== LEARN_MODES.learn) {
    return;
  }

  ensureCurriculumState();
  const unit = getCurriculumUnit(progress.curriculum.activeUnit);
  const unitLessons = getUnitLessons(unit.unit);
  const completedLessons = unitLessons.filter((lesson) => getLessonStatus(lesson.id) === "completed").length;
  const unitPct = unitLessons.length ? Math.round((completedLessons / unitLessons.length) * 100) : 0;
  const activeLesson = getActiveLearnLesson(unit.unit);
  const lessonIndex = activeLesson ? unitLessons.findIndex((lesson) => lesson.id === activeLesson.id) + 1 : unitLessons.length;

  learnUnitTitle.textContent = unit.title;
  learnProgressText.textContent = `Lesson ${Math.max(1, lessonIndex)} of ${unitLessons.length} • ${unitPct}%`;
  learnRecommendationText.textContent = `Recommended next: Unit ${progress.curriculum.recommendedUnit}`;
  syncLearnUnitSelect();
}

function setActiveLearnUnit(nextUnit) {
  const unit = getCurriculumUnit(nextUnit);
  progress.curriculum.activeUnit = unit.unit;
  progress.curriculum.learnQueueState = createDefaultLearnQueueState();
  progress.curriculum.learnQueueState.lessonId = null;
  persistProgress();
  syncLearnUnitSelect();
  updateLearnHeader();
  setNextQuestion();
}

function getLessonStatus(lessonId) {
  return progress.curriculum.lessonStatusById[lessonId] || "not_started";
}

function setLessonStatus(lessonId, status) {
  progress.curriculum.lessonStatusById[lessonId] = status;
}

function getLessonById(lessonId) {
  return CURRICULUM_UNITS.flatMap((unit) => getUnitLessons(unit.unit)).find((lesson) => lesson.id === lessonId) || null;
}

function getLessonItems(lesson) {
  if (!lesson) {
    return [];
  }
  const categories = Array.isArray(lesson.categories) ? lesson.categories : [];
  return BASE_ITEMS.filter((item) => categories.includes(item.category));
}

function getUnitItems(unitNumber) {
  const lessons = getUnitLessons(unitNumber);
  return lessons.flatMap((lesson) => getLessonItems(lesson));
}

function getActiveLearnLesson(unitNumber) {
  const lessons = getUnitLessons(unitNumber);
  return lessons.find((lesson) => getLessonStatus(lesson.id) !== "completed") || lessons[lessons.length - 1] || null;
}

function resetLearnQueueForLesson(lesson) {
  const lessonItems = getLessonItems(lesson);
  const queueState = createDefaultLearnQueueState();
  queueState.lessonId = lesson.id;
  queueState.phase = "introduce";
  queueState.introOrder = lessonItems.map((item) => itemKey(item));
  queueState.builderDrills = buildSentenceDrills(lesson, lessonItems);
  queueState.checkpointOrder = buildCheckpointOrder(lesson.unit);
  progress.curriculum.learnQueueState = queueState;
}

function tickRetryBufferAndShiftReady(queueState) {
  if (!Array.isArray(queueState.retryBuffer) || !queueState.retryBuffer.length) {
    return null;
  }
  queueState.retryBuffer.forEach((entry) => {
    entry.remainingGap = Math.max(0, Number(entry.remainingGap) - 1);
  });
  const readyIndex = queueState.retryBuffer.findIndex((entry) => Number(entry.remainingGap) <= 0);
  if (readyIndex === -1) {
    return null;
  }
  const [ready] = queueState.retryBuffer.splice(readyIndex, 1);
  return ready.prompt || null;
}

function buildSentenceDrills(lesson, lessonItems) {
  const drills = [];
  lesson.patterns.forEach((patternId, patternIdx) => {
    const sentencePool = getPatternSentencePool(patternId, lessonItems, getUnitItems(lesson.unit));
    if (!sentencePool.length) {
      return;
    }
    const picked = sentencePool[patternIdx % sentencePool.length];
    drills.push({ patternId, activity: "reorder", sentence: picked });
    drills.push({ patternId, activity: "cloze", sentence: picked });
    drills.push({ patternId, activity: "produce", sentence: picked });
  });
  return drills;
}

function getPatternSentencePool(patternId, lessonItems, unitItems) {
  const matches = [];
  const seen = new Set();
  [...lessonItems, ...unitItems].forEach((item) => {
    if (!doesItemMatchPattern(item, patternId)) {
      return;
    }
    const signature = itemKey(item);
    if (seen.has(signature)) {
      return;
    }
    seen.add(signature);
    matches.push({
      english: item.english,
      tagalog: item.tagalog,
      itemKey: signature
    });
  });

  const fallback = LEARN_PATTERN_FALLBACKS[patternId] || [];
  fallback.forEach((entry) => {
    const signature = `${entry.tagalog}|||${entry.english}`;
    if (seen.has(signature)) {
      return;
    }
    seen.add(signature);
    matches.push({
      english: entry.english,
      tagalog: entry.tagalog,
      itemKey: signature
    });
  });

  return matches;
}

function doesItemMatchPattern(item, patternId) {
  const english = String(item?.english || "");
  const tagalog = String(item?.tagalog || "");
  if (patternId === "ako_statement") {
    return /^i am\b|^i'm\b/i.test(english) || /\bako\b/i.test(tagalog);
  }
  if (patternId === "gusto_need") {
    return /^i want\b|^i need\b|^i like\b/i.test(english) || /^gusto\b|kailangan\b/i.test(tagalog);
  }
  if (patternId === "nasaan_question") {
    return /^where is\b/i.test(english) || /^nasaan\b/i.test(tagalog);
  }
  if (patternId === "pwede_request") {
    return /^can you\b|^can i\b/i.test(english) || /\bpwede\b/i.test(tagalog);
  }
  return false;
}

function buildCheckpointOrder(unitNumber) {
  const unitItems = getUnitItems(unitNumber);
  if (!unitItems.length) {
    return [];
  }
  const checkpointOrder = [];
  for (let i = 0; i < UNIT_CHECKPOINT_SIZE; i += 1) {
    const item = unitItems[i % unitItems.length];
    checkpointOrder.push({
      itemKey: itemKey(item),
      activity: i % 3 === 2 ? "produce" : "choice"
    });
  }
  return checkpointOrder;
}

function getItemByKey(key) {
  if (!key) {
    return null;
  }
  return getStudyItems().find((item) => itemKey(item) === key) || null;
}

function isLessonItemsMastered(lesson) {
  const lessonItems = getLessonItems(lesson);
  if (!lessonItems.length) {
    return true;
  }
  return lessonItems.every((item) => getItemStats(item).seen > 0);
}

function isLessonPatternsMastered(lesson) {
  return lesson.patterns.every((patternId) => {
    const stats = progress.curriculum.patternMasteryById[patternId];
    return Boolean(stats?.mastered);
  });
}

function recordPatternAttempt(patternId, isCorrect) {
  const entry = progress.curriculum.patternMasteryById[patternId];
  if (!entry) {
    return;
  }
  entry.attempts += 1;
  if (isCorrect) {
    entry.correct += 1;
    entry.streak += 1;
  } else {
    entry.streak = 0;
  }
  entry.mastered = entry.streak >= LEARN_PATTERN_STREAK_TARGET;
}

function setNextLearnQuestion() {
  ensureCurriculumState();
  hideCoachingCard();
  hideRatingBar();
  clearTypingOutcome();
  hideLearnCards();
  state.currentItem = null;
  state.seenTracked = false;
  state.quizAnswered = false;
  state.answerRevealed = false;

  const unit = getCurriculumUnit(progress.curriculum.activeUnit);
  const lesson = getActiveLearnLesson(unit.unit);
  if (!lesson) {
    state.learnPrompt = {
      kind: "complete",
      title: "Learn Path Complete",
      resultLine: "All guided units are complete.",
      summaryLine: "Use Review Practice to reinforce what you learned."
    };
    renderLearnPrompt(state.learnPrompt, null, progress.curriculum.learnQueueState);
    persistProgress();
    return;
  }

  let queueState = progress.curriculum.learnQueueState;
  if (!queueState.lessonId || queueState.lessonId !== lesson.id) {
    resetLearnQueueForLesson(lesson);
    queueState = progress.curriculum.learnQueueState;
  }

  if (getLessonStatus(lesson.id) === "not_started") {
    setLessonStatus(lesson.id, "in_progress");
  }

  let prompt = tickRetryBufferAndShiftReady(queueState);

  while (!prompt) {
    if (queueState.phase === "introduce") {
      if (queueState.introCursor < queueState.introOrder.length) {
        const nextKey = queueState.introOrder[queueState.introCursor];
        queueState.introCursor += 1;
        const item = getItemByKey(nextKey);
        if (item) {
          prompt = {
            kind: "intro",
            activity: "intro",
            lessonId: lesson.id,
            itemKey: nextKey,
            questionText: item.english,
            answerText: item.tagalog,
            hintText: "Try translating to Tagalog before revealing.",
            pronunciation: item.pronunciation || "",
            speechText: item.tagalog
          };
        }
      } else {
        queueState.phase = "builder";
      }
      continue;
    }

    if (queueState.phase === "builder") {
      if (isLessonItemsMastered(lesson) && isLessonPatternsMastered(lesson)) {
        queueState.phase = "checkpoint";
        queueState.checkpointCursor = 0;
        queueState.checkpointCorrect = 0;
        queueState.checkpointIncorrect = 0;
        continue;
      }
      if (!queueState.builderDrills.length) {
        queueState.builderDrills = buildSentenceDrills(lesson, getLessonItems(lesson));
      }
      if (!queueState.builderDrills.length) {
        queueState.phase = "checkpoint";
        continue;
      }

      const drill = queueState.builderDrills[queueState.builderCursor % queueState.builderDrills.length];
      queueState.builderCursor += 1;
      prompt = buildSentenceDrillPrompt(drill);
      continue;
    }

    if (queueState.phase === "checkpoint") {
      if (queueState.checkpointCursor >= queueState.checkpointOrder.length) {
        const result = finalizeLessonCheckpoint(lesson, queueState);
        queueState.phase = "completed";
        queueState.completed = true;
        prompt = {
          kind: "complete",
          lessonId: lesson.id,
          title: "Unit Checkpoint Complete",
          resultLine: result.resultLine,
          summaryLine: result.summaryLine
        };
        continue;
      }

      const entry = queueState.checkpointOrder[queueState.checkpointCursor];
      queueState.checkpointCursor += 1;
      prompt = buildCheckpointPrompt(entry, queueState.checkpointCursor, queueState.checkpointOrder.length);
      continue;
    }

    if (queueState.phase === "completed") {
      prompt = {
        kind: "complete",
        lessonId: lesson.id,
        title: "Checkpoint Ready",
        resultLine: "Continue to the next lesson when ready.",
        summaryLine: "You can also jump to any unit using the picker above."
      };
      break;
    }

    prompt = null;
    break;
  }

  state.learnPrompt = prompt;
  state.learnAnswered = false;
  feedbackLine.textContent = "";
  feedbackLine.className = "feedback-line";
  renderLearnPrompt(prompt, lesson, queueState);
  persistProgress();
}

function buildSentenceDrillPrompt(drill) {
  const sentence = drill.sentence;
  const words = sentence.tagalog.split(" ").filter(Boolean);
  if (drill.activity === "reorder") {
    const wrongOne = words.length > 2 ? [words[1], words[0], ...words.slice(2)].join(" ") : [...words].reverse().join(" ");
    const wrongTwo = [...words.slice(1), words[0]].join(" ");
    return {
      kind: "builder",
      activity: "reorder",
      patternId: drill.patternId,
      itemKey: sentence.itemKey,
      questionText: sentence.english,
      hintText: "Choose the correctly ordered Tagalog sentence.",
      answerText: sentence.tagalog,
      options: [sentence.tagalog, wrongOne, wrongTwo],
      speechText: sentence.tagalog
    };
  }

  if (drill.activity === "cloze") {
    const blankIndex = words.length > 2 ? 1 : 0;
    const answerToken = words[blankIndex];
    const questionTokens = [...words];
    questionTokens[blankIndex] = "___";
    const distractors = ["ako", "ang", "na", "ko", "ba", "ito"]
      .filter((token) => normalize(token) !== normalize(answerToken))
      .slice(0, 2);
    return {
      kind: "builder",
      activity: "cloze",
      patternId: drill.patternId,
      itemKey: sentence.itemKey,
      questionText: `${questionTokens.join(" ")} (${sentence.english})`,
      hintText: "Pick the missing word.",
      answerText: answerToken,
      options: [answerToken, ...distractors],
      speechText: sentence.tagalog
    };
  }

  return {
    kind: "builder",
    activity: "produce",
    patternId: drill.patternId,
    itemKey: sentence.itemKey,
    questionText: sentence.english,
    hintText: "Type the full Tagalog sentence.",
    answerText: sentence.tagalog,
    speechText: sentence.tagalog
  };
}

function buildCheckpointPrompt(entry, current, total) {
  const item = getItemByKey(entry.itemKey);
  if (!item) {
    return {
      kind: "checkpoint",
      activity: "choice",
      questionText: "Checkpoint item unavailable.",
      hintText: "",
      answerText: "",
      options: []
    };
  }

  if (entry.activity === "produce") {
    return {
      kind: "checkpoint",
      activity: "produce",
      itemKey: entry.itemKey,
      questionText: item.english,
      hintText: `Checkpoint ${current}/${total}: type full Tagalog sentence.`,
      answerText: item.tagalog,
      speechText: item.tagalog
    };
  }

  const decoys = getStudyItems()
    .filter((candidate) => normalize(candidate.tagalog) !== normalize(item.tagalog))
    .map((candidate) => candidate.tagalog);
  const options = [item.tagalog, ...decoys.slice(0, 3)].slice(0, 4);
  return {
    kind: "checkpoint",
    activity: "choice",
    itemKey: entry.itemKey,
    questionText: item.english,
    hintText: `Checkpoint ${current}/${total}: choose the best translation.`,
    answerText: item.tagalog,
    options,
    speechText: item.tagalog
  };
}

function renderLearnPrompt(prompt, lesson, queueState) {
  setPrimaryActionVisible(false);
  quizOptions.innerHTML = "";
  quizOptions.classList.add("hidden");
  typingForm.classList.add("hidden");
  if (typingSubmitBtn) {
    typingSubmitBtn.textContent = "Check Sentence";
  }
  primaryActionBtn.disabled = false;
  hideLearnCards();
  clearSentenceStructureSupport();
  modeTitle.textContent = "Learn Path";

  if (!prompt) {
    questionLine.textContent = "No guided prompt available.";
    promptLine.textContent = "";
    hintLine.textContent = "";
    metaLine.textContent = "";
    pronounceBtn.disabled = true;
    return;
  }

  pronounceBtn.disabled = !prompt.speechText;
  promptLine.textContent = `Learn Path • ${lesson ? lesson.title : "Guided Practice"}`;
  questionLine.textContent = prompt.questionText || "";
  hintLine.textContent = prompt.hintText || "";
  metaLine.textContent = lesson
    ? `Unit ${lesson.unit} • ${lesson.unitTitle}`
    : "Guided curriculum";

  if (prompt.kind === "intro") {
    modeTitle.textContent = "Learn Path • Introduce";
    setPrimaryActionVisible(true);
    if (state.answerRevealed) {
      primaryActionBtn.textContent = "Mark Step Complete";
      feedbackLine.textContent = `Answer: ${prompt.answerText}`;
      feedbackLine.className = "feedback-line";
      hintLine.textContent = prompt.pronunciation ? `Pronunciation: ${prompt.pronunciation}` : prompt.hintText || "";
    } else {
      primaryActionBtn.textContent = "Reveal Translation";
      hintLine.textContent = prompt.hintText || "Try translating to Tagalog before revealing.";
    }
    return;
  }

  if (prompt.kind === "complete") {
    modeTitle.textContent = "Learn Path • Checkpoint Result";
    if (checkpointCard) {
      checkpointCard.classList.remove("hidden");
      checkpointResultLine.textContent = prompt.resultLine || "Checkpoint complete.";
      checkpointSummaryLine.textContent = prompt.summaryLine || "";
    }
    promptLine.textContent = prompt.title || "Learn Step Complete";
    setPrimaryActionVisible(true);
    primaryActionBtn.textContent = "Start Next Lesson";
    return;
  }

  const shouldShowStructureCard = prompt.activity !== "produce";
  if (sentenceBuilderCard && shouldShowStructureCard) {
    sentenceBuilderCard.classList.remove("hidden");
    if (sentenceBuilderLabel) {
      sentenceBuilderLabel.textContent =
        prompt.kind === "checkpoint"
          ? "Checkpoint Guide"
          : prompt.activity === "cloze"
            ? "Word Breakdown"
            : "Sentence Builder";
    }
    sentenceBuilderType.textContent =
      prompt.kind === "checkpoint"
        ? "Unit Checkpoint"
        : prompt.activity === "reorder"
          ? "Reorder"
          : prompt.activity === "cloze"
            ? "Fill in the blank (Cloze)"
            : "Prompt-to-Produce";
    const patternLabel = prompt.patternId ? LEARN_PATTERN_LABELS[prompt.patternId] || "Pattern" : "Checkpoint";
    sentenceBuilderInstruction.textContent = `${patternLabel} • ${prompt.hintText || ""}`.trim();
    renderSentenceStructureSupport(prompt);
  }

  if (prompt.activity === "produce") {
    modeTitle.textContent = prompt.kind === "checkpoint" ? "Learn Path • Checkpoint" : "Learn Path • Sentence Builder";
    typingForm.classList.remove("hidden");
    typingInput.placeholder = "Type full Tagalog sentence...";
    typingInput.value = "";
    feedbackLine.textContent = "Type your sentence, then tap Check Sentence.";
    feedbackLine.className = "feedback-line";
    return;
  }

  modeTitle.textContent = prompt.kind === "checkpoint" ? "Learn Path • Checkpoint" : "Learn Path • Sentence Builder";
  feedbackLine.textContent = "Choose an answer to continue.";
  feedbackLine.className = "feedback-line";
  renderLearnOptions(prompt);
  quizOptions.classList.remove("hidden");
}

function clearSentenceStructureSupport() {
  if (sentencePatternGuide) {
    sentencePatternGuide.textContent = "";
  }
  if (sentenceWordMap) {
    sentenceWordMap.innerHTML = "";
  }
}

function renderSentenceStructureSupport(prompt) {
  if (sentencePatternGuide) {
    sentencePatternGuide.textContent = buildSentencePatternGuide(prompt);
  }

  if (!sentenceWordMap) {
    return;
  }

  sentenceWordMap.innerHTML = "";
  const tokens = extractSentenceTokens(prompt?.answerText || "");
  if (!tokens.length) {
    return;
  }

  tokens.forEach((token) => {
    const chip = document.createElement("span");
    chip.className = "word-map-chip";

    const tokenSpan = document.createElement("span");
    tokenSpan.className = "word-map-token";
    tokenSpan.textContent = token;

    const glossSpan = document.createElement("span");
    glossSpan.textContent = getTokenGloss(token);

    chip.append(tokenSpan, glossSpan);
    sentenceWordMap.append(chip);
  });
}

function buildSentencePatternGuide(prompt) {
  if (!prompt) {
    return "";
  }
  if (prompt.patternId === "ako_statement") {
    return "Structure: [description/action] + ako (I/me).";
  }
  if (prompt.patternId === "gusto_need") {
    return "Structure: gusto/kailangan + ko + object.";
  }
  if (prompt.patternId === "nasaan_question") {
    return "Structure: nasaan (where is) + ang + thing/place?";
  }
  if (prompt.patternId === "pwede_request") {
    return "Structure: pwede + (ba) + request phrase?";
  }
  if (prompt.activity === "cloze") {
    return "Cloze means fill in the missing word to complete the sentence pattern.";
  }
  if (prompt.kind === "checkpoint") {
    return "Checkpoint: use word order and marker words (ang/ng/sa/ba) to choose or build the sentence.";
  }
  return "Use the English cue to map each Tagalog word and sentence order.";
}

function extractSentenceTokens(sentenceText) {
  return String(sentenceText || "")
    .split(/\s+/)
    .map((token) => token.replace(/[.,!?;:()"']/g, "").trim())
    .filter(Boolean);
}

function getTokenGloss(token) {
  const normalized = normalize(token).replace(/\s+/g, "");
  return TAGALOG_WORD_GLOSSARY[normalized] || "context word";
}

function renderLearnOptions(prompt) {
  quizOptions.innerHTML = "";
  const options = [...(prompt.options || [])];
  if (!options.some((entry) => normalize(entry) === normalize(prompt.answerText))) {
    options.unshift(prompt.answerText);
  }
  const deduped = [];
  const seen = new Set();
  options.forEach((entry) => {
    const key = normalize(entry);
    if (!key || seen.has(key)) {
      return;
    }
    seen.add(key);
    deduped.push(entry);
  });
  deduped.forEach((text) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = text;
    btn.addEventListener("click", () => handleLearnChoiceAnswer(text, btn));
    quizOptions.append(btn);
  });
}

function handleLearnPrimaryAction() {
  const prompt = state.learnPrompt;
  if (!prompt) {
    return;
  }

  if (prompt.kind === "intro") {
    if (!state.answerRevealed) {
      state.answerRevealed = true;
      renderLearnPrompt(prompt, getLessonById(prompt.lessonId), progress.curriculum.learnQueueState);
      return;
    }

    const item = getItemByKey(prompt.itemKey);
    if (item) {
      const stats = ensureItemStats(item);
      stats.seen += 1;
      updateStreak();
      addXp(1);
      persistProgress();
    }
    setNextQuestion();
    return;
  }

  if (prompt.kind === "complete") {
    moveToNextLearnStep(getLessonById(prompt.lessonId));
    return;
  }

  if (state.learnAnswered) {
    setNextQuestion();
  }
}

function handleLearnChoiceAnswer(choice, selectedButton) {
  if (state.learnAnswered || !state.learnPrompt) {
    return;
  }

  const prompt = state.learnPrompt;
  const isCorrect = normalize(choice) === normalize(prompt.answerText);
  state.learnAnswered = true;

  if (selectedButton) {
    selectedButton.classList.add(isCorrect ? "quiz-option-correct" : "quiz-option-incorrect");
  }
  const buttons = quizOptions.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
    if (normalize(button.textContent || "") === normalize(prompt.answerText)) {
      button.classList.add("quiz-option-correct");
    }
  });

  applyLearnPromptResult(isCorrect);
}

function handleLearnTypingAnswer() {
  if (state.learnAnswered || !state.learnPrompt || state.learnPrompt.activity !== "produce") {
    return;
  }

  const typed = normalize(typingInput.value);
  if (!typed) {
    return;
  }
  const isCorrect = typed === normalize(state.learnPrompt.answerText);
  state.learnAnswered = true;
  setTypingOutcome(isCorrect);
  applyLearnPromptResult(isCorrect);
}

function applyLearnPromptResult(isCorrect) {
  const prompt = state.learnPrompt;
  if (!prompt) {
    return;
  }

  const item = getItemByKey(prompt.itemKey);
  if (item) {
    addScore({
      correct: isCorrect ? 1 : 0,
      incorrect: isCorrect ? 0 : 1,
      xp: isCorrect ? 8 : -3,
      item,
      itemCorrect: isCorrect ? 1 : 0,
      itemIncorrect: isCorrect ? 0 : 1
    });
  }

  if (prompt.patternId) {
    recordPatternAttempt(prompt.patternId, isCorrect);
  }

  if (prompt.kind === "checkpoint") {
    const queueState = progress.curriculum.learnQueueState;
    if (isCorrect) {
      queueState.checkpointCorrect += 1;
    } else {
      queueState.checkpointIncorrect += 1;
    }
  }

  if (!isCorrect && (prompt.kind === "builder" || prompt.kind === "checkpoint")) {
    progress.curriculum.learnQueueState.retryBuffer.push({
      remainingGap: LEARN_RETRY_GAP,
      prompt: { ...prompt }
    });
  }

  feedbackLine.textContent = isCorrect ? "Nice work. Keep the sentence pattern." : `Correct: ${prompt.answerText}`;
  feedbackLine.className = `feedback-line ${isCorrect ? "feedback-good" : "feedback-bad"}`;
  setPrimaryActionVisible(true);
  primaryActionBtn.textContent = "Continue Lesson";
  persistProgress();
  renderStats();
}

function finalizeLessonCheckpoint(lesson, queueState) {
  const attempts = queueState.checkpointCorrect + queueState.checkpointIncorrect;
  const score = attempts ? Math.round((queueState.checkpointCorrect / attempts) * 100) : 0;
  const passed = score >= UNIT_CHECKPOINT_PASS_PCT;
  const checkpointEntry = progress.curriculum.checkpointByUnit[String(lesson.unit)];
  checkpointEntry.attempts += 1;
  checkpointEntry.lastScore = score;
  checkpointEntry.bestScore = Math.max(checkpointEntry.bestScore, score);
  checkpointEntry.passed = checkpointEntry.passed || passed;
  checkpointEntry.lastAttemptAt = new Date().toISOString();

  const lessonPass = passed && isLessonItemsMastered(lesson) && isLessonPatternsMastered(lesson);
  setLessonStatus(lesson.id, lessonPass ? "completed" : "in_progress");
  progress.curriculum.recommendedUnit = getRecommendedUnit();

  return {
    resultLine: lessonPass
      ? `Passed: ${score}% (${queueState.checkpointCorrect}/${attempts})`
      : `Not yet: ${score}% (${queueState.checkpointCorrect}/${attempts})`,
    summaryLine: lessonPass
      ? "Checkpoint passed. Sentence patterns are now marked complete for this lesson."
      : "Review sentence patterns and retry the checkpoint to reach 80%."
  };
}

function moveToNextLearnStep(currentLesson) {
  ensureCurriculumState();
  if (!currentLesson) {
    setNextQuestion();
    return;
  }

  const currentUnitLessons = getUnitLessons(currentLesson.unit);
  const nextLesson = currentUnitLessons.find((lesson) => getLessonStatus(lesson.id) !== "completed");
  if (nextLesson) {
    resetLearnQueueForLesson(nextLesson);
    persistProgress();
    setNextQuestion();
    return;
  }

  const nextUnit = getRecommendedUnit();
  progress.curriculum.activeUnit = nextUnit;
  progress.curriculum.learnQueueState = createDefaultLearnQueueState();
  syncLearnUnitSelect();
  persistProgress();
  setNextQuestion();
}
