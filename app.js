const experiments = [
  {
    id: "needle-compass",
    title: "Magnetize a Floating Compass",
    topic: "Magnetism",
    difficulty: "Focused",
    time: "15 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen + desk",
    risk: "Medium",
    art: "art-magnet",
    image: "assets/experiments/needle-compass.png",
    result: "Make a tiny floating compass that turns by itself and points the same way again and again.",
    hook: "A needle becomes a real direction finder.",
    before: "A normal needle has no obvious power. It just sits there.",
    during: "You rub it with a magnet, float it on water, and remove almost all friction.",
    reveal: "The needle slowly turns and settles like it knows where north is.",
    materials: ["Sewing needle", "Fridge magnet", "Small leaf or paper circle", "Bowl of water", "Tape"],
    hazard: "The needle is sharp and easy to lose. Put it on tape when you are not using it, and do not test this near eyes, pets, or younger kids.",
    steps: [
      "Stroke the needle from center to tip with one pole of the magnet 40 times in the same direction.",
      "Tape the needle flat onto a dry leaf or small paper circle.",
      "Set it gently on still water and wait for it to stop spinning.",
      "Rotate the bowl and watch whether the needle returns to the same direction."
    ],
    observe: ["Which end keeps pointing the same way?", "Does stroking the needle more times make it settle faster?", "What happens near metal objects?"],
    why: "The magnet lines up tiny magnetic regions inside the steel needle. Once it floats with very little friction, Earth's magnetic field can twist it into alignment.",
    variation: "Try remagnetizing the needle with the opposite stroke direction and compare which end points north."
  },
  {
    id: "density-column",
    title: "Stack Invisible Weight",
    topic: "Density",
    difficulty: "Starter",
    time: "20 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen",
    risk: "Low",
    art: "art-density",
    image: "assets/experiments/density-column.png",
    result: "Pour liquids into one glass and watch them stack into clean, colorful layers.",
    hook: "A glass turns into a floating liquid tower.",
    before: "Everything looks like it should mix into one mess.",
    during: "You pour slowly from heaviest to lightest, giving each liquid a chance to settle.",
    reveal: "The layers hold their shape like invisible shelves are separating them.",
    materials: ["Clear glass", "Honey or syrup", "Dish soap", "Water", "Cooking oil", "Food coloring if available"],
    hazard: "This is slippery if spilled. Keep the glass away from the table edge and wipe oil immediately before anyone walks through it.",
    steps: [
      "Pour syrup slowly into the glass until it covers the bottom.",
      "Tilt the glass and add dish soap down the side.",
      "Color water if you have food coloring, then pour it slowly over the back of a spoon.",
      "Add cooking oil last and wait two minutes for the layers to sharpen."
    ],
    observe: ["Which liquid sinks?", "Which liquid forms the cleanest boundary?", "What happens if you drop a tiny piece of paper or grape skin?"],
    why: "Density is mass packed into volume. Heavier liquids for the same volume sink below lighter liquids, and oil also avoids mixing with water because its molecules do not bond well with water.",
    variation: "Dissolve salt into the water and repeat. The water layer should shift because its density changes."
  },
  {
    id: "salt-crystal-lab",
    title: "Grow Salt Crystals on a String",
    topic: "Crystals",
    difficulty: "Focused",
    time: "2 days",
    timeGroup: "Multi-day",
    materialsGroup: "Kitchen",
    risk: "Medium",
    art: "art-crystal",
    image: "assets/experiments/salt-crystal-lab.png",
    result: "Leave salt water alone and come back to sharp little crystals growing on a string.",
    hook: "Plain salt water grows rock-like shapes.",
    before: "The jar looks like boring salty water.",
    during: "Water slowly leaves, and the salt has to rebuild itself somewhere.",
    reveal: "Tiny crystal edges appear on the string, like the liquid secretly built them.",
    materials: ["Table salt", "Warm water", "Clear jar", "String", "Pencil", "Spoon"],
    hazard: "Warm water can burn if rushed. Use water that is hot enough to dissolve salt, not boiling, and keep the jar stable while it cools.",
    steps: [
      "Stir salt into warm water until no more dissolves and grains stay at the bottom.",
      "Tie string to a pencil and rest the pencil across the jar so the string hangs into the liquid.",
      "Place the jar somewhere it will not be bumped.",
      "Check the string over the next two days without stirring."
    ],
    observe: ["Where do the first crystals form?", "Are the crystal edges square, jagged, or needle-like?", "Does a cooler spot grow crystals differently?"],
    why: "Warm water can hold more dissolved salt. As water evaporates and cools, excess salt leaves the solution and locks into repeating crystal patterns.",
    variation: "Run two jars: one with plain salt water and one with a tiny pinch of extra salt grains on the string as seed crystals."
  },
  {
    id: "static-paper-storm",
    title: "Command a Paper Storm",
    topic: "Electricity",
    difficulty: "Starter",
    time: "10 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Desk",
    risk: "Low",
    art: "art-static",
    image: "assets/experiments/static-paper-storm.png",
    result: "Charge a balloon or comb and make bits of paper jump up without touching them.",
    hook: "Paper jumps toward your hand like magic.",
    before: "The paper pieces are still and ordinary.",
    during: "Rubbing the balloon or comb builds up electric charge.",
    reveal: "The paper lifts, shakes, and sticks before falling back down.",
    materials: ["Balloon or plastic comb", "Wool sweater or dry hair", "Tiny paper pieces", "Dry table"],
    hazard: "Keep the charged object away from electronics and screens. Static shocks are small, but electronics do not enjoy surprise charges.",
    steps: [
      "Tear paper into pieces smaller than rice grains.",
      "Rub a balloon or comb against wool or dry hair for 20 seconds.",
      "Hold it above the paper without touching.",
      "Move the object slowly and map the distance where the paper starts jumping."
    ],
    observe: ["How far away can the object still attract paper?", "Does humidity change the result?", "Do larger paper pieces jump less?"],
    why: "Rubbing moves electrons from one material to another. The charged object pulls opposite charges inside the paper toward it, creating attraction.",
    variation: "Compare balloon, comb, plastic wrap, and a metal spoon. The difference will expose which materials hold static charge."
  },
  {
    id: "water-lens",
    title: "Build a Water Lens",
    topic: "Light",
    difficulty: "Starter",
    time: "15 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen + desk",
    risk: "Low",
    art: "art-light",
    image: "assets/experiments/water-lens.png",
    result: "Turn one drop of water into a lens that makes printed words look bigger.",
    hook: "A water drop becomes a magnifying glass.",
    before: "A clear drop looks too simple to do anything useful.",
    during: "You shape the drop into a tiny dome above printed text.",
    reveal: "Letters swell and sharpen when the drop is at the right distance.",
    materials: ["Clear plastic wrap", "Small cup", "Rubber band", "Water", "Printed text"],
    hazard: "Do not use this to focus sunlight. Concentrated sunlight can heat surfaces quickly and can injure eyes.",
    steps: [
      "Stretch plastic wrap over a cup and secure it with a rubber band.",
      "Place a few drops of water in the center so they form a dome.",
      "Hold printed text under the cup and move it slowly closer or farther.",
      "Record the distance where the letters look largest and sharpest."
    ],
    observe: ["At what height does the text become sharp?", "Does a bigger drop magnify more?", "What happens if the water spreads flat?"],
    why: "A curved water surface slows and bends light rays. When the rays bend toward your eye in the right way, small text appears larger.",
    variation: "Try different drop sizes and sketch how the sharp viewing distance changes."
  },
  {
    id: "bottle-lung",
    title: "Make a Bottle Lung",
    topic: "Pressure",
    difficulty: "Advanced",
    time: "30 min",
    timeGroup: "20-40 min",
    materialsGroup: "Kitchen + desk",
    risk: "Medium",
    art: "art-pressure",
    image: "assets/experiments/bottle-lung.png",
    result: "Build a bottle model where a balloon inflates when you pull on the bottom.",
    hook: "A bottle starts breathing.",
    before: "A balloon inside a bottle looks trapped and useless.",
    during: "You pull the bottom membrane and change the air pressure inside.",
    reveal: "The balloon inflates even though you never blow into it.",
    materials: ["Plastic bottle", "Two balloons", "Straw", "Tape", "Scissors", "Plastic wrap"],
    hazard: "Cut plastic can leave sharp edges. Cut slowly, tape the cut rim, and stop if the bottle cracks into jagged pieces.",
    steps: [
      "Cut the bottom off a plastic bottle and tape the rim smooth.",
      "Attach one balloon to the end of a straw and seal it with tape.",
      "Feed the straw through the bottle opening so the balloon hangs inside.",
      "Stretch plastic wrap or a cut balloon over the open bottom as a flexible diaphragm.",
      "Pull the bottom membrane down and watch the inside balloon."
    ],
    observe: ["What happens when the bottom membrane moves down?", "What happens when it moves up?", "Where could air leak and ruin the model?"],
    why: "Pulling the membrane down increases the bottle's internal volume and lowers pressure. Outside air moves through the straw to equalize pressure, inflating the balloon.",
    variation: "Make tiny air leaks with loose tape and compare how the model fails."
  },
  {
    id: "red-cabbage-code",
    title: "Decode Acids with Cabbage",
    topic: "Chemistry",
    difficulty: "Focused",
    time: "35 min",
    timeGroup: "20-40 min",
    materialsGroup: "Kitchen",
    risk: "Medium",
    art: "art-chemistry",
    image: "assets/experiments/red-cabbage-code.png",
    result: "Make purple cabbage water change color when it touches acids and bases.",
    hook: "Kitchen liquids reveal hidden chemistry.",
    before: "The purple liquid looks like colored water.",
    during: "You add safe household liquids one at a time.",
    reveal: "The color flips pink, blue, or green depending on what is inside the cup.",
    materials: ["Red cabbage", "Warm water", "Clear cups", "Vinegar", "Baking soda", "Lemon juice", "Soap water"],
    hazard: "Never mix random cleaners. Test only food items, baking soda, and plain soap water. Do not taste anything after it enters the experiment cups.",
    steps: [
      "Tear cabbage leaves into a cup and cover them with warm water.",
      "Wait 15 minutes until the water turns purple, then pour the liquid into clear cups.",
      "Add a spoonful of vinegar to one cup and baking soda solution to another.",
      "Test lemon juice and soap water separately, using clean spoons."
    ],
    observe: ["Which liquids turn the indicator pink?", "Which turn it blue or green?", "Does adding baking soda reverse vinegar's color change?"],
    why: "Cabbage contains anthocyanins, pigments whose shapes change in acidic or basic conditions. Shape changes alter which wavelengths of light they absorb.",
    variation: "Create a color scale from lemon juice to baking soda solution and rank unknown safe kitchen liquids."
  },
  {
    id: "paper-bridge",
    title: "Engineer a Paper Bridge",
    topic: "Engineering",
    difficulty: "Starter",
    time: "20 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Desk",
    risk: "Low",
    art: "art-engineering",
    image: "assets/experiments/paper-bridge.png",
    result: "Fold one sheet of paper so it holds a surprising stack of coins.",
    hook: "Weak paper turns into a small bridge.",
    before: "A flat sheet collapses almost immediately.",
    during: "You fold, roll, and shape it so the paper fights bending.",
    reveal: "The same paper suddenly holds much more weight.",
    materials: ["Paper", "Two books", "Coins", "Tape", "Ruler"],
    hazard: "Stacks of coins fall suddenly. Keep toes and glass objects away from the drop zone.",
    steps: [
      "Place two books 15 centimeters apart and lay a flat sheet of paper across them.",
      "Add coins one at a time until the bridge collapses.",
      "Fold a new sheet into a zigzag accordion and test again.",
      "Try a rolled tube bridge and compare the maximum coin count."
    ],
    observe: ["Which shape carries the most coins?", "Where does the bridge fail first?", "Does a longer span change the winning design?"],
    why: "Folds move material away from the center line, increasing stiffness. Engineers use shape, not just material strength, to fight bending.",
    variation: "Limit yourself to one sheet and 20 centimeters of tape, then design the strongest bridge possible."
  },
  {
    id: "pepper-force-field",
    title: "Break Water's Force Field",
    topic: "Chemistry",
    difficulty: "Starter",
    time: "8 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen",
    risk: "Low",
    art: "art-chemistry",
    image: "assets/experiments/pepper-force-field.png",
    result: "Touch soapy water once and watch pepper race away from the center.",
    hook: "Pepper shoots across the water.",
    before: "Pepper floats calmly on the surface.",
    during: "A tiny touch of soap breaks the surface tension pattern.",
    reveal: "The pepper rushes outward in a fast ring.",
    materials: ["Bowl", "Water", "Ground pepper", "Dish soap", "Cotton swab"],
    hazard: "Soap in eyes hurts fast. Keep hands away from your face until you wash them.",
    steps: [
      "Fill a bowl with still water.",
      "Sprinkle a thin layer of pepper over the surface.",
      "Dip a cotton swab in dish soap.",
      "Touch the soapy swab to the center of the water."
    ],
    observe: ["How quickly does the pepper move?", "Does more soap create a stronger effect?", "Can the same water repeat the trick?"],
    why: "Water molecules pull on each other at the surface, creating surface tension. Soap disrupts that pull, so the stronger tension around the edges drags the pepper outward.",
    variation: "Test cinnamon, tiny paper dots, or other floating particles and compare movement."
  },
  {
    id: "vacuum-cup-lift",
    title: "Lift Water with Air Pressure",
    topic: "Pressure",
    difficulty: "Focused",
    time: "15 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen",
    risk: "Medium",
    art: "art-pressure",
    image: "assets/experiments/vacuum-cup-lift.png",
    result: "Flip a full cup upside down and make a flat card hold the water in place.",
    hook: "Water stays up when it should fall.",
    before: "A full cup upside down sounds like an instant spill.",
    during: "You seal the top with card and let air pressure do the holding.",
    reveal: "The card sticks and the water stays inside the inverted cup.",
    materials: ["Cup", "Water", "Flat cardboard square", "Sink or tray", "Towel"],
    hazard: "Do this over a sink or tray. The failure mode is instant water everywhere, and slippery floors turn simple physics into a bad decision.",
    steps: [
      "Fill a cup almost to the top with water.",
      "Place cardboard over the rim and press it flat with your palm.",
      "Invert the cup over a sink while keeping the cardboard sealed.",
      "Slowly remove your supporting hand and watch the cardboard."
    ],
    observe: ["How full must the cup be for the seal to work?", "What happens with thick cardboard versus thin card?", "How long does the seal last?"],
    why: "Air pressure below the cardboard pushes upward harder than the water pushes downward when the seal is good. The cardboard also helps surface tension keep air from entering.",
    variation: "Try different cup sizes and compare which one holds longest."
  }
];

