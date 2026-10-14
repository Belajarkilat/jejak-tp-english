/* Sumber kandungan — English KSSM Form 1, Unit 1 What do you like?
   Fail ini disunting tangan. Jalankan `node bina.js e1b1` untuk menyemaknya.

   DSKP KSSM Bahasa Inggeris Tingkatan 1 (BPK 2017), "Form 1 Textbook scope and sequence":
   Tema People and Culture, Unit 1. Tatabahasa: present simple, present continuous, time words.
   Kosa kata: free-time activities, skills and abilities.
   Semua nama, sekolah dan acara dalam rangsangan ialah rekaan untuk latihan. */
const { poster, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Hobby Street", sk:"Vocabulary · free-time activities, skills and abilities", lampiran:null,
 kadNama:"hang out", kadEm:"\u{1F6F9}", kadFakta:"hang out with friends = spend free time with friends (lepak bersama kawan). Example: We hang out at the park after school.",
 bosKadNama:"play an instrument", bosKadEm:"\u{1F3B8}", bosKadFakta:"play a musical instrument = main alat muzik. Example: Danial can play the guitar and the keyboard.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3D0}",t:"Look at the picture. What free-time activity is this?",p:["play volleyball","play computer games","do water sports","go for a run"],b:0,u:"The picture shows a volleyball. We say play volleyball (main bola tampar)."},
 {j:"pilih",gbr:"\u{1F3A7}",t:"Look at the picture. Which activity matches it?",p:["listen to music","surf the internet","go shopping","chat online"],b:0,u:"Headphones are for listening. We say listen to music (dengar muzik)."},
 {j:"pilih",gbr:"\u{1F6CD}\u{FE0F}",t:"What do we call this free-time activity?",p:["go shopping","go to the gym","go to a café","hang out"],b:0,u:"Shopping bags show that someone is buying things. We say go shopping (pergi membeli-belah)."},
 {j:"pilih",gbr:"\u{1F3C3}",t:"The boy in the picture is exercising. What is he doing?",p:["going for a run","riding a motorbike","doing tricks","baking a cake"],b:0,u:"The boy is running. We say go for a run (pergi berlari)."},
 {j:"pilih",gbr:"\u{1F382}",t:"Which skill do you need to make this?",p:["bake a cake","tell jokes","write songs","paint"],b:0,u:"A cake is made in an oven. We say bake a cake (bakar kek). Paint is for pictures, not food."},
 {j:"pilih",gbr:"\u{1F3CD}\u{FE0F}",t:"My uncle has one of these. What can he do?",p:["ride a motorbike","drive a car","do water sports","play an instrument"],b:0,u:"We ride a motorbike or a bicycle, but we drive a car."},
 {j:"isi",gbr:"\u{1F3A8}",t:"Type the missing word: I like to ____ pictures of flowers in my free time.",b:["paint","draw"],u:"We paint or draw pictures (melukis). Both words are correct here."},
 {j:"pilih",t:"Which free-time activity do you do on the internet?",p:["chat online","go for a run","do water sports","bake a birthday cake"],b:0,u:"Chat online means talking to people using an app or website (bersembang dalam talian)."}],
 bos:{j:"banyak",t:"Choose ALL the activities that you can do at home.",p:["watch DVDs","listen to music","bake a cake","go to a concert","do water sports"],b:[0,1,2],u:"You can watch DVDs, listen to music and bake a cake at home. A concert and water sports happen outside the home."}},

