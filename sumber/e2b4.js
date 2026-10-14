/* Sumber kandungan — English KSSM Form 2, Unit 9 Take care
   DSKP Form 2 Textbook scope and sequence: Tema Health and Environment, Unit 9.
   Tatabahasa: tense review, should/shouldn't, must/mustn't. Kosa kata: personal issues, health, fixed phrases.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, notis, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Health Clinic", sk:"Vocabulary · health problems and personal issues", lampiran:null,
 kadNama:"stress", kadEm:"\u{1F4A2}", kadFakta:"Stress is the worried feeling you have when there is too much to do. Exercise, sleep and talking to a friend can reduce stress.",
 bosKadNama:"bullying", bosKadEm:"\u{1F6D1}", bosKadFakta:"Bullying is hurting or frightening someone again and again. If you see bullying, tell a teacher or a parent. Do not stay silent.",
 soalan:[
 {j:"pilih",gbr:"\u{1F915}",t:"Aina has a pain in her head. She has a",p:["headache","toothache","backache","earache"],b:0,u:"A pain in the head is a headache."},
 {j:"pilih",gbr:"\u{1F9B7}",t:"Hafiz has a pain in his tooth. He has a",p:["toothache","stomach ache","cough","cold"],b:0,u:"A pain in the tooth is a toothache."},
 {j:"pilih",gbr:"\u{2600}\u{FE0F}\u{1F975}",t:"After playing on the beach all day, Ravi's skin is red and painful. He has",p:["sunburn","a cold","eye strain","a bee sting"],b:0,u:"Sunburn is red, painful skin caused by too much sun."},
 {j:"pilih",gbr:"\u{1F41D}",t:"A small insect hurt Mei's arm with its sting. She has a",p:["bee sting","mosquito bite","cough","spot"],b:0,u:"A bee sting is a hurting mark from a bee."},
 {j:"pilih",gbr:"\u{1F4BB}\u{1F440}",t:"Zul looks at the screen for six hours every day. His eyes hurt. He has",p:["eye strain","an earache","a backache","a cold"],b:0,u:"Eye strain is tiredness and pain in the eyes from looking at a screen for too long."},
 {j:"pilih",t:"Someone who does not eat meat or fish is a",p:["vegetarian","school bully","team supporter","sports champion"],b:0,u:"A vegetarian does not eat meat or fish."},
 {j:"isi",t:"Type the missing word: Amir is ____ because he has two big exams next week and a lot of homework. (worried feeling)",b:["stressed","worried","anxious","nervous"],u:"Stressed (worried, anxious) describes the worried feeling you have when there is too much pressure."},
 {j:"pilih",t:"Which is a healthy habit?",p:["eating fruit and vegetables","staying up all night","skipping every breakfast","drinking many sweet drinks"],b:0,u:"Eating fruit and vegetables is a healthy habit."}],
 bos:{j:"banyak",t:"Choose ALL the words that are health problems.",p:["cough","backache","sunburn","stadium","diet"],b:[0,1,2],u:"A cough, a backache and sunburn are health problems. A stadium is a place and a diet is the food you eat."}},

{n:2, tempat:"Tense Tower", sk:"Grammar · tense review, should/shouldn't, must/mustn't", lampiran:null,
 kadNama:"tense review", kadEm:"\u{1F5BC}\u{FE0F}", kadFakta:"Habit: present simple (I walk to school). Now: present continuous (I'm walking). Past: past simple (I walked). Experience: present perfect (I've walked). Future plan: be going to. Prediction: will.",
 bosKadNama:"should / must", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"should = advice (You should rest). must = strong obligation (You must wear a helmet). shouldn't = advice not to (You shouldn't eat too much). mustn't = forbidden (You mustn't smoke).",
 soalan:[
 {j:"pilih",t:"You ____ go to the doctor if you feel ill.",p:["should","mustn't","didn't","aren't"],b:0,u:"Advice: should + base verb."},
 {j:"pilih",t:"You ____ forget to eat fruit and vegetables.",p:["shouldn't","should","must","did"],b:0,u:"Shouldn't + base verb gives advice not to do something."},
 {j:"pilih",t:"He ____ go to the hospital if his condition gets serious.",p:["must","mustn't","did","are"],b:0,u:"A serious condition needs strong obligation: must."},
 {j:"pilih",t:"You ____ react to a bully's behaviour with violence.",p:["mustn't","must","should","did"],b:0,u:"Mustn't shows that something is forbidden."},
 {j:"pilih",t:"Every morning, my sister ____ for a run in the park.",p:["goes","is going","went","has gone"],b:0,u:"Every morning shows a habit: present simple. With my sister (she): goes."},
 {j:"pilih",t:"Be quiet! The baby ____ right now.",p:["is sleeping","sleeps","has slept","slept"],b:0,u:"Right now shows an action in progress: present continuous."},
 {j:"isi",t:"Type the short answer: Must I tell my teacher? Yes, you ____.",b:["must"],u:"A short answer repeats the modal verb: Yes, you must."},
 {j:"isi",t:"Type the correct word: Should you tell an adult? Yes, you ____.",b:["should"],u:"A short answer repeats should: Yes, you should."}],
 bos:{j:"pilih",t:"Which sentence uses the correct tense?",p:["I have been to the clinic twice this month.","I have went to the clinic twice this month.","I am been to the clinic twice this month.","I was been to the clinic twice this month."],b:0,u:"Present perfect: have + been (past participle of be)."}},

{n:3, tempat:"Clinic Notice", sk:"Reading 3.1.2 · specific details in a notice and a chat", lampiran:"klinik",
 kadNama:"appointment", kadEm:"\u{1F4C5}", kadFakta:"An appointment is a fixed time to see someone, such as a doctor. You make an appointment by phone or online.",
 bosKadNama:"symptom", bosKadEm:"\u{1F321}\u{FE0F}", bosKadFakta:"A symptom is a sign that you are ill: fever, cough, headache. Tell the doctor your symptoms and how long you've had them.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What time does the clinic open on Monday?",p:["8.00 a.m.","9.00 a.m.","7.00 a.m.","10.00 a.m."],b:0,u:"The notice says: Monday to Friday 8.00 a.m. - 5.00 p.m."},
 {j:"pilih",t:"According to Figure 1, which day is the clinic closed?",p:["Sunday","Saturday","Friday","Monday"],b:0,u:"The notice says: Closed on Sundays and public holidays."},
 {j:"pilih",t:"Based on Figure 1, what should patients bring?",p:["Their identity card","A snack bag","A pillow","A phone charger"],b:0,u:"The notice says: Please bring your identity card."},
 {j:"pilih",t:"What must patients with a cough wear? (Figure 1)",p:["A mask","A hat","Gloves","Glasses"],b:0,u:"The notice says: Patients with a cough must wear a mask."},
 {j:"pilih",t:"What mustn't patients do in the waiting room? (Figure 1)",p:["Use phones loudly","Sit down quietly","Read the magazines","Drink some water"],b:0,u:"The notice says: Please do not use your phone loudly."},
 {j:"banyak",t:"Based on Figure 1, choose TWO ways to make an appointment.",p:["by phone","online","by letter","by radio"],b:[0,1],u:"The notice says: Make an appointment by phone or online."},
 {j:"pilih",t:"How long should a patient with a fever stay at home? (Figure 1)",p:["Until the fever goes","For ten years","For one hour only","Until next Sunday"],b:0,u:"The notice says: stay at home until the fever goes away."},
 {j:"pilih",t:"What can we infer about the clinic in Figure 1?",p:["It protects other patients.","It is only for the children.","It is always open all day.","It is free for everybody."],b:0,u:"It asks sick patients to wear masks and stay at home, to protect other patients."}],
 bos:{j:"pilih",t:"Dina has a bad cough and wants to see a doctor on a Sunday. What should she do, according to Figure 1?",p:["Book Monday morning.","Go to the clinic on Sunday.","Wait until next Saturday.","Call the school teacher."],b:0,u:"The clinic is closed on Sundays, so she should make an appointment for the next opening day, Monday morning."}},

{n:4, tempat:"Doctor's Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"listen for advice", kadEm:"\u{1F442}", kadFakta:"Listen for should, shouldn't, must, mustn't and for the reason after because. They tell you the advice and why.",
 bosKadNama:"tense clues", bosKadEm:"\u{1F575}\u{FE0F}", bosKadFakta:"Time words tell you the tense: every day (habit), now (action in progress), yesterday (past), since/for (present perfect), tomorrow (future).",
 soalan:[
 {j:"pilih",t:"Listen. What is wrong with Hana?",dengar:"I have a terrible headache, and I've had it since yesterday. I think I've been looking at my phone for too long.",p:["She has a headache.","She has a toothache.","She has a stomach ache.","She has a sunburn."],b:0,u:"Hana says: I have a terrible headache."},
 {j:"pilih",t:"Listen. How long has Hana had the problem?",dengar:"I have a terrible headache, and I've had it since yesterday. I think I've been looking at my phone for too long.",p:["Since yesterday","For two weeks","For one hour","Since last year"],b:0,u:"Hana says: I've had it since yesterday."},
 {j:"pilih",t:"Listen to the doctor. What should Hana do?",dengar:"You should rest your eyes. You shouldn't use your phone for more than one hour, and you should drink more water.",p:["Rest her eyes","Use her phone more","Eat more sugar","Stay up late"],b:0,u:"The doctor says: You should rest your eyes."},
 {j:"pilih",t:"Listen. What shouldn't Hana do?",dengar:"You should rest your eyes. You shouldn't use your phone for more than one hour, and you should drink more water.",p:["Use her phone too long","Drink some water","Rest her eyes a lot","See the doctor again"],b:0,u:"The doctor says: You shouldn't use your phone for more than one hour."},
 {j:"pilih",t:"Listen. Why must the pupil wear a hat?",dengar:"You must wear a hat when you play outside at noon, because the sun is very strong. Last week, two pupils got sunburn.",p:["The sun is very strong.","It is raining.","It is cold.","The hat is a school rule for the sports day."],b:0,u:"The speaker says: because the sun is very strong."},
 {j:"pilih",t:"Listen. What happened last week?",dengar:"You must wear a hat when you play outside at noon, because the sun is very strong. Last week, two pupils got sunburn.",p:["Two pupils got sunburn.","Two pupils lost hats.","The school was closed.","It rained all day."],b:0,u:"The speaker says: Last week, two pupils got sunburn."},
 {j:"pilih",t:"Listen. What is the problem?",dengar:"Some pupils in my class are bullying a new boy. They call him names every day. I don't know what to do. Should I tell my teacher?",p:["Bullying in class","A broken window","A lost school bag","A school trip"],b:0,u:"The speaker says: Some pupils in my class are bullying a new boy."},
 {j:"isi",t:"Listen and type the missing word: You ____ tell a teacher about bullying.",dengar:"You must tell a teacher about bullying.",b:["must"],u:"The speaker says must. It is a strong obligation."}],
 bos:{j:"pilih",t:"Listen to the advice. Which is the BEST summary?",dengar:"If you feel stressed, you should talk to someone you trust, and you should get enough sleep. You mustn't keep your worries to yourself, because things always look better after a good rest and a good talk.",p:["Talk and sleep well.","Study all night long.","Keep the worries a secret.","Stay alone at home."],b:0,u:"The advice is: talk to someone you trust and get enough sleep."}},

{n:5, tempat:"Advice Page", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"nasihat",
 kadNama:"trustworthy", kadEm:"\u{1F91D}", kadFakta:"A trustworthy person is someone you can trust, such as a parent, a teacher or a counsellor. You can tell them your problems.",
 bosKadNama:"balanced", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"A balanced diet has all kinds of food in the right amounts: rice, protein, vegetables and fruit. A balanced life has time for study, sleep, play and family.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Ways to stay healthy","A story about a lost dog","The history of a school","A list of school subjects"],b:0,u:"The text gives advice on how to stay healthy and happy."},
 {j:"pilih",t:"According to Text 1, how much sleep do teenagers need?",p:["Eight to ten hours","Four hours only","Twelve hours","Two hours only"],b:0,u:"The text says teenagers need eight to ten hours of sleep."},
 {j:"pilih",t:"What should you do if you feel worried? (Text 1)",p:["Talk to someone","Keep it a secret","Skip school today","Stay up all night"],b:0,u:"The text says: If you feel worried, you should talk to someone you trust."},
 {j:"pilih",t:"The word balanced in Text 1 means",p:["having the right amounts","too much of one thing","not enough of anything","very expensive to buy"],b:0,u:"Balanced means including different things in the right amounts."},
 {j:"pilih",t:"What mustn't you do with your problems? (Text 1)",p:["Keep them inside","Talk about them","Write them down","Ask for help"],b:0,u:"The text says: You mustn't keep your problems to yourself."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that keep your body healthy.",p:["exercise","a balanced diet","sweet drinks","late nights"],b:[0,1],u:"The text says: Exercise regularly and eat a balanced diet."},
 {j:"pilih",t:"What can we infer about the writer of Text 1?",p:["She wants to help others.","She hates going to school.","She is always very busy.","She is a famous sports player."],b:0,u:"The text gives helpful advice to teenagers, so the writer wants to help them."},
 {j:"susun",t:"Put the advice in Text 1 in the correct order.",p:["Get enough sleep.","Eat a balanced diet.","Exercise every day.","Talk to someone you trust."],b:[0,1,2,3],u:"The text gives the advice in this order: sleep, diet, exercise and talking."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Take Care of Yourself","A Day at the Zoo","My Favourite Film","How to Bake Bread"],b:0,u:"The whole text gives advice on how to take care of yourself."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · give advice and reasons", lampiran:null,
 kadNama:"advice with because", kadEm:"\u{1F4DD}", kadFakta:"Give advice and a reason: You should sleep early because your body needs rest. Use because for the reason, so for the result.",
 bosKadNama:"check the tense", bosKadEm:"\u{1F575}\u{FE0F}", bosKadFakta:"Before you send a message, check the time word and the tense: yesterday + past, now + continuous, since/for + present perfect.",
 soalan:[
 {j:"isi",t:"Type the missing word: You ____ drink more water because it is hot today. (advice)",b:["should"],u:"Use should for advice."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: You mustn't to run in the lab.",b:["run"],u:"After mustn't, use the base verb without to: You mustn't run."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["You","should","see","a","doctor","if","you","feel","ill."],b:[0,1,2,3,4,5,6,7,8],u:"Subject + should + base verb + object + if clause."},
 {j:"pilih",t:"Which sentence gives good advice?",p:["You should rest and drink warm water.","You should to rest and drinking warm water.","You rest should and drink warm water.","You should rested and drank warm water."],b:0,u:"Should + base verb: should rest and (should) drink."},
 {j:"pilih",t:"Which tense is correct? I ____ a headache since this morning.",p:["have had","had","have been","am having"],b:0,u:"Since + a starting point needs the present perfect: have had."},
 {j:"pilih",t:"Which sentence is correct?",p:["He was bullied yesterday, so he told his teacher.","He was bully yesterday, so he tell his teacher.","He is bullied yesterday, so he told his teacher.","He bullied yesterday, so he has told his teacher."],b:0,u:"Past passive: was bullied. Then past simple: told."},
 {j:"susun",t:"Put the sentences in order to make a short paragraph of advice.",p:["Are you feeling stressed?","You should talk to someone you trust.","You should also get enough sleep.","You mustn't keep your problems to yourself."],b:[0,1,2,3],u:"Start with the problem, then give advice, add more advice, and end with a strong rule."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If you feel ill, you should see a doctor.","if you feel ill you should, see a doctor","If you feel ill you, should see a doctor.","If you feel ill; you should see a doctor"],b:0,u:"Use a capital letter at the start, a comma after the if clause and a full stop at the end."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: Exam stress is normal. ____",p:["You should plan your time and take short breaks, because that helps you remember more.","You should to plan your time and taking short breaks, because that help you remember more.","You must plans your time and take short breaks, because that helps you to remembering more.","You should plan your time and take short breaks, because that are help you remember more."],b:0,u:"Should + base verb (plan, take) and because + a clause (that helps you remember more)."}}
];

module.exports = {
  id:"e2b4", tingkatan:2, kod:"Unit 9 Take care",
  tajuk:"Care Heroes", subtajuk:"English Form 2 · Unit 9 Take care",
  spi:SPI_A2,
  ulasan:ulasanBab("health, personal issues and giving advice", "Take care"),
  lampiran:{
   klinik:notis(1, "A notice in a school clinic", "Klinik Sekolah · School Clinic",
     ["**Opening hours:** Monday to Friday 8.00 a.m. - 5.00 p.m. · **Closed on Sundays and public holidays.**",
      "Please bring your **identity card**. Make an appointment **by phone or online**.",
      "Patients with a cough **must wear a mask**. Please do not use your phone loudly in the waiting room.",
      "If you have a fever, please stay at home until the fever goes away."], "Thank you for keeping our clinic safe."),
   nasihat:teks(1, "An article from a school magazine", "Take Care of Yourself",
     ["Are you tired and stressed? Here are some simple ways to stay healthy and happy. First, you should get enough sleep. Teenagers need eight to ten hours of sleep every night, so you shouldn't stay up late.",
      "Next, eat a balanced diet with fruit and vegetables. Exercise regularly, because it keeps your body strong and your mind calm.",
      "Finally, if you feel worried, you should talk to someone you trust, such as a parent, a teacher or a friend. You mustn't keep your problems to yourself. Remember: asking for help is a sign of strength."],
     "Practice text: invented magazine article")
  },
  aras:ARAS
};
