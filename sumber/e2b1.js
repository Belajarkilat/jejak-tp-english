/* Sumber kandungan — English KSSM Form 2, Unit 6 Money
   DSKP Form 2 Textbook scope and sequence: Tema Consumerism and Financial Awareness, Unit 6.
   Tatabahasa: be going to, time expression + will, would like. Kosa kata: jobs and chores, money and shopping.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { poster, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Pocket Money Plaza", sk:"Vocabulary · jobs and chores, money and shopping", lampiran:null,
 kadNama:"earn / save / spend", kadEm:"\u{1F4B0}", kadFakta:"earn = get money for work. save = keep money for later. spend = use money to buy things. Example: I earn RM10, spend RM4 and save RM6.",
 bosKadNama:"borrow / lend", bosKadEm:"\u{1F91D}", bosKadFakta:"borrow = take something and give it back later. lend = give something to someone for a short time. I borrow from you, and you lend to me.",
 soalan:[
 {j:"pilih",gbr:"\u{1F415}\u{1F9AE}",t:"Mei Ling takes her neighbour's dogs for walks. What is her job?",p:["take dogs for walks","deliver newspapers","wash cars","do the ironing"],b:0,u:"She walks dogs for her neighbour: take dogs for walks. It is a job for pocket money."},
 {j:"pilih",gbr:"\u{1F4F0}\u{1F6B2}",t:"Hafiz rides his bicycle early every morning and puts newspapers in people's mailboxes. What job is it?",p:["deliver newspapers","babysit","do the gardening","lay the table"],b:0,u:"Delivering newspapers means taking newspapers to people's homes."},
 {j:"pilih",gbr:"\u{1F9F9}",t:"Which chore do you do with a vacuum cleaner or a broom?",p:["clean the floor","make the beds","do the ironing","lay the table"],b:0,u:"We clean the floor with a vacuum cleaner or a broom."},
 {j:"pilih",gbr:"\u{1F6CF}\u{FE0F}",t:"Which chore do you do first thing after you wake up?",p:["make the bed","wash cars","pet sit","do the gardening"],b:0,u:"We make the bed by arranging the sheets and the pillow after we wake up."},
 {j:"pilih",gbr:"\u{1F4B5}",t:"I want to keep my money in a bank because I need it for the future. I want to",p:["save it","lose it","spend it","swap it"],b:0,u:"Save means keep money for later. Spend means use it."},
 {j:"pilih",t:"Which word means 'to get money for work'?",p:["earn","lend","win","swap"],b:0,u:"Earn means to get money by working."},
 {j:"isi",gbr:"\u{1F3F7}\u{FE0F}",t:"Type the missing word: This jacket ____ RM80. It is quite expensive.",b:["costs"],u:"Cost is the verb for price. With it/this jacket, add -s: costs."},
 {j:"pilih",t:"Which word means to exchange one thing for another thing?",p:["swap","earn money","lose money","collect coins"],b:0,u:"Swap means to give something and get something else in return."}],
 bos:{j:"banyak",t:"Choose ALL the words that are about giving or taking money.",p:["lend","borrow","pay for","babysit","tidy your room"],b:[0,1,2],u:"Lend, borrow and pay for are about money. Babysit and tidy your room are chores or jobs."}},

{n:2, tempat:"Plan Lane", sk:"Grammar · be going to, will + time expression, would like", lampiran:null,
 kadNama:"going to / will", kadEm:"\u{1F52E}", kadFakta:"Use be going to for plans we already decided: I'm going to buy a magazine. Use will for promises and quick decisions: I'll see you tomorrow. Time words with will: tomorrow, next week, soon.",
 bosKadNama:"would like", bosKadEm:"\u{1F64F}", bosKadFakta:"Would like + to + verb is polite for wants: I'd like to visit Canada. Question: Would you like to go shopping? Short answers: Yes, I would. / No, I wouldn't.",
 soalan:[
 {j:"pilih",t:"I ____ buy a new bag with my pocket money.",p:["'m going to","go to","am go to","going to"],b:0,u:"A plan: be going to + base verb: I'm going to buy."},
 {j:"pilih",t:"We ____ going to go on holiday this year. We don't have enough money.",p:["aren't","isn't","don't","won't"],b:0,u:"Negative with we: aren't going to."},
 {j:"pilih",t:"____ you going to save your money?",p:["Are","Do","Is","Will to"],b:0,u:"Question: Are + you + going to + base verb?"},
 {j:"pilih",t:"I'll see you ____.",p:["tomorrow","yesterday","last week","ago"],b:0,u:"Will talks about the future, so use a future time word: tomorrow, next week, soon."},
 {j:"pilih",t:"When I go on holiday, I ____ some souvenirs.",p:["'ll buy","bought some","was buying","am bought"],b:0,u:"When + present simple, will + base verb: I'll buy."},
 {j:"pilih",t:"I'd like ____ Canada one day.",p:["to visit","visit it","visiting the","for visiting"],b:0,u:"Would like + to + base verb: I'd like to visit."},
 {j:"isi",t:"Type the missing word: Jess ____ like to babysit. She is afraid of small children. (negative)",b:["wouldn't","would not"],u:"The negative of would like is wouldn't like."},
 {j:"isi",t:"Type the short answer: Would you like to go shopping? Yes, I ____.",b:["would"],u:"A short answer repeats would: Yes, I would."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["Hana is going to save half of her pocket money.","Hana going to save half of her pocket money.","Hana is going save half of her pocket money.","Hana is go to saving half of her pocket money."],b:0,u:"Subject + is + going to + base verb: Hana is going to save."}},

{n:3, tempat:"Fundraiser Fair", sk:"Reading 3.1.2 · specific details in a poster", lampiran:"cucikereta",
 kadNama:"fundraiser", kadEm:"\u{1F4B3}", kadFakta:"A fundraiser is an event to collect money for a good cause. Example: Our class is holding a fundraiser for the flood victims.",
 bosKadNama:"donate", bosKadEm:"\u{1F381}", bosKadFakta:"donate = give money or things to help others (menderma). Example: We donated clothes to the shelter.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. What is the event?",p:["A car wash","A book sale","A bake sale","A sports day"],b:0,u:"The poster says: CAR WASH for a good cause."},
 {j:"pilih",t:"According to Figure 1, who is the money for?",p:["The school animal shelter","The school canteen","The football team","The teachers"],b:0,u:"The poster says: All the money will help our school animal shelter."},
 {j:"pilih",t:"Based on Figure 1, how much does it cost to wash a motorbike?",p:["RM5","RM10","RM15","RM3"],b:0,u:"The poster says: Motorbike RM5, Car RM10, Van RM15."},
 {j:"pilih",t:"When will the car wash start? (Figure 1)",p:["At 8.00 a.m.","At 10.00 a.m.","At 2.00 p.m.","At 6.00 p.m."],b:0,u:"The poster says: Saturday, 8.00 a.m. - 12.00 noon."},
 {j:"pilih",t:"Where is the car wash? (Figure 1)",p:["In the school car park","On the field","In the canteen","In the hall"],b:0,u:"The poster says: Place: School car park."},
 {j:"banyak",t:"Based on Figure 1, choose TWO things a customer will get.",p:["a clean car","a free drink","a free haircut","a new tyre"],b:[0,1],u:"The poster says: a sparkling clean car and a free drink for every customer."},
 {j:"pilih",t:"Zul's family has one car and one motorbike. How much will they pay altogether? (Figure 1)",p:["RM15","RM10","RM20","RM5"],b:0,u:"A car is RM10 and a motorbike is RM5, so RM15."},
 {j:"pilih",t:"What can we infer about the people who organise the car wash in Figure 1?",p:["They want to help animals.","They want to buy a car.","They need a holiday.","They are earning pocket money."],b:0,u:"All the money will help the animal shelter, so they want to help animals."}],
 bos:{j:"pilih",t:"Amin has RM30 and wants to wash two cars and one motorbike. Is that enough, according to Figure 1?",p:["Yes, he will have RM5 left.","No, he is RM5 short.","Yes, he will have RM10 left.","No, he is RM10 short."],b:0,u:"Two cars (RM20) and a motorbike (RM5) cost RM25. RM30 - RM25 = RM5 left."}},

{n:4, tempat:"Money Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"numbers", kadEm:"\u{1F522}", kadFakta:"Listen carefully to money: fifteen (15) and fifty (50) sound similar! The stress is different: fifTEEN, FIFty.",
 bosKadNama:"plans", bosKadEm:"\u{1F5D3}\u{FE0F}", bosKadFakta:"When someone talks about plans, listen for: I'm going to..., I'd like to..., I'll... and time words (tomorrow, next month).",
 soalan:[
 {j:"pilih",t:"Listen. What is Sara going to buy?",dengar:"I'm going to buy a new pair of shoes with my pocket money. They cost thirty ringgit, and I've saved twenty-five already.",p:["A pair of shoes","A new bag","A school uniform","A mobile phone"],b:0,u:"Sara says: I'm going to buy a new pair of shoes."},
 {j:"pilih",t:"Listen. How much more money does Sara need?",dengar:"I'm going to buy a new pair of shoes with my pocket money. They cost thirty ringgit, and I've saved twenty-five already.",p:["Five ringgit","Ten ringgit","Twenty ringgit","Thirty ringgit"],b:0,u:"The shoes cost RM30, and she has RM25. She needs RM5 more."},
 {j:"pilih",t:"Listen. What job does Daniel do?",dengar:"Every Saturday morning, I deliver newspapers to forty houses. I earn twelve ringgit, and I spend half of it on lunch.",p:["He delivers newspapers.","He washes cars at home.","He babysits his cousins.","He sells cakes at school."],b:0,u:"Daniel says: I deliver newspapers to forty houses."},
 {j:"pilih",t:"Listen. How much does Daniel spend on lunch?",dengar:"Every Saturday morning, I deliver newspapers to forty houses. I earn twelve ringgit, and I spend half of it on lunch.",p:["Six ringgit","Twelve ringgit","Four ringgit","Forty ringgit"],b:0,u:"He earns RM12 and spends half, so he spends RM6."},
 {j:"pilih",t:"Listen. What would Nadia like to do?",dengar:"When I'm older, I'd like to be a pilot. I'd like to travel to many countries, but I wouldn't like to work at night.",p:["Be a pilot","Be a doctor","Work at night","Stay at home"],b:0,u:"Nadia says: I'd like to be a pilot."},
 {j:"pilih",t:"Listen. What wouldn't Nadia like?",dengar:"When I'm older, I'd like to be a pilot. I'd like to travel to many countries, but I wouldn't like to work at night.",p:["Working at night","Travelling","Flying planes","Visiting countries"],b:0,u:"Nadia says: I wouldn't like to work at night."},
 {j:"pilih",t:"Listen. When will the speaker call?",dengar:"I'm busy now, so I'll call you tomorrow after school. Then we can plan the party together.",p:["Tomorrow after school","Tonight","Next week","This morning"],b:0,u:"The speaker says: I'll call you tomorrow after school."},
 {j:"isi",t:"Listen and type the missing words: We ____ going to go on holiday this year.",dengar:"We aren't going to go on holiday this year.",b:["aren't","are not"],u:"The speaker says aren't. Negative: aren't going to + base verb."}],
 bos:{j:"pilih",t:"Listen to the message. Why can't Rina buy the bag today?",dengar:"Hi Rina, it's Aisha. I'm at the mall. The bag you like costs ninety ringgit, but there's a sale next week, and it will cost only sixty. Why don't you wait until then?",p:["It will be cheaper next week.","The shop is closed.","The bag is broken.","She doesn't like it."],b:0,u:"Aisha says: there's a sale next week, and it will cost only sixty."}},

{n:5, tempat:"Money Blog", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"simpan",
 kadNama:"budget", kadEm:"\u{1F4CA}", kadFakta:"A budget is a plan for how to spend your money. A simple budget: needs first (lunch, bus), then wants (games), and always save a little.",
 bosKadNama:"wants / needs", bosKadEm:"\u{1F6D2}", bosKadFakta:"A need is something you must have (food, water). A want is something nice to have (a new game). Spend on needs first.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["How a pupil saves money step by step","How a pupil lost his money","How to buy a new phone","Why shops are closed"],b:0,u:"The text describes the steps Adam follows to save money."},
 {j:"pilih",t:"According to Text 1, how much pocket money does Adam get each week?",p:["RM20","RM10","RM30","RM50"],b:0,u:"The text says: My parents give me RM20 every week."},
 {j:"pilih",t:"What does Adam do FIRST with his pocket money? (Text 1)",p:["He puts some in a jar.","He buys a game.","He lends it to a friend.","He gives it to his teacher."],b:0,u:"The text says: First, I put RM5 in a jar for savings."},
 {j:"pilih",t:"The word savings in Text 1 means",p:["money that is kept for later","money that is lost","money that is borrowed","money that is stolen"],b:0,u:"Savings are the money you keep and do not spend."},
 {j:"pilih",t:"Why does Adam not buy the new game immediately? (Text 1)",p:["He is saving for it.","The game is free.","He doesn't like games.","He has no friends."],b:0,u:"He says: I'm going to wait until I have enough money."},
 {j:"banyak",t:"Based on Text 1, choose TWO things Adam spends money on every week.",p:["lunch at school","bus fare","a new phone","holiday tickets"],b:[0,1],u:"The text says: I spend RM10 on lunch and bus fare."},
 {j:"pilih",t:"What can we infer about Adam? (Text 1)",p:["He is careful with money.","He spends all his money quickly.","He never saves.","He borrows money every day."],b:0,u:"He plans, saves and waits, so he is careful with money."},
 {j:"susun",t:"Put Adam's steps in the correct order. (Text 1)",p:["He puts RM5 in a jar.","He spends RM10 on lunch and bus fare.","He keeps RM5 for fun.","He buys the game after two months."],b:[0,1,2,3],u:"The text follows the order: save first, spend on needs, keep some for fun, and buy the game later."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Saving Step by Step","A Trip to the Zoo","My Favourite Game","The Best School Canteen"],b:0,u:"The text is about how Adam saves step by step."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.2 · Grammar · describe plans and give reasons", lampiran:null,
 kadNama:"because", kadEm:"\u{1F4DD}", kadFakta:"Give a reason with because: I'm going to save my money because I want to buy a bicycle. Use so for a result: I want a bicycle, so I'm going to save.",
 bosKadNama:"a plan paragraph", bosKadEm:"\u{1F4CB}", bosKadFakta:"A short plan: say WHAT you're going to do, WHY, and HOW. First, ... Then, ... Finally, ...",
 soalan:[
 {j:"isi",t:"Type the missing word: I'm saving my money ____ I want to buy a bicycle.",b:["because","as","since"],u:"Because (or as / since) gives a reason."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: I'm going to saving RM10 every week.",b:["save"],u:"After going to, use the base verb: going to save."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["I","would","like","to","visit","Canada."],b:[0,1,2,3,4,5],u:"Subject + would like + to + verb + object."},
 {j:"pilih",t:"Which sentence is a polite wish?",p:["I'd like to buy a new bag.","I want buy a new bag.","I'm like to buying a new bag.","I'd likes to buy a new bag."],b:0,u:"I'd like to + base verb is polite: I'd like to buy."},
 {j:"pilih",t:"Which sentence about the future is correct?",p:["When I get paid, I will buy some books.","When I will get paid, I buy some books.","When I get paid, I buying some books.","When I got paid, I will to buy some books."],b:0,u:"When + present simple, will + base verb."},
 {j:"pilih",t:"Which negative sentence is correct?",p:["Aiman isn't going to spend all his money.","Aiman don't going to spend all his money.","Aiman isn't going spend all his money.","Aiman not going to spend all his money."],b:0,u:"Negative: isn't going to + base verb."},
 {j:"susun",t:"Put the sentences in order to make a plan.",p:["I'm going to save RM5 every week.","First, I'll put it in a jar.","Then I'll take it to the bank every month.","Finally, I'll buy a new bicycle."],b:[0,1,2,3],u:"State the plan, then give the steps in order: First, Then, Finally."},
 {j:"pilih",t:"Which sentence uses capital letters correctly?",p:["On Saturday, Hana and I are going to the market.","on saturday, Hana and i are going to the market.","On Saturday, hana and I are going to the Market.","On saturday, Hana And I are going to the market."],b:0,u:"Capital letters for the start, days, names and I."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the plan: I want to buy a school bag. ____",p:["I'm going to save RM5 every week because I don't have enough money.","I going to saving RM5 every week because I not have enough money.","I'm going save RM5 every week because I don't has enough money.","I will to save RM5 every week because enough money not have."],b:0,u:"Use be going to + base verb and because to give the reason."}}
];

module.exports = {
  id:"e2b1", tingkatan:2, kod:"Unit 6 Money",
  tajuk:"Money Masters", subtajuk:"English Form 2 · Unit 6 Money",
  spi:SPI_A2,
  ulasan:ulasanBab("money, jobs and plans (be going to, would like)", "Money"),
  lampiran:{
   cucikereta:poster(1, "A school fundraiser poster", {ikon:"\u{1F697}", judul:"CAR WASH", sub:"For a good cause! All the money will help our school animal shelter.",
     butir:[
      ["\u{1F4C5}","**Saturday**, 8.00 a.m. - 12.00 noon"],
      ["\u{1F3EB}","**Place:** School car park"],
      ["\u{1F4B5}","Motorbike **RM5** · Car **RM10** · Van **RM15**"],
      ["\u{1F964}","A sparkling clean car and a free drink for every customer!"]]}),
   simpan:teks(1, "A blog post by a pupil", "How I Save My Pocket Money",
     ["Hello! My name is Adam, and I'm fourteen. My parents give me RM20 every week. In the past, I spent it all in two days, but now I have a plan.",
      "First, I put RM5 in a jar for savings. Then I spend RM10 on lunch and bus fare. I keep the last RM5 for fun, for example for a snack with my friends.",
      "I'm going to buy a new game, but I'm going to wait until I have enough money. In about two months, I'll have RM40, and then I'll buy it. It's not easy, but I'm very proud of myself!"],
     "Practice text: invented blog post")
  },
  aras:ARAS
};