{n:2, tempat:"Grammar Garage", sk:"Grammar · present simple, present continuous, time words", lampiran:null,
 kadNama:"usually", kadEm:"\u{1F501}", kadFakta:"always, usually, often, sometimes, never go BEFORE the main verb: I usually play badminton. They go AFTER am/is/are: She is always happy.",
 bosKadNama:"at the moment", bosKadEm:"\u{23F1}\u{FE0F}", bosKadFakta:"now, at the moment, today and tonight often go with the present continuous: We are watching a film at the moment.",
 soalan:[
 {j:"pilih",t:"Aina ____ volleyball every Saturday.",p:["plays","play","playing","is play"],b:0,u:"Every Saturday shows a habit, so we use the present simple. With he, she or a name, add -s: Aina plays."},
 {j:"pilih",t:"They ____ study art on Mondays.",p:["don't","doesn't","isn't","aren't"],b:0,u:"The negative of the present simple with I, we, you and they is don't + verb: They don't study art."},
 {j:"pilih",t:"____ your brother like to sing?",p:["Does","Do","Is","Are"],b:0,u:"Questions in the present simple with he or she start with Does: Does your brother like to sing?"},
 {j:"pilih",t:"Look! The boys ____ in the rain.",p:["are dancing","dance","dances","is dancing"],b:0,u:"Look! shows the action is happening now, so we use the present continuous. The boys is plural, so we use are dancing."},
 {j:"pilih",t:"We ____ to the radio at the moment.",p:["are listening","listen","listens","is listening"],b:0,u:"At the moment means now, so we use am/is/are + verb-ing. With we, use are: We are listening."},
 {j:"isi",t:"Type the correct form of the verb: Ravi usually ____ (watch) films at the weekend.",b:["watches"],u:"Usually shows a habit, so use the present simple. Verbs ending in -ch take -es with he or she: Ravi watches."},
 {j:"pilih",t:"Which time word usually goes with the present continuous?",p:["at the moment","every day","usually","once a week"],b:0,u:"At the moment talks about now. Every day, usually and once a week talk about habits, so they go with the present simple."},
 {j:"isi",t:"Make the sentence negative. Type the missing words: Mei Ling is cooking dinner. → Mei Ling ____ cooking dinner.",b:["isn't","is not"],u:"The negative of is + verb-ing is isn't (is not) + verb-ing: Mei Ling isn't cooking dinner."}],
 bos:{j:"pilih",t:"Choose the correct sentence.",p:["My sister often goes to the gym.","My sister often going to the gym.","My sister is often go to the gym.","My sister often go to the gym."],b:0,u:"Often shows a habit, so use the present simple. With my sister (she), the verb takes -es: goes."}},

{n:3, tempat:"Club Fair", sk:"Reading 3.1.2 · understand specific details in a poster", lampiran:"klub",
 kadNama:"sign up", kadEm:"\u{270D}\u{FE0F}", kadFakta:"sign up = register to join something (mendaftar). Example: I signed up for the Drama Club.",
 bosKadNama:"weekday", bosKadEm:"\u{1F4C5}", bosKadFakta:"weekdays = Monday to Friday. The weekend = Saturday and Sunday.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. When does the Baking Club meet?",p:["On Wednesdays","On Mondays","On Fridays","On Tuesdays"],b:0,u:"The poster says Baking Club: Wednesdays, 2.30 p.m."},
 {j:"pilih",t:"According to Figure 1, where does the Volleyball Club meet?",p:["In the school hall","In the library","In the music room","In the Home Science Lab"],b:0,u:"The Volleyball Club meets in the school hall on Tuesdays and Thursdays."},
 {j:"pilih",t:"Based on Figure 1, which club meets twice a week?",p:["Volleyball Club","Drama Club","Music Club","Baking Club"],b:0,u:"The Volleyball Club meets on Tuesdays AND Thursdays, which is two times (twice) a week."},
 {j:"pilih",t:"Haziq wants to learn to play the keyboard. Which club in Figure 1 should he join?",p:["Music Club","Drama Club","Baking Club","Volleyball Club"],b:0,u:"The Music Club says: Learn to play the guitar or keyboard."},
 {j:"pilih",t:"Look at Figure 1. What must Baking Club members bring?",p:["Their own apron","A guitar","Some flour and eggs","A volleyball"],b:0,u:"The poster says: Bring your own apron."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that Drama Club members do.",p:["act on stage","tell jokes","bake cakes","play volleyball"],b:[0,1],u:"The Drama Club says: Act, sing and tell jokes on stage!"},
 {j:"pilih",t:"Figure 1 says pupils must sign up before a date. What is that date?",p:["20 January","2 January","20 June","12 January"],b:0,u:"The bottom of the poster says: Sign up at the counter before 20 January."},
 {j:"isi",t:"Look at Figure 1. How much does it cost Form 1 pupils to join a club? Type ONE word.",b:["free","nothing","zero","0","RM0"],u:"The poster says: Free for all Form 1 pupils. So it costs nothing."}],
 bos:{j:"pilih",t:"Dina is free only after 4.00 p.m. on weekdays. Which club in Figure 1 can she join?",p:["Volleyball Club","Music Club","Drama Club","Baking Club"],b:0,u:"Only the Volleyball Club starts after 4.00 p.m. (4.30 p.m.). The other clubs start at 3.00 p.m. or earlier."}},

