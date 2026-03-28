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

const STORAGE_KEY = "johns_tagalog_coach_progress_v1";
const LEGACY_STORAGE_KEYS = [
  "aral_tagalog_progress_v1",
  "tagalog_sprint_progress_v2",
  "tagalog_sprint_progress_v1"
];
const XP_PER_LEVEL = 100;
const DEFAULT_GOAL_TARGET = 10;
const MAX_REVIEW_QUEUE = 25;

const CATEGORY_UNITS = {
  Greetings: 1,
  Basics: 1,
  Numbers: 1,
  Questions: 2,
  Everyday: 3,
  Food: 3
};

const CATEGORY_GRAMMAR = {
  Greetings: "Use polite particles like 'po' to sound respectful.",
  Basics: "Tagalog order can be flexible, but markers carry meaning.",
  Questions: "Question words like 'ano' and 'saan' often come early.",
  Everyday: "Notice markers like 'ang', 'ng', and 'sa' in common phrases.",
  Numbers: "Numbers are often paired with context words when counting things.",
  Food: "'Gusto ko' means 'I want' and is very common in food phrases."
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

const BASE_ITEMS = LESSON_ITEMS.map((item) => ({
  ...item,
  unit: CATEGORY_UNITS[item.category] || 1,
  source: "base",
  grammar: PHRASE_GRAMMAR[item.tagalog] || CATEGORY_GRAMMAR[item.category] || "Study word order and markers in this phrase."
}));

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
const quizOptions = document.getElementById("quizOptions");
const typingForm = document.getElementById("typingForm");
const typingInput = document.getElementById("typingInput");
const typingResultIcon = document.getElementById("typingResultIcon");
const primaryActionBtn = document.getElementById("primaryActionBtn");
const nextBtn = document.getElementById("nextBtn");
const xpValue = document.getElementById("xpValue");
const streakValue = document.getElementById("streakValue");
const accuracyValue = document.getElementById("accuracyValue");
const masteredValue = document.getElementById("masteredValue");
const goalRing = document.getElementById("goalRing");
const goalProgressText = document.getElementById("goalProgressText");
const goalStatusText = document.getElementById("goalStatusText");
const reviewQueueCount = document.getElementById("reviewQueueCount");
const customWordForm = document.getElementById("customWordForm");
const customEnglish = document.getElementById("customEnglish");
const customTagalog = document.getElementById("customTagalog");
const customCategory = document.getElementById("customCategory");
const customPronunciation = document.getElementById("customPronunciation");
const customGrammar = document.getElementById("customGrammar");
const customItemsList = document.getElementById("customItemsList");
const modeButtons = Array.from(document.querySelectorAll(".mode-btn"));

const progress = loadProgress();

const state = {
  mode: "flashcard",
  category: "all",
  focus: "smart",
  direction: "tl_to_en",
  path: "all",
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
  syncGoalButtons();
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

  primaryActionBtn.addEventListener("click", handlePrimaryAction);
  nextBtn.addEventListener("click", setNextQuestion);
  resetProgressBtn.addEventListener("click", resetProgress);
  pronounceBtn.addEventListener("click", speakCurrentTagalog);

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
    clearTypingOutcome();
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
  pronounceBtn.disabled = false;

  renderModeLayout();
}

function renderModeLayout() {
  if (!state.currentItem) {
    return;
  }

  const prompt = getPromptConfig(state.currentItem);
  clearTypingOutcome();
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
    btn.addEventListener("click", () => handleQuizAnswer(text, answer, btn));
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
    revealCorrectQuizOption(prompt.answerText);
    disableQuizOptions();
    return;
  }

  ensureSeenTracked();
  addXp(1);
  feedbackLine.textContent = `Answer: ${prompt.answerText}`;
  feedbackLine.className = "feedback-line";
}

function handleQuizAnswer(choice, answer, selectedButton) {
  if (state.quizAnswered || !state.currentItem) {
    return;
  }

  ensureSeenTracked();

  const isCorrect = normalize(choice) === normalize(answer);
  state.quizAnswered = true;

  if (selectedButton) {
    selectedButton.classList.add(isCorrect ? "quiz-option-correct" : "quiz-option-incorrect");
  }
  revealCorrectQuizOption(answer);
  disableQuizOptions();

  if (isCorrect) {
    removeFromReviewQueue(state.currentItem);
    addScore({ correct: 1, xp: 9, item: state.currentItem, itemCorrect: 1 });
    feedbackLine.textContent = "";
    return;
  }

  addToReviewQueue(state.currentItem);
  addScore({ incorrect: 1, xp: -4, item: state.currentItem, itemIncorrect: 1 });
  feedbackLine.textContent = "";
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
    removeFromReviewQueue(state.currentItem);
    addScore({ correct: 1, xp: 12, item: state.currentItem, itemCorrect: 1 });
    setTypingOutcome(true);
    feedbackLine.textContent = "";
    return;
  }

  addToReviewQueue(state.currentItem);
  addScore({ incorrect: 1, xp: -5, item: state.currentItem, itemIncorrect: 1 });
  setTypingOutcome(false);
  feedbackLine.textContent = "";
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
  adjustXp(xp);
  updateStreak();

  if (item) {
    const stats = ensureItemStats(item);
    stats.correct += itemCorrect;
    stats.incorrect += itemIncorrect;
  }

  persistProgress();
  renderStats();
  if (state.currentItem) {
    metaLine.textContent = buildMetaLabel(state.currentItem);
  }
}

function addXp(amount) {
  adjustXp(amount);
  updateStreak();
  persistProgress();
  renderStats();
}

function renderStats() {
  const attempts = progress.correct + progress.incorrect;
  const accuracy = attempts ? Math.round((progress.correct / attempts) * 100) : 0;
  const masteredCount = LESSON_ITEMS.filter(isMasteredItem).length;
  const level = getLevelFromXp(progress.xp);
  xpValue.textContent = progress.xp;
  streakValue.textContent = `${progress.streak} day${progress.streak === 1 ? "" : "s"}`;
  accuracyValue.textContent = `${accuracy}%`;
  masteredValue.textContent = String(masteredCount);
  levelBadge.textContent = `Level ${level}`;
  renderGoalProgress();
  syncGoalButtons();
  renderReviewQueueCount();
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
    goalTarget: DEFAULT_GOAL_TARGET,
    reviewQueue: [],
    itemStats: {}
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
  progress.itemStats = {};
  persistProgress();
  renderStats();
  setNextQuestion();
  feedbackLine.textContent = "Practice stats reset. XP kept.";
  feedbackLine.className = "feedback-line";
}

function speakCurrentTagalog() {
  if (!state.currentItem) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    feedbackLine.textContent = "Speech is not supported in this browser.";
    feedbackLine.className = "feedback-line feedback-bad";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(state.currentItem.tagalog);
  utterance.lang = "tl-PH";
  utterance.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
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
