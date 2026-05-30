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
  },
  {
    id: "whoosh-bottle-demo",
    title: "The Whoosh Bottle",
    department: "Adults / advanced",
    topic: "Fire",
    difficulty: "Adults only",
    time: "10 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Outdoor",
    risk: "Red",
    image: "assets/experiments/red-cabbage-code.png",
    result: "A bottle turns invisible vapor into a split-second flame tunnel and a loud whoosh.",
    hook: "A silent bottle suddenly fires like a tiny jet engine.",
    before: "The bottle looks empty, which makes the reveal feel impossible.",
    during: "Alcohol vapor, oxygen, and ignition line up for one fast burn.",
    reveal: "A blue-yellow flame front races through the bottle and disappears almost instantly.",
    safetyGear: ["Safety goggles", "Adult supervision", "Outdoor open space", "Long ignition tool", "Fire extinguisher nearby"],
    materials: ["Large dry plastic bottle", "Small amount of rubbing alcohol", "Long BBQ lighter", "Open outdoor area"],
    hazard: "Never use glass, never lean over the opening, and never repeat impulsively. This uses flammable vapor and must be treated as an adult-supervised fire demonstration.",
    steps: [
      "Set the dry plastic bottle upright in a clear outdoor demo zone.",
      "Create a thin alcohol-vapor coating inside the bottle and remove any visible liquid before ignition.",
      "Move everyone back, put goggles on, and keep faces away from the bottle mouth.",
      "Ignite once from arm's length with a long lighter.",
      "Watch the flame race through the vapor and wait for the bottle to cool before touching it."
    ],
    observe: ["The bottle can look empty while still holding flammable vapor.", "The flame travels through the vapor-air mixture.", "The sound is caused by hot gases expanding quickly."],
    whatCouldGoWrong: "A person leaning over the mouth can be burned, and the wrong container can fail. Prevent this with plastic only, distance, goggles, one controlled ignition, and adult control of the lighter.",
    why: "Alcohol vapor mixes with oxygen along the bottle walls. When ignited, the flame front rapidly consumes that vapor-air mixture, heating the gas and creating the whoosh.",
    variation: "Compare liquid fuel versus vapor fuel using a diagram or slow-motion video instead of chasing a bigger flame."
  },
  {
    id: "pressure-bag-pop",
    title: "The Exploding Pressure Bag",
    department: "Adults / advanced",
    topic: "Pressure",
    difficulty: "Caution",
    time: "12 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen + outdoor",
    risk: "Yellow",
    image: "assets/experiments/vacuum-cup-lift.png",
    result: "A sealed bag inflates by itself until pressure wins and the bag pops.",
    hook: "A quiet reaction turns into a sudden bang.",
    before: "The bag starts flat and harmless-looking.",
    during: "Carbon dioxide gas forms faster than it can escape.",
    reveal: "The bag tightens, swells, and bursts with a loud pop.",
    safetyGear: ["Safety goggles", "Large sink or outdoor ground", "Six-foot step-back zone", "Towel"],
    materials: ["Zip-seal bag", "Vinegar", "Baking soda", "Paper towel"],
    hazard: "The pop can splash vinegar into eyes. Goggles and distance are the main safety controls.",
    steps: [
      "Pour vinegar into the bag and keep the opening upright.",
      "Wrap baking soda in a paper towel packet to delay the reaction.",
      "Drop the packet in, seal the bag fast, and place it flat in a sink or outside.",
      "Step back and watch the bag inflate tighter and tighter.",
      "After the pop, study the splash pattern and where the plastic failed."
    ],
    observe: ["How long the delay lasts before gas builds up.", "Where the bag stretches first.", "Whether the zipper or side seam fails."],
    whatCouldGoWrong: "The bag can burst sideways and splash someone. Prevent it with goggles, a clear splash zone, and by never holding the bag while it inflates.",
    why: "Vinegar and baking soda produce carbon dioxide gas. Inside a sealed bag, that gas raises pressure until the plastic or zipper gives way.",
    variation: "Try changing only the bag size or the amount of trapped air and compare how the failure changes."
  },
  {
    id: "grape-plasma-viewer",
    title: "Microwave Grape Plasma",
    department: "Adults / advanced",
    topic: "Plasma",
    difficulty: "Adults only",
    time: "5 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Kitchen appliance",
    risk: "Red",
    image: "assets/experiments/static-paper-storm.png",
    result: "A tiny glowing plasma flare appears where microwave energy concentrates.",
    hook: "A grape briefly creates the fourth state of matter.",
    before: "A grape looks too ordinary to make a glowing arc.",
    during: "Microwave energy concentrates near a tiny contact point.",
    reveal: "A bright spark or glow appears for a moment, then disappears.",
    safetyGear: ["Safety goggles", "Adult supervision", "Microwave-safe plate", "No repeated runs", "Fire-safe appliance area"],
    materials: ["Microwave", "Fresh grape sample", "Knife", "Plain plate"],
    hazard: "This can damage a microwave, scorch food, or start smoke. It is an adult-only appliance demonstration, not a repeat-until-it-works challenge.",
    steps: [
      "Prepare the grape sample and place it on a plain microwave-safe plate.",
      "Close the microwave and have everyone watch through the door.",
      "Run one very short burst and look for the bright arc or glow.",
      "Stop as soon as a glow appears, smoke appears, or the sample darkens.",
      "Let the plate sit before handling it, then compare the scorch mark with the glow location."
    ],
    observe: ["The glow appears near a small bridge or gap.", "The effect is brief and unpredictable.", "The microwave itself is part of the risk."],
    whatCouldGoWrong: "The microwave can be damaged, smoke can form, or hot material can ignite. Prevent this by using only a short supervised run and stopping immediately at the first sign of heat damage.",
    why: "Microwave fields can concentrate energy in a tiny region, heating ions and vapor until a small plasma forms.",
    variation: "Use slow-motion video analysis instead of trying different foods."
  },
  {
    id: "carbon-sugar-snake",
    title: "The Carbon Sugar Snake",
    department: "Adults / advanced",
    topic: "Fire",
    difficulty: "Adults only",
    time: "20 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Outdoor",
    risk: "Red",
    image: "assets/experiments/salt-crystal-lab.png",
    result: "A black carbon foam snake grows upward from a burning mound.",
    hook: "A tiny pile turns into a crawling carbon tower.",
    before: "The powder looks like plain sugar and baking soda.",
    during: "Heat breaks down the mixture while gas pushes through soft carbon.",
    reveal: "A black spongy column expands, curls, and rises out of the sand.",
    safetyGear: ["Safety goggles", "Heatproof tray", "Outdoor space", "Adult supervision", "Water or extinguisher nearby"],
    materials: ["Sand", "Sugar", "Baking soda", "Small flame source", "Fireproof tray"],
    hazard: "This uses sustained fire and leaves hot residue. Keep it outdoors, keep viewers back, and let everything cool before touching it.",
    steps: [
      "Build a sand mound in the center of a fireproof tray.",
      "Place the sugar-baking soda mixture into a small crater in the mound.",
      "Ignite the heat source around the crater and leave the tray alone.",
      "Watch the first black bubble form, then track how the snake pushes upward.",
      "After the flame is out, wait for full cooldown before breaking open the carbon foam."
    ],
    observe: ["The growth is slow but dramatic.", "The black material is carbon-rich foam.", "The shape depends on heat and gas release."],
    whatCouldGoWrong: "The tray can stay hot, fuel can flare, and residue can burn skin. Prevent it with a heatproof setup, distance, adult control of ignition, and full cooldown.",
    why: "Heat decomposes sugar into carbon-rich material while baking soda releases gas. The gas expands through the soft hot carbon, making it grow.",
    variation: "Film a time-lapse and predict where the foam will curl next."
  },
  {
    id: "green-flame-lab",
    title: "The Green Flame",
    department: "Adults / advanced",
    topic: "Chemistry",
    difficulty: "Adults only",
    time: "10 min",
    timeGroup: "Under 20 min",
    materialsGroup: "Pharmacy + outdoor",
    risk: "Red",
    image: "assets/experiments/red-cabbage-code.png",
    result: "A normal flame shifts into a brilliant green glow.",
    hook: "Fire changes color because atoms are giving off light.",
    before: "The flame looks ordinary.",
    during: "A boron-containing material is heated in the flame.",
    reveal: "The flame glows green as excited atoms release energy as light.",
    safetyGear: ["Safety goggles", "Outdoor or ventilated fire-safe area", "Adult supervision", "Heatproof bowl", "Fire extinguisher nearby"],
    materials: ["Boric acid source", "Small amount of rubbing alcohol", "Fireproof metal or ceramic bowl"],
    hazard: "This involves open flame and flammable liquid. Never add fuel to an active flame and keep the demonstration small and controlled.",
    steps: [
      "Set the heatproof bowl in a clear outdoor or ventilated fire-safe zone.",
      "Prepare a small flame-color sample in the bowl.",
      "Dim the surrounding light slightly so the color is easier to see.",
      "Ignite once and watch the flame shift from ordinary orange-blue into green.",
      "Let the flame burn out naturally and wait before handling the bowl."
    ],
    observe: ["The color is strongest in the hotter part of the flame.", "The green color is evidence of excited atoms.", "The container remains hot after the flame is gone."],
    whatCouldGoWrong: "Adding fuel after ignition can cause a flash fire. Prevent it with a small setup, no refueling, goggles, and adult control of ignition.",
    why: "Heat excites electrons in boron atoms. When those electrons drop back down, they release energy as green light.",
    variation: "Compare this with a spectroscope page that shows element colors without flame."
  },
  {
    id: "scrap-bot-rover",
    title: "Build a Scrap-Bot Rover",
    department: "Robotics",
    topic: "Robot",
    difficulty: "Builder",
    time: "2-3 hours",
    timeGroup: "Multi-stage",
    materialsGroup: "Salvage + electronics",
    risk: "Medium",
    image: "assets/experiments/paper-bridge.png",
    result: "Build a small moving robot rover from a simple chassis, motors, wheels, and a battery pack.",
    hook: "Turn loose parts into a robot that actually drives.",
    before: "You start with motors, cardboard or plastic, wires, and a pile of parts that do not look like a machine yet.",
    during: "You build the body, mount the wheels, connect power, and test movement one system at a time.",
    reveal: "The rover moves forward, turns, and becomes a platform you can upgrade later.",
    materials: ["2 DC motors", "2 wheels", "Battery pack", "Switch", "Wires", "Cardboard or plastic chassis", "Tape or hot glue", "Skewer or axle"],
    parts: [
      { name: "DC motors", buy: "Buy a 3-6V hobby motor pair", salvage: "Take from a broken toy car, handheld fan, or old electric toothbrush" },
      { name: "Wheels", buy: "Buy small robot wheels", salvage: "Use bottle caps, toy car wheels, or round plastic lids" },
      { name: "Chassis", buy: "Buy acrylic robot chassis", salvage: "Cut from cardboard, food-container plastic, or scrap foam board" },
      { name: "Battery pack", buy: "Buy AA battery holder", salvage: "Reuse a holder from a broken toy or small LED decoration" },
      { name: "Switch", buy: "Buy a mini slide switch", salvage: "Reuse a switch from a broken flashlight or toy" }
    ],
    stages: [
      {
        title: "Stage 1 - Chassis design",
        video: "Video placeholder",
        tasks: ["Sketch the rover from the top.", "Mark where the motors, wheels, battery, and switch will sit.", "Cut a flat chassis that is wide enough not to tip over."]
      },
      {
        title: "Stage 2 - Drive system",
        video: "Video placeholder",
        tasks: ["Mount the motors opposite each other.", "Attach wheels and check that both spin freely.", "Add a rear skid or small caster so the rover balances."]
      },
      {
        title: "Stage 3 - Electronics",
        video: "Video placeholder",
        tasks: ["Connect the battery pack through the switch.", "Wire both motors and test forward motion.", "Reverse one motor wire if the rover spins in place."]
      },
      {
        title: "Stage 4 - Test and upgrade",
        video: "Video placeholder",
        tasks: ["Run a straight-line test.", "Move weight around until it drives smoothly.", "Add a bumper, decoration, or simple sensor later."]
      }
    ],
    hazard: "Use low-voltage batteries only. Do not connect motors directly to wall power, and stop if wires heat up.",
    steps: ["Build the chassis.", "Mount the motors and wheels.", "Wire the battery and switch.", "Test movement and balance."],
    observe: ["Does the rover pull left or right?", "Do the wheels slip?", "Does the battery placement change stability?"],
    whatCouldGoWrong: "Wires can heat if shorted, and hot glue can burn skin. Prevent this by using low voltage, checking connections, and letting glue cool before touching.",
    why: "A robot rover converts electrical energy from the battery into motor rotation. The chassis turns that rotation into controlled movement.",
    variation: "Add a cardboard scoop, LED headlights, or a simple obstacle bumper."
  },
  {
    id: "rubber-band-car",
    title: "Build a Rubber-Band Speed Car",
    department: "Robotics",
    topic: "Car",
    difficulty: "Builder",
    time: "90 min",
    timeGroup: "Multi-stage",
    materialsGroup: "Home + salvage",
    risk: "Low",
    image: "assets/experiments/paper-bridge.png",
    result: "Build a small car powered by stored elastic energy instead of batteries.",
    hook: "A rubber band becomes an engine.",
    before: "The car starts as sticks, caps, and a rubber band.",
    during: "You align axles, reduce friction, and wind the rubber band motor.",
    reveal: "The car launches forward and shows how stored energy becomes motion.",
    materials: ["Cardboard body", "4 wheels", "2 skewers or axles", "Rubber bands", "Straws", "Tape", "Bottle caps or toy wheels"],
    parts: [
      { name: "Wheels", buy: "Buy model wheels", salvage: "Use bottle caps, toy car wheels, jar lids, or cardboard circles" },
      { name: "Axles", buy: "Buy wooden dowels", salvage: "Use skewers, straight sticks, or old toy axles" },
      { name: "Body", buy: "Buy foam board", salvage: "Use cardboard from packaging or a plastic food tray" },
      { name: "Motor band", buy: "Buy strong rubber bands", salvage: "Use thick packaging bands if they are not cracked" }
    ],
    stages: [
      {
        title: "Stage 1 - Body and axle layout",
        video: "Video placeholder",
        tasks: ["Cut a lightweight body.", "Tape straw pieces as axle guides.", "Make sure the axles are parallel."]
      },
      {
        title: "Stage 2 - Wheel alignment",
        video: "Video placeholder",
        tasks: ["Attach wheels to both axles.", "Spin each wheel and look for wobble.", "Adjust until the car rolls straight."]
      },
      {
        title: "Stage 3 - Rubber-band motor",
        video: "Video placeholder",
        tasks: ["Anchor one end of the rubber band to the body.", "Loop the other end around the rear axle.", "Wind the axle and release on the floor."]
      },
      {
        title: "Stage 4 - Race tuning",
        video: "Video placeholder",
        tasks: ["Test distance.", "Reduce friction where axles touch straws.", "Change wheel size and compare speed."]
      }
    ],
    hazard: "Rubber bands can snap. Keep faces away while winding and do not aim the car at people.",
    steps: ["Build the body.", "Mount wheels and axles.", "Add the rubber-band drive.", "Tune for distance and speed."],
    observe: ["Does the car drive straight?", "Does a bigger wheel go farther?", "Where is friction stealing energy?"],
    whatCouldGoWrong: "The rubber band can snap or the car can hit someone. Prevent this by aiming at open floor and keeping faces away while winding.",
    why: "Winding the rubber band stores elastic potential energy. When released, that energy spins the axle and pushes the car forward.",
    variation: "Build two cars with different wheel sizes and race them."
  },
  {
    id: "foam-glider-plane",
    title: "Build a Foam Glider Plane",
    department: "Robotics",
    topic: "Plane",
    difficulty: "Builder",
    time: "2 hours",
    timeGroup: "Multi-stage",
    materialsGroup: "Home + salvage",
    risk: "Low",
    image: "assets/experiments/water-lens.png",
    result: "Build and tune a hand-launched plane that glides instead of immediately falling.",
    hook: "A flat sheet becomes a flying machine.",
    before: "The foam or cardboard looks too simple to fly.",
    during: "You shape wings, balance the center of gravity, and tune the tail.",
    reveal: "The plane glides farther after every small design correction.",
    materials: ["Foam tray or thin cardboard", "Tape", "Scissors", "Paper clips", "Ruler", "Pencil", "Optional small salvaged motor"],
    parts: [
      { name: "Wing material", buy: "Buy thin foam board", salvage: "Use a clean foam food tray, packaging foam, or cereal-box cardboard" },
      { name: "Nose weight", buy: "Buy small modeling weights", salvage: "Use paper clips, coins, or a small nut" },
      { name: "Tail stabilizer", buy: "Buy balsa sheet", salvage: "Use cardboard scraps or plastic packaging" },
      { name: "Optional motor", buy: "Buy a micro motor kit", salvage: "Reuse a tiny motor from a toy drone, toy car, or handheld fan" }
    ],
    stages: [
      {
        title: "Stage 1 - Wing and body design",
        video: "Video placeholder",
        tasks: ["Draw a long body and wide wings.", "Cut smooth edges.", "Keep the left and right wing shapes equal."]
      },
      {
        title: "Stage 2 - Tail and balance",
        video: "Video placeholder",
        tasks: ["Add a horizontal tail and vertical fin.", "Add paper clips to the nose.", "Balance the plane near the front third of the wing."]
      },
      {
        title: "Stage 3 - Glide testing",
        video: "Video placeholder",
        tasks: ["Launch gently indoors or outside with no wind.", "If it dives, remove nose weight or raise the tail slightly.", "If it stalls upward, add nose weight."]
      },
      {
        title: "Stage 4 - Optional powered upgrade",
        video: "Video placeholder",
        tasks: ["Mount a tiny salvaged motor only after the glider works.", "Keep the propeller small and guarded.", "Test power briefly and retune balance."]
      }
    ],
    hazard: "Scissors can cut, and propellers can hurt fingers if you add a motor. Test gliding first and keep powered tests brief.",
    steps: ["Cut the plane body and wings.", "Add tail surfaces.", "Balance with nose weight.", "Test and tune the glide."],
    observe: ["Does the plane dive, stall, or glide?", "Where is the center of gravity?", "Does the tail angle change the flight path?"],
    whatCouldGoWrong: "A powered propeller can hit fingers, and a bad launch can hit someone. Prevent this with gentle glider tests first and a clear flight area.",
    why: "The wing and tail control lift, drag, and stability. Small changes in weight and tail angle can completely change the flight path.",
    variation: "Build two wing shapes and compare which glides farther."
  }
];