{n:4, tempat:"Radio Room", sk:"Listening 1.2.1 · understand main ideas and specific details in short talks", lampiran:null,
 kadNama:"once a month", kadEm:"\u{1F4C6}", kadFakta:"once = one time, twice = two times. once a month = sebulan sekali. Example: We go to the cinema once a month.",
 bosKadNama:"voice message", bosKadEm:"\u{1F399}\u{FE0F}", bosKadFakta:"A voice message is a short recording you send on a phone app. Listen for WHO, WHERE, WHAT and WHEN.",
 soalan:[
 {j:"pilih",t:"Listen. What does Farah usually do in her free time?",dengar:"Hi, I'm Farah. In my free time, I usually go for a run in the park. I never play computer games.",p:["She goes for a run.","She plays computer games.","She goes shopping.","She watches DVDs."],b:0,u:"Farah says: I usually go for a run in the park. She never plays computer games."},
 {j:"pilih",t:"Listen to the conversation. Where is Daniel now?",dengar:"Excuse me, is Daniel at home? Sorry, he isn't. He's playing football with his cousins at the field.",p:["At the field","At home","At the gym","At his cousin's house"],b:0,u:"The speaker says: He's playing football with his cousins at the field."},
 {j:"pilih",t:"Listen. What can't the speaker's brother do?",dengar:"My brother can speak three languages: Malay, English and Tamil. But he can't sing at all!",p:["sing","speak Tamil","speak English","speak Malay"],b:0,u:"He can speak three languages, but he can't sing at all."},
 {j:"pilih",t:"Listen. How often do they go to the cinema?",dengar:"We go to the cinema once a month, usually on the last Saturday.",p:["Once a month","Every Saturday","Once a week","Twice a month"],b:0,u:"The speaker says: once a month, usually on the last Saturday."},
 {j:"pilih",t:"Listen to the teacher. What is Group B doing?",dengar:"Hello everyone! Today our class is having a cooking competition. Group A is baking a cake, and Group B is making fried noodles.",p:["Making fried noodles","Baking a cake","Watching a cooking show","Washing the dishes"],b:0,u:"Group A is baking a cake. Group B is making fried noodles."},
 {j:"pilih",t:"Listen. Why can't Amir go to the mall?",dengar:"Siti: Do you want to hang out at the mall on Sunday? Amir: Sorry, I can't. I visit my grandmother every Sunday.",p:["He visits his grandmother.","He has a lot of homework.","He doesn't like shopping.","He goes to the gym."],b:0,u:"Amir says: I visit my grandmother every Sunday."},
 {j:"pilih",t:"Listen to the announcement. Where should the swimming club members go?",dengar:"Attention, please. The swimming club is not meeting at the pool today because it is raining. Please go to the library instead.",p:["To the library","To the swimming pool","Straight home","To the school hall"],b:0,u:"The announcement says: Please go to the library instead. Instead means in place of the pool."},
 {j:"isi",t:"Listen and type the missing word: My sister ____ songs on her guitar every evening.",dengar:"My sister writes songs on her guitar every evening.",b:["writes"],u:"The speaker says writes. Every evening shows a habit, and my sister (she) takes -s: writes."}],
 bos:{j:"pilih",t:"Listen to the voice message. What does Jun ask Kai to bring?",dengar:"Hi Kai, it's Jun. I'm at the café near the school now. Lina is here too. We're doing our English homework together. Can you come at four? Bring your dictionary, please.",p:["His dictionary","His English homework","Some money for food","His laptop"],b:0,u:"At the end, Jun says: Bring your dictionary, please. They are doing homework, but Jun does not ask Kai to bring his homework."}},

