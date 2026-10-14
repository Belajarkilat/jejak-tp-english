/* Sumber kandungan — English KSSM Form 3, Unit 3 Tomorrow's World
   DSKP Form 3 Grammar: future forms (present simple, present continuous, going to, will/won't);
   Language function: modals for prediction and possibility (might, may, will, probably). Tema Science and Technology.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, emel, teks, SPI_B1_T3, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Tech Lab", sk:"Vocabulary · technology and the future", lampiran:null,
 kadNama:"artificial intelligence", kadEm:"\u{1F916}", kadFakta:"Artificial intelligence (AI) is computer technology that can do things that normally need human thinking, such as understanding speech or recognising faces.",
 bosKadNama:"privacy", bosKadEm:"\u{1F512}", bosKadFakta:"Privacy is your right to keep your personal information secret. Online, we protect our privacy with strong passwords.",
 soalan:[
 {j:"pilih",gbr:"\u{231A}",t:"A watch that also measures your heartbeat and receives messages is a ____ device.",p:["wearable","portable battery","hanging","digital cable"],b:0,u:"A wearable device is a small piece of technology that you wear on your body."},
 {j:"pilih",gbr:"\u{1F4F2}",t:"When your phone asks you to install the latest version of an app, it asks you to",p:["update it","delete it","charge it","guess it"],b:0,u:"To update software is to install its newest version."},
 {j:"pilih",gbr:"\u{1F9A0}\u{1F4BB}",t:"A harmful program that can damage your computer is a",p:["virus","browser","password","keyboard"],b:0,u:"A computer virus is a harmful program that spreads from one computer to another."},
 {j:"pilih",t:"Which word means 'to copy a file from the internet to your device'?",p:["download","upload","unplug","uninstall"],b:0,u:"To download is to copy something from the internet to your own device. The opposite is upload."},
 {j:"pilih",t:"Which of these is a good way to protect your online privacy?",p:["use a strong password","share your password","click every link","use the same code"],b:0,u:"A strong password keeps your account safe. Never share it."},
 {j:"pilih",t:"A machine that can do tasks automatically, often shaped like a person, is a",p:["robot","router","printer","screen"],b:0,u:"A robot is a machine that can be programmed to do tasks automatically."},
 {j:"isi",t:"Type the missing word: The abbreviation AI stands for artificial ____.",b:["intelligence"],u:"AI means artificial intelligence."},
 {j:"pilih",t:"Which pair of words is correct? An online chat is ____ communication, but a phone call is ____ communication.",p:["written / spoken","solar / manual","silent / shared","local / lonely"],b:0,u:"Online chats are usually written, while phone calls are spoken."}],
 bos:{j:"banyak",t:"Choose ALL the things that are examples of modern technology.",p:["a smart speaker","a drone","a 3D printer","a candle","a wooden spoon"],b:[0,1,2],u:"A smart speaker, a drone and a 3D printer are modern technology. A candle and a wooden spoon are traditional objects."}},

{n:2, tempat:"Future Forms Factory", sk:"Grammar · future forms and modals of prediction", lampiran:null,
 kadNama:"four ways to talk about the future", kadEm:"\u{1F52E}", kadFakta:"Present simple: timetables (The train leaves at 6). Present continuous: arrangements (I'm meeting Zack at 5). Going to: plans and evidence (It's going to rain). Will/won't: predictions, promises, quick decisions (I'll help you).",
 bosKadNama:"might, may, will, probably", bosKadEm:"\u{1F3B2}", bosKadFakta:"will = I'm sure (It will rain). probably will = I think so (It will probably rain). may / might = it's possible (It may rain). The meaning of might/may is weaker than will.",
 soalan:[
 {j:"pilih",t:"The science museum ____ at 9 a.m. tomorrow, according to its website.",p:["opens","has opened","will be open","opened"],b:0,u:"Present simple is used for timetables and official schedules: opens."},
 {j:"pilih",t:"I can't come tonight. I ____ my cousins at the airport at 8 o'clock.",p:["am meeting","meet","will have met","have met"],b:0,u:"A personal arrangement with a time: present continuous (am meeting)."},
 {j:"pilih",t:"Look at those dark clouds! It ____ rain.",p:["is going to","will to","goes to","was going"],b:0,u:"We use going to when there is evidence now (dark clouds)."},
 {j:"pilih",t:"The phone is ringing. I ____ answer it.",p:["'ll","have answered","am answering","answered"],b:0,u:"A quick decision at the moment of speaking: will ('ll)."},
 {j:"pilih",t:"In the future, robots ____ do many boring jobs, but I'm not completely sure.",p:["might","must","will definitely","shouldn't"],b:0,u:"Might shows a possibility, not a certainty."},
 {j:"pilih",t:"I ____ pass the test. I've studied very hard, and I'm confident.",p:["will probably","might never do","couldn't have","mustn't be"],b:0,u:"Will probably shows that you think something is very likely."},
 {j:"isi",t:"Type the missing word: We ____ visit the Science Expo next month, but it depends on the weather. (possibility)",b:["might","may"],u:"Might and may express possibility."},
 {j:"isi",t:"Type the missing word: I've bought the tickets, so we ____ going to see the film on Friday. (plan)",b:["are","'re"],u:"We are going to + a plan that has already been decided."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["She will probably win, but she may be nervous.","She probably will wins, but she may nervous.","She will win probably, but she may to be nervous.","She is probably win, but she mays be nervous."],b:0,u:"Will probably + base verb, and may + be + adjective."}},

{n:3, tempat:"Expo Hall", sk:"Reading 3.1.2 · specific details in a timetable and notes", lampiran:"jadualexpo",
 kadNama:"exhibition", kadEm:"\u{1F3AA}", kadFakta:"An exhibition (expo) is a big show where companies or people present their work. Visitors can see, try and sometimes buy things.",
 bosKadNama:"admission", bosKadEm:"\u{1F39F}\u{FE0F}", bosKadFakta:"Admission is the money you pay to go into a place or an event. Admission is free means you do not have to pay.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What time does the robot show start?",p:["11.00 a.m.","10.00 a.m.","1.00 p.m.","3.30 p.m."],b:0,u:"The programme says: 11.00 a.m. Robot show."},
 {j:"pilih",t:"According to Figure 1, which activity is in Hall B?",p:["Drone race","Robot show","Coding workshop","Closing ceremony"],b:0,u:"The programme says: 1.00 p.m. Drone race (Hall B)."},
 {j:"pilih",t:"Based on Figure 1, how much is admission for a student?",p:["Free","RM5","RM10","RM15"],b:0,u:"The note says: Admission is free for students with a school card."},
 {j:"pilih",t:"What must students bring to enter without paying? (Figure 1)",p:["A school card","A laptop","A permission letter","A passport"],b:0,u:"The note says: Admission is free for students with a school card."},
 {j:"pilih",t:"Which event is going to finish the programme? (Figure 1)",p:["The closing ceremony","The drone race","The coding workshop","The robot show"],b:0,u:"The programme ends with the closing ceremony at 4.30 p.m."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that visitors may do at the expo.",p:["try virtual reality games","join a coding workshop","buy a car","take a driving test"],b:[0,1],u:"The programme includes virtual reality games and a coding workshop."},
 {j:"pilih",t:"Hana wants to see both the robot show and the drone race. Will it be possible? (Figure 1)",p:["Yes, at different times.","No, because they start together at noon.","No, because the expo is closed that day.","Yes, but only on the next day."],b:0,u:"The robot show is at 11.00 a.m., and the drone race is at 1.00 p.m., so she can see both."},
 {j:"pilih",t:"What can we infer about the expo in Figure 1?",p:["It suits young people.","It is only for professional scientists.","It is held outdoors in a park.","It lasts for a whole week."],b:0,u:"There are workshops, games and free admission for students, so it is aimed at young people."}],
 bos:{j:"pilih",t:"Rahman is arriving at 12.30 p.m. and wants to join the coding workshop at 2.00 p.m. What is he going to miss, according to Figure 1?",p:["The robot show","The drone race","The workshop","The closing ceremony"],b:0,u:"The robot show starts at 11.00 a.m., so he will have missed it. He can still see the drone race and the workshop."}},

{n:4, tempat:"Future Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"certain or possible?", kadEm:"\u{1F4FB}", kadFakta:"Listen for words that show how sure the speaker is: definitely, certainly, probably, perhaps, might, may. They change the meaning of a prediction.",
 bosKadNama:"plan or prediction?", bosKadEm:"\u{1F5D3}\u{FE0F}", bosKadFakta:"A plan: I'm going to study medicine. An arrangement: I'm seeing the doctor at four. A prediction: Doctors will use more robots in the future.",
 soalan:[
 {j:"pilih",t:"Listen. What is Amir going to do on Saturday?",dengar:"This Saturday, I'm going to build a small robot with my brother. We've already bought the parts, and we'll probably finish it by Sunday evening.",p:["Build a robot","Visit a museum","Go shopping","Learn to swim"],b:0,u:"Amir says: I'm going to build a small robot with my brother."},
 {j:"pilih",t:"Listen. When will they probably finish?",dengar:"This Saturday, I'm going to build a small robot with my brother. We've already bought the parts, and we'll probably finish it by Sunday evening.",p:["By Sunday evening","By Saturday noon","By next month","By Friday night"],b:0,u:"The speaker says: we'll probably finish it by Sunday evening."},
 {j:"pilih",t:"Listen. What does the scientist think about the future?",dengar:"I think that in fifty years, most cars will drive themselves. Passengers might read or sleep during the journey, but we may still need drivers in difficult conditions.",p:["Cars will drive themselves.","Nobody will use any cars.","Cars will fly everywhere in cities.","Cars will be impossible to buy."],b:0,u:"The scientist says: in fifty years, most cars will drive themselves."},
 {j:"pilih",t:"Listen. Which activity is only a possibility?",dengar:"I think that in fifty years, most cars will drive themselves. Passengers might read or sleep during the journey, but we may still need drivers in difficult conditions.",p:["Passengers sleeping","Cars driving themselves","The scientist's opinion","The next fifty years"],b:0,u:"Might shows a possibility: Passengers might read or sleep."},
 {j:"pilih",t:"Listen. Why can't Dina come to the party?",dengar:"I'm afraid I can't come on Friday. I'm flying to Johor at six o'clock, and I'm meeting my uncle there. I'll send you a photo from the plane!",p:["She is flying to Johor.","She is working late.","She is studying.","She doesn't like parties."],b:0,u:"Dina says: I'm flying to Johor at six o'clock."},
 {j:"pilih",t:"Listen. What will Dina send?",dengar:"I'm afraid I can't come on Friday. I'm flying to Johor at six o'clock, and I'm meeting my uncle there. I'll send you a photo from the plane!",p:["A photo","A message","A present","A video"],b:0,u:"Dina says: I'll send you a photo from the plane!"},
 {j:"pilih",t:"Listen to the announcement. What time does the train depart?",dengar:"Attention please. The 5.15 train to Ipoh leaves from Platform Two. The train will probably be a little late because of the rain, but we'll let you know.",p:["At 5.15","At 5.50","At 6.15","At 5.00"],b:0,u:"The announcer says: The 5.15 train to Ipoh leaves from Platform Two."},
 {j:"isi",t:"Listen and type the missing word: It's very cloudy. It ____ rain later.",dengar:"It's very cloudy. It might rain later.",b:["might","may"],u:"The speaker says might. Might shows a possibility."}],
 bos:{j:"pilih",t:"Listen to the speaker. What is the main message?",dengar:"Nobody knows exactly what technology will look like in thirty years. Some things will probably get smaller and faster, and other things might not exist yet. What matters is that we learn to use technology wisely.",p:["We must use new technology wisely.","Technology will disappear.","Nothing will change in thirty years.","Only scientists understand technology."],b:0,u:"The speaker says: What matters is that we learn to use technology wisely."}},

{n:5, tempat:"Innovation Gazette", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"robotmasadepan",
 kadNama:"automation", kadEm:"\u{2699}\u{FE0F}", kadFakta:"Automation means using machines or computers to do work that people did before. Automation can make work faster, but some jobs may change.",
 bosKadNama:"predict", bosKadEm:"\u{1F52E}", bosKadFakta:"To predict is to say what you think will happen in the future. Predictions use words such as will, might, may and probably.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Robots will change jobs, but people are needed.","Robots will take all the jobs by next year.","Robots are far too expensive for any factory.","Robots can never do any dangerous work."],b:0,u:"The article predicts that robots will change work, but humans will still be important."},
 {j:"pilih",t:"According to Text 1, which jobs are robots likely to do first?",p:["Repetitive and risky jobs","Creative jobs in art","Teaching jobs in schools","Caring jobs in hospitals"],b:0,u:"The text says robots will probably take repetitive and dangerous jobs first."},
 {j:"pilih",t:"The word repetitive in Text 1 means",p:["done again and again","very hard to do","very costly to do","done in complete secret"],b:0,u:"Repetitive tasks are the same actions repeated many times."},
 {j:"pilih",t:"What may happen to jobs, according to Text 1?",p:["Some may go and new ones may appear.","All jobs will disappear completely.","No jobs will ever change at all.","Only the old jobs will exist."],b:0,u:"The text says: Some jobs may disappear, but new jobs might appear."},
 {j:"pilih",t:"Why does the writer say people will still be needed? (Text 1)",p:["Robots cannot copy human kindness.","Robots are all made of old wood.","People are cheaper than any robot.","Robots do not need any electricity."],b:0,u:"The text says robots still cannot copy human creativity and kindness."},
 {j:"banyak",t:"Based on Text 1, choose TWO skills that will be important in the future.",p:["creativity","communication","memorising numbers","lifting heavy boxes"],b:[0,1],u:"The text says creativity and communication will be especially valuable."},
 {j:"pilih",t:"What can we infer about the writer's attitude? (Text 1)",p:["She is hopeful about it.","She is afraid of all robots.","She hates modern technology.","She is bored with the topic."],b:0,u:"The writer says new technology will probably create new chances, so she is hopeful."},
 {j:"pilih",t:"Which sentence expresses a POSSIBILITY in Text 1?",p:["New jobs might appear.","Robots are machines.","Factories use robots today.","The writer teaches science."],b:0,u:"Might shows a possibility. The other sentences are facts."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Working with Robots","A Day at the Zoo","My First Phone","The History of Paper"],b:0,u:"The text is about how people and robots will work together."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · plans and predictions in an email", lampiran:null,
 kadNama:"plan or prediction?", kadEm:"\u{1F4DD}", kadFakta:"Choose the form that fits your message: a plan (going to), an arrangement (present continuous), a timetable (present simple) or a prediction (will / might / may).",
 bosKadNama:"vary your language", bosKadEm:"\u{2728}", bosKadFakta:"Do not use only will. Use I'm going to, we're meeting, it might, it will probably. A good message uses different forms for different meanings.",
 soalan:[
 {j:"isi",t:"Type the missing word: Tomorrow's lesson ____ at 8 a.m., so don't be late. (timetable)",b:["starts","begins"],u:"A timetable is expressed in the present simple: starts."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: I'm go to study robotics next year.",b:["going"],u:"Plan: be going to + base verb: I'm going to study."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["It","will","probably","rain","this","afternoon."],b:[0,1,2,3,4,5],u:"Will probably + base verb: It will probably rain."},
 {j:"pilih",t:"Which sentence is a prediction with a possibility?",p:["We might travel to Mars one day.","We are travelling to Mars on Friday.","We travel to Mars every day.","We have travelled to Mars."],b:0,u:"Might + base verb shows a possibility in the future."},
 {j:"pilih",t:"Which sentence is correct?",p:["I'm meeting my friends at 4 o'clock.","I'm meet my friends at 4 o'clock.","I will meeting my friends at 4 o'clock.","I meeting my friends at 4 o'clock."],b:0,u:"An arrangement uses the present continuous: am meeting."},
 {j:"pilih",t:"Which sentence is written correctly?",p:["It may be cold tomorrow, so take a jacket.","It may to be cold tomorrow, so take a jacket.","It mays be cold tomorrow, so take a jacket.","It may being cold tomorrow, so take a jacket."],b:0,u:"After may, use the base verb: may be."},
 {j:"susun",t:"Put the sentences in order to make a short email.",p:["Hi Rina,","I'm going to visit the Science Expo on Saturday.","We might see a robot show, too.","Would you like to come with me?"],b:[0,1,2,3],u:"An email starts with a greeting, gives the plan, adds a possibility and ends with a question."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If it rains, we'll probably stay at home.","If it rains we'll, probably stay at home.","if it rains, we'll probably stay at home","If it rains; we'll probably stay at home."],b:0,u:"A comma goes after the if clause, and the sentence begins with a capital letter."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the email: I'm so excited about our trip next week. ____",p:["I think it will be fantastic, but we might need warm clothes.","I think it fantastic, but we will might need warm clothes.","I think it will to be fantastic, but we might needs warm clothes.","I thinking it will fantastic, but we may needing warm clothes."],b:0,u:"Will + be for a prediction, and might + need for a possibility."}}
];

module.exports = {
  id:"e3b3", tingkatan:3, kod:"Unit 3 Tomorrow's World",
  tajuk:"Future Makers", subtajuk:"English Form 3 · Unit 3 Tomorrow's World",
  spi:SPI_B1_T3,
  ulasan:ulasanBab("technology, the future and modals of prediction", "Tomorrow's World"),
  lampiran:{
   jadualexpo:jadual(1, "The programme of a school technology expo", "Young Tech Expo · Programme",
     ["Time","Activity"],
     [["10.00 a.m.","Virtual reality games (Hall A)"],["11.00 a.m.","Robot show (Hall A)"],["1.00 p.m.","Drone race (Hall B)"],["2.00 p.m.","Coding workshop (Room 3)"],["4.30 p.m.","Closing ceremony (Hall A)"]],
     "**Admission:** RM10. Admission is free for students with a school card."),
   robotmasadepan:teks(1, "A newspaper article about robots and jobs", "Working with Robots",
     ["Robots are already common in factories, but in the next twenty years, they will probably appear in many more places. Experts predict that robots will do repetitive and dangerous work first, such as moving heavy boxes or cleaning pipes.",
      "Some jobs may disappear, but new jobs might appear, too. Somebody will have to design, build and repair the robots. Creativity and communication will be especially valuable, because robots still cannot copy human kindness or new ideas.",
      "'The future of work isn't about humans against machines,' says one scientist. 'It's about humans working with machines.' New technology will probably create new chances for those who are ready to learn."],
     "Practice text: invented newspaper article")
  },
  aras:ARAS
};
