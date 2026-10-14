/* Sumber kandungan — English KSSM Form 4, Unit 5 Cause and Effect
   DSKP Form 4 Main Language Functions: connecting words expressing a contrast (although, even though, however,
   in case, despite, in spite of), cause (because, because of, as a result of, due to) and effect (so, consequently,
   as a result, thus, therefore). Tema Science and Technology. Semua teks rangsangan ialah rekaan untuk latihan. */
const { jadual, sembang, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Digital Dock", sk:"Vocabulary · technology, social media and screen time", lampiran:null,
 kadNama:"screen time", kadEm:"\u{1F4F1}", kadFakta:"Screen time is the amount of time spent using devices with screens such as phones, tablets and computers. Too much screen time can harm sleep and eyesight.",
 bosKadNama:"digital detox", bosKadEm:"\u{1F50C}", bosKadFakta:"A digital detox is a period when you deliberately stop using electronic devices so that you can relax and focus on real life.",
 soalan:[
 {j:"pilih",gbr:"\u{1F4F1}",t:"Spending too many hours on your phone each day can cause an ____ to technology.",p:["addiction","ambition","argument","accident"],b:0,u:"An addiction is a strong need to do something that is hard to stop."},
 {j:"pilih",gbr:"\u{1F4F6}",t:"The village has a weak internet ____, so videos load very slowly.",p:["connection","attention","fashion","direction"],b:0,u:"An internet connection links your device to the internet."},
 {j:"pilih",gbr:"\u{1F512}",t:"To keep your accounts safe, you should create a strong ____ and never share it.",p:["password","timetable","souvenir","headline"],b:0,u:"A password is a secret word or code that lets you into an account."},
 {j:"pilih",t:"When you are unable to stop thinking about checking your messages, you cannot",p:["concentrate","relax","exercise","sleep deeply"],b:0,u:"To concentrate is to focus your attention on one thing."},
 {j:"pilih",t:"Which word means 'to put something on the internet so others can see it'?",p:["post","delete","block","erase"],b:0,u:"To post is to publish something online."},
 {j:"pilih",t:"Someone who tells lies about you or threatens you online is committing",p:["cyberbullying","blogging","streaming","shopping"],b:0,u:"Cyberbullying is bullying that takes place online."},
 {j:"isi",t:"Type the missing word: People who spend too long online may feel ____ because they don't talk to others face to face. (sad and alone)",b:["lonely","isolated"],u:"Lonely and isolated describe sadness caused by being alone."},
 {j:"pilih",t:"Which word describes something that happens as a result of something else?",p:["consequence","coincidence","convenience","confidence"],b:0,u:"A consequence is a result of an action."}],
 bos:{j:"banyak",t:"Choose ALL the words that describe a negative effect of too much screen time.",p:["tiredness","eye strain","poor concentration","fitness","creativity"],b:[0,1,2],u:"Tiredness, eye strain and poor concentration are negative effects. Fitness and creativity are positive."}},