const filters = {
  department: "All",
  category: "All",
  topic: "All",
  search: ""
};

const departmentOptions = ["All", "Kids under 10", "Adults / advanced", "Robotics"];
const categoryOptions = ["All", "Physics", "Chemistry", "Robotics"];
const topicGroups = {
  Physics: ["Magnetism", "Light", "Pressure", "Mechanics"],
  Chemistry: ["Chemistry", "Crystals", "Fire"],
  Robotics: ["Robot", "Car", "Plane"]
};
const physicsTopicMap = {
  Magnetism: "Magnetism",
  Light: "Light",
  Pressure: "Pressure",
  Density: "Mechanics",
  Electricity: "Mechanics",
  Engineering: "Mechanics",
  Plasma: "Mechanics"
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
const adultGate = document.querySelector("#adultGate");
const adultGatePanel = document.querySelector("#adultGatePanel");
const adultGateKicker = document.querySelector("#adultGateKicker");
const adultGateExperiment = document.querySelector("#adultGateExperiment");
const adultGateMessage = document.querySelector("#adultGateMessage");
const adultGateRules = document.querySelector("#adultGateRules");
const adultGateConfirm = document.querySelector("#adultGateConfirm");
const adultGateAgree = document.querySelector("#adultGateAgree");
const adultGateBack = document.querySelector("#adultGateBack");

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

      if (key === "department" || key === "category") {
        filters.category = key === "department" ? "All" : filters.category;
        filters.topic = "All";
      }

      render();
    });

    container.appendChild(button);
  });
}

