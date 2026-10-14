/* Sumber kandungan — English KSSM Form 1, Unit 2 Fact or fiction?
   DSKP Form 1 Textbook scope and sequence: Tema People and Culture, Unit 2.
   Tatabahasa: past simple, was/were, could/couldn't. Kosa kata: literature, professions.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { notis, jadual, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Book Corner", sk:"Vocabulary · types of books and professions", lampiran:null,
 kadNama:"biography", kadEm:"\u{1F4D8}", kadFakta:"A biography is a book about a real person's life, written by another person. An autobiography is written by the person about his or her OWN life.",
 bosKadNama:"explorer", bosKadEm:"\u{1F9ED}", bosKadFakta:"An explorer travels to new places to discover things. Example: Ibn Battuta was a famous explorer.",
 soalan:[
 {j:"pilih",gbr:"\u{1F9DA}",t:"Look at the picture. In which type of book do we usually find this character?",p:["fairy tale","travel guide","cookery book","biography"],b:0,u:"Fairies, princesses and magic belong in a fairy tale (dongeng)."},
 {j:"pilih",gbr:"\u{1F680}",t:"A story about spacecraft and life on other planets is a",p:["science fiction novel","cookery book","poetry book","travel guide"],b:0,u:"Stories about space, robots and the future are science fiction novels."},
 {j:"pilih",gbr:"\u{1F375}",t:"If you want to learn how to make a new dish, you read a",p:["cookery book","detective novel","poetry book","fairy tale"],b:0,u:"A cookery book has recipes that teach you how to cook."},
 {j:"pilih",gbr:"\u{1F50D}",t:"In a detective novel, the main character usually",p:["solves a crime","bakes cakes","visits the moon","writes poems"],b:0,u:"A detective investigates and solves crimes, for example finding out who stole something."},
 {j:"pilih",gbr:"\u{1F9D1}\u{200D}\u{1F680}",t:"A person who travels into space is called an",p:["astronaut","athlete","inventor","comedian"],b:0,u:"An astronaut travels in a spacecraft. An athlete does sports."},
 {j:"pilih",gbr:"\u{1F3A4}\u{1F602}",t:"A person whose job is to make people laugh is a",p:["comedian","scientist","pilot","politician"],b:0,u:"A comedian tells jokes and makes people laugh (pelawak)."},
 {j:"isi",gbr:"\u{1F9EA}\u{1F52C}",t:"Type the missing word: A person who does experiments in a laboratory is a ____.",b:["scientist"],u:"A scientist does experiments and research (saintis)."},
 {j:"pilih",t:"Which pair is CORRECT?",p:["pilot - flies a plane","athlete - paints pictures","engineer - plays football","writer - flies a plane"],b:0,u:"A pilot flies a plane. An athlete plays sports, an engineer designs machines or buildings, and a writer writes books."}],
 bos:{j:"banyak",t:"Choose ALL the jobs that need a person to be creative.",p:["painter","musician","writer","pilot","politician"],b:[0,1,2],u:"Painters, musicians and writers create new pictures, songs and stories."}},

{n:2, tempat:"Time Machine", sk:"Grammar · past simple, was/were, could/couldn't", lampiran:null,
 kadNama:"-ed or irregular", kadEm:"\u{23EA}", kadFakta:"Regular verbs: add -ed (enjoy → enjoyed). Irregular verbs change: read → read, see → saw, go → went, have → had. In negatives and questions, use did + the BASE verb: I didn't see. Did you see?",
 bosKadNama:"was / were", bosKadEm:"\u{1F570}\u{FE0F}", bosKadFakta:"I / he / she / it was. You / we / they were. Negative: wasn't / weren't. Question: Was he...? Were they...?",
 soalan:[
 {j:"pilih",t:"Yesterday, I ____ the book in class.",p:["read","reads","am reading","did read"],b:0,u:"Yesterday shows the past, so we use the past simple. The past of read is read (spelled the same, pronounced like red)."},
 {j:"pilih",t:"They ____ the autobiography last week.",p:["enjoyed","enjoy","enjoys","are enjoying"],b:0,u:"Last week is in the past. Enjoy is a regular verb, so add -ed: enjoyed."},
 {j:"pilih",t:"She ____ the film adaptation of the novel.",p:["didn't see","didn't saw","don't see","doesn't see"],b:0,u:"The negative of the past simple is didn't + BASE verb: didn't see (not didn't saw)."},
 {j:"pilih",t:"____ you finish the book last night?",p:["Did","Do","Were","Are"],b:0,u:"Questions in the past simple start with Did + subject + base verb: Did you finish...?"},
 {j:"pilih",t:"My grandfather ____ an actor when he was young.",p:["was","were","is","did"],b:0,u:"My grandfather = he, and when he was young is in the past, so we use was."},
 {j:"pilih",t:"Many events ____ free last year.",p:["were","was","did","are"],b:0,u:"Many events is plural, so we use were in the past."},
 {j:"isi",t:"Type the past form of the verb: Last Sunday, we ____ (go) to the library.",b:["went"],u:"Go is irregular. The past simple of go is went."},
 {j:"isi",t:"Type the missing words to complete the short answer. Could they perform? Yes, they ____.",b:["could"],u:"A short answer repeats the modal verb: Yes, they could."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["We couldn't see the stage because it was crowded.","We couldn't saw the stage because it was crowded.","We didn't could see the stage because it was crowded.","We don't could see the stage because it was crowded."],b:0,u:"After couldn't, use the base verb: couldn't see. We do not use didn't with could."}},

{n:3, tempat:"Museum Hall", sk:"Reading 3.1.2 · specific details in a timeline and notice", lampiran:"muzium",
 kadNama:"exhibition", kadEm:"\u{1F5BC}\u{FE0F}", kadFakta:"An exhibition is a public show of art or objects, for example in a museum. Example: The exhibition is open every day except Monday.",
 bosKadNama:"admission", bosKadEm:"\u{1F39F}\u{FE0F}", bosKadFakta:"Admission = the price to enter a place (harga masuk). Free admission means you do not need to pay.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Which day is the museum closed?",p:["Monday","Sunday","Saturday","Friday"],b:0,u:"The notice says: Closed on Mondays."},
 {j:"pilih",t:"According to Figure 1, who invented the first telephone in the exhibition?",p:["Alexander Graham Bell","Thomas Edison","Albert Einstein","Marie Curie"],b:0,u:"The notice says: Alexander Graham Bell invented the telephone."},
 {j:"pilih",t:"Based on Figure 1, how much is admission for a child?",p:["RM3","RM5","RM10","Free"],b:0,u:"The notice says: Adults RM5, children RM3."},
 {j:"pilih",t:"Look at Figure 1. What time does the museum open on Saturdays?",p:["9.00 a.m.","10.00 a.m.","8.00 a.m.","11.00 a.m."],b:0,u:"The notice says: Saturdays 9.00 a.m. - 6.00 p.m."},
 {j:"pilih",t:"Which of the following is NOT in the exhibition (Figure 1)?",p:["A space rocket","A telephone","A light bulb","A telescope"],b:0,u:"The exhibition has a telephone, a light bulb and a telescope. A space rocket is not listed."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things visitors CANNOT do.",p:["take photos with a flash","touch the objects","buy tickets online","bring a school group"],b:[0,1],u:"The notice says: No flash photography. Please do not touch the objects."},
 {j:"pilih",t:"Figure 1 says school groups must book early. How early?",p:["Two weeks before","One day before","One month before","On the same day"],b:0,u:"The notice says: School groups must book two weeks before the visit."},
 {j:"pilih",t:"Which invention in Figure 1 helped people to see far away stars?",p:["The telescope","The light bulb","The telephone","The camera"],b:0,u:"The telescope was used to look at stars. Galileo improved it in 1609."}],
 bos:{j:"pilih",t:"A class of Form 1 pupils wants to visit on a weekday and pay as little as possible. Which is the best advice based on Figure 1?",p:["Book two weeks before and pay RM3 each.","Go on Monday for free admission.","Pay RM5 each on the day.","Book the same day and use a flash."],b:0,u:"School groups must book two weeks before, and children pay RM3. The museum is closed on Mondays."}},

{n:4, tempat:"Story Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"yesterday", kadEm:"\u{1F4FB}", kadFakta:"Time words for the past: yesterday, last night, last week, two days ago, in 2010. Listen for them to know the story is in the past.",
 bosKadNama:"sequence", bosKadEm:"\u{1F522}", bosKadFakta:"Sequencing words: first, then, after that, finally. They show the ORDER of events in a story.",
 soalan:[
 {j:"pilih",t:"Listen. What did Hana read last night?",dengar:"Last night, I read a detective novel. It was so exciting that I couldn't stop reading until midnight.",p:["A detective novel","A fairy tale","A cookery book","A poetry book"],b:0,u:"Hana says: Last night, I read a detective novel."},
 {j:"pilih",t:"Listen. Why was the speaker late for school?",dengar:"I was late for school yesterday because my bus didn't come. I waited for forty minutes and then my uncle drove me.",p:["The bus did not come.","He woke up late.","It rained heavily.","He lost his bag."],b:0,u:"The speaker says: my bus didn't come."},
 {j:"pilih",t:"Listen. Who was Marie Curie?",dengar:"Marie Curie was a famous scientist. She was born in Poland in 1867, and she won two Nobel Prizes for her work.",p:["A scientist","An actor","A famous pilot","A painter"],b:0,u:"The speaker says: Marie Curie was a famous scientist."},
 {j:"pilih",t:"Listen. How many Nobel Prizes did she win?",dengar:"Marie Curie was a famous scientist. She was born in Poland in 1867, and she won two Nobel Prizes for her work.",p:["Two","One","Three","Four"],b:0,u:"The speaker says: she won two Nobel Prizes."},
 {j:"pilih",t:"Listen. What couldn't the children do at the museum?",dengar:"We visited the museum last Friday. We could see many old things, but we couldn't touch anything. The guard watched us carefully.",p:["Touch anything","See old things","Visit on Friday","Walk around"],b:0,u:"The speaker says: we couldn't touch anything."},
 {j:"pilih",t:"Listen to the story. What happened FIRST?",dengar:"Last Sunday, Ali went to the market. First, he bought some fish. Then he bought vegetables. After that, he met his teacher. Finally, he went home.",p:["He bought some fish.","He met his teacher.","He bought vegetables.","He went home."],b:0,u:"The speaker says: First, he bought some fish."},
 {j:"pilih",t:"Listen to the same story. Who did Ali meet?",dengar:"Last Sunday, Ali went to the market. First, he bought some fish. Then he bought vegetables. After that, he met his teacher. Finally, he went home.",p:["His teacher","His uncle","His friend","His neighbour"],b:0,u:"The speaker says: After that, he met his teacher."},
 {j:"isi",t:"Listen and type the missing word: They ____ the film adaptation last week.",dengar:"They watched the film adaptation last week.",b:["watched"],u:"The speaker says watched. Last week shows the past and watch is a regular verb: watched."}],
 bos:{j:"pilih",t:"Listen to the story. What was the writer's job before she became famous?",dengar:"Zahra is a famous writer now. But ten years ago, she wasn't a writer. She was a teacher in a small village school. She wrote stories at night after her lessons. One day, a company read her first book, and they loved it.",p:["A teacher","A doctor","A pilot","A painter"],b:0,u:"The speaker says: ten years ago, she wasn't a writer. She was a teacher in a small village school."}},

{n:5, tempat:"Reading Room", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"biografi",
 kadNama:"inspire", kadEm:"\u{2728}", kadFakta:"inspire = make someone want to do something good (memberi inspirasi). Example: Her story inspired many young girls.",
 bosKadNama:"never gave up", bosKadEm:"\u{1F4AA}", bosKadFakta:"Never give up = keep trying even when it is difficult. A biography often shows how a person never gave up.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Yusri became an inventor after many failures.","Yusri was born in a big and busy city.","Yusri did not enjoy his science lessons.","Yusri wrote a famous cookery book."],b:0,u:"The text tells how Yusri failed many times but finally invented a useful machine."},
 {j:"pilih",t:"According to Text 1, why did Yusri's first machines not work?",p:["He had little money for good parts.","His teacher was angry with him.","He lost all of his notes.","He did not understand science."],b:0,u:"The text says: He didn't have enough money to buy good parts."},
 {j:"pilih",t:"The word proud in the last paragraph of Text 1 means",p:["very pleased about something","very afraid of something","very tired of something","very angry about something"],b:0,u:"Proud means feeling happy and pleased about what you or someone close to you has done."},
 {j:"pilih",t:"Which sentence is TRUE according to Text 1?",p:["Yusri tried again after every failure.","Yusri gave up after the first machine.","Yusri's parents were rich.","Yusri studied abroad as a child."],b:0,u:"The text says he tried again every time (He never gave up)."},
 {j:"pilih",t:"What can we infer about Yusri from Text 1?",p:["He was patient and brave.","He was lazy and bored.","He was careless and rude.","He was shy and afraid."],b:0,u:"He kept trying even after many failures, so he was patient and determined."},
 {j:"banyak",t:"Based on Text 1, choose TWO things Yusri did when he was a boy.",p:["fixed old radios","borrowed library books","won a football match for his school","sailed a small boat on the river"],b:[0,1],u:"The text says he fixed old radios for neighbours and borrowed science books from the library."},
 {j:"pilih",t:"What did Yusri invent in the end?",p:["A water-saving machine","A solar-powered car","A new telephone","A talking robot"],b:0,u:"The text says he invented a machine to save water for farmers."},
 {j:"susun",t:"Put the events in Text 1 in the correct order.",p:["Yusri fixed radios for neighbours.","His first machines failed.","He found cheaper parts.","His water-saving machine won a prize."],b:[0,1,2,3],u:"He started with radios as a boy, then his machines failed, then he found cheaper parts, and finally he won a prize."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Never Give Up!","A Day at the Market","The History of Radios","My Favourite Teacher"],b:0,u:"The whole text shows that Yusri never gave up, so Never Give Up! is the best title."}},

{n:6, tempat:"Story Studio", sk:"Writing 4.1.3 · Grammar · narrate events in the past", lampiran:null,
 kadNama:"sequencing", kadEm:"\u{1F4D0}", kadFakta:"Use first, then, after that and finally to put your story in order. Put a comma after them: First, we went to the park.",
 bosKadNama:"past simple story", bosKadEm:"\u{1F4D6}", bosKadFakta:"A past story uses the past simple for the main events: We arrived at nine o'clock. Remember that irregular verbs change: went, saw, had, ate.",
 soalan:[
 {j:"isi",t:"There is ONE wrong word. Type the correct word: Yesterday, I go to the library.",b:["went"],u:"Yesterday shows the past, so go must change to went."},
 {j:"isi",t:"Type the correct word: She didn't ____ the book.",b:["finish","like","read","enjoy","buy"],u:"After didn't, use the base verb: She didn't finish the book."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["Did","you","enjoy","the film?"],b:[0,1,2,3],u:"Past simple question: Did + subject + base verb + object? Did you enjoy the film?"},
 {j:"pilih",t:"Which sentence about the past has NO mistakes?",p:["He wasn't a pilot, but he was a good engineer.","He weren't a pilot, but he was a good engineer.","He didn't was a pilot, but he was a good engineer.","He not was a pilot, but he was a good engineer."],b:0,u:"With he, use wasn't (was not) in the past: He wasn't a pilot."},
 {j:"pilih",t:"Choose the best word to complete the sentence: Dina woke up early. ____, she had breakfast.",p:["Then","Finally","Yesterday","Because"],b:0,u:"Then shows the next event. Finally is for the last event."},
 {j:"isi",t:"Type the past form of the verb: Aiman ____ (see) a tiger at the zoo last week.",b:["saw"],u:"See is irregular. The past simple of see is saw."},
 {j:"susun",t:"Put the sentences in order to make a short story.",p:["Last Saturday, Hani went to the park.","First, she rode her bicycle around the lake.","Then it started to rain.","Finally, she ran home and drank a hot drink."],b:[0,1,2,3],u:"Start with when and where, then use First, Then and Finally to show the order."},
 {j:"pilih",t:"Which sentence is written correctly?",p:["On Monday, Aisyah and I visited the museum.","on monday, Aisyah and i visited the museum.","On Monday, aisyah and I visited the Museum.","On monday, Aisyah and I visited the museum."],b:0,u:"Capital letters are needed for the start of a sentence, days (Monday), names (Aisyah) and the word I."}],
 bos:{j:"pilih",t:"Choose the best sentence to continue the story: First, I opened the old box. Then I saw a letter inside. ____",p:["After that, I read it and I couldn't believe my eyes.","After that, I reading it and I can't believe my eyes.","After that, I reads it and I couldn't believes my eyes.","After that, I read it and I can't believed my eyes."],b:0,u:"The story is in the past, so use the past simple: read, couldn't believe."}}
];

module.exports = {
  id:"e1b2", tingkatan:1, kod:"Unit 2 Fact or fiction?",
  tajuk:"Story Hunter", subtajuk:"English Form 1 · Unit 2 Fact or fiction?",
  spi:SPI_A2,
  ulasan:ulasanBab("books, professions and the past simple", "Fact or fiction?"),
  lampiran:{
   muzium:notis(1, "A notice at the entrance of a science museum", "Young Inventors Museum",
     ["**Opening hours:** Tuesday to Friday 10.00 a.m. - 5.00 p.m. · Saturdays 9.00 a.m. - 6.00 p.m. · **Closed on Mondays.**",
      "**Admission:** Adults RM5 · Children RM3",
      "**Now showing:** the telephone (invented by Alexander Graham Bell), the light bulb and the telescope.",
      "**Please remember:** No flash photography. Please do not touch the objects.",
      "School groups must book **two weeks before** the visit."], "Come and discover how great ideas changed the world!"),
   biografi:teks(1, "A short biography of a young inventor", "Yusri Wins a Prize",
     ["Yusri grew up in a small village. When he was a boy, he fixed old radios for his neighbours, and he borrowed science books from the library every week. He wanted to build a machine that could help farmers.",
      "His first machines didn't work. He didn't have enough money to buy good parts, and his friends laughed at him. But Yusri never gave up. He tried again after every failure and found cheaper parts at a recycling shop.",
      "Years later, he invented a machine to save water for farmers, and it won a national prize. His parents were so proud. Today, many farmers use his machine, and Yusri still visits schools to tell his story."],
     "Practice text: invented biography")
  },
  aras:ARAS
};
