/* Sumber kandungan — English KSSM Form 1, Grammar Unit: Rules, advice and plans
   DSKP Form 1 "Grammar (Language Awareness) Syllabus" butir 1, 3, 4 dan 5 (bab bukan buku teks):
   indirect questions, modal verbs for rules/obligations (must, mustn't, should, shouldn't),
   present continuous / going to / will for future plans, modal verbs for advice (can, could, should, might).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { notis, sembang, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Rule Book", sk:"Vocabulary · rules, advice and plans", lampiran:null,
 kadNama:"must / mustn't", kadEm:"\u{1F6D1}", kadFakta:"must = it is necessary (wajib). mustn't = it is not allowed (dilarang). Example: You must wear a helmet. You mustn't use your phone in class.",
 bosKadNama:"should / shouldn't", bosKadEm:"\u{1F44D}", bosKadFakta:"should = a good idea (patut). shouldn't = not a good idea (tidak patut). Example: You should drink more water. You shouldn't stay up late.",
 soalan:[
 {j:"pilih",gbr:"\u{1F6AD}",t:"The picture shows a no-smoking sign. What does it mean?",p:["You mustn't smoke here.","You must smoke here.","You should smoke here.","You can smoke here."],b:0,u:"A crossed sign means something is not allowed: You mustn't smoke here."},
 {j:"pilih",gbr:"\u{1F6B8}",t:"This sign is outside a school. What must drivers do?",p:["Drive slowly","Drive fast","Stop for lunch","Wash the car"],b:0,u:"A school-zone sign tells drivers to drive slowly because children are crossing."},
 {j:"pilih",gbr:"\u{1F4F1}",t:"The school says, You ____ use your phone during lessons.",p:["mustn't","must","should","might not"],b:0,u:"Mustn't shows that something is not allowed."},
 {j:"pilih",t:"Which word shows a good idea or advice?",p:["should","mustn't","never","always"],b:0,u:"Should is used to give advice (nasihat)."},
 {j:"pilih",t:"Which word is used when something is necessary?",p:["must","might","could","shouldn't"],b:0,u:"Must means it is necessary or compulsory."},
 {j:"pilih",t:"Which word shows that something is possible, but not certain?",p:["might","must","mustn't","should"],b:0,u:"Might shows a possibility. It is not certain."},
 {j:"isi",t:"Type the missing word: You ____ eat more vegetables because they are good for you. (advice)",b:["should"],u:"Should gives advice: You should eat more vegetables."},
 {j:"pilih",t:"Which sentence is a RULE?",p:["Pupils must wear a uniform.","You should go to bed early.","It might rain tomorrow.","I'm going to bake a cake."],b:0,u:"A rule tells people what they must or mustn't do: Pupils must wear a uniform."}],
 bos:{j:"banyak",t:"Choose ALL the sentences that are advice.",p:["You should drink more water.","You shouldn't eat too much sugar.","You mustn't enter the lab.","School ends at 1.30 p.m.","You must wear a seat belt."],b:[0,1],u:"Should and shouldn't give advice. Mustn't and must talk about rules, and the time of school is a fact."}},

{n:2, tempat:"Advice Alley", sk:"Grammar · must, should, can/could/might, indirect questions", lampiran:null,
 kadNama:"indirect question", kadEm:"\u{2753}", kadFakta:"Indirect questions are more polite. Direct: Where is the library? Indirect: Can you tell me where the library is? The word order is a STATEMENT (where the library is), not a question.",
 bosKadNama:"can / could", bosKadEm:"\u{1F64B}", bosKadFakta:"Can and could for advice and suggestions: You could try the school clinic. You can ask your teacher for help.",
 soalan:[
 {j:"pilih",t:"You ____ wear a seat belt in the car. It is the law.",p:["must","might","could","may not"],b:0,u:"It is the law, so it is necessary: must."},
 {j:"pilih",t:"You ____ run in the corridor. It is dangerous.",p:["mustn't","must","should","might"],b:0,u:"Running is not allowed: mustn't."},
 {j:"pilih",t:"I have a headache. What ____ I do?",p:["should","must","mustn't","might"],b:0,u:"We use should to ask for advice: What should I do?"},
 {j:"pilih",t:"You ____ see a doctor if you feel ill.",p:["should","shouldn't","mustn't","can't"],b:0,u:"Seeing a doctor is a good idea, so we use should."},
 {j:"pilih",t:"It ____ rain this afternoon, so take an umbrella.",p:["might","mustn't","should not","is must"],b:0,u:"Might shows a possibility."},
 {j:"pilih",t:"Which is the polite INDIRECT question?",p:["Do you know where the canteen is?","Do you know where is the canteen?","Where is the canteen?","Do you know where does the canteen?"],b:0,u:"In an indirect question, use statement word order: where the canteen is."},
 {j:"isi",t:"Type the missing word: Can you tell me what time the film ____? (start)",b:["starts"],u:"Indirect question uses statement word order: what time the film starts."},
 {j:"susun",t:"Put the words in order to make a polite indirect question.",p:["Can","you","tell","me","where","the","library","is?"],b:[0,1,2,3,4,5,6,7],u:"Can you tell me + where + the library + is? The word order after where is a statement."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["You should rest because you might catch a cold.","You should to rest because you might catch a cold.","You should rest because you might catching a cold.","You should rests because you might caught a cold."],b:0,u:"After should and might, use the base verb: should rest, might catch."}},

{n:3, tempat:"Notice Board", sk:"Reading 3.1.2 · specific details in a notice and a chat", lampiran:"peraturan",
 kadNama:"permitted", kadEm:"\u{2705}", kadFakta:"permitted = allowed (dibenarkan). Not permitted = not allowed. Example: Food is not permitted in the library.",
 bosKadNama:"borrow / return", bosKadEm:"\u{1F4DA}", bosKadFakta:"borrow = take something and give it back later. return = give something back. Example: You can borrow two books for seven days.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. How many books can a pupil borrow?",p:["Two","Three","One","Five"],b:0,u:"The notice says: You may borrow two books at a time."},
 {j:"pilih",t:"According to Figure 1, how long can pupils keep the books?",p:["Seven days","Two days","Two weeks","One month"],b:0,u:"The notice says: Return the books after seven days."},
 {j:"pilih",t:"Based on Figure 1, which thing is NOT allowed in the library?",p:["Eating","Reading","Borrowing","Studying"],b:0,u:"The notice says: No food or drinks in the library."},
 {j:"pilih",t:"What time does the library close on Fridays? (Figure 1)",p:["12.30 p.m.","1.30 p.m.","5.00 p.m.","4.00 p.m."],b:0,u:"The notice says: Fridays 7.30 a.m. - 12.30 p.m."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things pupils must do.",p:["speak quietly","return books on time","bring a lunch box","play music"],b:[0,1],u:"The notice says: You must speak quietly. You must return books on time."},
 {j:"pilih",t:"What should pupils do if they lose a book? (Figure 1)",p:["Tell the librarian","Buy a new school bag","Ask a good friend","Ignore the problem"],b:0,u:"The notice says: If you lose a book, please tell the librarian."},
 {j:"pilih",t:"Who wrote the notice in Figure 1?",p:["The librarian","The head prefect","The canteen","The cleaner"],b:0,u:"The notice ends with: From Puan Zaleha, Librarian."},
 {j:"pilih",t:"What can we infer about the library from Figure 1?",p:["It is a quiet place.","It is a noisy place.","It is open all night.","It sells food."],b:0,u:"Pupils must speak quietly, so the library is a quiet place."}],
 bos:{j:"pilih",t:"Amir wants to borrow three books for his project. What should he do, according to Figure 1?",p:["Borrow two books, then return them first.","Borrow all three books and take them home.","Ask his friend to return them for him.","Take them without telling the librarian."],b:0,u:"The notice says pupils may borrow two books at a time, so Amir should return them before borrowing another one."}},

{n:4, tempat:"Plan Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"going to", kadEm:"\u{1F4C5}", kadFakta:"Use be going to or the present continuous for plans: We're going to visit our grandparents. We're meeting in the park. Both talk about a plan that is already decided.",
 bosKadNama:"arrangement", bosKadEm:"\u{1F5D3}\u{FE0F}", bosKadFakta:"An arrangement is a plan that has a time and a place: We're meeting at 3 p.m. at the gate.",
 soalan:[
 {j:"pilih",t:"Listen. What is Hani going to do this weekend?",dengar:"This weekend, I'm going to visit my grandparents in Perak. We're going to have lunch together and then walk by the river.",p:["Visit her grandparents","Go shopping in town","Stay at home all day","Go to the cinema"],b:0,u:"Hani says: I'm going to visit my grandparents in Perak."},
 {j:"pilih",t:"Listen. What are they going to do after lunch?",dengar:"This weekend, I'm going to visit my grandparents in Perak. We're going to have lunch together and then walk by the river.",p:["Walk by the river","Sleep in the house","Watch a long film","Play football outside"],b:0,u:"Hani says: and then walk by the river."},
 {j:"pilih",t:"Listen. When are they meeting?",dengar:"Tomorrow we're meeting in the park at four o'clock to play football. Please don't be late.",p:["At four o'clock","At five o'clock","At two o'clock","At ten o'clock"],b:0,u:"The speaker says: we're meeting in the park at four o'clock."},
 {j:"pilih",t:"Listen to the teacher. What must the pupils bring tomorrow?",dengar:"Class, tomorrow we're going on a field trip. You must bring a hat and a bottle of water. You mustn't bring any toys.",p:["A hat and some water","Toys and games","A football and a bat","A large cooking pot"],b:0,u:"The teacher says: You must bring a hat and a bottle of water."},
 {j:"pilih",t:"Listen. What mustn't the pupils bring?",dengar:"Class, tomorrow we're going on a field trip. You must bring a hat and a bottle of water. You mustn't bring any toys.",p:["Toys","A hat","Water","A bag"],b:0,u:"The teacher says: You mustn't bring any toys."},
 {j:"pilih",t:"Listen. What advice does the doctor give?",dengar:"You should rest and drink a lot of water. You shouldn't go to school tomorrow because you might spread the flu to your friends.",p:["Rest and drink water","Go to school as usual","Play football outside","Eat lots of spicy food"],b:0,u:"The doctor says: You should rest and drink a lot of water."},
 {j:"pilih",t:"Listen. Why shouldn't the pupil go to school?",dengar:"You should rest and drink a lot of water. You shouldn't go to school tomorrow because you might spread the flu to your friends.",p:["He might spread the flu.","The school is closed tomorrow.","Tomorrow is a public holiday.","He has no clean uniform."],b:0,u:"The doctor says: you might spread the flu to your friends."},
 {j:"isi",t:"Listen and type the missing word: We ____ meeting at the gate at three.",dengar:"We are meeting at the gate at three.",b:["are","'re"],u:"The speaker says are. Present continuous for an arrangement: are + meeting."}],
 bos:{j:"pilih",t:"Listen to the voice message. What does Zara ask Dani to do?",dengar:"Hi Dani, it's Zara. I'm going to the library tomorrow to finish my project. Can you tell me what time you finish football practice? If you finish before five, you could meet me there.",p:["Tell her when he is free","Bring her a big book","Buy her lunch at school","Call her class teacher"],b:0,u:"Zara says: Can you tell me what time you finish football practice?"}},

{n:5, tempat:"Letter Box", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"nasihat",
 kadNama:"advice column", kadEm:"\u{1F4EC}", kadFakta:"An advice column is a part of a magazine where readers write about problems and an expert gives advice.",
 bosKadNama:"sleepy", bosKadEm:"\u{1F634}", bosKadFakta:"Teenagers need about eight to ten hours of sleep each night. Too little sleep makes it hard to learn.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A pupil asks for advice about sleep.","A pupil wants to buy a new phone.","A pupil is planning a long holiday.","A pupil lost her favourite book."],b:0,u:"The reader says she feels tired at school and asks what she should do."},
 {j:"pilih",t:"According to Text 1, why is Nina always tired at school?",p:["She sleeps very late.","She eats too much.","She walks to school.","She has a new pet."],b:0,u:"The text says: I stay up until midnight watching videos."},
 {j:"pilih",t:"The word tired in Text 1 means",p:["needing rest","very happy","very hungry","very clever"],b:0,u:"Tired means feeling that you need rest or sleep."},
 {j:"pilih",t:"What does the expert say Nina should do? (Text 1)",p:["Go to bed earlier","Drink more coffee","Skip school","Stop doing homework"],b:0,u:"The expert says: You should go to bed earlier."},
 {j:"pilih",t:"What shouldn't Nina do before bed? (Text 1)",p:["Use her phone","Read a book","Drink water","Brush her teeth"],b:0,u:"The expert says: You shouldn't use your phone before bed."},
 {j:"banyak",t:"Based on Text 1, choose TWO pieces of advice from the expert.",p:["Do light exercise in the evening.","Switch off the phone at nine.","Eat a big dinner late at night.","Study until midnight every day."],b:[0,1],u:"The expert says to do some light exercise and to switch off the phone at nine."},
 {j:"pilih",t:"What might happen if Nina follows the advice? (Text 1)",p:["She might feel better.","She will win a prize.","She will have no homework.","She will move to another school."],b:0,u:"The expert says: If you follow this advice, you might feel better in a week."},
 {j:"pilih",t:"What can we infer about the expert?",p:["She cares about Nina.","She dislikes the reader a lot.","She is very angry with her.","She doesn't know anything at all."],b:0,u:"She gives kind and clear advice, so she cares about the reader."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Why Am I Always Tired?","My Holiday in Penang","A New School Bag","The Best Football Team"],b:0,u:"The whole text is about Nina being tired and the advice she gets."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2 · Grammar · give advice and talk about plans", lampiran:null,
 kadNama:"polite messages", kadEm:"\u{1F4E8}", kadFakta:"Start a message with a greeting (Dear Aunty Lina,), say what you want, and finish with thanks (Thank you!). Be polite: Could you tell me...?",
 bosKadNama:"check before sending", bosKadEm:"\u{2705}", bosKadFakta:"Check three things before you send: spelling, capital letters and full stops, and the verb after must / should / might (base verb!).",
 soalan:[
 {j:"isi",t:"Type the missing word: You ____ to bed early tonight. (advice: should)",b:["should"],u:"We use should for advice: You should go to bed early."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: You must to wear a helmet.",b:["wear"],u:"After must, use the base verb without to: You must wear a helmet."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["You","shouldn't","eat","too","much","sugar."],b:[0,1,2,3,4,5],u:"Subject + shouldn't + base verb + object: You shouldn't eat too much sugar."},
 {j:"pilih",t:"Which sentence is a polite request?",p:["Could you tell me when the bus leaves?","You tell me what time bus leaves now.","Tell me what time does the bus leave.","What time you leave the bus now?"],b:0,u:"Could you tell me ... + statement word order is polite."},
 {j:"pilih",t:"Choose the correct sentence about a plan.",p:["We're meeting at the park tomorrow.","We meeting at the park tomorrow.","We are meet at the park tomorrow.","We meets at the park tomorrow."],b:0,u:"Present continuous for an arrangement: are + meeting."},
 {j:"pilih",t:"Which sentence about the future is correct?",p:["I'm going to study harder this year.","I'm going study harder this year.","I going to study harder this year.","I'm go to study harder this year."],b:0,u:"Be going to + base verb: I'm going to study."},
 {j:"susun",t:"Put the sentences in order to make a short message.",p:["Hi Aunty Lina,","Could you tell me where we are meeting?","I'm going to bring some cakes.","Thank you!"],b:[0,1,2,3],u:"A message begins with a greeting, then the question, then the extra information, and ends with thanks."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If you feel ill, you should see a doctor.","If you feel ill you should, see a doctor.","if you feel ill, you should see a doctor","If you feel ill; You should see a doctor."],b:0,u:"Start with a capital letter and put a comma after the if clause."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the message: Hi Faris! I'm free on Saturday. ____",p:["Could you tell me where we are meeting?","Could you tell me where are we meeting?","Could you told me where we meeting?","Can you telling me where we are meet?"],b:0,u:"An indirect question uses statement word order: where we are meeting."}}
];

module.exports = {
  id:"e1b6", tingkatan:1, kod:"Grammar · Rules, advice and plans",
  tajuk:"Rules and Plans", subtajuk:"English Form 1 · Grammar · Rules, advice and plans",
  spi:SPI_A2,
  ulasan:ulasanBab("rules, advice and plans (must, should, going to)", "Rules, advice and plans"),
  lampiran:{
   peraturan:notis(1, "A notice in a school library", "Library Rules",
     ["**Opening hours:** Monday to Thursday 7.30 a.m. - 5.00 p.m. · Fridays 7.30 a.m. - 12.30 p.m.",
      "You may borrow **two books** at a time. Return the books after **seven days**.",
      "You must speak quietly. You must return books on time.",
      "No food or drinks in the library.",
      "If you lose a book, please tell the librarian."], "From Puan Zaleha, Librarian"),
   nasihat:teks(1, "A letter to an advice column", "Dear Aunty Lina...",
     ["Dear Aunty Lina, I'm Nina, and I'm thirteen. I'm always tired at school. I stay up until midnight watching videos on my phone, and then I can't wake up in the morning. What should I do?",
      "Dear Nina, you should go to bed earlier. You shouldn't use your phone before bed because the light may keep you awake. Try to switch off your phone at nine o'clock and do some light exercise in the evening.",
      "If you follow this advice, you might feel better in a week. Good luck!"],
     "Practice text: invented advice column")
  },
  aras:ARAS
};