{n:2, tempat:"Connector Crossing", sk:"Grammar · connecting words for contrast, cause and effect", lampiran:null,
 kadNama:"contrast", kadEm:"\u{2194}\u{FE0F}", kadFakta:"although / even though + clause (Although it rained, we went out). despite / in spite of + noun or -ing (Despite the rain, we went out). However, + a new sentence (It rained. However, we went out). in case = because something might happen (Take an umbrella in case it rains).",
 bosKadNama:"cause and effect", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"Cause: because + clause; because of / due to / as a result of + noun. Effect: so + clause; therefore, consequently, as a result, thus (at the start of a new sentence or after a semicolon).",
 soalan:[
 {j:"pilih",t:"____ he was tired, he continued to study.",p:["Although","Despite","Because of","Therefore"],b:0,u:"Although + subject + verb shows a contrast."},
 {j:"pilih",t:"____ the heavy rain, the match was not cancelled.",p:["Despite","Although","Because","However"],b:0,u:"Despite + noun phrase (the heavy rain)."},
 {j:"pilih",t:"The flight was delayed ____ bad weather.",p:["because of","because","although","so"],b:0,u:"Because of + noun phrase (bad weather)."},
 {j:"pilih",t:"She didn't sleep well. ____, she felt tired all day.",p:["As a result","Despite","Because","Although"],b:0,u:"As a result introduces an effect in a new sentence."},
 {j:"pilih",t:"Take a jacket ____ it gets cold later.",p:["in case","although","therefore","despite"],b:0,u:"In case + clause means because something might happen."},
 {j:"pilih",t:"The roads were flooded. ____, the school was closed.",p:["Consequently","Although","Because of","Despite"],b:0,u:"Consequently introduces a result."},
 {j:"isi",t:"Type the missing word: ____ the traffic was heavy, we arrived on time. (even though / although)",b:["although","even though"],u:"Although and even though introduce a contrast clause."},
 {j:"isi",t:"Type the missing words: The match was cancelled ____ to the rain. (due)",b:["due"],u:"Due to + noun phrase gives a cause."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["In spite of feeling ill, he went to school.","In spite of he felt ill, he went to school.","In spite feeling ill, he went to school.","In spite that he felt ill, he went to school."],b:0,u:"In spite of + -ing or noun phrase."}},

{n:3, tempat:"Survey Station", sk:"Reading 3.1.2 · specific details in a survey table", lampiran:"tinjauanskrin",
 kadNama:"percentage", kadEm:"\u{1F4CA}", kadFakta:"A percentage shows how many out of one hundred. 40% means 40 out of every 100. If 200 students were asked, 40% is 80 students.",
 bosKadNama:"majority", bosKadEm:"\u{1F5F3}\u{FE0F}", bosKadFakta:"The majority is more than half of a group. A minority is less than half.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. How many students were asked?",p:["200","20","2,000","120"],b:0,u:"The table says: 200 students were surveyed."},
 {j:"pilih",t:"According to Figure 1, what percentage of students spend more than 5 hours online every day?",p:["35%","15%","50%","65%"],b:0,u:"The table says: More than 5 hours: 35%."},
 {j:"pilih",t:"Which effect is the most common? (Figure 1)",p:["Feeling tired","Eye strain","Poor grades","Loneliness"],b:0,u:"The table says: Feeling tired: 60%."},
 {j:"pilih",t:"How many students (of 200) reported eye strain? (Figure 1)",p:["80","40","120","160"],b:0,u:"Eye strain: 40% of 200 = 80."},
 {j:"pilih",t:"Which effect was reported by the smallest group? (Figure 1)",p:["Loneliness","Feeling tired","Eye strain","Poor sleep"],b:0,u:"Loneliness: 15%, the lowest percentage."},
 {j:"banyak",t:"Based on Figure 1, choose TWO statements that are TRUE.",p:["Most students feel tired.","Under half had eye strain.","Most students feel very lonely.","Nobody at all had poor grades."],b:[0,1],u:"60% feel tired (the majority). 40% have eye strain (fewer than half)."},
 {j:"pilih",t:"Which sentence correctly describes the table? (Figure 1)",p:["Many students feel tired.","Students are healthy due to long screen time.","Screen time has no effect on anyone.","Only teachers feel tired at school."],b:0,u:"60% reported feeling tired, which is a common result of long screen time."},
 {j:"pilih",t:"What can we infer from Figure 1?",p:["Screens affect health and learning.","Screens are completely harmless to us.","Students dislike going to school.","Students never use their phones."],b:0,u:"The table lists several negative effects on health and learning."}],
 bos:{j:"pilih",t:"The school wants to reduce the problem that affects the second-largest group of students. Which effect should it focus on? (Figure 1)",p:["Poor sleep","Feeling tired","Loneliness","Poor grades"],b:0,u:"Feeling tired is the largest (60%), and poor sleep (45%) is the second largest."}},