function getExperimentCategory(experiment) {
  if (physicsTopicMap[experiment.topic]) {
    return "Physics";
  }

  if (topicGroups.Chemistry.includes(experiment.topic)) {
    return "Chemistry";
  }

  if (topicGroups.Robotics.includes(experiment.topic)) {
    return "Robotics";
  }

  return "Other";
}

function getExperimentTopic(experiment) {
  if (getExperimentCategory(experiment) === "Physics") {
    return physicsTopicMap[experiment.topic];
  }

  return experiment.topic;
}

function getExperimentDepartment(experiment) {
  return experiment.department || "Kids under 10";
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
    getExperimentTopic(experiment),
    experiment.result,
    experiment.hook,
    experiment.materials.join(" "),
    experiment.why
  ].join(" ").toLowerCase();

  return (filters.department === "All" || getExperimentDepartment(experiment) === filters.department)
    && (filters.category === "All" || getExperimentCategory(experiment) === filters.category)
    && (filters.topic === "All" || getExperimentTopic(experiment) === filters.topic)
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
    card.querySelector(".card-meta").textContent = getExperimentTopic(experiment);
    card.querySelector(".card-title").textContent = experiment.title;
    card.querySelector(".card-result").textContent = experiment.hook;
    card.querySelector(".card-stats").textContent = `${safetyLabel(experiment.risk)} / ${experiment.time}`;

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

