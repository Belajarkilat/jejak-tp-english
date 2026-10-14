/* Sumber kandungan — English KSSM Form 2, Grammar Unit: Quantifiers, adjectives and question tags
   DSKP Form 2 "Grammar (Language Awareness) Syllabus" butir 2, 5, 6, 7 dan 9 (bab bukan buku teks):
   quantifiers (all, both, any, a few, a lot of, too much, too many), adjectives ending with -ed / -ing,
   comparatives and superlatives, countable and uncountable nouns, question tags to show interest.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, sembang, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Quantity Quay", sk:"Vocabulary · quantities, feelings and reactions", lampiran:null,
 kadNama:"-ed or -ing?", kadEm:"\u{1F3AD}", kadFakta:"-ed describes how a person FEELS: I am bored. -ing describes the thing that CAUSES the feeling: The film is boring. Same verb, different job!",
 bosKadNama:"too much / too many", bosKadEm:"\u{1F4A5}", bosKadFakta:"too much + uncountable (too much sugar). too many + countable (too many cars). Too means more than you need, so it is usually a problem.",
 soalan:[
 {j:"pilih",gbr:"\u{1F971}",t:"After a long film, I felt very ____.",p:["bored","boring","bore","boredom"],b:0,u:"Bored describes how a person feels. The film is boring, but the person is bored."},
 {j:"pilih",gbr:"\u{1F929}",t:"The science experiment was very ____. Everybody loved it.",p:["interesting","interested","interest","interestingly"],b:0,u:"Interesting describes the experiment (the thing that causes the feeling)."},
 {j:"pilih",gbr:"\u{1F631}",t:"The horror film was ____. I couldn't sleep last night.",p:["frightening","frightened","fright","frighten"],b:0,u:"Frightening describes the film. Frightened describes the person."},
 {j:"pilih",gbr:"\u{1F622}",t:"The ending of the story made me ____.",p:["sad","sadly","sadden","sadness"],b:0,u:"After made me, use an adjective: sad."},
 {j:"pilih",t:"Which word is used with uncountable nouns? (How ____ water is there?)",p:["much","many","few","several"],b:0,u:"Water is uncountable, so we use much."},
 {j:"pilih",t:"Which word is used with countable nouns? (How ____ eggs do you need?)",p:["many","much","a little","a bit of"],b:0,u:"Eggs are countable, so we use many."},
 {j:"isi",t:"Type the correct word: The students were ____ (excite) about the school trip.",b:["excited"],u:"Excited describes how the students feel."},
 {j:"pilih",t:"Which word means 'not many'?",p:["few","much","lots of","a lot"],b:0,u:"Few means not many, for example few people came."}],
 bos:{j:"banyak",t:"Choose ALL the adjectives that describe how a person feels.",p:["tired","worried","surprised","boring","exciting"],b:[0,1,2],u:"Tired, worried and surprised describe feelings. Boring and exciting describe the thing that causes the feeling."}},

{n:2, tempat:"Grammar Gate", sk:"Grammar · quantifiers, -ed/-ing, comparatives, question tags", lampiran:null,
 kadNama:"all / both / any", kadEm:"\u{1F465}", kadFakta:"all = every person or thing (all of us). both = two people or things (both of them). any = in questions and negatives (Are there any seats? There aren't any).",
 bosKadNama:"question tags", bosKadEm:"\u{1F5E3}\u{FE0F}", bosKadFakta:"Question tags show interest or check information. Positive sentence, negative tag: It's cold, isn't it? Negative sentence, positive tag: You didn't go, did you?",
 soalan:[
 {j:"pilih",t:"____ of the girls like volleyball, so the whole class is going to play.",p:["All","Both","Any","Much"],b:0,u:"All means every one of a group (more than two)."},
 {j:"pilih",t:"Ali and Raju are twins. ____ of them play football.",p:["Both","All","Any","Much"],b:0,u:"Both is used for two people."},
 {j:"pilih",t:"I'm very hungry, but there ____ food in the fridge.",p:["isn't any","isn't some","aren't any","hasn't"],b:0,u:"Food is uncountable, and in negative sentences we use any: There isn't any food."},
 {j:"pilih",t:"We have ____ time left. Please hurry!",p:["very little","very few","too many","a lot of the"],b:0,u:"Time is uncountable, so we say very little (not very few)."},
 {j:"pilih",t:"This laptop is ____ than that one, but it is better.",p:["more expensive","expensiver","most expensive","expensivest"],b:0,u:"Long adjectives use more: more expensive than."},
 {j:"pilih",t:"It's a lovely day, ____?",p:["isn't it","is it","wasn't it","doesn't it"],b:0,u:"A positive sentence with is takes a negative tag: isn't it?"},
 {j:"pilih",t:"You didn't forget your homework, ____?",p:["did you","didn't you","do you","are you"],b:0,u:"A negative sentence takes a positive tag: did you?"},
 {j:"isi",t:"Type the missing word: There are ____ many cars on the road today. It's difficult to drive.",b:["too"],u:"Too many = more than we need or want."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["The film was boring, so I felt bored.","The film was bored, so I felt boring.","The film was boring, so I felt boring.","The film was bored, so I felt bored."],b:0,u:"The film causes the feeling (boring), and I feel the feeling (bored)."}},

{n:3, tempat:"Survey Station", sk:"Reading 3.1.2 · specific details in a survey table", lampiran:"tinjauan",
 kadNama:"survey", kadEm:"\u{1F4CA}", kadFakta:"A survey asks many people the same questions and counts the answers. Example: In our class survey, most pupils like football.",
 bosKadNama:"most / few", bosKadEm:"\u{1F522}", bosKadFakta:"most = nearly all; a few = a small number; none = zero. Example: Most pupils walk to school. A few come by bus.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. How many pupils took the survey?",p:["Forty","Thirty","Fifty","Twenty"],b:0,u:"The table says: 40 pupils took part."},
 {j:"pilih",t:"According to Figure 1, which sport is the most popular?",p:["Football","Badminton","Swimming","Tennis"],b:0,u:"Football has the highest number: 18 pupils."},
 {j:"pilih",t:"How many pupils chose swimming? (Figure 1)",p:["Four","Eight","Twelve","Eighteen"],b:0,u:"The table says: Swimming 4 pupils."},
 {j:"pilih",t:"Which sport did a few pupils choose? (Figure 1)",p:["Swimming","Football","Badminton","All of them"],b:0,u:"Only 4 pupils chose swimming, so a few pupils chose it."},
 {j:"pilih",t:"Which two sports were chosen by the same number of pupils? (Figure 1)",p:["Badminton and Tennis","Football and Badminton","Swimming and Football","Tennis and Swimming"],b:0,u:"Badminton and tennis both have 9 pupils."},
 {j:"pilih",t:"Based on Figure 1, which sentence is true?",p:["Most pupils chose football or badminton.","Nobody chose tennis.","All the pupils chose swimming.","Only a few pupils chose football."],b:0,u:"Football (18) and badminton (9) together are 27 of 40 pupils, which is most of the pupils."},
 {j:"pilih",t:"How many pupils did NOT choose football? (Figure 1)",p:["Twenty-two","Eighteen","Nine","Forty"],b:0,u:"40 - 18 = 22 pupils."},
 {j:"pilih",t:"What can we conclude from Figure 1?",p:["Few pupils like swimming.","Nobody likes sports.","Swimming is the favourite sport.","The survey is wrong."],b:0,u:"Only 4 of the 40 pupils chose swimming, so few pupils like it."}],
 bos:{j:"pilih",t:"The school wants to buy equipment for the sport that most pupils like and for the sport that few pupils like. Which two sports in Figure 1 should it choose?",p:["Football and swimming","Tennis and badminton","Badminton and football","Swimming and tennis"],b:0,u:"Football is the most popular (18 pupils), and swimming is the least popular (4 pupils)."}},

{n:4, tempat:"Echo Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"tag voice", kadEm:"\u{1F3B6}", kadFakta:"With question tags, the voice goes UP if you really ask (You didn't see it, did you?) and goes DOWN if you are sure (It's a nice day, isn't it?).",
 bosKadNama:"feelings", bosKadEm:"\u{1F60A}", bosKadFakta:"Listen for how people feel: excited, bored, worried, surprised, tired. The feeling word often tells the main idea.",
 soalan:[
 {j:"pilih",t:"Listen. How did the boy feel about the film?",dengar:"The film was really boring. I was so bored that I fell asleep halfway through.",p:["Bored","Excited","Surprised","Worried"],b:0,u:"The speaker says: I was so bored that I fell asleep."},
 {j:"pilih",t:"Listen. What does the girl say about the book?",dengar:"This book is amazing! I'm so excited that I can't stop reading it. There are very few books as interesting as this one.",p:["It is very interesting.","It is very boring.","It is too short.","It is too difficult."],b:0,u:"The speaker says: There are very few books as interesting as this one."},
 {j:"pilih",t:"Listen. How many pupils are in the club?",dengar:"There are twenty members in our club. Both of the teachers are very kind, and all of us enjoy the activities.",p:["Twenty","Two","Twelve","Forty"],b:0,u:"The speaker says: There are twenty members."},
 {j:"pilih",t:"Listen. What does the speaker say about the teachers?",dengar:"There are twenty members in our club. Both of the teachers are very kind, and all of us enjoy the activities.",p:["Both are kind.","Both are tired.","None are kind.","One is angry."],b:0,u:"The speaker says: Both of the teachers are very kind."},
 {j:"pilih",t:"Listen. What is wrong with the soup?",dengar:"This soup has too much salt. I can't drink it. Could you give me a glass of water, please?",p:["It has too much salt.","It is too cold.","It has too many onions.","It is too sweet."],b:0,u:"The speaker says: This soup has too much salt."},
 {j:"pilih",t:"Listen. What does Kim want?",dengar:"This soup has too much salt. I can't drink it. Could you give me a glass of water, please?",p:["A glass of water","A bowl of rice","A new soup","A cup of tea"],b:0,u:"The speaker says: Could you give me a glass of water, please?"},
 {j:"pilih",t:"Listen. Who is surprised?",dengar:"Jason: You've been to Japan, haven't you? Nisa: Yes, I have. Jason: Really? I'm so surprised! I didn't know that.",p:["Jason","Nisa","Both of them","Nobody"],b:0,u:"Jason says: I'm so surprised!"},
 {j:"isi",t:"Listen and type the missing word: It's a lovely day, ____ it?",dengar:"It's a lovely day, isn't it?",b:["isn't","is not"],u:"The speaker says isn't it. A positive sentence takes a negative tag."}],
 bos:{j:"pilih",t:"Listen. What is the speaker's opinion?",dengar:"I think this film is very frightening, and I was terrified when the monster came. But my brother wasn't scared at all. He thought it was rather boring.",p:["Only the speaker was scared.","Both of them were terrified at the end.","Both of them were bored by the film.","The brother was frightened as well."],b:0,u:"The speaker was terrified, but the brother thought it was rather boring."}},

{n:5, tempat:"Review Room", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"ulasanfilem",
 kadNama:"opinion", kadEm:"\u{1F4AC}", kadFakta:"An opinion is what you think: I think the film is great. A fact can be checked: The film is two hours long. Reviews have both facts and opinions.",
 bosKadNama:"recommend", bosKadEm:"\u{1F44D}", bosKadFakta:"recommend = say that something is good and that other people should try it. Example: I recommend this book to everybody.",
 soalan:[
 {j:"pilih",t:"What is the main purpose of Text 1?",p:["To give an opinion about a film","To sell cinema tickets","To teach how to act","To explain how to make a film"],b:0,u:"The text is a film review. It gives the writer's opinion."},
 {j:"pilih",t:"According to Text 1, how long is the film?",p:["Two hours","One hour","Three hours","Forty minutes"],b:0,u:"The text says: The film is two hours long."},
 {j:"pilih",t:"What does the writer say about the story? (Text 1)",p:["It is exciting.","It is boring.","It is too short.","It is frightening."],b:0,u:"The text says: The story is exciting and full of surprises."},
 {j:"pilih",t:"The word brilliant in Text 1 means",p:["very good","very bad","very quiet","very small"],b:0,u:"Brilliant means excellent or very good."},
 {j:"pilih",t:"What did the writer NOT like about the film? (Text 1)",p:["The ending","The actors","The music","The story"],b:0,u:"The text says: The ending was a little disappointing."},
 {j:"banyak",t:"Based on Text 1, choose TWO good things about the film.",p:["The music is wonderful.","The actors are brilliant.","The ending is perfect.","The film is too long."],b:[0,1],u:"The text praises the music and the actors."},
 {j:"pilih",t:"What can we infer about the writer? (Text 1)",p:["She enjoyed the film.","She hated the film.","She fell asleep.","She left early."],b:0,u:"She praises the film and recommends it, so she enjoyed it."},
 {j:"pilih",t:"Which sentence is an OPINION in Text 1?",p:["The film is brilliant.","The film is two hours long.","The film is called Sea Heroes.","The film is shown at 8 p.m."],b:0,u:"Brilliant is what the writer thinks. The other sentences are facts."}],
 bos:{j:"pilih",t:"Which sentence would be the BEST final sentence for the review in Text 1?",p:["I recommend it to anyone who loves adventure, don't you think?","I recommend it to anyone who loves adventure, aren't it?","I recommended it to anyone who love adventure, isn't it?","I am recommend it to anyone who loves adventure, do you?"],b:0,u:"The sentence is positive and ends with a correct tag: don't you think?"}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write a review with correct language", lampiran:null,
 kadNama:"give an opinion", kadEm:"\u{1F4DD}", kadFakta:"I think ... / In my opinion ... / I really enjoyed ... because ... Always give a reason for your opinion, with -ing/-ed adjectives: The film was exciting, and I felt thrilled.",
 bosKadNama:"check adjectives", bosKadEm:"\u{2705}", bosKadFakta:"Before you hand in your work, check each -ed / -ing adjective: do you describe the person (-ed) or the thing (-ing)?",
 soalan:[
 {j:"isi",t:"Type the correct word: The match was ____ (excite). We were all on our feet!",b:["exciting"],u:"The match causes the feeling, so we use -ing: exciting."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: I was very bore in the lesson.",b:["bored"],u:"A person feels bored. The lesson is boring."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["There","are","too","many","cars","on","the","road."],b:[0,1,2,3,4,5,6,7],u:"There are + too many + countable noun + place."},
 {j:"pilih",t:"Which sentence about time is correct?",p:["I don't have much time, so I must hurry.","I don't have many time, so I must hurry.","I don't have a few time, so I must hurry.","I don't have much times, so I must hurry."],b:0,u:"Time is uncountable, so we use much."},
 {j:"pilih",t:"Which question tag is correct? You like football, ____?",p:["don't you","aren't you","do you","didn't you"],b:0,u:"A positive sentence with like takes a negative tag with do: don't you?"},
 {j:"pilih",t:"Which sentence expresses an opinion with a reason?",p:["I think the book is great because the story is exciting.","I think the book is great, because exciting.","I think great the book because the story exciting.","The book is great because I think it exciting is."],b:0,u:"Opinion + because + a reason in a full sentence."},
 {j:"susun",t:"Put the sentences in order to make a short film review.",p:["I watched Sea Heroes last night.","The story was exciting and full of surprises.","However, the ending was a little disappointing.","I recommend it to everybody."],b:[0,1,2,3],u:"Start with what you watched, give a good point, then a weak point with However, and end with a recommendation."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["It was a brilliant film, wasn't it?","it was a brilliant film wasn't it","It was a brilliant film wasn't, it?","It was a brilliant film. Wasn't it"],b:0,u:"A comma goes before the tag, and the question ends with a question mark."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the review: The actors were brilliant and the music was wonderful. ____",p:["I was so impressed that I want to watch it again.","I was so impressing that I want to watch it again.","I am so impress that I wanting to watch it again.","I was so impressed that I wants to watching it again."],b:0,u:"I was impressed (feeling), and want to + base verb."}}
];

module.exports = {
  id:"e2b5", tingkatan:2, kod:"Grammar · Quantifiers, feelings and tags",
  tajuk:"Grammar Gladiators", subtajuk:"English Form 2 · Grammar · Quantifiers, feelings and tags",
  spi:SPI_A2,
  ulasan:ulasanBab("quantifiers, -ed/-ing adjectives and question tags", "Quantifiers, feelings and tags"),
  lampiran:{
   tinjauan:jadual(1, "Results of a class survey", "Favourite Sport · Survey of 40 Pupils",
     ["Sport","Number of pupils"],
     [["Football","18"],["Badminton","9"],["Tennis","9"],["Swimming","4"]],
     "40 pupils took part. Each pupil chose ONE sport."),
   ulasanfilem:teks(1, "A film review in a school magazine", "Film Review: Sea Heroes",
     ["Last night, I watched Sea Heroes, and I must say it was a brilliant film. It is two hours long, but I wasn't bored for a single minute. The story is exciting and full of surprises, and the actors are brilliant.",
      "The music is wonderful, too. There are a lot of beautiful scenes under the sea. The only thing I didn't like was the ending, which was a little disappointing.",
      "I recommend it to anyone who loves adventure, don't you think?"],
     "Practice text: invented film review")
  },
  aras:ARAS
};
