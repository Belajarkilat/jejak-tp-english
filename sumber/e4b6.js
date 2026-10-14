/* Sumber kandungan — English KSSM Form 4, Unit 6 Helping Hands
   DSKP Form 4 Grammar: neither ... nor / either ... or; reflexive pronouns; be able to / can / manage to.
   Main Language Functions: wh- questions in the present and past; indirect questions with know, wonder etc.;
   asking for help and offering advice (Would you mind / like + -ing?). Tema People and Culture.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, notis, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Volunteer Village", sk:"Vocabulary · volunteering, community and helping", lampiran:null,
 kadNama:"community service", kadEm:"\u{1F91D}", kadFakta:"Community service is unpaid work that helps other people in your area, such as cleaning a river or visiting elderly neighbours.",
 bosKadNama:"generous", bosKadEm:"\u{1F381}", bosKadFakta:"A generous person gives time, money or help freely. Being generous does not mean being rich; it means caring about others.",
 soalan:[
 {j:"pilih",gbr:"\u{1F64B}",t:"A person who works without payment in order to help others is a",p:["volunteer","customer","competitor","passenger"],b:0,u:"A volunteer chooses to work for free to help others."},
 {j:"pilih",gbr:"\u{1F9D3}",t:"The students visit the elderly in the care home. They want to show ____ for older people.",p:["respect","distance","pressure","suspicion"],b:0,u:"Respect is a feeling of admiration and consideration for someone."},
 {j:"pilih",gbr:"\u{1F4B0}",t:"The money that people give to help a charity is called a",p:["donation","fine","salary","price"],b:0,u:"A donation is a gift of money or things to a good cause."},
 {j:"pilih",t:"A group that raises money to help people in need is a",p:["charity","company","committee","factory"],b:0,u:"A charity is an organisation that helps people or animals in need."},
 {j:"pilih",t:"A person who is always ready to give and share with others is",p:["generous","selfish","careless","curious"],b:0,u:"Generous means willing to give."},
 {j:"pilih",t:"Which word means 'to look after someone or something'?",p:["take care of","give up","look for","turn off"],b:0,u:"To take care of is to look after."},
 {j:"isi",t:"Type the missing word: She is very ____ and always thinks about the feelings of other people. (kind and caring)",b:["considerate","thoughtful","kind","caring"],u:"Considerate and thoughtful describe someone who thinks about others."},
 {j:"pilih",t:"Which word describes the opposite of 'generous'?",p:["selfish","humble","cheerful","patient"],b:0,u:"Selfish means caring only about yourself."}],
 bos:{j:"banyak",t:"Choose ALL the activities that are examples of community service.",p:["cleaning a public park","visiting a care home","collecting food for poor families","shopping for new shoes","playing computer games"],b:[0,1,2],u:"Cleaning a park, visiting a care home and collecting food help the community."}},

{n:2, tempat:"Grammar Garden", sk:"Grammar · neither/nor, either/or, reflexive pronouns, manage to", lampiran:null,
 kadNama:"either ... or / neither ... nor", kadEm:"\u{2194}\u{FE0F}", kadFakta:"either ... or = one of two choices (You can either walk or cycle). neither ... nor = not one and not the other (Neither Ali nor Siti was late). The verb agrees with the nearer subject.",
 bosKadNama:"reflexive pronouns", bosKadEm:"\u{1FA9E}", bosKadFakta:"myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Use them when the subject and object are the same person (She taught herself to swim). by + reflexive = alone.",
 soalan:[
 {j:"pilih",t:"You can ____ join the choir or help with the posters.",p:["either","neither","both","each"],b:0,u:"Either ... or shows a choice between two things."},
 {j:"pilih",t:"Neither my brother ____ my sister likes spicy food.",p:["nor","or","and","but"],b:0,u:"Neither is followed by nor."},
 {j:"pilih",t:"The little boy dressed ____ for school.",p:["himself","him","itself","themselves"],b:0,u:"The subject and the object are the same person: himself."},
 {j:"pilih",t:"We enjoyed ____ at the party. Everyone was friendly.",p:["ourselves","us","ours","each"],b:0,u:"Enjoy ourselves: the reflexive pronoun for we."},
 {j:"pilih",t:"Although the exam was difficult, she ____ finish all the questions.",p:["managed to","was able","could to","manages"],b:0,u:"Managed to + base verb: succeeded in doing something difficult."},
 {j:"pilih",t:"When I was young, I wasn't ____ to swim, but now I can swim well.",p:["able","manage","could","can"],b:0,u:"Be able to + base verb: I wasn't able to swim."},
 {j:"isi",t:"Type the missing word: She cut ____ while she was chopping vegetables. (herself)",b:["herself"],u:"The subject and object are the same person, so we use herself."},
 {j:"isi",t:"Type the missing word: Neither Hana ____ Jun knew the answer. (nor)",b:["nor"],u:"Neither ... nor."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["Neither the teacher nor the students were able to open the door.","Neither the teacher or the students was able to open the door.","Neither the teacher nor the students was able open the door.","Neither the teacher nor the students were able opening the door."],b:0,u:"Neither ... nor, with were agreeing with the nearer subject (students)."}},

{n:3, tempat:"Volunteer Board", sk:"Reading 3.1.2 · specific details in a chat and notice", lampiran:"sembangsukarelawan",
 kadNama:"sign-up sheet", kadEm:"\u{1F4DD}", kadFakta:"A sign-up sheet is a paper or online form where people write their names to join an activity. Volunteers often sign up for tasks.",
 bosKadNama:"availability", bosKadEm:"\u{1F4C5}", bosKadFakta:"Your availability is the time when you are free. When you volunteer, you give the times that you can help.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What event is the group organising?",p:["A charity bake sale","A football match","A science exam","A school trip abroad"],b:0,u:"Mei writes: Our charity bake sale is on Saturday."},
 {j:"pilih",t:"According to Figure 1, who is the money for?",p:["A children's home","The school canteen","The football team","The teachers"],b:0,u:"Mei writes: All the money will go to the children's home."},
 {j:"pilih",t:"Based on Figure 1, what does Jun offer to do?",p:["Make posters","Bake cakes","Sell tickets","Drive the van"],b:0,u:"Jun writes: I can make the posters myself."},
 {j:"pilih",t:"What does Mei ask Raju? (Figure 1)",p:["Would you mind bringing tables?","Can you tell me the time now?","Would you like a cake or two?","Do you know a good song to sing?"],b:0,u:"Mei writes: Would you mind bringing the tables?"},
 {j:"pilih",t:"What does Raju answer? (Figure 1)",p:["He can bring them.","He refuses to help at all.","He doesn't know how to help.","He cannot read the message."],b:0,u:"Raju writes: Not at all! My uncle has a van, so we'll manage to bring them."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that Mei will do.",p:["bake cookies","organise the sign-up sheet","drive a lorry","sell the tables"],b:[0,1],u:"Mei writes that she will bake cookies and organise the sign-up sheet."},
 {j:"pilih",t:"What time does the bake sale start? (Figure 1)",p:["At 9 a.m.","At 11 a.m.","At 2 p.m.","At 7 p.m."],b:0,u:"Mei writes: It starts at 9 a.m."},
 {j:"pilih",t:"What can we infer about the group in Figure 1?",p:["They work well as a team.","They are arguing a lot now.","They are bored with the plan.","They dislike all charity events."],b:0,u:"They share tasks politely and offer help, so they work well together."}],
 bos:{j:"pilih",t:"Which sentence from Figure 1 is an indirect question?",p:["I wonder whether we'll need chairs.","Would you mind helping me, please?","Who is bringing the cakes and tea?","Are you free on Saturday morning?"],b:0,u:"I wonder whether ... is an indirect question: the word order is that of a statement."}},

{n:4, tempat:"Help Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"polite requests", kadEm:"\u{1F64F}", kadFakta:"Would you mind + -ing? is a polite request: Would you mind opening the window? Would you like + to? is an offer: Would you like to join us? Listen to the polite tone.",
 bosKadNama:"indirect questions", bosKadEm:"\u{2753}", bosKadFakta:"I wonder if ... / Do you know where ...? / Could you tell me what time ...? Listen for the clause after wonder or know: it has statement word order.",
 soalan:[
 {j:"pilih",t:"Listen. What does the woman ask the man?",dengar:"Excuse me, would you mind helping me carry these boxes to the car? They're quite heavy, and I can't manage them by myself.",p:["To help carry boxes","To drive her home today","To lend her some money","To open a small shop"],b:0,u:"The woman says: would you mind helping me carry these boxes to the car?"},
 {j:"pilih",t:"Listen. Why does the woman need help?",dengar:"Excuse me, would you mind helping me carry these boxes to the car? They're quite heavy, and I can't manage them by myself.",p:["The boxes are heavy.","She is tired of cars.","She lost her key.","She cannot see."],b:0,u:"The woman says: They're quite heavy, and I can't manage them by myself."},
 {j:"pilih",t:"Listen. What does the teacher offer?",dengar:"Would you like me to explain the exercise again? You can either ask me now or come to my room after school. Neither option is a problem for me.",p:["To explain it again","To cancel the lesson today","To give extra homework","To change the classroom"],b:0,u:"The teacher says: Would you like me to explain the exercise again?"},
 {j:"pilih",t:"Listen. Where can the student ask the teacher?",dengar:"Would you like me to explain the exercise again? You can either ask me now or come to my room after school. Neither option is a problem for me.",p:["Now or after school","Only on Monday morning","Only by sending an email","Only in the school library"],b:0,u:"The teacher says: You can either ask me now or come to my room after school."},
 {j:"pilih",t:"Listen. What does the speaker wonder?",dengar:"I wonder whether the shop is open on Sundays. Do you know what time it opens? I'd like to buy a gift for my grandmother.",p:["If it opens on Sundays","Why the shop is so expensive","Who owns the whole shop","How big the shop really is"],b:0,u:"The speaker says: I wonder whether the shop is open on Sundays."},
 {j:"pilih",t:"Listen. What does the speaker want to buy?",dengar:"I wonder whether the shop is open on Sundays. Do you know what time it opens? I'd like to buy a gift for my grandmother.",p:["A gift","A phone","A bicycle","A sandwich"],b:0,u:"The speaker says: I'd like to buy a gift for my grandmother."},
 {j:"pilih",t:"Listen. How did the girl manage to finish the project?",dengar:"I managed to finish the project because I started early. My sister helped me, and neither of us wasted time on our phones.",p:["She started early.","She copied her friend.","She asked the principal.","She gave up halfway."],b:0,u:"The speaker says: I managed to finish the project because I started early."},
 {j:"isi",t:"Listen and type the missing word: The little girl taught ____ to ride a bicycle.",dengar:"The little girl taught herself to ride a bicycle.",b:["herself"],u:"The speaker says herself. The subject and object are the same person."}],
 bos:{j:"pilih",t:"Listen. What is the speaker's main message?",dengar:"Many people think they must solve their problems by themselves. But it's perfectly fine to ask for help, and it is generous to offer help to others. Neither pride nor shyness should stop us from helping each other.",p:["We should help each other.","We must solve everything alone.","Pride is more important than help.","Shy people can never help."],b:0,u:"The speaker says that neither pride nor shyness should stop us from helping each other."}},

{n:5, tempat:"Story Square", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"cerita-sukarelawan",
 kadNama:"make a difference", kadEm:"\u{2728}", kadFakta:"To make a difference is to have a positive effect on a person or situation. Small acts of kindness can make a big difference.",
 bosKadNama:"humble", bosKadEm:"\u{1F64F}", bosKadFakta:"A humble person does not boast about success and does not think that they are better than others.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["A teenager helps her community.","A teenager wins a big sports medal.","A teenager moves to another country.","A teenager builds a small business."],b:0,u:"The text describes how Aina helps her community through volunteering."},
 {j:"pilih",t:"According to Text 1, what does Aina do every weekend?",p:["She teaches children to read.","She plays in a school band.","She works in a family shop.","She cleans her own house only."],b:0,u:"The text says: Every weekend, Aina teaches children to read."},
 {j:"pilih",t:"Why did Aina start volunteering? (Text 1)",p:["She wanted to help others.","She needed money.","She was told to by the police.","She had nothing to do."],b:0,u:"The text says that she saw how many children couldn't read and wanted to help them."},
 {j:"pilih",t:"The phrase make a difference in Text 1 means",p:["have a good effect","be very different","become famous","change one's name"],b:0,u:"To make a difference is to have a positive effect."},
 {j:"pilih",t:"How does Aina describe herself? (Text 1)",p:["She says anyone could do it.","She says she is the best volunteer.","She says that she is very rich now.","She says she wants to be famous."],b:0,u:"The text says that she is humble: 'Anyone could do what I do.'"},
 {j:"banyak",t:"Based on Text 1, choose TWO things the children have achieved.",p:["They can read stories.","They enjoy learning.","They have won a national prize.","They no longer attend school."],b:[0,1],u:"The text says the children can now read simple stories and enjoy learning."},
 {j:"pilih",t:"What can we infer about Aina's attitude? (Text 1)",p:["She is generous and humble.","She is proud and selfish.","She is careless and lazy.","She is bored and unhappy."],b:0,u:"She helps others and does not boast, so she is generous and humble."},
 {j:"pilih",t:"Which sentence from Text 1 uses a reflexive pronoun?",p:["Aina taught herself how to teach.","Aina helps the children to read.","The children enjoy learning very much.","Aina is a young volunteer in town."],b:0,u:"Herself is a reflexive pronoun: subject and object are the same person."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Small Acts, Big Difference","A Trip to the Mall","How to Win a Game","The Price of Books"],b:0,u:"The text shows that small acts of kindness can make a big difference."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · write polite requests and offers", lampiran:null,
 kadNama:"polite writing", kadEm:"\u{1F4DD}", kadFakta:"Polite request: Would you mind + -ing? Offer: Would you like me to + verb? Indirect question: Could you tell me where ...? I was wondering if you could ... Use thank you, please and I would appreciate it.",
 bosKadNama:"check your pronouns", bosKadEm:"\u{2705}", bosKadFakta:"Check each reflexive pronoun (myself, yourself ...) and each either/or or neither/nor pair before you send your message.",
 soalan:[
 {j:"isi",t:"Type the missing word: Would you mind ____ the door? (to close the door)",b:["closing"],u:"Would you mind + -ing."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: Neither Rina or Dani came to the meeting.",b:["nor"],u:"Neither ... nor."},
 {j:"susun",t:"Put the words in order to make a polite request.",p:["Would","you","mind","helping","me","with","this?"],b:[0,1,2,3,4,5,6],u:"Would you mind + -ing + object?"},
 {j:"pilih",t:"Which is a correct indirect question?",p:["Could you tell me where the library is?","Could you tell me where is the library?","Could you tell me where does the library?","Could you tell me the library where is?"],b:0,u:"Statement word order after where: where the library is."},
 {j:"pilih",t:"Which sentence uses a reflexive pronoun correctly?",p:["The children made the posters themselves.","The children made the posters them.","The children made the posters theirselves.","The children made the posters itself."],b:0,u:"Themselves is the reflexive pronoun for they."},
 {j:"pilih",t:"Which sentence is a polite offer?",p:["Would you like me to help?","You carry your bag right now.","Do you carry your bag to school?","Carry your own bag, please."],b:0,u:"Would you like me to + base verb is a polite offer."},
 {j:"susun",t:"Put the sentences in order to make a short polite email.",p:["Dear Mr Lee,","I was wondering if you could help us with our charity event.","Would you mind giving a short talk on Saturday?","Thank you very much."],b:[0,1,2,3],u:"Use a greeting, an indirect request, a polite question and thanks."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["Could you tell me what time the event starts?","Could you tell me what time does the event start.","could you tell me what time the event starts","Could you tell me, what time the event starts?"],b:0,u:"An indirect question has statement word order and ends with a question mark when it asks."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the email: I'm organising a clean-up day on Saturday. ____",p:["I was wondering whether you could help, as neither my sister nor I can manage alone.","I was wondering that you would able help, as neither my sister or I can manage it alone.","I wonder whether you would to help, as either my sister nor I can manage it alone.","I was wondering if you will be able help, because neither my sister nor me can manage it alone."],b:0,u:"Indirect request with whether, and neither ... nor with the verb can."}}
];

module.exports = {
  id:"e4b6", tingkatan:4, kod:"Unit 6 Helping Hands",
  tajuk:"Helping Hands", subtajuk:"English Form 4 · Unit 6 Helping Hands",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("volunteering, polite requests and reflexive pronouns", "Helping Hands"),
  lampiran:{
   sembangsukarelawan:sembang(1, "A chat in a volunteer group", "Bake Sale Team", "Mei", [
     {dari:"Mei", teks:"Our charity bake sale is on Saturday. It starts at 9 a.m., and all the money will go to the children's home. I'll bake cookies and organise the sign-up sheet."},
     {dari:"Jun", teks:"I can make the posters myself. I wonder whether we'll need more chairs."},
     {dari:"Mei", teks:"Raju, would you mind bringing the tables?"},
     {dari:"Raju", teks:"Not at all! My uncle has a van, so we'll manage to bring them."}]),
   "cerita-sukarelawan":teks(1, "A feature about a young volunteer", "Small Acts, Big Difference",
     ["Every weekend, Aina teaches children in her neighbourhood to read. She started two years ago when she saw how many children couldn't read and wanted to help them. Neither her parents nor her friends expected her to continue, but she never gave up.",
      "Today, the children can read simple stories, and they enjoy learning. Aina taught herself how to teach by watching videos and asking her teachers for advice.",
      "'Anyone could do what I do,' she says humbly. 'Small acts can make a big difference.'"],
     "Practice text: invented feature")
  },
  aras:ARAS
};