function partsMarkup(parts) {
  const wrap = document.createElement("div");
  wrap.className = "parts-list";

  parts.forEach((part) => {
    const item = document.createElement("article");
    item.className = "part-option";
    item.innerHTML = `
      <h4>${part.name}</h4>
      <p><strong>Buy:</strong> ${part.buy}</p>
      <p><strong>Use what you have:</strong> ${part.salvage}</p>
    `;
    wrap.appendChild(item);
  });

  return wrap;
}

function stagesMarkup(stages) {
  const wrap = document.createElement("div");
  wrap.className = "project-stages";

  stages.forEach((stage, index) => {
    const item = document.createElement("article");
    item.className = "project-stage";
    item.innerHTML = `
      <div class="video-placeholder" aria-label="${stage.video}">
        <span>Video ${index + 1}</span>
      </div>
      <div class="stage-copy">
        <h4>${stage.title}</h4>
      </div>
    `;
    item.querySelector(".stage-copy").appendChild(listMarkup(stage.tasks));
    wrap.appendChild(item);
  });

  return wrap;
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
      <span class="tag tag-risk-${experiment.risk.toLowerCase()}">${safetyLabel(experiment.risk)}</span>
    </div>
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
    ...(experiment.safetyGear ? [["Mandatory gear", listMarkup(experiment.safetyGear)]] : []),
    ...(experiment.parts ? [["Parts: buy or salvage", partsMarkup(experiment.parts)]] : []),
    ["You need", listMarkup(experiment.materials)],
    ...(experiment.stages ? [["Build stages", stagesMarkup(experiment.stages)]] : []),
    [getExperimentDepartment(experiment) === "Adults / advanced" ? "Action flow" : "Steps", listMarkup(experiment.steps, true)],
    ...(experiment.observe ? [["What to watch for", listMarkup(experiment.observe)]] : []),
    ...(experiment.whatCouldGoWrong ? [["What could go wrong?", experiment.whatCouldGoWrong]] : []),
    ...(getExperimentDepartment(experiment) === "Adults / advanced" ? [["Disclaimer", "These experiments are for educational and entertainment purposes. Execution is strictly at the user's own risk. Follow all listed safety guidelines, use adult judgment, and stop if the setup is not controlled."]] : []),
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

  const detailParts = [hero];

  if (getExperimentDepartment(experiment) !== "Kids under 10" && experiment.hazard) {
    const hazard = document.createElement("section");
    hazard.className = "hazard-checkpoint";
    hazard.innerHTML = `
      <strong>Before you start</strong>
      <p>${experiment.hazard}</p>
    `;
    detailParts.push(hazard);
  }

  detailParts.push(body);
  detailPanel.append(...detailParts);
}

