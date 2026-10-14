/* Sumber kandungan — English KSSM Form 2, Unit 7 Journeys
   DSKP Form 2 Textbook scope and sequence: Tema People and Culture, Unit 7.
   Tatabahasa: present perfect (affirmative, negative, questions, short answers). Kosa kata: transport, verbs of movement (1).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, jadual, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Transport Terminal", sk:"Vocabulary · transport and verbs of movement", lampiran:null,
 kadNama:"the Underground", kadEm:"\u{1F687}", kadFakta:"The Underground is the metro train system in London. People also call it the Tube. In Malaysia, similar trains are the LRT and the MRT.",
 bosKadNama:"hot-air balloon", bosKadEm:"\u{1F388}", bosKadFakta:"A hot-air balloon floats in the sky because the air inside is heated. A helicopter and a plane also fly, but they have engines.",
 soalan:[
 {j:"pilih",gbr:"\u{1F6A2}",t:"Which transport travels on the sea and carries many people or goods?",p:["ship","tram","lorry","bicycle"],b:0,u:"A ship is a large boat that travels on the sea."},
 {j:"pilih",gbr:"\u{1F681}",t:"Which type of transport flies and can land on a small roof?",p:["helicopter","ferry boat","coach bus","caravan van"],b:0,u:"A helicopter has rotating blades and can take off and land in a small space."},
 {j:"pilih",gbr:"\u{1F68B}",t:"Which transport runs on rails in the middle of a city street?",p:["tram","big yacht","heavy lorry","motorbike"],b:0,u:"A tram is an electric vehicle that runs on rails through city streets."},
 {j:"pilih",gbr:"\u{1F69A}",t:"Which vehicle carries heavy goods on the road?",p:["lorry","caravan","coach","yacht"],b:0,u:"A lorry (truck) carries heavy goods."},
 {j:"pilih",gbr:"\u{26F5}",t:"A small, expensive boat used for pleasure is a",p:["yacht","ferry","coach","tram"],b:0,u:"A yacht is a boat used for sailing as a hobby, usually by rich people."},
 {j:"pilih",t:"Which verb means 'to go up a mountain'?",p:["climb","crash","carry","cross"],b:0,u:"Climb means to go up something such as a mountain or a tree."},
 {j:"isi",gbr:"\u{1F6EB}",t:"Type the missing word: The plane will ____ at 8.30 a.m. (leave the ground)",b:["take off"],u:"Take off is what a plane does when it leaves the ground. The opposite is land."},
 {j:"pilih",t:"Which pair of verbs are OPPOSITES?",p:["push and pull","sail and fly","carry and cross","arrive and land"],b:0,u:"Push moves something away from you and pull moves it towards you."}],
 bos:{j:"banyak",t:"Choose ALL the vehicles that can travel on water.",p:["ferry","yacht","ship","tram","lorry"],b:[0,1,2],u:"Ferries, yachts and ships travel on water. A tram and a lorry travel on land."}},

{n:2, tempat:"Present Perfect Station", sk:"Grammar · present perfect", lampiran:null,
 kadNama:"have / has + -ed", kadEm:"\u{1F9F3}", kadFakta:"Present perfect = have/has + past participle. It talks about experiences without saying when: I have visited Penang. Irregular: see → seen, be → been, go → gone/been, fly → flown.",
 bosKadNama:"ever / never", bosKadEm:"\u{1F30F}", bosKadFakta:"Have you ever...? asks about life experience. Answer: Yes, I have. / No, I haven't. I have never flown in a plane = I have not done it in my whole life.",
 soalan:[
 {j:"pilih",t:"I ____ lots of monuments so far.",p:["'ve seen","saw","am seeing","seen"],b:0,u:"Life experience: have + past participle. I've seen."},
 {j:"pilih",t:"She ____ visited many interesting places.",p:["has","have","is","did"],b:0,u:"With she, use has + past participle: has visited."},
 {j:"pilih",t:"We ____ read the new novel yet.",p:["haven't","hasn't","didn't","aren't"],b:0,u:"With we, the negative is haven't + past participle."},
 {j:"pilih",t:"____ he ever been on a yacht?",p:["Has","Have","Did he","Does"],b:0,u:"Question with he: Has he ever been...?"},
 {j:"pilih",t:"Which is the past participle of fly?",p:["flown","flied","flew over","flying"],b:0,u:"Fly is irregular: fly - flew - flown."},
 {j:"pilih",t:"Which is the past participle of be?",p:["been","was being","were being","being"],b:0,u:"Be is irregular: be - was/were - been."},
 {j:"isi",t:"Type the missing word: They ____ never flown by helicopter. (have)",b:["have","'ve"],u:"With they, use have + never + past participle."},
 {j:"isi",t:"Type the short answer: Have you been in the USA? No, I ____.",b:["haven't","have not"],u:"A negative short answer: No, I haven't."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["Aisha has travelled by ferry twice.","Aisha have travelled by ferry twice.","Aisha has travel by ferry twice.","Aisha is travelled by ferry twice."],b:0,u:"With Aisha (she), use has + travelled."}},

{n:3, tempat:"Timetable Hall", sk:"Reading 3.1.2 · specific details in a timetable", lampiran:"jadualferi",
 kadNama:"departure", kadEm:"\u{1F6EB}", kadFakta:"departure = leaving. arrival = arriving. A timetable lists departure and arrival times. Example: The ferry departs at 9 a.m. and arrives at 10.30 a.m.",
 bosKadNama:"return ticket", bosKadEm:"\u{1F39F}\u{FE0F}", bosKadFakta:"A return ticket is for going and coming back. A single ticket is for one direction only. A return ticket is usually cheaper than two single tickets.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Where does the ferry go?",p:["From Kuala Perlis to Langkawi","From Penang to Kuala Lumpur","From Kota Kinabalu to Labuan","From Johor to Singapore"],b:0,u:"The timetable says: Kuala Perlis - Langkawi."},
 {j:"pilih",t:"According to Figure 1, what time does the first ferry leave?",p:["7.00 a.m.","8.30 a.m.","10.00 a.m.","12.00 p.m."],b:0,u:"The first row shows the departure at 7.00 a.m."},
 {j:"pilih",t:"Based on Figure 1, how long does the journey take?",p:["One hour","Two hours","Thirty minutes","Three hours"],b:0,u:"7.00 a.m. to 8.00 a.m. is one hour."},
 {j:"pilih",t:"What time does the 12.00 p.m. ferry arrive? (Figure 1)",p:["1.00 p.m.","12.30 p.m.","2.00 p.m.","1.30 p.m."],b:0,u:"The journey takes one hour, so it arrives at 1.00 p.m."},
 {j:"pilih",t:"How much is a single ticket for an adult? (Figure 1)",p:["RM18","RM12","RM30","RM9"],b:0,u:"The table says: Adult single RM18."},
 {j:"pilih",t:"How much does a child's return ticket cost? (Figure 1)",p:["RM20","RM10","RM12","RM36"],b:0,u:"The table says: Child return RM20."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things passengers must do.",p:["arrive 30 minutes early","show a ticket","bring a bicycle","buy a drink"],b:[0,1],u:"The notice says: Arrive 30 minutes before departure and show your ticket."},
 {j:"pilih",t:"Which ticket is cheapest for a child who is travelling both ways? (Figure 1)",p:["A return ticket","Two single tickets","An adult ticket","A group ticket"],b:0,u:"A child's return ticket costs RM20, which is cheaper than two single tickets at RM12 each."}],
 bos:{j:"pilih",t:"Hana wants to arrive in Langkawi before 1.30 p.m. What is the LATEST ferry she can take? (Figure 1)",p:["The 12.00 p.m. ferry","The 2.00 p.m. ferry","The 3.00 p.m. ferry","The 5.00 p.m. ferry"],b:0,u:"The 12.00 p.m. ferry arrives at 1.00 p.m. The 2.00 p.m. ferry arrives at 3.00 p.m., which is too late."}},

{n:4, tempat:"Travel Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"been / gone", kadEm:"\u{1F9ED}", kadFakta:"He has been to Japan = he went there and came back. He has gone to Japan = he is still there. Listen for been and gone!",
 bosKadNama:"ever", bosKadEm:"\u{2753}", bosKadFakta:"Have you ever...? asks about experiences. Listen for the short answers: Yes, I have. / No, I haven't.",
 soalan:[
 {j:"pilih",t:"Listen. Which country has Dina visited?",dengar:"I've visited Japan twice, but I've never been to Korea. I'd like to go next year.",p:["Japan","Korea","China","India"],b:0,u:"Dina says: I've visited Japan twice."},
 {j:"pilih",t:"Listen. How many times has Dina been to Japan?",dengar:"I've visited Japan twice, but I've never been to Korea. I'd like to go next year.",p:["Twice","Once","Three times","Never"],b:0,u:"Dina says: I've visited Japan twice."},
 {j:"pilih",t:"Listen. How did the family travel to Langkawi?",dengar:"We travelled to Langkawi by ferry. It took one hour, and the sea was calm. We've never taken a plane to the island.",p:["By ferry","By plane","By coach bus","By bicycle"],b:0,u:"The speaker says: We travelled to Langkawi by ferry."},
 {j:"pilih",t:"Listen. What has the family never done?",dengar:"We travelled to Langkawi by ferry. It took one hour, and the sea was calm. We've never taken a plane to the island.",p:["Taken a plane there","Taken a ferry ride","Gone to Langkawi","Seen the blue sea"],b:0,u:"The speaker says: We've never taken a plane to the island."},
 {j:"pilih",t:"Listen to the conversation. Where is Amir?",dengar:"Is Amir at home? No, he's gone to the airport. He's picking up his cousin from the plane.",p:["At the airport","At home","In the library","At school"],b:0,u:"The speaker says: he's gone to the airport. Gone means he is still there."},
 {j:"pilih",t:"Listen. What has Faiz seen?",dengar:"Have you seen the new film? Yes, I have. I've seen it twice, and I'd like to see it again.",p:["The new film","A football match","A famous museum","A tall mountain"],b:0,u:"The speaker says: I've seen it twice (the new film)."},
 {j:"pilih",t:"Listen. What does the speaker say about trams?",dengar:"I've been on a tram in Melbourne. It was slow, but it was fun to see the city. I haven't been on a yacht yet.",p:["She has been on one.","She has never seen one.","She owns one.","She hates them."],b:0,u:"The speaker says: I've been on a tram in Melbourne."},
 {j:"isi",t:"Listen and type the missing word: She has ____ to many countries.",dengar:"She has travelled to many countries.",b:["travelled","traveled"],u:"The speaker says travelled. Present perfect: has + travelled."}],
 bos:{j:"pilih",t:"Listen. Why hasn't Rita travelled by helicopter?",dengar:"I've travelled by train, bus and ship, but I've never flown by helicopter. It's too expensive, and I'm a little afraid of heights.",p:["It is costly and scary.","She has no passport at all.","She doesn't like any trains.","She lives on a small island."],b:0,u:"The speaker says: It's too expensive, and I'm a little afraid of heights."}},

{n:5, tempat:"Travel Journal", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"jurnal",
 kadNama:"unforgettable", kadEm:"\u{1F31F}", kadFakta:"unforgettable = so good or special that you will always remember it. Example: Our trip to the mountain was unforgettable.",
 bosKadNama:"journal", bosKadEm:"\u{1F4D3}", bosKadFakta:"A travel journal is a personal record of a trip: where you went, what you saw and how you felt.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Zain describes a special trip.","Zain wants to buy a new car.","Zain forgot his school homework.","Zain is moving to Canada soon."],b:0,u:"The text describes Zain's trip and why he will never forget it."},
 {j:"pilih",t:"According to Text 1, how did Zain travel from Kuala Lumpur to Kota Bharu?",p:["By train","By ferry boat","By helicopter","By small yacht"],b:0,u:"The text says: We took the night train."},
 {j:"pilih",t:"What has Zain never done before this trip? (Text 1)",p:["Travelled by night train","Visited a big museum","Eaten nasi kerabu before","Seen a beautiful beach"],b:0,u:"The text says: I had never travelled by train at night."},
 {j:"pilih",t:"The word unforgettable in Text 1 means",p:["impossible to forget","very easy to forget","not very important","far too boring"],b:0,u:"Unforgettable means so special that you will always remember it."},
 {j:"pilih",t:"What did Zain see from the train window? (Text 1)",p:["Villages and rice fields","A big ship at sea","A hot, dry desert","A snowy mountain top"],b:0,u:"The text says: I saw villages and rice fields in the moonlight."},
 {j:"banyak",t:"Based on Text 1, choose TWO things Zain has done since he arrived.",p:["tried local food","visited a market","flown a kite","climbed a mountain"],b:[0,1],u:"The text says: I have tried local food and visited the Siti Khadijah Market."},
 {j:"pilih",t:"What can we infer about Zain? (Text 1)",p:["He enjoys trying new things.","He is afraid of trains.","He dislikes travelling.","He gets bored easily."],b:0,u:"He enjoyed a new experience and tried local food, so he enjoys trying new things."},
 {j:"susun",t:"Put Zain's journey in the correct order. (Text 1)",p:["He took the night train from Kuala Lumpur.","He watched the countryside in the moonlight.","He arrived in Kota Bharu in the morning.","He tried local food at the market."],b:[0,1,2,3],u:"The text follows the order: train, countryside, arrival, food."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["My Night Train Adventure","A Day at School","The Best Cake Recipe","How to Fix a Bicycle"],b:0,u:"The whole text is about Zain's adventure on the night train."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3 · Grammar · write about experiences", lampiran:null,
 kadNama:"been or gone", kadEm:"\u{270D}\u{FE0F}", kadFakta:"Use been when someone has returned: I've been to Penang. Use gone when the person is still there: She's gone to Penang. Do not mix them!",
 bosKadNama:"experience paragraph", bosKadEm:"\u{1F4DD}", bosKadFakta:"A good paragraph about experiences: say what you have done, give one detail with the past simple, and say how you felt.",
 soalan:[
 {j:"isi",t:"Type the correct form of the verb: I have never ____ (fly) in a hot-air balloon.",b:["flown"],u:"Present perfect: have + past participle. The past participle of fly is flown."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: She have visited many places.",b:["has"],u:"With she, use has + past participle."},
 {j:"susun",t:"Put the words in order to make a correct question.",p:["Have","you","ever","been","on","a","yacht?"],b:[0,1,2,3,4,5,6],u:"Have + subject + ever + past participle? Have you ever been on a yacht?"},
 {j:"pilih",t:"Which sentence uses the present perfect correctly?",p:["I've visited the museum three times.","I have visit the museum three times.","I has visited the museum three times.","I've visiting the museum three times."],b:0,u:"I + have + visited."},
 {j:"pilih",t:"Which sentence is correct? Daniel is not at home now. He is in London.",p:["Daniel has gone to London.","Daniel has been to London.","Daniel is gone London.","Daniel had been to London."],b:0,u:"He is still in London, so we use has gone."},
 {j:"pilih",t:"Which sentence is correct? Daniel visited London last year and he is at home now.",p:["Daniel has been to London.","Daniel has gone to London.","Daniel is been to London.","Daniel went been to London."],b:0,u:"He returned home, so we use has been."},
 {j:"susun",t:"Put the sentences in order to make a short paragraph.",p:["I have travelled to many places.","Last year, I went to Sabah by plane.","I saw Mount Kinabalu from the window.","It was an amazing experience."],b:[0,1,2,3],u:"Start with a general statement (present perfect), then give details (past simple), then say how you felt."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["Have you ever been to Penang?","have you ever been to penang","Have you ever, been to Penang.","Have you ever been to Penang!"],b:0,u:"A question starts with a capital letter and ends with a question mark."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: I have never been abroad. ____",p:["But I would like to visit Japan one day.","But I would liking visit Japan one day.","But I am like to visiting Japan one day.","But I will liked to visit Japan one day."],b:0,u:"Would like + to + base verb is correct: I would like to visit."}}
];

module.exports = {
  id:"e2b2", tingkatan:2, kod:"Unit 7 Journeys",
  tajuk:"Journey Makers", subtajuk:"English Form 2 · Unit 7 Journeys",
  spi:SPI_A2,
  ulasan:ulasanBab("transport, journeys and the present perfect", "Journeys"),
  lampiran:{
   jadualferi:jadual(1, "A ferry timetable and ticket prices", "Ferry Timetable · Kuala Perlis - Langkawi",
     ["Departure","Arrival"],
     [["7.00 a.m.","8.00 a.m."],["9.00 a.m.","10.00 a.m."],["12.00 p.m.","1.00 p.m."],["2.00 p.m.","3.00 p.m."],["5.00 p.m.","6.00 p.m."]],
     "**Tickets:** Adult single RM18 · Child single RM12 · Child return RM20. Arrive 30 minutes before departure and show your ticket."),
   jurnal:teks(1, "An entry from a travel journal", "My Night Train Adventure",
     ["Last night, I took the night train from Kuala Lumpur to Kota Bharu with my uncle. I had never travelled by train at night, so I was very excited. I couldn't sleep, so I watched the countryside through the window. I saw villages and rice fields in the moonlight.",
      "We arrived in Kota Bharu in the morning. Since I arrived, I have tried local food and visited the Siti Khadijah Market. I've also taken many photos.",
      "This journey has been unforgettable. I've learnt that new experiences can be a lot of fun."],
     "Practice text: invented travel journal")
  },
  aras:ARAS
};