{n:4, tempat:"Cause Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"signal words", kadEm:"\u{1F4E1}", kadFakta:"Listen for words that show relationships: because, due to (cause); so, therefore, as a result (effect); although, however, despite (contrast).",
 bosKadNama:"cause or effect?", bosKadEm:"\u{1F500}", bosKadFakta:"Ask yourself: What happened? (effect) Why? (cause). The signal word tells you which part of the sentence is the cause and which is the effect.",
 soalan:[
 {j:"pilih",t:"Listen. Why did the match end early?",dengar:"The football match ended early because of a thunderstorm. As a result, the final will be played next Saturday.",p:["A thunderstorm.","A player was injured.","The referee was ill.","The ball was lost."],b:0,u:"The speaker says: The football match ended early because of a thunderstorm."},
 {j:"pilih",t:"Listen. When will the final be played?",dengar:"The football match ended early because of a thunderstorm. As a result, the final will be played next Saturday.",p:["Next Saturday","Tomorrow","Next month","Last Saturday"],b:0,u:"The speaker says: the final will be played next Saturday."},
 {j:"pilih",t:"Listen. What is the speaker's contrast?",dengar:"Although I'm very tired, I can't stop looking at my phone. I know that it affects my sleep, however I find it hard to put it down.",p:["Tired but still online","Rested and very happy","Busy and always fast","Angry and very loud"],b:0,u:"The speaker says: Although I'm very tired, I can't stop looking at my phone."},
 {j:"pilih",t:"Listen. What does the speaker know about the phone?",dengar:"Although I'm very tired, I can't stop looking at my phone. I know that it affects my sleep, however I find it hard to put it down.",p:["It affects his sleep.","It is broken.","It is expensive.","It is too heavy."],b:0,u:"The speaker says: I know that it affects my sleep."},
 {j:"pilih",t:"Listen. Why does the teacher bring an umbrella?",dengar:"I always take an umbrella in case it rains on the way home. Despite the dry weather this morning, the forecast says there might be a storm.",p:["In case it rains","Because it is hot","Because it is a fashion","In order to play"],b:0,u:"The speaker says: in case it rains."},
 {j:"pilih",t:"Listen. How was the weather this morning?",dengar:"I always take an umbrella in case it rains on the way home. Despite the dry weather this morning, the forecast says there might be a storm.",p:["Dry","Stormy","Foggy","Snowy"],b:0,u:"The speaker says: Despite the dry weather this morning."},
 {j:"pilih",t:"Listen. What was the effect of the power cut?",dengar:"There was a power cut in the town due to a fallen tree. Consequently, the shops closed early, and many people went home.",p:["The shops closed early.","The trees grew.","The school opened.","The roads were repaired."],b:0,u:"The speaker says: Consequently, the shops closed early."},
 {j:"isi",t:"Listen and type the missing word: There was a power cut ____ to a fallen tree.",dengar:"There was a power cut due to a fallen tree.",b:["due"],u:"The speaker says due. Due to + noun phrase gives a cause."}],
 bos:{j:"pilih",t:"Listen to the report. What is the main message?",dengar:"Despite the benefits of technology, too much screen time can harm health. Many teenagers sleep badly because of their phones, and as a result, they feel tired at school. Therefore, experts recommend turning off devices an hour before bedtime.",p:["Limit screen time to stay healthy.","Technology is completely useless.","Teenagers should never go to sleep.","Phones always improve our sleep."],b:0,u:"The report recommends turning off devices before bed to protect health."}},

