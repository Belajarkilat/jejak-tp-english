/* Sumber kandungan — English KSSM Form 3, Unit 1 Adventure Trails
   DSKP Form 3 Grammar: present perfect simple (with just, already and yet), present perfect simple (with for and since).
   Tema People and Culture. Kosa kata: travel and adventure (B1).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, teks, notis, SPI_B1_T3, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Expedition Base", sk:"Vocabulary · travel and adventure", lampiran:null,
 kadNama:"itinerary", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"An itinerary is a detailed plan of a journey: where you will go, when and how. Example: Our itinerary includes a jungle trek on Day 2.",
 bosKadNama:"summit", bosKadEm:"\u{26F0}\u{FE0F}", bosKadFakta:"The summit is the highest point of a mountain. A summit climb needs fitness, planning and a good guide.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3D5}\u{FE0F}",t:"We put up our tents at the ____ near the river and cooked dinner on a fire.",p:["campsite","stadium","terminal","museum"],b:0,u:"A campsite is a place where people stay in tents."},
 {j:"pilih",gbr:"\u{1F392}",t:"For a long trek, you should carry your things in a strong ____.",p:["backpack","passport","suitcase","souvenir"],b:0,u:"A backpack is a bag you carry on your back. A suitcase is better for roads and airports."},
 {j:"pilih",gbr:"\u{1F6C2}",t:"You must show your ____ at the airport when you travel to another country.",p:["passport","itinerary","backpack","souvenir"],b:0,u:"A passport is an official document that proves who you are when you travel abroad."},
 {j:"pilih",t:"Which word means 'the place where a journey ends'?",p:["destination","expedition","horizon","souvenir"],b:0,u:"A destination is the place that you are travelling to."},
 {j:"pilih",t:"A long, organised journey, usually to explore a difficult place, is an",p:["expedition","excursion","itinerary","accommodation"],b:0,u:"An expedition is an organised journey for a special purpose, such as exploring."},
 {j:"pilih",t:"We bought a small wooden mask as a ____ of our trip to Sarawak.",p:["souvenir","passport","luggage","guide"],b:0,u:"A souvenir is something you keep or buy to remember a place."},
 {j:"isi",t:"Type the missing word: The ____ of Mount Kinabalu is 4,095 metres above sea level. (the highest point)",b:["summit","peak","top"],u:"The summit (peak) is the highest point of a mountain."},
 {j:"pilih",t:"Which word describes a hotel, hostel or tent where you stay on a trip?",p:["accommodation","transportation","destination","navigation"],b:0,u:"Accommodation is a place to stay."}],
 bos:{j:"banyak",t:"Choose ALL the things that you would need for a jungle trek.",p:["a map","strong boots","water","a bathing suit","a suitcase with wheels"],b:[0,1,2],u:"A map, strong boots and water are essential for a trek. A bathing suit and a suitcase with wheels are not."}},

{n:2, tempat:"Present Perfect Pass", sk:"Grammar · present perfect with just, already, yet; for and since", lampiran:null,
 kadNama:"just / already / yet", kadEm:"\u{23F1}\u{FE0F}", kadFakta:"just = a very short time ago (I have just arrived). already = earlier than expected, in positive sentences (She has already left). yet = until now, in questions and negatives (Have you finished yet? I haven't finished yet).",
 bosKadNama:"for or since?", bosKadEm:"\u{1F4C5}", bosKadFakta:"for + a period (for three hours). since + a starting point (since 8 a.m., since I was ten). Both go with the present perfect for something that started in the past and continues now.",
 soalan:[
 {j:"pilih",t:"We've ____ arrived at the base camp. We're exhausted!",p:["just","yet","for","since"],b:0,u:"Just shows a very short time ago: We've just arrived."},
 {j:"pilih",t:"Don't worry about the tickets. I've ____ bought them.",p:["already","yet","ever","since"],b:0,u:"Already shows that something happened earlier than expected, in a positive sentence."},
 {j:"pilih",t:"Have you packed your bag ____?",p:["yet","ever","just","since"],b:0,u:"Yet is used in questions to ask if something has happened until now."},
 {j:"pilih",t:"I haven't finished my homework ____, so I can't go out.",p:["yet","already","just","for"],b:0,u:"Yet is used in negative sentences: not until now."},
 {j:"pilih",t:"Our guide has worked in the mountains ____ twenty years.",p:["for","since","from","during"],b:0,u:"Twenty years is a period of time, so we use for."},
 {j:"pilih",t:"They have been in the jungle ____ Monday morning.",p:["since","for","ago","until"],b:0,u:"Monday morning is a starting point, so we use since."},
 {j:"isi",t:"Type the correct form of the verb: The bus has just ____ (leave). We missed it!",b:["left"],u:"Present perfect: has + past participle. The past participle of leave is left."},
 {j:"isi",t:"Type the missing word: How long have you known your guide? I have known him ____ I was twelve.",b:["since"],u:"I was twelve is a starting point, so we use since."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["She has already climbed the hill, but she hasn't eaten yet.","She already has climbed the hill, but she hasn't eaten already.","She has climbed already the hill, but she doesn't eat yet.","She has already climbing the hill, but she hasn't ate yet."],b:0,u:"Already goes between has and the past participle in a positive sentence, and yet goes at the end of a negative sentence."}},

{n:3, tempat:"Itinerary Office", sk:"Reading 3.1.2 · specific details in an itinerary", lampiran:"jadualperkhemahan",
 kadNama:"depart", kadEm:"\u{1F68C}", kadFakta:"depart = leave (bertolak). arrive = reach a place. Example: The coach departs at 6.30 a.m. and arrives at 11.00 a.m.",
 bosKadNama:"optional", bosKadEm:"\u{1F500}", bosKadFakta:"An optional activity is something you can choose to do or not to do. A compulsory activity is something you must do.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What time does the coach leave the school on Day 1?",p:["6.30 a.m.","7.30 a.m.","8.30 a.m.","5.30 a.m."],b:0,u:"The itinerary says: Day 1, 6.30 a.m. Depart from school."},
 {j:"pilih",t:"According to Figure 1, where will the pupils spend the first night?",p:["At Lata Berkoh campsite","At a hotel in Kuala Lipis","At the school hall","At Kuala Tahan town"],b:0,u:"The table says: Day 1: Overnight at Lata Berkoh campsite."},
 {j:"pilih",t:"Based on Figure 1, what is the main activity on Day 2?",p:["A jungle trek","A river cruise","A cooking class","A long bus journey"],b:0,u:"The table says: Day 2: Jungle trek to the waterfall."},
 {j:"pilih",t:"Which activity in Figure 1 is optional?",p:["The night walk","The jungle trek","The coach journey","The campfire dinner"],b:0,u:"The note says: The night walk on Day 2 is optional."},
 {j:"pilih",t:"By which time must the pupils be back at the campsite on Day 2? (Figure 1)",p:["By 5.00 p.m.","By 3.00 p.m.","By 7.00 p.m.","By 9.00 p.m."],b:0,u:"The table says: Return to the campsite by 5.00 p.m."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that the pupils have to bring.",p:["a raincoat","a water bottle","a laptop","a tent"],b:[0,1],u:"The note says: Bring a raincoat and a water bottle. Tents are provided by the organisers."},
 {j:"pilih",t:"How many days does the trip last? (Figure 1)",p:["Three days","Two days","Four days","One week"],b:0,u:"The itinerary lists Day 1, Day 2 and Day 3."},
 {j:"pilih",t:"What can we infer about the trip in Figure 1?",p:["It needs good physical fitness.","It is a shopping trip.","It is only for teachers.","It takes place in winter."],b:0,u:"There is a jungle trek, and the pupils sleep in a campsite, so the trip needs good fitness."}],
 bos:{j:"pilih",t:"Alya hasn't decided yet whether to join the night walk. What should she remember, according to Figure 1?",p:["It is optional, but she must tell her teacher by 3.00 p.m.","It is compulsory for every pupil on the second day.","It starts at 6.30 a.m. when the coach leaves school.","It costs RM50 extra for every pupil who joins."],b:0,u:"The note says: The night walk is optional. Tell your teacher before 3.00 p.m. on Day 2 if you want to join."}},

{n:4, tempat:"Trail Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"already / yet", kadEm:"\u{1F3A7}", kadFakta:"When you listen, notice just, already and yet: They tell you what has happened and what has not happened until now.",
 bosKadNama:"for / since", bosKadEm:"\u{23F3}", bosKadFakta:"For + a period and since + a starting point both answer How long? Listen for the number or the date that follows.",
 soalan:[
 {j:"pilih",t:"Listen. What has the group just done?",dengar:"We've just reached the top of the hill. The view is fantastic, but we haven't had lunch yet, so we're all very hungry.",p:["Reached the top","Eaten their lunch","Left the campsite","Lost the way back"],b:0,u:"The speaker says: We've just reached the top of the hill."},
 {j:"pilih",t:"Listen. What hasn't the group done yet?",dengar:"We've just reached the top of the hill. The view is fantastic, but we haven't had lunch yet, so we're all very hungry.",p:["Had lunch","Taken photos","Climbed the hill","Looked at the view"],b:0,u:"The speaker says: we haven't had lunch yet."},
 {j:"pilih",t:"Listen. How long has Rizal been a mountain guide?",dengar:"I've been a mountain guide for fifteen years. I started in 2010, and I've already climbed Mount Kinabalu more than a hundred times.",p:["For fifteen years","Since fifteen years","For two years","Since last year"],b:0,u:"The speaker says: I've been a mountain guide for fifteen years."},
 {j:"pilih",t:"Listen. What has Rizal already done?",dengar:"I've been a mountain guide for fifteen years. I started in 2010, and I've already climbed Mount Kinabalu more than a hundred times.",p:["Climbed Kinabalu often","Retired from guiding for good","Written a travel book about it","Moved abroad to work"],b:0,u:"The speaker says: I've already climbed Mount Kinabalu more than a hundred times."},
 {j:"pilih",t:"Listen. Why is Sara worried?",dengar:"Have you booked the bus yet? No, I haven't. The tickets for Saturday have already sold out, so we'll have to travel on Sunday.",p:["Saturday tickets have sold out.","She has lost her passport.","The trip has been cancelled.","The bus has broken down."],b:0,u:"The speaker says: The tickets for Saturday have already sold out."},
 {j:"pilih",t:"Listen. When will they travel?",dengar:"Have you booked the bus yet? No, I haven't. The tickets for Saturday have already sold out, so we'll have to travel on Sunday.",p:["On Sunday","On Saturday","On Friday","On Monday"],b:0,u:"The speaker says: we'll have to travel on Sunday."},
 {j:"pilih",t:"Listen to the announcement. What must the passengers do now?",dengar:"Good morning, passengers. The train to Ipoh has just arrived at Platform 3. Please show your tickets to the conductor, and do not leave your luggage unattended.",p:["Show their tickets","Buy new tickets","Leave their luggage","Wait for another train"],b:0,u:"The speaker says: Please show your tickets to the conductor."},
 {j:"isi",t:"Listen and type the missing word: She has lived in Penang ____ 2015.",dengar:"She has lived in Penang since 2015.",b:["since"],u:"The speaker says since. 2015 is a starting point."}],
 bos:{j:"pilih",t:"Listen to the interview. What is the main idea?",dengar:"I've never felt as proud as I did at the summit. We had trained for six months, and we had already faced storms, tiredness and fear. But nobody gave up, and in the end, we reached the top together.",p:["The team succeeded through teamwork.","The climber was afraid and went home.","The storm stopped the expedition early.","The team found it very easy to reach the top."],b:0,u:"The speaker says: nobody gave up, and in the end, we reached the top together."}},

{n:5, tempat:"Journal Cove", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"jurnalpendakian",
 kadNama:"exhausted", kadEm:"\u{1F975}", kadFakta:"exhausted = extremely tired. A stronger word than tired. Example: After the 12-kilometre trek, we were all exhausted.",
 bosKadNama:"determination", bosKadEm:"\u{1F4AA}", bosKadFakta:"Determination is the strong will to continue even when something is difficult. Many successful climbers say that determination is more important than strength.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A pupil describes a hard trek and its lesson.","A pupil explains how to buy a plane ticket.","A pupil complains about a really bad hotel.","A pupil describes her new school and teachers."],b:0,u:"The writer tells about a difficult trek and what it taught her."},
 {j:"pilih",t:"According to Text 1, how long had the group been walking when they stopped for lunch?",p:["For about four hours","For about forty minutes","Since the previous week","For about two days"],b:0,u:"The text says: By lunchtime, we had been walking for about four hours."},
 {j:"pilih",t:"Why did the writer want to give up? (Text 1)",p:["Her legs hurt and she was tired.","She had lost her passport that day.","She was afraid of the mountain guide.","She didn't like the food at the camp."],b:0,u:"The text says: My legs were aching, and I was completely exhausted."},
 {j:"pilih",t:"The word exhausted in Text 1 means",p:["extremely tired","very hungry","slightly worried","fully prepared"],b:0,u:"Exhausted means extremely tired."},
 {j:"pilih",t:"Who encouraged the writer to continue? (Text 1)",p:["Her friend Hana","Her teacher","The mountain guide","A stranger"],b:0,u:"The text says: Hana walked beside me and kept saying, 'Just one more step.'"},
 {j:"banyak",t:"Based on Text 1, choose TWO things the writer has learnt.",p:["She is stronger than she thought.","Friends can give strength.","Treks are always very easy.","Backpacks should be very heavy."],b:[0,1],u:"The text says she learnt that she was stronger than she thought and that friends can help."},
 {j:"pilih",t:"What can we infer about the writer at the end of Text 1?",p:["She felt proud of herself.","She regretted joining the trek.","She was angry with Hana.","She never wanted to climb again."],b:0,u:"She says: I have never felt so proud. So she felt proud of herself."},
 {j:"susun",t:"Put the events in Text 1 in the correct order.",p:["The group started to walk early in the morning.","The writer felt exhausted at lunchtime.","Hana encouraged her to continue.","They reached the waterfall in the afternoon."],b:[0,1,2,3],u:"The text follows the day: early start, exhaustion at lunch, encouragement, then reaching the waterfall."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["One More Step","A Boring Holiday","Shopping in the City","How to Pack a Suitcase"],b:0,u:"The text is about continuing one step at a time during a hard trek."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · present perfect in a travel blog", lampiran:null,
 kadNama:"yet / already position", kadEm:"\u{1F4DD}", kadFakta:"already goes between has and the past participle (has already left) or at the end (has left already). yet goes at the end of a question or negative (Has it started yet? It hasn't started yet).",
 bosKadNama:"keep tenses together", bosKadEm:"\u{2699}\u{FE0F}", bosKadFakta:"Use the present perfect for experiences and news up to now, and the past simple for finished events with a time: I have visited Sabah. I went there last year.",
 soalan:[
 {j:"isi",t:"Type the missing word: We haven't booked the hotel ____. We'll do it tomorrow.",b:["yet"],u:"Yet goes at the end of a negative present perfect sentence."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: She has live in Kuching for ten years.",b:["lived"],u:"Present perfect needs the past participle: has lived."},
 {j:"susun",t:"Put the words in order to make a correct question.",p:["Have","you","packed","your","bag","yet?"],b:[0,1,2,3,4,5],u:"Have + subject + past participle + object + yet?"},
 {j:"pilih",t:"Which sentence uses the present perfect correctly?",p:["I've just spoken to the guide.","I've just speak to the guide.","I just have spoke to the guide.","I've just speaking to the guide."],b:0,u:"Present perfect = have + past participle (spoken). Just goes between have and the past participle."},
 {j:"pilih",t:"Which sentence about friendship is correct?",p:["They have been friends since they were small.","They have been friends since ten years ago.","They are friends since they were children.","They were friends for they were children."],b:0,u:"Since + a clause that shows the starting point: since they were children."},
 {j:"pilih",t:"Which sentence is written correctly?",p:["He has already left, hasn't he?","He already has left, has he?","He has left already, isn't he?","He has already leave, hasn't he?"],b:0,u:"A positive present perfect sentence takes a negative tag with has: hasn't he?"},
 {j:"susun",t:"Put the sentences in order to make a short travel blog entry.",p:["We have just arrived in Langkawi.","It took us four hours by ferry.","We haven't visited the cable car yet.","We'll go there tomorrow morning."],b:[0,1,2,3],u:"Start with the news, give a detail, say what has not happened, then give the plan."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["We've already seen the waterfall, but we haven't seen the caves yet.","We've already seen the waterfall but, we haven't seen the caves yet.","we've already seen the waterfall, but we haven't seen the caves yet","We've already seen the waterfall; but we haven't seen the caves yet."],b:0,u:"Put a comma before but when it joins two full clauses, begin with a capital letter and end with a full stop."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the blog entry: We have walked for six hours, and we are exhausted. ____",p:["We haven't reached the campsite yet, but we've already seen the sunset.","We didn't reach the campsite yet, but we already saw the sunset.","We haven't reach the campsite already, but we've yet seen the sunset.","We hasn't reached the campsite yet, but we've already seeing the sunset."],b:0,u:"Present perfect with yet in a negative sentence and with already in a positive sentence."}}
];

module.exports = {
  id:"e3b1", tingkatan:3, kod:"Unit 1 Adventure Trails",
  tajuk:"Trail Blazers", subtajuk:"English Form 3 · Unit 1 Adventure Trails",
  spi:SPI_B1_T3,
  ulasan:ulasanBab("travel, adventure and the present perfect", "Adventure Trails"),
  lampiran:{
   jadualperkhemahan:jadual(1, "An itinerary for a school jungle camp", "Jungle Camp Itinerary · Taman Negara",
     ["Day","Plan"],
     [["Day 1","6.30 a.m. Depart from school. 12.00 p.m. Lunch at Kuala Tembeling. Overnight at Lata Berkoh campsite."],["Day 2","Jungle trek to the waterfall. Return to the campsite by 5.00 p.m. The night walk is optional."],["Day 3","Pack up the tents. Return to school by 6.00 p.m."]],
     "**Please bring:** a raincoat and a water bottle. Tents are provided. Tell your teacher before 3.00 p.m. on Day 2 if you want to join the night walk."),
   jurnalpendakian:teks(1, "A journal entry about a trek", "One More Step",
     ["We left the campsite at six in the morning. By lunchtime, we had been walking for about four hours. My legs were aching, my backpack felt like a rock, and I was completely exhausted. For the first time, I wanted to give up.",
      "Then my friend Hana walked beside me and kept saying, 'Just one more step.' I thought it was silly, but it worked. One step turned into ten, and ten into a hundred.",
      "In the afternoon, we reached the waterfall. I've never felt so proud of myself. I have learnt that I'm stronger than I thought, and that friends can give you strength when you have none."],
     "Practice text: invented journal entry")
  },
  aras:ARAS
};