function safetyLabel(risk) {
  if (risk === "Red") {
    return "Red - supervision + protection";
  }

  if (risk === "Yellow") {
    return "Yellow - caution required";
  }

  if (risk === "Green" || risk === "Low") {
    return "Green - low risk";
  }

  return `${risk} risk`;
}

function requiresAdultGate(experiment) {
  return getExperimentDepartment(experiment) === "Adults / advanced";
}

function adultGateCopy(experiment) {
  const red = experiment.risk === "Red";

  return {
    panelClass: red ? "risk-red" : "risk-yellow",
    kicker: red ? "Adults only - red tier" : "Adults only - caution tier",
    message: red
      ? `${experiment.title} involves fire, plasma, heat, or fast energy release. This is not for kids, solo testing, or improvising.`
      : `${experiment.title} can pop, splash, or fail suddenly. Read this first and keep control of the setup.`,
    rules: red
      ? [
        "Adult supervision is required before the action flow starts.",
        "Safety goggles are mandatory.",
        "Use a controlled outdoor or fire-safe area.",
        "Do not chase a bigger reaction or change materials casually."
      ]
      : [
        "Safety goggles are mandatory.",
        "Use a large sink, tray, or outdoor ground.",
        "Keep faces and hands out of the splash zone.",
        "Step back before the reaction reaches its peak."
      ]
  };
}

