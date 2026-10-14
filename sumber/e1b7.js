/* Sumber kandungan — English KSSM Form 1, Grammar Unit: Building better sentences
   DSKP Form 1 "Grammar (Language Awareness) Syllabus" butir 2, 6, 7, 8 dan 9 (bab bukan buku teks):
   sequencing adverbs, defining relative clauses (who, which, that), prepositions, infinitive of purpose,
   passive sentences (present simple and past simple).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, poster, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Word Workshop", sk:"Vocabulary · prepositions, linking words, making things", lampiran:null,
 kadNama:"who / which / that", kadEm:"\u{1F517}", kadFakta:"who = for people (the girl who sings). which = for things (the book which I read). that = for people or things (the book that I read).",
 bosKadNama:"prepositions", bosKadEm:"\u{1F4CD}", bosKadFakta:"in front of, behind, next to, opposite, near, into, out of, towards, past, over, against. They tell us WHERE something is or goes.",
 soalan:[
 {j:"pilih",gbr:"\u{1F4E6}\u{27A1}\u{FE0F}\u{1F3E0}",t:"The box is going from the street to the inside of the house. It is going ____ the house.",p:["into","out of","behind","against"],b:0,u:"Into shows movement from outside to inside."},
 {j:"pilih",gbr:"\u{1F3EB}\u{1F68C}",t:"The bus is stopping ____ the school gate.",p:["in front of","into","over","towards"],b:0,u:"In front of means at the front of something."},
 {j:"pilih",gbr:"\u{1F309}",t:"The cars drive ____ the bridge to cross the river.",p:["over","behind","against","opposite"],b:0,u:"Over shows movement above and across something."},
 {j:"pilih",t:"The bank is ____ the post office. They are on opposite sides of the road.",p:["opposite","into","over","against"],b:0,u:"Opposite means facing something on the other side."},
 {j:"pilih",t:"Which word is a defining relative pronoun for PEOPLE?",p:["who","which","where","when"],b:0,u:"We use who for people: The man who lives here."},
 {j:"pilih",t:"Which word is used for THINGS?",p:["which","who","whom","whose"],b:0,u:"We use which for things: The book which I read."},
 {j:"isi",t:"Type the missing word: The girl ____ won the race is my cousin.",b:["who","that"],u:"We use who (or that) for people: The girl who won the race."},
 {j:"pilih",t:"Which phrase tells us the PURPOSE of an action?",p:["to buy a bag","in front of the shop","next to the gate","over the bridge"],b:0,u:"Infinitive of purpose: to + verb tells us why: She went to the shop to buy a bag."}],
 bos:{j:"banyak",t:"Choose ALL the words that show a place or direction.",p:["towards","past","next to","because","always"],b:[0,1,2],u:"Towards, past and next to show direction or position. Because and always are not prepositions of place."}},

{n:2, tempat:"Sentence Studio", sk:"Grammar · relative clauses, infinitive of purpose, passive", lampiran:null,
 kadNama:"passive", kadEm:"\u{1F504}", kadFakta:"Passive = be + past participle. The house is made from wood (present). The house was built in 1990 (past). We focus on WHAT is done, not WHO does it.",
 bosKadNama:"to + verb", bosKadEm:"\u{1F3AF}", bosKadFakta:"Infinitive of purpose answers the question WHY: She went to the shops to buy a new bag. (Not for buy.) Use to + base verb.",
 soalan:[
 {j:"pilih",t:"This is the boy ____ helped me yesterday.",p:["who","which","whose","what"],b:0,u:"The boy is a person, so we use who."},
 {j:"pilih",t:"I like the book ____ you gave me.",p:["that","who","whom","where"],b:0,u:"The book is a thing. We can use that (or which)."},
 {j:"pilih",t:"She went to the shops ____ a new bag for school.",p:["to buy","for buy","for buying","buy"],b:0,u:"Infinitive of purpose: to + base verb: to buy."},
 {j:"pilih",t:"The house ____ made from wood.",p:["is","are","does","has"],b:0,u:"Present passive: is/are + past participle. House is singular, so is made."},
 {j:"pilih",t:"These cakes ____ sold at the market every Sunday.",p:["are","is","was","do"],b:0,u:"Cakes is plural, so are sold."},
 {j:"pilih",t:"The bridge ____ built in 1998.",p:["was","is","were","did"],b:0,u:"1998 is in the past, and bridge is singular, so was built."},
 {j:"isi",t:"Type the past participle of the verb: The windows are ____ (clean) every day.",b:["cleaned"],u:"Present passive: are + past participle. Clean is regular, so cleaned."},
 {j:"isi",t:"Type the correct word: The letters were ____ (write) by hand.",b:["written"],u:"Write is irregular: wrote (past), written (past participle)."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["The cake was baked by my mother.","The cake was bake by my mother.","The cake is baking by my mother.","The cake were baked by my mother."],b:0,u:"Past passive: was + baked (past participle)."}},

{n:3, tempat:"Map Room", sk:"Reading 3.1.2 · specific details in a table", lampiran:"peta",
 kadNama:"directions", kadEm:"\u{1F9ED}", kadFakta:"turn left, turn right, go straight, past the bank, next to the cafe, opposite the park. They help you find places.",
 bosKadNama:"location", bosKadEm:"\u{1F4CD}", bosKadFakta:"To describe a location, say what is NEXT TO it, OPPOSITE it, IN FRONT OF it or BEHIND it.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Where is the library?",p:["Next to the post office","Opposite the park","Behind the bank","In front of the school"],b:0,u:"The table says: Library: next to the post office."},
 {j:"pilih",t:"According to Figure 1, which place is opposite the park?",p:["The bank","The school","The library","The cafe"],b:0,u:"The table says: Bank: opposite the park."},
 {j:"pilih",t:"Based on Figure 1, what is behind the school?",p:["A field","A cafe","A park","A shop"],b:0,u:"The table says: School: behind it, there is a field."},
 {j:"pilih",t:"Which place can you buy a drink at, according to Figure 1?",p:["The cafe","The library","The bank","The post office"],b:0,u:"The table says: Cafe: you can buy drinks and cakes."},
 {j:"pilih",t:"Aina is at the bank. She wants to go to the park. What should she do? (Figure 1)",p:["Cross the road","Go into the school","Walk behind the school","Turn left at the cafe"],b:0,u:"The park is opposite the bank, so she only needs to cross the road."},
 {j:"pilih",t:"Based on Figure 1, which two places are next to each other?",p:["The library and the post office","The cafe and the bank","The school and the park","The bank and the library"],b:0,u:"The table says the library is next to the post office, and the post office is next to the library."},
 {j:"pilih",t:"Why do people go to the post office? (Figure 1)",p:["To send letters","To borrow books","To eat cakes","To play football"],b:0,u:"The table says: Post office: to send letters and parcels."},
 {j:"pilih",t:"What can we infer about the cafe in Figure 1?",p:["It is popular with students.","It is closed.","It is very far away.","It is behind the bank."],b:0,u:"The table says it is in front of the school, where students go after lessons."}],
 bos:{j:"pilih",t:"A visitor wants to find a quiet place to study near the school. Which place in Figure 1 is the best?",p:["The library","The cafe","The field","The bank"],b:0,u:"The library is a quiet place to study and it is near the school."}},

{n:4, tempat:"Direction Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"sequence words", kadEm:"\u{1F522}", kadFakta:"first, then, next, after that, finally show the ORDER of actions. Listen for them in instructions and stories.",
 bosKadNama:"who, which, that", bosKadEm:"\u{1F50E}", bosKadFakta:"A relative clause gives more information: the teacher who teaches English; the book which is on the table. Listen for these clues to know exactly who or what the speaker means.",
 soalan:[
 {j:"pilih",t:"Listen. Where is the post office?",dengar:"Go straight along this road. Walk past the bank, and the post office is next to the library, opposite the park.",p:["Next to the library","Behind the bank","Inside the park","In front of the school"],b:0,u:"The speaker says: the post office is next to the library."},
 {j:"pilih",t:"Listen to the directions. What do you walk past?",dengar:"Go straight along this road. Walk past the bank, and the post office is next to the library, opposite the park.",p:["The bank","The park","The library","The cafe"],b:0,u:"The speaker says: Walk past the bank."},
 {j:"pilih",t:"Listen. Who is Mr Kamal?",dengar:"Mr Kamal is the man who teaches us science. He's the tall man who always wears a blue tie.",p:["The science teacher","The headmaster","The guard","The librarian"],b:0,u:"The speaker says: Mr Kamal is the man who teaches us science."},
 {j:"pilih",t:"Listen. What does Mr Kamal always wear?",dengar:"Mr Kamal is the man who teaches us science. He's the tall man who always wears a blue tie.",p:["A blue tie","A red cap","A white coat","Black glasses"],b:0,u:"The speaker says: He's the tall man who always wears a blue tie."},
 {j:"pilih",t:"Listen. Why did Mina go to the market?",dengar:"Last Sunday, Mina went to the market to buy some fresh fish. Then she met her teacher.",p:["To buy fresh fish","To meet her teacher","To sell fish","To see a film"],b:0,u:"The speaker says: Mina went to the market to buy some fresh fish."},
 {j:"pilih",t:"Listen. How is the cake made?",dengar:"First, the eggs are mixed with sugar. Next, the flour is added. Then the cake is baked for forty minutes. Finally, it is decorated with cream.",p:["It is mixed, baked and decorated.","It is cooked in a pot.","It is bought from a shop.","It is made from fish."],b:0,u:"The speaker says: the eggs are mixed... the cake is baked... it is decorated."},
 {j:"pilih",t:"Listen to the same talk. What happens LAST?",dengar:"First, the eggs are mixed with sugar. Next, the flour is added. Then the cake is baked for forty minutes. Finally, it is decorated with cream.",p:["It is decorated with cream.","The flour is added.","The cake is baked.","The eggs are mixed."],b:0,u:"The speaker says: Finally, it is decorated with cream."},
 {j:"isi",t:"Listen and type the missing word: The bridge was ____ in 1998.",dengar:"The bridge was built in 1998.",b:["built"],u:"The speaker says built. Past passive: was + built."}],
 bos:{j:"pilih",t:"Listen. Which of these is the speaker's school?",dengar:"My school is the one which stands opposite the park. It was built in 1985, and it is the biggest building in the town. The field behind it is used for sports day.",p:["The big building opposite the park","The small shop near the bank","The old library by the river","The new cafe next to the post office"],b:0,u:"The speaker says: My school is the one which stands opposite the park... the biggest building in the town."}},

{n:5, tempat:"Magazine Stand", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"majalah",
 kadNama:"process", kadEm:"\u{2699}\u{FE0F}", kadFakta:"A process is a series of steps to make or do something. Many process texts use the passive: The paper is made from wood.",
 bosKadNama:"fresh", bosKadEm:"\u{1F95B}", bosKadFakta:"Fresh milk comes from the cow and has not been stored for a long time. Fresh means new, not old.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["How chocolate is made","How a ship is built","Why trees are important","How to bake a cake"],b:0,u:"The whole text explains the steps of making chocolate."},
 {j:"pilih",t:"According to Text 1, where do cocoa beans grow?",p:["On cocoa trees","Under the sea","In the desert","In snow"],b:0,u:"The text says: Cocoa beans grow on cocoa trees in hot countries."},
 {j:"pilih",t:"What happens to the beans FIRST? (Text 1)",p:["They are taken out of the pods.","They are sold in the shop.","They are eaten.","They are painted."],b:0,u:"The text says: First, the beans are taken out of the pods."},
 {j:"pilih",t:"The word roasted in Text 1 means",p:["cooked with dry heat","kept in water","frozen","cut into pieces"],b:0,u:"Roasted means cooked in an oven or over a fire without water."},
 {j:"pilih",t:"What is added to the cocoa to make milk chocolate? (Text 1)",p:["Milk and sugar","Salt and rice","Oil and flour","Ice and water"],b:0,u:"The text says: Milk and sugar are added to make milk chocolate."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that are done to the beans.",p:["They are roasted.","They are crushed.","They are frozen.","They are painted."],b:[0,1],u:"The text says: the beans are roasted and then crushed."},
 {j:"pilih",t:"What can we infer about making chocolate from Text 1?",p:["It has many steps.","It is very quick.","It needs no machines.","It is done at home only."],b:0,u:"The text lists many steps, from picking the beans to packing the chocolate."},
 {j:"susun",t:"Put the steps in Text 1 in the correct order.",p:["The beans are taken out of the pods.","The beans are roasted.","The beans are crushed to make a paste.","Milk and sugar are added."],b:[0,1,2,3],u:"The text follows the order: beans out of pods, roasting, crushing, adding milk and sugar."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["From Bean to Bar","A Day in the Forest","The History of Sugar","How to Plant Trees"],b:0,u:"The text follows chocolate from a bean to a finished bar."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.1, 4.1.5 · Grammar · connect sentences and describe a process", lampiran:null,
 kadNama:"connect it", kadEm:"\u{1F517}", kadFakta:"Join short sentences with who, which, that, and, but, so, because. The girl is my cousin. She won the race. → The girl who won the race is my cousin.",
 bosKadNama:"describe a process", bosKadEm:"\u{1F4CB}", bosKadFakta:"To describe how something is made: use the passive (is made, are mixed) and sequencing words (First, Then, Finally).",
 soalan:[
 {j:"isi",t:"Type the missing word: This is the girl ____ sings in the school choir.",b:["who","that"],u:"The girl is a person: who (or that) sings."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: She went to the library for borrow some books.",b:["to"],u:"Infinitive of purpose: to + base verb: She went to the library to borrow some books."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["The","cake","was","baked","by","my","mother."],b:[0,1,2,3,4,5,6],u:"Passive: The cake + was + baked + by my mother."},
 {j:"pilih",t:"Join the sentences: I have a dog. It loves swimming.",p:["I have a dog that loves swimming.","I have a dog who it loves swimming.","I have a dog which it loves swimming.","I have a dog where loves swimming."],b:0,u:"We use that (or which) for a thing or an animal, and we do not repeat it."},
 {j:"pilih",t:"Which sentence uses the passive correctly?",p:["The rooms are cleaned every day.","The rooms cleaned every day.","The rooms are clean every day by.","The rooms is cleaning every day."],b:0,u:"Present passive: are + cleaned."},
 {j:"pilih",t:"Choose the correct preposition: The cat jumped ____ the table.",p:["onto","into","behind","opposite"],b:0,u:"Onto shows movement to the top of a surface."},
 {j:"susun",t:"Put the sentences in order to describe how rice is cooked.",p:["First, the rice is washed.","Next, water is added.","Then the pot is put on the stove.","Finally, the rice is served."],b:[0,1,2,3],u:"A process starts with First, goes on with Next and Then, and ends with Finally."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["First, the eggs are mixed with sugar.","first the eggs are mixed with sugar","First the eggs, are mixed with sugar.","First; The eggs are mixed with sugar."],b:0,u:"A capital letter at the start, a comma after First, and a full stop at the end."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: The school canteen sells fresh food. ____",p:["The food is cooked every morning by the canteen staff.","The food are cook every morning by the canteen staff.","The food is cooking every morning by canteen staff.","The food cooked every morning by the canteen staff is."],b:0,u:"Present passive: is + cooked + by + the canteen staff."}}
];

module.exports = {
  id:"e1b7", tingkatan:1, kod:"Grammar · Building better sentences",
  tajuk:"Sentence Builders", subtajuk:"English Form 1 · Grammar · Building better sentences",
  spi:SPI_A2,
  ulasan:ulasanBab("relative clauses, prepositions and passive sentences", "Building better sentences"),
  lampiran:{
   peta:jadual(1, "A table about places near a school", "Places Near Our School", ["Place","Where is it?"],
     [["School","In the middle of town. Behind it, there is a field."],["Cafe","In front of the school. You can buy drinks and cakes."],["Bank","Opposite the park."],["Post office","Next to the library. You can send letters and parcels."],["Library","Next to the post office. A quiet place to read and study."]]),
   majalah:teks(1, "A magazine article", "From Bean to Bar",
     ["Cocoa beans grow on cocoa trees in hot countries. When the pods are ripe, they are picked by hand. First, the beans are taken out of the pods and left in the sun for a week.",
      "Next, the beans are roasted, and then they are crushed to make a thick, dark paste. Milk and sugar are added to make milk chocolate, and the mixture is mixed for many hours until it is smooth.",
      "Finally, the chocolate is poured into moulds. When it is cool, the bars are wrapped and sent to shops all over the world."],
     "Practice text: invented magazine article")
  },
  aras:ARAS
};
