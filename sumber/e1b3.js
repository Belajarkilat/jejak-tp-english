/* Sumber kandungan — English KSSM Form 1, Unit 3 Wild weather
   DSKP Form 1 Textbook scope and sequence: Tema Health and Environment, Unit 3.
   Tatabahasa: past continuous, adjectives and adverbs. Kosa kata: weather, natural disasters.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Weather Station", sk:"Vocabulary · weather and natural disasters", lampiran:null,
 kadNama:"heatwave", kadEm:"\u{1F975}", kadFakta:"A heatwave is a long period of very hot weather. A drought is a long period with no rain. Both can happen in the same year!",
 bosKadNama:"thunder and lightning", bosKadEm:"\u{26A1}", bosKadFakta:"We see lightning first, then we hear thunder. Light travels faster than sound.",
 soalan:[
 {j:"pilih",gbr:"\u{1F327}\u{FE0F}",t:"What is the weather like in the picture?",p:["rainy","sunny","icy","dry"],b:0,u:"The clouds and drops show rain, so the weather is rainy."},
 {j:"pilih",gbr:"\u{2744}\u{FE0F}",t:"It is very, very cold. Water on the road turns to ice. The weather is",p:["icy","windy","warm","damp"],b:0,u:"Icy means covered with ice or very cold."},
 {j:"pilih",gbr:"\u{1F32A}\u{FE0F}",t:"What natural disaster is this?",p:["tornado","tsunami","drought","avalanche"],b:0,u:"A tornado is a strong, spinning column of wind."},
 {j:"pilih",gbr:"\u{1F30A}",t:"A very large wave that comes after an undersea earthquake is called a",p:["tsunami","landslide","hurricane","blizzard"],b:0,u:"A tsunami is a giant wave caused by an earthquake or a volcano under the sea."},
 {j:"pilih",gbr:"\u{26F0}\u{FE0F}",t:"When a large amount of soil and rocks slides down a hill, we call it a",p:["landslide","wildfire","famine","flood"],b:0,u:"A landslide happens when earth and rocks fall down a slope."},
 {j:"pilih",t:"Which weather word means 'a little bit wet'?",p:["damp","dry","icy","stormy"],b:0,u:"Damp means slightly wet, for example damp clothes."},
 {j:"isi",gbr:"\u{1F32B}\u{FE0F}",t:"Type the missing word: It's difficult to see far away because the weather is ____.",b:["foggy"],u:"Fog is thick cloud near the ground, so we say the weather is foggy."},
 {j:"pilih",t:"A long period with no rain, when crops cannot grow, is a",p:["drought","flood","tornado","blizzard"],b:0,u:"A drought is a long time without rain. The opposite problem is a flood."}],
 bos:{j:"banyak",t:"Choose ALL the words that describe bad weather.",p:["stormy","blizzard","hailstones","sunny","warm"],b:[0,1,2],u:"Stormy weather, a blizzard (a heavy snowstorm) and hailstones (balls of ice) are all bad weather."}},

{n:2, tempat:"Storm Lab", sk:"Grammar · past continuous, adjectives and adverbs", lampiran:null,
 kadNama:"was/were + -ing", kadEm:"\u{1F300}", kadFakta:"Past continuous = was/were + verb-ing. It shows an action that was IN PROGRESS at a time in the past: At 8 p.m., I was doing my homework.",
 bosKadNama:"adjective or adverb?", bosKadEm:"\u{1F50E}", bosKadFakta:"An adjective describes a noun: a careful driver. An adverb describes a verb: drive carefully. Many adverbs end in -ly. Good → well is irregular.",
 soalan:[
 {j:"pilih",t:"At 8 p.m. yesterday, I ____ my homework.",p:["was doing","did","am doing","were doing"],b:0,u:"At 8 p.m. yesterday shows an action in progress at a past time. With I, use was + verb-ing: was doing."},
 {j:"pilih",t:"They ____ lunch when the storm began.",p:["were eating","was eating","are eating","eat"],b:0,u:"They is plural, so we use were + verb-ing: were eating."},
 {j:"pilih",t:"It ____ snowing when we arrived at the cabin.",p:["wasn't","weren't","didn't","isn't"],b:0,u:"It is singular, so the negative past continuous is wasn't + verb-ing: It wasn't snowing."},
 {j:"pilih",t:"____ you walking to school at 7 a.m.?",p:["Were","Was","Did","Are"],b:0,u:"Past continuous questions: Were you + verb-ing? Were you walking...?"},
 {j:"pilih",t:"It's cold. Dress ____.",p:["warmly","warm","warmer","warmness"],b:0,u:"Dress is a verb, so we need an adverb: warmly."},
 {j:"pilih",t:"She speaks English very ____.",p:["well","good","goodly","best"],b:0,u:"Speaks is a verb, so we need an adverb. The adverb of good is well."},
 {j:"isi",t:"Type the correct word: It's foggy. Drive ____. (careful)",b:["carefully"],u:"Drive is a verb, so we need an adverb: carefully."},
 {j:"isi",t:"Type the correct form of the verb: Yesterday at noon, my brother ____ (play) football in the rain.",b:["was playing"],u:"Past continuous with my brother (he): was + playing."}],
 bos:{j:"pilih",t:"Choose the sentence that is correct.",p:["Hana was running quickly because the rain was getting heavy.","Hana was running quick because the rain was getting heavy.","Hana were running quickly because the rain was getting heavy.","Hana was ran quickly because the rain was getting heavy."],b:0,u:"Past continuous: was + running (with Hana). Running is a verb, so we use the adverb quickly."}},

{n:3, tempat:"Forecast Desk", sk:"Reading 3.1.2 · specific details in a weather forecast", lampiran:"ramalan",
 kadNama:"forecast", kadEm:"\u{1F4FA}", kadFakta:"A forecast tells us what the weather will be like. Example: The forecast says it will rain tomorrow.",
 bosKadNama:"temperature", bosKadEm:"\u{1F321}\u{FE0F}", bosKadFakta:"Temperature is how hot or cold something is. We measure it in degrees Celsius (°C).",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What will the weather be like in Kuching on Wednesday?",p:["Stormy","Sunny","Windy","Cloudy"],b:0,u:"The forecast shows Kuching on Wednesday: Stormy."},
 {j:"pilih",t:"According to Figure 1, which city will be the hottest on Tuesday?",p:["Alor Setar","Kota Kinabalu","Kuching","Johor Bahru"],b:0,u:"On Tuesday, Alor Setar is 35°C, which is the highest temperature."},
 {j:"pilih",t:"Based on Figure 1, what is the temperature in Johor Bahru on Wednesday?",p:["31°C","33°C","29°C","27°C"],b:0,u:"The table shows Johor Bahru, Wednesday: 31°C."},
 {j:"pilih",t:"Which city has the same weather on Tuesday and Wednesday (Figure 1)?",p:["Kota Kinabalu","Kuching","Alor Setar","Johor Bahru"],b:0,u:"Kota Kinabalu is Cloudy on both days."},
 {j:"pilih",t:"Aiman lives in Alor Setar. What should he bring on Wednesday according to Figure 1?",p:["Sunglasses","An umbrella","A raincoat","A thick jacket"],b:0,u:"Alor Setar will be Sunny on Wednesday, so sunglasses are best."},
 {j:"banyak",t:"Based on Figure 1, choose TWO cities where it will rain on Wednesday.",p:["Kuching","Johor Bahru","Alor Setar","Kota Kinabalu"],b:[0,1],u:"The forecast shows Kuching: Stormy and Johor Bahru: Rainy on Wednesday."},
 {j:"pilih",t:"Which day is the safest day to hold a picnic in Kuching, based on Figure 1?",p:["Tuesday","Wednesday","Either day","Neither day"],b:0,u:"Kuching is Windy on Tuesday and Stormy on Wednesday, but a picnic in windy weather is still safer than in a storm."},
 {j:"pilih",t:"What does the warning at the bottom of Figure 1 tell people to do?",p:["Stay away from the beach","Go to the beach early","Wear thick winter coats","Drive much faster"],b:0,u:"The warning says: Strong waves. Please stay away from the beach."}],
 bos:{j:"pilih",t:"Which statement is TRUE based on Figure 1?",p:["Alor Setar is hotter than Kota Kinabalu on both days.","Johor Bahru will be sunny and dry on both days of the week.","Kuching will be the hottest city of the four on Tuesday.","Kota Kinabalu will have rainy weather on Wednesday."],b:0,u:"Alor Setar is 35°C and 34°C, while Kota Kinabalu is 30°C and 31°C, so Alor Setar is hotter on both days."}},

{n:4, tempat:"Weather Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"when / while", kadEm:"\u{23F1}\u{FE0F}", kadFakta:"Use while + past continuous for a long action and when + past simple for a short action: While I was sleeping, the phone rang.",
 bosKadNama:"warning", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"In a warning, listen for WHAT is dangerous, WHERE it happens and WHAT you must do.",
 soalan:[
 {j:"pilih",t:"Listen. What was the weather like yesterday afternoon?",dengar:"Yesterday afternoon, the weather was very stormy. There was thunder and lightning, and the wind was blowing strongly.",p:["Stormy","Sunny and dry","Foggy and cold","Icy and white"],b:0,u:"The speaker says: the weather was very stormy."},
 {j:"pilih",t:"Listen. What were the children doing when the rain started?",dengar:"The children were playing football on the field when the rain started. They ran to the canteen quickly.",p:["Playing football","Eating lunch","Doing homework","Reading books"],b:0,u:"The speaker says: The children were playing football on the field when the rain started."},
 {j:"pilih",t:"Listen. Where did the children run?",dengar:"The children were playing football on the field when the rain started. They ran to the canteen quickly.",p:["To the canteen","To the library","To the hall","To the bus"],b:0,u:"The speaker says: They ran to the canteen."},
 {j:"pilih",t:"Listen to the announcement. What happened to the school trip?",dengar:"Attention, students. Tomorrow's trip to the beach is cancelled because of the heavy rain. The trip will take place next Friday instead.",p:["It was moved to next Friday.","It was cancelled forever.","It was moved to tomorrow.","It went ahead as planned."],b:0,u:"The speaker says: The trip will take place next Friday instead."},
 {j:"pilih",t:"Listen. Where was Farid when the earthquake happened?",dengar:"I was sitting in the classroom when the earthquake began. The desks were shaking, and our teacher told us to go under the tables.",p:["In the classroom","On the field","At home","In the canteen"],b:0,u:"Farid says: I was sitting in the classroom when the earthquake began."},
 {j:"pilih",t:"Listen. What did the teacher tell the students to do?",dengar:"I was sitting in the classroom when the earthquake began. The desks were shaking, and our teacher told us to go under the tables.",p:["Go under the tables","Run outside","Stay at the windows","Call their parents"],b:0,u:"The speaker says: our teacher told us to go under the tables."},
 {j:"pilih",t:"Listen. How was the wind blowing during the storm?",dengar:"During the storm, the wind was blowing very strongly, and the rain was falling heavily on the roof.",p:["Very strongly","Very gently","Very slowly","Very quietly"],b:0,u:"The speaker says: the wind was blowing very strongly."},
 {j:"isi",t:"Listen and type the missing word: I was ____ my bicycle when it started to rain.",dengar:"I was riding my bicycle when it started to rain.",b:["riding"],u:"The speaker says riding. Past continuous = was + verb-ing."}],
 bos:{j:"pilih",t:"Listen to the warning. What must people near the river do?",dengar:"This is a flood warning. The river level is rising quickly. People living near the river must move to the community hall immediately. Please bring your identity cards and some food.",p:["Move to the community hall","Stay at home and wait","Go to the river to look","Drive to the city"],b:0,u:"The speaker says: People living near the river must move to the community hall immediately."}},

{n:5, tempat:"News Room", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"berita",
 kadNama:"rescue", kadEm:"\u{1F6DF}", kadFakta:"rescue = save someone from danger (menyelamatkan). Example: The firefighters rescued a cat from the tree.",
 bosKadNama:"headline", bosKadEm:"\u{1F4F0}", bosKadFakta:"A headline is the title of a news report. It tells the MAIN IDEA in a few words.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A school helped people during a flood.","A school won a football match.","A school opened a new library.","A school closed for the holidays."],b:0,u:"The report is about how students and teachers helped villagers during a flood."},
 {j:"pilih",t:"According to Text 1, what time did the water start to rise?",p:["At about 3 a.m.","At about 3 p.m.","At about 7 a.m.","At about 10 p.m."],b:0,u:"The text says the water started to rise at about 3 a.m."},
 {j:"pilih",t:"Where were the villagers sleeping when the flood began? (Text 1)",p:["In their homes","In the school","In the mosque","On the bus"],b:0,u:"The text says: Most villagers were sleeping when the water entered their homes."},
 {j:"pilih",t:"The word rescue in Text 1 means",p:["to save someone","to run away from danger","to clean a dirty place","to build a new house"],b:0,u:"Rescue means to save someone from danger."},
 {j:"pilih",t:"Why was SMK Bukit Indah a safe place? (Text 1)",p:["It is on high ground.","It is near the river.","It has a swimming pool.","It has a big field."],b:0,u:"The text says the school is on high ground, so the water did not reach it."},
 {j:"banyak",t:"Based on Text 1, choose TWO things the students were doing to help.",p:["giving out food","carrying children","fixing roads","driving boats"],b:[0,1],u:"The text says students gave out food and carried small children to safety."},
 {j:"pilih",t:"What can we infer about the teachers in Text 1?",p:["They were brave and kind.","They were afraid of the water.","They were angry with the families.","They were careless about safety."],b:0,u:"They stayed at the school and helped everyone through the night, so they were brave and helpful."},
 {j:"susun",t:"Put the events in the correct order.",p:["The water started to rise.","Villagers walked to the school.","Students gave out food.","The water went down in the morning."],b:[0,1,2,3],u:"First the water rose, then villagers went to the school, students helped, and finally the water went down."}],
 bos:{j:"pilih",t:"Which of these is the BEST headline for Text 1?",p:["School Becomes Safe Home During Flood","Heavy Rain Cancels School Trip","New Bridge Opens in Bukit Indah","Students Win Science Prize"],b:0,u:"The whole report is about the school helping people during the flood."}},

{n:6, tempat:"Report Desk", sk:"Writing 4.1.3 · Grammar · describe past events using the past continuous", lampiran:null,
 kadNama:"while", kadEm:"\u{1F4DD}", kadFakta:"While I was walking home, it began to rain. Use a comma when while or when starts the sentence.",
 bosKadNama:"describe it well", bosKadEm:"\u{1F58B}\u{FE0F}", bosKadFakta:"Good reports use adjectives (heavy rain, strong wind) and adverbs (ran quickly, spoke calmly) to make the picture clear.",
 soalan:[
 {j:"isi",t:"Type the correct form of the verb: While I ____ (walk) home, it started to rain.",b:["was walking"],u:"While + past continuous: While I was walking home, it started to rain."},
 {j:"isi",t:"Type the correct word: We ____ watching TV when the lights went out.",b:["were"],u:"We is plural, so the past continuous uses were."},
 {j:"susun",t:"Put the words in order to make a correct question.",p:["What","were","you","doing?"],b:[0,1,2,3],u:"Past continuous question: What + were + subject + verb-ing? What were you doing?"},
 {j:"pilih",t:"Which sentence is correct?",p:["I was cooking dinner when the lights went out.","I cooking dinner when the lights went out.","I was cook dinner when the lights went out.","I did cooking dinner when the lights went out."],b:0,u:"Past continuous = was + cooking. The short action (the lights went out) uses the past simple."},
 {j:"pilih",t:"Choose the best word to complete the sentence: The wind blew ____ and the trees fell down.",p:["strongly","strong","stronger","strength"],b:0,u:"Blew is a verb, so we need an adverb: strongly."},
 {j:"pilih",t:"Choose the best adjective to complete the sentence: It was a ____ night with thunder and heavy rain.",p:["stormy","stormily","storm","storms"],b:0,u:"Night is a noun, so we need an adjective: stormy."},
 {j:"susun",t:"Put the sentences in order to make a short report.",p:["Last night, a storm hit our town.","I was sleeping when I heard loud thunder.","Then the lights went out.","This morning, everything was quiet again."],b:[0,1,2,3],u:"Start with what happened, then describe the details, and finish with what happened next."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["While she was running, it began to rain.","While she was running it began, to rain.","while she was running, it began to rain","While she was running; It began to rain."],b:0,u:"A sentence begins with a capital letter, and a comma goes after the while part."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the story: I was walking home when I saw dark clouds. ____",p:["I walked quickly, but it started to rain heavily.","I walk quick, but it starts to rain heavy.","I was walk quickly, but it was start to rain heavily.","I walked quick, but it started to rain heavy."],b:0,u:"Use the past simple for the main events, and adverbs (quickly, heavily) to describe the verbs."}}
];

module.exports = {
  id:"e1b3", tingkatan:1, kod:"Unit 3 Wild weather",
  tajuk:"Storm Chasers", subtajuk:"English Form 1 · Unit 3 Wild weather",
  spi:SPI_A2,
  ulasan:ulasanBab("weather, natural disasters and the past continuous", "Wild weather"),
  lampiran:{
   ramalan:jadual(1, "A weather forecast for three cities", "Weather Forecast · Tuesday and Wednesday",
     ["City","Tuesday","Wednesday"],
     [["Alor Setar","Sunny, 35°C","Sunny, 34°C"],["Kota Kinabalu","Cloudy, 30°C","Cloudy, 31°C"],["Kuching","Windy, 29°C","Stormy, 27°C"],["Johor Bahru","Cloudy, 32°C","Rainy, 31°C"]],
     "**Warning:** Strong waves. Please stay away from the beach."),
   berita:teks(1, "A news report about a flood", "School Becomes a Safe Home",
     ["Last Monday, the heavy rain in Bukit Indah did not stop for three days. At about 3 a.m., the river overflowed and the water started to rise. Most villagers were sleeping when the water entered their homes.",
      "Many families walked to SMK Bukit Indah because the school is on high ground. The teachers were waiting at the gate with torches and blankets. Students gave out food and carried small children to safety. Nobody was hurt.",
      "In the morning, the water went down, and the families went home. 'We were scared, but the teachers and students helped us bravely,' said one villager. The school will open again next week."],
     "Practice text: invented news report")
  },
  aras:ARAS
};