function showAdultGate(experiment) {
  const copy = adultGateCopy(experiment);
  adultGatePanel.classList.remove("risk-red", "risk-yellow");
  adultGatePanel.classList.add(copy.panelClass);
  adultGateKicker.textContent = copy.kicker;
  adultGateExperiment.textContent = experiment.title;
  adultGateMessage.textContent = copy.message;
  adultGateRules.innerHTML = "";
  adultGateConfirm.checked = false;
  adultGateAgree.disabled = true;

  copy.rules.forEach((rule) => {
    const item = document.createElement("div");
    item.className = "adult-gate__rule";
    item.textContent = rule;
    adultGateRules.appendChild(item);
  });

  adultGate.classList.remove("hidden");
  document.body.classList.add("modal-open");
  adultGateConfirm.focus();
}

function hideAdultGate() {
  adultGate.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function render() {
  renderFilterButtons("#departmentFilters", departmentOptions, "department");
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
  filters.department = "All";
  filters.category = "All";
  filters.topic = "All";
  filters.search = "";
  searchInput.value = "";
  selectedId = experiments[0].id;
  render();
});

function showPage(page) {
  hideAdultGate();
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

    if (requiresAdultGate(experiment)) {
      showAdultGate(experiment);
    }

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

adultGateConfirm.addEventListener("change", () => {
  adultGateAgree.disabled = !adultGateConfirm.checked;
});

adultGateAgree.addEventListener("click", () => {
  hideAdultGate();
});

adultGateBack.addEventListener("click", () => {
  window.location.hash = "experiments";
});

window.addEventListener("hashchange", route);
render();
route();
