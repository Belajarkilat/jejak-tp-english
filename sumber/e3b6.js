/* Sumber kandungan — English KSSM Form 3, Unit 6 Healthy Opinions
   DSKP Form 3 Main Language Functions: question tags to check information, agreement (So do I / Neither do I),
   modals for permission and prohibition (can / be allowed to / could / was able to), phrases for opinion
   (in my opinion) and mood (it makes me feel), connecting words (in addition, first, next, finally, to summarise).
   Tema Health and Environment. Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, notis, teks, SPI_B1_T3, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Opinion Clinic", sk:"Vocabulary · health, opinions and feelings", lampiran:null,
 kadNama:"in my opinion", kadEm:"\u{1F4AC}", kadFakta:"Phrases for opinions: In my opinion, ... / I believe that ... / As far as I'm concerned, ... / It seems to me that ... Give a reason with because.",
 bosKadNama:"it makes me feel", bosKadEm:"\u{1F60C}", bosKadFakta:"Describe mood: Exercise makes me feel energetic. Too much homework makes me feel stressed. Use feel + an adjective: relaxed, nervous, confident.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3C3}\u{200D}\u{2640}\u{FE0F}",t:"Playing sport regularly makes me feel ____. I have a lot of energy.",p:["energetic","exhausted","lonely","nervous"],b:0,u:"Energetic means full of energy."},
 {j:"pilih",gbr:"\u{1F9D8}",t:"Yoga helps people to feel ____ and to forget their worries.",p:["relaxed","furious","jealous","careless"],b:0,u:"Relaxed means calm and free from worry."},
 {j:"pilih",gbr:"\u{1F4DD}",t:"I feel ____ before an exam because I'm not sure that I'll remember everything.",p:["nervous","delighted","bored","proud"],b:0,u:"Nervous means slightly afraid or worried about something that will happen."},
 {j:"pilih",t:"Which phrase is used to give an opinion?",p:["In my opinion","As a result","For example","In addition"],b:0,u:"In my opinion shows that you are giving your own view."},
 {j:"pilih",t:"Which word means 'a bad habit that is hard to stop'?",p:["addiction","exercise","vitamin","routine"],b:0,u:"An addiction is a strong need to do something, such as smoking or gaming."},
 {j:"pilih",t:"A diet that has all the nutrients that your body needs is",p:["balanced","limited","unusual","expensive"],b:0,u:"A balanced diet includes the right amounts of different kinds of food."},
 {j:"isi",t:"Type the missing word: Eating too much sugar is ____ for your teeth. (it harms them)",b:["bad","harmful","unhealthy"],u:"Bad, harmful and unhealthy all show that something causes damage."},
 {j:"pilih",t:"Which pair of words are OPPOSITES?",p:["healthy / unhealthy","tired / exhausted","happy / delighted","calm / peaceful"],b:0,u:"Healthy and unhealthy are opposites. The other pairs have similar meanings."}],
 bos:{j:"banyak",t:"Choose ALL the phrases that introduce an opinion.",p:["In my opinion,","I believe that","As far as I'm concerned,","Next,","In addition,"],b:[0,1,2],u:"In my opinion, I believe that and As far as I'm concerned introduce opinions. Next and In addition connect ideas."}},

{n:2, tempat:"Function Factory", sk:"Grammar · question tags, agreement, permission and prohibition", lampiran:null,
 kadNama:"So do I / Neither do I", kadEm:"\u{1F91D}", kadFakta:"To agree with a positive sentence: I love swimming. → So do I. To agree with a negative sentence: I don't like fast food. → Neither do I. Use the same auxiliary verb: I can swim. → So can I.",
 bosKadNama:"allowed to", bosKadEm:"\u{1F6A6}", bosKadFakta:"can / be allowed to = permission. can't / not be allowed to = prohibition. could / was allowed to = permission in the past. was able to = managed to do something in the past.",
 soalan:[
 {j:"pilih",t:"'I really enjoy swimming.' — '____.'",p:["So do I","Neither do I","So I do","I don't too"],b:0,u:"To agree with a positive sentence with enjoy (simple present), we say So do I."},
 {j:"pilih",t:"'I don't like fast food.' — '____.'",p:["Neither do I","So do I too","Neither I do","I do either then"],b:0,u:"To agree with a negative sentence, we say Neither do I."},
 {j:"pilih",t:"'I can't swim.' — '____.'",p:["Neither can I","So can I too","Neither do I","So I can't then"],b:0,u:"We repeat the auxiliary verb can: Neither can I."},
 {j:"pilih",t:"You ____ to use your phone in the exam hall. It is against the rules.",p:["are not allowed","do not be able","can be allowed to","aren't able to"],b:0,u:"Prohibition: be not allowed to + base verb."},
 {j:"pilih",t:"When I was ten, I ____ to stay up until 10 p.m. only at the weekend.",p:["was allowed","am allowing","have allowed","allow"],b:0,u:"Past permission: was allowed to."},
 {j:"pilih",t:"The injured player ____ finish the match, even though his leg hurt.",p:["was able to","can able to","is able to","could able to"],b:0,u:"Was able to means managed to do something in the past."},
 {j:"pilih",t:"It's a healthy snack, ____ it?",p:["isn't","is","doesn't","wasn't"],b:0,u:"A positive sentence with is takes a negative tag: isn't it?"},
 {j:"isi",t:"Type the missing word: You haven't finished your homework, ____ you? (question tag)",b:["have"],u:"A negative sentence with haven't takes a positive tag: have you?"}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["She loves jogging, and so do I.","She loves jogging, and neither do I.","She loves jogging, and so I do.","She love jogging, and so do I."],b:0,u:"So do I agrees with a positive sentence in the present simple."}},

{n:3, tempat:"Rules Board", sk:"Reading 3.1.2 · specific details in a notice and a chat", lampiran:"peraturangim",
 kadNama:"membership", kadEm:"\u{1F4B3}", kadFakta:"Membership is the state of belonging to a club or gym. Members usually have a card and some special rights.",
 bosKadNama:"guest", bosKadEm:"\u{1F6AA}", bosKadFakta:"A guest is a person who visits. Some gyms allow members to bring a guest, but the guest may have to pay a small fee.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What time does the gym open on weekdays?",p:["6.00 a.m.","7.00 a.m.","8.00 a.m.","9.00 a.m."],b:0,u:"The notice says: Monday to Friday: 6.00 a.m. - 10.00 p.m."},
 {j:"pilih",t:"According to Figure 1, who is allowed to use the swimming pool?",p:["Members and their guests","Anyone in the street","Members only on Sundays","Children under five alone"],b:0,u:"The notice says: The pool may be used by members and their guests."},
 {j:"pilih",t:"Based on Figure 1, what must visitors wear in the pool?",p:["A swimming cap","Long jeans","School shoes","A winter coat"],b:0,u:"The notice says: A swimming cap must be worn."},
 {j:"pilih",t:"What is NOT allowed in the gym? (Figure 1)",p:["Food and other drinks","Bringing a towel","Wearing sports shoes","Using the lockers"],b:0,u:"The notice says: No food or drinks except water."},
 {j:"pilih",t:"How many guests can a member bring? (Figure 1)",p:["One guest","Three guests","No guests","Ten guests"],b:0,u:"The notice says: Each member may bring one guest at a time."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things members are allowed to do.",p:["use the lockers","bring a guest","leave bags in the corridor","play loud music"],b:[0,1],u:"The notice says members may use the lockers and bring one guest."},
 {j:"pilih",t:"What should members do if they lose their card? (Figure 1)",p:["Tell the reception","Wait for one week","Use their friend's card","Do nothing at all"],b:0,u:"The notice says: If you lose your card, please tell the reception immediately."},
 {j:"pilih",t:"What can we infer about the gym in Figure 1?",p:["It has strict rules.","It is free for everyone in town.","It is closed on all weekdays.","It has no swimming pool at all."],b:0,u:"There are many rules about safety and behaviour, so the gym has strict safety rules."}],
 bos:{j:"pilih",t:"Rizal is a member and wants to bring his cousin to swim on Saturday. What must they do, according to Figure 1?",p:["Both must wear swimming caps.","His cousin may swim without any cap.","They may bring food to the pool area.","His cousin cannot swim as he is not a member."],b:0,u:"Members may bring one guest to the pool, and everyone must wear a swimming cap."}},

{n:4, tempat:"Health Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"agreement", kadEm:"\u{1F442}", kadFakta:"Listen to how people agree and disagree: So do I! / Neither do I. / I'm not so sure. / That's true, but ... They show the speakers' attitude.",
 bosKadNama:"connecting words", bosKadEm:"\u{1F517}", bosKadFakta:"In addition, however, as a result, to summarise: Connecting words help you follow the speaker's argument and conclusion.",
 soalan:[
 {j:"pilih",t:"Listen. What is the speaker's opinion about fast food?",dengar:"In my opinion, fast food is a problem for young people. It is cheap and tasty, but it contains too much fat and salt. In addition, many teenagers eat it every day.",p:["It is a problem for teens.","It is healthy and cheap to buy.","It should be free for everybody.","It is good for sports people."],b:0,u:"The speaker says: In my opinion, fast food is a problem for young people."},
 {j:"pilih",t:"Listen. What is wrong with fast food, according to the speaker?",dengar:"In my opinion, fast food is a problem for young people. It is cheap and tasty, but it contains too much fat and salt. In addition, many teenagers eat it every day.",p:["It has too much fat and salt.","It is far too expensive.","It takes far too long to buy.","It is not tasty enough."],b:0,u:"The speaker says: it contains too much fat and salt."},
 {j:"pilih",t:"Listen. Who agrees with Mei?",dengar:"Mei: I don't like running in the rain. Ali: Neither do I. It makes me feel cold and tired. Hana: Really? I love it! It makes me feel free.",p:["Ali","Hana","Both of them","Nobody"],b:0,u:"Ali says: Neither do I, which means he agrees."},
 {j:"pilih",t:"Listen. How does running in the rain make Hana feel?",dengar:"Mei: I don't like running in the rain. Ali: Neither do I. It makes me feel cold and tired. Hana: Really? I love it! It makes me feel free.",p:["Free","Cold","Tired","Nervous"],b:0,u:"Hana says: It makes me feel free."},
 {j:"pilih",t:"Listen. What was Daniel able to do?",dengar:"Last year, Daniel wasn't able to run more than one kilometre. This year, he trained every day, and he was able to complete a ten-kilometre race.",p:["Finish a 10 km race","Swim across the river","Win a gold medal today","Climb a high mountain"],b:0,u:"The speaker says: he was able to complete a ten-kilometre race."},
 {j:"pilih",t:"Listen. What is the school rule?",dengar:"Pupils aren't allowed to bring sweets or fizzy drinks to school. However, they can bring fruit, water or sandwiches. To summarise, the school wants everyone to eat healthily.",p:["Sweets are not allowed.","Fruit is not allowed.","Water is not allowed.","Sandwiches are not allowed."],b:0,u:"The speaker says: Pupils aren't allowed to bring sweets or fizzy drinks."},
 {j:"pilih",t:"Listen. What is the school's aim?",dengar:"Pupils aren't allowed to bring sweets or fizzy drinks to school. However, they can bring fruit, water or sandwiches. To summarise, the school wants everyone to eat healthily.",p:["To make pupils eat well","To close the canteen soon","To sell more sweets and drinks","To stop all lunches at school"],b:0,u:"The speaker says: To summarise, the school wants everyone to eat healthily."},
 {j:"isi",t:"Listen and type the missing word: I can't cook. — Neither ____ I.",dengar:"I can't cook. Neither can I.",b:["can"],u:"The speaker says can. We repeat the auxiliary verb: Neither can I."}],
 bos:{j:"pilih",t:"Listen. What is the main message of the talk?",dengar:"There are three things that help me to stay healthy. First, I exercise regularly. Next, I get enough sleep. Finally, I try to eat a balanced diet. To summarise, healthy habits are easy to build if you start with small steps.",p:["Small steps build good habits.","Exercise is far too hard for teens.","Only a good diet really matters.","Sleep is a waste of time for all."],b:0,u:"The speaker says: healthy habits are easy to build if you start with small steps."}},

{n:5, tempat:"Debate Room", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"pendapatremaja",
 kadNama:"persuade", kadEm:"\u{1F5E3}\u{FE0F}", kadFakta:"To persuade is to make someone agree with your opinion or do something. A good writer persuades with reasons and examples.",
 bosKadNama:"balanced view", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"A balanced view looks at both sides of an issue. Words such as however, on the other hand and although introduce the other side.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Canteens should sell healthy food.","Pupils should skip lunch every day.","Canteens should close at the weekend.","Pupils should buy more fast food."],b:0,u:"The writer argues that school canteens should serve healthy food."},
 {j:"pilih",t:"According to Text 1, what problem is caused by unhealthy food?",p:["Pupils feel tired in lessons.","Pupils grow far too fast.","Pupils become far too clever.","Pupils never feel any hunger."],b:0,u:"The text says that sugary food makes pupils tired and unable to concentrate."},
 {j:"pilih",t:"What does the writer suggest the canteen should sell? (Text 1)",p:["Fruit, salad and rice","Cakes and soft drinks","Burgers and fries","Chocolate bars and sweets"],b:0,u:"The text says the canteen should offer fruit, salad and brown rice."},
 {j:"pilih",t:"The word concentrate in Text 1 means",p:["give full attention","talk loudly to friends","run very fast indeed","sleep soundly at night"],b:0,u:"To concentrate is to give all your attention to something."},
 {j:"pilih",t:"What does the writer say about prices? (Text 1)",p:["It need not be costly.","Healthy food is far too expensive.","Prices should double next year.","Prices do not matter at all."],b:0,u:"The text says that healthy meals can be cheap if they are planned well."},
 {j:"banyak",t:"Based on Text 1, choose TWO reasons the writer gives for healthy food.",p:["It helps pupils focus.","It helps pupils stay fit.","It makes all lessons shorter.","It is always free to buy."],b:[0,1],u:"The text says healthy food helps concentration and fitness."},
 {j:"pilih",t:"What opposing view does the writer mention? (Text 1)",p:["Some pupils find healthy food boring.","Some teachers think canteens are too big.","Some parents want much longer lessons.","Some pupils like to run every day."],b:0,u:"The text says: Some pupils argue that healthy food is boring."},
 {j:"pilih",t:"What can we infer about the writer's attitude? (Text 1)",p:["She feels strongly about it.","She does not care about the issue.","She hates going to school.","She wants to close the whole school."],b:0,u:"She uses strong phrases such as I strongly believe, so she feels strongly about the issue."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Healthy Food, Healthy Minds","A Day in the Public Park","My Favourite Cheese Burger","The Rules of School Football"],b:0,u:"The text argues that healthy food helps minds and bodies."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write an opinion paragraph", lampiran:null,
 kadNama:"opinion paragraph", kadEm:"\u{1F4DD}", kadFakta:"Opinion paragraph: 1. state your opinion (In my opinion, ...). 2. give a reason (because ...). 3. add another point (In addition, ...). 4. conclude (To summarise, ...).",
 bosKadNama:"agree politely", bosKadEm:"\u{1F91D}", bosKadFakta:"Polite agreement and disagreement: I agree, but ... / That's true. However, ... / I see your point, but I think ...",
 soalan:[
 {j:"isi",t:"Type the missing words: 'I love healthy food.' — 'So ____ I.' (agree)",b:["do"],u:"We agree with a positive present simple sentence by saying So do I."},
 {j:"isi",t:"Type the missing word: 'I don't eat meat.' — 'Neither ____ I.' (agree)",b:["do"],u:"We agree with a negative present simple sentence by saying Neither do I."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["In","my","opinion,","pupils","should","sleep","more."],b:[0,1,2,3,4,5,6],u:"In my opinion, + subject + should + verb."},
 {j:"pilih",t:"Which sentence uses a connecting word to add information?",p:["Exercise is fun. In addition, it keeps you healthy.","Exercise is fun. However, it keeps you healthy.","Exercise is fun. Although, it keeps you healthy.","Exercise is fun. As a result of, it keeps you healthy."],b:0,u:"In addition adds another point."},
 {j:"pilih",t:"Which sentence expresses a prohibition correctly?",p:["You are not allowed to eat in the lab.","You not allowed to eat in the lab.","You are not allow to eat in the lab.","You aren't allowed eating in the lab."],b:0,u:"Prohibition: are not allowed to + base verb."},
 {j:"pilih",t:"Which question tag is correct? She doesn't eat meat, ____?",p:["does she","doesn't she","is she","didn't she"],b:0,u:"A negative sentence takes a positive tag: does she?"},
 {j:"susun",t:"Put the sentences in order to make an opinion paragraph.",p:["In my opinion, schools should start later.","Pupils need enough sleep to concentrate.","In addition, tired pupils often feel stressed.","To summarise, a later start would improve health."],b:[0,1,2,3],u:"State your opinion, give a reason, add another point and conclude."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["First, exercise; next, eat well; finally, sleep early.","First exercise, next, eat well, finally sleep early.","first, exercise; next, eat well; finally, sleep early.","First, exercise next; eat well, finally; sleep early."],b:0,u:"Use commas after sequence words and semicolons to separate the steps."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: In my opinion, junk food should not be sold at school. ____",p:["It is unhealthy, and in addition, it makes pupils feel tired.","It unhealthy, and in addition, it make pupils to feel tired.","It is unhealthy, and in addition of it makes pupils feeling tired.","It are unhealthy, and in addition, it makes pupils feel tired."],b:0,u:"A full sentence with a reason, and the connecting phrase in addition."}}
];

module.exports = {
  id:"e3b6", tingkatan:3, kod:"Unit 6 Healthy Opinions",
  tajuk:"Healthy Debates", subtajuk:"English Form 3 · Unit 6 Healthy Opinions",
  spi:SPI_B1_T3,
  ulasan:ulasanBab("health, opinions, agreement and permission", "Healthy Opinions"),
  lampiran:{
   peraturangim:notis(1, "A notice in a sports centre", "Sports Centre · Rules for Members",
     ["**Opening hours:** Monday to Friday 6.00 a.m. - 10.00 p.m. · Weekends 8.00 a.m. - 6.00 p.m.",
      "The pool may be used by members and their guests. A swimming cap must be worn.",
      "Each member may bring **one guest** at a time. Lockers may be used for your belongings.",
      "No food or drinks except water. If you lose your card, please tell the reception immediately."], "Thank you for following the rules."),
   pendapatremaja:teks(1, "A letter to the school magazine", "Healthy Food for Healthy Minds",
     ["I strongly believe that our school canteen should serve healthy food. Many pupils feel tired after eating sugary snacks, and they cannot concentrate in lessons. In my opinion, fruit, salad and brown rice would help us to stay fit and to learn better.",
      "Some pupils argue that healthy food is boring. However, it need not be boring or expensive. If meals are planned well, they can be cheap and delicious.",
      "To summarise, the canteen has a duty to look after our health. I hope that the school will consider my suggestion."],
     "Practice text: invented letter")
  },
  aras:ARAS
};
