/* Sumber kandungan — English KSSM Form 1, Unit 4 Life on Earth
   DSKP Form 1 Textbook scope and sequence: Tema Health and Environment, Unit 4.
   Tatabahasa: comparatives and superlatives, a/an/some/any, countable and uncountable nouns,
   past continuous and past simple. Kosa kata: geography and landscape, animals.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, jadual, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Wild Safari", sk:"Vocabulary · animals, geography and landscape", lampiran:null,
 kadNama:"rhinoceros", kadEm:"\u{1F98F}", kadFakta:"A rhinoceros (or rhino) has a horn on its nose. Many rhinos are in danger because people hunt them. Say: rye-NOS-uh-rus.",
 bosKadNama:"reef", bosKadEm:"\u{1FAB8}", bosKadFakta:"A coral reef is a line of rock or coral under the sea. Many colourful fish live on a reef.",
 soalan:[
 {j:"pilih",gbr:"\u{1F427}",t:"Which animal is this? It lives in cold places and cannot fly.",p:["penguin","owl","giraffe","gorilla"],b:0,u:"A penguin is a black and white bird that lives in cold places. It swims but cannot fly."},
 {j:"pilih",gbr:"\u{1F992}",t:"Which animal has a very long neck?",p:["giraffe","rhinoceros","crocodile","elephant"],b:0,u:"A giraffe has the longest neck of all animals."},
 {j:"pilih",gbr:"\u{1F3DC}\u{FE0F}",t:"A very dry place with a lot of sand is a",p:["desert","valley","island","reef"],b:0,u:"A desert is very dry and often has a lot of sand."},
 {j:"pilih",gbr:"\u{1F3DD}\u{FE0F}",t:"A piece of land with water all around it is an",p:["island","mountain","waterfall","rainforest"],b:0,u:"An island is surrounded by water."},
 {j:"pilih",gbr:"\u{1F30B}",t:"Which word describes a very high, steep rock beside the sea?",p:["cliff","lake","forest","waterfall"],b:0,u:"A cliff is a high, steep rock face, often next to the sea."},
 {j:"pilih",t:"Which of these is a large animal that lives in the sea?",p:["whale","butterfly","crocodile","gorilla"],b:0,u:"A whale is a very big mammal that lives in the ocean."},
 {j:"isi",gbr:"\u{1F989}",t:"Type the missing word: An ____ is a bird that hunts at night and has big eyes.",b:["owl"],u:"An owl hunts at night and has big eyes. Remember to use an before a vowel sound."},
 {j:"pilih",t:"Which group has ONLY animals?",p:["turtle, whale, tiger","beach, cliff, lake","bee, island, snake","owl, valley, giraffe"],b:0,u:"A turtle, a whale and a tiger are animals. Beach, cliff, lake and valley are places."}],
 bos:{j:"banyak",t:"Choose ALL the words that are landscapes (places in nature).",p:["canyon","valley","waterfall","penguin","butterfly"],b:[0,1,2],u:"A canyon, a valley and a waterfall are landscapes. A penguin and a butterfly are animals."}},

{n:2, tempat:"Compare Cave", sk:"Grammar · comparatives and superlatives, countable and uncountable nouns", lampiran:null,
 kadNama:"-er / more", kadEm:"\u{1F4CF}", kadFakta:"Short adjectives: tall → taller → the tallest. Long adjectives: expensive → more expensive → the most expensive. Irregular: good → better → the best, bad → worse → the worst.",
 bosKadNama:"some / any / a / an", bosKadEm:"\u{1F9FA}", bosKadFakta:"Use a/an with one countable noun (a lake, an owl). Use some in positive sentences (some water). Use any in negatives and questions (There aren't any owls. Are there any lakes?).",
 soalan:[
 {j:"pilih",t:"A cheetah is ____ than a horse.",p:["faster","fast","fastest","more fast"],b:0,u:"Comparing two things: fast + -er = faster than."},
 {j:"pilih",t:"Mount Kinabalu is ____ mountain in Malaysia.",p:["the highest","higher","highest","more high"],b:0,u:"The highest of all mountains in Malaysia: the + highest."},
 {j:"pilih",t:"This hotel is ____ than that one.",p:["more expensive","expensiver","most expensive","expensive"],b:0,u:"Long adjectives use more: more expensive than."},
 {j:"pilih",t:"This is the ____ film I have ever seen. I fell asleep!",p:["worst","worse","baddest","most bad"],b:0,u:"The irregular superlative of bad is the worst."},
 {j:"pilih",t:"There ____ any animals on the island.",p:["aren't","isn't","don't","hasn't"],b:0,u:"Animals is plural, so we say There aren't any animals."},
 {j:"pilih",t:"Is there ____ water in the bottle?",p:["any","a","an","many"],b:0,u:"Water is uncountable, and in questions we use any."},
 {j:"isi",t:"Type the correct form of the adjective: A whale is ____ than a dolphin. (big)",b:["bigger"],u:"Big is a short adjective. Double the last letter and add -er: bigger."},
 {j:"isi",t:"Type the missing word: He climbed ____ mountain last year.",b:["a"],u:"Mountain is a singular countable noun and starts with a consonant sound, so we use a."}],
 bos:{j:"pilih",t:"Choose the correct sentence.",p:["The Nile is the longest river in Africa.","The Nile is longer river in Africa.","The Nile is the most long river in Africa.","The Nile is longest river in Africa."],b:0,u:"Use the + superlative: the longest river."}},

{n:3, tempat:"Wildlife Park", sk:"Reading 3.1.2 · specific details in a chat", lampiran:"sembang",
 kadNama:"volunteer", kadEm:"\u{1F64B}", kadFakta:"A volunteer helps and does not get paid (sukarelawan). Example: She is a volunteer at the animal shelter.",
 bosKadNama:"endangered", bosKadEm:"\u{1F43C}", bosKadFakta:"An endangered animal is in danger of disappearing forever. We should protect endangered animals and their homes.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Where is the school trip going?",p:["To a wildlife park","To a museum","To a beach","To a shopping mall"],b:0,u:"Siti writes: We're going to the wildlife park on Saturday."},
 {j:"pilih",t:"According to Figure 1, how many species of owls can they see?",p:["Three","Two","Five","Ten owls"],b:0,u:"Aiman writes: There are three species of owls!"},
 {j:"pilih",t:"Based on Figure 1, what time must they meet at the school gate?",p:["7.30 a.m.","8.30 a.m.","6.30 a.m.","9.30 a.m."],b:0,u:"Siti writes: Meet at the school gate at 7.30 a.m."},
 {j:"pilih",t:"What does Ravi want to see most? (Figure 1)",p:["The tigers","The owls","The penguins","The snakes"],b:0,u:"Ravi writes: I can't wait to see the tigers!"},
 {j:"pilih",t:"What must they NOT forget to bring? (Figure 1)",p:["Water","Money for food","A camera","A laptop"],b:0,u:"Siti writes: Don't forget to bring water. There isn't any drinking water in the park."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things they can see at the park.",p:["tigers","owls","dolphins","camels"],b:[0,1],u:"The chat mentions tigers and owls. Dolphins and camels are not mentioned."},
 {j:"pilih",t:"Why do they need to bring water? (Figure 1)",p:["There isn't any drinking water in the park.","The weather will be very cold.","The park is under the sea.","The teacher likes water."],b:0,u:"Siti writes: There isn't any drinking water in the park."},
 {j:"pilih",t:"Who is the most excited about the trip, based on Figure 1?",p:["Ravi","Siti","Aiman","The teacher"],b:0,u:"Ravi says: I can't wait to see the tigers! I'm so excited, I couldn't sleep last night."}],
 bos:{j:"pilih",t:"What can we infer about the chat in Figure 1?",p:["The trip is on a weekend.","The trip is on a school holiday.","The trip was cancelled.","The trip already finished."],b:0,u:"Siti says they are going on Saturday, which is a weekend day."}},

{n:4, tempat:"Nature Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"habitat", kadEm:"\u{1F333}", kadFakta:"A habitat is the natural home of an animal or plant. The habitat of a penguin is cold ice and sea.",
 bosKadNama:"comparing", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"When you listen to a comparison, listen for words like bigger, smaller, the biggest, more dangerous and the most beautiful.",
 soalan:[
 {j:"pilih",t:"Listen. What is the biggest animal in the world?",dengar:"The blue whale is the biggest animal in the world. It is even bigger than the biggest dinosaur.",p:["The blue whale","The elephant","The giraffe","The crocodile"],b:0,u:"The speaker says: The blue whale is the biggest animal in the world."},
 {j:"pilih",t:"Listen. Which animal is faster than a horse?",dengar:"A cheetah can run faster than any other land animal. It is faster than a horse and faster than a car in the city.",p:["A cheetah","A turtle","A tall giraffe","A big gorilla"],b:0,u:"The speaker says: A cheetah can run faster than any other land animal."},
 {j:"pilih",t:"Listen. What is the lake like?",dengar:"This is the deepest lake in the area, and the water is very clear. There aren't any boats today because the wind is too strong.",p:["The deepest in the area","The shallowest in the area","The smallest in the area","The dirtiest in the area"],b:0,u:"The speaker says: This is the deepest lake in the area."},
 {j:"pilih",t:"Listen. Why aren't there any boats on the lake?",dengar:"This is the deepest lake in the area, and the water is very clear. There aren't any boats today because the wind is too strong.",p:["The wind is too strong.","The lake is dirty.","It is too cold.","The boats are broken."],b:0,u:"The speaker says: because the wind is too strong."},
 {j:"pilih",t:"Listen. What was the guide doing when the tiger appeared?",dengar:"I was explaining about the forest to the visitors when a tiger suddenly appeared on the path. We stayed very still and quiet.",p:["Explaining about the forest","Taking photos of the birds","Eating lunch with visitors","Feeding the monkeys"],b:0,u:"The guide says: I was explaining about the forest to the visitors when a tiger suddenly appeared."},
 {j:"pilih",t:"Listen. Which place is the hottest?",dengar:"The desert is hotter than the beach, and the beach is hotter than the forest. The mountain is the coldest place of all.",p:["The desert","The beach","The forest","The mountain"],b:0,u:"The speaker says: The desert is hotter than the beach, and the beach is hotter than the forest."},
 {j:"pilih",t:"Listen. Where does the penguin live?",dengar:"The emperor penguin is the biggest penguin. It lives in Antarctica, where it is colder than anywhere else on Earth.",p:["In Antarctica","In the desert","In the rainforest","On a beach in Malaysia"],b:0,u:"The speaker says: It lives in Antarctica."},
 {j:"isi",t:"Listen and type the missing word: The mountain is the ____ place of all.",dengar:"The mountain is the coldest place of all.",b:["coldest"],u:"The speaker says coldest. Superlative = the + adjective + -est."}],
 bos:{j:"pilih",t:"Listen. Which animal is the most dangerous, according to the guide?",dengar:"Many people think the lion is the most dangerous animal in Africa. But the mosquito is more dangerous than the lion, because it can spread diseases to millions of people.",p:["The mosquito","The big lion","The crocodile","The poisonous snake"],b:0,u:"The guide says: the mosquito is more dangerous than the lion."}},

{n:5, tempat:"Discovery Trail", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"rimba",
 kadNama:"protect", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"protect = keep something safe from harm (melindungi). Example: Rangers protect the forest and the animals that live there.",
 bosKadNama:"rangers", bosKadEm:"\u{1F9D1}\u{200D}\u{1F33E}", bosKadFakta:"Rangers look after national parks. They watch the animals, protect the forest and teach visitors.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Taman Negara is an old forest that needs care.","Taman Negara is a very dry desert.","Visitors can drive cars in Taman Negara.","Taman Negara has no wild animals at all."],b:0,u:"The text describes Taman Negara and says why it must be protected."},
 {j:"pilih",t:"According to Text 1, how old is the rainforest?",p:["More than 130 million years old","About 13 years old","About 1,300 years old","Almost 100 years old"],b:0,u:"The text says the rainforest is more than 130 million years old."},
 {j:"pilih",t:"The word ancient in Text 1 means",p:["very old","very new","very small","very noisy"],b:0,u:"Ancient means very old, from a long time ago."},
 {j:"pilih",t:"What can visitors do in Taman Negara? (Text 1)",p:["Walk on a canopy bridge","Swim with the dolphins","Ski on the white snow","Visit a hot desert"],b:0,u:"The text says visitors can walk on a canopy walkway high above the trees."},
 {j:"pilih",t:"Why must visitors not leave rubbish in the park? (Text 1)",p:["It can harm the animals.","It makes the park noisy.","It costs a lot of money.","It makes the trees taller."],b:0,u:"The text says rubbish can harm the animals that live there."},
 {j:"banyak",t:"Based on Text 1, choose TWO animals that live in Taman Negara.",p:["tigers","elephants","penguins","polar bears"],b:[0,1],u:"The text says tigers and elephants live in the rainforest. Penguins and polar bears live in cold places."},
 {j:"pilih",t:"What can we infer about the rangers in Text 1?",p:["They care about nature.","They dislike visitors.","They never go into the forest.","They want to cut down trees."],b:0,u:"They protect the park and teach visitors, so they care about nature."},
 {j:"susun",t:"Put the information in Text 1 in order, starting from the first paragraph.",p:["The park is very old.","Many animals live there.","Visitors can walk on a canopy bridge.","Everyone must protect the park."],b:[0,1,2,3],u:"The text first says how old it is, then what lives there, what visitors can do, and finally why we must protect it."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Protect Our Ancient Rainforest","A Day at the Beach","How to Bake a Cake","The Longest River in Asia"],b:0,u:"The whole text is about the old rainforest and why we must protect it."}},

{n:6, tempat:"Eco Desk", sk:"Writing 4.1.1 · Grammar · describe places and compare", lampiran:null,
 kadNama:"than", kadEm:"\u{1F4D0}", kadFakta:"Use than only with a comparative: Penang is smaller than Selangor. Do not use than with a superlative. Use the: Selangor is the biggest.",
 bosKadNama:"a clear paragraph", bosKadEm:"\u{1F4DD}", bosKadFakta:"A good paragraph starts with a topic sentence, then gives details, then ends with a closing sentence.",
 soalan:[
 {j:"isi",t:"Type the correct form of the adjective: The blue whale is the ____ animal in the world. (big)",b:["biggest"],u:"Superlative of big: the biggest."},
 {j:"isi",t:"Type the correct word: Rainforests have ____ rain than deserts.",b:["more"],u:"Rain is uncountable. The comparative of a lot of/much is more."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["Is","this","the","highest","mountain?"],b:[0,1,2,3,4],u:"Question: Is + this + the highest + mountain? We use the with a superlative."},
 {j:"pilih",t:"Which sentence is correct?",p:["There aren't any elephants on this island.","There isn't any elephants on this island.","There aren't some elephants on this island.","There not any elephants on this island."],b:0,u:"Elephants is plural, so use aren't, and any in a negative sentence."},
 {j:"pilih",t:"Which sentence has NO mistake?",p:["Siti is taller than her brother.","Siti is more tall than her brother.","Siti is the taller than her brother.","Siti is tallest than her brother."],b:0,u:"Short adjective + -er + than: taller than."},
 {j:"pilih",t:"Which sentence about information is correct?",p:["We need some information about the park.","We need an information about the park.","We need informations about the park.","We need a information about the park."],b:0,u:"Information is uncountable, so we use some, not a/an, and we do not add -s."},
 {j:"susun",t:"Put the sentences in order to make a short paragraph.",p:["Langkawi is a beautiful island in the north of Malaysia.","It has long white beaches and green forests.","It is also home to many birds and monkeys.","Everybody should visit Langkawi once."],b:[0,1,2,3],u:"Start with a topic sentence, add details, then end with a closing sentence."},
 {j:"pilih",t:"Which sentence about a trip is correct?",p:["It was the most exciting trip I have ever had.","It was the most excitingest trip I have ever had.","It was most exciting trip I have ever had.","It was the more exciting trip I have ever had."],b:0,u:"Exciting is a long adjective, so we use the most exciting."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: Borneo has some of the oldest rainforests in the world. ____",p:["It is also home to more animals than many other places.","It is also home to more animals than the many other place.","It is also a home to most animals than many places.","It also is home to the more animals that many places."],b:0,u:"Use the comparative with than: more animals than many other places."}}
];

module.exports = {
  id:"e1b4", tingkatan:1, kod:"Unit 4 Life on Earth",
  tajuk:"Planet Explorers", subtajuk:"English Form 1 · Unit 4 Life on Earth",
  spi:SPI_A2,
  ulasan:ulasanBab("animals, landscapes and comparing things", "Life on Earth"),
  lampiran:{
   sembang:sembang(1, "A class chat about a school trip", "Form 1 Bestari · Class Chat", "Siti", [
     {dari:"Siti", teks:"Hi everyone! We're going to the wildlife park on Saturday. Meet at the school gate at **7.30 a.m.**"},
     {dari:"Aiman", teks:"Great! I heard there are three species of owls!"},
     {dari:"Ravi", teks:"I can't wait to see the tigers! I'm so excited, I couldn't sleep last night."},
     {dari:"Siti", teks:"Don't forget to bring water. There isn't any drinking water in the park."}]),
   rimba:teks(1, "A page from a visitor guide", "Welcome to Taman Negara",
     ["Taman Negara is one of the oldest rainforests in the world. Scientists say it is more than 130 million years old. This ancient forest is home to tigers, elephants and hundreds of kinds of birds.",
      "Visitors can walk on a canopy bridge high above the trees and see the forest from above. It is one of the longest canopy walkways in the world. Rangers also lead night walks, so you can listen to the sounds of the forest.",
      "Please take care of the park. Rubbish can harm the animals that live here, so take all your rubbish with you. Together, we can protect this amazing place."],
     "Practice text: invented visitor guide")
  },
  aras:ARAS
};
