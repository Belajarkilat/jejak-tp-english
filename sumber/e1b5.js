/* Sumber kandungan — English KSSM Form 1, Unit 5 Let's experiment
   DSKP Form 1 Textbook scope and sequence: Tema Science and Technology, Unit 5.
   Tatabahasa: much/many/a lot of, will/won't, first conditional. Kosa kata: science, science in the classroom.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { emel, poster, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Science Lab", sk:"Vocabulary · science and science in the classroom", lampiran:null,
 kadNama:"gravity", kadEm:"\u{1F34E}", kadFakta:"Gravity is the force that pulls things down towards the Earth. It is why an apple falls from a tree and does not float away.",
 bosKadNama:"vaccine", bosKadEm:"\u{1F489}", bosKadFakta:"A vaccine is a medicine that helps your body fight a disease before you get it.",
 soalan:[
 {j:"pilih",gbr:"\u{1F321}\u{FE0F}",t:"Which instrument measures how hot or cold something is?",p:["thermometer","microscope","stopwatch","battery pack"],b:0,u:"A thermometer measures temperature."},
 {j:"pilih",gbr:"\u{1F52C}",t:"Scientists work in a",p:["laboratory","big stadium","small cinema","busy bakery"],b:0,u:"A laboratory (lab) is a room where scientists do experiments."},
 {j:"pilih",gbr:"\u{1F9EA}",t:"Which piece of equipment is a thin glass tube for holding liquids in experiments?",p:["test tube","solar panel","spacecraft","satellite"],b:0,u:"A test tube is a narrow glass tube used for small amounts of liquid."},
 {j:"pilih",gbr:"\u{1F31E}\u{1F50B}",t:"A solar panel changes sunlight into",p:["electricity","heavy rain","natural gas","strong wind"],b:0,u:"A solar panel uses sunlight to make electricity."},
 {j:"pilih",gbr:"\u{1F4A5}",t:"A sudden loud burst, for example when something bursts with a big bang, is an",p:["explosion","experiment","invention","engine"],b:0,u:"An explosion is a sudden, loud and powerful burst."},
 {j:"pilih",gbr:"\u{1F6F0}\u{FE0F}",t:"A machine that goes around the Earth and sends information is a",p:["satellite","glass jug","thermometer","big battery"],b:0,u:"A satellite orbits the Earth and sends information such as TV signals and weather pictures."},
 {j:"isi",gbr:"\u{1F9EC}",t:"Type the missing word (three letters): The molecule inside cells that carries information about living things is called ____.",b:["DNA","dna"],u:"DNA is the molecule inside cells that carries the information of life."},
 {j:"pilih",t:"At normal room temperature, water is a",p:["liquid","solid","gas","test tube"],b:0,u:"Water is normally a liquid. Ice is a solid and steam is a gas."}],
 bos:{j:"banyak",t:"Choose ALL the things that help produce clean energy.",p:["solar panel","wind turbine","battery","explosion","thermometer"],b:[0,1],u:"A solar panel and a wind turbine make electricity from the sun and the wind. A battery only stores electricity."}},

{n:2, tempat:"Predict Point", sk:"Grammar · much/many/a lot of, will/won't, first conditional", lampiran:null,
 kadNama:"much / many", kadEm:"\u{1F522}", kadFakta:"many + countable nouns (many books). much + uncountable nouns (much water). In positive sentences, use a lot of for both.",
 bosKadNama:"first conditional", bosKadEm:"\u{1F52E}", bosKadFakta:"If + present simple, will + base verb. Example: If it rains, we will stay at home. It talks about a real possibility in the future.",
 soalan:[
 {j:"pilih",t:"How ____ people were at the science fair?",p:["many","much","a lot","any"],b:0,u:"People is countable, so we say How many people."},
 {j:"pilih",t:"How ____ food will we need for the camp?",p:["much","many","some","a few"],b:0,u:"Food is uncountable, so we say How much food."},
 {j:"pilih",t:"There isn't ____ rain in summer.",p:["much","many","a few","one"],b:0,u:"Rain is uncountable. In negative sentences we use much."},
 {j:"pilih",t:"In 2050, robots ____ do many jobs for humans.",p:["will","are going","did","was"],b:0,u:"Will talks about the future: robots will do many jobs."},
 {j:"pilih",t:"Learning a second language ____ necessary in the future.",p:["won't be","didn't be","doesn't be","isn't"],b:0,u:"The negative of will is won't (will not): won't be necessary."},
 {j:"pilih",t:"If scientists continue to experiment, they ____ cures for more diseases.",p:["will find","find","are finding now","found"],b:0,u:"First conditional: If + present simple, will + base verb."},
 {j:"isi",t:"Type the missing words: If we aren't careful with the chemicals, there ____ more explosions in class. (will be)",b:["will be"],u:"First conditional: If + present simple, will + base verb: there will be."},
 {j:"isi",t:"Type the short answer. Will humans be able to fly? Yes, they ____.",b:["will"],u:"A short answer repeats will: Yes, they will."}],
 bos:{j:"pilih",t:"Choose the correct sentence.",p:["If you heat ice, it will turn into water.","If you will heat ice, it turns into water.","If you heat ice, it turning into water.","If you are heat ice, it will turn to water."],b:0,u:"If + present simple (heat), will + base verb (will turn)."}},

{n:3, tempat:"Poster Wall", sk:"Reading 3.1.2 · specific details in a poster", lampiran:"pameran",
 kadNama:"competition", kadEm:"\u{1F3C6}", kadFakta:"A competition is an event where people try to win. A prize is what you get when you win.",
 bosKadNama:"register", bosKadEm:"\u{1F4DD}", bosKadFakta:"To register = to put your name on a list to join something. Registration is the act of registering.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What is the name of the event?",p:["Young Scientist Fair","Annual Sports Day","School Book Fair","Special Music Night"],b:0,u:"The poster says: YOUNG SCIENTIST FAIR 2027."},
 {j:"pilih",t:"According to Figure 1, when is the fair?",p:["12 March","12 May","21 March","2 March"],b:0,u:"The poster says: Date: 12 March."},
 {j:"pilih",t:"Based on Figure 1, how many members can be in one team?",p:["Three","Two","Four","Five"],b:0,u:"The poster says: Teams of three pupils."},
 {j:"pilih",t:"Where will the fair be held? (Figure 1)",p:["In the school hall","In the science lab","On the school field","In the canteen"],b:0,u:"The poster says: Venue: School hall."},
 {j:"pilih",t:"What will the winners get? (Figure 1)",p:["A trip to the Science Centre","A new laptop for school","A prize of one thousand ringgit","A new bicycle for each person"],b:0,u:"The poster says: The winning team will visit the National Science Centre."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things teams must bring.",p:["their own project","a poster about the project","a lunch box","a football"],b:[0,1],u:"The poster says: Bring your project and a poster explaining it."},
 {j:"pilih",t:"Figure 1 says registration closes on 28 February. What will happen if a team registers late?",p:["It won't be able to join.","It will get a prize.","It will join for free.","It will join the next fair."],b:0,u:"The poster says: Late registrations will not be accepted."},
 {j:"pilih",t:"Who should a pupil see to register? (Figure 1)",p:["Mr Faizal","The school guard at the gate","The canteen worker","The head prefect of Form 5"],b:0,u:"The poster says: Register with Mr Faizal in the Science Room."}],
 bos:{j:"pilih",t:"Nadia's team has three members, but she registers on 3 March. What will happen, according to Figure 1?",p:["They can't join because it closed.","They will join with a smaller prize.","They will join as a team of two members.","They will be the first group to enter."],b:0,u:"Registration closes on 28 February, and late registrations will not be accepted."}},

{n:4, tempat:"Lab Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"predict", kadEm:"\u{1F52E}", kadFakta:"predict = say what will happen in the future. Listen for will, won't and if. Example: If the ice melts, the water will rise.",
 bosKadNama:"instructions", bosKadEm:"\u{1F4CB}", bosKadFakta:"When you listen to instructions, listen for ORDER words: first, next, then, finally, and for numbers and equipment.",
 soalan:[
 {j:"pilih",t:"Listen. What will the weather be like tomorrow?",dengar:"Tomorrow will be very hot. It won't rain at all, so please bring a bottle of water to school.",p:["Hot and dry","Rainy and cold","Cold and windy","Cloudy and wet"],b:0,u:"The speaker says: Tomorrow will be very hot. It won't rain at all."},
 {j:"pilih",t:"Listen. What does the speaker ask the pupils to bring?",dengar:"Tomorrow will be very hot. It won't rain at all, so please bring a bottle of water to school.",p:["A bottle of water","A thick raincoat","A warm woollen jacket","A big umbrella"],b:0,u:"The speaker says: please bring a bottle of water to school."},
 {j:"pilih",t:"Listen. What will happen if the pupils mix the two chemicals?",dengar:"Be careful with the chemicals. If you mix these two liquids, they will make a lot of gas. The test tube may burst.",p:["They will make a lot of gas.","They will turn into ice.","They will become water.","Nothing will happen."],b:0,u:"The speaker says: If you mix these two liquids, they will make a lot of gas."},
 {j:"pilih",t:"Listen. How many drops of water does the teacher use?",dengar:"First, put one spoon of salt into a jug. Next, add three drops of water and stir. Then wait for two minutes.",p:["Three","One drop","Two drops","Five drops"],b:0,u:"The speaker says: add three drops of water."},
 {j:"pilih",t:"Listen to the instructions. What do you do FIRST?",dengar:"First, put one spoon of salt into a jug. Next, add three drops of water and stir. Then wait for two minutes.",p:["Put salt into a jug","Add three drops of water","Stir the mixture well","Wait for two minutes"],b:0,u:"The speaker says: First, put one spoon of salt into a jug."},
 {j:"pilih",t:"Listen. What does the scientist say about the future?",dengar:"I think that in twenty years, cars will fly and robots will clean our houses. People won't need to drive any more.",p:["Cars will fly.","People will drive more.","Robots won't exist.","Houses will be smaller."],b:0,u:"The scientist says: cars will fly and robots will clean our houses."},
 {j:"pilih",t:"Listen. How many people were at the science fair?",dengar:"There were a lot of visitors at the science fair. About two hundred people came, and many of them were students.",p:["About two hundred","About twenty people","About two thousand","About fifty people"],b:0,u:"The speaker says: About two hundred people came."},
 {j:"isi",t:"Listen and type the missing word: If you heat the water, it ____ boil.",dengar:"If you heat the water, it will boil.",b:["will"],u:"The speaker says will. First conditional: If + present simple, will + base verb."}],
 bos:{j:"pilih",t:"Listen to the lab rules. What must pupils always wear?",dengar:"Welcome to the science lab. There are three important rules. First, do not run. Second, never taste anything. Third, always wear your safety glasses when you do experiments.",p:["Safety glasses","A warm hat","Sports shoes","Rubber gloves"],b:0,u:"The speaker says: always wear your safety glasses when you do experiments."}},

{n:5, tempat:"Email Corner", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"emel",
 kadNama:"invention", kadEm:"\u{1F4A1}", kadFakta:"An invention is something new that someone makes for the first time. The person who makes it is an inventor.",
 bosKadNama:"purpose", bosKadEm:"\u{1F3AF}", bosKadFakta:"The purpose of a text is WHY it was written: to inform, to invite, to ask, or to persuade. Think about what the writer wants the reader to DO.",
 soalan:[
 {j:"pilih",t:"What is the main purpose of Text 1?",p:["To invite Hasan to a workshop","To tell Hasan about her holiday","To ask Hasan to return a book","To thank Hasan for a nice gift"],b:0,u:"The email invites Hasan to join the Robot Workshop."},
 {j:"pilih",t:"According to Text 1, when does the workshop begin?",p:["At 9 a.m. on Saturday","At 9 p.m. on Saturday","At 9 a.m. on Sunday","At 7 a.m. on Friday"],b:0,u:"The email says: The workshop begins at 9 a.m. on Saturday."},
 {j:"pilih",t:"What will the participants build? (Text 1)",p:["A small robot","A solar-powered car","A big telescope","A model volcano"],b:0,u:"The email says: You will build your own small robot."},
 {j:"pilih",t:"The word participants in Text 1 means",p:["people who join in","people who teach","people who watch","people who sell"],b:0,u:"Participants are the people who take part in an activity."},
 {j:"pilih",t:"Why does Dr Aini ask Hasan to bring a laptop? (Text 1)",p:["To write a program","To play computer games","To watch a short film","To take many photos"],b:0,u:"The email says: Bring a laptop so that you can write a program for your robot."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that will be provided at the workshop.",p:["the parts for the robot","lunch","laptops","a bicycle"],b:[0,1],u:"The email says: All the parts and lunch will be provided."},
 {j:"pilih",t:"What can we infer about Hasan from Text 1?",p:["He likes technology.","He dislikes learning science.","He has built a robot before.","He lives very far away from here."],b:0,u:"The email says Hasan joined a coding club, so he is interested in technology."},
 {j:"pilih",t:"What will happen if Hasan doesn't reply before Friday? (Text 1)",p:["Another pupil may get his place.","He will win a special prize.","He will get a free laptop at home.","The workshop will be cancelled."],b:0,u:"The email says: If you do not reply before Friday, we will offer your place to another pupil."}],
 bos:{j:"pilih",t:"Which of these is the BEST subject for the email?",p:["Robot Workshop invitation","Please return my book to the library","Holiday photos from Sabah","Football match this Sunday"],b:0,u:"The email is an invitation to the Robot Workshop."}},

{n:6, tempat:"Lab Report Desk", sk:"Writing 4.1.2 · Grammar · describe predictions and results", lampiran:null,
 kadNama:"report steps", kadEm:"\u{1F4D1}", kadFakta:"A short experiment report: Aim (what we want to find out), Materials, Method (First, Next, Then), Result and Conclusion.",
 bosKadNama:"will vs. going to", bosKadEm:"\u{1F52E}", bosKadFakta:"Use will for predictions (I think it will rain). Use be going to for plans you already decided (I'm going to study science).",
 soalan:[
 {j:"isi",t:"Type the missing words: If it rains tomorrow, we ____ stay at home. (will)",b:["will"],u:"First conditional: If + present simple, will + base verb."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: How many water do we need?",b:["much"],u:"Water is uncountable, so we say How much water."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["If","you","heat","water,","it","will","boil."],b:[0,1,2,3,4,5,6],u:"First conditional: If + you heat water, it will boil."},
 {j:"pilih",t:"Which sentence about the future is correct?",p:["There won't be many cars in the future.","There won't be much cars in the future.","There don't will be many cars in the future.","There will not many cars in the future."],b:0,u:"Cars is countable, so many. The negative of will is won't."},
 {j:"pilih",t:"Which words complete the sentence best? First, ____ the water into the jug.",p:["pour","pours","pouring","poured"],b:0,u:"In instructions, we use the base form of the verb: pour."},
 {j:"susun",t:"Put the steps in order to explain an experiment.",p:["First, pour some water into a test tube.","Next, add a little salt and shake the tube.","Then, look at the colour of the water.","Finally, write down what you saw."],b:[0,1,2,3],u:"Steps in order: pour the water, add salt, look at the colour, write the result."},
 {j:"pilih",t:"Choose the best sentence to complete the report: The result showed that the plant in the sun grew taller. ____",p:["The conclusion is that plants need sunlight.","The conclusion is plants needs sunlight growing well in the sun.","The conclusion that plants will need to sunlight grow well.","The conclusion are that plant need the sunlight grows slowly."],b:0,u:"A conclusion is a full sentence that explains what the result shows."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["If we don't practise, we won't improve.","If we don't practise we won't, improve.","if we don't practise, we won't improve","If we don't practise; We won't improve."],b:0,u:"Put a comma after the if clause, and start the sentence with a capital letter."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the message: Hi Zara! I'm doing an experiment tomorrow. ____",p:["If it works, I will send you the result.","If it will work, I send you the result.","If it works, I am send you the result.","If it work, I will to send you the result."],b:0,u:"First conditional: If + present simple (works), will + base verb (will send)."}}
];

module.exports = {
  id:"e1b5", tingkatan:1, kod:"Unit 5 Let's experiment",
  tajuk:"Lab Legends", subtajuk:"English Form 1 · Unit 5 Let's experiment",
  spi:SPI_A2,
  ulasan:ulasanBab("science, predictions and the first conditional", "Let's experiment"),
  lampiran:{
   pameran:poster(1, "A school poster for a science fair", {ikon:"\u{1F52C}", judul:"YOUNG SCIENTIST FAIR 2027", sub:"Show us your great ideas!",
     butir:[
      ["\u{1F4C5}","**Date:** 12 March"],
      ["\u{1F3EB}","**Venue:** School hall"],
      ["\u{1F465}","Teams of **three** pupils. Bring your own project and a poster explaining it."],
      ["\u{1F4DD}","Register with **Mr Faizal** in the Science Room before **28 February**. Late registrations will not be accepted."],
      ["\u{1F3C6}","The winning team will visit the National Science Centre."]]}),
   emel:emel(1, "An email invitation", {dari:"Dr Aini <aini@sains.example>", kepada:"Hasan <hasan@pelajar.example>", subjek:"Invitation to the Robot Workshop",
     isi:["Dear Hasan,",
      "Congratulations! You joined the Coding Club this year, and we would like to invite you to the **Robot Workshop** at the Science Centre. The workshop begins at 9 a.m. on Saturday.",
      "You will build your own small robot. All the parts and lunch will be provided. Please bring a laptop so that you can write a program for your robot.",
      "If you do not reply before Friday, we will offer your place to another pupil. I hope you will join us!",
      "Best wishes,","Dr Aini"]})
  },
  aras:ARAS
};