{n:5, tempat:"Blog Bay", sk:"Reading 3.1.1, 3.1.3 · main ideas, inference, meaning from context", lampiran:"blog",
 kadNama:"terrible", kadEm:"\u{1F616}", kadFakta:"terrible = very bad (sangat teruk). Opposite: wonderful. Example: The traffic was terrible this morning.",
 bosKadNama:"main idea", bosKadEm:"\u{1F4A1}", bosKadFakta:"The main idea is what the WHOLE text is about, not just one detail. Read the title and the first sentence of each paragraph.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Nurul has many activities every week.","Nurul is the best badminton player.","Nurul wants to open her own bakery.","Nurul does not like her little brother."],b:0,u:"Each paragraph talks about a different activity in Nurul's week, so the whole text is about how busy she is."},
 {j:"pilih",t:"In Text 1, Nurul writes: People think I'm quiet, but I'm always busy. What does she mean?",p:["She is busier than people think.","She talks a lot to everyone.","She dislikes busy people.","She is always tired after school."],b:0,u:"But shows a contrast: people think she is quiet, but in fact she does a lot of things."},
 {j:"pilih",t:"According to Text 1, how often does Nurul have badminton practice?",p:["Twice a week","Once a week","Every day","Three times a week"],b:0,u:"She has practice on Mondays and Wednesdays, which is two times (twice) a week."},
 {j:"pilih",t:"The word terrible in paragraph 2 of Text 1 means",p:["very bad","beautiful","expensive","very sweet"],b:0,u:"At first her cakes looked terrible, but now customers ask for them. So terrible means very bad."},
 {j:"pilih",t:"Why do customers now ask for Nurul's cupcakes? (Text 1)",p:["Her cakes look good now.","Her cupcakes are very cheap.","Her aunt sells only cupcakes.","Nurul is famous on television."],b:0,u:"At first her cakes looked terrible, but her aunt is teaching her. Now customers ask for her cupcakes, so we can infer that her cakes look good now."},
 {j:"banyak",t:"Based on Text 1, choose TWO things Nurul does at the weekend.",p:["reads comics","chats online with her cousin","has badminton practice","helps at the bakery"],b:[0,1],u:"At the weekend she reads comics, chats online with her cousin in Sabah and sometimes goes to the night market."},
 {j:"pilih",t:"Look at Text 1. What is Nurul's little brother doing while she writes the post?",p:["Watching cartoons","Reading comics","Using the laptop","Doing his homework"],b:0,u:"Nurul writes: my little brother is watching cartoons next to me."},
 {j:"susun",t:"Put Nurul's activities in Text 1 in order, from the start of the week to the weekend.",p:["badminton practice","helping at the bakery","relaxing and reading comics"],b:[0,1,2],u:"Badminton is on Mondays and Wednesdays, the bakery is on Thursdays, and she relaxes at the weekend."}],
 bos:{j:"pilih",t:"Which words best describe Nurul in Text 1?",p:["busy and cheerful","lazy and easily bored","rude and very noisy","quiet and rather lonely"],b:0,u:"She has activities almost every day and never misses practice (busy). She says It's noisy, but I love it! (cheerful)."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.2.1 · Grammar · correct errors and build sentences", lampiran:null,
 kadNama:"-s for he/she", kadEm:"\u{1F50E}", kadFakta:"In the present simple, he, she, it and names take -s: He plays. She watches. My dad goes. Check this first when you edit!",
 bosKadNama:"capital letters", bosKadEm:"\u{1F520}", bosKadFakta:"Use capital letters for the start of a sentence, I, names, days and months: On Friday, Siti and I go to the gym.",
 soalan:[
 {j:"isi",t:"There is ONE wrong word in this sentence. Type the correct word: My father go to the gym every morning.",b:["goes"],u:"My father = he, and every morning shows a habit. So we use the present simple with -es: goes."},
 {j:"isi",t:"Correct the mistake. Type the correct verb: Listen! The baby cry in the next room. → The baby ____ in the next room.",b:["is crying","'s crying"],u:"Listen! shows it is happening now, so we use the present continuous: The baby is crying."},
 {j:"susun",t:"Put the words in order to make a correct question.",p:["Does","your sister","play","the piano?"],b:[0,1,2,3],u:"Present simple question: Does + subject + verb + object? Does your sister play the piano?"},
 {j:"pilih",t:"Your friend says, I'm going to a concert tonight! What is the best reply?",p:["Cool! Have fun.","Yuk!","Many happy returns!","Nice to meet you."],b:0,u:"Cool! Have fun. shows you are happy for your friend. Many happy returns! is for birthdays and Nice to meet you. is for meeting someone new."},
 {j:"pilih",t:"Which sentence is correct?",p:["I usually hang out with my friends.","I am usually hang out with my friends.","I usually hanging out with my friends.","I usual hang out with my friends."],b:0,u:"Usually goes before the main verb, and we do not add am or -ing for a habit: I usually hang out with my friends."},
 {j:"isi",t:"Change the sentence so it talks about now. They play computer games. → They ____ computer games now.",b:["are playing","'re playing"],u:"Now needs the present continuous: are + playing."},
 {j:"pilih",t:"Which sentence uses capital letters correctly?",p:["Siti and I go to the gym on Fridays.","siti and I go to the gym on fridays.","Siti and i go to the Gym on Fridays.","Siti And I go to the gym on fridays."],b:0,u:"Names (Siti), the word I and days (Fridays) need capital letters. Gym is not a name, so it is small."},
 {j:"susun",t:"Put the sentences in order to make a short paragraph.",p:["My name is Arif and I love music.","I play the guitar every evening.","At the moment, I am learning a new song.","I want to sing it at the school concert next month."],b:[0,1,2,3],u:"First introduce yourself, then the habit, then what is happening now, and finally the plan. It refers to the new song, so that sentence comes last."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the message: Hi Zara! ____ Do you want to come with me?",p:["I'm going for a run in the park this evening.","I goes for a run in the park this evening.","I am go for a run in the park this evening.","I going for a run in the park every evening."],b:0,u:"A plan for this evening uses the present continuous: I'm going. The other sentences have grammar errors."}}
];

module.exports = {
  id:"e1b1", tingkatan:1, kod:"Unit 1 What do you like?",
  tajuk:"Hobby Hunt", subtajuk:"English Form 1 · Unit 1 What do you like?",
  spi:SPI_A2,
  ulasan:ulasanBab("free-time activities, skills and the present simple and present continuous", "What do you like?"),
  lampiran:{
   klub:poster(1, "A poster for a school club fair", {ikon:"\u{1F3AA}", judul:"CLUB DAY 2027", sub:"SMK Taman Bestari · Join a club and make new friends!",
     butir:[
      ["\u{1F3B8}","**Music Club**: Mondays, 3.00 p.m., Music Room. Learn to play the guitar or keyboard."],
      ["\u{1F370}","**Baking Club**: Wednesdays, 2.30 p.m., Home Science Lab. Bring your own apron."],
      ["\u{1F3D0}","**Volleyball Club**: Tuesdays and Thursdays, 4.30 p.m., school hall."],
      ["\u{1F3AD}","**Drama Club**: Fridays, 2.45 p.m., library. Act, sing and tell jokes on stage!"]],
     kaki:"Sign up at the counter before **20 January**. Free for all Form 1 pupils."}),
   blog:teks(1, "A blog post by a Form 1 pupil", "My Busy Week",
     ["Hi! I'm Nurul and I'm thirteen. People think I'm quiet, but I'm always busy. On Mondays and Wednesdays, I have badminton practice after school. I'm not the best player in the team, but I never miss a practice.",
      "On Thursdays, I help my aunt at her bakery. She is teaching me how to decorate cakes. At first, my cakes looked terrible! Now customers sometimes ask for 'Nurul's cupcakes'.",
      "At the weekend, I usually relax. I read comics, chat online with my cousin in Sabah and sometimes go to the night market with my family. Right now, I'm writing this post on my mum's laptop while my little brother is watching cartoons next to me. It's noisy, but I love it!"],
     "Practice text: invented blog post")
  },
  aras:ARAS
};