const filters = {
  category: "All",
  topic: "All",
  search: ""
};

const categoryOptions = ["All", "Physics", "Chemistry"];
const topicGroups = {
  Physics: ["Magnetism", "Density", "Electricity", "Light", "Pressure", "Engineering"],
  Chemistry: ["Chemistry", "Crystals"]
};

const experimentGrid = document.querySelector("#experimentGrid");
const detailPanel = document.querySelector("#detailPanel");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const resetFilters = document.querySelector("#resetFilters");
const cardTemplate = document.querySelector("#experimentCardTemplate");
const topicFilterGroup = document.querySelector("#topicFilterGroup");
const topicLabel = document.querySelector("#topicLabel");
const homePage = document.querySelector("#homePage");
const experimentsPage = document.querySelector("#experimentsPage");
const detailPage = document.querySelector("#detailPage");
const startButton = document.querySelector("#startButton");
const backToExperiments = document.querySelector("#backToExperiments");

let selectedId = experiments[0].id;

function renderFilterButtons(containerId, options, key) {
  const container = document.querySelector(containerId);
  container.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = option;
    button.setAttribute("aria-pressed", String(filters[key] === option));

    if (filters[key] === option) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      filters[key] = option;

      if (key === "category") {
        filters.topic = "All";
      }

      render();
    });

    container.appendChild(button);
  });
}

