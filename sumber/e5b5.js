/* Sumber kandungan — English KSSM Form 5, Unit 5 Discover Malaysia
   Tatabahasa: defining and non-defining relative clauses (who, which, that, whose, where), participle clauses
   (-ing and -ed), reduced relative clauses. Tema People and Culture / Tourism.
   DSKP Tingkatan 5 belum dijumpai; bab ini mengikut jujukan CEFR B1 dan perlu disahkan guru.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { poster, jadual, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Tourism Plaza", sk:"Vocabulary · tourism, landmarks and heritage", lampiran:null,
 kadNama:"heritage site", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"A heritage site is a place that is protected because of its historical or cultural value. George Town and Melaka are UNESCO World Heritage Sites.",
 bosKadNama:"attraction", bosKadEm:"\u{1F3A1}", bosKadFakta:"A tourist attraction is a place that people visit for fun or interest, such as a beach, a museum or a waterfall.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3DB}\u{FE0F}",t:"A place that is protected because of its historical value is a",p:["heritage site","shopping centre","car park","petrol station"],b:0,u:"A heritage site has important history or culture."},
 {j:"pilih",gbr:"\u{1F9F3}",t:"A person who travels for pleasure is a",p:["tourist","resident","employee","patient"],b:0,u:"A tourist visits places for pleasure."},
 {j:"pilih",gbr:"\u{1F5FA}\u{FE0F}",t:"A person who shows visitors around a place is a",p:["guide","chef","clerk","driver"],b:0,u:"A guide leads visitors and explains what they see."},
 {j:"pilih",t:"Which word means 'typical of a place and showing its special features'?",p:["authentic","artificial","ordinary","modern"],b:0,u:"Authentic means real and genuine."},
 {j:"pilih",t:"A beautiful place that is not yet spoiled by tourists is",p:["unspoilt","crowded","polluted","noisy"],b:0,u:"Unspoilt means in its natural, original condition."},
 {j:"pilih",t:"A holiday plan that lists the places to visit and times is an",p:["itinerary","invoice","inventory","invitation"],b:0,u:"An itinerary is a detailed plan of a journey."},
 {j:"isi",t:"Type the missing word: Visitors are advised to respect local ____, such as taking off shoes before entering a home. (customs)",b:["customs","traditions","culture"],u:"Customs are traditional ways of behaving."},
 {j:"pilih",t:"Which word describes a place that many people want to visit?",p:["popular","remote","abandoned","deserted"],b:0,u:"Popular means liked by many people."}],
 bos:{j:"banyak",t:"Choose ALL the things that can be tourist attractions.",p:["a waterfall","a museum","a night market","an exam hall","a factory warehouse"],b:[0,1,2],u:"A waterfall, a museum and a night market attract visitors. An exam hall and a warehouse are not tourist attractions."}},

{n:2, tempat:"Clause Cove", sk:"Grammar · relative clauses and participle clauses", lampiran:null,
 kadNama:"defining and non-defining", kadEm:"\u{1F517}", kadFakta:"Defining (no commas, needed): The girl who lives next door is a guide. Non-defining (commas, extra information): Penang, which is famous for its food, is an island. In non-defining clauses, do not use that.",
 bosKadNama:"participle clauses", bosKadEm:"\u{2702}\u{FE0F}", bosKadFakta:"-ing clause (active): The man standing at the gate is our guide. (= who is standing). -ed clause (passive): The temple built in 1800 is very famous. (= which was built). Whose shows possession: the man whose bag was stolen.",
 soalan:[
 {j:"pilih",t:"The man ____ showed us around the museum was very friendly.",p:["who","which","whose","where"],b:0,u:"Who is used for people in a defining relative clause."},
 {j:"pilih",t:"This is the village ____ my grandparents were born.",p:["where","who","which","whose"],b:0,u:"Where refers to a place."},
 {j:"pilih",t:"George Town, ____ is a World Heritage Site, attracts millions of visitors.",p:["which","that","who","whose"],b:0,u:"In a non-defining clause, we use which for things (not that)."},
 {j:"pilih",t:"The tourist ____ camera was stolen reported it to the police.",p:["whose","who","which","that's"],b:0,u:"Whose shows possession: the tourist whose camera."},
 {j:"pilih",t:"The woman ____ at the gate is our tour guide.",p:["standing","stand","stands","is stand"],b:0,u:"A reduced relative clause: who is standing → standing."},
 {j:"pilih",t:"The temple ____ in the 19th century is still in use.",p:["built","building","builds","is built"],b:0,u:"A reduced passive clause: which was built → built."},
 {j:"isi",t:"Type the missing word: Kuala Lumpur, ____ is the capital of Malaysia, has many tall buildings.",b:["which"],u:"A non-defining clause for a thing uses which."},
 {j:"isi",t:"Type the missing word: The book ____ I bought yesterday is about Sabah. (that or which)",b:["that","which"],u:"Both that and which can introduce a defining clause for things."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["The hotel, which stands near the beach, has a lovely garden.","The hotel, that stands near the beach, has a lovely garden.","The hotel which, stands near the beach, has a lovely garden.","The hotel, who stands near the beach, has a lovely garden."],b:0,u:"Non-defining clause: commas and which."}},

{n:3, tempat:"Travel Desk", sk:"Reading 3.1.2 · specific details in a tour poster", lampiran:"posterlawatan",
 kadNama:"package", kadEm:"\u{1F4E6}", kadFakta:"A holiday package is a trip that includes transport, accommodation and sometimes meals. It is often cheaper than booking each part separately.",
 bosKadNama:"included / excluded", bosKadEm:"\u{2705}", bosKadFakta:"Included means that it is part of the price. Excluded means that it is not part of the price and you must pay extra.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Where is the tour?",p:["Langkawi","Penang","Johor","Kuching"],b:0,u:"The poster says: 3-Day Langkawi Adventure."},
 {j:"pilih",t:"According to Figure 1, how many days is the tour?",p:["Three","Two","Five","Seven"],b:0,u:"The poster says: 3-Day Langkawi Adventure."},
 {j:"pilih",t:"What is the price per person? (Figure 1)",p:["RM650","RM65","RM6,500","RM1,650"],b:0,u:"The poster says: RM650 per person."},
 {j:"pilih",t:"Which of the following is included in the price? (Figure 1)",p:["Hotel and breakfast","Souvenirs and gifts","Lunch every day","Flight tickets abroad"],b:0,u:"The poster says: Price includes hotel and breakfast."},
 {j:"pilih",t:"What is NOT included? (Figure 1)",p:["Flight tickets","The hotel room","Breakfast","The guide"],b:0,u:"The poster says: Flight tickets are not included."},
 {j:"banyak",t:"Based on Figure 1, choose TWO activities in the tour.",p:["island hopping","a cable car visit","a mountain climbing course","a desert safari holiday"],b:[0,1],u:"The itinerary includes island hopping and the cable car."},
 {j:"pilih",t:"Which sentence describes the guide in Figure 1?",p:["She is a local who knows the island.","She is a pilot who flies helicopters daily.","She is a chef who cooks all the meals.","She is a visitor who comes from abroad."],b:0,u:"The poster says: Your guide, a local who knows the island well."},
 {j:"pilih",t:"What can we infer about the tour in Figure 1?",p:["It suits people who enjoy nature.","It is only for business people here.","It is mainly a shopping tour.","It is a night-time tour only."],b:0,u:"Island hopping and the cable car suggest that it suits nature lovers."}],
 bos:{j:"pilih",t:"A family of four wants to join the tour. How much will they pay for the tour alone? (Figure 1)",p:["RM2,600","RM650","RM1,300","RM3,200"],b:0,u:"RM650 x 4 = RM2,600."}},

{n:4, tempat:"Guide Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"extra information", kadEm:"\u{1F3A7}", kadFakta:"Listen for extra information in the middle of a sentence: Penang, which is famous for its food, ... The extra information is spoken with a pause, like commas in writing.",
 bosKadNama:"who, which, where, whose", bosKadEm:"\u{1F50E}", bosKadFakta:"The relative pronoun tells you what the clause describes: who → a person, which → a thing, where → a place, whose → something that belongs to a person.",
 soalan:[
 {j:"pilih",t:"Listen. Who is Mr Rahman?",dengar:"Mr Rahman, who has been a guide for twenty years, will show us around. He is the man who grew up in this village and who knows every story about it.",p:["The tour guide","The bus driver","The village head","A shop owner"],b:0,u:"The speaker says: Mr Rahman, who has been a guide for twenty years, will show us around."},
 {j:"pilih",t:"Listen. How long has he been a guide?",dengar:"Mr Rahman, who has been a guide for twenty years, will show us around. He is the man who grew up in this village and who knows every story about it.",p:["For twenty years","For two years","For five months","Since last week"],b:0,u:"The speaker says: who has been a guide for twenty years."},
 {j:"pilih",t:"Listen. What is the temple famous for?",dengar:"The temple that you can see on the hill, which was built in 1850, is famous for its beautiful gate. Visitors whose shoes are dirty are asked to clean them before they enter.",p:["Its beautiful gate","Its big garden","Its cheap food","Its long river"],b:0,u:"The speaker says: famous for its beautiful gate."},
 {j:"pilih",t:"Listen. Who must clean their shoes?",dengar:"The temple that you can see on the hill, which was built in 1850, is famous for its beautiful gate. Visitors whose shoes are dirty are asked to clean them before they enter.",p:["Visitors with dirty shoes","All of the guides","Only small children","Nobody at all"],b:0,u:"The speaker says: Visitors whose shoes are dirty are asked to clean them."},
 {j:"pilih",t:"Listen. Where will they have lunch?",dengar:"We will have lunch at a restaurant where you can eat traditional food. The restaurant, which is owned by a local family, is next to the beach.",p:["At a beach restaurant","At the hotel in town","At a busy market","On the tour bus"],b:0,u:"The speaker says: a restaurant ... next to the beach."},
 {j:"pilih",t:"Listen. Who owns the restaurant?",dengar:"We will have lunch at a restaurant where you can eat traditional food. The restaurant, which is owned by a local family, is next to the beach.",p:["A local family","A hotel chain","The government","A foreign company"],b:0,u:"The speaker says: owned by a local family."},
 {j:"pilih",t:"Listen. What is the main idea?",dengar:"The island, which attracts thousands of visitors every year, has many beautiful beaches. Tourists who want to see the real local life can visit the market that opens every morning in the old town.",p:["It has beaches and a morning market.","The island is empty of people.","The island has no tourists at all.","The island has only one beach."],b:0,u:"The speaker says that the island has many beautiful beaches and a morning market."},
 {j:"isi",t:"Listen and type the missing word: The man ____ lives next door is a guide.",dengar:"The man who lives next door is a guide.",b:["who","that"],u:"The speaker says who. It refers to a person."}],
 bos:{j:"pilih",t:"Listen to the talk. What is the speaker's main message?",dengar:"Travellers who respect local culture, which is what makes each place special, are usually welcomed warmly. Visitors whose behaviour is polite will have richer experiences, and communities that benefit from tourism will protect their heritage.",p:["Polite tourists enjoy more.","Tourists should avoid all villages.","Culture is not important to anyone.","Only rich people can travel abroad."],b:0,u:"The speaker says that visitors whose behaviour is polite will have richer experiences."}},

{n:5, tempat:"Travel Writers' Cafe", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"blogpelancong",
 kadNama:"atmosphere", kadEm:"\u{1F3A8}", kadFakta:"The atmosphere of a place is the feeling that it has: peaceful, lively, romantic. Travel writers describe the atmosphere so that readers can imagine it.",
 bosKadNama:"recommend", bosKadEm:"\u{1F44D}", bosKadFakta:"To recommend is to say that something is good and that others should try it. Travel blogs often recommend places, food and activities.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["The writer recommends an old town.","The writer complains about a hotel.","The writer explains how to cook rice.","The writer announces a competition."],b:0,u:"The blog recommends a visit to the old town of Melaka."},
 {j:"pilih",t:"According to Text 1, what did the writer enjoy most? (Text 1)",p:["The old street atmosphere","The big shopping malls","The busy airport hall","The fast food shops"],b:0,u:"The text says: What I enjoyed most was the atmosphere of the old streets."},
 {j:"pilih",t:"What is special about the street where the writer stayed? (Text 1)",p:["It has colourful shophouses.","It has no people at all.","It is under the sea water.","It is very new and empty."],b:0,u:"The text says that the street is filled with colourful shophouses."},
 {j:"pilih",t:"The word atmosphere in Text 1 means",p:["the feeling of a place","the weather forecast","a large building","a type of food"],b:0,u:"The atmosphere of a place is the feeling that it has."},
 {j:"pilih",t:"What does the writer recommend doing in the evening? (Text 1)",p:["Walking by the river","Staying inside all night","Driving fast on roads","Playing cards at home"],b:0,u:"The text recommends walking along the river when the lights are turned on."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that the writer describes.",p:["the night market food","the river cruise","a winter snow festival","a big space museum"],b:[0,1],u:"The text describes the food at the night market and the river cruise."},
 {j:"pilih",t:"What can we infer about the writer? (Text 1)",p:["She loves exploring new places.","She dislikes travelling.","She is afraid of crowds.","She wants to move abroad."],b:0,u:"She gives enthusiastic details, so she loves exploring new places."},
 {j:"pilih",t:"Which sentence from Text 1 contains a non-defining relative clause?",p:["I visited Melaka, which is a World Heritage Site.","I stayed on a street that was filled with shophouses.","The food at the night market was wonderful.","I recommend walking along the river in the evening."],b:0,u:"Which is a World Heritage Site is extra information between commas."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["A Weekend in the Old Town","A Day in the Large Office","The Price of Petrol Today","How to Pass an Exam Easily"],b:0,u:"The text describes a weekend in the old town."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · write a travel description with relative clauses", lampiran:null,
 kadNama:"combine sentences", kadEm:"\u{1F9E9}", kadFakta:"Join two sentences with a relative pronoun: Langkawi is an island. It is famous for its beaches. → Langkawi, which is famous for its beaches, is an island. Use commas for extra information only.",
 bosKadNama:"vary your sentences", bosKadEm:"\u{2728}", bosKadFakta:"Good descriptions mix short and long sentences. Use relative clauses and participle clauses to add detail: a village surrounded by mountains; a market selling local fruit.",
 soalan:[
 {j:"isi",t:"Type the missing word: The guide ____ car broke down was very upset.",b:["whose"],u:"Whose shows possession."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: Penang, that is famous for its food, is on the west coast.",b:["which"],u:"Non-defining clauses use which, not that."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["The","museum,","which","opened","last","year,","is","popular."],b:[0,1,2,3,4,5,6,7],u:"Non-defining clause between commas."},
 {j:"pilih",t:"Which sentence combines 'I met a man. He speaks five languages.' correctly?",p:["I met a man who speaks five languages.","I met a man, who speaks five languages.","I met a man which speaks five languages.","I met a man whose speaks five languages."],b:0,u:"Who for a person in a defining clause."},
 {j:"pilih",t:"Which sentence uses a participle clause correctly?",p:["The tourists visiting the temple must take off their shoes.","The tourists visit the temple must take off their shoes.","The tourists visited are the temple must take off their shoes.","The tourists to visiting the temple must take off their shoes."],b:0,u:"-ing participle clause: the tourists visiting the temple (= who are visiting)."},
 {j:"pilih",t:"Which sentence is correct?",p:["The photos taken by the guide were beautiful.","The photos taking by the guide were beautiful.","The photos take by the guide were beautiful.","The photos were taken by the guide were beautiful."],b:0,u:"-ed participle clause: photos taken by the guide."},
 {j:"susun",t:"Put the sentences in order to make a short travel description.",p:["Langkawi is an island in the north of Malaysia.","The beaches, which are covered in white sand, attract many visitors.","Tourists who love adventure can try island hopping.","I highly recommend a visit."],b:[0,1,2,3],u:"Introduce the place, describe it, say who might enjoy it and recommend."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["Sarawak, which is on Borneo, is the largest state.","Sarawak which, is on Borneo is the largest state.","Sarawak, which is on Borneo is the largest state.","Sarawak which is on Borneo, is the largest state."],b:0,u:"Commas go before and after a non-defining clause."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the description: We stayed in a small village. ____",p:["The villagers, who were very friendly, invited us to a meal prepared by their grandmother.","The villagers, that were very friendly, invited us to a meal preparing by their grandmother.","The villagers who, were very friendly invited us to a meal prepare by their grandmother.","The villagers, whose were very friendly, invited us to a meal was prepared by their grandmother."],b:0,u:"Who in a non-defining clause, and a participle clause: prepared by their grandmother."}}
];

module.exports = {
  id:"e5b5", tingkatan:5, kod:"Unit 5 Discover Malaysia",
  tajuk:"Discover Malaysia", subtajuk:"English Form 5 · Unit 5 Discover Malaysia",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("tourism, relative clauses and participle clauses", "Discover Malaysia"),
  lampiran:{
   posterlawatan:poster(1, "A poster for a holiday tour", {ikon:"\u{1F3DD}\u{FE0F}", judul:"3-DAY LANGKAWI ADVENTURE", sub:"RM650 per person. Join us for island hopping and the cable car!",
     butir:[
      ["\u{1F3E8}","Price includes hotel and breakfast."],
      ["\u{26F5}","Day 1: island-hopping trip"],
      ["\u{1F6A0}","Day 2: visit to the cable car"],
      ["\u{1F469}\u{200D}\u{1F3EB}","Your guide: a local who knows the island well."],
      ["\u{2708}\u{FE0F}","Flight tickets are not included."]]}),
   blogpelancong:teks(1, "A travel blog", "A Weekend in the Old Town",
     ["Last weekend, I visited Melaka, which is a World Heritage Site and full of history. I stayed on a street that was filled with colourful shophouses. What I enjoyed most was the atmosphere of the old streets.",
      "The food at the night market, selling everything from satay to cendol, was wonderful. In the evening, I recommend walking along the river when the lights are turned on, or taking a river cruise.",
      "If you love exploring new places, this is a trip that you will never forget."],
     "Practice text: invented travel blog")
  },
  aras:ARAS
};
