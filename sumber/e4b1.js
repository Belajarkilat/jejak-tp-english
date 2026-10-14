/* Sumber kandungan — English KSSM Form 4, Unit 1 Memory Lane
   DSKP Form 4 Grammar: intensifiers (too, so, such); used to and would for past habits, routines and states.
   Tema People and Culture. Kosa kata: childhood, change and memories (B1 Mid).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, jadual, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Memory Museum", sk:"Vocabulary · childhood, change and memories", lampiran:null,
 kadNama:"nostalgia", kadEm:"\u{1F4F7}", kadFakta:"Nostalgia is a warm, slightly sad feeling when you remember happy times in the past. Old photographs often bring back nostalgia.",
 bosKadNama:"generation", bosKadEm:"\u{1F46A}", bosKadFakta:"A generation is all the people born around the same time. Grandparents, parents and children belong to three different generations.",
 soalan:[
 {j:"pilih",gbr:"\u{1F4F7}",t:"Looking at old school photographs filled her with ____ for her childhood.",p:["nostalgia","jealousy","anger","confusion"],b:0,u:"Nostalgia is a pleasant feeling of missing the past."},
 {j:"pilih",gbr:"\u{1F46A}",t:"My grandparents, my parents and I belong to three different ____.",p:["generations","traditions","professions","routines"],b:0,u:"A generation is a group of people born at about the same time."},
 {j:"pilih",gbr:"\u{1F3E1}",t:"The village has ____ changed since I was a child. There are many new buildings now.",p:["dramatically","slightly now","hardly ever","rarely"],b:0,u:"Dramatically means in a very noticeable way."},
 {j:"pilih",t:"Which word means 'a long-established custom passed from parents to children'?",p:["tradition","invention","fashion","competition"],b:0,u:"A tradition is a custom that has been passed down through generations."},
 {j:"pilih",t:"When something has become old-fashioned and is no longer used, we say it is",p:["outdated","modern","trendy","essential"],b:0,u:"Outdated means no longer modern or useful."},
 {j:"pilih",t:"The new road made travelling ____ easier for the villagers than before.",p:["considerably","hardly ever","barely at all","seldom"],b:0,u:"Considerably means by a large amount."},
 {j:"isi",t:"Type the missing word: Many people feel a sense of ____ when they hear old songs from their youth. (a feeling of missing the past)",b:["nostalgia"],u:"Nostalgia is a feeling of longing for the past."},
 {j:"pilih",t:"Which of these describes a change that makes life easier?",p:["an improvement","a disadvantage","a shortage","a delay"],b:0,u:"An improvement is a change that makes something better."}],
 bos:{j:"banyak",t:"Choose ALL the words that describe things from the past.",p:["traditional","old-fashioned","vintage","futuristic","brand-new"],b:[0,1,2],u:"Traditional, old-fashioned and vintage describe things from the past. Futuristic and brand-new do not."}},

{n:2, tempat:"Intensifier Inn", sk:"Grammar · too, so, such; used to and would", lampiran:null,
 kadNama:"too / so / such", kadEm:"\u{1F4A5}", kadFakta:"too + adjective = more than is good (too hot to drink). so + adjective = very (so happy). such + (a/an) + adjective + noun = very (such a lovely day, such good friends).",
 bosKadNama:"used to / would", bosKadEm:"\u{23EA}", bosKadFakta:"used to = past habits AND states (I used to live in a village. I used to be shy). would = past habits only, not states (We would play outside every afternoon). Do not use would for states: I would have a bike is wrong for a state.",
 soalan:[
 {j:"pilih",t:"The soup was ____ hot that I couldn't eat it.",p:["so","such","too","very so"],b:0,u:"So + adjective + that: so hot that I couldn't eat it."},
 {j:"pilih",t:"It was ____ a beautiful village that everybody wanted to stay.",p:["such","so","too","very"],b:0,u:"Such + a + adjective + noun: such a beautiful village."},
 {j:"pilih",t:"This bag is ____ heavy for me to carry.",p:["too","so much","such","very"],b:0,u:"Too heavy for me to carry: more than is possible or good."},
 {j:"pilih",t:"When I was a child, I ____ play in the river every afternoon.",p:["would","was","have","am"],b:0,u:"Would + base verb describes a repeated past habit."},
 {j:"pilih",t:"We ____ live in a small wooden house before we moved to the city.",p:["used to","would to","use to","were used"],b:0,u:"Used to + base verb describes a past state (living in a house)."},
 {j:"pilih",t:"She ____ be very shy, but now she speaks confidently in public.",p:["used to","would","has","is"],b:0,u:"Be is a state, so we use used to (not would)."},
 {j:"isi",t:"Type the missing word: There were ____ many people at the market that we couldn't move.",b:["so"],u:"So many people that we couldn't move."},
 {j:"isi",t:"Type the missing word: It was ____ an interesting film that I watched it twice.",b:["such"],u:"Such + an + adjective + noun: such an interesting film."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["He used to walk to school, but now he takes a bus.","He use to walk to school, but now he takes a bus.","He used to walking to school, but now he takes a bus.","He was used walk to school, but now he takes a bus."],b:0,u:"Used to + base verb for a past habit."}},

{n:3, tempat:"Then and Now Table", sk:"Reading 3.1.2 · specific details in a table and chat", lampiran:"sembangkenangan",
 kadNama:"nowadays", kadEm:"\u{1F4F1}", kadFakta:"Nowadays and these days mean in the present, in contrast with the past. Example: People used to write letters. Nowadays, they send messages.",
 bosKadNama:"compare", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"To compare two times: use used to for the past and nowadays for the present. Look for the same topic in each column.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Where did Grandpa use to play as a child?",p:["In the river","In a shopping mall","In a computer room","In a swimming pool"],b:0,u:"Grandpa writes: We used to swim and play in the river."},
 {j:"pilih",t:"According to Figure 1, how did Grandpa's family get news?",p:["From the radio","From the internet","From a smartphone","From television"],b:0,u:"Grandpa writes: We would gather around the radio every evening."},
 {j:"pilih",t:"Based on Figure 1, how many children were in Grandpa's family?",p:["Eight","Two","Four","Eighteen"],b:0,u:"Grandpa writes: I had seven brothers and sisters, so eight children altogether."},
 {j:"pilih",t:"What does Nisa do nowadays to talk to friends? (Figure 1)",p:["She sends messages","She writes letters","She visits them by bicycle","She waits at the post office"],b:0,u:"Nisa writes: Nowadays, I send messages on my phone."},
 {j:"pilih",t:"Which statement about Grandpa is TRUE? (Figure 1)",p:["He had no electricity at home.","He used to watch videos online every day.","He had a computer at his school.","He never played outside the house."],b:0,u:"Grandpa writes: We didn't have electricity, so we used oil lamps."},
 {j:"banyak",t:"Based on Figure 1, choose TWO true statements.",p:["Grandpa used oil lamps.","Nisa sends messages on her phone.","Grandpa used a smartphone.","Nisa eats alone every day."],b:[0,1],u:"Grandpa writes: we used oil lamps. Nisa writes: I send messages on my phone."},
 {j:"pilih",t:"What is Grandpa's opinion of modern life? (Figure 1)",p:["It is easier, but people are busier.","It is worse in every possible way.","It is exactly the same as before.","It is impossible to understand fully."],b:0,u:"Grandpa writes: Life is more comfortable now, but people seem too busy."},
 {j:"pilih",t:"What can we infer from Figure 1?",p:["Technology has changed life.","Nothing has changed in fifty years.","Grandpa dislikes his own family.","Nisa still lives in the past."],b:0,u:"The chat compares life then and now, so technology has changed how people live."}],
 bos:{j:"pilih",t:"Which sentence from Figure 1 describes a past HABIT?",p:["We would gather round the radio.","I send messages on my phone every day.","Life is more comfortable these days.","People seem to be much too busy."],b:0,u:"We would gather ... every evening describes something that happened repeatedly in the past."}},

{n:4, tempat:"Memory Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"habit or state?", kadEm:"\u{1F3A7}", kadFakta:"Listen for used to and would. Used to can describe a habit or a state (We used to be poor). Would only describes repeated actions (We would visit him every Sunday).",
 bosKadNama:"intensifiers", bosKadEm:"\u{1F4AF}", bosKadFakta:"Listen for so, such and too. They show how strong the speaker's feeling is: so happy, such a shame, too late.",
 soalan:[
 {j:"pilih",t:"Listen. What did the speaker use to do after school?",dengar:"When I was in primary school, I used to walk home with my friends. We would stop at a small shop and buy ice cream, and then we would play football until it got dark.",p:["Walk home with friends","Take the school bus home","Do all the homework at once","Watch television all evening"],b:0,u:"The speaker says: I used to walk home with my friends."},
 {j:"pilih",t:"Listen. What would they do at the shop?",dengar:"When I was in primary school, I used to walk home with my friends. We would stop at a small shop and buy ice cream, and then we would play football until it got dark.",p:["Buy ice cream","Buy school books","Sell some fruit","Borrow money"],b:0,u:"The speaker says: We would stop at a small shop and buy ice cream."},
 {j:"pilih",t:"Listen. Why was the speaker unable to see the film?",dengar:"The queue was so long that I gave up. It was such a popular film that all the tickets had sold out by noon. It was too late to buy any.",p:["The tickets had sold out.","The cinema was closed that day.","He lost all of his money.","The film was boring for him."],b:0,u:"The speaker says: all the tickets had sold out by noon."},
 {j:"pilih",t:"Listen. How was the queue?",dengar:"The queue was so long that I gave up. It was such a popular film that all the tickets had sold out by noon. It was too late to buy any.",p:["Very long","Very short","Very fast","Very quiet"],b:0,u:"The speaker says: The queue was so long that I gave up."},
 {j:"pilih",t:"Listen. What does the old man say about his village?",dengar:"This village used to be quiet, and there used to be rice fields everywhere. Now there are shops and houses, and the road is so busy that children can't play outside.",p:["It has become busy.","It has not changed.","It is empty now.","It has become smaller."],b:0,u:"The speaker says: Now there are shops and houses, and the road is so busy."},
 {j:"pilih",t:"Listen. What used to be everywhere in the village?",dengar:"This village used to be quiet, and there used to be rice fields everywhere. Now there are shops and houses, and the road is so busy that children can't play outside.",p:["Rice fields","Shopping malls","Factories","Swimming pools"],b:0,u:"The speaker says: there used to be rice fields everywhere."},
 {j:"pilih",t:"Listen. What is the speaker feeling?",dengar:"I looked at my old school photograph, and I felt such a warm feeling. We were so young, and we were so full of dreams. I really miss those days.",p:["Nostalgic","Angry","Bored","Afraid"],b:0,u:"The speaker misses the past with a warm feeling, which is nostalgia."},
 {j:"isi",t:"Listen and type the missing word: It was ____ a lovely day that we stayed outside.",dengar:"It was such a lovely day that we stayed outside.",b:["such"],u:"The speaker says such. Such + a + adjective + noun."}],
 bos:{j:"pilih",t:"Listen to the talk. What is the main idea?",dengar:"Life was simpler when I was a boy. We didn't have many toys, but we used to make our own from wood and old tyres. We would spend all day outdoors, and we were so happy. Now children have everything, but they sometimes seem to enjoy it less.",p:["Simple childhoods can be happy.","Toys are far too expensive today.","Children should always stay indoors.","Modern children are always very sad."],b:0,u:"The speaker says that they were so happy with simple toys and playing outdoors."}},

{n:5, tempat:"Memoir Library", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"memoir",
 kadNama:"memoir", kadEm:"\u{1F4D6}", kadFakta:"A memoir is a written account of someone's own memories. It is written in the first person (I) and often uses used to and would.",
 bosKadNama:"vivid detail", bosKadEm:"\u{1F3A8}", bosKadFakta:"Good memoirs use vivid details (the smell of rain on the roof, the sound of the radio) so that readers can imagine the scene.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["The writer fondly recalls her village childhood.","The writer complains about her old village.","The writer describes a long trip abroad.","The writer explains how to build a wooden house."],b:0,u:"The writer describes her childhood with warm memories."},
 {j:"pilih",t:"According to Text 1, what would the writer do every evening?",p:["Hear her grandmother's stories","Watch some television","Do her homework alone","Play computer games"],b:0,u:"The text says: Every evening, we would sit on the porch and listen to Grandmother's stories."},
 {j:"pilih",t:"What did the house use to be made of? (Text 1)",p:["Wood","Brick","Plastic","Glass"],b:0,u:"The text says: Our house used to be made of wood."},
 {j:"pilih",t:"The word vivid in Text 1 means",p:["clear and detailed","vague and boring","silent and very calm","old and quite broken"],b:0,u:"Vivid means producing clear, strong pictures in the mind."},
 {j:"pilih",t:"Why does the writer say she is grateful? (Text 1)",p:["Her grandmother taught her kindness.","She became very rich later.","She travelled all around the world.","She won a big national prize."],b:0,u:"The text says her grandmother taught her to be kind to everyone."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that the writer remembers clearly.",p:["the smell of rain","the sound of the stories","the taste of pizza","the colour of a car"],b:[0,1],u:"The text mentions the smell of rain on the roof and the sound of the stories."},
 {j:"pilih",t:"What can we infer about the writer's feelings? (Text 1)",p:["She misses her childhood.","She is angry with her family.","She is afraid of the village.","She wants to move away."],b:0,u:"She describes the past warmly, so she misses her childhood."},
 {j:"pilih",t:"Which sentence from Text 1 describes a past HABIT?",p:["We would sit on the porch.","I am grateful for it today.","The house was made of wood.","My grandmother was very kind."],b:0,u:"Would sit every evening describes a repeated action in the past."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Stories on the Porch","A Modern City Life","How to Build a Home","The Price of Wood Today"],b:0,u:"The text centres on the stories that the writer heard on the porch."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · write a childhood memoir with used to and would", lampiran:null,
 kadNama:"memoir tips", kadEm:"\u{1F4DD}", kadFakta:"In a memoir, begin with a state (used to) and continue with repeated actions (would): We used to live in a small village. Every morning, we would walk to school.",
 bosKadNama:"watch out", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Use used to (not would) for states such as live, be, have, like. After used to and would, the verb is the base form: used to play, would play.",
 soalan:[
 {j:"isi",t:"Type the missing word: We ____ to live in a small house near the sea. (a past state)",b:["used"],u:"Used to + base verb for a past state."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: She used to played in the garden.",b:["play"],u:"After used to, use the base verb: used to play."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["It","was","such","a","happy","time."],b:[0,1,2,3,4,5],u:"Such + a + adjective + noun."},
 {j:"pilih",t:"Which sentence is correct?",p:["Every summer, we would visit our cousins in Perak.","Every summer, we would to visit our cousins in Perak.","Every summer, we would visited our cousins in Perak.","Every summer, we used visit our cousins in Perak."],b:0,u:"Would + base verb describes a repeated action in the past."},
 {j:"pilih",t:"Which sentence is NOT correct?",p:["I would be shy when I was a child.","I used to be shy when I was a child.","I was shy when I was a child.","I used to be afraid of the dark."],b:0,u:"Would cannot describe a state such as be shy. Use used to or the past simple."},
 {j:"pilih",t:"Which sentence uses an intensifier correctly?",p:["The test was so difficult that nobody finished.","The test was such difficult that nobody finished.","The test was too difficult that nobody finished.","The test was so a difficult that nobody finished."],b:0,u:"So + adjective + that: so difficult that nobody finished."},
 {j:"susun",t:"Put the sentences in order to make a short memoir.",p:["When I was little, we used to live in a village.","Every morning, we would walk to school together.","It was such a happy time.","I still remember it so clearly."],b:[0,1,2,3],u:"Start with a state, give a repeated action, then a feeling and a closing thought."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["When I was young, we would play outside until dark.","When I was young we would, play outside until dark.","when I was young, we would play outside until dark","When I was young; we would play outside until dark."],b:0,u:"A comma goes after an introductory clause."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the memoir: We didn't have a television, so ____",p:["we would sit outside and listen to my father's stories.","we used sit outside and listened to my father's stories.","we would sat outside and listen my father's stories.","we used to sitting outside and listen to my father story."],b:0,u:"Would + base verb for a repeated action: would sit and listen."}}
];

module.exports = {
  id:"e4b1", tingkatan:4, kod:"Unit 1 Memory Lane",
  tajuk:"Memory Lane", subtajuk:"English Form 4 · Unit 1 Memory Lane",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("childhood memories, used to, would and intensifiers", "Memory Lane"),
  lampiran:{
   sembangkenangan:sembang(1, "A family chat between a grandfather and his granddaughter", "Family Chat", "Nisa", [
     {dari:"Grandpa", teks:"When I was young, we used to swim and play in the river. We didn't have electricity, so we used oil lamps."},
     {dari:"Grandpa", teks:"I had seven brothers and sisters. We would gather around the radio every evening and enjoy our meals together."},
     {dari:"Nisa", teks:"Nowadays, I send messages on my phone and I eat dinner with my family on weekends."},
     {dari:"Grandpa", teks:"Life is more comfortable now, but people seem too busy."}]),
   memoir:teks(1, "An extract from a memoir", "Stories on the Porch",
     ["Our house used to be made of wood, and I can still smell the rain on its roof. Every evening, we would sit on the porch and listen to Grandmother's stories. She was such a wonderful storyteller that even the neighbours would come to listen.",
      "We didn't have much, but we were so happy. Grandmother taught me to be kind to everyone, and I am grateful for that lesson every day.",
      "Now the house is gone, but the sound of her voice is as vivid as ever."],
     "Practice text: invented memoir")
  },
  aras:ARAS
};