function getExperimentCategory(experiment) {
  if (topicGroups.Physics.includes(experiment.topic)) {
    return "Physics";
  }

  if (topicGroups.Chemistry.includes(experiment.topic)) {
    return "Chemistry";
  }

  return "Other";
}

function renderTopicFilters() {
  const showTopics = filters.category !== "All";
  topicFilterGroup.classList.toggle("hidden", !showTopics);

  if (!showTopics) {
    filters.topic = "All";
    return;
  }

  topicLabel.textContent = `${filters.category} topic`;
  renderFilterButtons("#topicFilters", ["All", ...topicGroups[filters.category]], "topic");
}

function matchesFilters(experiment) {
  const search = filters.search.trim().toLowerCase();
  const searchTarget = [
    experiment.title,
    experiment.topic,
    experiment.result,
    experiment.hook,
    experiment.materials.join(" "),
    experiment.why
  ].join(" ").toLowerCase();

  return (filters.category === "All" || getExperimentCategory(experiment) === filters.category)
    && (filters.topic === "All" || experiment.topic === filters.topic)
    && (!search || searchTarget.includes(search));
}

function renderCards(filteredExperiments) {
  experimentGrid.innerHTML = "";
  resultCount.textContent = `${filteredExperiments.length} experiment${filteredExperiments.length === 1 ? "" : "s"}`;

  if (!filteredExperiments.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No matching experiments. Try a simpler search or show all.";
    experimentGrid.appendChild(empty);
    selectedId = null;
    renderDetail(null);
    return;
  }

  if (!filteredExperiments.some((experiment) => experiment.id === selectedId)) {
    selectedId = filteredExperiments[0].id;
  }

  filteredExperiments.forEach((experiment) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.id = experiment.id;
    card.querySelector(".risk-band").classList.add(`risk-${experiment.risk.toLowerCase()}`);
    const preview = card.querySelector(".preview-art");
    preview.classList.add("has-photo");
    preview.style.backgroundImage = `url("${experiment.image}")`;
    card.querySelector(".card-meta").textContent = experiment.topic;
    card.querySelector(".card-title").textContent = experiment.title;
    card.querySelector(".card-result").textContent = experiment.hook;
    card.querySelector(".card-stats").textContent = `${experiment.time} / ${experiment.risk} risk`;

    if (experiment.id === selectedId) {
      card.classList.add("active");
    }

    card.addEventListener("click", () => {
      selectedId = experiment.id;
      window.location.hash = `experiment/${experiment.id}`;
    });

    experimentGrid.appendChild(card);
  });
}

