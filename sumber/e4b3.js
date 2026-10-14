/* Sumber kandungan — English KSSM Form 4, Unit 3 What If We Act?
   DSKP Form 4 Grammar: zero, first and second conditionals (unless in the first conditional).
   Tema Health and Environment. Kosa kata: climate and sustainability (B1 Mid).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, emel, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Climate Camp", sk:"Vocabulary · climate, sustainability and action", lampiran:null,
 kadNama:"sustainable", kadEm:"\u{267B}\u{FE0F}", kadFakta:"Sustainable means able to continue without harming the environment. Sustainable farming protects the soil and uses less water.",
 bosKadNama:"carbon footprint", bosKadEm:"\u{1F463}", bosKadFakta:"Your carbon footprint is the amount of carbon dioxide that your activities produce. Walking and cycling reduce your carbon footprint; flying increases it.",
 soalan:[
 {j:"pilih",gbr:"\u{1F321}\u{FE0F}",t:"The Earth's average temperature has been rising. This change is called global ____.",p:["warming","cooling","moving","growing"],b:0,u:"Global warming is the increase in the Earth's average temperature."},
 {j:"pilih",gbr:"\u{1F6B2}",t:"Cycling to school instead of driving is a ____ way to travel because it does not pollute the air.",p:["sustainable","costly","dangerous","careless"],b:0,u:"Sustainable means able to continue without harming the environment."},
 {j:"pilih",gbr:"\u{1F333}",t:"Cutting down large areas of forest is called",p:["deforestation","irrigation","conservation","pollination"],b:0,u:"Deforestation is the clearing of forests."},
 {j:"pilih",t:"Which word means 'to make something smaller or less in amount'?",p:["reduce","increase","expand","produce"],b:0,u:"To reduce is to make something less."},
 {j:"pilih",t:"Which of these is a fossil fuel?",p:["coal","wind","sunshine","water power"],b:0,u:"Coal, oil and natural gas are fossil fuels. Wind, sunshine and water are renewable."},
 {j:"pilih",t:"Gases such as carbon dioxide that trap heat in the atmosphere are called ____ gases.",p:["greenhouse","kitchen","garden","playground"],b:0,u:"Greenhouse gases trap heat and cause global warming."},
 {j:"isi",t:"Type the missing word: We should ____ energy by switching off lights when we leave a room. (not waste)",b:["save","conserve"],u:"Save and conserve both mean to use less so that it lasts longer."},
 {j:"pilih",t:"A heavy storm that causes serious damage may be described as",p:["devastating","delightful","ordinary","harmless"],b:0,u:"Devastating means causing great damage."}],
 bos:{j:"banyak",t:"Choose ALL the actions that reduce a person's carbon footprint.",p:["cycling to school","using solar power","planting trees","burning plastic","leaving lights on"],b:[0,1,2],u:"Cycling, using solar power and planting trees reduce carbon footprints. Burning plastic and wasting electricity increase them."}},

{n:2, tempat:"Conditional Core", sk:"Grammar · zero, first and second conditionals; unless", lampiran:null,
 kadNama:"zero, first, second", kadEm:"\u{1F500}", kadFakta:"Zero: If + present, present (facts): If ice melts, sea levels rise. First: If + present, will + base verb (real future): If we plant trees, the air will be cleaner. Second: If + past, would + base verb (unreal): If we lived on Mars, we would need oxygen.",
 bosKadNama:"unless", bosKadEm:"\u{1F6AB}", bosKadFakta:"Unless = if ... not. Unless we act now, the problem will get worse. = If we don't act now, the problem will get worse. Do not use unless with a negative verb.",
 soalan:[
 {j:"pilih",t:"If you heat ice, it ____ into water.",p:["turns","will turn","turned","would turn"],b:0,u:"Zero conditional (a general fact): If + present simple, present simple."},
 {j:"pilih",t:"If we recycle more, the landfill ____ smaller.",p:["will be","would be","is being","were"],b:0,u:"First conditional (real possibility): If + present simple, will + base verb."},
 {j:"pilih",t:"If I had a million ringgit, I ____ solar panels on every roof.",p:["would install","will install","install","installed"],b:0,u:"Second conditional (imaginary): If + past simple, would + base verb."},
 {j:"pilih",t:"We will have a picnic unless it ____.",p:["rains","doesn't rain","will rain","rained"],b:0,u:"Unless already has a negative meaning, so the verb is positive: unless it rains."},
 {j:"pilih",t:"____ we reduce plastic, the oceans will be full of rubbish.",p:["Unless","If only","When","Although"],b:0,u:"Unless = if not: If we don't reduce plastic."},
 {j:"pilih",t:"Which sentence is a zero conditional?",p:["If plants don't get water, they die.","If I were rich, I would travel.","If it rains, we will stay in.","Unless you hurry, you will miss the bus."],b:0,u:"A zero conditional states a general truth with the present simple in both clauses."},
 {j:"isi",t:"Type the missing word: If the temperature ____ (rise), the glaciers melt. (zero conditional)",b:["rises"],u:"Zero conditional: present simple in both clauses."},
 {j:"isi",t:"Type the missing word: What would you do if you ____ (see) a polluted river?",b:["saw"],u:"Second conditional: if + past simple."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["Unless we change our habits, the situation will become worse.","Unless we don't change our habits, the situation will become worse.","Unless we changed our habits, the situation will become worse.","Unless we will change our habits, the situation becomes worse."],b:0,u:"Unless + present simple (positive), will + base verb."}},

{n:3, tempat:"Carbon Chart", sk:"Reading 3.1.2 · specific details in a table", lampiran:"jadualkarbon",
 kadNama:"emissions", kadEm:"\u{1F4A8}", kadFakta:"Emissions are gases released into the air. Transport, factories and power stations produce emissions, including carbon dioxide.",
 bosKadNama:"per person", bosKadEm:"\u{1F464}", bosKadFakta:"Per person means for each individual. Per person figures let us compare countries fairly, even if their populations are different.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Which activity produces the most carbon dioxide per person for one trip?",p:["Flying","Cycling","Walking","Taking the train"],b:0,u:"The table shows flying: 250 kg."},
 {j:"pilih",t:"According to Figure 1, how much CO₂ does one car trip produce?",p:["20 kg","2 kg","200 kg","0 kg"],b:0,u:"The table says: Car: 20 kg."},
 {j:"pilih",t:"Which two activities produce no CO₂? (Figure 1)",p:["Walking and cycling","Flying and driving","Train and bus","Car and bus"],b:0,u:"The table shows 0 kg for walking and cycling."},
 {j:"pilih",t:"By how many kilograms does a train trip produce less than a car trip? (Figure 1)",p:["14 kg","6 kg","20 kg","26 kg"],b:0,u:"Car 20 kg - train 6 kg = 14 kg."},
 {j:"pilih",t:"If a person took the bus instead of the car for one trip, how much CO₂ would be saved? (Figure 1)",p:["10 kg","20 kg","30 kg","5 kg"],b:0,u:"Car 20 kg - bus 10 kg = 10 kg."},
 {j:"banyak",t:"Based on Figure 1, choose TWO true statements.",p:["Public transport produces less CO₂ than a car.","Flying produces much more CO₂ than a car.","Cycling produces more CO₂ than walking.","The bus produces more CO₂ than the plane."],b:[0,1],u:"Bus (10 kg) and train (6 kg) are lower than a car (20 kg), and flying (250 kg) is much higher."},
 {j:"pilih",t:"What would happen if everyone cycled to work? (Figure 1)",p:["Fewer emissions would be produced.","More emissions would be produced.","Nothing at all would change.","Planes would stop flying today."],b:0,u:"Cycling produces 0 kg of CO₂, so emissions would fall."},
 {j:"pilih",t:"What can we infer from Figure 1?",p:["How we travel affects emissions.","Emissions are not very important.","Everyone should fly much more often.","Cars are the cleanest way to travel."],b:0,u:"The table shows that different choices have very different emissions."}],
 bos:{j:"pilih",t:"Dina travels 4 times a month by car. She decides to take the train instead. How much CO₂ will she save in a month? (Figure 1)",p:["56 kg","24 kg","80 kg","14 kg"],b:0,u:"She saves 14 kg for each trip (20 - 6). For 4 trips, 14 x 4 = 56 kg."}},

{n:4, tempat:"Eco Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"if-clauses", kadEm:"\u{1F3A7}", kadFakta:"Listen to the verb tense in the if clause: present = real possibility (will in the result), past = imaginary (would in the result).",
 bosKadNama:"unless", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"When you hear unless, think of if not: Unless we act, things will get worse = If we don't act, things will get worse.",
 soalan:[
 {j:"pilih",t:"Listen. What will happen if people stop planting trees?",dengar:"If we stop planting trees, the air will get dirtier and the temperature will rise. Unless we act now, our children will suffer.",p:["The air will get dirtier.","The air will get cleaner.","Rain will increase.","Nothing will change."],b:0,u:"The speaker says: If we stop planting trees, the air will get dirtier."},
 {j:"pilih",t:"Listen. When must we act?",dengar:"If we stop planting trees, the air will get dirtier and the temperature will rise. Unless we act now, our children will suffer.",p:["Now","Next year","In ten years","Never"],b:0,u:"The speaker says: Unless we act now."},
 {j:"pilih",t:"Listen. What would the speaker do if he had more money?",dengar:"If I had more money, I would buy an electric car. They don't pollute the air, and they are cheaper to run. At the moment, I can only afford a bicycle.",p:["Buy an electric car","Buy a small plane","Build a large house","Open a new shop"],b:0,u:"The speaker says: If I had more money, I would buy an electric car."},
 {j:"pilih",t:"Listen. What can the speaker afford at the moment?",dengar:"If I had more money, I would buy an electric car. They don't pollute the air, and they are cheaper to run. At the moment, I can only afford a bicycle.",p:["A bicycle","An electric car","A motorbike","A bus ticket"],b:0,u:"The speaker says: At the moment, I can only afford a bicycle."},
 {j:"pilih",t:"Listen. What is a fact that the speaker states?",dengar:"When water reaches 100 degrees Celsius, it boils. If you put a plant in the dark for too long, it dies. These are facts that every student should know.",p:["Water boils at 100 degrees.","Plants love the dark.","Water freezes at 100 degrees.","Plants never die."],b:0,u:"The speaker says: When water reaches 100 degrees Celsius, it boils."},
 {j:"pilih",t:"Listen. What happens to a plant that is kept in the dark?",dengar:"When water reaches 100 degrees Celsius, it boils. If you put a plant in the dark for too long, it dies. These are facts that every student should know.",p:["It dies.","It grows fast.","It turns blue.","It sings."],b:0,u:"The speaker says: If you put a plant in the dark for too long, it dies."},
 {j:"pilih",t:"Listen. What will the school do unless there is heavy rain?",dengar:"The school sports day will take place on Saturday unless there is heavy rain. If it rains heavily, we will hold it next week instead.",p:["Hold sports day on Saturday","Cancel sports day for ever","Hold it on Friday evening","Close the school for a week"],b:0,u:"The speaker says: The school sports day will take place on Saturday unless there is heavy rain."},
 {j:"isi",t:"Listen and type the missing word: ____ we act now, things will get worse.",dengar:"Unless we act now, things will get worse.",b:["unless"],u:"The speaker says Unless. It means if we do not act now."}],
 bos:{j:"pilih",t:"Listen to the speech. What is the main message?",dengar:"Some people say that one person cannot make a difference. But if every person made one small change, the world would be a different place. If you walk instead of drive, if you recycle, if you talk to others, you will inspire people around you.",p:["Small actions by many people matter.","One person is not important at all.","Only governments can ever help.","Nobody should change anything now."],b:0,u:"The speaker says that if every person made one small change, the world would be different."}},

{n:5, tempat:"Campaign Corner", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"emelkempen",
 kadNama:"campaign", kadEm:"\u{1F4E2}", kadFakta:"A campaign is a planned series of actions to achieve an aim. An email can invite people to join a campaign.",
 bosKadNama:"persuasive language", bosKadEm:"\u{1F5E3}\u{FE0F}", bosKadFakta:"Persuasive texts use conditionals (If we act now, we will ...), strong adjectives (urgent, serious) and questions (Will you join us?).",
 soalan:[
 {j:"pilih",t:"What is the main purpose of Text 1?",p:["To invite people to a campaign","To announce a school exam result","To sell a new product","To say goodbye to a good friend"],b:0,u:"The email invites students to join the Clean River campaign."},
 {j:"pilih",t:"According to Text 1, what is the problem with the river?",p:["It is polluted with rubbish.","It is too deep for the boats.","It is too far away from town.","It has no fish at all left."],b:0,u:"The text says the river is polluted with plastic and other rubbish."},
 {j:"pilih",t:"What will happen if nothing is done? (Text 1)",p:["It will get more polluted.","The river will become clean again.","The river will disappear overnight.","The rubbish will go away by itself."],b:0,u:"The text says: If we do nothing, the river will become even more polluted."},
 {j:"pilih",t:"The word urgent in Text 1 means",p:["needing action at once","very old and worn","not important to anybody","well known to everyone"],b:0,u:"Urgent means that something needs to be done immediately."},
 {j:"pilih",t:"What are volunteers asked to bring? (Text 1)",p:["Gloves and some water","A laptop and a charger","A swimming costume","A big black umbrella"],b:0,u:"The text says: Please bring gloves and a water bottle."},
 {j:"banyak",t:"Based on Text 1, choose TWO reasons why the writer thinks the campaign is important.",p:["The river gives families water.","Rubbish harms the fish there.","The campaign is completely free.","The weather is fine at weekends."],b:[0,1],u:"The text says the river provides water for families and that the rubbish harms the fish."},
 {j:"pilih",t:"What can we infer about the writer? (Text 1)",p:["She cares about her town.","She dislikes the volunteers.","She works at a big factory.","She wants to close the river."],b:0,u:"She organises a campaign to help the river, so she cares about her community."},
 {j:"pilih",t:"Which sentence from Text 1 is a first conditional?",p:["If we work together, we will clean the river.","If I were the mayor, I would build a new bridge.","Rivers flow to the sea in the east.","We cleaned the river last year with them."],b:0,u:"If + present simple, will + base verb: a real future possibility."}],
 bos:{j:"pilih",t:"Which of these is the BEST subject for the email in Text 1?",p:["Join Our Clean River Campaign","Football Results This Week","My Holiday Photos from Sabah","Lost Property in the Hall"],b:0,u:"The email is an invitation to a river campaign."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write a persuasive paragraph with conditionals", lampiran:null,
 kadNama:"persuade with if", kadEm:"\u{1F4DD}", kadFakta:"To persuade, show the result of action and inaction: If we recycle, we will save resources. Unless we act, the problem will grow. Use strong words: urgent, serious, essential.",
 bosKadNama:"match the clauses", bosKadEm:"\u{1F9E9}", bosKadFakta:"Check each if sentence: present + will (real), past + would (unreal), present + present (fact). Do not mix them.",
 soalan:[
 {j:"isi",t:"Type the missing word: If we recycle more, we ____ save a lot of resources. (first conditional)",b:["will","'ll"],u:"First conditional: if + present simple, will + base verb."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: If I would have time, I would join the campaign.",b:["had"],u:"The if clause uses the past simple: If I had time."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["Unless","we","act","now,","the","problem","will","grow."],b:[0,1,2,3,4,5,6,7],u:"Unless + present simple, will + base verb."},
 {j:"pilih",t:"Which sentence is a correct second conditional?",p:["If everyone cycled, the air would be cleaner.","If everyone cycles, the air would be cleaner.","If everyone cycled, the air will be cleaner.","If everyone would cycle, the air was cleaner."],b:0,u:"Second conditional: if + past simple, would + base verb."},
 {j:"pilih",t:"Which sentence is a correct zero conditional?",p:["If you mix red and blue, you get purple.","If you mix red and blue, you will got purple.","If you mixed red and blue, you get purple.","If you will mix red and blue, you get purple."],b:0,u:"Zero conditional: present simple in both clauses."},
 {j:"pilih",t:"Which sentence uses unless correctly?",p:["Unless it stops raining, we'll cancel the match.","Unless it doesn't stop raining, we'll cancel the match.","Unless it stopped raining, we'll cancel the match.","Unless it will stop raining, we cancel the match."],b:0,u:"Unless + positive present simple verb."},
 {j:"susun",t:"Put the sentences in order to make a persuasive paragraph.",p:["Plastic pollution is a serious problem.","If we do nothing, our oceans will be full of rubbish.","If everyone used reusable bags, we would reduce the problem.","So join our campaign today!"],b:[0,1,2,3],u:"State the problem, show the result of inaction, suggest an action and end with an appeal."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If we act now, we will protect the planet.","If we act now we will, protect the planet.","if we act now, we will protect the planet","If we act now; we will protect the planet."],b:0,u:"A comma goes after the if clause."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: Our river is polluted, and the situation is getting worse. ____",p:["Unless we take action now, the fish will disappear, and many families will lose their water.","Unless we don't take action now, the fish disappear, and many families lose their water.","Unless we took action now, the fish will disappear, and many families would lose water.","Unless we will take action now, the fish disappeared, and many families lost their water."],b:0,u:"Unless + present simple, will + base verb."}}
];

module.exports = {
  id:"e4b3", tingkatan:4, kod:"Unit 3 What If We Act?",
  tajuk:"Planet Savers", subtajuk:"English Form 4 · Unit 3 What If We Act?",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("the environment and zero, first and second conditionals", "What If We Act?"),
  lampiran:{
   jadualkarbon:jadual(1, "Carbon dioxide produced by one trip", "CO₂ produced by one trip per person (about 100 km)",
     ["Transport","CO₂ (kg)"],
     [["Walking","0"],["Cycling","0"],["Train","6"],["Bus","10"],["Car","20"],["Flying","250"]],
     "Source: practice data, invented for exercises."),
   emelkempen:emel(1, "An email inviting students to a campaign", {dari:"Puan Salmah <salmah@sekolah.example>", kepada:"All Form 4 students", subjek:"Join Our Clean River Campaign",
     isi:["Dear students,",
      "Our local river is polluted with plastic and other rubbish. It provides water for many families, and the rubbish harms the fish. This is an urgent problem. If we do nothing, the river will become even more polluted.",
      "Please join our Clean River Campaign on Saturday at 8.00 a.m. If we work together, we will clean the river in one day. Please bring gloves and a water bottle.",
      "Will you join us?","Puan Salmah"]})
  },
  aras:ARAS
};
