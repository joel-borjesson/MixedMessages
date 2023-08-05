const messages = {
    spiritAnimal: ["Ant: Diligence, unity, patience, self-control, sacrifice, loyalty and honesty.",
    "Alligator: Retribution, creativity, efficiency, hostility, bravery, and efficiency",
    "Anaconda: Balance, immortality, patience, power, wisdom, cunning, and elusiveness.",
    "Albatross: Liberated, travel, limitless, good fate, sensitive and thoughtfulness.",
    "Antelope: Efficacious, energetic, defensive, perceptive, keen eyesight and risk-taker.",
    "Armadillo: Sensitive, defensive, trustworthy, calm, isolated and humble.",
    "Beaver: Determined, visionary, defensive, inventor, fantasizer and subliminal.",
    "Buffalo: Divine, strength, balance, thankfulness, wealth and firmness.",
    "Bat: Ego, fear, challenge, keen-observation, inner-depth, illusion and clairvoyance.",
    "Bear: Power, Bravery, understanding, peace, aggressive, authority, solitude and majesty.",
    "Bee: Communication, love, success, wisdom, wealth, hard work, protection and chastity.",
    "Black Swan: Empathy, freedom, joy, dignity, loyalty and exposition.",
    "Butterfly: Joy, romance, celebration, transformation, spirituality, creativity, and peace.",
    "Bluebird: Flexibility, innovative, kindness, thankfulness, togetherness and glory.",
    "Bull: Fertility, expressive, strength, courage, procurement and hasty.",
    "Cardinal: Cheerful, brilliant, bold, extraordinary, dignity and trust.",
    "Camel: Endurance, trust, commitment, determination, focus, humility, patience, and durability.",
    "Cheetah: Quick thinking, passion, flexibility, quick-witted, freedom, progress, and protection.",
    "Cat: Magic, curiosity, affection, observational-skills, secretive, supernatural, and mystery.",
    "Cougar: Patience, observation, sensuality, courage, responsible, dependable and spiritual warrior.",
    "Cuckoo: Flexibility, love, fortune, balance, shrewdness and insightful.",
    "Caribou: Nomad, flexibility, sensitive, guidance and assurance.",
    "Crane: Isolated, integrity, endurance, attentive, self- reliant and wisdom.",
    "Crow: Magical, fearless, adaptability, manipulative, wisdom and transformation.",
    "Deer: Love, generosity, elegance, grace, compassion, caring, safety, and determination.",
    "Dove: Purity, gentleness, devotion, hope, love, communication, peace, and sacrifice.",
    "Dog: Loyalty, bravery, friends, affection, protection, communication, patience, and devotion.",
    "Dolphin: Harmony, defensive, assistance, resurgence, lively and strength.",
    "Dragon: Transformation, defensive, motivational, authoritative, magical and strength.",
    "Dragonfly: Transformation, lively, flexibility, connection, emotional and illusionary.",
    "Eagle: Goal-oriented, focused, adventurous, resilient, vision, power and freedom.",
    "Elephant: Strength, loyalty, determination, confidence, honor, pride, dignity, and royalty.",
    "Emu: Flexibility, unity, expressive, lively, equality and transit.",
    "Elk: Strength, self-reliant, cleverness, magnificent, generosity and dignity.",
    "Falcon: Goal-oriented, fearless, authoritative, freedom, intelligence and victory.",
    "Flamingo: Balance, goal-oriented, clear-sightedness, love, power, balance, and happiness.",
    "Fox: Quick-witted, wisdom, luck, cleverness, curiosity, cunning, adaptability, and playfulness.",
    "Frog: Transformation, sensitivity, peace, fertility, cleansing, rebirth, peace and power.",
    "Gazelle: Alert, swift, consciousness, anticipation, refinement and lightness.",
    "Goat: Firmness, self-reliant, isolated, vigor, alert and strength.",
    "Grasshopper: Good fate, wealth, innovative, visionary, dynamic and progressive.",
    "Giraffe: Individuality, intelligence, peace, farsightedness, cleverness, gentleness and patience.",
    "Goose: Joy, bravery, guidance, fertility, loyalty, reliability, teamwork, vigilance, and wisdom.",
    "Goldfinch: Courageous, defensive, dedication, happiness, luck and originality.",
    "Hawk: Vision, alertness, nobility, cleansing, goal-oriented, strength, creativity and courage.",
    "Hedgehog: Protection, flexibility, patience, kindness, strength and self-dependent.",
    "Hippopotamus: strength, protection, wisdom, hard-working, fertile and balance.",
    "Horse: Freedom, adventurous, freedom, mobility, independence, friendship and endurance.",
    "Heron: Independent, balance, calm, intrusive, multi-tasking and self-determined.",
    "Hummingbird: Flexibility, love, wisdom, hope, healing, ability, ecstasy, and aggression",
    "Inchworm: Logical, transformation, subtlety, concealment, and transmutation.",
    "Jellyfish: Faith, transparency, illumination, acceptance, sensitivity, protection and intention.",
    "Jaguar: Power, loyalty, speed, strength, grace, knowledge, fertility and rejuvenation.",
    "Koala: Gratitude, healing, calmness, trust, empathy, magic, protection and pleasure.",
    "Kiwi: Alert, fidelity, authoritative, cultural, genius and togetherness.",
    "Ladybug: Good fate, true love, innocence, metamorphosis, pious intervention and illusionary.",
    "Lion: Pride, courage, power, natural-born leaders, authority, dignity, wisdom, and fiery.",
    "Lizard: Imagination, spirituality, sensitivity, adaptability, ego, intrusion, and quick-witted.",
    "Loon: Patience, calm, connection, faithfulness, satisfaction and refreshment.",
    "Magpie: Flexibility, communicative, fate, love, opportunity and attitude.",
    "Monkey: Bold, confident, social, compassionate, playful, aggressive, creative and rebellious.",
    "Moose: Endurance, intelligence, dignity, feminine, strength and impulsive.",
    "Mosquito: Persistence, feminine, agility, direction, detection, self-confidence, and blunt.",
    "Mouse: Stealth, modesty, understanding, dishonest, grounded, eye-for-details and innocence.",
    "Mockingbird: Expression, thankfulness, defensive, lively, creativity and togetherness.",
    "Meadowlark: Satisfaction, joy, wisdom, carousal, modesty and manifestation.",
    "Orangutan: Creativity, gentle, solitude, ingenuity, honorable and logical.",
    "Opossum: Wisdom, sensible, humble, togetherness, extraordinary and decisive.",
    "Otter: Lively, cheerful, kindness, sensibility, dynamic and happiness.",
    "Ox: Sacrifice, monogamy, grounded, longevity, strength and loyalty.",
    "Osprey: Balance, visionary, potentiality, rigor, timing and opportunity.",
    "Owl: Wisdom, secret-keeper, freedom, comfort, stealth, vision, protection and deception.",
    "Panda: Adaptability, balance, determination, willpower, diplomacy, inner-sight, and solitude.",
    "Panther: Courage, valor, power, protective, aggressive and feminine.",
    "Peacock: Beauty, knowledge, self-esteem, foresight, endurance, royalty, love and sexuality.",
    "Penguin: Community-minded, grace, discipline, confidence, sacrifice, spiritual and determination.",
    "Pelican: Strong, selfless, warmth, responsible, defensive and kindness.",
    "Porcupine: Innocence, visionary, self-involved, humble, togetherness and anxious.",
    "Rabbit: Creativity, prosperity, intensity, love, cleverness, sensitivity, harmony, and imagination.",
    "Rat: Kindness, fertility, foresight, intelligence, abundance, strength, success, and stealth.",
    "Ram: Aloof, sensitive, hard-working, anxious, visionary and transformation.",
    "Rhinoceros: Intelligence, isolated, decisive, endurance, liberated and insightful.",
    "Raccoon: confidentiality, illusionary, bravery, emphatic, versatility and protection.",
    "Reindeer: Accomplishment, abundance, endurance, strength, faith, tenacity and protection.",
    "Rooster: Fearless, unique, intimacy, ego, nonconformity and intrusive.",
    "Snake: Impulsive, power, shrewdness, transformation, magic, fear, wisdom and healing.",
    "Salmon: Dignity, seriousness, intelligence, resurgence, spiritual and firmness.",
    "Swan: Grave, purity, love, beauty, power, elegance, devotion, calmness and balance.",
    "Spider: Patience, creativity, protection, growth, aptitude, networking, balance and wisdom.",
    "Sheep: Compassion, peace, purity, courage, progress, level-headed and humble.",
    "Squirrel: Playful, social, balance, passionate, trust, hardworking, and resourcefulness.",
    "Stork: Resurgence, creativity, responsibility, boldness, protective and fertility.",
    "Tiger: Valor, power, pride, devotion, fearlessness, vigor, passion and royalty.",
    "Turtle: Wisdom, patience, speed, endurance, fertility, longevity, protection and peace.",
    "Turkey: gratification, generosity, connection, togetherness, hard-working and wealth.",
    "Tarantula: Creativity, patience, self-protection, transformation, and intimidation.",
    "Unicorn: Magic, love, faith, vision, innocence, purity, gentleness and grace.",
    "Vulture: Loyalty, patience, quick-witted, goal-oriented, trust, vision, and perception.",
    "Wasp: Aggressive, creative, fertility, intelligence, teamwork, enthusiasm and determination.",
    "Wolf: Protection, partnership, loyalty, compassion, spirituality, togetherness, and power.",
    "Whale: Wisdom, power, strength, self-reliance, protection, bravery and ancestry.",
    "Woodpecker: Intelligence, healing, unique, connection, revelation and perception."],
    _luckyNumbers: [],
        get luckyNumbers() {
            return this._luckyNumbers;
        },
        set luckyNumbers(newNum) {
            this._luckyNumbers.push(newNum);
        },
    inspiration: ["You look nice today",
            "There is always light. If only we're brave enough to see it. If only we're brave enough to be it. ~ Amanda Gorman",
            "If you want to lift yourself up, lift up someone else. ~ Booker T. Washington",
            "You’re braver than you believe, stronger than you seem, and smarter than you think. ~ A.A. Milne",
            "All our dreams can come true — if we have the courage to pursue them. ~ Walt Disney",
            "A person who never made a mistake never tried anything new. ~ Albert Einstein",
            "If what you have done yesterday still looks big to you, you haven't done much today. ~ Mikhail Gorbachev",
            "If you tell the truth, you don't have to remember anything. ~ Mark Twain",
            "Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself. ~ Mark Twain",
            "You smell nice today",
            "I bet you'd like some chocolate.",
            "What's for dinner?",
            "I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it. ~ Mark Twain",
            "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. ~ Barack Obama",
            "When ignorant folks want to advertise their ignorance, you don't really have to do anything, you just let them talk. ~ Barack Obama"
        ]
};


// Duplicate numbers should not be allowed, check if the random number already exists in the array
let i = 0;

while (i<6) {
    let randNum = Math.floor(Math.random()*100)+1;
    if (i === 0) {
        messages.luckyNumbers = randNum;
        i++;
    } else if (messages.luckyNumbers.includes(randNum) === false) {
        messages.luckyNumbers = " " + randNum;
        i++;
    }
}

const displayMsg = () => {
    console.log(`Your Spirit Animal is ${messages.spiritAnimal[Math.floor(Math.random()*messages.spiritAnimal.length)]}`);
    console.log(messages.inspiration[Math.floor(Math.random()*messages.inspiration.length)]);
    console.log(`Your lucky numbers are: ${messages.luckyNumbers}`);
    console.log('Spirit Animals sourced from https://themindfool.com/spirit-animal-list/');
};

displayMsg();