function listMarkup(items, ordered = false) {
  const list = document.createElement(ordered ? "ol" : "ul");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  return list;
}

function renderDetail(experiment) {
  detailPanel.innerHTML = "";

  if (!experiment) {
    const empty = document.createElement("div");
    empty.className = "detail-empty";
    empty.textContent = "Choose an experiment to see the steps.";
    detailPanel.appendChild(empty);
    return;
  }

  const hero = document.createElement("div");
  hero.className = "detail-hero";
  const imageStyle = `style="background-image: url('${experiment.image}')"`;
  hero.innerHTML = `
    <span class="detail-visual has-photo" ${imageStyle} aria-hidden="true"></span>
    <div>
      <p class="detail-kicker">You will make</p>
      <h2>${experiment.title}</h2>
      <p>${experiment.result}</p>
    </div>
    <div class="detail-tags">
      <span class="tag">${experiment.time}</span>
      <span class="tag">${experiment.risk} risk</span>
    </div>
  `;

  const hazard = document.createElement("section");
  hazard.className = "hazard-checkpoint";
  hazard.innerHTML = `
    <strong>Before you start</strong>
    <p>${experiment.hazard}</p>
  `;

  const body = document.createElement("div");
  body.className = "detail-body";

  const story = document.createElement("section");
  story.className = "result-story";
  [
    ["Before", experiment.before],
    ["During", experiment.during],
    ["Result", experiment.reveal]
  ].forEach(([title, text]) => {
    const item = document.createElement("article");
    item.className = "story-card";
    item.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    story.appendChild(item);
  });

  const sections = [
    ["You need", listMarkup(experiment.materials)],
    ["Steps", listMarkup(experiment.steps, true)],
    ["Why It Works", experiment.why],
    ["Try changing one thing", experiment.variation]
  ];

  body.appendChild(story);

  sections.forEach(([title, content]) => {
    const section = document.createElement("section");
    section.className = "detail-section";
    const heading = document.createElement("h3");
    heading.textContent = title;
    section.appendChild(heading);

    if (typeof content === "string") {
      const p = document.createElement("p");
      p.className = title === "Why It Works" ? "science-explain" : "";
      p.textContent = content;
      section.appendChild(p);
    } else {
      section.appendChild(content);
    }

    body.appendChild(section);
  });

  detailPanel.append(hero, hazard, body);
}

