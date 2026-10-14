/* Sumber kandungan — English KSSM Form 5, Unit 1 What If I Had...?
   Tatabahasa: third conditional, I wish / If only + past perfect (regrets about the past), recycled second conditional.
   Tema People and Culture. DSKP Tingkatan 5 belum dijumpai; bab ini mengikut jujukan CEFR B1 (Tingkatan 3 dan 4) dan
   perlu disahkan guru. Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { poster, sembang, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Regret Road", sk:"Vocabulary · decisions, regrets and consequences", lampiran:null,
 kadNama:"regret", kadEm:"\u{1F614}", kadFakta:"A regret is a feeling of sadness about something that you did or did not do. We often say: I regret not studying harder. I wish I had listened to my teacher.",
 bosKadNama:"consequence", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"A consequence is a result of an action. Good decisions have positive consequences, and careless decisions can have serious consequences.",
 soalan:[
 {j:"pilih",gbr:"\u{1F614}",t:"She felt deep ____ about missing the opportunity to study abroad.",p:["regret","relief","pride","curiosity"],b:0,u:"Regret is sadness about something from the past."},
 {j:"pilih",gbr:"\u{1F4DA}",t:"He didn't revise for the exam, and the ____ was a very low mark.",p:["consequence","coincidence","convenience","compliment"],b:0,u:"A consequence is the result of an action."},
 {j:"pilih",gbr:"\u{1F6A6}",t:"Ignoring the warning signs was a very ____ decision.",p:["careless","wise","thoughtful","generous"],b:0,u:"Careless means not paying enough attention."},
 {j:"pilih",t:"Which word means 'to take a chance, even though the result could be bad'?",p:["risk","refuse","rescue","remind"],b:0,u:"To take a risk is to do something that might have a bad result."},
 {j:"pilih",t:"When you think carefully about the good and bad points before you decide, you ____ your options.",p:["consider","ignore","delay","forget"],b:0,u:"To consider is to think carefully about something."},
 {j:"pilih",t:"Which word describes someone who makes good choices based on experience?",p:["sensible","reckless","anxious","selfish"],b:0,u:"Sensible means having good judgement."},
 {j:"isi",t:"Type the missing word: If you break the rules, there will be serious ____. (results)",b:["consequences"],u:"Consequences are the results of an action."},
 {j:"pilih",t:"Which word means 'a chance to do something good'?",p:["opportunity","argument","crisis","limitation"],b:0,u:"An opportunity is a chance to do something good."}],
 bos:{j:"banyak",t:"Choose ALL the words that describe a person who acts without thinking about the result.",p:["reckless","careless","impulsive","sensible","cautious"],b:[0,1,2],u:"Reckless, careless and impulsive describe someone who acts without thinking. Sensible and cautious are the opposite."}},

{n:2, tempat:"Third Conditional Tower", sk:"Grammar · third conditional and wishes about the past", lampiran:null,
 kadNama:"third conditional", kadEm:"\u{23EE}\u{FE0F}", kadFakta:"If + past perfect, would have + past participle. It talks about an unreal situation in the past: If I had studied harder, I would have passed. (but I didn't study and I didn't pass).",
 bosKadNama:"wish + past perfect", bosKadEm:"\u{1F4AD}", bosKadFakta:"I wish / If only + past perfect expresses regret about the past: I wish I had listened to my parents. If only we had left earlier, we wouldn't have missed the train.",
 soalan:[
 {j:"pilih",t:"If I ____ the alarm, I would have caught the bus.",p:["had heard","heard","would hear","have heard"],b:0,u:"Third conditional: if + past perfect (had heard)."},
 {j:"pilih",t:"If she had studied, she ____ the exam.",p:["would have passed","will certainly pass","would surely pass","had already passed"],b:0,u:"Third conditional result clause: would have + past participle."},
 {j:"pilih",t:"We wouldn't have got wet if we ____ an umbrella.",p:["had taken","took","would take","have taken"],b:0,u:"Third conditional: if + past perfect."},
 {j:"pilih",t:"I wish I ____ more careful with my money last year.",p:["had been","was","would be","have been"],b:0,u:"I wish + past perfect for a regret about the past: had been."},
 {j:"pilih",t:"If only they ____ the instructions, they wouldn't have made so many mistakes.",p:["had read","read","would read","have read"],b:0,u:"If only + past perfect: regret about the past."},
 {j:"pilih",t:"What would you have done if you ____ the match?",p:["had lost","lost","would lose","have lost"],b:0,u:"Third conditional question: if + past perfect (had lost)."},
 {j:"isi",t:"Type the correct form of the verb: If he had known the truth, he ____ (not / lie).",b:["wouldn't have lied","would not have lied"],u:"Third conditional result: wouldn't have + past participle."},
 {j:"isi",t:"Type the missing word: I wish I ____ listened to my teacher. (past perfect)",b:["had"],u:"I wish + had + past participle."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["If I had left earlier, I wouldn't have been late.","If I would have left earlier, I wouldn't be late.","If I had left earlier, I wouldn't had been late.","If I left earlier, I wouldn't have been late."],b:0,u:"Third conditional: if + had + past participle, would not have + past participle."}},

{n:3, tempat:"Memory Board", sk:"Reading 3.1.2 · specific details in a chat", lampiran:"sembangpenyesalan",
 kadNama:"missed", kadEm:"\u{1F68C}", kadFakta:"To miss something is to fail to catch, see or attend it. If you miss a bus, you fail to catch it. You can also miss a person, which means feeling sad because they are not with you.",
 bosKadNama:"apologise", bosKadEm:"\u{1F64F}", bosKadFakta:"To apologise is to say that you are sorry. We apologise for something: I apologise for being late.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Why was Hafiz late for the exam?",p:["He missed the bus.","He lost his pen.","He forgot the date.","He was ill."],b:0,u:"Hafiz writes: I missed the bus, so I arrived late."},
 {j:"pilih",t:"According to Figure 1, what time did the exam start?",p:["At 8.30 a.m.","At 9.30 a.m.","At 10.30 a.m.","At 7.30 a.m."],b:0,u:"Nisa writes: The exam started at 8.30."},
 {j:"pilih",t:"What does Nisa say Hafiz should have done? (Figure 1)",p:["Left home earlier","Studied more","Phoned the teacher","Bought a new pen"],b:0,u:"Nisa writes: If you had left home earlier, you would have caught the early bus."},
 {j:"pilih",t:"What did Hafiz do after he arrived? (Figure 1)",p:["He told the teacher.","He went straight home.","He asked for an extra day.","He skipped the whole exam."],b:0,u:"Hafiz writes: I explained to the teacher, and she let me in."},
 {j:"pilih",t:"How much time did Hafiz lose? (Figure 1)",p:["Twenty minutes","Two hours","One minute","A whole day"],b:0,u:"Hafiz writes: I lost twenty minutes."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that Hafiz regrets.",p:["Not leaving earlier","Not setting an alarm","Not studying","Not eating breakfast"],b:[0,1],u:"Hafiz says: I wish I had left earlier, and I wish I had set the alarm."},
 {j:"pilih",t:"What advice does Nisa give? (Figure 1)",p:["Plan the trip the night before.","Skip breakfast on exam days.","Stay up all night to revise.","Never take the early bus again."],b:0,u:"Nisa writes: Next time, plan your journey the night before."},
 {j:"pilih",t:"What can we infer about Hafiz? (Figure 1)",p:["He has learnt from it.","He doesn't care about exams at all.","He will do the same thing again.","He blames all of his friends."],b:0,u:"He admits his mistakes and says what he would do differently, so he has learnt from the experience."}],
 bos:{j:"pilih",t:"Which sentence from Figure 1 is a third conditional?",p:["If you had left earlier, you would have caught it.","If I leave now, I will arrive on time for it.","I wish I could drive a car to the school.","Next time, plan your journey the night before."],b:0,u:"If + past perfect, would have + past participle is a third conditional."}},

{n:4, tempat:"Regret Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"hear the regret", kadEm:"\u{1F3A7}", kadFakta:"When you hear I wish + had / If only + had / if + had ... would have, the speaker is talking about the past and feels regret. The real situation is the opposite of what the speaker says.",
 bosKadNama:"opposite meaning", bosKadEm:"\u{1F500}", bosKadFakta:"If I had studied, I would have passed. = I didn't study, so I didn't pass. Listen carefully to the real situation behind the sentence.",
 soalan:[
 {j:"pilih",t:"Listen. What did Amir do?",dengar:"I regret not saving any money last year. If I had saved even a little, I would have been able to buy a new laptop now.",p:["He saved no money.","He bought a laptop last year.","He lost his job last year.","He won a prize last year."],b:0,u:"The speaker says: I regret not saving any money last year."},
 {j:"pilih",t:"Listen. What could Amir have bought?",dengar:"I regret not saving any money last year. If I had saved even a little, I would have been able to buy a new laptop now.",p:["A new laptop","A new car","A new house","A new phone"],b:0,u:"The speaker says: I would have been able to buy a new laptop."},
 {j:"pilih",t:"Listen. Why did the team lose?",dengar:"We lost the match because we didn't practise enough. If we had trained harder, we would have won. I wish we had listened to our coach.",p:["They practised too little.","They arrived late for the match.","The referee was very unfair.","The pitch was wet and slippery."],b:0,u:"The speaker says: we didn't practise enough."},
 {j:"pilih",t:"Listen. What does the speaker wish?",dengar:"We lost the match because we didn't practise enough. If we had trained harder, we would have won. I wish we had listened to our coach.",p:["They had heard their coach.","They had a brand new coach.","They had a much bigger team.","They had many more fans."],b:0,u:"The speaker says: I wish we had listened to our coach."},
 {j:"pilih",t:"Listen. What happened to the speaker's phone?",dengar:"I left my phone on the bus yesterday. If I had checked my bag before I got off, I wouldn't have lost it. Luckily, the driver found it and kept it for me.",p:["He left it on a bus.","He dropped it in some water.","He sold it to a friend.","He broke it on the road."],b:0,u:"The speaker says: I left my phone on the bus yesterday."},
 {j:"pilih",t:"Listen. Who found the phone?",dengar:"I left my phone on the bus yesterday. If I had checked my bag before I got off, I wouldn't have lost it. Luckily, the driver found it and kept it for me.",p:["The bus driver","A teacher","His brother","A stranger in a shop"],b:0,u:"The speaker says: the driver found it."},
 {j:"pilih",t:"Listen. What is true?",dengar:"If only I had taken my sister's advice, I wouldn't have wasted so much time. She told me to start the project early, but I didn't listen. Now I have two days left.",p:["He started the project late.","He started the project early.","He is on holiday.","His sister did the project."],b:0,u:"The speaker didn't take the advice and started late."},
 {j:"isi",t:"Listen and type the missing word: If I had known, I would ____ come.",dengar:"If I had known, I would have come.",b:["have"],u:"The speaker says have. Third conditional: would have + past participle."}],
 bos:{j:"pilih",t:"Listen to the speaker. What is the main message?",dengar:"We can't change the past, but we can learn from it. If I had made different choices, my life might have been different. But instead of feeling sad, I now try to make sensible decisions, and I encourage others to do the same.",p:["Learn from the past and choose well.","Forget the past completely and move on.","Never make any decisions at all.","Blame other people for your mistakes."],b:0,u:"The speaker says: instead of feeling sad, I now try to make sensible decisions."}},

{n:5, tempat:"Reflection Room", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"refleksi",
 kadNama:"reflect", kadEm:"\u{1FA9E}", kadFakta:"To reflect is to think carefully about something that happened, so that you can learn from it. A reflective writer asks: What did I do? What would I do differently?",
 bosKadNama:"turning point", bosKadEm:"\u{1F500}", bosKadFakta:"A turning point is a moment when something important changes. A bad experience can become a turning point if you learn from it.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["The writer learns a lesson from a mistake.","The writer wins a very big prize.","The writer moves to another country.","The writer opens a new restaurant."],b:0,u:"The writer reflects on a mistake and what it taught him."},
 {j:"pilih",t:"According to Text 1, what mistake did the writer make? (Text 1)",p:["He ignored his teacher.","He lost his wallet at school.","He missed a flight to Sabah.","He broke a window in class."],b:0,u:"The text says: I ignored my teacher's advice to revise early."},
 {j:"pilih",t:"What was the result? (Text 1)",p:["He failed the test.","He won a medal.","He became the class monitor.","He moved to a new school."],b:0,u:"The text says: I failed the test."},
 {j:"pilih",t:"The phrase turning point in Text 1 means",p:["a moment of change","a corner on a main road","a mistake in grammar rules","a type of difficult test"],b:0,u:"A turning point is a moment when an important change begins."},
 {j:"pilih",t:"What did the writer do after the failure? (Text 1)",p:["He made a study plan.","He gave up school.","He blamed the teacher.","He stopped reading."],b:0,u:"The text says: I made a study plan and followed it."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that the writer learnt.",p:["Advice is valuable.","Mistakes can teach us.","Tests are unimportant.","Revision is a waste of time."],b:[0,1],u:"The text says he learnt that advice is valuable and that mistakes can teach us."},
 {j:"pilih",t:"What can we infer about the writer now? (Text 1)",p:["He is more responsible.","He is rather lazy.","He hates learning anything.","He is angry with everyone."],b:0,u:"He plans and follows advice, so he is more responsible."},
 {j:"pilih",t:"Which sentence from Text 1 is a third conditional?",p:["If I had listened, I would have passed.","If I study hard, I will pass it.","I wish I were taller than my brother.","If I work, I get paid every week."],b:0,u:"If + past perfect, would have + past participle."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["A Lesson from a Mistake","A Trip to the Sea Side","The Best Revision Book Ever","How to Cook Fried Rice"],b:0,u:"The text is about a lesson from a mistake."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write a reflective paragraph about the past", lampiran:null,
 kadNama:"reflective writing", kadEm:"\u{1F4DD}", kadFakta:"Reflective paragraph: 1. what happened (past simple), 2. what you regret (I wish I had ...), 3. what you would have done (If I had ..., I would have ...), 4. what you learnt (present perfect/simple).",
 bosKadNama:"check the auxiliaries", bosKadEm:"\u{2705}", bosKadFakta:"Third conditional: had + past participle in the if clause; would have + past participle in the result. Never use would in the if clause.",
 soalan:[
 {j:"isi",t:"Type the missing word: If I had revised, I would ____ passed the test.",b:["have"],u:"Would have + past participle."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: If I would have known, I would have helped.",b:["had"],u:"The if clause uses had + past participle: If I had known."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["I","wish","I","had","listened","to","her."],b:[0,1,2,3,4,5,6],u:"I wish + subject + had + past participle."},
 {j:"pilih",t:"Which sentence is correct?",p:["If they had practised, they would have won.","If they would practise, they would have won.","If they had practised, they will win.","If they practised, they would have won."],b:0,u:"Third conditional: if + had practised, would have won."},
 {j:"pilih",t:"Which sentence expresses a regret about the past?",p:["I wish I had asked for help.","I wish I could ask for help.","I will ask for help.","I am asking for help."],b:0,u:"I wish + had + past participle shows regret about the past."},
 {j:"pilih",t:"Which sentence is NOT correct?",p:["If I had known, I would helped you.","If I had known, I would have helped you.","If I had known, I wouldn't have been late.","If only I had known."],b:0,u:"Would helped is wrong: would have helped."},
 {j:"susun",t:"Put the sentences in order to make a reflective paragraph.",p:["Last year, I failed my science test.","I regret not asking my teacher for help.","If I had asked, I would have understood the topic.","Now I always ask questions in class."],b:[0,1,2,3],u:"Say what happened, state the regret, give the third conditional, and finish with what you do now."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If I had known, I would have told you.","If I had known I would have, told you.","if I had known, I would have told you","If I had known; I would have told you."],b:0,u:"A comma goes after the if clause."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: I wasted a lot of time last term. ____",p:["If I had planned, I would have finished my project, and I wouldn't have been stressed.","If I would plan my time, I will finish my project, and I won't be so stressed.","If I had planned my time, I would finish my project, and I wouldn't had been so stressed.","If I planned my time, I would have finished my project, and I wouldn't be so stressed."],b:0,u:"A third conditional chain: had planned, would have finished, wouldn't have been."}}
];

module.exports = {
  id:"e5b1", tingkatan:5, kod:"Unit 1 What If I Had...?",
  tajuk:"Rewind", subtajuk:"English Form 5 · Unit 1 What If I Had...?",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("decisions, regrets and the third conditional", "What If I Had...?"),
  lampiran:{
   sembangpenyesalan:sembang(1, "A chat between two friends after an exam", "Hafiz and Nisa", "Hafiz", [
     {dari:"Hafiz", teks:"I missed the bus, so I arrived late. The exam started at 8.30, and I lost twenty minutes. I explained to the teacher, and she let me in."},
     {dari:"Nisa", teks:"Oh no! If you had left home earlier, you would have caught the early bus."},
     {dari:"Hafiz", teks:"I know. I wish I had left earlier, and I wish I had set the alarm."},
     {dari:"Nisa", teks:"Next time, plan your journey the night before."}]),
   refleksi:teks(1, "A reflective essay", "A Lesson from My Mistake",
     ["Last year, I ignored my teacher's advice to revise early. I thought that I was clever enough to pass without effort, so I failed the test. It was a turning point for me.",
      "If I had listened, I would have passed. I wish I had understood that earlier. After the failure, I made a study plan and followed it carefully.",
      "I have learnt that advice is valuable and that mistakes can teach us. Now I am more responsible, and I never leave my revision until the last minute."],
     "Practice text: invented essay")
  },
  aras:ARAS
};
