/* Sumber kandungan — English KSSM Form 3, Unit 4 Made in Malaysia
   DSKP Form 3 Grammar: the passive (present simple, past simple, present continuous, present perfect).
   Tema Consumerism and Financial Awareness. Kosa kata: production, trade and shopping (B1).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { poster, notis, teks, SPI_B1_T3, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Factory Floor", sk:"Vocabulary · production, trade and shopping", lampiran:null,
 kadNama:"raw materials", kadEm:"\u{1FAB5}", kadFakta:"Raw materials are the natural materials used to make a product: wood for furniture, cotton for clothes, latex for rubber gloves.",
 bosKadNama:"export / import", bosKadEm:"\u{1F6A2}", bosKadFakta:"To export is to sell goods to another country. To import is to bring goods in from another country. Malaysia exports palm oil and imports many machines.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3ED}",t:"Cars and phones are made in a large building called a",p:["factory","stadium","museum","clinic"],b:0,u:"A factory is a building where goods are produced, usually with machines."},
 {j:"pilih",gbr:"\u{1F4E6}",t:"The box and the plastic around a product are called its",p:["packaging","ingredient","wages","profit"],b:0,u:"Packaging is the material that covers and protects a product."},
 {j:"pilih",gbr:"\u{1F6A2}\u{1F4E6}",t:"Malaysia sells palm oil to other countries. This means that Malaysia ____ palm oil.",p:["exports","imports","wastes","borrows"],b:0,u:"To export is to sell goods to another country."},
 {j:"pilih",t:"Which word means 'goods that are produced to be sold'?",p:["products","receipts","salaries","bargains"],b:0,u:"Products are things that are made or grown to be sold."},
 {j:"pilih",t:"The money a business has left after paying all its costs is the",p:["profit","packaging","budget","discount"],b:0,u:"Profit is the money earned after all the costs have been paid."},
 {j:"pilih",t:"A shop has reduced the price of a jacket from RM100 to RM70. This is a",p:["discount","deposit","warranty","service tax"],b:0,u:"A discount is a reduction in price."},
 {j:"isi",t:"Type the missing word: The shop gave me a ____ to show how much I had paid. (a piece of paper)",b:["receipt"],u:"A receipt is a piece of paper that shows you have paid for something."},
 {j:"pilih",t:"Which of these is a raw material?",p:["cotton","a T-shirt","a sewing machine","a price tag"],b:0,u:"Cotton is a raw material that comes from a plant. A T-shirt is a finished product."}],
 bos:{j:"banyak",t:"Choose ALL the words that are connected with buying something in a shop.",p:["receipt","discount","customer","assembly line","raw material"],b:[0,1,2],u:"A receipt, a discount and a customer belong to shopping. An assembly line and a raw material belong to production."}},

{n:2, tempat:"Passive Plant", sk:"Grammar · the passive in four tenses", lampiran:null,
 kadNama:"be + past participle", kadEm:"\u{1F504}", kadFakta:"Present simple: Rubber is collected from trees. Past simple: The factory was built in 1980. Present continuous: A new road is being built. Present perfect: Thousands of cars have been exported.",
 bosKadNama:"by + agent", bosKadEm:"\u{1F464}", bosKadFakta:"Use by + agent only when the doer is important or surprising: The song was written by P. Ramlee. Omit it when it is obvious or unknown: My bike was stolen.",
 soalan:[
 {j:"pilih",t:"Rubber ____ from trees in many parts of Malaysia.",p:["is collected","collects","is collecting","has collecting"],b:0,u:"Present simple passive: is/are + past participle. Rubber is singular, so is collected."},
 {j:"pilih",t:"The Petronas Towers ____ in 1998.",p:["were completed","are completed","have completed","completed"],b:0,u:"Past simple passive: was/were + past participle. Towers is plural, so were completed."},
 {j:"pilih",t:"A new bridge ____ across the river at the moment.",p:["is being built","is built here","has built it","was building it"],b:0,u:"Present continuous passive: is/are being + past participle."},
 {j:"pilih",t:"Over a million cars ____ to other countries this year.",p:["have been exported","were exporting","are exporting","has been exported"],b:0,u:"Present perfect passive: have/has been + past participle. Cars is plural, so have been exported."},
 {j:"pilih",t:"Which sentence is the passive form of 'People grow rice in Kedah'?",p:["Rice is grown in Kedah.","Rice grows in Kedah.","Rice is growing in Kedah.","Rice was grow in Kedah."],b:0,u:"The object (rice) becomes the subject: Rice is grown in Kedah."},
 {j:"pilih",t:"The documents ____ yesterday, so we can start now.",p:["were signed","are signed","have signing","signing"],b:0,u:"Yesterday is a finished time, so we use the past simple passive: were signed."},
 {j:"isi",t:"Type the correct form of the verb: Many goods ____ (sell) online these days.",b:["are sold"],u:"Present simple passive with plural goods: are sold."},
 {j:"isi",t:"Type the correct form: The new shopping mall ____ (not / complete) yet, so it is still closed.",b:["hasn't been completed","has not been completed"],u:"Present perfect passive negative: hasn't been completed."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["The new model has been launched by the company.","The new model has launched by the company.","The new model have been launched by the company.","The new model is been launched by the company."],b:0,u:"Present perfect passive with a singular subject: has been + launched."}},

{n:3, tempat:"Tour Office", sk:"Reading 3.1.2 · specific details in a notice and a table", lampiran:"lawatankilang",
 kadNama:"guided tour", kadEm:"\u{1F6B6}", kadFakta:"A guided tour is a visit led by someone who explains what you see. Many factories offer guided tours for schools.",
 bosKadNama:"compulsory", bosKadEm:"\u{2705}", bosKadFakta:"Compulsory means you must do it. Optional means you can choose. Safety rules on a factory tour are compulsory.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What is made at the factory?",p:["Batik cloth","Cars and vans","Chocolate bars","Wooden furniture"],b:0,u:"The notice says: Batik Heritage Factory."},
 {j:"pilih",t:"According to Figure 1, how many tours are given on Saturdays?",p:["Two","One","Three","Four"],b:0,u:"The notice says: Saturdays: 10.00 a.m. and 2.00 p.m."},
 {j:"pilih",t:"Based on Figure 1, what is shown first on the tour?",p:["How the wax is applied","How the cloth is dyed","How the batik is dried","How the shirts are sold"],b:0,u:"The notice says: First, you will see how the wax is applied."},
 {j:"pilih",t:"What is the tour price for children? (Figure 1)",p:["RM8","RM15","RM25","RM5"],b:0,u:"The table says: Children RM8."},
 {j:"pilih",t:"Which of these is compulsory on the tour? (Figure 1)",p:["Closed shoes","Buying some batik","Wearing a big hat","Bringing your food"],b:0,u:"The notice says: Closed shoes must be worn for safety."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things that visitors can do.",p:["try batik painting","buy souvenirs","touch the hot wax","take flash photos"],b:[0,1],u:"The notice says visitors can try batik painting and buy souvenirs. They must not touch the hot wax."},
 {j:"pilih",t:"How long does the tour last? (Figure 1)",p:["About 90 minutes","About 9 minutes","About 9 hours","About 19 minutes"],b:0,u:"The notice says: The tour lasts about 90 minutes."},
 {j:"pilih",t:"What can we infer about the factory in Figure 1?",p:["It welcomes school groups.","It is closed to the public.","It exports only to Japan.","It has just closed down."],b:0,u:"There is a special price for school groups, so it welcomes them."}],
 bos:{j:"pilih",t:"A teacher is bringing 20 pupils on a Sunday morning. What should she do, according to Figure 1?",p:["Book for another day, as there are no Sunday tours.","Pay at the gate and join the 10 a.m. tour.","Wait for the afternoon tour on Sunday.","Come without booking and pay half price."],b:0,u:"Tours are given from Monday to Saturday, so she needs to choose another day. School groups must book in advance."}},

{n:4, tempat:"Product Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"who does it?", kadEm:"\u{1F442}", kadFakta:"In passive sentences, the subject receives the action. Listen for was/were + past participle to hear what happened to something: The bag was made in Penang.",
 bosKadNama:"process words", bosKadEm:"\u{1F522}", bosKadFakta:"Listen for first, then, after that, finally. They help you remember the order of stages in a process.",
 soalan:[
 {j:"pilih",t:"Listen. Where are the cars made?",dengar:"These cars are made in Selangor, and most of them are exported to other countries. Last year, over 50,000 cars were sold abroad.",p:["In Selangor","In Penang","In Sabah state","In Johor Bahru"],b:0,u:"The speaker says: These cars are made in Selangor."},
 {j:"pilih",t:"Listen. How many cars were sold abroad last year?",dengar:"These cars are made in Selangor, and most of them are exported to other countries. Last year, over 50,000 cars were sold abroad.",p:["Over 50,000","Over 5,000","Over 500,000","Over 15,000"],b:0,u:"The speaker says: over 50,000 cars were sold abroad."},
 {j:"pilih",t:"Listen. What is being done to the road?",dengar:"The main road is being repaired at the moment, so traffic is very slow. The work was started last week, and it will be finished next month.",p:["It is being repaired.","It has been closed.","It is being painted.","It has been sold."],b:0,u:"The speaker says: The main road is being repaired at the moment."},
 {j:"pilih",t:"Listen. When will the work be finished?",dengar:"The main road is being repaired at the moment, so traffic is very slow. The work was started last week, and it will be finished next month.",p:["Next month","Next week","Tomorrow morning","Next year"],b:0,u:"The speaker says: it will be finished next month."},
 {j:"pilih",t:"Listen to the guide. What happens after the cloth is dyed?",dengar:"First, the cloth is washed. Then the wax is applied. After that, the cloth is dyed, and finally the wax is removed in hot water.",p:["The wax is removed.","The cloth is sold.","The wax is applied.","The cloth is washed."],b:0,u:"The speaker says: after the cloth is dyed, finally the wax is removed in hot water."},
 {j:"pilih",t:"Listen. What happens first? (same talk)",dengar:"First, the cloth is washed. Then the wax is applied. After that, the cloth is dyed, and finally the wax is removed in hot water.",p:["The cloth is washed.","The cloth is dyed in red.","The wax is removed in water.","The wax is applied by hand."],b:0,u:"The speaker says: First, the cloth is washed."},
 {j:"pilih",t:"Listen. Why does the customer want a refund?",dengar:"I bought this phone only two weeks ago, but the screen has already been broken. I'd like a refund, please. I've kept the receipt.",p:["The screen was broken.","The phone was too expensive.","The shop was closed that day.","She lost her receipt."],b:0,u:"The speaker says: the screen has already been broken."},
 {j:"isi",t:"Listen and type the missing word: The bridge was ____ in 1998.",dengar:"The bridge was completed in 1998.",b:["completed","finished","built"],u:"The speaker says completed. Past passive: was + completed."}],
 bos:{j:"pilih",t:"Listen to the report. What is the main idea?",dengar:"Many products that we use every day are not made in the country where we buy them. They are designed in one place, produced in another and shipped around the world. As a result, a single shirt may have travelled thousands of kilometres before it reaches your wardrobe.",p:["Products travel far before sale.","All products are made at home.","Shirts are no longer sold in shops.","Shipping is cheaper than making things."],b:0,u:"The speaker says that a shirt may have travelled thousands of kilometres before it reaches the buyer."}},

{n:5, tempat:"Heritage Gazette", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"songket",
 kadNama:"heritage", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Heritage is the traditions, buildings and customs that are passed from one generation to the next. Songket is part of Malaysia's heritage.",
 bosKadNama:"skill", bosKadEm:"\u{1F9F5}", bosKadFakta:"A skill is the ability to do something well, usually after practice. Weaving songket needs a lot of patience and skill.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["How songket is made and valued","How to cook a Malay dish","Why factories are better than weavers","How to travel to Terengganu"],b:0,u:"The text describes how songket is made by hand and why it is valuable."},
 {j:"pilih",t:"According to Text 1, how is songket made?",p:["It is woven by hand.","It is printed by machines.","It is sewn from plastic.","It is painted with a brush."],b:0,u:"The text says: Songket is woven by hand on a wooden loom."},
 {j:"pilih",t:"What is used to make the patterns shine? (Text 1)",p:["Gold or silver thread","Coloured paper strips","Small glass beads","Hot wax"],b:0,u:"The text says: Gold or silver threads are woven into the silk."},
 {j:"pilih",t:"The word valuable in Text 1 means",p:["worth a lot","very cheap","very small","hard to wash"],b:0,u:"Valuable means worth a lot of money or very important."},
 {j:"pilih",t:"How long can one piece take to finish? (Text 1)",p:["Several months","Several minutes","Several days","One hour"],b:0,u:"The text says: A single piece may take several months to complete."},
 {j:"banyak",t:"Based on Text 1, choose TWO reasons why songket is expensive.",p:["It is made by hand.","It takes a long time.","It is imported.","It is made of plastic."],b:[0,1],u:"The text says it is made by hand and takes several months."},
 {j:"pilih",t:"What can we infer about the weavers in Text 1?",p:["They are patient and skilful.","They are rather lazy.","They dislike their hard work.","They work only at night."],b:0,u:"They create a piece over several months by hand, so they are patient and skilful."},
 {j:"pilih",t:"What has been done to keep the tradition alive? (Text 1)",p:["Young people were taught the skill.","The craft has been banned.","Machines have replaced the weavers.","The cloth has been exported only."],b:0,u:"The text says that young people have been taught how to weave."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["The Art of Songket","A Day at the Mall","The History of Cars","How to Save Money"],b:0,u:"The whole text is about how songket is made and why it is special."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · describe a process in the passive", lampiran:null,
 kadNama:"process writing", kadEm:"\u{1F4DD}", kadFakta:"To describe how something is made: use the present simple passive (is/are + past participle) and sequence words: First, Next, Then, Finally.",
 bosKadNama:"check the participle", bosKadEm:"\u{2705}", bosKadFakta:"Irregular past participles: make → made, write → written, grow → grown, build → built, sell → sold, send → sent, wear → worn.",
 soalan:[
 {j:"isi",t:"Type the correct form of the verb: Songket ____ (weave) by hand.",b:["is woven"],u:"Present simple passive: is + woven (irregular)."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: The shirts are make in a factory.",b:["made"],u:"Passive needs the past participle: are made."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["The","goods","are","sent","to","many","countries."],b:[0,1,2,3,4,5,6],u:"Passive: The goods + are + sent + to many countries."},
 {j:"pilih",t:"Which sentence is correct?",p:["A new road is being built near our school.","A new road is building near our school.","A new road is being build near our school.","A new road being built near our school."],b:0,u:"Present continuous passive: is being + built."},
 {j:"pilih",t:"Which sentence uses the passive correctly?",p:["The mall has been closed for repairs.","The mall has closing for repairs.","The mall is been closed for repairs.","The mall have been closed for repairs."],b:0,u:"Present perfect passive: has been + closed."},
 {j:"pilih",t:"Which sentence is written correctly?",p:["Rice is grown in paddy fields, and it is harvested by hand.","Rice grows in paddy fields, and it harvested by hand.","Rice is grow in paddy fields, and it is harvest by hand.","Rice are grown in paddy fields, and it is harvests by hand."],b:0,u:"Two passive clauses: is grown and is harvested."},
 {j:"susun",t:"Put the sentences in order to describe how a T-shirt is made.",p:["First, cotton is grown and picked.","Next, it is spun into thread.","Then the thread is woven into cloth.","Finally, the cloth is cut and sewn into shirts."],b:[0,1,2,3],u:"A process starts with First, goes on with Next and Then, and ends with Finally."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["First, the cloth is washed; then it is dyed.","First the cloth is washed, then, it is dyed.","first, the cloth is washed; then it is dyed","First, the cloth is washed then; it is dyed."],b:0,u:"A comma goes after First, and a semicolon can join two related clauses."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the description: Batik cloth is made in several stages. ____",p:["First, the pattern is drawn with hot wax, and then the cloth is dyed.","First, the pattern drawing with hot wax, and then the cloth dyes.","First, the pattern is draw with hot wax, and then the cloth is dye.","First, the pattern are drawn with hot wax, and then the cloth be dyed."],b:0,u:"Present passive: is drawn, is dyed, with sequencing words."}}
];

module.exports = {
  id:"e3b4", tingkatan:3, kod:"Unit 4 Made in Malaysia",
  tajuk:"Made Here", subtajuk:"English Form 3 · Unit 4 Made in Malaysia",
  spi:SPI_B1_T3,
  ulasan:ulasanBab("production, trade and the passive voice", "Made in Malaysia"),
  lampiran:{
   lawatankilang:notis(1, "A notice about a factory tour", "Batik Heritage Factory · Guided Tours",
     ["**Tours:** Monday to Saturday. On Saturdays, tours are at 10.00 a.m. and 2.00 p.m. There are no tours on Sundays. Each tour lasts about 90 minutes.",
      "**First,** you will see how the wax is applied. Then you will see how the cloth is dyed and dried. Visitors can try batik painting and buy souvenirs.",
      "**Price:** Adults RM15 · Children RM8. School groups must book in advance.",
      "**Safety:** Closed shoes must be worn. Please do not touch the hot wax."], "Welcome to our factory!"),
   songket:teks(1, "A magazine article about a traditional craft", "The Art of Songket",
     ["Songket is one of Malaysia's most valuable textiles. It is woven by hand on a wooden loom, and gold or silver threads are woven into the silk to make the patterns shine.",
      "A single piece may take several months to complete, so songket is very expensive. The skills have been passed down from mothers to daughters for generations, and in recent years, young people have also been taught how to weave.",
      "Today, songket is worn at weddings and important ceremonies, and some pieces are even exported to other countries."],
     "Practice text: invented magazine article")
  },
  aras:ARAS
};
