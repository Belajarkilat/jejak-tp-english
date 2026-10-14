/* Sumber kandungan — English KSSM Form 5, Unit 4 Smart Consumers
   Tatabahasa: the passive with modals (can be, must be, should be, will be done), the passive in all tenses,
   causative have something done. Tema Consumerism and Financial Awareness.
   DSKP Tingkatan 5 belum dijumpai; bab ini mengikut jujukan CEFR B1 dan perlu disahkan guru.
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { emel, jadual, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Consumer Centre", sk:"Vocabulary · shopping, complaints and consumer rights", lampiran:null,
 kadNama:"refund", kadEm:"\u{1F4B8}", kadFakta:"A refund is money that is returned to you when you give back something that you bought. You usually need the receipt. Example: The shop gave me a refund for the broken phone.",
 bosKadNama:"warranty", bosKadEm:"\u{1F4DC}", bosKadFakta:"A warranty (or guarantee) is a promise by a seller to repair or replace a product if it breaks within a certain time.",
 soalan:[
 {j:"pilih",gbr:"\u{1F9FE}",t:"You should keep the ____ because the shop needs it if you want to return something.",p:["receipt","poster","ticket","recipe"],b:0,u:"A receipt proves that you bought the item."},
 {j:"pilih",gbr:"\u{1F4B8}",t:"The shop gave her a full ____ because the phone was faulty.",p:["refund","discount","tip","donation"],b:0,u:"A refund is money that is returned to you."},
 {j:"pilih",gbr:"\u{1F6E0}\u{FE0F}",t:"The washing machine broke after two months, but it was still under ____, so the repair was free.",p:["warranty","pressure","budget","contract"],b:0,u:"A warranty is a promise to repair or replace a faulty product."},
 {j:"pilih",t:"Which word means 'not working properly'?",p:["faulty","fragile","flexible","familiar"],b:0,u:"Faulty means that something does not work as it should."},
 {j:"pilih",t:"When you say that you are not satisfied with a product, you make a",p:["complaint","compliment","comparison","competition"],b:0,u:"A complaint is a statement that something is not satisfactory."},
 {j:"pilih",t:"A person who buys goods or services is a",p:["consumer","producer","inventor","manager"],b:0,u:"A consumer buys and uses goods and services."},
 {j:"isi",t:"Type the missing word: The shop offered to ____ the broken screen free of charge. (fix)",b:["repair","replace","fix"],u:"Repair, replace or fix are all correct."},
 {j:"pilih",t:"Which of these is a consumer right?",p:["the right to be informed","the right to shout at staff","the right to take goods without paying","the right to avoid all rules"],b:0,u:"Consumers have the right to be informed about the products they buy."}],
 bos:{j:"banyak",t:"Choose ALL the things that you can ask for if a product is faulty.",p:["a refund","a replacement","a repair","a free holiday","a new house"],b:[0,1,2],u:"You can ask for a refund, a replacement or a repair for a faulty product."}},

{n:2, tempat:"Passive Plant", sk:"Grammar · passive with modals; have something done", lampiran:null,
 kadNama:"passive with modals", kadEm:"\u{1F504}", kadFakta:"modal + be + past participle: The report must be finished today. Refunds can be given within 14 days. The problem should be solved quickly. The goods will be delivered tomorrow.",
 bosKadNama:"have something done", bosKadEm:"\u{1F527}", bosKadFakta:"have + object + past participle = arrange for someone else to do something for you: I had my phone repaired. She is having her hair cut. We will have the house painted next month.",
 soalan:[
 {j:"pilih",t:"Refunds ____ within fourteen days of purchase.",p:["can be given","can give","can be giving","are can give"],b:0,u:"Passive with a modal: can + be + past participle."},
 {j:"pilih",t:"The faulty goods ____ to the shop immediately.",p:["must be returned","must return","must be returning","must have returned"],b:0,u:"Must + be + past participle: must be returned."},
 {j:"pilih",t:"The parcel ____ by courier tomorrow, according to the website.",p:["will be delivered","will deliver it","will be delivering it","is deliver it"],b:0,u:"Will + be + past participle."},
 {j:"pilih",t:"I've lost my wallet, but it should ____ soon.",p:["be found","find it","be finding it","found it"],b:0,u:"Should + be + past participle: should be found."},
 {j:"pilih",t:"I didn't repair the laptop myself. I ____ it repaired at the shop.",p:["had","did","was","made"],b:0,u:"Have something done: I had it repaired."},
 {j:"pilih",t:"We're ____ our car serviced next week.",p:["having","making","doing","taking"],b:0,u:"Present continuous of have something done: are having it serviced."},
 {j:"isi",t:"Type the correct form of the verb: All complaints must ____ (record) in writing.",b:["be recorded"],u:"Must + be + past participle."},
 {j:"isi",t:"Type the missing word: She ____ her photo taken at a studio yesterday. (arranged for someone to take it)",b:["had"],u:"Past of have something done: had her photo taken."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["The damaged goods should be exchanged by the shop.","The damaged goods should exchanged by the shop.","The damaged goods should be exchange by the shop.","The damaged goods should been exchanged by the shop."],b:0,u:"Should + be + past participle."}},

{n:3, tempat:"Policy Desk", sk:"Reading 3.1.2 · specific details in a policy table", lampiran:"polisipulangan",
 kadNama:"policy", kadEm:"\u{1F4D1}", kadFakta:"A policy is a set of rules that a business or organisation follows. A returns policy explains when and how customers can return goods.",
 bosKadNama:"condition", bosKadEm:"\u{2705}", bosKadFakta:"A condition is something that must be true before something else can happen. Refunds are given on condition that the item is unused.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Within how many days can an unused item be returned?",p:["14 days","7 days","30 days","3 days"],b:0,u:"The policy says: Unused items can be returned within 14 days."},
 {j:"pilih",t:"According to Figure 1, what must customers show when returning goods?",p:["The receipt","A passport","A school card","A bus ticket"],b:0,u:"The policy says: The receipt must be shown."},
 {j:"pilih",t:"Based on Figure 1, how long does a refund take?",p:["Up to 7 working days","Up to one whole year","Within about one minute","Up to 100 working days"],b:0,u:"The policy says: Refunds will be paid within 7 working days."},
 {j:"pilih",t:"Which items cannot be returned? (Figure 1)",p:["Opened software","Unused shoes","Unopened books","Unused bags"],b:0,u:"The policy says: Opened software cannot be returned."},
 {j:"pilih",t:"What happens to a faulty item under warranty? (Figure 1)",p:["It will be repaired free.","It will be thrown away at once.","It will be sold at a higher price.","It will be donated to a charity."],b:0,u:"The policy says: Faulty items will be repaired free of charge during the warranty."},
 {j:"banyak",t:"Based on Figure 1, choose TWO conditions for a refund.",p:["The item is unused.","The receipt is shown.","The item is cheap.","The item is red."],b:[0,1],u:"The policy says the item must be unused and the receipt must be shown."},
 {j:"pilih",t:"A customer bought a shirt 10 days ago, and it is unused. What can be done? (Figure 1)",p:["It can be returned.","It cannot be returned.","It must be burned.","It can be sold to a stranger."],b:0,u:"Unused items can be returned within 14 days, and 10 days is within 14."},
 {j:"pilih",t:"What can we infer about the shop in Figure 1?",p:["It cares about its customers.","It does not accept any returns.","It sells only computer software.","It is closed for ever now."],b:0,u:"It has clear rules on returns and repairs, so it cares about customer satisfaction."}],
 bos:{j:"pilih",t:"Rina bought a game 20 days ago, but she has opened it. What does Figure 1 say about her case?",p:["It cannot be returned: it is opened and too old.","It can be returned because it is a game at the shop.","It can be returned within one hour of purchase.","It will be repaired for free by the shop staff."],b:0,u:"Opened software cannot be returned, and the return period of 14 days has passed."}},

{n:4, tempat:"Service Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"who does the action?", kadEm:"\u{1F3A7}", kadFakta:"With the passive and with have something done, the speaker often does not say who does the action. Listen for the object and the result: My car was repaired. I had my car repaired.",
 bosKadNama:"customer service language", bosKadEm:"\u{1F4DE}", bosKadFakta:"Customer service speakers use polite passive forms: Your order will be delivered. A refund can be issued. Your request has been noted.",
 soalan:[
 {j:"pilih",t:"Listen. What happened to the speaker's laptop?",dengar:"My laptop stopped working last week, so I took it to a repair shop. It was repaired in two days, and I had a new battery installed at the same time.",p:["It was repaired.","It was stolen.","It was sold.","It was lost."],b:0,u:"The speaker says: It was repaired in two days."},
 {j:"pilih",t:"Listen. What else did the speaker have done?",dengar:"My laptop stopped working last week, so I took it to a repair shop. It was repaired in two days, and I had a new battery installed at the same time.",p:["A new battery installed","A new screen fitted","The keyboard cleaned","The case painted"],b:0,u:"The speaker says: I had a new battery installed."},
 {j:"pilih",t:"Listen. When will the parcel be delivered?",dengar:"Thank you for calling. Your parcel will be delivered on Friday morning, and a message will be sent to your phone one hour before.",p:["On Friday morning","On Monday evening","Yesterday afternoon","Next year in May"],b:0,u:"The speaker says: Your parcel will be delivered on Friday morning."},
 {j:"pilih",t:"Listen. What will be sent to the customer's phone?",dengar:"Thank you for calling. Your parcel will be delivered on Friday morning, and a message will be sent to your phone one hour before.",p:["A message","A bill","A photograph","A gift"],b:0,u:"The speaker says: a message will be sent to your phone."},
 {j:"pilih",t:"Listen. Why does the customer want a refund?",dengar:"I'd like a refund, please. The shoes I bought were damaged when I opened the box. I've kept the receipt, and the shoes haven't been worn.",p:["The shoes were damaged.","The shoes were too cheap.","The shoes were the wrong colour.","The shoes were too big."],b:0,u:"The customer says: The shoes ... were damaged when I opened the box."},
 {j:"pilih",t:"Listen. What has the customer kept?",dengar:"I'd like a refund, please. The shoes I bought were damaged when I opened the box. I've kept the receipt, and the shoes haven't been worn.",p:["The receipt","The old shoes","The bag","The manager's card"],b:0,u:"The customer says: I've kept the receipt."},
 {j:"pilih",t:"Listen. What is the speaker having done?",dengar:"I'm having my hair cut this afternoon, and next week, I'm going to have my bicycle serviced. I never do these things myself.",p:["Having her hair cut","Having her house painted","Having her photo taken","Having her car washed"],b:0,u:"The speaker says: I'm having my hair cut this afternoon."},
 {j:"isi",t:"Listen and type the missing word: My phone ____ repaired yesterday.",dengar:"My phone was repaired yesterday.",b:["was"],u:"The speaker says was. Past passive: was + repaired."}],
 bos:{j:"pilih",t:"Listen to the announcement. What is the main message?",dengar:"Attention all shoppers. Due to a technical problem, the payment system will be closed for one hour. Cash can be accepted at counter three, and all receipts will be printed by hand. We apologise for the inconvenience.",p:["Cash is accepted at counter three.","The shop will close for ever today.","Everything is free of charge today.","Cards are the only option for payment."],b:0,u:"The announcement says: Cash can be accepted at counter three."}},

{n:5, tempat:"Review Room", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"emeladuan",
 kadNama:"formal complaint", kadEm:"\u{1F4E7}", kadFakta:"A formal complaint is polite, clear and gives facts: what you bought, what went wrong, what you want. Use formal phrases: I am writing to complain about ... I would appreciate it if ...",
 bosKadNama:"remedy", bosKadEm:"\u{1F6E0}\u{FE0F}", bosKadFakta:"A remedy is a solution to a problem. In a complaint, you say which remedy you want: a refund, a replacement or a repair.",
 soalan:[
 {j:"pilih",t:"What is the main purpose of Text 1?",p:["To complain about a product","To thank a very good friend","To invite a guest to a party","To say goodbye to a friend"],b:0,u:"The email complains about a faulty product."},
 {j:"pilih",t:"According to Text 1, what did the customer buy?",p:["A blender","A bicycle","A watch","A laptop"],b:0,u:"The email says: I bought a blender on 3 May."},
 {j:"pilih",t:"What is wrong with the product? (Text 1)",p:["It stopped after two days.","It was far too expensive.","It was the wrong colour.","It was far too quiet."],b:0,u:"The email says: It stopped working after only two days."},
 {j:"pilih",t:"The word faulty in Text 1 means",p:["not working well","very expensive indeed","very modern in style","brightly coloured"],b:0,u:"Faulty means not working as it should."},
 {j:"pilih",t:"What does the customer want? (Text 1)",p:["A new one or a refund","An apology only, nothing more","A free holiday for her family","A new shop in her town"],b:0,u:"The email says: I would like a replacement or a full refund."},
 {j:"banyak",t:"Based on Text 1, choose TWO details that the customer provides.",p:["the date of purchase","the receipt number","a photograph of her family","her favourite colour"],b:[0,1],u:"The email gives the date of purchase and the receipt number."},
 {j:"pilih",t:"What can we infer about the customer's attitude? (Text 1)",p:["She is polite but firm.","She is quite rude to staff.","She is careless about details.","She is only joking with them."],b:0,u:"She uses formal, polite language but states clearly what she wants."},
 {j:"pilih",t:"Which sentence from Text 1 uses the passive?",p:["The blender was bought on 3 May.","I am writing to complain today.","I would like a full refund.","I look forward to your reply soon."],b:0,u:"Was bought is the past simple passive."}],
 bos:{j:"pilih",t:"Which of these is the BEST subject line for the email in Text 1?",p:["Complaint about a blender","Happy birthday to you","Holiday photos from Penang","Football news this week"],b:0,u:"The email is a complaint about a faulty blender."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · write a polite formal complaint", lampiran:null,
 kadNama:"formal complaint structure", kadEm:"\u{1F4DD}", kadFakta:"1. Why you are writing (I am writing to complain about ...). 2. What happened (The item was ...). 3. What you want (I would appreciate a refund). 4. Closing (I look forward to your reply). Use the passive for formal tone.",
 bosKadNama:"formal or informal?", bosKadEm:"\u{1F3A9}", bosKadFakta:"Formal: I would like to request ... Informal: I want ... Formal: Dear Sir or Madam. Informal: Hi. Avoid short forms (don't, can't) in formal writing.",
 soalan:[
 {j:"isi",t:"Type the missing word: The item should ____ returned within 14 days.",b:["be"],u:"Should + be + past participle."},
 {j:"isi",t:"There is ONE wrong word. Type the correct word: I had my bag steal at the station.",b:["stolen"],u:"Have something done uses the past participle: stolen."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["The","goods","must","be","returned","today."],b:[0,1,2,3,4,5],u:"Modal passive: must be returned."},
 {j:"pilih",t:"Which sentence is a formal request?",p:["I would appreciate a replacement.","Replace the item right now.","I want a new one at once.","Give me back my money now."],b:0,u:"Formal language uses polite phrases and the passive."},
 {j:"pilih",t:"Which sentence is correct?",p:["My laptop was repaired last week.","My laptop was repair last week.","My laptop repaired last week.","My laptop is been repaired last week."],b:0,u:"Past simple passive: was repaired."},
 {j:"pilih",t:"Which sentence uses have something done correctly?",p:["We are having the roof repaired.","We are having the roof repair.","We have the roof repairing.","We are having repaired the roof."],b:0,u:"Have + object + past participle."},
 {j:"susun",t:"Put the sentences in order to make a short formal email.",p:["Dear Sir or Madam,","I am writing to complain about a faulty blender.","I would appreciate a replacement.","I look forward to your reply."],b:[0,1,2,3],u:"Greeting, purpose, request and closing."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["I look forward to hearing from you.","I look forward to hearing from you!!","i look forward to hearing from you","I look forward to hearing, from you."],b:0,u:"A formal sentence ends with a full stop."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the complaint: I bought a phone on 5 June, but it stopped working after a week. ____",p:["I would appreciate it if the phone could be repaired or replaced soon.","I want you to fix it now or I will shout at everybody here.","Phone broken, and you should fix it very fast today.","I think you should be giving me money back so quickly."],b:0,u:"A formal request uses polite phrases and a modal passive."}}
];

module.exports = {
  id:"e5b4", tingkatan:5, kod:"Unit 4 Smart Consumers",
  tajuk:"Smart Shoppers", subtajuk:"English Form 5 · Unit 4 Smart Consumers",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("consumer rights, the passive with modals and have something done", "Smart Consumers"),
  lampiran:{
   polisipulangan:jadual(1, "A shop's returns policy", "Returns and Repairs Policy",
     ["Situation","What happens"],
     [["Unused items","Can be returned within 14 days. The receipt must be shown."],["Refunds","Will be paid within 7 working days."],["Opened software","Cannot be returned."],["Faulty items under warranty","Will be repaired free of charge."]],
     "Please keep your receipt. Items must be unused to be returned."),
   emeladuan:emel(1, "A formal email of complaint", {dari:"Maria Tan <maria@sample.example>", kepada:"Customer Service <service@kedai.example>", subjek:"Complaint about a faulty blender",
     isi:["Dear Sir or Madam,",
      "I am writing to complain about a blender that was bought from your shop on 3 May (receipt number 4521). It stopped working after only two days.",
      "I would like a replacement or a full refund. I would appreciate it if the matter could be solved as soon as possible.",
      "I look forward to your reply.","Yours faithfully,","Maria Tan"]})
  },
  aras:ARAS
};
