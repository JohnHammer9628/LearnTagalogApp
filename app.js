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

const STORAGE_KEY = "tagalog_sprint_progress_v1";

const categorySelect = document.getElementById("categorySelect");
const modeTitle = document.getElementById("modeTitle");
const promptLine = document.getElementById("promptLine");
const questionLine = document.getElementById("questionLine");
const hintLine = document.getElementById("hintLine");
const feedbackLine = document.getElementById("feedbackLine");
const quizOptions = document.getElementById("quizOptions");
const typingForm = document.getElementById("typingForm");
const typingInput = document.getElementById("typingInput");
const primaryActionBtn = document.getElementById("primaryActionBtn");
const nextBtn = document.getElementById("nextBtn");
const xpValue = document.getElementById("xpValue");
const streakValue = document.getElementById("streakValue");
const accuracyValue = document.getElementById("accuracyValue");
const modeButtons = Array.from(document.querySelectorAll(".mode-btn"));

const progress = loadProgress();

const state = {
  mode: "flashcard",
  category: "all",
  currentItem: null,
  answerRevealed: false,
  quizAnswered: false
};

init();

function init() {
  populateCategories();
  bindEvents();
  setNextQuestion();
  renderStats();
}

function populateCategories() {
  const categories = Array.from(new Set(LESSON_ITEMS.map((item) => item.category))).sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });
}

function bindEvents() {
  categorySelect.addEventListener("change", (event) => {
    state.category = event.target.value;
    setNextQuestion();
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

  primaryActionBtn.addEventListener("click", handlePrimaryAction);
  nextBtn.addEventListener("click", setNextQuestion);

  typingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleTypingAnswer();
  });
}

function setNextQuestion() {
  const pool = getFilteredItems();
  if (!pool.length) {
    questionLine.textContent = "No items in this category yet.";
    promptLine.textContent = "";
    hintLine.textContent = "";
    feedbackLine.textContent = "";
    quizOptions.innerHTML = "";
    return;
  }

  state.currentItem = getRandomFrom(pool, state.currentItem);
  state.answerRevealed = false;
  state.quizAnswered = false;
  feedbackLine.textContent = "";
  feedbackLine.className = "feedback-line";

  renderModeLayout();
}

function renderModeLayout() {
  if (!state.currentItem) {
    return;
  }

  const { english, tagalog, pronunciation } = state.currentItem;
  typingInput.value = "";
  quizOptions.innerHTML = "";

  if (state.mode === "flashcard") {
    modeTitle.textContent = "Flashcards";
    promptLine.textContent = "Translate this Tagalog to English:";
    questionLine.textContent = tagalog;
    hintLine.textContent = `Pronunciation: ${pronunciation}`;
    primaryActionBtn.textContent = "Reveal Answer";
    primaryActionBtn.disabled = false;
    typingForm.classList.add("hidden");
    quizOptions.classList.add("hidden");
    return;
  }

  if (state.mode === "quiz") {
    modeTitle.textContent = "Multiple Choice Quiz";
    promptLine.textContent = "Choose the best Tagalog translation:";
    questionLine.textContent = english;
    hintLine.textContent = "Tip: say each option out loud before choosing.";
    primaryActionBtn.textContent = "Reveal Answer";
    primaryActionBtn.disabled = false;
    typingForm.classList.add("hidden");
    quizOptions.classList.remove("hidden");
    renderQuizOptions();
    return;
  }

  modeTitle.textContent = "Typing Challenge";
  promptLine.textContent = "Type the Tagalog translation:";
  questionLine.textContent = english;
  hintLine.textContent = `Pronunciation hint: ${pronunciation}`;
  primaryActionBtn.textContent = "Show Answer";
  primaryActionBtn.disabled = false;
  quizOptions.classList.add("hidden");
  typingForm.classList.remove("hidden");
}

function renderQuizOptions() {
  const answer = state.currentItem.tagalog;
  const pool = LESSON_ITEMS.filter((item) => item.tagalog !== answer).map((item) => item.tagalog);
  const options = [answer, ...sample(pool, 3)];
  shuffle(options);

  options.forEach((text) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = text;
    btn.addEventListener("click", () => handleQuizAnswer(text));
    quizOptions.append(btn);
  });
}

