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

const STORAGE_KEY = "aral_tagalog_progress_v1";
const LEGACY_STORAGE_KEYS = ["tagalog_sprint_progress_v2", "tagalog_sprint_progress_v1"];

const categorySelect = document.getElementById("categorySelect");
const focusSelect = document.getElementById("focusSelect");
const directionSelect = document.getElementById("directionSelect");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const modeTitle = document.getElementById("modeTitle");
const promptLine = document.getElementById("promptLine");
const questionLine = document.getElementById("questionLine");
const hintLine = document.getElementById("hintLine");
const metaLine = document.getElementById("metaLine");
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
  focus: "smart",
  direction: "tl_to_en",
  currentItem: null,
  answerRevealed: false,
  quizAnswered: false,
  seenTracked: false
};

init();

function init() {
  populateCategories();
  bindEvents();
  focusSelect.value = state.focus;
  directionSelect.value = state.direction;
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

  focusSelect.addEventListener("change", (event) => {
    state.focus = event.target.value;
    setNextQuestion();
  });

  directionSelect.addEventListener("change", (event) => {
    state.direction = event.target.value;
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
  resetProgressBtn.addEventListener("click", resetProgress);

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
      event.preventDefault();
      setNextQuestion();
    }
  });
}

function setNextQuestion() {
  const pool = getFilteredItems();
  if (!pool.length) {
    questionLine.textContent = "No items in this category yet.";
    promptLine.textContent = "";
    hintLine.textContent = "";
    metaLine.textContent = "";
    feedbackLine.textContent = "";
    quizOptions.innerHTML = "";
    return;
  }

  state.currentItem = getNextItem(pool, state.currentItem);
  state.answerRevealed = false;
  state.quizAnswered = false;
  state.seenTracked = false;
  feedbackLine.textContent = "";
  feedbackLine.className = "feedback-line";

  renderModeLayout();
}

function renderModeLayout() {
  if (!state.currentItem) {
    return;
  }

  const prompt = getPromptConfig(state.currentItem);
  typingInput.value = "";
  quizOptions.innerHTML = "";

  promptLine.textContent = prompt.promptLabel;
  questionLine.textContent = prompt.questionText;
  hintLine.textContent = prompt.hintText;
  metaLine.textContent = buildMetaLabel(state.currentItem);

  if (state.mode === "flashcard") {
    modeTitle.textContent = "Flashcards";
    primaryActionBtn.textContent = "Reveal Answer";
    primaryActionBtn.disabled = false;
    typingForm.classList.add("hidden");
    quizOptions.classList.add("hidden");
    return;
  }

  if (state.mode === "quiz") {
    modeTitle.textContent = "Multiple Choice Quiz";
    primaryActionBtn.textContent = "Reveal Answer";
    primaryActionBtn.disabled = false;
    typingForm.classList.add("hidden");
    quizOptions.classList.remove("hidden");
    renderQuizOptions(prompt.answerField);
    return;
  }

  modeTitle.textContent = "Typing Challenge";
  primaryActionBtn.textContent = "Show Answer";
  primaryActionBtn.disabled = false;
  typingInput.placeholder =
    prompt.answerField === "tagalog" ? "Type your Tagalog answer..." : "Type your English answer...";
  quizOptions.classList.add("hidden");
  typingForm.classList.remove("hidden");
}

function renderQuizOptions(answerField) {
  const answer = state.currentItem[answerField];
  const decoyField = answerField === "tagalog" ? "tagalog" : "english";
  const uniquePool = Array.from(
    new Set(
      LESSON_ITEMS.filter((item) => item[decoyField] !== answer).map((item) => item[decoyField])
    )
  );
  const options = [answer, ...sample(uniquePool, 3)];
  shuffle(options);

  options.forEach((text) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = text;
    btn.addEventListener("click", () => handleQuizAnswer(text, answer));
    quizOptions.append(btn);
  });
}

