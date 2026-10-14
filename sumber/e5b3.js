/* Sumber kandungan — English KSSM Form 5, Unit 3 Case Closed
   Tatabahasa: modals of deduction in the present and past (must be, might be, could be, can't be,
   must have been, might have been, can't have been). Tema Science and Technology / Mystery.
   DSKP Tingkatan 5 belum dijumpai; bab ini mengikut jujukan CEFR B1 dan perlu disahkan guru.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, sembang, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Detective Office", sk:"Vocabulary · mystery, evidence and investigation", lampiran:null,
 kadNama:"clue / evidence", kadEm:"\u{1F50E}", kadFakta:"A clue is a piece of information that helps solve a mystery. Evidence is facts or objects that show that something is true. A witness is a person who saw something happen.",
 bosKadNama:"alibi", bosKadEm:"\u{1F550}", bosKadFakta:"An alibi is proof that a person was somewhere else when a crime happened. A strong alibi can show that a suspect is innocent.",
 soalan:[
 {j:"pilih",gbr:"\u{1F50D}",t:"The detective found a footprint near the window. It was an important ____.",p:["clue","fashion","souvenir","salary"],b:0,u:"A clue is a piece of information that helps to solve a mystery."},
 {j:"pilih",gbr:"\u{1F575}\u{FE0F}",t:"A person who is thought to have committed a crime is a",p:["suspect","witness","victim","guard"],b:0,u:"A suspect is someone who may have committed a crime."},
 {j:"pilih",gbr:"\u{1F440}",t:"A person who sees an event and can describe it is a",p:["witness","passenger","tourist","customer"],b:0,u:"A witness saw what happened."},
 {j:"pilih",t:"Which word means 'facts or objects that prove that something is true'?",p:["evidence","opinion","rumour","fiction"],b:0,u:"Evidence proves that something is true."},
 {j:"pilih",t:"A difficult problem or event that is hard to explain is a",p:["mystery","routine","holiday","timetable"],b:0,u:"A mystery is something that is difficult to understand or explain."},
 {j:"pilih",t:"To work out an answer from the clues is to",p:["deduce","delay","decorate","donate"],b:0,u:"To deduce is to reach a conclusion from evidence."},
 {j:"isi",t:"Type the missing word: The thief left a ____ on the glass, so the police could identify him. (a mark made by a finger)",b:["fingerprint"],u:"A fingerprint is a mark made by the skin of a finger."},
 {j:"pilih",t:"Which word means 'not guilty'?",p:["innocent","anxious","reckless","grateful"],b:0,u:"Innocent means not guilty of a crime."}],
 bos:{j:"banyak",t:"Choose ALL the things that can be evidence in an investigation.",p:["a fingerprint","a photograph","a witness statement","a weather forecast","a birthday card"],b:[0,1,2],u:"A fingerprint, a photograph and a witness statement can prove what happened. A weather forecast and a birthday card are not evidence here."}},

{n:2, tempat:"Deduction Dome", sk:"Grammar · modals of deduction (present and past)", lampiran:null,
 kadNama:"how sure are you?", kadEm:"\u{1F4CA}", kadFakta:"must be = I'm sure it is (100% logic). might be / could be = it is possible. can't be = I'm sure it isn't. Past: must have + past participle (sure), might have (possible), can't have (sure it didn't happen).",
 bosKadNama:"present or past?", bosKadEm:"\u{23F1}\u{FE0F}", bosKadFakta:"Present: modal + base verb (He must be at home). Past: modal + have + past participle (He must have gone home). Continuous: must be waiting / must have been waiting.",
 soalan:[
 {j:"pilih",t:"The lights are on, so somebody ____ at home.",p:["must be","can't be","might not be","couldn't be"],b:0,u:"We are sure from the evidence: must be."},
 {j:"pilih",t:"She ____ the thief. She was on holiday in Sabah at the time.",p:["can't be","must be","might be","should be"],b:0,u:"We are sure that she is not the thief: can't be."},
 {j:"pilih",t:"I don't know where the keys are. They ____ in the car.",p:["might be","can't be","must have been","shouldn't have been"],b:0,u:"Might be shows a possibility."},
 {j:"pilih",t:"The window is broken. Someone ____ in through the window.",p:["must have climbed","can't climb up","might climbing up","must climb up"],b:0,u:"Past deduction with strong evidence: must have + past participle."},
 {j:"pilih",t:"He ____ the money. He wasn't even in the town that day.",p:["can't have stolen","must have stolen","might steal it","can't steal it"],b:0,u:"Past impossibility: can't have + past participle."},
 {j:"pilih",t:"I'm not sure, but she ____ the bus. She isn't here yet.",p:["might have missed","can't have missed","must miss","should be missing"],b:0,u:"Possibility in the past: might have + past participle."},
 {j:"isi",t:"Type the missing word: The ground is wet, so it ____ have rained last night. (I am sure)",b:["must"],u:"Must have + past participle shows that we are sure."},
 {j:"isi",t:"Type the missing word: That ____ be Tom. He is in Penang this week. (I am sure it isn't him)",b:["can't","cannot"],u:"Can't be shows that we are sure it is not true."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["The thief can't have gone far; the footprints are still fresh.","The thief can't gone far; the footprints are still fresh.","The thief can't have go far; the footprints are still fresh.","The thief can't had gone far; the footprints are still fresh."],b:0,u:"Can't have + past participle (gone)."}},

{n:3, tempat:"Case File", sk:"Reading 3.1.2 · specific details in a case table", lampiran:"failkes",
 kadNama:"timeline", kadEm:"\u{1F552}", kadFakta:"A timeline lists events in the order in which they happened. Detectives use timelines to find out who could have been at a place at a particular time.",
 bosKadNama:"eliminate", bosKadEm:"\u{274C}", bosKadFakta:"To eliminate a suspect is to show that the person could not have done it, for example because they have a strong alibi.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What was stolen?",p:["A painting","A laptop","A bicycle","A watch"],b:0,u:"The case file says: Item stolen: a painting."},
 {j:"pilih",t:"According to Figure 1, at what time was the painting discovered missing?",p:["9.45 a.m.","8.45 a.m.","10.45 a.m.","11.45 a.m."],b:0,u:"The file says: 9.45 a.m. The painting was found missing."},
 {j:"pilih",t:"Which suspect has a strong alibi? (Figure 1)",p:["Mr Hamid, who was at a meeting","Ms Lina, who was alone","Mr Zul, who had no explanation","The cleaner, who left early"],b:0,u:"The file says: Mr Hamid was at a meeting with ten people."},
 {j:"pilih",t:"Which suspect cannot be eliminated yet? (Figure 1)",p:["Ms Lina","Mr Hamid","The security guard on holiday","The 10 people at the meeting"],b:0,u:"Ms Lina was alone, so she has no alibi."},
 {j:"pilih",t:"Which door was found open? (Figure 1)",p:["The back door","The front door","The roof","The cellar"],b:0,u:"The file says: The back door was open."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that the thief might have done.",p:["entered through the back door","taken the painting before 9.45","stayed in the gallery all night","painted a new picture"],b:[0,1],u:"The thief might have entered through the back door and taken the painting before 9.45."},
 {j:"pilih",t:"What can we deduce about the thief? (Figure 1)",p:["He or she knew the building.","The thief was a foreign tourist.","The thief was a small child.","The thief arrived by plane."],b:0,u:"The thief used the back door, which most visitors do not know, so he or she probably knew the building."},
 {j:"pilih",t:"Which sentence is a correct deduction? (Figure 1)",p:["Mr Hamid can't have taken it.","Mr Hamid must have stolen the painting.","The guard might be a painting.","Nobody could have entered at all."],b:0,u:"Mr Hamid was at a meeting with ten people, so he can't have stolen it."}],
 bos:{j:"pilih",t:"Which suspect should the detective question first? (Figure 1)",p:["Ms Lina, because she has no alibi.","Mr Hamid, because he was in a meeting.","The ten people from the meeting.","Nobody, because the case is solved."],b:0,u:"Ms Lina has no alibi, so she needs to be questioned first."}},

{n:4, tempat:"Mystery Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"how sure is the speaker?", kadEm:"\u{1F3A7}", kadFakta:"Listen for must (sure), might / could (possible) and can't (sure it's not). They tell you how certain the speaker is about a conclusion.",
 bosKadNama:"clues in order", bosKadEm:"\u{1F522}", bosKadFakta:"In a mystery story, the detective explains clues one by one. Listen for first, then, finally and for the conclusion with therefore or so.",
 soalan:[
 {j:"pilih",t:"Listen. What does the detective deduce?",dengar:"The muddy footprints lead to the kitchen, and the window is open. Somebody must have entered through the window. It can't have been the owner, because he was away on business.",p:["Someone came in by window.","The owner was at home all day.","Nobody came into the house.","The window was closed all night."],b:0,u:"The detective says: Somebody must have entered through the window."},
 {j:"pilih",t:"Listen. Why can't it have been the owner?",dengar:"The muddy footprints lead to the kitchen, and the window is open. Somebody must have entered through the window. It can't have been the owner, because he was away on business.",p:["He was away on business.","He was asleep upstairs.","He lost his key.","He is very tall."],b:0,u:"The detective says: because he was away on business."},
 {j:"pilih",t:"Listen. What might the missing item be?",dengar:"The safe is empty, and a lot of papers are missing. I'm not certain, but it might be the contract for the new building. It could also be the plans for the garden.",p:["A contract or plans","A pair of old shoes","A large television set","A spare car key"],b:0,u:"The speaker says: it might be the contract ... It could also be the plans."},
 {j:"pilih",t:"Listen. How sure is the speaker?",dengar:"The safe is empty, and a lot of papers are missing. I'm not certain, but it might be the contract for the new building. It could also be the plans for the garden.",p:["Not sure","Completely sure","Angry","Afraid"],b:0,u:"The speaker says: I'm not certain, but it might be ... It could also be ..."},
 {j:"pilih",t:"Listen. What does the woman think about the noise?",dengar:"I heard a loud bang at midnight. It can't have been a thunderstorm, because the sky was clear. It might have been a firework, or perhaps a car that crashed.",p:["It might have been fireworks.","It was a loud thunderstorm.","It was her neighbour's laugh.","It was a very quiet night."],b:0,u:"The speaker says: It might have been a firework."},
 {j:"pilih",t:"Listen. Why can't it have been a thunderstorm?",dengar:"I heard a loud bang at midnight. It can't have been a thunderstorm, because the sky was clear. It might have been a firework, or perhaps a car that crashed.",p:["The sky was clear.","It was too cold.","It was daytime.","She was abroad."],b:0,u:"The speaker says: because the sky was clear."},
 {j:"pilih",t:"Listen. Where must the cat be?",dengar:"The cat's bowl is empty, and the back door is open. The cat must be outside. It can't be in the house, because I've looked in every room.",p:["Outside","In the kitchen","Under the bed","On the roof of the car"],b:0,u:"The speaker says: The cat must be outside."},
 {j:"isi",t:"Listen and type the missing word: He ____ have taken the money. He was abroad.",dengar:"He can't have taken the money. He was abroad.",b:["can't","cannot"],u:"The speaker says can't have. It is certain that he did not do it."}],
 bos:{j:"pilih",t:"Listen to the conclusion. What is the main idea?",dengar:"So, let us put the clues together. The back door was open, the safe was empty, and the footprints were fresh. The thief must have known the house, and he must have left after ten o'clock. Therefore, the police should look at the people who work here.",p:["The thief probably knew the house.","The thief came from another country.","The house was empty all week.","The police closed the case today."],b:0,u:"The speaker deduces that the thief must have known the house."}},

{n:5, tempat:"Story Study", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"ceritamisteri",
 kadNama:"suspense", kadEm:"\u{1F628}", kadFakta:"Suspense is the feeling of excitement and worry that you feel when you do not know what will happen next. Mystery stories use suspense to keep readers interested.",
 bosKadNama:"infer", bosKadEm:"\u{1F9E0}", bosKadFakta:"To infer is to understand something that is not stated directly, by using clues in the text. Phrases like must have been or might be show inference.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Two friends search for a key.","Two friends go on a long holiday.","Two friends win a big competition.","Two friends open a school shop."],b:0,u:"The text describes two friends trying to find out who has taken the key."},
 {j:"pilih",t:"According to Text 1, where did Hana find the first clue? (Text 1)",p:["Near the classroom door","In the canteen","On the football field","At the bus stop"],b:0,u:"The text says: She found a muddy footprint near the classroom door."},
 {j:"pilih",t:"What did the footprint tell them? (Text 1)",p:["Someone came in from outside.","The classroom had been cleaned.","It was raining in the hall.","Nobody had been in there."],b:0,u:"The text says: Someone must have come in from the field."},
 {j:"pilih",t:"The word footprint in Text 1 means",p:["a mark made by a foot","a type of sports shoe","a map of a field","a kind of footballer"],b:0,u:"A footprint is the mark that a foot leaves."},
 {j:"pilih",t:"Why does Jun say that it can't have been the teacher? (Text 1)",p:["The teacher was at a meeting.","The teacher was very tall.","The teacher was a stranger.","The teacher was afraid."],b:0,u:"The text says: It can't have been Mr Rizal; he was at a meeting all morning."},
 {j:"banyak",t:"Based on Text 1, choose TWO possible explanations that the friends consider.",p:["A student took the key.","The caretaker moved it.","The key flew away.","The key was never made."],b:[0,1],u:"The text says it might be a student or perhaps the caretaker who moved it."},
 {j:"pilih",t:"What can we infer about the friends? (Text 1)",p:["They use clues carefully.","They are rather careless.","They are afraid of the school.","They dislike all mysteries."],b:0,u:"They use clues and logical language (must have, can't have), so they think carefully and use evidence."},
 {j:"pilih",t:"Which sentence from Text 1 shows a deduction about the past?",p:["Someone must have come in.","The classroom is on the second floor.","Hana is wearing a red jacket.","Jun likes playing football."],b:0,u:"Must have + past participle shows a deduction about the past."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["The Missing Key","A Day at the Beach Club","The History of Football Boots","Cooking with Mum at Home"],b:0,u:"The whole text is about a mystery involving a missing key."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · write about a mystery with deductions", lampiran:null,
 kadNama:"write like a detective", kadEm:"\u{1F4DD}", kadFakta:"Support each deduction with a clue: The window is open, so someone must have come in. Use must, might and can't to show how sure you are.",
 bosKadNama:"watch the form", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Past deduction: modal + have + past participle. Do not write: must have go / can't had gone / might have went. The past participle of go is gone; of see is seen; of take is taken.",
 soalan:[
 {j:"isi",t:"Type the missing word: The window is open, so someone ____ have come in. (sure)",b:["must"],u:"Must have + past participle."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: She must have went home early.",b:["gone"],u:"The past participle of go is gone."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["He","can't","have","taken","the","bag."],b:[0,1,2,3,4,5],u:"Subject + can't + have + past participle + object."},
 {j:"pilih",t:"Which sentence shows a possibility?",p:["It might have been a mistake.","It must have been a mistake.","It can't have been a mistake.","It was a mistake."],b:0,u:"Might have shows that something was possible, but not certain."},
 {j:"pilih",t:"Which sentence is correct?",p:["They can't have arrived yet; the train is late.","They can't had arrived yet; the train is late.","They can't have arrive yet; the train is late.","They can't arrived yet; the train is late."],b:0,u:"Can't have + past participle."},
 {j:"pilih",t:"Which sentence is a present deduction?",p:["He must be very tired.","He must have been very tired.","He might have been tired.","He had been tired."],b:0,u:"Present deduction: must be + adjective."},
 {j:"susun",t:"Put the sentences in order to make a short mystery paragraph.",p:["The door was open, and the lights were off.","Someone must have entered the house.","It can't have been a neighbour, because everyone was away.","It might have been a stranger."],b:[0,1,2,3],u:"State the situation, make a strong deduction, eliminate a suspect, and offer a possibility."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["It can't have been her; she was in Penang.","It can't have been her she was in Penang.","It can't have been her, she, was in Penang.","it can't have been her; she was in Penang."],b:0,u:"A semicolon joins two related clauses; the sentence begins with a capital letter."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: The cake has disappeared from the kitchen. ____",p:["Someone must have taken it, but it can't have been Dad; he is away.","Someone must took it, but it can't be Dad, because he has away.","Someone might taking it, but it can't have Dad, because he is gone away.","Someone must have take it, but it can't had been Dad, because he away."],b:0,u:"Must have taken (sure), can't have been (impossible)."}}
];

module.exports = {
  id:"e5b3", tingkatan:5, kod:"Unit 3 Case Closed",
  tajuk:"Case Closed", subtajuk:"English Form 5 · Unit 3 Case Closed",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("mysteries and modals of deduction", "Case Closed"),
  lampiran:{
   failkes:jadual(1, "A case file for a stolen painting", "Case File: The Missing Painting",
     ["Fact","Detail"],
     [["Item stolen","A painting"],["Time found missing","9.45 a.m."],["Entry point","The back door was open."],["Suspect 1","Mr Hamid: at a meeting with ten people all morning."],["Suspect 2","Ms Lina: alone in her office, no witness."]],
     "The thief left before 9.45 a.m."),
   ceritamisteri:teks(1, "An extract from a school mystery story", "The Case of the Missing Key",
     ["On Monday morning, Hana found a muddy footprint near the classroom door. 'Someone must have come in from the field,' she said. Jun looked at the footprint carefully. 'It can't have been Mr Rizal,' he said. 'He was at a meeting all morning.'",
      "The key to the science room had disappeared, and the friends decided to find it. 'It might have been a student,' said Hana. 'Or perhaps the caretaker moved it,' said Jun.",
      "They wrote down each clue and checked it twice. Slowly, they began to understand what must have happened."],
     "Practice text: invented story")
  },
  aras:ARAS
};