function handlePrimaryAction() {
  if (!state.currentItem) {
    return;
  }

  if (state.mode === "flashcard") {
    if (state.answerRevealed) {
      return;
    }
    state.answerRevealed = true;
    addXp(3);
    feedbackLine.textContent = `Answer: ${state.currentItem.english}`;
    feedbackLine.className = "feedback-line";
    return;
  }

  if (state.mode === "quiz") {
    if (state.quizAnswered) {
      return;
    }
    state.quizAnswered = true;
    feedbackLine.textContent = `Answer: ${state.currentItem.tagalog}`;
    feedbackLine.className = "feedback-line";
    disableQuizOptions();
    return;
  }

  feedbackLine.textContent = `Answer: ${state.currentItem.tagalog}`;
  feedbackLine.className = "feedback-line";
}

function handleQuizAnswer(choice) {
  if (state.quizAnswered || !state.currentItem) {
    return;
  }

  const isCorrect = normalize(choice) === normalize(state.currentItem.tagalog);
  state.quizAnswered = true;
  disableQuizOptions();

  if (isCorrect) {
    addScore({ correct: 1, xp: 9 });
    feedbackLine.textContent = "Correct!";
    feedbackLine.className = "feedback-line feedback-good";
    return;
  }

  addScore({ incorrect: 1, xp: 1 });
  feedbackLine.textContent = `Not quite. Correct answer: ${state.currentItem.tagalog}`;
  feedbackLine.className = "feedback-line feedback-bad";
}

function handleTypingAnswer() {
  if (!state.currentItem) {
    return;
  }

  const typed = normalize(typingInput.value);
  if (!typed) {
    return;
  }

  const answer = normalize(state.currentItem.tagalog);
  const isCorrect = typed === answer;

  if (isCorrect) {
    addScore({ correct: 1, xp: 12 });
    feedbackLine.textContent = "Great job. That is correct.";
    feedbackLine.className = "feedback-line feedback-good";
    return;
  }

  addScore({ incorrect: 1, xp: 1 });
  feedbackLine.textContent = `Close. Correct answer: ${state.currentItem.tagalog}`;
  feedbackLine.className = "feedback-line feedback-bad";
}

function disableQuizOptions() {
  const buttons = quizOptions.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function getFilteredItems() {
  if (state.category === "all") {
    return LESSON_ITEMS;
  }
  return LESSON_ITEMS.filter((item) => item.category === state.category);
}

function getRandomFrom(items, previous) {
  if (items.length <= 1) {
    return items[0];
  }

  let next = items[Math.floor(Math.random() * items.length)];
  while (previous && next.tagalog === previous.tagalog && next.english === previous.english) {
    next = items[Math.floor(Math.random() * items.length)];
  }
  return next;
}

function sample(source, count) {
  const copy = [...source];
  shuffle(copy);
  return copy.slice(0, count);
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
    .trim()
    .replace(/[?.!,]/g, "")
    .replace(/\s+/g, " ");
}

function addScore({ correct = 0, incorrect = 0, xp = 0 }) {
  progress.correct += correct;
  progress.incorrect += incorrect;
  progress.xp += xp;
  updateStreak();
  persistProgress();
  renderStats();
}

function addXp(amount) {
  progress.xp += amount;
  updateStreak();
  persistProgress();
  renderStats();
}

function renderStats() {
  const attempts = progress.correct + progress.incorrect;
  const accuracy = attempts ? Math.round((progress.correct / attempts) * 100) : 0;
  xpValue.textContent = progress.xp;
  streakValue.textContent = `${progress.streak} day${progress.streak === 1 ? "" : "s"}`;
  accuracyValue.textContent = `${accuracy}%`;
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

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { xp: 0, correct: 0, incorrect: 0, streak: 0, lastStudyDate: null };
    }
    const parsed = JSON.parse(raw);
    return {
      xp: Number(parsed.xp) || 0,
      correct: Number(parsed.correct) || 0,
      incorrect: Number(parsed.incorrect) || 0,
      streak: Number(parsed.streak) || 0,
      lastStudyDate: parsed.lastStudyDate || null
    };
  } catch {
    return { xp: 0, correct: 0, incorrect: 0, streak: 0, lastStudyDate: null };
  }
}

function persistProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