function handlePrimaryAction() {
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
    addXp(3);
    feedbackLine.textContent = `Answer: ${prompt.answerText}`;
    feedbackLine.className = "feedback-line";
    return;
  }

  if (state.mode === "quiz") {
    if (state.quizAnswered) {
      return;
    }
    state.quizAnswered = true;
    ensureSeenTracked();
    addXp(1);
    feedbackLine.textContent = `Answer: ${prompt.answerText}`;
    feedbackLine.className = "feedback-line";
    disableQuizOptions();
    return;
  }

  ensureSeenTracked();
  addXp(1);
  feedbackLine.textContent = `Answer: ${prompt.answerText}`;
  feedbackLine.className = "feedback-line";
}

function handleQuizAnswer(choice, answer) {
  if (state.quizAnswered || !state.currentItem) {
    return;
  }

  ensureSeenTracked();

  const isCorrect = normalize(choice) === normalize(answer);
  state.quizAnswered = true;
  disableQuizOptions();

  if (isCorrect) {
    addScore({ correct: 1, xp: 9, item: state.currentItem, itemCorrect: 1 });
    feedbackLine.textContent = "Correct!";
    feedbackLine.className = "feedback-line feedback-good";
    return;
  }

  addScore({ incorrect: 1, xp: 1, item: state.currentItem, itemIncorrect: 1 });
  feedbackLine.textContent = `Not quite. Correct answer: ${answer}`;
  feedbackLine.className = "feedback-line feedback-bad";
}

function handleTypingAnswer() {
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
    addScore({ correct: 1, xp: 12, item: state.currentItem, itemCorrect: 1 });
    feedbackLine.textContent = "Great job. That is correct.";
    feedbackLine.className = "feedback-line feedback-good";
    return;
  }

  addScore({ incorrect: 1, xp: 1, item: state.currentItem, itemIncorrect: 1 });
  feedbackLine.textContent = `Close. Correct answer: ${prompt.answerText}`;
  feedbackLine.className = "feedback-line feedback-bad";
}

function disableQuizOptions() {
  const buttons = quizOptions.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function getFilteredItems() {
  const byCategory =
    state.category === "all" ? LESSON_ITEMS : LESSON_ITEMS.filter((item) => item.category === state.category);

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

  const pool = previous
    ? items.filter((item) => item.tagalog !== previous.tagalog || item.english !== previous.english)
    : items;

  if (!pool.length) {
    return items[0];
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

function buildMetaLabel(item) {
  const stats = getItemStats(item);
  const attempts = stats.correct + stats.incorrect;
  const mastery = attempts ? `${Math.round((stats.correct / attempts) * 100)}%` : "N/A";
  return `Category: ${item.category} | Seen: ${stats.seen} | Mastery: ${mastery}`;
}

function getItemStats(item) {
  const key = itemKey(item);
  if (!progress.itemStats[key]) {
    return { seen: 0, correct: 0, incorrect: 0 };
  }
  return progress.itemStats[key];
}

function ensureItemStats(item) {
  const key = itemKey(item);
  if (!progress.itemStats[key]) {
    progress.itemStats[key] = { seen: 0, correct: 0, incorrect: 0 };
  }
  return progress.itemStats[key];
}

function itemKey(item) {
  return `${item.tagalog}|||${item.english}`;
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

function addScore({ correct = 0, incorrect = 0, xp = 0, item = null, itemCorrect = 0, itemIncorrect = 0 }) {
  progress.correct += correct;
  progress.incorrect += incorrect;
  progress.xp += xp;
  updateStreak();

  if (item) {
    const stats = ensureItemStats(item);
    stats.correct += itemCorrect;
    stats.incorrect += itemIncorrect;
  }

  persistProgress();
  renderStats();
  renderModeLayout();
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
      itemStats
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
    itemStats: {}
  };
}

function persistProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function resetProgress() {
  const confirmed = window.confirm("Reset all XP, accuracy, streak, and item mastery?");
  if (!confirmed) {
    return;
  }

  progress.xp = 0;
  progress.correct = 0;
  progress.incorrect = 0;
  progress.streak = 0;
  progress.lastStudyDate = null;
  progress.itemStats = {};
  persistProgress();
  renderStats();
  setNextQuestion();
  feedbackLine.textContent = "Progress reset complete.";
  feedbackLine.className = "feedback-line";
}
