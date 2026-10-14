/* Sumber kandungan — English KSSM Form 3, Unit 5 Festivals and Friends
   DSKP Form 3 Grammar: adverbs of manner and comparison, articles (a, an, the or no article),
   indefinite pronouns (everyone, no one, someone, etc.), word formation (from a root word).
   Tema People and Culture. Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { poster, sembang, teks, SPI_B1_T3, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Festival Square", sk:"Vocabulary · festivals, customs and word formation", lampiran:null,
 kadNama:"word formation", kadEm:"\u{1F9E9}", kadFakta:"Add endings to a root word to change its class: celebrate → celebration (noun), friend → friendship (noun), care → careful (adjective), happy → happily (adverb).",
 bosKadNama:"tradition", bosKadEm:"\u{1F3EE}", bosKadFakta:"A tradition is a custom that has been passed down for a long time. Open house, red packets and lighting oil lamps are Malaysian traditions.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3EE}",t:"People decorate their homes with lanterns during the Lantern Festival. This is a ____.",p:["tradition","profession","deadline","hobby"],b:0,u:"A tradition is a custom that has been passed down over many years."},
 {j:"pilih",gbr:"\u{1F386}",t:"Hundreds of people gathered to watch the fireworks. The word 'gathered' means",p:["came together","ran far away","fell fast asleep","stayed outside"],b:0,u:"To gather means to come together in one place."},
 {j:"pilih",gbr:"\u{1F91D}",t:"We must learn to ____ people from other cultures. We should never judge them.",p:["respect","avoid","ignore","blame"],b:0,u:"To respect is to treat others politely and value their beliefs."},
 {j:"pilih",t:"What is the noun for the act of celebrating?",p:["celebration","celebrities","celebratory","celebrated"],b:0,u:"Celebration is the noun for the act of celebrating."},
 {j:"pilih",t:"What is the noun from the verb 'friend' (the state of being friends)?",p:["friendship","friendly","befriend","friendless"],b:0,u:"Add -ship to make the noun: friendship."},
 {j:"pilih",t:"Complete the sentence with the adjective from 'care': Please be ____ with the lanterns. They can easily catch fire.",p:["careful","carelessly","caring","carer"],b:0,u:"Careful (adjective) means taking care to avoid mistakes or danger."},
 {j:"isi",t:"Type the adverb from 'happy': The children danced ____ around the fire.",b:["happily"],u:"Change y to i and add -ly: happy → happily."},
 {j:"pilih",t:"Which word is the opposite of 'agree'?",p:["disagree","misagree","unagree","nonagree"],b:0,u:"Add the prefix dis- to make the opposite: agree → disagree."}],
 bos:{j:"banyak",t:"Choose ALL the words that are nouns formed from verbs.",p:["decoration","celebration","invitation","careful","happily"],b:[0,1,2],u:"Decoration, celebration and invitation are nouns formed from decorate, celebrate and invite. Careful is an adjective and happily is an adverb."}},

{n:2, tempat:"Grammar Garden", sk:"Grammar · adverbs, articles, indefinite pronouns", lampiran:null,
 kadNama:"adverbs of manner and comparison", kadEm:"\u{1F3C3}", kadFakta:"Adverbs describe verbs: She sings beautifully. To compare: She sings more beautifully than me. He works the hardest of all. Irregular: well → better → the best.",
 bosKadNama:"articles and pronouns", bosKadEm:"\u{1F4CC}", bosKadFakta:"a/an for one of many, the for something known, no article for general plurals (Children love festivals). someone/everyone/no one + singular verb: Everyone is happy.",
 soalan:[
 {j:"pilih",t:"The dancers moved ____ than the musicians, so the audience clapped louder.",p:["more gracefully","most graceful ones","more graceful ones","most gracefully"],b:0,u:"Adverb of manner, comparative: more gracefully than."},
 {j:"pilih",t:"Of all the singers, Hana sang ____.",p:["the most beautifully","more beautifully","the most beautiful","the beautifullest"],b:0,u:"Superlative adverb: the most beautifully (of all)."},
 {j:"pilih",t:"My brother plays the guitar ____ than I do.",p:["better","more good","gooder","best"],b:0,u:"The comparative of well is better."},
 {j:"pilih",t:"She asked ____ for the recipe, and her neighbour kindly gave it to her.",p:["politely","polite","politeness","politer"],b:0,u:"Asked is a verb, so we need an adverb: politely."},
 {j:"pilih",t:"Last night we saw ____ unusual dance at the festival.",p:["an","a","the","no article"],b:0,u:"Unusual starts with a vowel sound, so we use an."},
 {j:"pilih",t:"____ moon was full, and the streets were bright.",p:["The","A","An","No article"],b:0,u:"There is only one moon, so we use the."},
 {j:"pilih",t:"____ in our class enjoys the festival, and no one is bored.",p:["Everyone","Someone","Nobody","Anything"],b:0,u:"Everyone means all people in the group, and it takes a singular verb."},
 {j:"isi",t:"Type the missing word: I looked everywhere, but I couldn't find ____ my keys. (there was nothing)",b:["anything"],u:"In a negative sentence, we use anything: couldn't find anything."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["Someone has left a bag, and nobody knows whose it is.","Someone have left a bag, and nobody know whose it is.","Somebody has left bag, and nobody knows whose is it.","Someone has left a bag, and nobody don't know whose it is."],b:0,u:"Someone/nobody take singular verbs: has left, knows."}},

{n:3, tempat:"Unity Hall", sk:"Reading 3.1.2 · specific details in a festival poster", lampiran:"posterperpaduan",
 kadNama:"traditional", kadEm:"\u{1F3AD}", kadFakta:"Traditional means following customs that have existed for a long time: traditional dances, traditional food, traditional costumes.",
 bosKadNama:"admission free", bosKadEm:"\u{1F193}", bosKadFakta:"Admission free means you do not pay to enter. A donation is optional money that people give if they want to help.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What is the name of the event?",p:["Unity Festival","Sports Day Event","Science Fair Week","Book Week Sale"],b:0,u:"The poster says: UNITY FESTIVAL."},
 {j:"pilih",t:"According to Figure 1, when does the festival start?",p:["At 10.00 a.m.","At 8.00 a.m.","At 2.00 p.m.","At 7.00 p.m."],b:0,u:"The poster says: Saturday, 10.00 a.m. - 9.00 p.m."},
 {j:"pilih",t:"Based on Figure 1, which performance is in the evening?",p:["The lantern parade","The kite contest","The cooking demonstration","The art workshop"],b:0,u:"The poster says: 7.30 p.m. Lantern parade."},
 {j:"pilih",t:"What can visitors learn at 11.00 a.m.? (Figure 1)",p:["How to make kites","How to play the guitar well","How to build a small robot","How to speak French fluently"],b:0,u:"The poster says: 11.00 a.m. Kite-making workshop."},
 {j:"pilih",t:"How much does it cost to enter? (Figure 1)",p:["Nothing","RM2 each","RM10 each","RM20 each"],b:0,u:"The poster says: Admission free."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that visitors can eat or drink.",p:["traditional cakes","fresh coconut water","pizza","ice cream sundae"],b:[0,1],u:"The poster says there will be traditional cakes and fresh coconut water."},
 {j:"pilih",t:"Who is the festival for? (Figure 1)",p:["Everyone","Teachers only","Children only","Tourists only"],b:0,u:"The poster says: Everyone is welcome."},
 {j:"pilih",t:"What can we infer about the festival in Figure 1?",p:["It celebrates many cultures.","It is held at night only.","It is only for one race.","It is a sports match day."],b:0,u:"The programme includes dances, food and crafts from many cultures."}],
 bos:{j:"pilih",t:"Amin arrives at 12.30 p.m. and wants to see something about kites. What has he missed, according to Figure 1?",p:["The kite workshop","The lantern parade","The traditional dance","The closing speech"],b:0,u:"The kite-making workshop was at 11.00 a.m., so he has already missed it."}},

{n:4, tempat:"Open House Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"how it was said", kadEm:"\u{1F3A7}", kadFakta:"Adverbs tell you how something was done: slowly, carefully, loudly, enthusiastically. They often tell you the speaker's attitude, too.",
 bosKadNama:"everyone / no one", bosKadEm:"\u{1F465}", bosKadFakta:"Indefinite pronouns show how many people: everyone (all), someone (one person), no one (nobody). Listen for them to understand the number of people involved.",
 soalan:[
 {j:"pilih",t:"Listen. How did the choir sing?",dengar:"The children sang the national anthem very beautifully. Everyone stood up, and nobody spoke until the song ended.",p:["Beautifully","Very badly","Very quietly","Very slowly"],b:0,u:"The speaker says: The children sang the national anthem very beautifully."},
 {j:"pilih",t:"Listen. What did the audience do?",dengar:"The children sang the national anthem very beautifully. Everyone stood up, and nobody spoke until the song ended.",p:["Stood silently","Left early today","Danced a lot","Took many photos"],b:0,u:"The speaker says: Everyone stood up, and nobody spoke."},
 {j:"pilih",t:"Listen. What did the neighbours bring?",dengar:"Our neighbours came to our open house yesterday. Some brought cakes, and someone even brought a huge pot of curry. We ate and talked until midnight.",p:["Cakes and curry","Flowers and toys","Books and games","Nothing at all"],b:0,u:"The speaker says: Some brought cakes, and someone even brought a huge pot of curry."},
 {j:"pilih",t:"Listen. Until what time did they eat and talk?",dengar:"Our neighbours came to our open house yesterday. Some brought cakes, and someone even brought a huge pot of curry. We ate and talked until midnight.",p:["Until midnight","Until noon","Until 8 p.m.","Until the morning"],b:0,u:"The speaker says: We ate and talked until midnight."},
 {j:"pilih",t:"Listen. Who won the cooking contest?",dengar:"The winner of the cooking contest is Mrs Lee. She cooked more carefully than anyone else, and her cake was the tastiest. Second place goes to Mr Raju.",p:["Mrs Lee","Mr Raju","The judge","Nobody"],b:0,u:"The speaker says: The winner of the cooking contest is Mrs Lee."},
 {j:"pilih",t:"Listen. Why did she win?",dengar:"The winner of the cooking contest is Mrs Lee. She cooked more carefully than anyone else, and her cake was the tastiest. Second place goes to Mr Raju.",p:["She cooked carefully.","She cooked faster than all.","She cooked louder than all.","She had a lot of help."],b:0,u:"The speaker says: She cooked more carefully than anyone else."},
 {j:"pilih",t:"Listen. What is the problem?",dengar:"I've looked everywhere, but I can't find my red packet. I put it on the table, and now there's nothing there. Has anyone seen it?",p:["The speaker has lost a red packet.","The speaker has found a red packet.","Somebody stole the table.","The party has finished."],b:0,u:"The speaker says: I can't find my red packet."},
 {j:"isi",t:"Listen and type the missing word: She spoke very ____ to the guests.",dengar:"She spoke very politely to the guests.",b:["politely"],u:"The speaker says politely. Spoke is a verb, so we need an adverb."}],
 bos:{j:"pilih",t:"Listen. What is the speaker's main message?",dengar:"At our festival, nobody is a stranger. Everyone is welcome, and we share food, music and stories. Different cultures may celebrate in different ways, but we all celebrate together, and that is what makes our country special.",p:["Sharing makes us special.","Only one culture should celebrate.","Festivals are boring for all.","Strangers are not welcome here."],b:0,u:"The speaker says: we all celebrate together, and that is what makes our country special."}},

{n:5, tempat:"Culture Corner", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"blogterbukarumah",
 kadNama:"hospitality", kadEm:"\u{1F3E0}", kadFakta:"Hospitality means being friendly and generous to guests. Malaysian open houses are famous for their hospitality.",
 bosKadNama:"diverse", bosKadEm:"\u{1F308}", bosKadFakta:"Diverse means made up of many different types. A diverse country has people of many cultures, languages and religions.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Open houses unite communities.","Festivals are very expensive these days.","Food is better at restaurants than at home.","Neighbours rarely speak to each other."],b:0,u:"The blog describes how open houses help neighbours of different cultures become friends."},
 {j:"pilih",t:"According to Text 1, who invited the writer's family? (Text 1)",p:["Mr Chong, a neighbour","Their class teacher","A cousin from Ipoh","The town mayor"],b:0,u:"The text says: Our neighbour, Mr Chong, invited us to his Chinese New Year open house."},
 {j:"pilih",t:"What did the writer's family bring? (Text 1)",p:["A box of dates","A cake with candles","A big television","Flowers only"],b:0,u:"The text says: We brought a box of dates as a gift."},
 {j:"pilih",t:"The word diverse in Text 1 means",p:["of many different types","very quiet indeed","extremely expensive to buy","exactly the same as before"],b:0,u:"Diverse means made up of many different kinds of people or things."},
 {j:"pilih",t:"How does the writer feel about the open house? (Text 1)",p:["Delighted","Bored","Angry","Worried"],b:0,u:"The writer says it was one of the best evenings of the year, so she felt delighted."},
 {j:"banyak",t:"Based on Text 1, choose TWO things that happened at the open house.",p:["Guests ate oranges.","Children got red packets.","A fire alarm rang loudly.","Everyone left very early."],b:[0,1],u:"The text says guests ate mandarin oranges and the children received red packets."},
 {j:"pilih",t:"What can we infer about the writer's neighbours? (Text 1)",p:["They are warm and generous.","They are quite impolite.","They dislike having guests.","They never celebrate anything."],b:0,u:"They invite everyone, share food and give gifts, so they are friendly and generous."},
 {j:"pilih",t:"Which sentence is an OPINION in Text 1?",p:["It was one of the best evenings.","The party started at seven o'clock.","Mr Chong lives right next door.","The children received red packets."],b:0,u:"It was one of the best evenings is the writer's personal view. The other sentences are facts."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["An Open House for All","A Quiet Night at Home","The Price of Mandarin Oranges","How to Fix a Broken Phone"],b:0,u:"The text describes a friendly open house that welcomes everyone."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2, 4.2.1 · Grammar · describe a festival with adverbs and articles", lampiran:null,
 kadNama:"vivid language", kadEm:"\u{1F58B}\u{FE0F}", kadFakta:"Use adverbs of manner to make your description vivid: The dancers moved gracefully. The crowd cheered loudly. Add an article before a singular noun: a lantern, an open house, the stage.",
 bosKadNama:"proofread", bosKadEm:"\u{2705}", bosKadFakta:"Proofread for: adverb or adjective? article needed? singular verb after everyone / someone / no one?",
 soalan:[
 {j:"isi",t:"Type the correct word: The crowd cheered ____. (loud)",b:["loudly"],u:"Cheered is a verb, so we need an adverb: loudly."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: Everyone are happy about the festival.",b:["is"],u:"Everyone takes a singular verb: is."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["She","danced","more","gracefully","than","the","others."],b:[0,1,2,3,4,5,6],u:"Subject + verb + more + adverb + than + comparison."},
 {j:"pilih",t:"Which sentence uses articles correctly?",p:["We saw an elephant dance at the festival.","We saw a elephant dance at the festival.","We saw the elephant dances at festival.","We saw elephant dance at a festival."],b:0,u:"An is used before a vowel sound: an elephant."},
 {j:"pilih",t:"Which sentence uses an adverb correctly?",p:["He listened carefully to the story.","He listened careful to the story.","He listened carefulness to the story.","He listened care to the story."],b:0,u:"Listened is a verb, so we need the adverb carefully."},
 {j:"pilih",t:"Which sentence is written correctly?",p:["Nobody was late, and everyone arrived on time.","Nobody were late, and everyone arrive on time.","Nobody was late, and everyone arrived on times.","Nobody wasn't late, and everyone arrived on time."],b:0,u:"Nobody and everyone are singular, and nobody is already negative."},
 {j:"susun",t:"Put the sentences in order to make a short description.",p:["The festival began at sunset.","Lanterns were hung carefully along the street.","Everyone sang loudly and clapped.","It was the most colourful evening of the year."],b:[0,1,2,3],u:"Start with when it began, describe the action, then the crowd, and end with an overall impression."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["At the festival, we ate cakes, danced and sang.","At the festival we ate, cakes danced and sang.","at the festival, we ate cakes, danced and sang","At the festival; we ate cakes, danced and sang."],b:0,u:"A comma goes after the introductory phrase, and commas separate items in a list."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the description: The streets were full of people in colourful costumes. ____",p:["Everyone smiled warmly, and the music played joyfully all night.","Everyone smile warm, and the music played joyful all night.","Everyone smiles warmly, and the music was played joyfully all nights.","Everyone smiled warm, and music played joyfully on the all night."],b:0,u:"Everyone + singular verb in the past (smiled), plus adverbs warmly and joyfully."}}
];

module.exports = {
  id:"e3b5", tingkatan:3, kod:"Unit 5 Festivals and Friends",
  tajuk:"Festival Friends", subtajuk:"English Form 3 · Unit 5 Festivals and Friends",
  spi:SPI_B1_T3,
  ulasan:ulasanBab("festivals, adverbs, articles and indefinite pronouns", "Festivals and Friends"),
  lampiran:{
   posterperpaduan:poster(1, "A poster for a community festival", {ikon:"\u{1F3AA}", judul:"UNITY FESTIVAL", sub:"Everyone is welcome! Admission free.",
     butir:[
      ["\u{1F4C5}","**Saturday**, 10.00 a.m. - 9.00 p.m., Town Square"],
      ["\u{1FA81}","**11.00 a.m.** Kite-making workshop"],
      ["\u{1F379}","Traditional cakes and fresh coconut water all day"],
      ["\u{1F3AD}","**3.00 p.m.** Dances from different cultures"],
      ["\u{1F3EE}","**7.30 p.m.** Lantern parade"]]}),
   blogterbukarumah:teks(1, "A blog post about an open house", "An Open House for Everyone",
     ["Our neighbour, Mr Chong, invited us to his Chinese New Year open house last Saturday. We brought a box of dates as a gift, and we were welcomed warmly at the door. Everyone was dressed colourfully, and the house was full of lanterns.",
      "We ate mandarin oranges and traditional cakes, and the children received red packets. Someone started to sing, and soon the whole room joined in. Nobody wanted the evening to end.",
      "It was one of the best evenings of the year. In a diverse country like ours, open houses remind us that we are neighbours first and friends forever."],
     "Practice text: invented blog post")
  },
  aras:ARAS
};