function render() {
  renderFilterButtons("#categoryFilters", categoryOptions, "category");
  renderTopicFilters();

  const filteredExperiments = experiments.filter(matchesFilters);
  renderCards(filteredExperiments);
}

searchInput.addEventListener("input", (event) => {
  filters.search = event.target.value;
  render();
});

resetFilters.addEventListener("click", () => {
  filters.category = "All";
  filters.topic = "All";
  filters.search = "";
  searchInput.value = "";
  selectedId = experiments[0].id;
  render();
});

function showPage(page) {
  homePage.classList.toggle("hidden", page !== "home");
  experimentsPage.classList.toggle("hidden", page !== "experiments");
  detailPage.classList.toggle("hidden", page !== "detail");
}

function route() {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash.startsWith("experiment/")) {
    const id = hash.split("/")[1];
    const experiment = experiments.find((item) => item.id === id) || experiments[0];
    selectedId = experiment.id;
    showPage("detail");
    renderDetail(experiment);
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (hash === "experiments") {
    showPage("experiments");
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  showPage("home");
}

startButton.addEventListener("click", () => {
  window.location.hash = "experiments";
});

backToExperiments.addEventListener("click", () => {
  window.location.hash = "experiments";
});

window.addEventListener("hashchange", route);
render();
route();
