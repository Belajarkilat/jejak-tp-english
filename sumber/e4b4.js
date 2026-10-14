/* Sumber kandungan — English KSSM Form 4, Unit 4 He Said, She Said
   DSKP Form 4 Grammar: reported speech (requests; reporting verbs and their patterns: agree to, remind someone to,
   suggest that, accuse of, deny + -ing, refuse to). Tema People and Culture / Media.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, emel, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Newsroom Lobby", sk:"Vocabulary · media, news and reporting verbs", lampiran:null,
 kadNama:"reporting verbs", kadEm:"\u{1F4F0}", kadFakta:"Reporting verbs show what the speaker did: suggest, remind, refuse, agree, deny, accuse, warn, advise, promise, admit, complain.",
 bosKadNama:"headline", bosKadEm:"\u{1F4F0}", bosKadFakta:"A headline is the title of a news story. It is short and uses strong words so that readers want to read on.",
 soalan:[
 {j:"pilih",gbr:"\u{1F4F0}",t:"A short title at the top of a news story is a",p:["headline","caption","signature","recipe"],b:0,u:"A headline is the title of a newspaper article."},
 {j:"pilih",gbr:"\u{1F3A4}",t:"A person who asks questions in order to write a news report is a",p:["journalist","lawyer","pilot","chef"],b:0,u:"A journalist collects and reports news."},
 {j:"pilih",gbr:"\u{1F4FA}",t:"The event was ____ live on television, so millions of people saw it as it happened.",p:["broadcast","borrowed","delayed","fixed"],b:0,u:"To broadcast is to send out a programme on television or radio."},
 {j:"pilih",t:"Which word means 'to say that you will not do something'?",p:["refuse","agree","suggest","remind"],b:0,u:"To refuse is to say firmly that you will not do something."},
 {j:"pilih",t:"Which verb is used when you say that you did NOT do something wrong?",p:["deny","admit","promise","accept"],b:0,u:"To deny is to say that something is not true."},
 {j:"pilih",t:"When you give someone an idea of what they could do, you ____ it.",p:["suggest","accuse","refuse","deny"],b:0,u:"To suggest is to offer an idea or a plan."},
 {j:"isi",t:"Type the missing word: The police officer ____ him of stealing the bag. (said that he did it)",b:["accused"],u:"To accuse someone of + -ing means to say that they did something wrong."},
 {j:"pilih",t:"Which of these is a reliable source of information?",p:["an official report","a rumour","a random comment","a joke"],b:0,u:"An official report is based on facts and checked information."}],
 bos:{j:"banyak",t:"Choose ALL the reporting verbs.",p:["suggested","reminded","refused","happened","arrived"],b:[0,1,2],u:"Suggested, reminded and refused are reporting verbs. Happened and arrived are ordinary verbs."}},

{n:2, tempat:"Reported Speech Room", sk:"Grammar · reported speech, requests and reporting verbs", lampiran:null,
 kadNama:"backshift", kadEm:"\u{23EA}", kadFakta:"In reported speech, the verb usually moves one step into the past: 'I am tired.' → She said (that) she was tired. 'I will help.' → He said (that) he would help. Pronouns and time words change: today → that day, tomorrow → the next day.",
 bosKadNama:"reporting-verb patterns", bosKadEm:"\u{1F9E9}", bosKadFakta:"agree to + verb (He agreed to help). refuse to + verb. remind someone to + verb. suggest that + clause (She suggested that we leave early). deny + -ing (He denied taking it). accuse someone of + -ing.",
 soalan:[
 {j:"pilih",t:"'I am tired,' said Ben. → Ben said that he ____ tired.",p:["was","is","will be","has been"],b:0,u:"Backshift: am → was."},
 {j:"pilih",t:"'I will call you tomorrow,' she said. → She said that she ____ call me the next day.",p:["would","will","can","has"],b:0,u:"Backshift: will → would."},
 {j:"pilih",t:"'Please close the window,' said the teacher. → The teacher asked us ____ the window.",p:["to close","closing","close","that we close"],b:0,u:"Reported request: asked + object + to + base verb."},
 {j:"pilih",t:"'Don't touch the wires,' he said. → He told us ____ the wires.",p:["not to touch","don't touch","to not touching","not touching"],b:0,u:"Reported negative command: told + object + not to + base verb."},
 {j:"pilih",t:"'You should rest,' said the doctor. → The doctor suggested that I ____ .",p:["rest","rested","resting","to rest"],b:0,u:"Suggest that + subject + base verb."},
 {j:"pilih",t:"He refused ____ his mistake.",p:["to admit","admitting","admit","to admitting"],b:0,u:"Refuse + to + base verb."},
 {j:"isi",t:"Type the missing word: The accused man ____ stealing the bag. (He said that he did not do it.)",b:["denied"],u:"Deny + -ing: He denied stealing the bag."},
 {j:"isi",t:"Type the missing word: My mother ____ me to take my umbrella. (She said, 'Don't forget your umbrella.')",b:["reminded"],u:"Remind someone to + base verb."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["She said that she would meet me the next day.","She said that she will meet me tomorrow.","She said that she meets me the next day.","She told that she would to meet me the next day."],b:0,u:"Backshift: will → would, tomorrow → the next day."}},

{n:3, tempat:"Press Wall", sk:"Reading 3.1.2 · specific details in an email thread and notice", lampiran:"emelwawancara",
 kadNama:"interview", kadEm:"\u{1F399}\u{FE0F}", kadFakta:"An interview is a formal conversation where one person asks questions and another answers. Journalists interview people to get information.",
 bosKadNama:"confirm", bosKadEm:"\u{2705}", bosKadFakta:"To confirm is to say that something is definitely true or going to happen. Please confirm your attendance by Friday.",
 soalan:[
 {j:"pilih",t:"Look at Text 1. Who wrote the email?",p:["A magazine editor","A traffic police officer","A busy shop assistant","A football team coach"],b:0,u:"The email is from the editor of the school magazine."},
 {j:"pilih",t:"According to Text 1, who will be interviewed?",p:["The head prefect","The principal","A bus driver","A parent"],b:0,u:"The email says: We would like to interview the head prefect."},
 {j:"pilih",t:"What does the editor remind Aiman to bring? (Text 1)",p:["The list of events","A new digital camera","A small microphone","A big birthday cake"],b:0,u:"The email says: Please remember to bring the list of school events."},
 {j:"pilih",t:"When will the interview take place? (Text 1)",p:["On Thursday afternoon","On Monday at 8.00 a.m.","On Friday at 6.00 p.m.","On Sunday at noon"],b:0,u:"The email says: The interview will be on Thursday at 2.30 p.m."},
 {j:"pilih",t:"Where will they meet? (Text 1)",p:["In the media room","In the canteen","On the field","At the bus stop"],b:0,u:"The email says: We'll meet in the media room."},
 {j:"banyak",t:"Based on Text 1, choose TWO things the editor asks Aiman to do.",p:["confirm the time","prepare a list of events","write the magazine alone","find a new editor"],b:[0,1],u:"The editor asks Aiman to confirm the time and to prepare the list of events."},
 {j:"pilih",t:"What does the editor suggest? (Text 1)",p:["That it is published next week","That the school closes early","That Aiman cancels the whole interview","That the magazine is sold out"],b:0,u:"The email says: I suggest that we publish the article next week."},
 {j:"pilih",t:"What can we infer about the editor? (Text 1)",p:["She is organised and kind.","She is rather careless.","She is quite rude to him.","She is bored with the task."],b:0,u:"She gives clear instructions and uses polite language, so she is organised and polite."}],
 bos:{j:"pilih",t:"Which sentence reports the editor's request correctly? (Text 1)",p:["The editor asked Aiman to confirm the time.","The editor asked Aiman confirm the time.","The editor asks that Aiman confirmed the time.","The editor said Aiman to confirm the time."],b:0,u:"Ask + object + to + base verb."}},

{n:4, tempat:"Interview Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"who said what?", kadEm:"\u{1F3A7}", kadFakta:"When you listen to a report, notice who said what: Mr Lim said that ... / She told me that ... Reporting verbs show the speaker's attitude.",
 bosKadNama:"report back", bosKadEm:"\u{1F4DD}", bosKadFakta:"After you listen, practise reporting what you heard using said that, asked me to, suggested that, refused to.",
 soalan:[
 {j:"pilih",t:"Listen. What did the manager say?",dengar:"Our manager said that the meeting would start at nine o'clock. He asked everyone to arrive on time, and he reminded us to bring our reports.",p:["The meeting would start at nine.","The meeting was cancelled.","The meeting would start at noon.","The meeting was moved to Monday."],b:0,u:"The speaker says: the meeting would start at nine o'clock."},
 {j:"pilih",t:"Listen. What did the manager remind everyone to do?",dengar:"Our manager said that the meeting would start at nine o'clock. He asked everyone to arrive on time, and he reminded us to bring our reports.",p:["Bring their reports","Wear a tie today","Bring their own lunch","Call a client at noon"],b:0,u:"The speaker says: he reminded us to bring our reports."},
 {j:"pilih",t:"Listen. What did the boy deny?",dengar:"The boy denied breaking the window. He said that he had been at home all afternoon, and his mother agreed to speak to the principal.",p:["Breaking the window","Going home early today","Seeing his mother there","Speaking English at all"],b:0,u:"The speaker says: The boy denied breaking the window."},
 {j:"pilih",t:"Listen. What did the mother agree to do?",dengar:"The boy denied breaking the window. He said that he had been at home all afternoon, and his mother agreed to speak to the principal.",p:["Speak to the principal","Pay for the window","Punish the boy","Move to another town"],b:0,u:"The speaker says: his mother agreed to speak to the principal."},
 {j:"pilih",t:"Listen. What did the doctor suggest?",dengar:"The doctor suggested that I sleep earlier and drink more water. She also warned me not to skip breakfast.",p:["Sleep earlier","Run more","Stop studying","Eat less"],b:0,u:"The speaker says: The doctor suggested that I sleep earlier."},
 {j:"pilih",t:"Listen. What did the doctor warn the speaker about?",dengar:"The doctor suggested that I sleep earlier and drink more water. She also warned me not to skip breakfast.",p:["Skipping breakfast","Drinking water","Going to bed early","Seeing a dentist"],b:0,u:"The speaker says: She also warned me not to skip breakfast."},
 {j:"pilih",t:"Listen. Why did the customer complain?",dengar:"The customer complained that the food was cold. He refused to pay for it, and he asked to speak to the manager.",p:["The food was cold.","The food was too expensive.","The waiter was late.","The restaurant was crowded."],b:0,u:"The speaker says: The customer complained that the food was cold."},
 {j:"isi",t:"Listen and type the missing word: She ____ to answer my question.",dengar:"She refused to answer my question.",b:["refused"],u:"The speaker says refused. Refuse + to + base verb."}],
 bos:{j:"pilih",t:"Listen to the news. What is the main idea?",dengar:"The mayor announced that the new library would open next month. He promised that it would have free internet, and he invited all students to visit. A spokesperson added that the building had been completed ahead of schedule.",p:["A library will open soon.","The old library has closed down.","The mayor has resigned from office.","The internet is not free there."],b:0,u:"The mayor announced that the new library would open next month."}},

{n:5, tempat:"Feature Desk", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"wawancaraperenang",
 kadNama:"interview report", kadEm:"\u{1F4F0}", kadFakta:"In a newspaper interview, journalists often report what the person said: She said that ... He explained that ... She admitted that ... Quotations in inverted commas are exact words.",
 bosKadNama:"quote", bosKadEm:"\u{1F4AC}", bosKadFakta:"A quote is the exact words that someone said, written inside quotation marks. A reported statement does not use quotation marks and changes the tense.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A swimmer explains her success.","A swimmer lost an important race.","A swimmer is moving to another country.","A swimmer is retiring from sport."],b:0,u:"The article reports an interview with a swimmer who explains how she achieved success."},
 {j:"pilih",t:"According to Text 1, how often does Mei train? (Text 1)",p:["Six days a week","Once a month","Every day of the year","Never"],b:0,u:"The text says she told the reporter that she trained six days a week."},
 {j:"pilih",t:"What did Mei admit? (Text 1)",p:["She sometimes wanted to quit.","She disliked swimming very much.","She had never trained at all.","She was afraid of deep water."],b:0,u:"The text says: She admitted that she had sometimes wanted to give up."},
 {j:"pilih",t:"The word admitted in Text 1 means",p:["agreed that it was true","refused to say anything","asked a difficult question","made a funny joke"],b:0,u:"To admit is to agree or accept that something is true, often reluctantly."},
 {j:"pilih",t:"What did her coach advise her to do? (Text 1)",p:["Rest and eat well","Quit at once","Swim only at night","Train twice a day"],b:0,u:"The text says: Her coach advised her to rest and eat well."},
 {j:"banyak",t:"Based on Text 1, choose TWO pieces of advice that Mei gave to young swimmers.",p:["Never give up.","Enjoy the sport.","Skip training.","Compete only for money."],b:[0,1],u:"The text says she told young swimmers never to give up and to enjoy the sport."},
 {j:"pilih",t:"What can we infer about Mei? (Text 1)",p:["She is humble and hardworking.","She is rather arrogant.","She is quite lazy at times.","She dislikes her own coach."],b:0,u:"She admits her difficulties and gives credit to her coach, so she is humble and hardworking."},
 {j:"pilih",t:"Which sentence in Text 1 is reported speech?",p:["She told the reporter that she trained six days a week.","'I never give up,' she said clearly in the interview.","Mei is a young swimmer from the state of Perak.","The race was very exciting for the whole crowd."],b:0,u:"She told the reporter that she trained ... is reported speech: no quotation marks and the verb moved back."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["A Swimmer's Story","The History of Swimming Pools","How to Build a Large Pool","A Day in the Water Park"],b:0,u:"The text is about how Mei succeeded through persistence."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · report what people said", lampiran:null,
 kadNama:"report accurately", kadEm:"\u{1F4DD}", kadFakta:"When you report, change: tense (am → was), pronouns (I → he), time words (tomorrow → the next day), and use the right reporting verb pattern.",
 bosKadNama:"common mistakes", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Do not say 'She told that...' (use 'She told me that...' or 'She said that...'). Do not say 'He suggested me to go' (use 'He suggested that I go').",
 soalan:[
 {j:"isi",t:"Type the missing word: 'I will help you,' she said. → She said that she ____ help me.",b:["would"],u:"Backshift: will → would."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: She said me that she was tired.",b:["told"],u:"Say does not take an object directly. Use told me (or said that)."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["He","refused","to","answer","the","question."],b:[0,1,2,3,4,5],u:"Refuse + to + base verb."},
 {j:"pilih",t:"Which sentence is correct?",p:["He denied taking the money.","He denied to take the money.","He denied that to take the money.","He denied taken the money."],b:0,u:"Deny + -ing."},
 {j:"pilih",t:"Which sentence reports a reminder correctly?",p:["She reminded me to lock the door.","She reminded me locking the door.","She reminded to me lock the door.","She reminded that I to lock the door."],b:0,u:"Remind + object + to + base verb."},
 {j:"pilih",t:"Which sentence reports a suggestion correctly?",p:["He suggested that we leave early.","He suggested us to leave early.","He suggested that we to leave early.","He suggested leaving us early."],b:0,u:"Suggest + that + subject + base verb."},
 {j:"susun",t:"Put the sentences in order to make a short news report.",p:["The mayor announced a new plan yesterday.","He said that the park would be repaired.","He promised that the work would finish in June.","Residents welcomed the news."],b:[0,1,2,3],u:"Start with the announcement, report what was said, add a promise and end with a reaction."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["She said that she would arrive on Monday.","She said, that she would arrive on Monday.","She said that, she would arrive on Monday.","She said that she would arrive; on Monday."],b:0,u:"Reported speech needs no comma after said that."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the report: 'I'm sorry I'm late,' said Rina. ____",p:["Rina apologised for being late and promised to arrive on time next time.","Rina apologised for be late and promised arrive on time next time.","Rina apologised to being late and promise to arrive on time next time.","Rina apologise for being late and promised arriving on time next time."],b:0,u:"Apologise for + -ing; promise + to + base verb."}}
];

module.exports = {
  id:"e4b4", tingkatan:4, kod:"Unit 4 He Said, She Said",
  tajuk:"News Reporters", subtajuk:"English Form 4 · Unit 4 He Said, She Said",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("news, interviews and reported speech", "He Said, She Said"),
  lampiran:{
   emelwawancara:emel(1, "An email from a magazine editor", {dari:"Puan Shuhada <editor@majalah.example>", kepada:"Aiman <aiman@sekolah.example>", subjek:"Interview with the head prefect",
     isi:["Dear Aiman,",
      "Thank you for agreeing to be interviewed. The interview will be on Thursday at 2.30 p.m., and we'll meet in the media room.",
      "Please remember to bring the list of school events, and please confirm the time by email. I suggest that we publish the article next week.",
      "Best wishes,","Puan Shuhada"]}),
   wawancaraperenang:teks(1, "A newspaper interview", "Never Give Up: A Swimmer's Story",
     ["Mei, 17, won a gold medal at the state championships last week. She told the reporter that she trained six days a week and that she never missed a session. She admitted that she had sometimes wanted to give up.",
      "Her coach advised her to rest and eat well, and she explained that his support had been essential. 'I could not have done it alone,' she said.",
      "She told young swimmers never to give up and to enjoy the sport. 'If you love what you do, success will follow,' she added."],
     "Practice text: invented newspaper interview")
  },
  aras:ARAS
};