{n:5, tempat:"Detox Desk", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"artikeldetoks",
 kadNama:"balance", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Balance means giving the right amount of time or attention to different things, for example between screens and the real world.",
 bosKadNama:"moderation", bosKadEm:"\u{1F6A6}", bosKadFakta:"Moderation means doing something in a sensible amount, not too much and not too little. Technology is useful in moderation.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A school tried a digital detox.","A school banned all computers forever.","A school lost its internet service.","A school sold phones to pupils."],b:0,u:"The article describes a school's digital detox week and its results."},
 {j:"pilih",t:"According to Text 1, why did the school organise the detox week?",p:["Pupils used their phones too much.","Phones were far too expensive.","The school internet was too slow.","Teachers wanted more free time."],b:0,u:"The text says pupils were spending so much time on their phones that their grades were falling."},
 {j:"pilih",t:"What happened to pupils' grades after the detox? (Text 1)",p:["They rose a little.","They fell sharply.","They stayed the same.","They disappeared."],b:0,u:"The text says that grades improved slightly."},
 {j:"pilih",t:"The word benefits in Text 1 means",p:["good results","big problems","costs","accidents"],b:0,u:"Benefits are advantages or good effects."},
 {j:"pilih",t:"What did pupils do during break time instead? (Text 1)",p:["They played and chatted.","They watched videos together.","They slept in the classroom.","They went home for lunch."],b:0,u:"The text says pupils played games and talked face to face."},
 {j:"banyak",t:"Based on Text 1, choose TWO results of the detox week.",p:["Pupils slept better.","Pupils concentrated more.","Pupils had more homework.","Teachers left the school."],b:[0,1],u:"The text says that pupils slept better and concentrated more."},
 {j:"pilih",t:"What opposing point does the writer mention? (Text 1)",p:["Some felt anxious without phones.","Some pupils wanted more homework.","Some teachers wanted shorter lessons.","Some parents enjoyed the noise."],b:0,u:"The text says: Although most pupils enjoyed it, some felt anxious without their phones."},
 {j:"pilih",t:"What can we infer about the writer's view? (Text 1)",p:["Technology needs moderation.","Technology should be banned for all.","Technology is always very harmful.","Technology is not important today."],b:0,u:"The writer says that technology is useful but needs balance, so it should be used in moderation."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["A Week Without Phones","The History of Phones","How to Fix a Screen","The Best Games Online"],b:0,u:"The text is about a week when pupils lived without phones."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write about cause and effect", lampiran:null,
 kadNama:"link your ideas", kadEm:"\u{1F517}", kadFakta:"Join ideas with the correct connector: because of + noun; because + clause; although + clause; despite + noun/-ing; so/therefore/as a result for effects.",
 bosKadNama:"punctuation of however", bosKadEm:"\u{270D}\u{FE0F}", bosKadFakta:"However, therefore and consequently start a new sentence with a capital letter and are followed by a comma: It was cold. However, we went out. Or use a semicolon: It was cold; however, we went out.",
 soalan:[
 {j:"isi",t:"Type the missing word: ____ the rain, we enjoyed the trip. (noun phrase after it)",b:["despite","in spite of"],u:"Despite + noun phrase. In spite of is also correct."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: Because the rain, we stayed at home.",b:["of"],u:"Because of + noun phrase: because of the rain."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["Although","he","was","ill,","he","went","to","school."],b:[0,1,2,3,4,5,6,7],u:"Although + clause, + main clause."},
 {j:"pilih",t:"Which sentence is correct?",p:["He was tired. However, he finished the work.","He was tired however he finished the work.","He was tired, however, he finished the work.","He was tired. Despite, he finished the work."],b:0,u:"However starts a new sentence and is followed by a comma."},
 {j:"pilih",t:"Which sentence uses a connector of result correctly?",p:["It rained heavily; therefore, the match was cancelled.","It rained heavily; although, the match was cancelled.","It rained heavily, despite the match was cancelled.","It rained heavily because, the match was cancelled."],b:0,u:"Therefore introduces a result and follows a semicolon."},
 {j:"pilih",t:"Which sentence uses in case correctly?",p:["Bring some water in case you get thirsty.","Bring some water in case of you get thirsty.","Bring some water in case you will get thirsty.","Bring some water in case that you got thirsty."],b:0,u:"In case + present simple."},
 {j:"susun",t:"Put the sentences in order to make a short paragraph.",p:["Many teenagers use their phones late at night.","As a result, they do not get enough sleep.","Consequently, they feel tired at school.","Therefore, they should limit their screen time."],b:[0,1,2,3],u:"Start with the cause, then its effects and finish with the recommendation."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["Although it was late, we kept working.","Although it was late we kept, working.","although it was late, we kept working.","Although it was late; we kept working."],b:0,u:"A comma goes after the although clause."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: Social media is very popular. ____",p:["However, using it too much can harm our sleep, and as a result, we may feel tired at school.","However using it too much can harm our sleep, as a result, we may feeling tired at school.","However, it too much using can harm our sleep, so a result, we may feel tired in school.","Although, using it too much can harm our sleep, and so result, we may feel tired at school."],b:0,u:"However + comma, then a result with as a result."}}
];

module.exports = {
  id:"e4b5", tingkatan:4, kod:"Unit 5 Cause and Effect",
  tajuk:"Cause and Effect", subtajuk:"English Form 4 · Unit 5 Cause and Effect",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("technology, cause, effect and contrast", "Cause and Effect"),
  lampiran:{
   tinjauanskrin:jadual(1, "Results of a survey about screen time", "Screen Time Survey · 200 students",
     ["Question","Percentage of students"],
     [["Spend more than 5 hours online every day","35%"],["Feel tired at school","60%"],["Have poor sleep","45%"],["Have eye strain","40%"],["Feel lonely","15%"]],
     "200 students were surveyed. Each percentage shows how many of the 200 students gave this answer."),
   artikeldetoks:teks(1, "A magazine article about a school experiment", "A Week Without Phones",
     ["Last month, SMK Bayu organised a digital detox week because pupils were spending so much time on their phones that their grades were falling. During the week, phones were kept in a locked box during lessons and during break.",
      "At break time, pupils played games and talked face to face. After the week, teachers noticed that pupils slept better, concentrated more and that grades improved slightly.",
      "Although most pupils enjoyed the experiment, some felt anxious without their phones. The principal says that technology is useful, but it needs balance. 'We want pupils to use it in moderation,' she said."],
     "Practice text: invented magazine article")
  },
  aras:ARAS
};
