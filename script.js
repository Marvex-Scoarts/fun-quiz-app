// 1. THE 50-QUESTION FAMILY PARTY PACK
const questions = [
  // --- ANIMALS & NATURE ---
  { question: "Which animal has rectangular pupils in its eyes?", answers: [{ text: "Horse", correct: false }, { text: "Goat", correct: true }, { text: "Owl", correct: false }, { text: "Octopus", correct: false }] },
  { question: "What is the only bird known to be able to fly backward?", answers: [{ text: "Eagle", correct: false }, { text: "Flamingo", correct: false }, { text: "Hummingbird", correct: true }, { text: "Penguin", correct: false }] },
  { question: "How many hearts does an octopus have?", answers: [{ text: "1", correct: false }, { text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
  { question: "What color is a polar bear's skin underneath its white fur?", answers: [{ text: "Pink", correct: false }, { text: "Black", correct: true }, { text: "White", correct: false }, { text: "Gray", correct: false }] },
  { question: "Which mammal is known to have the most powerful bite in the world?", answers: [{ text: "Lion", correct: false }, { text: "Hippopotamus", correct: true }, { text: "Grizzly Bear", correct: false }, { text: "Great White Shark", correct: false }] },
  { question: "What do you call a group of flamingos?", answers: [{ text: "A flock", correct: false }, { text: "A flamboyance", correct: true }, { text: "A sparkle", correct: false }, { text: "A parade", correct: false }] },
  { question: "Which animal sleeps standing up?", answers: [{ text: "Horse", correct: true }, { text: "Bear", correct: false }, { text: "Fox", correct: false }, { text: "Rabbit", correct: false }] },
  { question: "Which sea creature holds hands while sleeping so they don't drift apart?", answers: [{ text: "Dolphins", correct: false }, { text: "Sea Otters", correct: true }, { text: "Seals", correct: false }, { text: "Manatees", correct: false }] },
  { question: "How many noses does a slug have?", answers: [{ text: "1", correct: false }, { text: "2", correct: false }, { text: "4", correct: true }, { text: "None", correct: false }] },
  { question: "What is the fastest land animal in the world?", answers: [{ text: "Lion", correct: false }, { text: "Cheetah", correct: true }, { text: "Pronghorn Antelope", correct: false }, { text: "Greyhound", correct: false }] },

  // --- SCIENCE & SPACE ---
  { question: "Which planet in our solar system spins backward compared to most others?", answers: [{ text: "Mars", correct: false }, { text: "Jupiter", correct: false }, { text: "Venus", correct: true }, { text: "Neptune", correct: false }] },
  { question: "What is the hardest natural substance on Earth?", answers: [{ text: "Gold", correct: false }, { text: "Iron", correct: false }, { text: "Diamond", correct: true }, { text: "Quartz", correct: false }] },
  { question: "How long does it take for light from the Sun to reach Earth?", answers: [{ text: "8 seconds", correct: false }, { text: "8 minutes", correct: true }, { text: "8 hours", correct: false }, { text: "Instantaneously", correct: false }] },
  { question: "Which planet has the most moons in our solar system?", answers: [{ text: "Jupiter", correct: false }, { text: "Saturn", correct: true }, { text: "Uranus", correct: false }, { text: "Neptune", correct: false }] },
  { question: "What gas do plants absorb from the atmosphere to make food?", answers: [{ text: "Oxygen", correct: false }, { text: "Nitrogen", correct: false }, { text: "Carbon Dioxide", correct: true }, { text: "Helium", correct: false }] },
  { question: "At what temperature are Celsius and Fahrenheit equal?", answers: [{ text: "0 degrees", correct: false }, { text: "-40 degrees", correct: true }, { text: "32 degrees", correct: false }, { text: "-100 degrees", correct: false }] },
  { question: "What is the center of an atom called?", answers: [{ text: "Electron", correct: false }, { text: "Proton", correct: false }, { text: "Nucleus", correct: true }, { text: "Molecule", correct: false }] },
  { question: "Which planet is known as the Red Planet?", answers: [{ text: "Venus", correct: false }, { text: "Mars", correct: true }, { text: "Mercury", correct: false }, { text: "Jupiter", correct: false }] },
  { question: "Sound travels faster through which of the following?", answers: [{ text: "Air", correct: false }, { text: "Water", correct: true }, { text: "Outer Space", correct: false }, { text: "They are all equal", correct: false }] },
  { question: "What is the largest organ on the human body?", answers: [{ text: "The Liver", correct: false }, { text: "The Brain", correct: false }, { text: "The Skin", correct: true }, { text: "The Heart", correct: false }] },

  // --- FOOD & KITCHEN TRIVIA ---
  { question: "Which common fruit is technically a berry, while a strawberry is NOT?", answers: [{ text: "Banana", correct: true }, { text: "Apple", correct: false }, { text: "Peach", correct: false }, { text: "Cherry", correct: false }] },
  { question: "What food never spoils and can last for thousands of years?", answers: [{ text: "White rice", correct: false }, { text: "Honey", correct: true }, { text: "Dark chocolate", correct: false }, { text: "Peanut butter", correct: false }] },
  { question: "Which fruit floats in water because 25% of its volume is air?", answers: [{ text: "Watermelon", correct: false }, { text: "Apple", correct: true }, { text: "Banana", correct: false }, { text: "Mango", correct: false }] },
  { question: "What was the original color of carrots before they were bred to be orange?", answers: [{ text: "Blue", correct: false }, { text: "Purple", correct: true }, { text: "Red", correct: false }, { text: "Green", correct: false }] },
  { question: "Which spice is the most expensive in the world by weight?", answers: [{ text: "Vanilla", correct: false }, { text: "Cardamom", correct: false }, { text: "Saffron", correct: true }, { text: "Cinnamon", correct: false }] },
  { question: "What is the main ingredient in guacamole?", answers: [{ text: "Cucumber", correct: false }, { text: "Avocado", correct: true }, { text: "Zucchini", correct: false }, { text: "Green Pepper", correct: false }] },
  { question: "Which country invented ice cream?", answers: [{ text: "Italy", correct: false }, { text: "China", correct: true }, { text: "United States", correct: false }, { text: "France", correct: false }] },
  { question: "What are dried plums called?", answers: [{ text: "Raisins", correct: false }, { text: "Prunes", correct: true }, { text: "Dates", correct: false }, { text: "Figs", correct: false }] },
  { question: "Which nut is used to make marzipan?", answers: [{ text: "Walnut", correct: false }, { text: "Almond", correct: true }, { text: "Cashew", correct: false }, { text: "Hazelnut", correct: false }] },
  { question: "How many seeds are on the outside of an average strawberry?", answers: [{ text: "About 50", correct: false }, { text: "About 200", correct: true }, { text: "About 500", correct: false }, { text: "Zero", correct: false }] },

  // --- WORLD, GEOGRAPHY & HISTORY ---
  { question: "How many minutes was the shortest war in recorded history?", answers: [{ text: "38 minutes", correct: true }, { text: "2 hours", correct: false }, { text: "15 minutes", correct: false }, { text: "1 full day", correct: false }] },
  { question: "Which country has more lakes than the rest of the world's countries combined?", answers: [{ text: "Brazil", correct: false }, { text: "Russia", correct: false }, { text: "Canada", correct: true }, { text: "Australia", correct: false }] },
  { question: "What is the smallest country in the world by land area?", answers: [{ text: "Monaco", correct: false }, { text: "Vatican City", correct: true }, { text: "San Marino", correct: false }, { text: "Malta", correct: false }] },
  { question: "Which continent is the only one with land in all four hemispheres?", answers: [{ text: "Asia", correct: false }, { text: "Africa", correct: true }, { text: "South America", correct: false }, { text: "Australia", correct: false }] },
  { question: "What is the longest river in the world?", answers: [{ text: "Amazon River", correct: false }, { text: "Nile River", correct: true }, { text: "Yangtze River", correct: false }, { text: "Mississippi River", correct: false }] },
  { question: "Which country is home to the kangaroo and the koala?", answers: [{ text: "New Zealand", correct: false }, { text: "Australia", correct: true }, { text: "South Africa", correct: false }, { text: "Indonesia", correct: false }] },
  { question: "In which city would you find the famous Eiffel Tower?", answers: [{ text: "London", correct: false }, { text: "Rome", correct: false }, { text: "Paris", correct: true }, { text: "Madrid", correct: false }] },
  { question: "What is the largest ocean on Earth?", answers: [{ text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Pacific Ocean", correct: true }, { text: "Arctic Ocean", correct: false }] },
  { question: "Which ancient wonder of the world is still standing today?", answers: [{ text: "Hanging Gardens of Babylon", correct: false }, { text: "Great Pyramid of Giza", correct: true }, { text: "Colossus of Rhodes", correct: false }, { text: "Lighthouse of Alexandria", correct: false }] },
  { question: "Which country gifted the Statue of Liberty to the United States?", answers: [{ text: "England", correct: false }, { text: "France", correct: true }, { text: "Spain", correct: false }, { text: "Germany", correct: false }] },

  // --- POP CULTURE, FUN FACTS & BRAIN TEASERS ---
  { question: "What was the very first item ever sold on eBay in 1995?", answers: [{ text: "A vintage comic book", correct: false }, { text: "A broken laser pointer", correct: true }, { text: "A Beanie Baby", correct: false }, { text: "A pair of sneakers", correct: false }] },  
{ question: "If you drop a yellow hat in the Red Sea, what does it become?", answers: [{ text: "Orange", correct: false }, { text: "Wet", correct: true }, { text: "Invisible", correct: false }, { text: "Heavy", correct: false }] },
{ question: "Which part of your body never stops growing throughout your entire life?", answers: [{ text: "Your hands", correct: false }, { text: "Your ears and nose", correct: true }, { text: "Your eyes", correct: false }, { text: "Your kneecaps", correct: false }] },
{ question: "What is the name of the toy cowboy in Toy Story?", answers: [{ text: "Buzz", correct: false }, { text: "Woody", correct: true }, { text: "Jessie", correct: false }, { text: "Andy", correct: false }] },
{ question: "How many colors are in a traditional rainbow?", answers: [{ text: "5", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
{ question: "What has keys that open no locks, space but no room, and you can enter but not go outside?", answers: [{ text: "A piano", correct: false }, { text: "A keyboard", correct: true }, { text: "A map", correct: false }, { text: "A house", correct: false }] },
{ question: "Which superhero is also known as the Caped Crusader?", answers: [{ text: "Superman", correct: false }, { text: "Batman", correct: true }, { text: "Spider-Man", correct: false }, { text: "Iron Man", correct: false }] },
{ question: "How many months of the year have 28 days?", answers: [{ text: "1", correct: false }, { text: "2", correct: false }, { text: "All 12", correct: true }, { text: "6", correct: false }] },
{ question: "What is the name of the snowman in Disney's Frozen?", answers: [{ text: "Sven", correct: false }, { text: "Olaf", correct: true }, { text: "Kristoff", correct: false }, { text: "Hans", correct: false }] },
{ question: "What gets wetter the more it dries?", answers: [{ text: "A sponge", correct: false }, { text: "A towel", correct: true }, { text: "The ocean", correct: false }, { text: "An umbrella", correct: false }] }
];
//ARCADE SOUND EFFECTS GENERATOR ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === "suspended") audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === "correct") {
    // Happy ascending arcade chime
    osc.type = "triangle";
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === "wrong") {
    // Low arcade buzz
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.3);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === "win") {
    // Victory fanfare
    osc.type = "square";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.12);
    osc.frequency.setValueAtTime(783.99, now + 0.24);
    osc.frequency.setValueAtTime(1046.50, now + 0.36);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
    osc.start(now);
    osc.stop(now + 0.7);
  }
}

// --- GRAB HTML ELEMENTS ---
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

// Team & Result Elements
const turnIndicator = document.getElementById("turn-indicator");
const teamScoresDisplay = document.getElementById("team-scores");
const winnerAnnouncement = document.getElementById("winner-announcement");
const finalT1Display = document.getElementById("final-t1");
const finalT2Display = document.getElementById("final-t2");
const resultMessage = document.getElementById("result-message");

// --- GAME VARIABLES ---
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let team1Score = 0;
let team2Score = 0;
let currentTeam = 1; // Alternates between 1 and 2
let timeLeft = 15;
let timerInterval;

// --- START & RESET QUIZ ---
function startQuiz() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  totalScore = 0;
  team1Score = 0;
  team2Score = 0;
  currentTeam = 1;

  updateScoreboard();
  quizScreen.style.display = "block";
  resultScreen.style.display = "none";
  nextBtn.style.display = "none";

  showQuestion();
}

function updateScoreboard() {
  scoreDisplay.innerText = totalScore;
  teamScoresDisplay.innerText = `T1: ${team1Score} | T2: ${team2Score}`;
  turnIndicator.innerText = currentTeam === 1 ? "🔥 Team 1's Turn" : "⚡ Team 2's Turn";
  turnIndicator.style.color = currentTeam === 1 ? "#39ff14" : "#ff007f";
}

// --- DISPLAY QUESTION ---
function showQuestion() {
  resetState();
  startTimer();
  updateScoreboard();

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionText.innerText = `${currentQuestionIndex + 1}/${shuffledQuestions.length}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerDisplay.innerText = timeLeft;
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// --- TIMER ---
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      playSound("wrong");
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

// --- CHECK ANSWER & AWARD TEAM POINT ---
function selectAnswer(e) {
  clearInterval(timerInterval);
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    playSound("correct");
    totalScore++;
    if (currentTeam === 1) {
      team1Score++;
    } else {
      team2Score++;
    }
    updateScoreboard();
  } else {
    selectedBtn.classList.add("wrong");
    playSound("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

// --- NEXT QUESTION & SWITCH TEAMS ---
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  // Switch between Team 1 and Team 2 every question!
  currentTeam = currentTeam === 1 ? 2 : 1;

  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// --- FINAL RESULTS + CONFETTI ---
function showResults() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  playSound("win");

  finalT1Display.innerText = team1Score;
  finalT2Display.innerText = team2Score;

  if (team1Score > team2Score) {
    winnerAnnouncement.innerText = "🏆 Team 1 Wins the Crown! 🔥";
    resultMessage.innerText = "Unstoppable trivia champions!";
  } else if (team2Score > team1Score) {
    winnerAnnouncement.innerText = "🏆 Team 2 Wins the Crown! ⚡";
    resultMessage.innerText = "Incredible teamwork and fast thinking!";
  } else {
    winnerAnnouncement.innerText = "🤝 It's an Epic Tie! 🎉";
    resultMessage.innerText = "Both teams are equally brilliant—rematch time!";
  }

  // Confetti ONLY runs here when results show!
  launchNeonConfetti();
}

restartBtn.addEventListener("click", startQuiz);

// Start game! (Make sure launchNeonConfetti() is NOT down here!)
startQuiz();

// --- BUILT-IN OFFLINE NEON CONFETTI ENGINE ---
function launchNeonConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const neonColors = ["#00f3ff", "#ff007f", "#39ff14", "#ffe600", "#ffffff"];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 5,
    color: neonColors[Math.floor(Math.random() * neonColors.length)],
    speedY: Math.random() * 4 + 2,
    speedX: Math.random() * 4 - 2,
    angle: Math.random() * 360,
    spin: Math.random() * 10 - 5
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    frame++;
    if (frame < 220) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  animate();
}