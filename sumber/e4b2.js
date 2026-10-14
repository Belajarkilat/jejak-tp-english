/* Sumber kandungan — English KSSM Form 4, Unit 2 If I Were...
   DSKP Form 4 Grammar: would for imaginary situations; I wish + past simple (regrets about now);
   second conditional (part of zero, first and second conditionals). Tema Science and Technology / Careers.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { poster, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Dream Plaza", sk:"Vocabulary · ambitions, careers and opportunities", lampiran:null,
 kadNama:"ambition", kadEm:"\u{1F31F}", kadFakta:"An ambition is a strong wish to achieve something, usually a career goal. Her ambition is to become a doctor.",
 bosKadNama:"opportunity", bosKadEm:"\u{1F6AA}", bosKadFakta:"An opportunity is a chance to do something good. If you get an opportunity to study abroad, you should think carefully before you refuse it.",
 soalan:[
 {j:"pilih",gbr:"\u{1F468}\u{200D}\u{2695}\u{FE0F}",t:"Siti has wanted to become a doctor since she was little. It is her biggest ____.",p:["ambition","regret","habit","rumour"],b:0,u:"An ambition is a strong wish to achieve a goal."},
 {j:"pilih",gbr:"\u{1F393}",t:"Winning a scholarship is a great ____ to study at a good university.",p:["opportunity","accident","emergency","argument"],b:0,u:"An opportunity is a chance to do something good."},
 {j:"pilih",gbr:"\u{1F3C6}",t:"After years of practice, the young athlete finally managed to ____ her dream of winning a medal.",p:["achieve","avoid","borrow","ignore"],b:0,u:"To achieve is to succeed in reaching a goal."},
 {j:"pilih",t:"Which word describes a person who has a natural ability to do something well?",p:["talented","careless","anxious","reluctant"],b:0,u:"A talented person has a natural skill for something."},
 {j:"pilih",t:"When you feel sad about something that you did or did not do in the past, you feel",p:["regret","pride","relief","delight"],b:0,u:"Regret is a feeling of sadness about something from the past."},
 {j:"pilih",t:"Which word means 'to form a picture of something in your mind'?",p:["imagine","delay","measure","dislike"],b:0,u:"To imagine is to create a picture in your mind."},
 {j:"isi",t:"Type the missing word: She is very ____ about science. She reads about it every day and wants to become a scientist. (enthusiastic)",b:["passionate","enthusiastic","keen"],u:"Passionate, enthusiastic and keen all describe strong interest."},
 {j:"pilih",t:"Which of these is a career that helps people to stay healthy?",p:["a nurse","an architect","a pilot","a chef"],b:0,u:"A nurse takes care of patients and helps them stay healthy."}],
 bos:{j:"banyak",t:"Choose ALL the words that describe a hopeful attitude.",p:["determined","ambitious","optimistic","pessimistic","hopeless"],b:[0,1,2],u:"Determined, ambitious and optimistic show a hopeful attitude. Pessimistic and hopeless do not."}},

{n:2, tempat:"Wish Workshop", sk:"Grammar · would, I wish + past simple, second conditional", lampiran:null,
 kadNama:"second conditional", kadEm:"\u{1F52E}", kadFakta:"If + past simple, would + base verb. It talks about an imaginary or unlikely situation: If I had a million ringgit, I would build a school. With be, we often say were for all persons: If I were you, I would study harder.",
 bosKadNama:"I wish + past simple", bosKadEm:"\u{1F320}", bosKadFakta:"I wish + past simple shows a regret about the present: I wish I had more time. (but I don't). I wish I were taller. (but I'm not). For be, use were: I wish she were here.",
 soalan:[
 {j:"pilih",t:"If I won the lottery, I ____ a big house for my parents.",p:["would buy","will buy","bought","am buying"],b:0,u:"Second conditional: If + past simple, would + base verb."},
 {j:"pilih",t:"If she ____ more time, she would learn the guitar.",p:["had","has","will have","would have"],b:0,u:"The if clause of the second conditional uses the past simple: had."},
 {j:"pilih",t:"If I ____ you, I would apologise to him at once.",p:["were","am","will be","have been"],b:0,u:"In the second conditional, we often use were for all persons: If I were you."},
 {j:"pilih",t:"I wish I ____ a better singer, but I'm afraid I'm quite weak at it.",p:["were","am","will be","would be"],b:0,u:"I wish + past simple (were) shows a regret about the present."},
 {j:"pilih",t:"I wish it ____ raining. We could play football outside.",p:["wasn't","isn't","won't be","didn't"],b:0,u:"I wish + past simple: I wish it wasn't raining (it is raining now)."},
 {j:"pilih",t:"What would you do if you ____ the chance to meet a famous scientist?",p:["had","have","will have","would have"],b:0,u:"Second conditional question: What would you do if you had the chance?"},
 {j:"isi",t:"Type the missing word: If I had a robot, it ____ clean my room every day. (would)",b:["would","'d"],u:"Second conditional: would + base verb."},
 {j:"isi",t:"Type the correct form of the verb: I wish I ____ (know) the answer to this question.",b:["knew"],u:"I wish + past simple: I wish I knew."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["If I were a pilot, I would travel the world.","If I was a pilot, I will travel the world.","If I am a pilot, I would travelled the world.","If I were a pilot, I travelled the world."],b:0,u:"Second conditional: If I were ..., I would + base verb."}},

{n:3, tempat:"Careers Corner", sk:"Reading 3.1.2 · specific details in a poster", lampiran:"posterkerjaya",
 kadNama:"workshop", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"A workshop is a short course where people learn by doing. Careers workshops help students understand different jobs.",
 bosKadNama:"register", bosKadEm:"\u{1F4DD}", bosKadFakta:"To register is to put your name on a list to join an event. Some events have a limited number of places, so register early.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What is the name of the event?",p:["Careers Day","Sports Carnival","Book Fair","Open House"],b:0,u:"The poster says: CAREERS DAY 2027."},
 {j:"pilih",t:"According to Figure 1, who can attend?",p:["Form 4 and 5 students","Primary school pupils only","Teachers from other schools","Parents of Form 1 pupils"],b:0,u:"The poster says: For Form 4 and Form 5 students."},
 {j:"pilih",t:"Based on Figure 1, what can students learn in the first workshop?",p:["Becoming an engineer","How to bake fresh bread","How to play football well","How to repair a bicycle"],b:0,u:"The poster says: 9.30 a.m. Workshop 1: Engineering careers."},
 {j:"pilih",t:"What is Workshop 2 about? (Figure 1)",p:["Medicine and health","Fashion design today","Space travel and rockets","Farming and fishing"],b:0,u:"The poster says: 11.00 a.m. Workshop 2: Careers in medicine and healthcare."},
 {j:"pilih",t:"By when must students register? (Figure 1)",p:["By 10 March","By 1 March","By 20 March","By 30 April"],b:0,u:"The poster says: Register before 10 March."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that students will get to do.",p:["talk to professionals","ask questions","buy a car","sit an exam"],b:[0,1],u:"The poster says students can talk to professionals and ask questions."},
 {j:"pilih",t:"How much does it cost? (Figure 1)",p:["Nothing","RM10 each","RM20 each","RM50 each"],b:0,u:"The poster says: Free admission."},
 {j:"pilih",t:"What can we infer about the event in Figure 1?",p:["It helps students plan ahead.","It is mainly about sports days.","It is a big shopping event.","It is for retired people only."],b:0,u:"The workshops explain different careers, so the event helps students plan their future."}],
 bos:{j:"pilih",t:"Aiman is interested in becoming a doctor, but he has to be home by noon. Which workshop in Figure 1 should he attend?",p:["Workshop 2 at 11.00 a.m.","Workshop 3 at 1.00 p.m.","The closing talk at 3.00 p.m.","None of the workshops"],b:0,u:"Workshop 2 on medicine and healthcare starts at 11.00 a.m., so he can attend before noon."}},

{n:4, tempat:"Wish Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"real or imaginary?", kadEm:"\u{1F3A7}", kadFakta:"If you hear if + past simple + would, the speaker is imagining. Real situation: If it rains, I will stay at home. Imaginary: If it rained, I would stay at home.",
 bosKadNama:"wish = regret", bosKadEm:"\u{1F4AD}", bosKadFakta:"When you hear I wish + past simple, the real situation is the opposite: I wish I had a car means I don't have a car.",
 soalan:[
 {j:"pilih",t:"Listen. What would Amir do if he were rich?",dengar:"If I were rich, I would build a school in my village. I would also buy books for every child. It would be wonderful to help my community.",p:["Build a school","Buy a sports car","Travel abroad","Open a restaurant"],b:0,u:"Amir says: If I were rich, I would build a school in my village."},
 {j:"pilih",t:"Listen. What would Amir also do?",dengar:"If I were rich, I would build a school in my village. I would also buy books for every child. It would be wonderful to help my community.",p:["Buy books for children","Buy a big new house","Stop working for good","Move to a big city"],b:0,u:"Amir says: I would also buy books for every child."},
 {j:"pilih",t:"Listen. What does Nina wish?",dengar:"I wish I could play the piano. My friend plays beautifully, and I really envy her. If I had the time, I would take lessons.",p:["She could play it.","She had a piano at home.","She had many more friends.","She could sing very well."],b:0,u:"Nina says: I wish I could play the piano."},
 {j:"pilih",t:"Listen. Why can't Nina take lessons?",dengar:"I wish I could play the piano. My friend plays beautifully, and I really envy her. If I had the time, I would take lessons.",p:["She has no free time.","She has no good ears.","She lives too far away.","She has a broken hand."],b:0,u:"Nina says: If I had the time, I would take lessons."},
 {j:"pilih",t:"Listen to the advice. What would the speaker do in the listener's place?",dengar:"If I were you, I would ask for help. It isn't a sign of weakness. Many people would feel relieved if they talked about their worries.",p:["Ask for help","Give up","Work alone","Ignore the problem"],b:0,u:"The teacher says: If I were you, I would ask for help."},
 {j:"pilih",t:"Listen. What does the speaker believe about asking for help?",dengar:"If I were you, I would ask for help. It isn't a sign of weakness. Many people would feel relieved if they talked about their worries.",p:["It is not a weakness.","It is a waste of time.","It is embarrassing.","It is impossible."],b:0,u:"The speaker says: It isn't a sign of weakness."},
 {j:"pilih",t:"Listen. What is true about the speaker?",dengar:"I wish I lived closer to the sea. I'm tired of the noise and the traffic in the city. If I lived by the beach, I would walk along it every morning.",p:["He lives in the city.","He lives by the sea.","He hates walking.","He has a boat."],b:0,u:"He says he wishes he lived closer to the sea, so he lives in the city now."},
 {j:"isi",t:"Listen and type the missing word: If I ____ the chance, I would study abroad.",dengar:"If I had the chance, I would study abroad.",b:["had"],u:"The speaker says had. Second conditional: If + past simple."}],
 bos:{j:"pilih",t:"Listen to the speaker. What is the main idea?",dengar:"We often spend time wishing for a different life, but dreams do not come true by themselves. If we took small steps every day, we would be surprised by how far we could go. So instead of saying I wish, let us say I will.",p:["Act instead of only wishing.","Dreams always come true for all.","Wishing is better than working.","Nobody can ever change their life."],b:0,u:"The speaker says: instead of saying I wish, let us say I will."}},

{n:5, tempat:"Aspiration Alley", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"artikelcita",
 kadNama:"inspire", kadEm:"\u{2728}", kadFakta:"To inspire is to make someone feel that they want to do something good. A role model inspires others by example.",
 bosKadNama:"overcome", bosKadEm:"\u{1F4AA}", bosKadFakta:"To overcome is to succeed in dealing with a problem. People who overcome difficulties often become strong and confident.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A young scientist followed her dream.","A scientist lost her job last year.","A school closed its science laboratory.","A student gave up studying for good."],b:0,u:"The article tells how a young scientist overcame difficulties to follow her dream."},
 {j:"pilih",t:"According to Text 1, why was it hard for Farah to study? (Text 1)",p:["Her family had little money.","She had no interest in science.","Her school was too close to home.","She was always sleepy in class."],b:0,u:"The text says her family couldn't afford many books."},
 {j:"pilih",t:"How did Farah solve this problem? (Text 1)",p:["She used library books.","She stopped studying for a while.","She bought brand new books.","She asked the principal to pay."],b:0,u:"The text says she borrowed books from the library every week."},
 {j:"pilih",t:"The word overcome in Text 1 means",p:["deal with successfully","run away from it","ignore it completely","complain about it a lot"],b:0,u:"To overcome a difficulty is to succeed in dealing with it."},
 {j:"pilih",t:"What would Farah do if she had more money, according to Text 1?",p:["Build a free science hub","Buy a luxury sports car","Stop working altogether","Travel only for fun"],b:0,u:"She says: If I had more money, I would build a free science centre for children."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that helped Farah to succeed.",p:["her determination","her teachers' support","luck alone","expensive books"],b:[0,1],u:"The text says she succeeded through determination and with her teachers' support."},
 {j:"pilih",t:"What can we infer about Farah? (Text 1)",p:["She wants to help others.","She is selfish.","She dislikes science.","She wishes to be famous only."],b:0,u:"She wants to build a free science centre, so she wants to help others."},
 {j:"pilih",t:"Which sentence from Text 1 expresses a regret?",p:["I wish I had started earlier.","She won a big scholarship.","She works in a laboratory now.","Her teachers were very kind."],b:0,u:"I wish I had started earlier expresses a regret."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Dreams Need Determination","A Day in the Science Lab","The High Cost of Books","Why Scientists Are Rich"],b:0,u:"The text shows that Farah's dream came true through determination."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write about dreams and imaginary situations", lampiran:null,
 kadNama:"dream paragraph", kadEm:"\u{1F4DD}", kadFakta:"In a dream paragraph, use the second conditional for imaginary situations and I wish for regrets: If I had a robot, I would ... I wish I could ...",
 bosKadNama:"were or was?", bosKadEm:"\u{2753}", bosKadFakta:"In formal English, we use were for all persons in the second conditional: If I were you ... In informal speech, was is also heard, but were is safer in exams.",
 soalan:[
 {j:"isi",t:"Type the missing word: If I ____ a bird, I would fly over the mountains.",b:["were"],u:"Second conditional: If I were + a noun."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: If I will have a robot, it would help me.",b:["had"],u:"The if clause uses the past simple: If I had a robot."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["I","wish","I","could","speak","French."],b:[0,1,2,3,4,5],u:"I wish + subject + could + base verb."},
 {j:"pilih",t:"Which sentence is correct?",p:["If she studied harder, she would pass the exam.","If she studies harder, she would passes the exam.","If she studied harder, she will pass the exam.","If she would study harder, she passed the exam."],b:0,u:"Second conditional: If + past simple (studied), would + base verb (pass)."},
 {j:"pilih",t:"Which sentence expresses a regret?",p:["I wish I knew how to swim.","I will learn how to swim.","I know how to swim well.","I'm learning how to swim."],b:0,u:"I wish + past simple shows that you do not know how to swim now."},
 {j:"pilih",t:"Which sentence is written correctly?",p:["What would you do if you saw a ghost?","What will you do if you saw a ghost?","What would you do if you see a ghost?","What you would do if you saw a ghost?"],b:0,u:"Second conditional question: What would you do if you saw ...?"},
 {j:"susun",t:"Put the sentences in order to make a short dream paragraph.",p:["I have a dream about the future.","If I became a doctor, I would work in a village clinic.","I would help people who cannot afford medicine.","I wish I could start now."],b:[0,1,2,3],u:"State your dream, describe what you would do, add the purpose, and end with a wish."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If I had a million ringgit, I would build a hospital.","If I had a million ringgit I would, build a hospital.","if I had a million ringgit, I would build a hospital","If I had a million ringgit; I would build a hospital."],b:0,u:"A comma goes after the if clause, and the sentence starts with a capital letter."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: I'm not satisfied with my English. ____",p:["I wish I could speak it more fluently, and I would practise every day if I had a partner.","I wish I can speak it more fluent, and I will practise every day if I had a partner.","I wish I could speaking it more fluently, and I would practising every day.","I wish I could speak it more fluently, and I would to practise every day if I have a partner."],b:0,u:"I wish + could, and would + base verb in the main clause with if + past simple."}}
];

module.exports = {
  id:"e4b2", tingkatan:4, kod:"Unit 2 If I Were...",
  tajuk:"Dream Builders", subtajuk:"English Form 4 · Unit 2 If I Were...",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("dreams, careers, wishes and the second conditional", "If I Were..."),
  lampiran:{
   posterkerjaya:poster(1, "A poster for a careers event", {ikon:"\u{1F4BC}", judul:"CAREERS DAY 2027", sub:"For Form 4 and Form 5 students. Free admission.",
     butir:[
      ["\u{1F4C5}","**Saturday**, 8.30 a.m. - 3.30 p.m., School hall"],
      ["\u{2699}\u{FE0F}","**9.30 a.m.** Workshop 1: Engineering careers"],
      ["\u{1FA7A}","**11.00 a.m.** Workshop 2: Careers in medicine and healthcare"],
      ["\u{1F4DD}","Talk to professionals and ask questions. Register before **10 March**."]]}),
   artikelcita:teks(1, "A newspaper article about a young scientist", "Dreams Need Determination",
     ["Farah comes from a small village, and her family couldn't afford many books. But she was determined to become a scientist, so she borrowed books from the library every week and studied late at night.",
      "With the support of her teachers, she won a scholarship to a top university. 'I wish I had started earlier,' she says, 'but I'm grateful for every chance that I received.'",
      "Today, she works in a laboratory, and she wants to help others. 'If I had more money, I would build a free science centre for children,' she says."],
     "Practice text: invented newspaper article")
  },
  aras:ARAS
};
