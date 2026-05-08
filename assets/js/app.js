(function () {
  "use strict";

  var DATA = window.STUDY_DATA || { resources: [], studySections: [], questions: [], scenarios: [], flashcards: [], clinicDrills: [], skillDrills: [] };
  var PROFILE_KEY = "therapyStudyProfiles:v1";
  var ACTIVE_KEY = "therapyStudyActiveProfile:v1";
  var SCENARIO_KEY = "therapyStudyScenarioAttempts:v1";
  var THEME_KEY = "therapyStudyTheme:v1";
  var ACCENT_KEY = "therapyStudyAccent:v1";
  var SYNC_CODE_KEY = "therapyStudySyncCode:v1";
  var FEEDBACK_ADMIN_TOKEN_KEY = "therapyStudyFeedbackAdminToken:v1";
  var REVIEW_INTERVAL_DAYS = [0, 1, 3, 7];
  var VIEW_CHROME = {
    dashboard: { kicker: "TODAY", title: "Study Dashboard" },
    guide: { kicker: "REFERENCE", title: "Study Guide" },
    quiz: { kicker: "RECALL", title: "Questionnaire" },
    scenarios: { kicker: "APPLICATION", title: "Real Life Examples" },
    skill: { kicker: "CLINICAL SKILLS", title: "Skill Lab" },
    feedback: { kicker: "REQUESTS", title: "Bug Reports / Feature Requests" },
    progress: { kicker: "REVIEW", title: "Progress" }
  };

  var state = {
    profiles: [],
    activeProfileId: "",
    quiz: null,
    scenario: null,
    skill: null,
    clinic: null,
    lastScenarioId: "",
    syncMessage: "",
    syncStatus: "idle",
    syncTimer: null,
    applyingSync: false,
    feedbackItems: [],
    feedbackMessage: "",
    feedbackStatus: "idle",
    feedbackAdminToken: "",
    feedbackAdminMessage: "",
    feedbackAdminStatus: "idle",
    feedbackAdminLoading: false
  };

  var els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheElements();
    setupNavigation();
    loadProfiles();
    loadTheme();
    loadFeedbackAdmin();
    populateFilters();
    bindForms();
    renderAll();
  }

  function cacheElements() {
    els.profileForm = document.getElementById("profileForm");
    els.profileSelect = document.getElementById("profileSelect");
    els.profileName = document.getElementById("profileName");
    els.themeSelect = document.getElementById("themeSelect");
    els.accentSelect = document.getElementById("accentSelect");
    els.viewCrumbKicker = document.getElementById("viewCrumbKicker");
    els.viewCrumbTitle = document.getElementById("viewCrumbTitle");
    els.syncPanelShell = document.getElementById("syncPanelShell");
    els.syncPanel = document.getElementById("syncPanel");
    els.dashboardStats = document.getElementById("dashboardStats");
    els.todayStudyPath = document.getElementById("todayStudyPath");
    els.focusQueue = document.getElementById("focusQueue");
    els.sourceList = document.getElementById("sourceList");
    els.guideFilter = document.getElementById("guideFilter");
    els.guideSearch = document.getElementById("guideSearch");
    els.guideResults = document.getElementById("guideResults");
    els.guideGrid = document.getElementById("guideGrid");
    els.quizSetup = document.getElementById("quizSetup");
    els.quizMode = document.getElementById("quizMode");
    els.quizDifficulty = document.getElementById("quizDifficulty");
    els.quizTopic = document.getElementById("quizTopic");
    els.quizCount = document.getElementById("quizCount");
    els.quizStatus = document.getElementById("quizStatus");
    els.quizCard = document.getElementById("quizCard");
    els.scenarioSetup = document.getElementById("scenarioSetup");
    els.scenarioDifficulty = document.getElementById("scenarioDifficulty");
    els.scenarioMode = document.getElementById("scenarioMode");
    els.scenarioCase = document.getElementById("scenarioCase");
    els.scenarioLibrary = document.getElementById("scenarioLibrary");
    els.scenarioCard = document.getElementById("scenarioCard");
    els.scenarioScore = document.getElementById("scenarioScore");
    els.skillSetup = document.getElementById("skillSetup");
    els.skillMode = document.getElementById("skillMode");
    els.skillDifficulty = document.getElementById("skillDifficulty");
    els.skillCase = document.getElementById("skillCase");
    els.skillCard = document.getElementById("skillCard");
    els.skillScore = document.getElementById("skillScore");
    els.quizHistory = document.getElementById("quizHistory");
    els.scenarioHistory = document.getElementById("scenarioHistory");
    els.skillHistory = document.getElementById("skillHistory");
    els.masteryDashboard = document.getElementById("masteryDashboard");
    els.resetProfile = document.getElementById("resetProfile");
    els.practiceWeakNow = document.getElementById("practiceWeakNow");
    els.feedbackForm = document.getElementById("feedbackForm");
    els.feedbackType = document.getElementById("feedbackType");
    els.feedbackTitleInput = document.getElementById("feedbackTitleInput");
    els.feedbackDetails = document.getElementById("feedbackDetails");
    els.feedbackContact = document.getElementById("feedbackContact");
    els.feedbackPage = document.getElementById("feedbackPage");
    els.feedbackStatus = document.getElementById("feedbackStatus");
    els.feedbackAdminLogin = document.getElementById("feedbackAdminLogin");
    els.feedbackAdminPassword = document.getElementById("feedbackAdminPassword");
    els.feedbackAdminStatus = document.getElementById("feedbackAdminStatus");
    els.feedbackAdminPanel = document.getElementById("feedbackAdminPanel");
    els.feedbackAdminFilter = document.getElementById("feedbackAdminFilter");
    els.feedbackAdminRefresh = document.getElementById("feedbackAdminRefresh");
    els.feedbackAdminLogout = document.getElementById("feedbackAdminLogout");
    els.feedbackAdminList = document.getElementById("feedbackAdminList");
  }

  function setupNavigation() {
    document.querySelectorAll("[data-view-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        showView(button.getAttribute("data-view-button"));
      });
    });

    document.querySelectorAll("[data-jump-view]").forEach(function (button) {
      button.addEventListener("click", function () {
        showView(button.getAttribute("data-jump-view"));
      });
    });
  }

  function showView(viewId) {
    document.querySelectorAll(".view").forEach(function (view) {
      view.classList.toggle("is-active", view.id === viewId);
    });
    document.querySelectorAll("[data-view-button]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-view-button") === viewId);
    });
    var shell = document.querySelector(".app-shell");
    if (shell) {
      shell.classList.toggle("is-guide-wide", viewId === "guide");
    }
    var chrome = VIEW_CHROME[viewId] || VIEW_CHROME.dashboard;
    if (els.viewCrumbKicker) {
      els.viewCrumbKicker.textContent = chrome.kicker;
    }
    if (els.viewCrumbTitle) {
      els.viewCrumbTitle.textContent = chrome.title;
    }
    if (viewId === "feedback") {
      renderFeedback();
      if (state.feedbackAdminToken && state.feedbackItems.length === 0 && !state.feedbackAdminLoading) {
        loadFeedbackItems();
      }
    }
  }

  function bindForms() {
    els.profileForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = els.profileName.value.trim();
      if (!name) return;
      var profile = createProfile(name);
      state.profiles.push(profile);
      state.activeProfileId = profile.id;
      state.clinic = null;
      els.profileName.value = "";
      saveProfiles();
      renderAll();
    });

    els.profileSelect.addEventListener("change", function () {
      state.activeProfileId = els.profileSelect.value;
      state.clinic = null;
      saveActiveProfile();
      renderAll();
    });

    els.themeSelect.addEventListener("change", function () {
      applyTheme(els.themeSelect.value);
    });
    if (els.accentSelect) {
      els.accentSelect.addEventListener("change", function () {
        applyAccent(els.accentSelect.value);
      });
    }

    els.guideFilter.addEventListener("change", renderGuide);
    els.guideSearch.addEventListener("input", renderGuide);
    els.guideSearch.addEventListener("search", renderGuide);
    els.guideSearch.addEventListener("keyup", renderGuide);
    els.guideSearch.addEventListener("change", renderGuide);

    els.quizSetup.addEventListener("submit", function (event) {
      event.preventDefault();
      startQuiz();
    });
    if (els.quizMode) {
      els.quizMode.addEventListener("change", function () {
        state.quiz = null;
        renderQuizAvailability();
      });
    }
    els.quizDifficulty.addEventListener("change", renderQuizAvailability);
    els.quizTopic.addEventListener("change", renderQuizAvailability);
    els.quizCount.addEventListener("change", renderQuizAvailability);

    els.scenarioSetup.addEventListener("submit", function (event) {
      event.preventDefault();
      startScenario();
    });
    els.scenarioDifficulty.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.scenarioDifficulty = els.scenarioDifficulty.value;
      saveProfiles();
      renderScenarioLibrary();
      if (!state.scenario) {
        els.scenarioCard.innerHTML = "<div class=\"empty-state\">Choose settings and load a random case.</div>";
        els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
      }
    });
    els.scenarioMode.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.scenarioMode = els.scenarioMode.value;
      state.scenario = null;
      saveProfiles();
      renderScenarioLibrary();
      renderScenarioPlaceholder();
    });

    els.skillSetup.addEventListener("submit", function (event) {
      event.preventDefault();
      startSkillDrill();
    });
    els.skillMode.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.skillMode = els.skillMode.value;
      state.skill = null;
      saveProfiles();
      populateSkillCases();
      renderSkillPlaceholder();
    });
    els.skillDifficulty.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.skillDifficulty = els.skillDifficulty.value;
      state.skill = null;
      saveProfiles();
      populateSkillCases();
      renderSkillPlaceholder();
    });

    if (els.practiceWeakNow) {
      els.practiceWeakNow.addEventListener("click", openWeakPractice);
    }

    els.resetProfile.addEventListener("click", function () {
      clearActiveProfile();
    });

    if (els.feedbackForm) {
      els.feedbackForm.addEventListener("submit", submitFeedbackRequest);
    }
    if (els.feedbackAdminLogin) {
      els.feedbackAdminLogin.addEventListener("submit", loginFeedbackAdmin);
    }
    if (els.feedbackAdminFilter) {
      els.feedbackAdminFilter.addEventListener("change", loadFeedbackItems);
    }
    if (els.feedbackAdminRefresh) {
      els.feedbackAdminRefresh.addEventListener("click", loadFeedbackItems);
    }
    if (els.feedbackAdminLogout) {
      els.feedbackAdminLogout.addEventListener("click", logoutFeedbackAdmin);
    }
  }

  function populateFilters() {
    var models = unique(DATA.studySections.map(function (section) { return section.model; }));
    models.forEach(function (model) {
      els.guideFilter.appendChild(option(model, model));
    });

    var topics = unique(DATA.questions.map(function (question) { return question.model; }));
    topics.forEach(function (topic) {
      els.quizTopic.appendChild(option(topic, topic));
    });
    populateSkillCases();
  }

  function option(value, text) {
    var node = document.createElement("option");
    node.value = value;
    node.textContent = text;
    return node;
  }

  function loadProfiles() {
    state.profiles = readJson(PROFILE_KEY, []);
    if (!Array.isArray(state.profiles) || state.profiles.length === 0) {
      state.profiles = [createProfile("Learner 1")];
    }
    state.profiles = state.profiles.map(normalizeProfile);

    var active = safeStorage.getItem(ACTIVE_KEY);
    state.activeProfileId = active && findProfile(active) ? active : state.profiles[0].id;
    migrateScenarioAttempts();
    state.profiles = state.profiles.map(normalizeProfile);
    saveProfiles();
    saveActiveProfile();
  }

  function loadTheme() {
    var theme = safeStorage.getItem(THEME_KEY) || "light";
    var accent = safeStorage.getItem(ACCENT_KEY) || "teal";
    applyTheme(theme);
    applyAccent(accent);
  }

  function normalizeTheme(theme) {
    var allowed = ["light", "paper", "mist", "dark", "graphite", "midnight", "obsidian", "carbon", "deep-ocean", "twilight", "void", "onyx"];
    return allowed.indexOf(theme) === -1 ? "light" : theme;
  }

  function isDarkTheme(theme) {
    return ["dark", "graphite", "midnight", "obsidian", "carbon", "deep-ocean", "twilight", "void", "onyx"].indexOf(theme) !== -1;
  }

  function applyTheme(theme) {
    var nextTheme = normalizeTheme(theme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.setAttribute("data-tone", isDarkTheme(nextTheme) ? "dark" : "light");
    safeStorage.setItem(THEME_KEY, nextTheme);
    if (els.themeSelect) {
      els.themeSelect.value = nextTheme;
    }
  }

  function applyAccent(accent) {
    var allowed = ["teal", "blue", "pink", "red", "purple", "emerald", "cyan", "indigo", "orange", "amber", "lime", "rose", "slate"];
    var nextAccent = allowed.indexOf(accent) === -1 ? "teal" : accent;
    document.documentElement.setAttribute("data-accent", nextAccent);
    safeStorage.setItem(ACCENT_KEY, nextAccent);
    if (els.accentSelect) {
      els.accentSelect.value = nextAccent;
    }
  }

  function migrateScenarioAttempts() {
    var saved = readJson(SCENARIO_KEY, {});
    if (!saved || typeof saved !== "object") return;
    state.profiles.forEach(function (profile) {
      if (!Array.isArray(profile.scenarioAttempts)) {
        profile.scenarioAttempts = [];
      }
      if (Array.isArray(saved[profile.id]) && profile.scenarioAttempts.length === 0) {
        profile.scenarioAttempts = saved[profile.id];
      }
    });
  }

  function createProfile(name) {
    return {
      id: "profile-" + Date.now() + "-" + Math.floor(Math.random() * 100000),
      name: name,
      createdAt: new Date().toISOString(),
      quizAttempts: [],
      scenarioAttempts: [],
      skillAttempts: [],
      clinicAttempts: [],
      reviewQueue: [],
      flashcardStats: {},
      masteryStats: {},
      settings: {
        quizDifficulty: "mixed",
        quizCount: 10,
        clinicLevel: "practice",
        scenarioDifficulty: "mixed",
        scenarioMode: "combined",
        skillMode: "modelCompare",
        skillDifficulty: "mixed"
      }
    };
  }

  function normalizeProfile(profile) {
    var normalized = profile || createProfile("Learner");
    normalized.quizAttempts = Array.isArray(normalized.quizAttempts) ? normalized.quizAttempts : [];
    normalized.scenarioAttempts = Array.isArray(normalized.scenarioAttempts) ? normalized.scenarioAttempts : [];
    normalized.skillAttempts = Array.isArray(normalized.skillAttempts) ? normalized.skillAttempts : [];
    normalized.clinicAttempts = Array.isArray(normalized.clinicAttempts) ? normalized.clinicAttempts : [];
    normalized.reviewQueue = Array.isArray(normalized.reviewQueue) ? normalized.reviewQueue : [];
    normalized.flashcardStats = normalized.flashcardStats && typeof normalized.flashcardStats === "object" ? normalized.flashcardStats : {};
    normalized.masteryStats = normalized.masteryStats && typeof normalized.masteryStats === "object" ? normalized.masteryStats : {};
    normalized.settings = normalized.settings || {};
    if (!normalized.settings.quizDifficulty) normalized.settings.quizDifficulty = "mixed";
    if (!normalized.settings.quizCount) normalized.settings.quizCount = 10;
    if (!normalized.settings.clinicLevel) normalized.settings.clinicLevel = "practice";
    if (!normalized.settings.scenarioDifficulty) normalized.settings.scenarioDifficulty = "mixed";
    if (!normalized.settings.scenarioMode) normalized.settings.scenarioMode = "combined";
    if (!normalized.settings.skillMode) normalized.settings.skillMode = "modelCompare";
    if (!normalized.settings.skillDifficulty) normalized.settings.skillDifficulty = "mixed";
    return normalized;
  }

  function getProfile() {
    return findProfile(state.activeProfileId) || state.profiles[0];
  }

  function findProfile(id) {
    return state.profiles.find(function (profile) { return profile.id === id; });
  }

  function saveProfiles() {
    safeStorage.setItem(PROFILE_KEY, JSON.stringify(state.profiles));
    scheduleAutoSync();
  }

  function saveActiveProfile() {
    safeStorage.setItem(ACTIVE_KEY, state.activeProfileId);
  }

  function renderAll() {
    renderProfilePicker();
    renderDashboard();
    renderGuide();
    renderQuizPlaceholder();
    renderScenarioPlaceholder();
    renderScenarioLibrary();
    renderSkillPlaceholder();
    renderSyncPanel();
    renderFeedback();
    renderProgress();
  }

  function renderProfilePicker() {
    var profile = getProfile();
    els.profileSelect.innerHTML = state.profiles.map(function (item) {
      return "<option value=\"" + escapeHtml(item.id) + "\">" + escapeHtml(item.name) + "</option>";
    }).join("");
    els.profileSelect.value = profile.id;
  }

  function renderDashboard() {
    var profile = getProfile();
    var quizAttempts = profile.quizAttempts || [];
    var scenarioAttempts = profile.scenarioAttempts || [];
    var skillAttempts = profile.skillAttempts || [];
    var clinicAttempts = profile.clinicAttempts || [];
    var avgQuiz = average(quizAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgScenario = average(scenarioAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgSkill = average(skillAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgClinic = average(clinicAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var missed = getMissedTopics(profile);

    els.dashboardStats.innerHTML = [
      statCard(clinicAttempts.length, "Clinic rounds"),
      statCard(avgClinic === null ? "--" : avgClinic + "%", "Average clinic score"),
      statCard(quizAttempts.length, "Questionnaire attempts"),
      statCard(avgQuiz === null ? "--" : avgQuiz + "%", "Average questionnaire score"),
      statCard(scenarioAttempts.length, "Scenario attempts"),
      statCard(avgScenario === null ? "--" : avgScenario + "%", "Average scenario score"),
      statCard(skillAttempts.length, "Skill lab attempts"),
      statCard(avgSkill === null ? "--" : avgSkill + "%", "Average skill score")
    ].join("");

    if (missed.length === 0) {
      els.focusQueue.innerHTML = "<div class=\"empty-state\">No missed topics yet.</div>";
    } else {
      els.focusQueue.innerHTML = missed.slice(0, 6).map(function (item) {
        return [
          "<div class=\"focus-item\">",
          "<strong>" + escapeHtml(renderWeakSpotLabel(item)) + "</strong>",
          "<span>" + item.count + " missed item" + (item.count === 1 ? "" : "s") + "</span>",
          "<button class=\"secondary weak-spot-button\" type=\"button\" data-weak-topic=\"" + escapeHtml(item.topic || "") + "\" data-weak-model=\"" + escapeHtml(item.model || "") + "\">Practice This Weak Spot</button>",
          "</div>"
        ].join("");
      }).join("");
      els.focusQueue.querySelectorAll("[data-weak-topic]").forEach(function (button) {
        button.addEventListener("click", function () {
          startWeakSpotClinic(button.getAttribute("data-weak-topic"), button.getAttribute("data-weak-model"));
        });
      });
    }

    els.sourceList.innerHTML = DATA.resources.map(function (resource) {
      return "<div class=\"source-item\"><a href=\"" + escapeHtml(resource.url) + "\" target=\"_blank\" rel=\"noreferrer\">" + escapeHtml(resource.title) + "</a><br><span>" + escapeHtml(resource.note) + "</span></div>";
    }).join("");

    renderTodayStudyPath(profile, missed);
  }

  function renderWeakSpotLabel(item) {
    var parts = [item.model, item.domain, item.topic].filter(Boolean);
    return unique(parts).join(" -> ") || item.topic || "Review item";
  }

  function renderTodayStudyPath(profile, missed) {
    if (!els.todayStudyPath) return;
    if (state.clinic) {
      renderClinicSession();
      return;
    }
    var level = profile.settings.clinicLevel || "practice";
    var due = getDueReviewItems(profile);
    var weakSpot = missed[0] ? renderWeakSpotLabel(missed[0]) : "Balanced starter clinic";
    els.todayStudyPath.innerHTML = [
      "<div class=\"clinic-start\">",
      "<div class=\"clinic-start-copy\"><strong>Start Today's 5-Minute Clinic</strong><span>Five short rounds: recall, model spotting, case decision, due review, and supervisor notes.</span></div>",
      "<div class=\"clinic-controls\"><label for=\"clinicLevel\">Level</label><select id=\"clinicLevel\"><option value=\"learn\">Learn</option><option value=\"practice\">Practice</option><option value=\"exam\">Exam</option></select><button type=\"button\" id=\"startDailyClinic\">Start Clinic</button></div>",
      "<div class=\"clinic-preview clinic-agenda\">",
      "<div><em>Focus</em><strong>" + escapeHtml(weakSpot) + "</strong><span>Adaptive starting point</span></div>",
      "<div><em>Review</em><strong>" + (due.length ? due.length + " due" : "Starter mix") + "</strong><span>" + (due.length ? "Waiting in spaced review" : "Balanced across models") + "</span></div>",
      "<div><em>Rounds</em><strong>5 decisions</strong><span>Flashcards, cases, and feedback</span></div>",
      "</div>",
      "</div>"
    ].join("");

    var levelSelect = document.getElementById("clinicLevel");
    if (levelSelect) {
      levelSelect.value = level;
      levelSelect.addEventListener("change", function () {
        profile.settings.clinicLevel = levelSelect.value;
        saveProfiles();
      });
    }
    bindOptionalClick("startDailyClinic", function () {
      startDailyClinic(levelSelect ? levelSelect.value : "practice");
    });
  }

  function startWeakSpotClinic(topic, model) {
    showView("dashboard");
    startDailyClinic((getProfile().settings || {}).clinicLevel || "practice", {
      topic: topic || "",
      model: model || ""
    });
  }

  function startDailyClinic(level, targetWeak) {
    var profile = getProfile();
    var normalizedLevel = normalizeClinicLevel(level);
    profile.settings.clinicLevel = normalizedLevel;
    state.clinic = buildClinicSession(profile, normalizedLevel, targetWeak || null);
    saveProfiles();
    renderDashboard();
  }

  function normalizeClinicLevel(level) {
    return ["learn", "practice", "exam"].indexOf(level) === -1 ? "practice" : level;
  }

  function buildClinicSession(profile, level, targetWeak) {
    var used = {};
    var items = [];
    pickClinicFlashcards(profile, 2, targetWeak).forEach(function (card) {
      if (!used[card.id]) {
        used[card.id] = true;
        items.push(clinicFlashcardItem(card, "flashcard"));
      }
    });
    var spot = pickClinicDrill("spotModel", targetWeak, used);
    if (spot) {
      used[spot.id] = true;
      items.push(clinicChoiceItem(spot, "clinicDrill"));
    }
    var showdown = pickClinicDrill("showdown", targetWeak, used);
    if (showdown) {
      used[showdown.id] = true;
      items.push(clinicChoiceItem(showdown, "clinicDrill"));
    }
    var reviewItem = pickClinicReviewItem(profile, targetWeak, used);
    if (reviewItem) {
      used[reviewItem.id] = true;
      items.push(reviewItem);
    }
    fillClinicItems(items, used, targetWeak);
    return {
      level: level,
      targetWeak: targetWeak || null,
      items: items.slice(0, 5),
      index: 0,
      answers: [],
      startedAt: new Date().toISOString(),
      completed: false,
      saved: false
    };
  }

  function fillClinicItems(items, used, targetWeak) {
    var cardPool = pickClinicFlashcards(getProfile(), 8, targetWeak);
    cardPool.forEach(function (card) {
      if (items.length >= 5 || used[card.id]) return;
      used[card.id] = true;
      items.push(clinicFlashcardItem(card, "flashcard"));
    });
    (DATA.clinicDrills || []).forEach(function (drill) {
      if (items.length >= 5 || used[drill.id]) return;
      used[drill.id] = true;
      items.push(clinicChoiceItem(drill, "clinicDrill"));
    });
  }

  function pickClinicFlashcards(profile, count, targetWeak) {
    var cards = DATA.flashcards || [];
    var dueIds = getDueReviewItems(profile).filter(function (item) {
      return item.kind === "flashcard";
    }).map(function (item) { return item.id; });
    var dueCards = dueIds.map(findFlashcard).filter(Boolean);
    var weakCards = cards.filter(function (card) {
      return matchesClinicTarget(card, targetWeak);
    });
    var ranked = dueCards.concat(weakCards, balancedClinicCards(cards));
    var seen = {};
    return ranked.filter(function (card) {
      if (!card || seen[card.id]) return false;
      seen[card.id] = true;
      return true;
    }).slice(0, count);
  }

  function balancedClinicCards(cards) {
    var models = ["Bowen", "EFT", "Ethics", "Systemic Roles", "Comparison"];
    var ordered = [];
    models.forEach(function (model) {
      var match = cards.find(function (card) { return card.model === model; });
      if (match) ordered.push(match);
    });
    return ordered.concat(shuffle(cards));
  }

  function pickClinicDrill(type, targetWeak, used) {
    var drills = (DATA.clinicDrills || []).filter(function (drill) {
      return drill.type === type && !used[drill.id];
    });
    var targeted = drills.filter(function (drill) {
      return matchesClinicTarget(drill, targetWeak);
    });
    return shuffle(targeted.length ? targeted : drills)[0] || null;
  }

  function pickClinicReviewItem(profile, targetWeak, used) {
    var due = getDueReviewItems(profile);
    for (var i = 0; i < due.length; i += 1) {
      var item = clinicItemFromReview(due[i]);
      if (item && !used[item.id]) return item;
    }
    var missedQuiz = findRecentMissedQuiz(profile, targetWeak);
    if (missedQuiz && !used[missedQuiz.id]) return missedQuiz;
    var fallbackCard = pickClinicFlashcards(profile, 1, targetWeak).filter(function (card) {
      return !used[card.id];
    })[0];
    return fallbackCard ? clinicFlashcardItem(fallbackCard, "reviewFallback") : null;
  }

  function clinicItemFromReview(review) {
    if (!review) return null;
    if (review.kind === "flashcard") {
      var card = findFlashcard(review.id);
      return card ? clinicFlashcardItem(card, "dueReview") : null;
    }
    if (review.kind === "clinicDrill") {
      var drill = findClinicDrill(review.id);
      return drill ? clinicChoiceItem(drill, "dueReview") : null;
    }
    if (review.kind === "quiz") {
      var question = findQuestion(review.id);
      return question ? clinicQuestionItem(question, "dueReview") : null;
    }
    return null;
  }

  function findRecentMissedQuiz(profile, targetWeak) {
    var missed = [];
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (answer) {
        var question = findQuestion(answer.questionId);
        if (question) missed.push(question);
      });
    });
    var targeted = missed.filter(function (question) {
      return matchesClinicTarget(question, targetWeak);
    });
    var question = shuffle(targeted.length ? targeted : missed)[0];
    return question ? clinicQuestionItem(question, "missedQuiz") : null;
  }

  function clinicFlashcardItem(card, source) {
    return {
      type: "flashcard",
      sourceKind: source,
      id: card.id,
      model: card.model,
      domain: card.domain,
      topic: card.topic,
      title: labelForFlashcardType(card.type),
      prompt: card.front,
      answer: card.back,
      clue: card.clue,
      whyBest: card.why,
      clinicalCaution: card.clinicalCaution,
      reviewNext: card.reviewNext
    };
  }

  function clinicChoiceItem(drill, source) {
    var order = shuffle(drill.choices.map(function (_, index) { return index; }));
    return {
      type: drill.type,
      sourceKind: source,
      id: drill.id,
      model: drill.model,
      domain: drill.domain,
      topic: drill.topic,
      difficulty: drill.difficulty,
      title: drill.type === "spotModel" ? "Spot the Model" : "Therapist Response Showdown",
      prompt: drill.prompt,
      choices: order.map(function (index) { return drill.choices[index]; }),
      wrongExplanations: order.map(function (index) { return drill.wrongExplanations[index] || ""; }),
      answerIndex: order.indexOf(drill.answerIndex),
      clue: drill.clue,
      whyBest: drill.explanation,
      clinicalCaution: drill.clinicalCaution,
      reviewNext: drill.reviewNext
    };
  }

  function clinicQuestionItem(question, source) {
    var prepared = prepareQuizQuestion(question);
    return {
      type: "quizReview",
      sourceKind: source,
      id: prepared.id,
      model: prepared.model,
      domain: prepared.domain,
      topic: prepared.topic,
      difficulty: prepared.difficulty,
      title: "Spaced Review",
      prompt: prepared.prompt,
      choices: prepared.choices,
      wrongExplanations: prepared.wrongExplanations,
      answerIndex: prepared.answerIndex,
      clue: prepared.hint,
      whyBest: prepared.explanation,
      clinicalCaution: "Use current law, ethics codes, supervision, and official exam materials for clinical decisions.",
      reviewNext: reviewNextText(prepared)
    };
  }

  function renderClinicSession() {
    var clinic = state.clinic;
    if (!clinic) return;
    if (clinic.completed || clinic.index >= clinic.items.length) {
      renderClinicSummary();
      return;
    }
    var item = clinic.items[clinic.index];
    var progress = Math.round((clinic.index / clinic.items.length) * 100);
    els.todayStudyPath.innerHTML = [
      "<div class=\"clinic-session\">",
      "<div class=\"clinic-session-head\"><strong>Clinic round " + (clinic.index + 1) + " of " + clinic.items.length + "</strong><span>" + escapeHtml(labelForClinicLevel(clinic.level)) + "</span></div>",
      "<div class=\"progress-bar\" aria-label=\"Daily Clinic progress\"><span style=\"width:" + progress + "%\"></span></div>",
      item.type === "flashcard" ? renderClinicFlashcard(item, clinic) : renderClinicChoice(item, clinic),
      "</div>"
    ].join("");
    bindClinicControls(item, clinic);
  }

  function renderClinicFlashcard(item, clinic) {
    var showAnswer = clinic.level === "learn" || item.revealed || item.completed;
    return [
      "<div class=\"clinic-card\">",
      renderClinicMeta(item),
      "<h4>" + escapeHtml(item.prompt) + "</h4>",
      clinic.level === "learn" ? "<div class=\"feedback\"><strong>Clue:</strong> " + escapeHtml(item.clue) + "</div>" : "",
      showAnswer ? "<div class=\"clinic-answer\"><span>Answer</span><p>" + escapeHtml(item.answer) + "</p></div>" : "",
      item.completed && clinic.level !== "exam" ? renderClinicFeedback(item.answerRecord) : "",
      "<div class=\"button-row\">",
      !showAnswer ? "<button type=\"button\" id=\"clinicReveal\">Reveal Answer</button>" : "",
      showAnswer && !item.completed ? "<button type=\"button\" id=\"clinicGotIt\">Got It</button><button class=\"secondary\" type=\"button\" id=\"clinicMissedIt\">Missed It</button>" : "",
      item.completed ? "<button type=\"button\" id=\"clinicNext\">" + (clinic.index === clinic.items.length - 1 ? "Finish Clinic" : "Next Round") + "</button>" : "",
      "<button class=\"secondary\" type=\"button\" id=\"clinicStop\">Stop</button>",
      "</div>",
      "</div>"
    ].join("");
  }

  function renderClinicChoice(item, clinic) {
    var showFeedback = item.completed && clinic.level !== "exam";
    var choices = item.choices.map(function (choice, index) {
      var classNames = ["choice"];
      if (item.selectedIndex === index) classNames.push("is-selected");
      if (showFeedback && index === item.answerIndex) classNames.push("is-correct");
      if (showFeedback && item.selectedIndex === index && index !== item.answerIndex) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"clinicChoice\" value=\"" + index + "\"" + (item.selectedIndex === index ? " checked" : "") + (item.completed ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
    }).join("");
    return [
      "<div class=\"clinic-card\">",
      renderClinicMeta(item),
      "<h4>" + escapeHtml(item.prompt) + "</h4>",
      clinic.level === "learn" || item.hintShown ? "<div class=\"feedback\"><strong>Clue:</strong> " + escapeHtml(item.clue) + "</div>" : "",
      "<div class=\"choice-list\">" + choices + "</div>",
      showFeedback ? renderClinicFeedback(item.answerRecord) : "",
      "<div class=\"button-row\">",
      !item.completed ? "<button type=\"button\" id=\"clinicSubmit\">Submit</button>" : "",
      !item.completed && clinic.level === "practice" && !item.hintShown ? "<button class=\"secondary\" type=\"button\" id=\"clinicHint\">Hint</button>" : "",
      item.completed ? "<button type=\"button\" id=\"clinicNext\">" + (clinic.index === clinic.items.length - 1 ? "Finish Clinic" : "Next Round") + "</button>" : "",
      "<button class=\"secondary\" type=\"button\" id=\"clinicStop\">Stop</button>",
      "</div>",
      "</div>"
    ].join("");
  }

  function renderClinicMeta(item) {
    return "<div class=\"question-meta\"><span class=\"tag\">" + escapeHtml(item.title || item.type) + "</span><span class=\"tag\">" + escapeHtml(item.model) + "</span><span class=\"tag\">" + escapeHtml(item.topic) + "</span></div>";
  }

  function bindClinicControls(item, clinic) {
    els.todayStudyPath.querySelectorAll("input[name=\"clinicChoice\"]").forEach(function (input) {
      input.addEventListener("change", function () {
        item.selectedIndex = Number(input.value);
        renderClinicSession();
      });
    });
    bindOptionalClick("clinicReveal", function () {
      item.revealed = true;
      renderClinicSession();
    });
    bindOptionalClick("clinicGotIt", function () {
      completeClinicFlashcard(item, true);
    });
    bindOptionalClick("clinicMissedIt", function () {
      completeClinicFlashcard(item, false);
    });
    bindOptionalClick("clinicSubmit", function () {
      if (item.selectedIndex === undefined || item.selectedIndex === null) return;
      completeClinicChoice(item);
    });
    bindOptionalClick("clinicHint", function () {
      item.hintShown = true;
      renderClinicSession();
    });
    bindOptionalClick("clinicNext", function () {
      clinic.index += 1;
      renderClinicSession();
    });
    bindOptionalClick("clinicStop", function () {
      state.clinic = null;
      renderDashboard();
    });
  }

  function completeClinicFlashcard(item, correct) {
    if (item.completed) return;
    var answer = {
      type: "flashcard",
      id: item.id,
      model: item.model,
      domain: item.domain,
      topic: item.topic,
      prompt: item.prompt,
      correct: correct,
      selectedChoice: correct ? "Self-graded: got it" : "Self-graded: missed it",
      correctChoice: item.answer,
      clue: item.clue,
      whyBest: item.whyBest,
      whyTempting: correct ? "" : "The card needs another retrieval pass before it gets easier.",
      clinicalCaution: item.clinicalCaution,
      reviewNext: item.reviewNext,
      answeredAt: new Date().toISOString()
    };
    item.completed = true;
    item.answerRecord = answer;
    recordClinicAnswer(answer, item);
    renderClinicSession();
  }

  function completeClinicChoice(item) {
    if (item.completed) return;
    var correct = item.selectedIndex === item.answerIndex;
    var answer = {
      type: item.type,
      id: item.id,
      model: item.model,
      domain: item.domain,
      topic: item.topic,
      prompt: item.prompt,
      correct: correct,
      selectedIndex: item.selectedIndex,
      selectedChoice: item.choices[item.selectedIndex],
      correctChoice: item.choices[item.answerIndex],
      clue: item.clue,
      whyBest: item.whyBest,
      whyTempting: correct ? "" : item.wrongExplanations[item.selectedIndex] || "This choice sounds plausible, but it misses the main stem clue.",
      clinicalCaution: item.clinicalCaution,
      reviewNext: item.reviewNext,
      answeredAt: new Date().toISOString()
    };
    item.completed = true;
    item.answerRecord = answer;
    recordClinicAnswer(answer, item);
    renderClinicSession();
  }

  function recordClinicAnswer(answer, item) {
    var profile = getProfile();
    var clinic = state.clinic;
    clinic.answers.push(answer);
    if (answer.type === "flashcard") {
      updateFlashcardStats(profile, answer);
      updateReviewFromFlashcardAnswer(profile, answer);
    } else {
      updateReviewFromClinicDrillAnswer(profile, answer, item);
    }
    saveProfiles();
  }

  function renderClinicFeedback(answer) {
    if (!answer) return "";
    return [
      "<div class=\"feedback " + (answer.correct ? "good" : "needs-work") + "\">",
      "<strong>" + (answer.correct ? "Supervisor feedback: strong." : "Supervisor feedback: review this.") + "</strong>",
      "<div class=\"explanation-grid\">",
      "<div><span>Correct answer</span><p>" + escapeHtml(answer.correctChoice) + "</p></div>",
      "<div><span>Why it fits</span><p>" + escapeHtml(answer.whyBest || "It matches the model, risk, and next-step clue.") + "</p></div>",
      "<div><span>Exam clue</span><p>" + escapeHtml(answer.clue || "Look for the model, risk, consent, and next-step signal.") + "</p></div>",
      "<div><span>Review next</span><p>" + escapeHtml(answer.reviewNext || reviewNextText(answer)) + "</p></div>",
      "</div>",
      answer.correct ? "" : "<p><strong>Why the tempting answer misses:</strong> " + escapeHtml(answer.whyTempting) + "</p>",
      "<p><strong>Clinical caution:</strong> " + escapeHtml(answer.clinicalCaution || "Educational exam prep only; use current law, ethics codes, supervision, and official materials in actual practice.") + "</p>",
      "</div>"
    ].join("");
  }

  function renderClinicSummary() {
    var clinic = state.clinic;
    if (!clinic) return;
    if (!clinic.completed) {
      clinic.completed = true;
      saveClinicAttempt(clinic);
    }
    var correct = clinic.answers.filter(function (answer) { return answer.correct; }).length;
    var total = clinic.items.length || 1;
    var percent = Math.round((correct / total) * 100);
    var strengthened = unique(clinic.answers.filter(function (answer) { return answer.correct; }).map(function (answer) {
      return answer.model + " " + answer.topic;
    })).slice(0, 3);
    var missed = unique(clinic.answers.filter(function (answer) { return !answer.correct; }).map(function (answer) {
      return answer.model + " -> " + answer.topic;
    })).slice(0, 3);
    els.todayStudyPath.innerHTML = [
      "<div class=\"clinic-summary\">",
      "<div class=\"clinic-session-head\"><strong>Supervisor Summary</strong><span>" + percent + "%</span></div>",
      "<p>Today you strengthened <strong>" + escapeHtml(strengthened.length ? strengthened.join(" + ") : "your starter clinic routine") + "</strong>.</p>",
      missed.length ? "<div class=\"feedback needs-work\"><strong>Next weak spot:</strong>" + list(missed) + "</div>" : "<div class=\"feedback good\"><strong>Clean clinic.</strong> No weak spots from this round.</div>",
      clinic.level === "exam" ? "<div class=\"review-list\">" + clinic.answers.map(renderClinicFeedback).join("") + "</div>" : "",
      "<div class=\"button-row\"><button type=\"button\" id=\"clinicAgain\">Start Another Clinic</button><button class=\"secondary\" type=\"button\" id=\"clinicClose\">Back to Dashboard</button></div>",
      "</div>"
    ].join("");
    bindOptionalClick("clinicAgain", function () {
      startDailyClinic(clinic.level, clinic.targetWeak);
    });
    bindOptionalClick("clinicClose", function () {
      state.clinic = null;
      renderDashboard();
    });
  }

  function saveClinicAttempt(clinic) {
    if (clinic.saved) return;
    var profile = getProfile();
    var correct = clinic.answers.filter(function (answer) { return answer.correct; }).length;
    var total = clinic.items.length || 1;
    var missed = clinic.answers.filter(function (answer) { return !answer.correct; });
    profile.clinicAttempts = Array.isArray(profile.clinicAttempts) ? profile.clinicAttempts : [];
    profile.clinicAttempts.unshift({
      date: new Date().toISOString(),
      level: clinic.level,
      scorePercent: Math.round((correct / total) * 100),
      correct: correct,
      total: total,
      strengthened: unique(clinic.answers.filter(function (answer) { return answer.correct; }).map(function (answer) { return answer.model + " " + answer.topic; })),
      missedAreas: unique(missed.map(function (answer) { return answer.model + " -> " + answer.topic; })),
      answers: clinic.answers
    });
    profile.clinicAttempts = profile.clinicAttempts.slice(0, 40);
    clinic.saved = true;
    saveProfiles();
    renderProgress();
  }

  function studyStep(number, title, detail, actionId, disabled) {
    return [
      "<div class=\"path-step\">",
      "<div class=\"path-number\">" + escapeHtml(number) + "</div>",
      "<div><strong>" + escapeHtml(title) + "</strong><span>" + escapeHtml(detail) + "</span></div>",
      "<button class=\"secondary\" type=\"button\" id=\"" + escapeHtml(actionId) + "\"" + (disabled ? " disabled" : "") + ">Start</button>",
      "</div>"
    ].join("");
  }

  function bindOptionalClick(id, handler) {
    var node = document.getElementById(id);
    if (node) node.addEventListener("click", handler);
  }

  function isSyncConfigured() {
    var sync = window.STUDY_SYNC;
    return Boolean(sync && sync.isConfigured && sync.isConfigured());
  }

  function ensureSyncCode() {
    var code = safeStorage.getItem(SYNC_CODE_KEY) || "";
    if (!isValidSyncCode(code)) {
      code = generateShareCode();
      safeStorage.setItem(SYNC_CODE_KEY, code);
    }
    return code;
  }

  function isValidSyncCode(code) {
    return /^[a-z0-9][a-z0-9_-]{2,63}$/.test(String(code || "").trim().toLowerCase());
  }

  function scheduleAutoSync() {
    if (state.applyingSync || !isSyncConfigured()) return;
    var code = ensureSyncCode();
    if (!code) return;
    if (state.syncTimer) {
      window.clearTimeout(state.syncTimer);
    }
    state.syncStatus = "pending";
    state.syncMessage = "Cloud sync queued.";
    state.syncTimer = window.setTimeout(function () {
      state.syncTimer = null;
      autoPushSync();
    }, 700);
  }

  async function autoPushSync() {
    var sync = window.STUDY_SYNC;
    if (!sync || !sync.push) return;
    var code = ensureSyncCode();
    state.syncStatus = "syncing";
    state.syncMessage = "Saving to Convex...";
    renderSyncPanel();
    try {
      await sync.push(code, getSyncPayload());
      state.syncStatus = "synced";
      state.syncMessage = "Progress saved to Convex automatically.";
    } catch (error) {
      state.syncStatus = "error";
      state.syncMessage = "Cloud sync failed: " + error.message;
    }
    renderSyncPanel();
  }

  function renderSyncPanel() {
    if (!els.syncPanel) return;
    var configured = isSyncConfigured();
    var code = configured ? ensureSyncCode() : "";
    var shell = els.syncPanelShell || els.syncPanel.closest(".sync-panel");

    if (!configured) {
      if (shell) shell.hidden = false;
      els.syncPanel.innerHTML = [
        "<div class=\"sync-status\"><strong>Local mode is active.</strong> The app works offline and is ready to send as a folder.</div>",
        "<div class=\"sync-status\">To turn it into a synced website, create a Convex project, deploy the <code>convex/</code> functions, then edit <code>assets/js/convex-config.js</code> with your Convex site URL.</div>",
        "<div class=\"sync-status\">After that, deploy the website to Vercel. Convex stores progress automatically for each browser while the study content stays in the website files.</div>"
      ].join("");
      return;
    }

    if (state.syncStatus !== "error") {
      if (shell) shell.hidden = true;
      els.syncPanel.innerHTML = "";
      return;
    }

    if (shell) shell.hidden = false;
    els.syncPanel.innerHTML = [
      "<div class=\"sync-status\"><strong>Automatic sync needs attention.</strong> Profiles and progress normally save to Convex in the background.</div>",
      "<details class=\"sync-advanced\">",
      "<summary>Advanced restore options</summary>",
      "<div class=\"sync-grid\">",
      "<label>Restore ID<input id=\"syncCode\" type=\"text\" value=\"" + escapeHtml(code) + "\" placeholder=\"lmft-study\" autocomplete=\"off\"></label>",
      "<div class=\"button-row\"><button type=\"button\" id=\"syncPull\">Restore This ID</button><button class=\"secondary\" type=\"button\" id=\"syncPush\">Sync Now</button><button class=\"secondary\" type=\"button\" id=\"syncNewCode\">Reset Cloud Copy</button></div>",
      "</div>",
      "</details>",
      state.syncMessage ? "<div class=\"feedback\">" + escapeHtml(state.syncMessage) + "</div>" : ""
    ].join("");

    document.getElementById("syncCode").addEventListener("input", function (event) {
      safeStorage.setItem(SYNC_CODE_KEY, event.target.value.trim());
      state.syncStatus = "pending";
      state.syncMessage = "Restore ID changed. Use the advanced restore buttons when needed.";
    });
    document.getElementById("syncNewCode").addEventListener("click", function () {
      safeStorage.setItem(SYNC_CODE_KEY, generateShareCode());
      state.syncStatus = "pending";
      state.syncMessage = "Cloud copy reset. Future progress will save automatically.";
      renderSyncPanel();
      scheduleAutoSync();
    });
    document.getElementById("syncPush").addEventListener("click", pushSync);
    document.getElementById("syncPull").addEventListener("click", pullSync);
  }

  function getSyncCode() {
    var codeInput = document.getElementById("syncCode");
    var code = (codeInput ? codeInput.value : safeStorage.getItem(SYNC_CODE_KEY) || "").trim();
    if (!code) {
      code = ensureSyncCode();
    }
    safeStorage.setItem(SYNC_CODE_KEY, code);
    return code;
  }

  function getSyncPayload() {
    return {
      version: 1,
      exportedAt: new Date().toISOString(),
      profiles: state.profiles,
      activeProfileId: state.activeProfileId,
      theme: safeStorage.getItem(THEME_KEY) || "light",
      accent: safeStorage.getItem(ACCENT_KEY) || "teal"
    };
  }

  function applySyncPayload(payload) {
    if (!payload || !Array.isArray(payload.profiles)) {
      throw new Error("Cloud copy is missing profile data.");
    }
    state.applyingSync = true;
    state.profiles = payload.profiles;
    state.activeProfileId = payload.activeProfileId && findProfile(payload.activeProfileId)
      ? payload.activeProfileId
      : state.profiles[0].id;
    saveProfiles();
    saveActiveProfile();
    saveScenarioMirror();
    if (payload.theme) {
      applyTheme(payload.theme);
    }
    if (payload.accent) {
      applyAccent(payload.accent);
    }
    state.quiz = null;
    state.scenario = null;
    state.applyingSync = false;
  }

  async function pushSync() {
    var sync = window.STUDY_SYNC;
    if (!sync || !sync.push) return;
    var code = getSyncCode();
    state.syncStatus = "syncing";
    state.syncMessage = "Saving to Convex...";
    renderSyncPanel();
    try {
      await sync.push(code, getSyncPayload());
      state.syncStatus = "synced";
      state.syncMessage = "Progress saved to Convex automatically.";
    } catch (error) {
      state.syncStatus = "error";
      state.syncMessage = "Cloud sync failed: " + error.message;
    }
    renderSyncPanel();
  }

  async function pullSync() {
    var sync = window.STUDY_SYNC;
    if (!sync || !sync.pull) return;
    var code = getSyncCode();
    if (!window.confirm("Restoring will replace the local profiles on this device with the Convex copy for '" + code + "'.")) {
      return;
    }
    state.syncStatus = "syncing";
    state.syncMessage = "Restoring from Convex...";
    renderSyncPanel();
    try {
      var payload = await sync.pull(code);
      applySyncPayload(payload);
      state.syncStatus = "synced";
      state.syncMessage = "Restored the saved cloud copy.";
    } catch (error) {
      state.syncStatus = "error";
      state.syncMessage = "Cloud restore failed: " + error.message;
    }
    renderAll();
  }

  function loadFeedbackAdmin() {
    state.feedbackAdminToken = safeStorage.getItem(FEEDBACK_ADMIN_TOKEN_KEY) || "";
  }

  function isFeedbackConfigured() {
    var feedback = window.STUDY_FEEDBACK;
    return Boolean(feedback && feedback.isConfigured && feedback.isConfigured());
  }

  function renderFeedback() {
    if (!els.feedbackStatus) return;
    if (els.feedbackPage && !els.feedbackPage.value) {
      els.feedbackPage.placeholder = currentFeedbackLocation();
    }
    if (!isFeedbackConfigured()) {
      state.feedbackStatus = "error";
      state.feedbackMessage = "Request inbox needs Convex configured before submissions can be saved.";
    } else if (state.feedbackStatus === "idle") {
      state.feedbackMessage = "";
    }
    renderFeedbackMessage(els.feedbackStatus, state.feedbackStatus, state.feedbackMessage);
    renderFeedbackAdmin();
  }

  function renderFeedbackAdmin() {
    if (!els.feedbackAdminPanel) return;
    var loggedIn = Boolean(state.feedbackAdminToken);
    if (els.feedbackAdminLogin) els.feedbackAdminLogin.hidden = loggedIn;
    els.feedbackAdminPanel.hidden = !loggedIn;

    if (!isFeedbackConfigured()) {
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = "Admin inbox needs Convex configured.";
    } else if (!loggedIn && state.feedbackAdminStatus === "idle") {
      state.feedbackAdminMessage = "";
    }

    renderFeedbackMessage(els.feedbackAdminStatus, state.feedbackAdminStatus, state.feedbackAdminMessage);
    if (loggedIn) {
      renderFeedbackItems();
    }
  }

  function renderFeedbackMessage(node, status, message) {
    if (!node) return;
    node.className = "feedback-status" + (status && status !== "idle" ? " " + status : "");
    node.textContent = message || "";
  }

  function clearFeedbackAdminToken() {
    state.feedbackAdminToken = "";
    safeStorage.setItem(FEEDBACK_ADMIN_TOKEN_KEY, "");
  }

  function normalizeFeedbackAdminError(error, fallback) {
    var message = String((error && error.message) || fallback || "Could not complete admin request.");
    message = message.split("\n")[0].replace(/^Uncaught Error:\s*/i, "");
    if (/requireAdmin|session|expired|log in|unauthorized/i.test(message)) {
      return {
        expired: true,
        message: "Admin session expired. Log in again."
      };
    }
    return {
      expired: false,
      message: message
    };
  }

  async function submitFeedbackRequest(event) {
    event.preventDefault();
    var feedback = window.STUDY_FEEDBACK;
    if (!feedback || !feedback.submit || !isFeedbackConfigured()) {
      state.feedbackStatus = "error";
      state.feedbackMessage = "Request inbox is not connected yet.";
      renderFeedback();
      return;
    }

    var title = (els.feedbackTitleInput.value || "").trim();
    var details = (els.feedbackDetails.value || "").trim();
    if (title.length < 4 || details.length < 10) {
      state.feedbackStatus = "error";
      state.feedbackMessage = "Add a short title and at least one clear sentence of details.";
      renderFeedback();
      return;
    }

    var button = els.feedbackForm.querySelector("button[type='submit']");
    if (button) button.disabled = true;
    state.feedbackStatus = "syncing";
    state.feedbackMessage = "Submitting request...";
    renderFeedback();

    try {
      await feedback.submit({
        type: els.feedbackType.value || "bug",
        title: title,
        details: details,
        contact: (els.feedbackContact.value || "").trim(),
        pageUrl: (els.feedbackPage.value || "").trim() || currentFeedbackLocation(),
        userAgent: window.navigator ? window.navigator.userAgent : ""
      });
      state.feedbackStatus = "synced";
      state.feedbackMessage = "Request submitted. Thank you.";
      els.feedbackTitleInput.value = "";
      els.feedbackDetails.value = "";
      els.feedbackPage.value = "";
    } catch (error) {
      state.feedbackStatus = "error";
      state.feedbackMessage = error.message || "Could not submit request.";
    }

    if (button) button.disabled = false;
    renderFeedback();
  }

  async function loginFeedbackAdmin(event) {
    event.preventDefault();
    var feedback = window.STUDY_FEEDBACK;
    if (!feedback || !feedback.adminLogin || !isFeedbackConfigured()) {
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = "Admin inbox is not connected yet.";
      renderFeedbackAdmin();
      return;
    }

    var password = (els.feedbackAdminPassword.value || "").trim();
    if (!password) {
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = "Enter the admin password.";
      renderFeedbackAdmin();
      return;
    }

    state.feedbackAdminStatus = "syncing";
    state.feedbackAdminMessage = "Logging in...";
    renderFeedbackAdmin();

    try {
      var result = await feedback.adminLogin(password);
      state.feedbackAdminToken = result.token || "";
      safeStorage.setItem(FEEDBACK_ADMIN_TOKEN_KEY, state.feedbackAdminToken);
      els.feedbackAdminPassword.value = "";
      state.feedbackAdminStatus = "synced";
      state.feedbackAdminMessage = "Logged in.";
      await loadFeedbackItems();
    } catch (error) {
      var loginError = normalizeFeedbackAdminError(error, "Could not log in.");
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = loginError.message;
      if (loginError.expired) {
        clearFeedbackAdminToken();
      }
      renderFeedbackAdmin();
    }
  }

  function logoutFeedbackAdmin() {
    clearFeedbackAdminToken();
    state.feedbackItems = [];
    state.feedbackAdminStatus = "idle";
    state.feedbackAdminMessage = "";
    renderFeedbackAdmin();
  }

  async function loadFeedbackItems() {
    var feedback = window.STUDY_FEEDBACK;
    if (!state.feedbackAdminToken || !feedback || !feedback.adminList || !isFeedbackConfigured()) {
      return;
    }

    state.feedbackAdminLoading = true;
    state.feedbackAdminStatus = "syncing";
    state.feedbackAdminMessage = "Loading requests...";
    renderFeedbackAdmin();

    try {
      var status = els.feedbackAdminFilter ? els.feedbackAdminFilter.value : "all";
      var result = await feedback.adminList(state.feedbackAdminToken, status);
      state.feedbackItems = Array.isArray(result.items) ? result.items : [];
      state.feedbackAdminStatus = "synced";
      state.feedbackAdminMessage = state.feedbackItems.length + " request" + (state.feedbackItems.length === 1 ? "" : "s") + " loaded.";
    } catch (error) {
      var loadError = normalizeFeedbackAdminError(error, "Could not load requests.");
      state.feedbackItems = [];
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = loadError.message;
      if (loadError.expired) {
        clearFeedbackAdminToken();
      }
    }

    state.feedbackAdminLoading = false;
    renderFeedbackAdmin();
  }

  function renderFeedbackItems() {
    if (!els.feedbackAdminList) return;
    if (state.feedbackAdminLoading) {
      els.feedbackAdminList.innerHTML = "<div class=\"empty-state\">Loading requests...</div>";
      return;
    }
    if (!state.feedbackItems.length) {
      els.feedbackAdminList.innerHTML = "<div class=\"empty-state\">No requests match this filter.</div>";
      return;
    }

    els.feedbackAdminList.innerHTML = state.feedbackItems.map(renderFeedbackItem).join("");
    els.feedbackAdminList.querySelectorAll("[data-feedback-save]").forEach(function (button) {
      button.addEventListener("click", function () {
        saveFeedbackItem(button);
      });
    });
  }

  function renderFeedbackItem(item) {
    var id = item._id || item.id || "";
    var contact = item.contact ? "<div><strong>Contact</strong><span>" + escapeHtml(item.contact) + "</span></div>" : "";
    var page = item.pageUrl ? "<div><strong>Page</strong><span>" + escapeHtml(item.pageUrl) + "</span></div>" : "";
    var browser = item.userAgent ? "<details><summary>Browser</summary><p>" + escapeHtml(item.userAgent) + "</p></details>" : "";

    return [
      "<article class=\"feedback-item\" data-feedback-id=\"" + escapeHtml(id) + "\">",
      "<div class=\"feedback-item-head\">",
      "<div>",
      "<div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(item.type === "feature" ? "Feature" : "Bug") + "</span><span class=\"tag\">" + escapeHtml(statusLabel(item.status)) + "</span></div>",
      "<h3>" + escapeHtml(item.title || "Untitled request") + "</h3>",
      "<p>" + escapeHtml(formatDateTime(item.createdAt)) + "</p>",
      "</div>",
      "<label>Status<select data-feedback-status>" + feedbackStatusOptions(item.status) + "</select></label>",
      "</div>",
      "<p class=\"feedback-details\">" + escapeHtml(item.details || "") + "</p>",
      contact || page ? "<div class=\"feedback-meta-grid\">" + contact + page + "</div>" : "",
      browser,
      "<label>Admin note<textarea data-feedback-note placeholder=\"Private note for this request\">" + escapeHtml(item.adminNote || "") + "</textarea></label>",
      "<div class=\"button-row\"><button class=\"secondary\" type=\"button\" data-feedback-save>Save</button></div>",
      "</article>"
    ].join("");
  }

  function feedbackStatusOptions(selected) {
    return ["new", "reviewing", "planned", "done", "closed"].map(function (status) {
      return "<option value=\"" + status + "\"" + (status === selected ? " selected" : "") + ">" + escapeHtml(statusLabel(status)) + "</option>";
    }).join("");
  }

  async function saveFeedbackItem(button) {
    var feedback = window.STUDY_FEEDBACK;
    var itemNode = button.closest("[data-feedback-id]");
    if (!feedback || !feedback.adminUpdate || !itemNode || !state.feedbackAdminToken) return;

    var id = itemNode.getAttribute("data-feedback-id");
    var statusNode = itemNode.querySelector("[data-feedback-status]");
    var noteNode = itemNode.querySelector("[data-feedback-note]");
    button.disabled = true;
    state.feedbackAdminStatus = "syncing";
    state.feedbackAdminMessage = "Saving request...";
    renderFeedbackMessage(els.feedbackAdminStatus, state.feedbackAdminStatus, state.feedbackAdminMessage);

    try {
      await feedback.adminUpdate(state.feedbackAdminToken, id, {
        status: statusNode ? statusNode.value : "new",
        adminNote: noteNode ? noteNode.value : ""
      });
      state.feedbackAdminStatus = "synced";
      state.feedbackAdminMessage = "Request saved.";
      await loadFeedbackItems();
    } catch (error) {
      var saveError = normalizeFeedbackAdminError(error, "Could not save request.");
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = saveError.message;
      if (saveError.expired) {
        clearFeedbackAdminToken();
      }
      button.disabled = false;
      renderFeedbackAdmin();
    }
  }

  function currentFeedbackLocation() {
    var active = document.querySelector(".view.is-active");
    return (active && active.id ? active.id : "app") + " / " + window.location.href.split("#")[0];
  }

  function statusLabel(status) {
    var labels = {
      new: "New",
      reviewing: "Reviewing",
      planned: "Planned",
      done: "Done",
      closed: "Closed"
    };
    return labels[status] || "New";
  }

  function formatDateTime(value) {
    if (!value) return "";
    var date = typeof value === "number" ? new Date(value) : new Date(String(value));
    if (isNaN(date.getTime())) return String(value);
    return date.toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function generateShareCode() {
    var random = Math.random().toString(36).slice(2, 8);
    return "lmft-" + random;
  }

  function statCard(value, label) {
    return "<div class=\"stat-card\"><strong>" + escapeHtml(String(value)) + "</strong><span>" + escapeHtml(label) + "</span></div>";
  }

  function renderGuide() {
    var filter = els.guideFilter.value || "all";
    var query = (els.guideSearch.value || "").trim();
    var tokens = normalizeText(query).split(" ").filter(Boolean);
    var sections = DATA.studySections.filter(function (section) {
      var text = normalizeText(getGuideSearchText(section));
      var queryMatch = tokens.length === 0 || tokens.every(function (token) {
        return text.indexOf(token) !== -1;
      });
      return (filter === "all" || section.model === filter) && queryMatch;
    });
    var filterCount = DATA.studySections.filter(function (section) {
      return filter === "all" || section.model === filter;
    }).length;

    if (els.guideResults) {
      var searchText = query ? " for \"" + escapeHtml(query) + "\"" : "";
      els.guideResults.innerHTML = "<strong>" + sections.length + "</strong> of " + filterCount + " study sections" + searchText + ".";
    }

    if (sections.length === 0) {
      els.guideGrid.innerHTML = "<div class=\"empty-state\">No matching study sections.</div>";
      return;
    }

    els.guideGrid.innerHTML = sections.map(function (section) {
      var matchSnippet = tokens.length ? renderGuideMatchSnippet(section, tokens) : "";
      return [
        "<article class=\"guide-card guide-card-wide\">",
        "<div class=\"guide-card-head\">",
        "<div><h3>" + highlightText(section.title, tokens) + "</h3><div class=\"tag-row\"><span class=\"tag\">" + escapeHtml(section.model) + "</span></div></div>",
        matchSnippet,
        "</div>",
        "<div class=\"guide-body\">",
        "<div class=\"guide-column guide-main\"><h4>Core Idea</h4><p>" + highlightText(section.overview, tokens) + "</p><h4>Therapist Role</h4><p>" + highlightText(section.therapistRole, tokens) + "</p></div>",
        "<div class=\"guide-column guide-side\">" + guideListBlock("Goals", section.goals, tokens) + guideListBlock("Interventions", section.interventions, tokens) + "</div>",
        "</div>",
        "<div class=\"guide-terms\"><h4>Key Terms</h4><div class=\"term-list term-list-compact\">" + section.keyTerms.map(function (term) {
          return "<div class=\"term term-compact\"><strong>" + highlightText(term.term, tokens) + "</strong><span>" + highlightText(term.definition, tokens) + "</span></div>";
        }).join("") + "</div></div>",
        "<div class=\"guide-study-strip\"><div class=\"guide-exam-watch\"><strong>Exam watch:</strong> " + highlightText(section.examWatch, tokens) + "</div>" + renderMicroDrill(section, tokens) + "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function guideListBlock(title, items, tokens) {
    return "<div class=\"guide-list-block\"><h4>" + escapeHtml(title) + "</h4>" + list(items, tokens) + "</div>";
  }

  function renderMicroDrill(section, tokens) {
    var firstTerm = section.keyTerms && section.keyTerms.length ? section.keyTerms[0].term : section.title;
    var prompt = section.microDrill || "Quick recall: what clue tells you this is " + section.model + " or " + firstTerm + "?";
    var answer = section.microAnswer || section.examWatch || "Use the model language, safety priority, and next-step clue from this card.";
    return [
      "<details class=\"micro-drill\">",
      "<summary>" + highlightText(prompt, tokens || []) + "</summary>",
      "<div><strong>Answer:</strong> " + highlightText(answer, tokens || []) + "</div>",
      "</details>"
    ].join("");
  }

  function getGuideSearchText(section) {
    return [
      section.model,
      section.title,
      section.overview,
      section.therapistRole,
      section.examWatch,
      section.goals.join(" "),
      section.interventions.join(" "),
      section.keyTerms.map(function (term) { return term.term + " " + term.definition; }).join(" ")
    ].join(" ");
  }

  function renderGuideMatchSnippet(section, tokens) {
    var candidates = [
      { label: "Overview", text: section.overview },
      { label: "Therapist role", text: section.therapistRole },
      { label: "Exam watch", text: section.examWatch }
    ];
    section.goals.forEach(function (goal) {
      candidates.push({ label: "Goal", text: goal });
    });
    section.interventions.forEach(function (intervention) {
      candidates.push({ label: "Intervention", text: intervention });
    });
    section.keyTerms.forEach(function (term) {
      candidates.push({ label: "Key term", text: term.term + ": " + term.definition });
    });

    var matches = candidates.filter(function (candidate) {
      var text = normalizeText(candidate.text);
      return tokens.some(function (token) { return text.indexOf(token) !== -1; });
    }).slice(0, 2);

    if (!matches.length) return "";
    return "<div class=\"match-snippet\"><strong>Matched:</strong> " + matches.map(function (match) {
      return "<span>" + escapeHtml(match.label) + ": " + highlightText(match.text, tokens) + "</span>";
    }).join("") + "</div>";
  }

  function list(items, tokens) {
    return "<ul>" + items.map(function (item) { return "<li>" + highlightText(item, tokens || []) + "</li>"; }).join("") + "</ul>";
  }

  function normalizeText(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  function highlightText(value, tokens) {
    var escaped = escapeHtml(value);
    var cleanTokens = unique((tokens || []).filter(function (token) { return token.length > 1; }));
    cleanTokens.forEach(function (token) {
      var escapedToken = escapeRegExp(token);
      escaped = escaped.replace(new RegExp("(" + escapedToken + ")", "gi"), "<mark>$1</mark>");
    });
    return escaped;
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function renderQuizPlaceholder() {
    var profile = getProfile();
    if (profile && profile.settings) {
      if (els.quizMode) setSelectIfOption(els.quizMode, profile.settings.quizMode || "practice");
      els.quizDifficulty.value = profile.settings.quizDifficulty || "mixed";
      els.quizCount.value = String(profile.settings.quizCount || 10);
    }
    if (state.quiz) {
      renderQuiz();
      return;
    }
    renderQuizAvailability();
    els.quizCard.innerHTML = "<div class=\"empty-state\">Choose settings and start a questionnaire.</div>";
  }

  function getQuizMode() {
    return els.quizMode ? els.quizMode.value : "practice";
  }

  function getQuizPool() {
    var mode = getQuizMode();
    var difficulty = els.quizDifficulty.value;
    var topic = els.quizTopic.value;
    return DATA.questions.filter(function (question) {
      var difficultyMatch = difficulty === "mixed" || question.difficulty === difficulty;
      var topicMatch = mode === "timed" || mode === "review" || topic === "all" || question.model === topic;
      return difficultyMatch && topicMatch;
    });
  }

  function getRequestedQuizCount(poolLength) {
    if (els.quizCount.value === "all") {
      return poolLength;
    }

    var requested = Number(els.quizCount.value);
    return Number.isFinite(requested) && requested > 0 ? requested : 10;
  }

  function renderQuizAvailability() {
    if (state.quiz) return;
    var profile = getProfile();
    var mode = getQuizMode();
    var pool = mode === "review" ? getDueReviewQuestions(profile) : getQuizPool();
    var requested = getRequestedQuizCount(pool.length);
    var message = "";
    if (mode === "review") {
      message = pool.length
        ? Math.min(requested, pool.length) + " due spaced-review question" + (Math.min(requested, pool.length) === 1 ? "" : "s") + " will be used."
        : "No spaced-review questions are due. Start a mixed set to create review items.";
    } else if (mode === "timed") {
      message = "Timed mixed mode interleaves topics and saves feedback until the end.";
    } else {
      message = els.quizCount.value === "all"
        ? pool.length + " matching questions will be used."
        : pool.length >= requested
          ? requested + " of " + pool.length + " matching questions will be used."
          : "Only " + pool.length + " matching questions are available for this filter.";
    }
    els.quizStatus.innerHTML = "<div class=\"quiz-availability\">" + escapeHtml(message) + "</div>";
  }

  function startQuiz() {
    var profile = getProfile();
    var mode = getQuizMode();
    var difficulty = els.quizDifficulty.value;
    var pool = mode === "review" ? getDueReviewQuestions(profile) : getQuizPool();
    var count = getRequestedQuizCount(pool.length);

    clearQuizTimer();
    if (mode === "review" && pool.length === 0) {
      pool = getQuizPool();
      mode = "practice";
      if (els.quizMode) els.quizMode.value = "practice";
    }
    pool = pickQuizQuestions(pool, count, mode).map(prepareQuizQuestion);
    profile.settings.quizMode = mode;
    profile.settings.quizDifficulty = difficulty;
    profile.settings.quizCount = els.quizCount.value;
    saveProfiles();

    var timed = mode === "timed";
    state.quiz = {
      mode: mode,
      isTimed: timed,
      timeLimitSeconds: timed ? Math.max(300, pool.length * 80) : 0,
      endsAt: timed ? Date.now() + Math.max(300, pool.length * 80) * 1000 : 0,
      deferFeedback: timed,
      timerId: null,
      questions: pool,
      index: 0,
      answers: [],
      selectedIndex: null,
      submitted: false,
      hintShown: false,
      justifications: {},
      startedAt: new Date().toISOString()
    };
    if (timed) {
      state.quiz.timerId = window.setInterval(updateQuizTimer, 1000);
    }
    renderQuiz();
  }

  function pickQuizQuestions(pool, count, mode) {
    var limit = Math.min(count, pool.length);
    if (mode === "timed" || mode === "review" || els.quizTopic.value === "all") {
      return interleaveQuestions(pool).slice(0, limit);
    }
    return shuffle(pool).slice(0, limit);
  }

  function interleaveQuestions(pool) {
    var grouped = {};
    shuffle(pool).forEach(function (question) {
      var key = question.model || "Other";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(question);
    });
    var keys = Object.keys(grouped).sort();
    var ordered = [];
    while (keys.some(function (key) { return grouped[key].length > 0; })) {
      keys.forEach(function (key) {
        if (grouped[key].length) ordered.push(grouped[key].shift());
      });
    }
    return ordered;
  }

  function prepareQuizQuestion(question) {
    var order = shuffle(question.choices.map(function (_, index) { return index; }));
    var shuffledChoices = order.map(function (originalIndex) {
      return question.choices[originalIndex];
    });
    var shuffledWrong = order.map(function (originalIndex) {
      return question.wrongExplanations[originalIndex] || "";
    });
    return {
      id: question.id,
      model: question.model,
      domain: question.domain || domainForQuestion(question),
      topic: question.topic,
      difficulty: question.difficulty,
      prompt: question.prompt,
      hint: question.hint,
      explanation: question.explanation,
      choices: shuffledChoices,
      wrongExplanations: shuffledWrong,
      answerIndex: order.indexOf(question.answerIndex)
    };
  }

  function renderQuiz() {
    var quiz = state.quiz;
    if (!quiz || quiz.questions.length === 0) {
      clearQuizTimer();
      els.quizStatus.innerHTML = "";
      els.quizCard.innerHTML = "<div class=\"empty-state\">No questions match those settings.</div>";
      return;
    }

    if (quiz.index >= quiz.questions.length) {
      finishQuiz();
      return;
    }

    var question = quiz.questions[quiz.index];
    var progress = Math.round((quiz.index / quiz.questions.length) * 100);
    els.quizStatus.innerHTML = [
      "<div class=\"progress-bar\" aria-label=\"Quiz progress\"><span style=\"width:" + progress + "%\"></span></div>",
      "<p>" + (quiz.index + 1) + " of " + quiz.questions.length + (quiz.isTimed ? " <span class=\"quiz-timer\" id=\"quizTimer\">" + escapeHtml(formatRemainingTime(quiz)) + "</span>" : "") + "</p>"
    ].join("");

    var choices = question.choices.map(function (choice, index) {
      var classNames = ["choice"];
      if (quiz.selectedIndex === index) classNames.push("is-selected");
      if (!quiz.deferFeedback && quiz.submitted && index === question.answerIndex) classNames.push("is-correct");
      if (!quiz.deferFeedback && quiz.submitted && quiz.selectedIndex === index && index !== question.answerIndex) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"quizChoice\" value=\"" + index + "\"" + (quiz.selectedIndex === index ? " checked" : "") + (!quiz.deferFeedback && quiz.submitted ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
    }).join("");

    var feedback = "";
    if (quiz.hintShown && !quiz.submitted) {
      feedback = "<div class=\"feedback\"><strong>Clue:</strong> " + escapeHtml(question.hint) + "</div>";
    }
    if (!quiz.deferFeedback && quiz.submitted) {
      var answer = getQuizAnswer(quiz, question.id);
      feedback = renderQuizFeedback(answer, question, true);
    }

    var needsJustification = false;
    if (!quiz.deferFeedback && quiz.submitted) {
      var currentAnswer = getQuizAnswer(quiz, question.id);
      needsJustification = currentAnswer && !currentAnswer.correct && !(quiz.justifications[question.id] || "").trim();
    }

    els.quizCard.innerHTML = [
      "<div class=\"question-meta\"><span class=\"tag\">" + escapeHtml(question.model) + "</span><span class=\"tag\">" + escapeHtml(question.domain) + "</span><span class=\"tag\">" + escapeHtml(question.topic) + "</span><span class=\"tag\">" + escapeHtml(question.difficulty) + "</span></div>",
      "<h3>" + escapeHtml(question.prompt) + "</h3>",
      quiz.deferFeedback ? "<div class=\"feedback\"><strong>Timed mode:</strong> choose the best answer. Explanations unlock after the set.</div>" : "",
      "<div class=\"choice-list\">" + choices + "</div>",
      feedback,
      "<div class=\"button-row\">",
      quiz.deferFeedback ? "<button type=\"button\" id=\"quizTimedNext\">" + (quiz.index === quiz.questions.length - 1 ? "Finish" : "Save & Next") + "</button>" : "",
      !quiz.deferFeedback && !quiz.submitted ? "<button type=\"button\" id=\"quizSubmit\">Submit</button>" : "",
      !quiz.deferFeedback && quiz.submitted ? "<button type=\"button\" id=\"quizNext\"" + (needsJustification ? " disabled" : "") + ">" + (quiz.index === quiz.questions.length - 1 ? "Finish" : "Next") + "</button>" : "",
      !quiz.deferFeedback && !quiz.submitted && !quiz.hintShown ? "<button class=\"secondary\" type=\"button\" id=\"quizHint\">Hint</button>" : "",
      "<button class=\"secondary\" type=\"button\" id=\"quizRestart\">Restart</button>",
      "</div>"
    ].join("");

    els.quizCard.querySelectorAll("input[name=\"quizChoice\"]").forEach(function (input) {
      input.addEventListener("change", function () {
        quiz.selectedIndex = Number(input.value);
        renderQuiz();
      });
    });

    var justification = document.getElementById("missJustification");
    if (justification) {
      justification.addEventListener("input", function () {
        quiz.justifications[question.id] = justification.value;
        var answer = getQuizAnswer(quiz, question.id);
        if (answer) answer.justification = justification.value;
        var nextButton = document.getElementById("quizNext");
        if (nextButton) nextButton.disabled = justification.value.trim().length < 8;
      });
    }

    var submit = document.getElementById("quizSubmit");
    if (submit) {
      submit.addEventListener("click", function () {
        if (quiz.selectedIndex === null) return;
        quiz.submitted = true;
        recordQuizAnswer(quiz, question, quiz.selectedIndex);
        renderQuiz();
      });
    }

    var timedNext = document.getElementById("quizTimedNext");
    if (timedNext) {
      timedNext.addEventListener("click", function () {
        if (quiz.selectedIndex === null) return;
        recordQuizAnswer(quiz, question, quiz.selectedIndex);
        moveToNextQuestion(quiz);
      });
    }

    var hint = document.getElementById("quizHint");
    if (hint) {
      hint.addEventListener("click", function () {
        quiz.hintShown = true;
        renderQuiz();
      });
    }

    var next = document.getElementById("quizNext");
    if (next) {
      next.addEventListener("click", function () {
        var answer = getQuizAnswer(quiz, question.id);
        if (answer && !answer.correct && !(answer.justification || "").trim()) return;
        moveToNextQuestion(quiz);
      });
    }

    var restart = document.getElementById("quizRestart");
    if (restart) {
      restart.addEventListener("click", startQuiz);
    }
    updateQuizTimer();
  }

  function recordQuizAnswer(quiz, question, selectedIndex) {
    var answer = {
      questionId: question.id,
      model: question.model,
      domain: question.domain,
      topic: question.topic,
      difficulty: question.difficulty,
      prompt: question.prompt,
      correct: selectedIndex === question.answerIndex,
      selectedIndex: selectedIndex,
      selectedChoice: question.choices[selectedIndex],
      correctChoice: question.choices[question.answerIndex],
      clue: question.hint,
      whyBest: question.explanation,
      whyTempting: selectedIndex === question.answerIndex ? "" : question.wrongExplanations[selectedIndex] || "This answer sounds plausible, but it misses the main stem clue.",
      wrongNotes: buildWrongAnswerNotes(question),
      hintUsed: !!quiz.hintShown,
      justification: quiz.justifications[question.id] || "",
      answeredAt: new Date().toISOString()
    };
    quiz.answers.push(answer);
    return answer;
  }

  function getQuizAnswer(quiz, questionId) {
    return quiz.answers.find(function (answer) { return answer.questionId === questionId; });
  }

  function moveToNextQuestion(quiz) {
    quiz.index += 1;
    quiz.selectedIndex = null;
    quiz.submitted = false;
    quiz.hintShown = false;
    renderQuiz();
  }

  function buildWrongAnswerNotes(question) {
    return question.choices.map(function (choice, index) {
      if (index === question.answerIndex) return null;
      return {
        choice: choice,
        note: question.wrongExplanations[index] || "This choice is less precise than the model, safety, or next-step clue."
      };
    }).filter(Boolean);
  }

  function renderQuizFeedback(answer, question, includeJustification) {
    if (!answer) return "";
    var status = answer.correct ? "Correct." : "Not quite.";
    var wrongNotes = answer.wrongNotes && answer.wrongNotes.length
      ? "<details class=\"distractor-notes\"><summary>Wrong-answer notes</summary><ul>" + answer.wrongNotes.map(function (item) {
        return "<li><strong>" + escapeHtml(item.choice) + ":</strong> " + escapeHtml(item.note) + "</li>";
      }).join("") + "</ul></details>"
      : "";
    var justification = includeJustification && !answer.correct ? [
      "<label class=\"justification-label\" for=\"missJustification\">What clue did you miss?</label>",
      "<textarea class=\"justification-box\" id=\"missJustification\" placeholder=\"Name the stem clue and why this is not " + escapeHtml(answer.model) + ", EFT, Bowen, or ethics-first as appropriate.\">" + escapeHtml(answer.justification || "") + "</textarea>",
      "<div class=\"fine-print-left\">Write at least a short sentence before moving on.</div>"
    ].join("") : "";

    return [
      "<div class=\"feedback " + (answer.correct ? "good" : "needs-work") + "\">",
      "<strong>" + status + "</strong>",
      "<div class=\"explanation-grid\">",
      "<div><span>Why the best answer wins</span><p>" + escapeHtml(answer.whyBest) + "</p></div>",
      "<div><span>Clue in the question</span><p>" + escapeHtml(answer.clue || question.hint || "Look for the model, risk, consent, and next-step signal in the stem.") + "</p></div>",
      "<div><span>Your answer</span><p>" + escapeHtml(answer.selectedChoice || "No selection") + "</p></div>",
      "<div><span>Review next</span><p>" + escapeHtml(reviewNextText(answer)) + "</p></div>",
      "</div>",
      answer.correct ? "" : "<p><strong>Why your choice was tempting:</strong> " + escapeHtml(answer.whyTempting) + "</p>",
      wrongNotes,
      justification,
      "</div>"
    ].join("");
  }

  function finishQuiz() {
    var profile = getProfile();
    var quiz = state.quiz;
    clearQuizTimer();
    completeUnansweredQuestions(quiz);
    var correct = quiz.answers.filter(function (answer) { return answer.correct; }).length;
    var total = quiz.questions.length;
    var percent = Math.round((correct / total) * 100);
    var missed = quiz.answers.filter(function (answer) { return !answer.correct; });
    var shaky = quiz.answers.filter(function (answer) { return answer.correct && answer.hintUsed; });

    quiz.answers.forEach(function (answer) {
      if (quiz.mode === "review" || !answer.correct || answer.hintUsed) {
        updateReviewFromQuizAnswer(profile, answer);
      }
    });

    profile.quizAttempts.unshift({
      date: new Date().toISOString(),
      mode: quiz.mode,
      timed: quiz.isTimed,
      scorePercent: percent,
      correct: correct,
      total: total,
      answers: quiz.answers,
      missed: missed,
      shaky: shaky
    });
    profile.quizAttempts = profile.quizAttempts.slice(0, 40);
    saveProfiles();

    els.quizStatus.innerHTML = "<div class=\"progress-bar\" aria-label=\"Quiz progress\"><span style=\"width:100%\"></span></div>";
    els.quizCard.innerHTML = [
      "<h3>" + (quiz.isTimed ? "Timed Mixed Review" : "Questionnaire Complete") + "</h3>",
      "<p>You scored <strong>" + percent + "%</strong> (" + correct + " of " + total + ").</p>",
      shaky.length ? "<div class=\"feedback\"><strong>Shaky correct:</strong> " + shaky.length + " hinted item" + (shaky.length === 1 ? "" : "s") + " were added to spaced review.</div>" : "",
      missed.length ? "<div class=\"feedback needs-work\"><strong>Review:</strong> " + escapeHtml(unique(missed.map(function (item) { return item.topic; })).join(", ")) + "</div>" : "<div class=\"feedback good\"><strong>Clean pass.</strong> No missed topics in this set.</div>",
      missed.length ? "<div class=\"review-list\">" + missed.map(function (answer) { return renderQuizFeedback(answer, answer, false); }).join("") + "</div>" : "",
      "<div class=\"button-row\"><button type=\"button\" id=\"quizAgain\">New Set</button><button class=\"secondary\" type=\"button\" data-jump-view=\"progress\">Progress</button></div>"
    ].join("");
    state.quiz = null;
    renderDashboard();
    renderProgress();

    document.getElementById("quizAgain").addEventListener("click", startQuiz);
    els.quizCard.querySelector("[data-jump-view]").addEventListener("click", function () {
      showView("progress");
    });
  }

  function completeUnansweredQuestions(quiz) {
    if (!quiz || !quiz.isTimed) return;
    quiz.questions.forEach(function (question) {
      if (getQuizAnswer(quiz, question.id)) return;
      quiz.answers.push({
        questionId: question.id,
        model: question.model,
        domain: question.domain,
        topic: question.topic,
        difficulty: question.difficulty,
        prompt: question.prompt,
        correct: false,
        selectedIndex: null,
        selectedChoice: "No answer",
        correctChoice: question.choices[question.answerIndex],
        clue: question.hint,
        whyBest: question.explanation,
        whyTempting: "No answer was saved before time expired.",
        wrongNotes: buildWrongAnswerNotes(question),
        hintUsed: false,
        justification: "",
        answeredAt: new Date().toISOString()
      });
    });
  }

  function clearQuizTimer() {
    if (state.quiz && state.quiz.timerId) {
      window.clearInterval(state.quiz.timerId);
      state.quiz.timerId = null;
    }
  }

  function updateQuizTimer() {
    var quiz = state.quiz;
    if (!quiz || !quiz.isTimed) return;
    var timer = document.getElementById("quizTimer");
    if (timer) timer.textContent = formatRemainingTime(quiz);
    if (quiz.endsAt && quiz.endsAt <= Date.now()) {
      finishQuiz();
    }
  }

  function formatRemainingTime(quiz) {
    var remaining = Math.max(0, Math.ceil((quiz.endsAt - Date.now()) / 1000));
    var minutes = Math.floor(remaining / 60);
    var seconds = remaining % 60;
    return minutes + ":" + String(seconds).padStart(2, "0");
  }

  function reviewNextText(answer) {
    var topic = answer.topic || "this concept";
    var model = answer.model || "the relevant model";
    if (answer.domain) {
      return answer.domain + ": review " + model + " / " + topic + ", then answer a similar item from spaced review.";
    }
    return "Review " + model + " / " + topic + ", then answer a similar item from spaced review.";
  }

  function domainForQuestion(question) {
    if (question.domain) return question.domain;
    if (question.model === "Ethics") return "Ethics / legal standards";
    if (question.model === "Systemic Roles") return "Assessment and treatment process";
    if (question.topic && /risk|crisis|safety|mandated|abuse/i.test(question.topic)) return "Crisis and risk";
    return "Systemic therapy models";
  }

  function renderScenarioPlaceholder() {
    var profile = getProfile();
    if (profile && profile.settings) {
      els.scenarioDifficulty.value = profile.settings.scenarioDifficulty || "mixed";
      els.scenarioMode.value = profile.settings.scenarioMode || "combined";
    }
    if (state.scenario) {
      renderScenario();
      return;
    }
    els.scenarioCard.innerHTML = "<div class=\"empty-state\">Choose settings and load a random case.</div>";
    els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
  }

  function getScenarioPool() {
    var difficulty = els.scenarioDifficulty.value;
    var errorMode = els.scenarioMode.value === "error";
    return DATA.scenarios.filter(function (scenario) {
      var difficultyMatch = difficulty === "mixed" || scenario.difficulty === difficulty;
      var typeMatch = errorMode ? !!scenario.errorCase : !scenario.errorCase;
      return difficultyMatch && typeMatch;
    });
  }

  function renderScenarioLibrary() {
    var pool = getScenarioPool();
    var selected = els.scenarioCase.value || "random";
    els.scenarioCase.innerHTML = "<option value=\"random\">Random case</option>" + pool.map(function (scenario) {
      return "<option value=\"" + escapeHtml(scenario.id) + "\">" + escapeHtml(scenario.title) + "</option>";
    }).join("");
    els.scenarioCase.value = pool.some(function (scenario) { return scenario.id === selected; }) ? selected : "random";

    if (!pool.length) {
      els.scenarioLibrary.innerHTML = "<div class=\"empty-state\">No cases match this difficulty.</div>";
      return;
    }

    els.scenarioLibrary.innerHTML = [
      "<div class=\"case-library-head\"><strong>" + pool.length + " real life examples available</strong><span>Pick one directly or use Random Case.</span></div>",
      "<div class=\"case-library-grid\">",
      pool.map(function (scenario) {
        var focus = scenario.focus ? scenario.focus.join(", ") : scenario.clientType;
        return [
          "<button class=\"case-tile\" type=\"button\" data-scenario-id=\"" + escapeHtml(scenario.id) + "\">",
          "<span>" + escapeHtml(scenario.difficulty) + " / " + escapeHtml(scenario.clientType) + "</span>",
          "<strong>" + escapeHtml(scenario.title) + "</strong>",
          "<em>" + escapeHtml(focus) + "</em>",
          "</button>"
        ].join("");
      }).join(""),
      "</div>"
    ].join("");

    els.scenarioLibrary.querySelectorAll("[data-scenario-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        startScenario(button.getAttribute("data-scenario-id"));
      });
    });
  }

  function startScenario(scenarioId) {
    var profile = getProfile();
    var mode = els.scenarioMode.value;
    var pool = getScenarioPool();
    var selectedId = scenarioId || els.scenarioCase.value;
    var scenario = selectedId && selectedId !== "random"
      ? pool.find(function (item) { return item.id === selectedId; })
      : null;

    if (!scenario && pool.length > 1 && state.lastScenarioId) {
      pool = pool.filter(function (scenario) { return scenario.id !== state.lastScenarioId; });
    }
    if (!scenario) {
      scenario = shuffle(pool)[0];
    }

    profile.settings.scenarioDifficulty = els.scenarioDifficulty.value;
    profile.settings.scenarioMode = mode;
    saveProfiles();
    if (scenario) {
      els.scenarioCase.value = scenario.id;
    }

    state.scenario = {
      item: scenario,
      mode: mode,
      choiceOrders: scenario ? buildScenarioChoiceOrders(scenario) : {},
      selections: {},
      reflection: "",
      scored: false,
      result: null,
      feedbackGuide: null,
      startedAt: new Date().toISOString()
    };
    state.lastScenarioId = scenario ? scenario.id : "";
    renderScenario();
  }

  function buildScenarioChoiceOrders(scenario) {
    var orders = {};
    if (!scenario || !scenario.choices) return orders;
    Object.keys(scenario.choices).forEach(function (category) {
      orders[category] = shuffle(scenario.choices[category].map(function (_, index) { return index; }));
    });
    return orders;
  }

  function renderCaseDetails(scenario) {
    var blocks = [];
    var intakeNotes = Array.isArray(scenario.intakeNotes) && scenario.intakeNotes.length ? scenario.intakeNotes : [
      scenario.presentingProblem,
      "Use the case details to identify the main relational pattern.",
      "Check safety, consent, alliance, and scope before choosing a technique."
    ];
    var clinicalQuestion = scenario.clinicalQuestion || "What is the best next clinical move for this client system?";
    var redFlags = Array.isArray(scenario.redFlags) && scenario.redFlags.length ? scenario.redFlags : [
      "Do not skip risk, consent, or confidentiality concerns.",
      "Avoid blaming one person for a systemic pattern."
    ];

    if (intakeNotes.length) {
      blocks.push("<div class=\"case-detail\"><strong>What you know</strong>" + list(intakeNotes) + "</div>");
    }
    if (clinicalQuestion) {
      blocks.push("<div class=\"case-detail\"><strong>Your clinical question</strong><p>" + escapeHtml(clinicalQuestion) + "</p></div>");
    }
    if (redFlags.length) {
      blocks.push("<div class=\"case-detail alert\"><strong>Risk scan</strong>" + list(redFlags) + "</div>");
    }
    return blocks.length ? "<div class=\"case-detail-grid\">" + blocks.join("") + "</div>" : "";
  }

  function renderReflectionCoach(scenario) {
    var prompts = scenario.reflectionPrompts || [
      "What is the main systemic pattern?",
      "What should happen before any model-specific intervention?",
      "What would you do next in session?"
    ];
    return "<div class=\"reflection-coach\"><strong>Write toward these points</strong>" + list(prompts) + "</div>";
  }

  function renderScenario() {
    var session = state.scenario;
    if (!session || !session.item) {
      els.scenarioCard.innerHTML = "<div class=\"empty-state\">No scenarios match those settings.</div>";
      els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
      return;
    }
    var scenario = session.item;
    if (scenario.errorCase || session.mode === "error") {
      renderErrorScenario(session, scenario);
      return;
    }
    var showGuided = session.mode === "guided" || session.mode === "combined";
    var showWritten = session.mode === "written" || session.mode === "combined";

    var caseDetailsHtml = renderCaseDetails(scenario);
    var guidedHtml = showGuided ? Object.keys(scenario.choices).map(function (category) {
      var label = labelForCategory(category);
      var order = session.choiceOrders[category] || scenario.choices[category].map(function (_, index) { return index; });
      var choices = order.map(function (originalIndex) {
        var choice = scenario.choices[category][originalIndex];
        var selected = session.selections[category] === originalIndex;
        var classNames = ["choice"];
        if (selected) classNames.push("is-selected");
        if (session.scored && scenario.idealSelections[category] === originalIndex) classNames.push("is-correct");
        if (session.scored && selected && scenario.idealSelections[category] !== originalIndex) classNames.push("is-wrong");
        return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"scenario-" + escapeHtml(category) + "\" value=\"" + originalIndex + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
      }).join("");
      return "<fieldset class=\"scenario-group\"><legend>" + escapeHtml(label) + "</legend><div class=\"choice-list\">" + choices + "</div></fieldset>";
    }).join("") : "";

    var writtenHtml = showWritten ? [
      renderReflectionCoach(scenario),
      "<label for=\"reflectionText\">Written Reflection</label>",
      "<textarea id=\"reflectionText\" placeholder=\"Write your conceptualization, next step, and intervention plan.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.reflection) + "</textarea>"
    ].join("") : "";

    els.scenarioCard.innerHTML = [
      "<div class=\"case-meta\"><span class=\"tag\">" + escapeHtml(scenario.clientType) + "</span><span class=\"tag\">" + escapeHtml(scenario.difficulty) + "</span>" + (scenario.focus ? scenario.focus.map(function (item) { return "<span class=\"tag\">" + escapeHtml(item) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(scenario.title) + "</h3>",
      "<p><strong>Presenting problem:</strong> " + escapeHtml(scenario.presentingProblem) + "</p>",
      "<p>" + escapeHtml(scenario.prompt) + "</p>",
      caseDetailsHtml,
      !session.scored && session.feedbackGuide ? renderScenarioRedoGuide(session.feedbackGuide) : "",
      guidedHtml,
      writtenHtml,
      session.scored ? scenarioFeedback(session.result, scenario) : "",
      "<div class=\"button-row\">",
      session.scored ? "<button type=\"button\" id=\"redoScenario\">Redo With Feedback</button><button type=\"button\" id=\"newScenario\">New Random Case</button>" : "<button type=\"button\" id=\"scoreScenario\">Score Case</button>",
      session.scored ? "" : "<button class=\"secondary\" type=\"button\" id=\"scenarioReset\">Reset Case</button>",
      "</div>"
    ].join("");

    if (showGuided && !session.scored) {
      Object.keys(scenario.choices).forEach(function (category) {
        els.scenarioCard.querySelectorAll("input[name=\"scenario-" + category + "\"]").forEach(function (input) {
          input.addEventListener("change", function () {
            session.selections[category] = Number(input.value);
            renderScenario();
          });
        });
      });
    }

    var reflection = document.getElementById("reflectionText");
    if (reflection && !session.scored) {
      reflection.addEventListener("input", function () {
        session.reflection = reflection.value;
      });
    }

    var score = document.getElementById("scoreScenario");
    if (score) {
      score.addEventListener("click", scoreScenario);
    }

    var reset = document.getElementById("scenarioReset");
    if (reset) {
      reset.addEventListener("click", function () {
        startScenario();
      });
    }

    var next = document.getElementById("newScenario");
    if (next) {
      next.addEventListener("click", startScenario);
    }

    var redo = document.getElementById("redoScenario");
    if (redo) {
      redo.addEventListener("click", redoScenarioWithFeedback);
    }

    renderScenarioScore();
  }

  function renderErrorScenario(session, scenario) {
    var choices = (scenario.errorChoices || []).map(function (choice, index) {
      var selected = session.selections.errorChoice === index;
      var classNames = ["choice"];
      if (selected) classNames.push("is-selected");
      if (session.scored && choice.correct) classNames.push("is-correct");
      if (session.scored && selected && !choice.correct) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"errorChoice\" value=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(choice.text) + "</span></label>";
    }).join("");

    els.scenarioCard.innerHTML = [
      "<div class=\"case-meta\"><span class=\"tag\">Spot Therapist Error</span><span class=\"tag\">" + escapeHtml(scenario.difficulty) + "</span>" + (scenario.focus ? scenario.focus.map(function (item) { return "<span class=\"tag\">" + escapeHtml(item) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(scenario.title) + "</h3>",
      "<p><strong>Presenting problem:</strong> " + escapeHtml(scenario.presentingProblem) + "</p>",
      "<p>" + escapeHtml(scenario.prompt) + "</p>",
      renderCaseDetails(scenario),
      "<div class=\"flawed-response\"><strong>Therapist response to critique</strong><p>" + escapeHtml(scenario.flawedResponse || "") + "</p></div>",
      "<fieldset class=\"scenario-group\"><legend>" + escapeHtml(scenario.errorPrompt || "What is the main therapist error?") + "</legend><div class=\"choice-list\">" + choices + "</div></fieldset>",
      "<label for=\"reflectionText\">Repair the response</label>",
      "<textarea id=\"reflectionText\" placeholder=\"Name the error, the missed clue, and a safer model-consistent repair.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.reflection) + "</textarea>",
      session.scored ? scenarioFeedback(session.result, scenario) : "",
      "<div class=\"button-row\">",
      session.scored ? "<button type=\"button\" id=\"redoScenario\">Redo With Feedback</button><button type=\"button\" id=\"newScenario\">New Random Case</button>" : "<button type=\"button\" id=\"scoreScenario\">Score Case</button>",
      session.scored ? "" : "<button class=\"secondary\" type=\"button\" id=\"scenarioReset\">Reset Case</button>",
      "</div>"
    ].join("");

    if (!session.scored) {
      els.scenarioCard.querySelectorAll("input[name=\"errorChoice\"]").forEach(function (input) {
        input.addEventListener("change", function () {
          session.selections.errorChoice = Number(input.value);
          renderScenario();
        });
      });
    }

    var reflection = document.getElementById("reflectionText");
    if (reflection && !session.scored) {
      reflection.addEventListener("input", function () {
        session.reflection = reflection.value;
      });
    }

    var score = document.getElementById("scoreScenario");
    if (score) score.addEventListener("click", scoreScenario);
    var reset = document.getElementById("scenarioReset");
    if (reset) reset.addEventListener("click", function () { startScenario(); });
    var next = document.getElementById("newScenario");
    if (next) next.addEventListener("click", startScenario);
    var redo = document.getElementById("redoScenario");
    if (redo) redo.addEventListener("click", redoScenarioWithFeedback);

    renderScenarioScore();
  }

  function renderScenarioRedoGuide(result) {
    var missed = getScenarioMissedAreas(result).slice(0, 5);
    if (!missed.length) {
      return "<div class=\"feedback good\"><strong>Redo focus:</strong> Try to reproduce the full rubric and make the reasoning more specific.</div>";
    }
    return "<div class=\"feedback needs-work\"><strong>Redo focus:</strong> Keep this feedback visible and strengthen " + escapeHtml(missed.join(", ")) + ".</div>";
  }

  function redoScenarioWithFeedback() {
    var current = state.scenario;
    if (!current || !current.item || !current.result) return;
    state.scenario = {
      item: current.item,
      mode: current.mode,
      choiceOrders: buildScenarioChoiceOrders(current.item),
      selections: {},
      reflection: "",
      scored: false,
      result: null,
      feedbackGuide: current.result,
      startedAt: new Date().toISOString()
    };
    renderScenario();
  }

  function scoreScenario() {
    var profile = getProfile();
    var session = state.scenario;
    var scenario = session.item;
    if (scenario.errorCase || session.mode === "error") {
      scoreErrorScenario(profile, session, scenario);
      return;
    }
    var showGuided = session.mode === "guided" || session.mode === "combined";
    var showWritten = session.mode === "written" || session.mode === "combined";
    var guided = showGuided ? scoreGuided(session, scenario) : null;
    var written = showWritten ? scoreWritten(session.reflection, scenario) : null;
    var parts = [];
    if (guided) parts.push(guided.percent);
    if (written) parts.push(written.percent);
    var percent = parts.length ? Math.round(parts.reduce(function (sum, value) { return sum + value; }, 0) / parts.length) : 0;

    session.scored = true;
    session.result = {
      scorePercent: percent,
      guided: guided,
      written: written
    };
    session.result.missedAreas = getScenarioMissedAreas(session.result);

    profile.scenarioAttempts.unshift({
      date: new Date().toISOString(),
      scenarioId: scenario.id,
      title: scenario.title,
      mode: session.mode,
      difficulty: scenario.difficulty,
      scorePercent: percent,
      missedAreas: session.result.missedAreas,
      model: modelForScenario(scenario)
    });
    profile.scenarioAttempts = profile.scenarioAttempts.slice(0, 40);
    updateReviewFromScenarioAttempt(profile, profile.scenarioAttempts[0]);
    saveProfiles();
    saveScenarioMirror();
    renderScenario();
    renderDashboard();
    renderProgress();
  }

  function scoreErrorScenario(profile, session, scenario) {
    var selected = session.selections.errorChoice;
    var choice = selected === undefined ? null : scenario.errorChoices[selected];
    var choicePercent = choice && choice.correct ? 100 : 0;
    var written = scoreWritten(session.reflection, {
      checklist: scenario.repairChecklist || scenario.checklist || []
    });
    var percent = Math.round((choicePercent + written.percent) / 2);
    var missedAreas = [];
    if (!choice || !choice.correct) missedAreas.push("Therapist error");
    written.hits.filter(function (hit) { return !hit.matched; }).forEach(function (hit) {
      missedAreas.push(hit.label);
    });

    session.scored = true;
    session.result = {
      scorePercent: percent,
      error: {
        selected: selected,
        selectedText: choice ? choice.text : "No selection",
        feedback: choice ? choice.feedback : "Choose the main therapist error before scoring.",
        correctText: getCorrectErrorChoice(scenario),
        percent: choicePercent
      },
      written: written,
      missedAreas: unique(missedAreas)
    };

    profile.scenarioAttempts.unshift({
      date: new Date().toISOString(),
      scenarioId: scenario.id,
      title: scenario.title,
      mode: "Spot Therapist Error",
      difficulty: scenario.difficulty,
      scorePercent: percent,
      missedAreas: session.result.missedAreas,
      model: modelForScenario(scenario),
      errorCase: true
    });
    profile.scenarioAttempts = profile.scenarioAttempts.slice(0, 40);
    updateReviewFromScenarioAttempt(profile, profile.scenarioAttempts[0]);
    saveProfiles();
    saveScenarioMirror();
    renderScenario();
    renderDashboard();
    renderProgress();
  }

  function getCorrectErrorChoice(scenario) {
    var correct = (scenario.errorChoices || []).filter(function (choice) { return choice.correct; })[0];
    return correct ? correct.text : "Review the model answer.";
  }

  function scoreGuided(session, scenario) {
    var categories = Object.keys(scenario.idealSelections);
    var correct = 0;
    var details = categories.map(function (category) {
      var selected = session.selections[category];
      var ideal = scenario.idealSelections[category];
      var ok = selected === ideal;
      if (ok) correct += 1;
      return {
        category: category,
        ok: ok,
        selected: selected,
        ideal: ideal,
        rubric: scenario.rubric[category]
      };
    });
    return {
      correct: correct,
      total: categories.length,
      percent: Math.round((correct / categories.length) * 100),
      details: details
    };
  }

  function scoreWritten(text, scenario) {
    var lower = (text || "").toLowerCase();
    var hits = scenario.checklist.map(function (item) {
      var matched = item.keywords.some(function (keyword) {
        return lower.indexOf(keyword.toLowerCase()) !== -1;
      });
      return { label: item.label, matched: matched };
    });
    var matchedCount = hits.filter(function (hit) { return hit.matched; }).length;
    return {
      matched: matchedCount,
      total: scenario.checklist.length,
      percent: Math.round((matchedCount / scenario.checklist.length) * 100),
      hits: hits
    };
  }

  function scenarioFeedback(result, scenario) {
    var blocks = [];
    if (result.error) {
      blocks.push("<div class=\"feedback " + (result.error.percent >= 100 ? "good" : "needs-work") + "\"><strong>Therapist error:</strong> " + escapeHtml(result.error.selectedText) + "<br><br><strong>Best critique:</strong> " + escapeHtml(result.error.correctText) + "<br><br><strong>Feedback:</strong> " + escapeHtml(result.error.feedback) + "</div>");
    }
    if (result.guided) {
      var missed = result.guided.details.filter(function (item) { return !item.ok; });
      blocks.push("<div class=\"feedback " + (missed.length ? "needs-work" : "good") + "\"><strong>Guided choices:</strong> " + result.guided.correct + " of " + result.guided.total + ". " + (missed.length ? "Review " + escapeHtml(missed.map(function (item) { return labelForCategory(item.category); }).join(", ")) + "." : "Your selections matched the rubric.") + "</div>");
      blocks.push(renderGuidedBreakdown(result.guided, scenario));
    }
    if (result.written) {
      var included = result.written.hits.filter(function (hit) { return hit.matched; }).map(function (hit) { return hit.label; });
      var missedWritten = result.written.hits.filter(function (hit) { return !hit.matched; }).map(function (hit) { return hit.label; });
      blocks.push("<div class=\"feedback " + (missedWritten.length ? "needs-work" : "good") + "\"><strong>Written reflection:</strong> " + result.written.matched + " of " + result.written.total + " checklist items. " + (included.length ? "<br><strong>Included:</strong> " + escapeHtml(included.join(", ")) + "." : "") + (missedWritten.length ? "<br><strong>Could add:</strong> " + escapeHtml(missedWritten.join(", ")) + "." : "") + "</div>");
      blocks.push(renderChecklistBreakdown(result.written));
    }
    if (Array.isArray(scenario.priorities) && scenario.priorities.length) {
      blocks.push("<div class=\"feedback\"><strong>Clinical priorities:</strong>" + list(scenario.priorities) + "</div>");
    }
    blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(scenario.modelAnswer) + "</div>");
    blocks.push("<div class=\"feedback\"><strong>Improve next time:</strong>" + list(scenario.improvementTips) + "</div>");
    return blocks.join("");
  }

  function renderGuidedBreakdown(guided, scenario) {
    var cards = guided.details.map(function (item) {
      var selected = item.selected === undefined ? "No selection" : scenario.choices[item.category][item.selected];
      var ideal = scenario.choices[item.category][item.ideal];
      return [
        "<div class=\"breakdown-item " + (item.ok ? "good" : "needs-work") + "\">",
        "<div class=\"mini-label\">" + escapeHtml(labelForCategory(item.category)) + "</div>",
        "<p><strong>Your answer:</strong> " + escapeHtml(selected) + "</p>",
        "<p><strong>Best answer:</strong> " + escapeHtml(ideal) + "</p>",
        "<p><strong>Why it matters:</strong> " + escapeHtml(item.rubric) + "</p>",
        "</div>"
      ].join("");
    }).join("");
    return "<div class=\"breakdown-grid\">" + cards + "</div>";
  }

  function renderChecklistBreakdown(written) {
    var items = written.hits.map(function (hit) {
      return "<div class=\"check-item " + (hit.matched ? "good" : "needs-work") + "\"><span>" + (hit.matched ? "Included" : "Add") + "</span><strong>" + escapeHtml(hit.label) + "</strong></div>";
    }).join("");
    return "<div class=\"check-grid\">" + items + "</div>";
  }

  function getScenarioMissedAreas(result) {
    if (!result) return [];
    if (Array.isArray(result.missedAreas) && result.error) return result.missedAreas;
    var missedGuided = result.guided ? result.guided.details.filter(function (item) {
      return !item.ok;
    }).map(function (item) {
      return labelForCategory(item.category);
    }) : [];
    var missedWritten = result.written ? result.written.hits.filter(function (hit) {
      return !hit.matched;
    }).map(function (hit) {
      return hit.label;
    }) : [];
    return unique(missedGuided.concat(missedWritten));
  }

  function modelForScenario(scenario) {
    var focus = (scenario && scenario.focus ? scenario.focus.join(" ") : "").toLowerCase();
    if (focus.indexOf("bowen") !== -1) return "Bowen";
    if (focus.indexOf("eft") !== -1 || focus.indexOf("efft") !== -1) return "EFT";
    if (focus.indexOf("ethics") !== -1 || focus.indexOf("safety") !== -1 || focus.indexOf("risk") !== -1) return "Ethics";
    return "Systemic Roles";
  }

  function renderScenarioScore() {
    var session = state.scenario;
    if (!session || !session.scored || !session.result) {
      els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
      return;
    }
    var score = session.result.scorePercent;
    var nextPractice = getScenarioMissedAreas(session.result).slice(0, 3);
    els.scenarioScore.innerHTML = [
      "<div class=\"score-ring\">" + score + "%</div>",
      "<p><strong>" + scoreLabel(score) + "</strong></p>",
      session.result.guided ? "<p>Guided: " + session.result.guided.percent + "%</p>" : "",
      session.result.written ? "<p>Written: " + session.result.written.percent + "%</p>" : "",
      nextPractice.length ? "<div class=\"feedback\"><strong>Practice next:</strong>" + list(nextPractice) + "</div>" : "<div class=\"feedback good\"><strong>Next step:</strong> Try a harder case or switch modes.</div>"
    ].join("");
  }

  function populateSkillCases() {
    if (!els.skillCase || !els.skillMode || !els.skillDifficulty) return;
    var mode = els.skillMode.value;
    if (mode === "weak") {
      els.skillCase.innerHTML = "<option value=\"weak-auto\">Auto weak spots</option>";
      els.skillCase.disabled = true;
      return;
    }
    els.skillCase.disabled = false;
    var selected = els.skillCase.value || "random";
    var pool = getSkillPool();
    els.skillCase.innerHTML = "<option value=\"random\">Random drill</option>" + pool.map(function (drill) {
      return "<option value=\"" + escapeHtml(drill.id) + "\">" + escapeHtml(drill.title) + "</option>";
    }).join("");
    els.skillCase.value = pool.some(function (drill) { return drill.id === selected; }) ? selected : "random";
  }

  function getSkillPool() {
    var mode = els.skillMode.value;
    var difficulty = els.skillDifficulty.value;
    return (DATA.skillDrills || []).filter(function (drill) {
      var modeMatch = drill.type === mode;
      var difficultyMatch = difficulty === "mixed" || drill.difficulty === difficulty;
      return modeMatch && difficultyMatch;
    });
  }

  function renderSkillPlaceholder() {
    var profile = getProfile();
    if (profile && profile.settings) {
      setSelectIfOption(els.skillMode, profile.settings.skillMode || "modelCompare");
      setSelectIfOption(els.skillDifficulty, profile.settings.skillDifficulty || "mixed");
    }
    populateSkillCases();
    if (state.skill) {
      renderSkill();
      return;
    }
    renderSkillAvailability();
    els.skillCard.innerHTML = "<div class=\"empty-state\">Choose settings and load a skill drill.</div>";
    els.skillScore.innerHTML = "<div class=\"empty-state\">No skill scored yet.</div>";
  }

  function renderSkillAvailability() {
    if (!els.skillScore) return;
    if (els.skillMode.value === "weak") {
      els.skillScore.innerHTML = "<div class=\"empty-state\">Weak area practice uses your missed topics.</div>";
      return;
    }
    var pool = getSkillPool();
    els.skillScore.innerHTML = "<div class=\"empty-state\">" + pool.length + " matching skill drill" + (pool.length === 1 ? "" : "s") + ".</div>";
  }

  function startSkillDrill() {
    var profile = getProfile();
    profile.settings.skillMode = els.skillMode.value;
    profile.settings.skillDifficulty = els.skillDifficulty.value;
    saveProfiles();

    if (els.skillMode.value === "weak") {
      state.skill = { mode: "weak", item: null, scored: false, result: null };
      renderSkill();
      return;
    }

    var pool = getSkillPool();
    var selectedId = els.skillCase.value;
    var item = selectedId && selectedId !== "random"
      ? pool.find(function (drill) { return drill.id === selectedId; })
      : null;
    if (!item) {
      item = shuffle(pool)[0];
    }
    if (item) {
      els.skillCase.value = item.id;
    }

    state.skill = {
      mode: item ? item.type : els.skillMode.value,
      item: item,
      selections: {},
      responses: {},
      scored: false,
      result: null,
      feedbackGuide: null,
      startedAt: new Date().toISOString()
    };
    renderSkill();
  }

  function renderSkill() {
    var session = state.skill;
    if (!session) {
      renderSkillPlaceholder();
      return;
    }
    if (session.mode === "weak") {
      renderWeakPractice();
      return;
    }
    if (!session.item) {
      els.skillCard.innerHTML = "<div class=\"empty-state\">No skill drills match those settings.</div>";
      els.skillScore.innerHTML = "<div class=\"empty-state\">No skill scored yet.</div>";
      return;
    }

    var item = session.item;
    var body = "";
    if (item.type === "modelCompare") body = renderModelCompareSkill(item, session);
    if (item.type === "responsePractice") body = renderChoiceSkill(item, session, "Written response");
    if (item.type === "bowenTrainer" || item.type === "eftMapper") body = renderGuidedSkill(item, session);
    if (item.type === "nextIntervention") body = renderChoiceSkill(item, session, "Why this next step?");
    if (item.type === "ethicsScanner") body = renderEthicsSkill(item, session);

    els.skillCard.innerHTML = [
      renderSkillHeader(item),
      session.feedbackGuide && !session.scored ? renderSkillRedoGuide(session.feedbackGuide) : "",
      body,
      session.scored ? skillFeedback(session.result, item) : "",
      "<div class=\"button-row\">",
      session.scored ? "<button type=\"button\" id=\"redoSkill\">Redo With Feedback</button><button type=\"button\" id=\"newSkillDrill\">New Drill</button>" : "<button type=\"button\" id=\"scoreSkill\">Score Drill</button><button class=\"secondary\" type=\"button\" id=\"resetSkill\">Reset</button>",
      "</div>"
    ].join("");
    bindSkillCardEvents();
    renderSkillScore();
  }

  function renderSkillHeader(item) {
    return [
      "<div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(labelForSkillMode(item.type)) + "</span><span class=\"tag\">" + escapeHtml(item.difficulty) + "</span><span class=\"tag\">" + escapeHtml(item.clientType) + "</span>" + (item.tags ? item.tags.map(function (tag) { return "<span class=\"tag\">" + escapeHtml(tag) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(item.title) + "</h3>",
      "<p>" + escapeHtml(item.prompt) + "</p>",
      item.details && item.details.length ? "<div class=\"case-detail-grid\"><div class=\"case-detail\"><strong>What you know</strong>" + list(item.details) + "</div><div class=\"case-detail\"><strong>Clinical task</strong><p>" + escapeHtml(skillTaskText(item.type)) + "</p></div><div class=\"case-detail alert\"><strong>Watch for</strong>" + list(item.tips || []) + "</div></div>" : ""
    ].join("");
  }

  function skillTaskText(type) {
    var labels = {
      modelCompare: "Name how Bowen, EFT, and systemic LMFT thinking would each organize the same case.",
      responsePractice: "Choose a therapist response, then write your own version.",
      bowenTrainer: "Identify Bowen concepts and the therapist's coaching stance.",
      eftMapper: "Map the negative cycle, primary emotion, attachment fear, and next EFT move.",
      nextIntervention: "Choose the strongest next clinical action and explain why.",
      ethicsScanner: "Mark the risk/ethics flags and state what must be assessed next."
    };
    return labels[type] || "Complete the clinical reasoning drill.";
  }

  function renderModelCompareSkill(item, session) {
    return "<div class=\"model-compare-grid\">" + item.fields.map(function (field) {
      return [
        "<div class=\"skill-field\">",
        "<label for=\"skillText-" + escapeHtml(field.id) + "\">" + escapeHtml(field.label) + "</label>",
        "<textarea id=\"skillText-" + escapeHtml(field.id) + "\" data-skill-text=\"" + escapeHtml(field.id) + "\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses[field.id] || "") + "</textarea>",
        "</div>"
      ].join("");
    }).join("") + "</div>";
  }

  function renderChoiceSkill(item, session, textLabel) {
    var maxScore = getMaxChoiceScore(item.choices);
    var choices = item.choices.map(function (choice, index) {
      var selected = session.selections.choice === index;
      var classNames = ["choice"];
      if (selected) classNames.push("is-selected");
      if (session.scored && choice.score === maxScore) classNames.push("is-correct");
      if (session.scored && selected && choice.score < maxScore) classNames.push("is-wrong");
      return [
        "<label class=\"" + classNames.join(" ") + "\">",
        "<input type=\"radio\" name=\"skill-choice\" value=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + ">",
        "<span>" + escapeHtml(choice.text) + "</span>",
        session.scored ? "<span class=\"choice-score\">" + choice.score + "/" + maxScore + "</span>" : "",
        "</label>"
      ].join("");
    }).join("");
    return [
      "<div class=\"choice-list\">" + choices + "</div>",
      "<label for=\"skillWritten\">" + escapeHtml(textLabel) + "</label>",
      "<textarea id=\"skillWritten\" data-skill-text=\"written\" placeholder=\"Write the clinical reasoning or therapist response.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses.written || "") + "</textarea>"
    ].join("");
  }

  function renderGuidedSkill(item, session) {
    return Object.keys(item.choices).map(function (category) {
      var choices = item.choices[category].map(function (choice, index) {
        var selected = session.selections[category] === index;
        var classNames = ["choice"];
        if (selected) classNames.push("is-selected");
        if (session.scored && item.idealSelections[category] === index) classNames.push("is-correct");
        if (session.scored && selected && item.idealSelections[category] !== index) classNames.push("is-wrong");
        return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"skill-" + escapeHtml(category) + "\" value=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
      }).join("");
      return "<fieldset class=\"scenario-group\"><legend>" + escapeHtml(labelForCategory(category)) + "</legend><div class=\"choice-list\">" + choices + "</div></fieldset>";
    }).join("");
  }

  function renderEthicsSkill(item, session) {
    var selectedFlags = session.selections.flags || {};
    var flags = item.flags.map(function (flag, index) {
      var selected = !!selectedFlags[index];
      var ideal = item.idealFlags.indexOf(index) !== -1;
      var classNames = ["flag-choice"];
      if (session.scored && selected === ideal) classNames.push("is-correct");
      if (session.scored && selected !== ideal) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"checkbox\" data-skill-flag=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(flag) + "</span></label>";
    }).join("");
    return [
      "<div class=\"flag-list\">" + flags + "</div>",
      "<label for=\"skillWritten\">What must the therapist assess or do next?</label>",
      "<textarea id=\"skillWritten\" data-skill-text=\"written\" placeholder=\"Name risk, consent, documentation, consultation, or legal duties.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses.written || "") + "</textarea>"
    ].join("");
  }

  function bindSkillCardEvents() {
    var session = state.skill;
    if (!session || session.scored) {
      var redo = document.getElementById("redoSkill");
      if (redo) redo.addEventListener("click", redoSkillWithFeedback);
      var next = document.getElementById("newSkillDrill");
      if (next) next.addEventListener("click", startSkillDrill);
      return;
    }

    els.skillCard.querySelectorAll("[data-skill-text]").forEach(function (input) {
      input.addEventListener("input", function () {
        session.responses[input.getAttribute("data-skill-text")] = input.value;
      });
    });
    els.skillCard.querySelectorAll("input[name='skill-choice']").forEach(function (input) {
      input.addEventListener("change", function () {
        session.selections.choice = Number(input.value);
        renderSkill();
      });
    });
    Object.keys(session.item.choices || {}).forEach(function (category) {
      els.skillCard.querySelectorAll("input[name=\"skill-" + category + "\"]").forEach(function (input) {
        input.addEventListener("change", function () {
          session.selections[category] = Number(input.value);
          renderSkill();
        });
      });
    });
    els.skillCard.querySelectorAll("[data-skill-flag]").forEach(function (input) {
      input.addEventListener("change", function () {
        if (!session.selections.flags) session.selections.flags = {};
        session.selections.flags[input.getAttribute("data-skill-flag")] = input.checked;
      });
    });

    var score = document.getElementById("scoreSkill");
    if (score) score.addEventListener("click", scoreSkill);
    var reset = document.getElementById("resetSkill");
    if (reset) reset.addEventListener("click", startSkillDrill);
  }

  function scoreSkill() {
    var profile = getProfile();
    var session = state.skill;
    if (!session || !session.item) return;
    var item = session.item;
    var result = null;
    if (item.type === "modelCompare") result = scoreModelCompareSkill(session, item);
    if (item.type === "responsePractice" || item.type === "nextIntervention") result = scoreChoiceSkill(session, item);
    if (item.type === "bowenTrainer" || item.type === "eftMapper") result = scoreGuidedSkill(session, item);
    if (item.type === "ethicsScanner") result = scoreEthicsSkill(session, item);
    if (!result) return;

    session.scored = true;
    session.result = result;
    profile.skillAttempts.unshift({
      date: new Date().toISOString(),
      drillId: item.id,
      title: item.title,
      mode: labelForSkillMode(item.type),
      model: modelForSkill(item),
      difficulty: item.difficulty,
      scorePercent: result.scorePercent,
      missedAreas: result.missedAreas || []
    });
    profile.skillAttempts = profile.skillAttempts.slice(0, 40);
    saveProfiles();
    renderSkill();
    renderDashboard();
    renderProgress();
  }

  function scoreModelCompareSkill(session, item) {
    var sections = item.fields.map(function (field) {
      var scored = scoreChecklist(session.responses[field.id] || "", field.checklist);
      return {
        label: field.label,
        percent: scored.percent,
        hits: scored.hits,
        modelAnswer: field.modelAnswer
      };
    });
    var missed = [];
    sections.forEach(function (section) {
      section.hits.filter(function (hit) { return !hit.matched; }).forEach(function (hit) {
        missed.push(section.label + ": " + hit.label);
      });
    });
    return {
      scorePercent: average(sections.map(function (section) { return section.percent; })) || 0,
      sections: sections,
      missedAreas: unique(missed)
    };
  }

  function scoreChoiceSkill(session, item) {
    var selected = session.selections.choice;
    var maxScore = getMaxChoiceScore(item.choices);
    var choice = selected === undefined ? null : item.choices[selected];
    var choicePercent = choice ? Math.round((choice.score / maxScore) * 100) : 0;
    var written = scoreChecklist(session.responses.written || "", item.checklist);
    var missed = written.hits.filter(function (hit) { return !hit.matched; }).map(function (hit) { return hit.label; });
    if (!choice || choice.score < maxScore) missed.unshift("Therapist response choice");
    return {
      scorePercent: Math.round((choicePercent + written.percent) / 2),
      choice: {
        selected: selected,
        selectedText: choice ? choice.text : "No selection",
        feedback: choice ? choice.feedback : "Choose a response before scoring.",
        percent: choicePercent,
        bestText: item.choices.filter(function (candidate) { return candidate.score === maxScore; })[0].text
      },
      written: written,
      missedAreas: unique(missed)
    };
  }

  function scoreGuidedSkill(session, item) {
    var guided = scoreGuided(session, item);
    var missed = guided.details.filter(function (detail) { return !detail.ok; }).map(function (detail) {
      return labelForCategory(detail.category);
    });
    return {
      scorePercent: guided.percent,
      guided: guided,
      missedAreas: unique(missed)
    };
  }

  function scoreEthicsSkill(session, item) {
    var selectedFlags = session.selections.flags || {};
    var correctFlags = 0;
    var flagDetails = item.flags.map(function (flag, index) {
      var selected = !!selectedFlags[index];
      var ideal = item.idealFlags.indexOf(index) !== -1;
      if (selected === ideal) correctFlags += 1;
      return { label: flag, selected: selected, ideal: ideal, ok: selected === ideal };
    });
    var flagPercent = Math.round((correctFlags / item.flags.length) * 100);
    var written = scoreChecklist(session.responses.written || "", item.checklist);
    var missed = flagDetails.filter(function (flag) { return !flag.ok; }).map(function (flag) { return flag.label; })
      .concat(written.hits.filter(function (hit) { return !hit.matched; }).map(function (hit) { return hit.label; }));
    return {
      scorePercent: Math.round((flagPercent + written.percent) / 2),
      flags: { percent: flagPercent, correct: correctFlags, total: item.flags.length, details: flagDetails },
      written: written,
      missedAreas: unique(missed)
    };
  }

  function scoreChecklist(text, checklist) {
    var lower = (text || "").toLowerCase();
    var hits = (checklist || []).map(function (item) {
      var matched = item.keywords.some(function (keyword) {
        return lower.indexOf(keyword.toLowerCase()) !== -1;
      });
      return { label: item.label, matched: matched };
    });
    var matchedCount = hits.filter(function (hit) { return hit.matched; }).length;
    return {
      matched: matchedCount,
      total: hits.length,
      percent: hits.length ? Math.round((matchedCount / hits.length) * 100) : 0,
      hits: hits
    };
  }

  function skillFeedback(result, item) {
    var blocks = [];
    if (result.sections) {
      result.sections.forEach(function (section) {
        blocks.push("<div class=\"feedback " + (section.percent >= 75 ? "good" : "needs-work") + "\"><strong>" + escapeHtml(section.label) + ":</strong> " + section.percent + "%</div>");
        blocks.push(renderChecklistBreakdown({ hits: section.hits }));
        blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(section.modelAnswer) + "</div>");
      });
    }
    if (result.choice) {
      blocks.push("<div class=\"feedback " + (result.choice.percent >= 75 ? "good" : "needs-work") + "\"><strong>Selected response:</strong> " + escapeHtml(result.choice.selectedText) + "<br><br><strong>Feedback:</strong> " + escapeHtml(result.choice.feedback) + "<br><br><strong>Strongest response:</strong> " + escapeHtml(result.choice.bestText) + "</div>");
    }
    if (result.guided) {
      blocks.push(renderGuidedBreakdown(result.guided, item));
    }
    if (result.flags) {
      blocks.push("<div class=\"feedback " + (result.flags.percent >= 75 ? "good" : "needs-work") + "\"><strong>Risk scan:</strong> " + result.flags.correct + " of " + result.flags.total + " flags.</div>");
      blocks.push(renderFlagBreakdown(result.flags));
    }
    if (result.written) {
      blocks.push("<div class=\"feedback " + (result.written.percent >= 75 ? "good" : "needs-work") + "\"><strong>Written reasoning:</strong> " + result.written.matched + " of " + result.written.total + " checklist items.</div>");
      blocks.push(renderChecklistBreakdown(result.written));
    }
    if (!result.sections) {
      blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(item.modelAnswer) + "</div>");
    }
    if (item.tips && item.tips.length) {
      blocks.push("<div class=\"feedback\"><strong>Improve next time:</strong>" + list(item.tips) + "</div>");
    }
    return blocks.join("");
  }

  function renderFlagBreakdown(flags) {
    return "<div class=\"check-grid\">" + flags.details.map(function (flag) {
      var label = flag.ideal ? "Needed" : "Not central";
      var status = flag.ok ? "good" : "needs-work";
      return "<div class=\"check-item " + status + "\"><span>" + escapeHtml(label) + "</span><strong>" + escapeHtml(flag.label) + "</strong></div>";
    }).join("") + "</div>";
  }

  function renderSkillScore() {
    var session = state.skill;
    if (!session || session.mode === "weak") return;
    if (!session.scored || !session.result) {
      els.skillScore.innerHTML = "<div class=\"empty-state\">No skill scored yet.</div>";
      return;
    }
    var score = session.result.scorePercent;
    var missed = (session.result.missedAreas || []).slice(0, 4);
    els.skillScore.innerHTML = [
      "<div class=\"score-ring\">" + score + "%</div>",
      "<p><strong>" + scoreLabel(score) + "</strong></p>",
      missed.length ? "<div class=\"feedback\"><strong>Practice next:</strong>" + list(missed) + "</div>" : "<div class=\"feedback good\"><strong>Next step:</strong> Try another drill or raise the difficulty.</div>"
    ].join("");
  }

  function renderSkillRedoGuide(result) {
    var missed = (result.missedAreas || []).slice(0, 5);
    if (!missed.length) {
      return "<div class=\"feedback good\"><strong>Redo focus:</strong> Rebuild the answer with more precise model language.</div>";
    }
    return "<div class=\"feedback needs-work\"><strong>Redo focus:</strong> Strengthen " + escapeHtml(missed.join(", ")) + ".</div>";
  }

  function redoSkillWithFeedback() {
    var current = state.skill;
    if (!current || !current.item || !current.result) return;
    state.skill = {
      mode: current.mode,
      item: current.item,
      selections: {},
      responses: {},
      scored: false,
      result: null,
      feedbackGuide: current.result,
      startedAt: new Date().toISOString()
    };
    renderSkill();
  }

  function renderWeakPractice() {
    var profile = getProfile();
    var missed = getMissedTopics(profile).slice(0, 8);
    var due = getDueReviewItems(profile).slice(0, 6);
    var model = getWeakQuizModel(profile) || "Bowen";
    els.skillCard.innerHTML = [
      "<div class=\"skill-meta\"><span class=\"tag\">Weak Area Practice</span><span class=\"tag\">" + escapeHtml(model) + "</span></div>",
      "<h3>Practice Weak Spots</h3>",
      due.length ? "<div class=\"weak-list\">" + due.map(function (item) {
        return "<div class=\"weak-item\"><strong>" + escapeHtml(item.title || item.topic) + "</strong><br><span>Due " + escapeHtml(formatDue(item.dueAt)) + " / " + escapeHtml(item.kind) + "</span></div>";
      }).join("") + "</div>" : "",
      missed.length ? "<div class=\"weak-list\">" + missed.map(function (item) {
        return "<div class=\"weak-item\"><strong>" + escapeHtml(item.topic) + "</strong><br><span>" + item.count + " miss" + (item.count === 1 ? "" : "es") + "</span></div>";
      }).join("") + "</div>" : "<div class=\"empty-state\">No misses yet. Bowen is queued first because it is the priority model.</div>",
      "<div class=\"button-row\"><button type=\"button\" id=\"startWeakQuiz\">Start Weak-Spot Quiz</button><button class=\"secondary\" type=\"button\" id=\"startDueReview\">Due Review</button><button class=\"secondary\" type=\"button\" id=\"startWeakBowen\">Start Bowen Practice</button></div>"
    ].join("");
    els.skillScore.innerHTML = "<div class=\"feedback\"><strong>Next quiz target:</strong> " + escapeHtml(model) + "</div>";
    document.getElementById("startWeakQuiz").addEventListener("click", function () {
      startWeakQuiz(model);
    });
    document.getElementById("startWeakBowen").addEventListener("click", function () {
      startWeakQuiz("Bowen");
    });
    document.getElementById("startDueReview").addEventListener("click", function () {
      showView("quiz");
      setSelectIfOption(els.quizMode, "review");
      setSelectIfOption(els.quizDifficulty, "mixed");
      setSelectIfOption(els.quizTopic, "all");
      setSelectIfOption(els.quizCount, "10");
      startQuiz();
    });
  }

  function openWeakPractice() {
    showView("skill");
    els.skillMode.value = "weak";
    populateSkillCases();
    state.skill = { mode: "weak", item: null, scored: false, result: null };
    renderSkill();
  }

  function startWeakQuiz(model) {
    var target = model || getWeakQuizModel(getProfile()) || "Bowen";
    state.quiz = null;
    showView("quiz");
    setSelectIfOption(els.quizMode, "practice");
    els.quizDifficulty.value = "mixed";
    if (Array.prototype.some.call(els.quizTopic.options, function (optionNode) { return optionNode.value === target; })) {
      els.quizTopic.value = target;
    } else {
      els.quizTopic.value = "all";
    }
    els.quizCount.value = "20";
    startQuiz();
  }

  function getWeakQuizModel(profile) {
    var counts = {};
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (miss) {
        if (miss.model) counts[miss.model] = (counts[miss.model] || 0) + 1;
      });
    });
    (profile.scenarioAttempts || []).forEach(function (attempt) {
      if (attempt.scorePercent < 85 && attempt.model) counts[attempt.model] = (counts[attempt.model] || 0) + 1;
    });
    (profile.skillAttempts || []).forEach(function (attempt) {
      if (attempt.scorePercent < 85 && attempt.model) counts[attempt.model] = (counts[attempt.model] || 0) + 1;
    });
    (profile.clinicAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        if (!answer.correct && answer.model) counts[answer.model] = (counts[answer.model] || 0) + 1;
      });
    });
    var ranked = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a] || (a === "Bowen" ? -1 : b === "Bowen" ? 1 : a.localeCompare(b));
    });
    return ranked[0] || null;
  }

  function getMaxChoiceScore(choices) {
    return Math.max.apply(null, choices.map(function (choice) { return choice.score; }));
  }

  function modelForSkill(item) {
    if (item.type === "bowenTrainer") return "Bowen";
    if (item.type === "eftMapper") return "EFT";
    if (item.type === "ethicsScanner") return "Ethics";
    if (item.type === "modelCompare") return "Comparison";
    if (item.tags && item.tags.indexOf("Bowen") !== -1) return "Bowen";
    if (item.tags && item.tags.indexOf("EFT") !== -1) return "EFT";
    if (item.tags && item.tags.indexOf("Ethics") !== -1) return "Ethics";
    return "Systemic Roles";
  }

  function labelForSkillMode(mode) {
    var labels = {
      modelCompare: "Model Compare",
      responsePractice: "Therapist Response",
      bowenTrainer: "Bowen Trainer",
      eftMapper: "EFT Cycle Mapper",
      nextIntervention: "Next Intervention",
      ethicsScanner: "Ethics Scanner",
      weak: "Weak Area Practice"
    };
    return labels[mode] || mode;
  }

  function setSelectIfOption(select, value) {
    if (!select) return;
    var hasValue = Array.prototype.some.call(select.options, function (optionNode) {
      return optionNode.value === String(value);
    });
    if (hasValue) select.value = String(value);
  }

  function scoreLabel(score) {
    if (score >= 85) return "Strong clinical reasoning";
    if (score >= 70) return "Solid, with refinements";
    if (score >= 50) return "Developing answer";
    return "Needs a slower assessment";
  }

  function renderProgress() {
    var profile = getProfile();
    renderMasteryDashboard(profile);

    els.quizHistory.innerHTML = historyTable(profile.quizAttempts || [], [
      { key: "date", label: "Date", render: formatDate },
      { key: "mode", label: "Mode", render: function (value) { return value || "practice"; } },
      { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } },
      { key: "total", label: "Items" },
      { key: "missed", label: "Missed", render: function (value) {
        return value && value.length ? unique(value.map(function (item) { return item.topic; })).join(", ") : "None";
      } }
    ]);

    els.scenarioHistory.innerHTML = historyTable(profile.scenarioAttempts || [], [
      { key: "date", label: "Date", render: formatDate },
      { key: "title", label: "Case" },
      { key: "mode", label: "Mode" },
      { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } }
    ]);

    els.skillHistory.innerHTML = historyTable(profile.skillAttempts || [], [
      { key: "date", label: "Date", render: formatDate },
      { key: "title", label: "Drill" },
      { key: "mode", label: "Mode" },
      { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } },
      { key: "missedAreas", label: "Practice", render: function (value) {
        return value && value.length ? value.slice(0, 3).join(", ") : "None";
      } }
    ]);
  }

  function renderMasteryDashboard(profile) {
    if (!els.masteryDashboard) return;
    var due = getDueReviewItems(profile);
    var missed = getMissedTopics(profile).slice(0, 5);
    var justified = getJustifiedMisses(profile).slice(0, 4);
    var readiness = getReadinessByArea(profile);
    var clinicAttempts = profile.clinicAttempts || [];
    var lastClinic = clinicAttempts[0] || null;
    var weakest = readiness.length ? readiness.slice().sort(function (a, b) {
      return a.percent - b.percent || b.count - a.count;
    })[0] : null;

    els.masteryDashboard.innerHTML = [
      "<div class=\"mastery-grid\">",
      masteryMetric(weakest ? weakest.area : "--", "Weakest area"),
      masteryMetric(due.length ? formatDue(due[0].dueAt) : "None", "Next review due"),
      masteryMetric(missed.length ? missed[0].topic : "--", "Most missed concept"),
      masteryMetric(String(justified.length), "Missed with justification"),
      masteryMetric(String(clinicAttempts.length), "Clinic rounds"),
      "</div>",
      readiness.length ? "<div class=\"readiness-list\">" + readiness.map(function (item) {
        return "<div class=\"readiness-row\"><span>" + escapeHtml(item.area) + "</span><strong>" + item.percent + "%</strong><em>" + item.count + " data point" + (item.count === 1 ? "" : "s") + "</em></div>";
      }).join("") + "</div>" : "<div class=\"empty-state\">Complete a mixed quiz to build readiness by area.</div>",
      lastClinic ? "<div class=\"feedback\"><strong>Last clinic:</strong> " + lastClinic.scorePercent + "% / " + escapeHtml(labelForClinicLevel(lastClinic.level)) + "</div>" : "",
      missed.length ? "<div class=\"feedback\"><strong>Most missed concepts:</strong>" + list(missed.map(function (item) { return renderWeakSpotLabel(item) + " (" + item.count + ")"; })) + "</div>" : "",
      justified.length ? "<div class=\"feedback needs-work\"><strong>Review these misses:</strong>" + list(justified.map(function (item) { return item.topic + ": " + item.justification; })) + "</div>" : ""
    ].join("");
  }

  function masteryMetric(value, label) {
    return "<div class=\"mastery-metric\"><strong>" + escapeHtml(value) + "</strong><span>" + escapeHtml(label) + "</span></div>";
  }

  function historyTable(rows, columns) {
    if (!rows || rows.length === 0) {
      return "<div class=\"empty-state\">No history yet.</div>";
    }
    return [
      "<div class=\"table-wrap\"><table><thead><tr>",
      columns.map(function (column) { return "<th>" + escapeHtml(column.label) + "</th>"; }).join(""),
      "</tr></thead><tbody>",
      rows.slice(0, 12).map(function (row) {
        return "<tr>" + columns.map(function (column) {
          var value = row[column.key];
          var rendered = column.render ? column.render(value, row) : value;
          return "<td>" + escapeHtml(String(rendered)) + "</td>";
        }).join("") + "</tr>";
      }).join(""),
      "</tbody></table></div>"
    ].join("");
  }

  function clearActiveProfile() {
    var profile = getProfile();
    profile.quizAttempts = [];
    profile.scenarioAttempts = [];
    profile.skillAttempts = [];
    profile.clinicAttempts = [];
    profile.reviewQueue = [];
    profile.flashcardStats = {};
    profile.masteryStats = {};
    state.quiz = null;
    state.scenario = null;
    state.skill = null;
    state.clinic = null;
    saveProfiles();
    saveScenarioMirror();
    renderAll();
  }

  function getMissedTopics(profile) {
    var counts = {};
    function add(model, domain, topic) {
      var label = topic || domain || model || "Review item";
      var key = [model || "", domain || "", label].join("|");
      if (!counts[key]) {
        counts[key] = {
          model: model || "",
          domain: domain || "",
          topic: label,
          count: 0
        };
      }
      counts[key].count += 1;
    }
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (miss) {
        add(miss.model, miss.domain || domainForQuestion(miss), miss.topic);
      });
    });
    (profile.scenarioAttempts || []).forEach(function (attempt) {
      (attempt.missedAreas || []).forEach(function (area) {
        add(attempt.model || "Clinical cases", attempt.title, area);
      });
    });
    (profile.skillAttempts || []).forEach(function (attempt) {
      (attempt.missedAreas || []).forEach(function (area) {
        add(attempt.model || "Skill lab", attempt.title || attempt.mode, area);
      });
    });
    (profile.clinicAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        if (!answer.correct) add(answer.model, answer.domain, answer.topic);
      });
    });
    (profile.reviewQueue || []).forEach(function (item) {
      if (item && item.misses > 0) {
        add(item.model, item.domain, item.topic || item.title);
        counts[[item.model || "", item.domain || "", item.topic || item.title || "Review item"].join("|")].count += Math.max(0, item.misses - 1);
      }
    });
    return Object.keys(counts).map(function (key) {
      return counts[key];
    }).sort(function (a, b) {
      return b.count - a.count || renderWeakSpotLabel(a).localeCompare(renderWeakSpotLabel(b));
    });
  }

  function getDueReviewItems(profile) {
    var now = Date.now();
    return (profile.reviewQueue || []).filter(function (item) {
      return item && item.dueAt && new Date(item.dueAt).getTime() <= now && item.stage < REVIEW_INTERVAL_DAYS.length;
    }).sort(function (a, b) {
      return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
    });
  }

  function getDueReviewQuestions(profile) {
    var dueIds = getDueReviewItems(profile).filter(function (item) {
      return item.kind === "quiz";
    }).map(function (item) { return item.id; });
    return DATA.questions.filter(function (question) {
      return dueIds.indexOf(question.id) !== -1;
    });
  }

  function updateReviewFromQuizAnswer(profile, answer) {
    upsertReviewItem(profile, {
      kind: "quiz",
      id: answer.questionId,
      title: answer.topic,
      model: answer.model,
      domain: answer.domain,
      topic: answer.topic,
      prompt: answer.prompt
    }, answer.correct && !answer.hintUsed);
  }

  function updateReviewFromScenarioAttempt(profile, attempt) {
    if (!attempt || !attempt.scenarioId) return;
    var existing = (profile.reviewQueue || []).find(function (queued) {
      return queued.kind === "scenario" && queued.id === attempt.scenarioId;
    });
    if (attempt.scorePercent >= 85 && !existing) return;
    upsertReviewItem(profile, {
      kind: "scenario",
      id: attempt.scenarioId,
      title: attempt.title,
      model: attempt.model,
      domain: attempt.model === "Ethics" ? "Ethics / legal standards" : "Clinical case transfer",
      topic: attempt.title,
      errorCase: !!attempt.errorCase
    }, attempt.scorePercent >= 85);
  }

  function updateReviewFromFlashcardAnswer(profile, answer) {
    upsertReviewItem(profile, {
      kind: "flashcard",
      id: answer.id,
      title: answer.topic,
      model: answer.model,
      domain: answer.domain,
      topic: answer.topic,
      prompt: answer.prompt
    }, answer.correct);
  }

  function updateReviewFromClinicDrillAnswer(profile, answer, item) {
    var kind = item && item.type === "quizReview" ? "quiz" : "clinicDrill";
    upsertReviewItem(profile, {
      kind: kind,
      id: answer.id,
      title: answer.topic,
      model: answer.model,
      domain: answer.domain,
      topic: answer.topic,
      prompt: answer.prompt
    }, answer.correct);
  }

  function updateFlashcardStats(profile, answer) {
    profile.flashcardStats = profile.flashcardStats && typeof profile.flashcardStats === "object" ? profile.flashcardStats : {};
    var stats = profile.flashcardStats[answer.id] || {
      attempts: 0,
      correct: 0,
      misses: 0
    };
    stats.attempts += 1;
    if (answer.correct) {
      stats.correct += 1;
    } else {
      stats.misses += 1;
    }
    stats.lastResult = answer.correct ? "correct" : "missed";
    stats.lastReviewedAt = answer.answeredAt;
    profile.flashcardStats[answer.id] = stats;
  }

  function upsertReviewItem(profile, item, success) {
    profile.reviewQueue = Array.isArray(profile.reviewQueue) ? profile.reviewQueue : [];
    var existing = profile.reviewQueue.find(function (queued) {
      return queued.kind === item.kind && queued.id === item.id;
    });
    var now = new Date();
    var target = existing || {
      kind: item.kind,
      id: item.id,
      createdAt: now.toISOString(),
      misses: 0,
      reviews: 0,
      stage: 0
    };
    target.title = item.title;
    target.model = item.model;
    target.domain = item.domain;
    target.topic = item.topic;
    target.prompt = item.prompt || target.prompt || "";
    target.errorCase = !!item.errorCase;
    target.lastReviewedAt = now.toISOString();
    target.reviews += 1;
    if (success) {
      target.stage = Math.min((target.stage || 0) + 1, REVIEW_INTERVAL_DAYS.length - 1);
    } else {
      target.stage = 0;
      target.misses += 1;
    }
    target.dueAt = addDays(now, REVIEW_INTERVAL_DAYS[target.stage]).toISOString();
    if (!existing) profile.reviewQueue.push(target);
    profile.reviewQueue = profile.reviewQueue.slice(-160);
  }

  function getRedoScenario(profile) {
    var dueScenario = getDueReviewItems(profile).filter(function (item) {
      return item.kind === "scenario";
    })[0];
    var attempt = dueScenario || (profile.scenarioAttempts || []).find(function (item) {
      return item.scorePercent < 85 && item.scenarioId;
    });
    if (!attempt) return null;
    var scenarioId = attempt.id || attempt.scenarioId;
    var scenario = (DATA.scenarios || []).find(function (item) { return item.id === scenarioId; });
    return scenario ? {
      scenarioId: scenario.id,
      title: scenario.title,
      errorCase: !!scenario.errorCase
    } : null;
  }

  function getJustifiedMisses(profile) {
    var misses = [];
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (miss) {
        if (miss.justification) {
          misses.push({
            topic: miss.topic || "Missed item",
            model: miss.model || "",
            justification: miss.justification
          });
        }
      });
    });
    return misses;
  }

  function getReadinessByArea(profile) {
    var stats = {};
    function add(area, percent) {
      var key = area || "General";
      if (!stats[key]) stats[key] = { area: key, total: 0, count: 0 };
      stats[key].total += percent;
      stats[key].count += 1;
    }
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        add(answer.domain || domainForQuestion(answer), answer.correct ? 100 : 0);
      });
    });
    (profile.scenarioAttempts || []).forEach(function (attempt) {
      add(attempt.model || "Clinical cases", attempt.scorePercent || 0);
    });
    (profile.skillAttempts || []).forEach(function (attempt) {
      add(attempt.model || "Skill lab", attempt.scorePercent || 0);
    });
    (profile.clinicAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        add(answer.domain || answer.model || "Daily Clinic", answer.correct ? 100 : 0);
      });
    });
    return Object.keys(stats).map(function (key) {
      return {
        area: stats[key].area,
        percent: Math.round(stats[key].total / stats[key].count),
        count: stats[key].count
      };
    }).sort(function (a, b) {
      return a.area.localeCompare(b.area);
    });
  }

  function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  function formatDue(value) {
    if (!value) return "None";
    var date = new Date(value);
    if (isNaN(date.getTime())) return "None";
    var today = new Date();
    if (date.toDateString() === today.toDateString()) return "Today";
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  function findFlashcard(id) {
    return (DATA.flashcards || []).find(function (card) { return card.id === id; });
  }

  function findClinicDrill(id) {
    return (DATA.clinicDrills || []).find(function (drill) { return drill.id === id; });
  }

  function findQuestion(id) {
    return (DATA.questions || []).find(function (question) { return question.id === id; });
  }

  function matchesClinicTarget(item, targetWeak) {
    if (!item || !targetWeak || (!targetWeak.topic && !targetWeak.model)) return false;
    if (targetWeak.model && item.model === targetWeak.model) return true;
    var needle = normalizeText(targetWeak.topic || "");
    if (!needle) return false;
    var haystack = normalizeText([
      item.model,
      item.domain,
      item.topic,
      item.title,
      item.front,
      item.prompt
    ].join(" "));
    return needle.split(" ").filter(Boolean).some(function (part) {
      return part.length > 2 && haystack.indexOf(part) !== -1;
    });
  }

  function labelForClinicLevel(level) {
    var labels = {
      learn: "Learn mode",
      practice: "Practice mode",
      exam: "Exam mode"
    };
    return labels[level] || "Practice mode";
  }

  function labelForFlashcardType(type) {
    var labels = {
      basic: "Basic Recall",
      situation: "Situation Card",
      modelClue: "Model Clue",
      compare: "Compare Card",
      ethics: "Ethics Card"
    };
    return labels[type] || "Flashcard";
  }

  function labelForCategory(category) {
    var labels = {
      conceptualization: "Conceptualization",
      therapistRole: "Therapist Role",
      intervention: "Intervention",
      nextStep: "Next Step",
      ethicsRisk: "Ethics and Risk",
      triangle: "Triangle",
      fusion: "Fusion",
      cutoff: "Cutoff",
      differentiation: "Differentiation",
      multigenerational: "Multigenerational Pattern",
      coachMove: "Bowen Coach Move",
      cycle: "Negative Cycle",
      pursuerMove: "Pursuer Move",
      withdrawerMove: "Withdrawer Move",
      secondaryEmotion: "Secondary Emotion",
      primaryEmotion: "Primary Emotion",
      attachmentFear: "Attachment Fear",
      unmetNeed: "Unmet Need"
    };
    return labels[category] || category;
  }

  function saveScenarioMirror() {
    var mirror = {};
    state.profiles.forEach(function (profile) {
      mirror[profile.id] = profile.scenarioAttempts || [];
    });
    safeStorage.setItem(SCENARIO_KEY, JSON.stringify(mirror));
  }

  function readJson(key, fallback) {
    try {
      var raw = safeStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  var safeStorage = {
    memory: {},
    getItem: function (key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return this.memory[key] || null;
      }
    },
    setItem: function (key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        this.memory[key] = String(value);
      }
    }
  };

  function average(values) {
    var clean = values.filter(function (value) { return typeof value === "number" && !isNaN(value); });
    if (clean.length === 0) return null;
    return Math.round(clean.reduce(function (sum, value) { return sum + value; }, 0) / clean.length);
  }

  function unique(values) {
    return values.filter(function (value, index, array) {
      return value && array.indexOf(value) === index;
    });
  }

  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function formatDate(value) {
    if (!value) return "";
    var date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
