/* Sumber kandungan — English KSSM Form 5, Unit 6 Making Your Case
   Tatabahasa dan fungsi: advanced linking words (nevertheless, whereas, while, in order to, so that, on the other hand,
   moreover), formal and informal register, for-and-against and opinion writing, summary skills.
   Tema People and Culture / Education. DSKP Tingkatan 5 belum dijumpai; bab ini mengikut jujukan CEFR B1 dan
   perlu disahkan guru. Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { jadual, sembang, teks, SPI_B1_T4, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Debate Hall", sk:"Vocabulary · argument, opinion and persuasion", lampiran:null,
 kadNama:"for and against", kadEm:"\u{2696}\u{FE0F}", kadFakta:"In a for-and-against essay, you present the advantages and disadvantages of an issue and then give your own opinion. Useful words: advantage, disadvantage, benefit, drawback, argue, claim, conclude.",
 bosKadNama:"formal register", bosKadEm:"\u{1F3A9}", bosKadFakta:"Formal writing uses full forms (do not), precise vocabulary (obtain, assist, purchase) and linking words (moreover, nevertheless). It avoids slang and exclamations.",
 soalan:[
 {j:"pilih",gbr:"\u{1F5E3}\u{FE0F}",t:"A formal discussion in which two sides present opposite views is a",p:["debate","recipe","routine","parade"],b:0,u:"A debate is a formal argument between two sides."},
 {j:"pilih",gbr:"\u{1F44D}",t:"A good point in favour of something is an",p:["advantage","obstacle","accident","exception"],b:0,u:"An advantage is a benefit."},
 {j:"pilih",gbr:"\u{1F44E}",t:"A negative point against something is a",p:["disadvantage","privilege","reward","solution"],b:0,u:"A disadvantage is a drawback."},
 {j:"pilih",t:"Which word is the most formal alternative to 'buy'?",p:["purchase","grab it","pick up","snap up"],b:0,u:"Purchase is a formal word for buy."},
 {j:"pilih",t:"Which word is the most formal alternative to 'get'?",p:["obtain","grab","nab","snatch"],b:0,u:"Obtain is a formal word for get."},
 {j:"pilih",t:"When you say that something is true, usually without proof, you",p:["claim","delete","repair","avoid"],b:0,u:"To claim is to say that something is true."},
 {j:"isi",t:"Type the missing word: In ____, schools should not ban phones completely, but they should limit their use. (the last part of an essay)",b:["conclusion","summary"],u:"In conclusion (or in summary) introduces the final part of an essay."},
 {j:"pilih",t:"Which word is closest in meaning to 'drawback'?",p:["disadvantage","benefit","opportunity","reward"],b:0,u:"A drawback is a disadvantage."}],
 bos:{j:"banyak",t:"Choose ALL the expressions that are suitable for formal writing.",p:["moreover","nevertheless","in conclusion","wanna","a bit rubbish"],b:[0,1,2],u:"Moreover, nevertheless and in conclusion are formal linking words. Wanna and a bit rubbish are informal."}},

{n:2, tempat:"Linking Lab", sk:"Grammar · advanced linking words and purpose clauses", lampiran:null,
 kadNama:"contrast and addition", kadEm:"\u{2194}\u{FE0F}", kadFakta:"nevertheless / however / on the other hand = contrast (new sentence, with a comma). whereas / while = contrast in one sentence (Some pupils like homework, whereas others hate it). moreover / in addition / furthermore = add another point.",
 bosKadNama:"purpose", bosKadEm:"\u{1F3AF}", bosKadFakta:"in order to + base verb (We study in order to pass). so that + clause (We study so that we can pass). so as not to + base verb (We left early so as not to be late).",
 soalan:[
 {j:"pilih",t:"Some students prefer revising alone, ____ others like studying in groups.",p:["whereas","moreover","nevertheless","in order to"],b:0,u:"Whereas shows a contrast inside one sentence."},
 {j:"pilih",t:"The exam was difficult. ____, most students passed.",p:["Nevertheless","Moreover","Because","So that"],b:0,u:"Nevertheless introduces a contrast with the previous sentence."},
 {j:"pilih",t:"Exercise improves health. ____, it reduces stress.",p:["Moreover","Nevertheless","Whereas","Unless"],b:0,u:"Moreover adds another point."},
 {j:"pilih",t:"She stayed up late ____ finish her project.",p:["in order to","so that to","for to","in case to"],b:0,u:"In order to + base verb expresses purpose."},
 {j:"pilih",t:"He spoke slowly ____ everyone could understand him.",p:["so that","in order","so as","despite"],b:0,u:"So that + clause expresses purpose."},
 {j:"pilih",t:"We left early ____ be late for the meeting.",p:["so as not to","in order that to","so that to","for not"],b:0,u:"So as not to + base verb expresses a negative purpose."},
 {j:"isi",t:"Type the missing word: Online classes are convenient. ____, some students find them lonely. (contrast; start of a sentence)",b:["however","nevertheless","on the other hand"],u:"However, nevertheless and on the other hand show contrast."},
 {j:"isi",t:"Type the missing words: Some people enjoy cities, ____ others prefer villages. (one word)",b:["whereas","while"],u:"Whereas and while show a contrast in one sentence."}],
 bos:{j:"pilih",t:"Which sentence is grammatically correct?",p:["Students should read widely in order to improve their vocabulary.","Students should read widely for to improve their vocabulary.","Students should read widely so as for improve their vocabulary.","Students should read widely in order for improving their vocabulary."],b:0,u:"In order to + base verb."}},

{n:3, tempat:"Opinion Poll Wall", sk:"Reading 3.1.2 · specific details in a poll table", lampiran:"tinjauanpendapat",
 kadNama:"proportion", kadEm:"\u{1F967}", kadFakta:"A proportion shows a part of the whole: three out of four = 75%. Words such as the majority, a minority, nearly half and the vast majority describe proportions.",
 bosKadNama:"agree / disagree", bosKadEm:"\u{1F5F3}\u{FE0F}", bosKadFakta:"In surveys, people strongly agree, agree, disagree or strongly disagree. Percentages show how many chose each opinion.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. How many students were asked?",p:["500","50","5,000","150"],b:0,u:"The table says: 500 students were surveyed."},
 {j:"pilih",t:"According to Figure 1, what percentage agree that homework should be reduced?",p:["56%","44%","10%","90%"],b:0,u:"The table says: Agree: 56%."},
 {j:"pilih",t:"Which opinion is held by the smallest group? (Figure 1)",p:["Strongly disagree","Strongly agree with it","Agree with the idea","No opinion at all"],b:0,u:"Strongly disagree: 6%, the lowest."},
 {j:"pilih",t:"How many students (of 500) disagree? (Figure 1)",p:["100","10","50","200"],b:0,u:"Disagree: 20% of 500 = 100."},
 {j:"pilih",t:"Which statement is TRUE? (Figure 1)",p:["Most students want less homework.","Nobody wants any less homework.","Most students strongly disagree here.","Only teachers were surveyed at all."],b:0,u:"Agree and strongly agree together are 56% + 10% = 66%, which is the majority."},
 {j:"banyak",t:"Based on Figure 1, choose TWO accurate statements.",p:["More students agree than disagree.","Fewer than one in ten strongly disagree.","Everyone has an opinion.","Half of the students are undecided."],b:[0,1],u:"Agree (56%) is larger than disagree (20%), and 6% strongly disagree, which is fewer than one in ten."},
 {j:"pilih",t:"What can we conclude from Figure 1?",p:["Most students want less homework.","Students really enjoy their homework.","Teachers set no homework at all.","Homework has been banned totally."],b:0,u:"A majority want less homework, so they believe that there is too much."},
 {j:"pilih",t:"If the school reduced homework, which group would be least satisfied? (Figure 1)",p:["Those who strongly disagree","The students who agree with it","The majority of the students","The students with no opinion"],b:0,u:"Those who strongly disagree do not want homework to be reduced."}],
 bos:{j:"pilih",t:"Which sentence would be the best conclusion for a report on Figure 1?",p:["Opinions differ, but most favour less homework.","Everyone hates all kinds of homework.","Nobody cares about homework at all.","Teachers should ignore the whole survey."],b:0,u:"A balanced conclusion uses although and reports the majority view."}},

{n:4, tempat:"Debate Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"signpost words", kadEm:"\u{1F6A7}", kadFakta:"In a speech or debate, signpost words show the structure: Firstly, secondly, moreover, however, on the other hand, in conclusion. Listen for them to follow the argument.",
 bosKadNama:"for or against?", bosKadEm:"\u{1F500}", bosKadFakta:"Decide whether the speaker is for or against an idea. Listen for words of agreement (I support, benefit) and disagreement (I oppose, drawback).",
 soalan:[
 {j:"pilih",t:"Listen. What is the speaker's opinion about school uniforms?",dengar:"I strongly support school uniforms. Firstly, they create a sense of equality. Secondly, they save parents money. However, some students feel that uniforms limit their individuality.",p:["She supports them.","She opposes them.","She has no opinion.","She wants to ban them."],b:0,u:"The speaker says: I strongly support school uniforms."},
 {j:"pilih",t:"Listen. What is the first advantage?",dengar:"I strongly support school uniforms. Firstly, they create a sense of equality. Secondly, they save parents money. However, some students feel that uniforms limit their individuality.",p:["They create equality.","They are cheap to wash.","They look expensive.","They are colourful."],b:0,u:"The speaker says: Firstly, they create a sense of equality."},
 {j:"pilih",t:"Listen. What is the drawback mentioned?",dengar:"I strongly support school uniforms. Firstly, they create a sense of equality. Secondly, they save parents money. However, some students feel that uniforms limit their individuality.",p:["They limit individuality.","They cost far too much.","They are very uncomfortable.","They are old-fashioned now."],b:0,u:"The speaker says: some students feel that uniforms limit their individuality."},
 {j:"pilih",t:"Listen. Which linking word shows contrast?",dengar:"Online learning is convenient. However, it can be lonely, whereas classroom learning offers friendship. Nevertheless, many students prefer to study at home.",p:["However","Firstly","Moreover","Therefore"],b:0,u:"However and whereas and nevertheless show contrast."},
 {j:"pilih",t:"Listen. What do many students prefer?",dengar:"Online learning is convenient. However, it can be lonely, whereas classroom learning offers friendship. Nevertheless, many students prefer to study at home.",p:["Studying at home","Studying in the library","Studying abroad","Studying at night"],b:0,u:"The speaker says: many students prefer to study at home."},
 {j:"pilih",t:"Listen. Why does the speaker mention the library?",dengar:"The school library should be open longer. In order to prepare for exams, students need a quiet place, and many of them don't have one at home. Moreover, the library has computers and books, so that every student has the same chances.",p:["Students need quiet places.","The library is far too noisy.","The library is very expensive.","The books there are all old."],b:0,u:"The speaker says: students need a quiet place."},
 {j:"pilih",t:"Listen. What does the library provide? (same speech)",dengar:"The school library should be open longer. In order to prepare for exams, students need a quiet place, and many of them don't have one at home. Moreover, the library has computers and books, so that every student has the same chances.",p:["Computers and books","Cooking classes for pupils","Free swimming lessons","Weekly music concerts"],b:0,u:"The speaker says: the library has computers and books."},
 {j:"isi",t:"Listen and type the missing word: Some students enjoy sport, ____ others prefer music.",dengar:"Some students enjoy sport, whereas others prefer music.",b:["whereas","while"],u:"The speaker says whereas. It shows a contrast."}],
 bos:{j:"pilih",t:"Listen to the speech. What is the main message?",dengar:"In conclusion, social media has both advantages and disadvantages. It helps people to connect, but it can also waste time. Therefore, we should use it wisely, so that it serves us, and not the other way round.",p:["Use social media wisely.","Ban social media.","Social media has no advantages.","Everyone should use it all day."],b:0,u:"The speaker concludes: we should use it wisely."}},

{n:5, tempat:"Essay Hall", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"esei",
 kadNama:"essay structure", kadEm:"\u{1F4DD}", kadFakta:"A for-and-against essay has: 1. introduction (topic), 2. paragraph on advantages, 3. paragraph on disadvantages, 4. conclusion with your opinion.",
 bosKadNama:"topic sentence", bosKadEm:"\u{1F3AF}", bosKadFakta:"A topic sentence introduces the main idea of a paragraph. The rest of the paragraph supports it with reasons and examples.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["It discusses online learning.","It describes a long holiday abroad.","It explains how to follow a recipe.","It reports on a football match."],b:0,u:"The essay presents advantages and disadvantages of online learning."},
 {j:"pilih",t:"According to Text 1, what is one advantage of online learning? (Text 1)",p:["Learners can set their own pace.","Students never need any teacher.","Lessons are always shorter than before.","It is always free for everyone."],b:0,u:"The text says: students can learn at their own pace."},
 {j:"pilih",t:"What disadvantage does the writer mention? (Text 1)",p:["Students may feel isolated.","Students become too tall.","Computers are cheap.","Teachers are absent."],b:0,u:"The text says: students may feel isolated."},
 {j:"pilih",t:"The word isolated in Text 1 means",p:["alone and cut off","very busy at work","extremely happy about it","well prepared for exams"],b:0,u:"Isolated means alone and separated from others."},
 {j:"pilih",t:"Which linking word shows a contrast in the second paragraph? (Text 1)",p:["However","Moreover","Firstly","Therefore"],b:0,u:"However introduces a contrast."},
 {j:"banyak",t:"Based on Text 1, choose TWO benefits of online learning.",p:["flexibility","access to many resources","guaranteed good grades","no homework"],b:[0,1],u:"The text mentions flexibility and access to many resources."},
 {j:"pilih",t:"What is the writer's overall opinion? (Text 1)",p:["Online learning works with classroom lessons.","Online learning is totally useless.","Classrooms should all be closed down.","Teachers are completely unnecessary."],b:0,u:"The conclusion says that a mix of both is best."},
 {j:"pilih",t:"Which phrase in Text 1 signals the conclusion?",p:["In conclusion","On the other hand","For example","Moreover"],b:0,u:"In conclusion introduces the final paragraph."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Benefits of Online Learning","A Day in a Large Zoo","How to Make Hot Milk Tea","The Rules of Chess Games"],b:0,u:"The essay discusses the benefits and drawbacks of online learning."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3, 4.2.1 · Grammar · write a formal for-and-against paragraph", lampiran:null,
 kadNama:"formal paragraph", kadEm:"\u{1F4DD}", kadFakta:"A formal paragraph: topic sentence, reason, linking word, another reason, conclusion. Use whereas, nevertheless, moreover and in order to correctly, and avoid contractions.",
 bosKadNama:"proofread for register", bosKadEm:"\u{2705}", bosKadFakta:"Replace informal words: kids → children, a lot of → many, get → obtain, big → significant. Remove exclamation marks and short forms (don't, can't).",
 soalan:[
 {j:"isi",t:"Type the missing word: Many students enjoy online lessons; ____, some find them lonely.",b:["however","nevertheless"],u:"However (or nevertheless) introduces a contrast."},
 {j:"isi",t:"Type the missing word: We study hard in ____ to pass the exam.",b:["order"],u:"In order to + base verb expresses purpose."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["Whereas","some","enjoy","reading,","others","prefer","films."],b:[0,1,2,3,4,5,6],u:"Whereas + clause, + main clause."},
 {j:"pilih",t:"Which sentence is the most formal?",p:["Many believe homework helps learning.","Everybody knows that homework is great!","Homework's the best thing ever, mate!","I reckon homework helps a lot."],b:0,u:"Formal writing avoids slang, contractions and exclamations."},
 {j:"pilih",t:"Which sentence uses a linking word correctly?",p:["Phones can be distracting; nevertheless, they are also useful.","Phones can be distracting, nevertheless they are also useful.","Phones can be distracting nevertheless, they are also useful.","Phones can be distracting; nevertheless they are, also useful."],b:0,u:"Nevertheless follows a semicolon and is followed by a comma."},
 {j:"pilih",t:"Which sentence expresses purpose correctly?",p:["Pupils wear uniforms so that they look neat.","Pupils wear uniforms so for look neat.","Pupils wear uniforms for to look neat.","Pupils wear uniforms in case look neat."],b:0,u:"So that + clause expresses purpose."},
 {j:"susun",t:"Put the sentences in order to make a formal paragraph.",p:["Online learning has become increasingly popular.","Firstly, it allows students to learn at their own pace.","However, it may cause feelings of isolation.","In conclusion, a combination of both methods is ideal."],b:[0,1,2,3],u:"Introduction, advantage, disadvantage and conclusion."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["Moreover, students should be given more choices.","Moreover students should be given more choices.","moreover, students should be given more choices.","Moreover; students should be given more choices."],b:0,u:"A linking word at the start of a sentence is followed by a comma."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: Social media allows people to keep in touch. ____",p:["However, excessive use may harm sleep, so users should set limits in order to stay healthy.","But using it too much is bad for your sleep, so you gotta limit it, okay!","However excessive use may harm sleep therefore users limit set in order protect health.","Although, use too much harm sleep, users so should limit it in order for health."],b:0,u:"Formal tone with correct linking words and the structure in order to + base verb."}}
];

module.exports = {
  id:"e5b6", tingkatan:5, kod:"Unit 6 Making Your Case",
  tajuk:"Make Your Case", subtajuk:"English Form 5 · Unit 6 Making Your Case",
  spi:SPI_B1_T4,
  ulasan:ulasanBab("debate, formal writing and linking words", "Making Your Case"),
  lampiran:{
   tinjauanpendapat:jadual(1, "Results of a poll about homework", "Poll: 'Homework should be reduced.' · 500 students",
     ["Opinion","Percentage of students"],
     [["Strongly agree","10%"],["Agree","56%"],["No opinion","8%"],["Disagree","20%"],["Strongly disagree","6%"]],
     "500 students answered. Each percentage shows how many of the 500 chose that opinion."),
   esei:teks(1, "A for-and-against essay", "Online Learning: Benefits and Drawbacks",
     ["Online learning has become increasingly popular in recent years. Firstly, it is flexible, because students can learn at their own pace and access many resources. Moreover, lessons can be recorded and watched again.",
      "However, there are drawbacks. Students may feel isolated, whereas classroom learning allows them to make friends. In addition, some students lack a quiet place to study. Nevertheless, these problems can be reduced with good planning.",
      "In conclusion, online learning is useful, and it works best when it is combined with classroom lessons."],
     "Practice text: invented essay")
  },
  aras:ARAS
};
