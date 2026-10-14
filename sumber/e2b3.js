/* Sumber kandungan — English KSSM Form 2, Unit 8 Good luck, bad luck
   DSKP Form 2 Textbook scope and sequence: Tema People and Culture, Unit 8.
   Tatabahasa: present perfect + for and since. Kosa kata: sport and competitions, verbs of movement (2).
   Semua nama dan teks rangsangan ialah rekaan untuk latihan. */
const { sembang, poster, teks, SPI_A2, ulasanBab } = require("./_k");

const ARAS = [

{n:1, tempat:"Stadium Gate", sk:"Vocabulary · sport and competitions, verbs of movement", lampiran:null,
 kadNama:"supporter", kadEm:"\u{1F4E3}", kadFakta:"A supporter is a person who likes a team and wants it to win. A fan is similar. The team's supporters cheer in the stadium.",
 bosKadNama:"opponent", bosKadEm:"\u{1F94A}", bosKadFakta:"Your opponent is the person or team you play against. The winner beats the loser. A tournament is a big competition with many matches.",
 soalan:[
 {j:"pilih",gbr:"\u{1F3C6}",t:"The person or team that wins a competition is the",p:["champion","loser","opponent","supporter"],b:0,u:"The champion is the winner of a competition."},
 {j:"pilih",gbr:"\u{26BD}\u{1F945}",t:"In football, a player scores a",p:["goal","race","stadium","tournament"],b:0,u:"We score a goal in football."},
 {j:"pilih",gbr:"\u{1F3DF}\u{FE0F}",t:"A large building where sports matches are played and people watch is a",p:["stadium","tournament","captain","coach"],b:0,u:"A stadium is a large building for sports events."},
 {j:"pilih",gbr:"\u{1F9D1}\u{200D}\u{1F3EB}\u{26BD}",t:"The person who trains a sports team is the",p:["coach","opponent","supporter","winner"],b:0,u:"A coach trains and advises a team."},
 {j:"pilih",gbr:"\u{1F4A7}",t:"I accidentally ____ my drink on the table. There was juice everywhere!",p:["spilled","scratched","touched","opened"],b:0,u:"Spill means to let a liquid fall out of its container by accident."},
 {j:"pilih",t:"If you let something go and it falls to the ground, you",p:["drop it","pull it","push it","cross it"],b:0,u:"Drop means to let something fall."},
 {j:"isi",gbr:"\u{1F3C1}",t:"Type the missing word: There were ten runners in the ____, but only one finished first.",b:["race"],u:"A race is a competition to see who is the fastest."},
 {j:"pilih",t:"Which verb is about hurting the skin lightly with something sharp?",p:["scratch","pick up","put down","meet up"],b:0,u:"Scratch means to rub or cut the skin lightly with something sharp, such as a nail."}],
 bos:{j:"banyak",t:"Choose ALL the words that are about people in sports.",p:["captain","coach","supporter","stadium","tournament"],b:[0,1,2],u:"A captain, a coach and a supporter are people. A stadium is a place and a tournament is an event."}},

{n:2, tempat:"For & Since Street", sk:"Grammar · present perfect with for and since", lampiran:null,
 kadNama:"for / since", kadEm:"\u{23F3}", kadFakta:"for + a period of time: for two years, for three weeks. since + a starting point: since 2002, since Monday, since I was 13. Both go with the present perfect.",
 bosKadNama:"how long?", bosKadEm:"\u{2753}", bosKadFakta:"How long have you been a supporter? I've been a supporter for two years. = I've been a supporter since 2024.",
 soalan:[
 {j:"pilih",t:"I've been a supporter ____ two years.",p:["for","since","from","during"],b:0,u:"Use for with a period of time: for two years."},
 {j:"pilih",t:"I've been a supporter ____ 2002.",p:["since","for","from","at"],b:0,u:"Use since with a point in time: since 2002."},
 {j:"pilih",t:"She has played tennis ____ she was seven.",p:["since","for","ago","in the"],b:0,u:"Use since + a clause that shows the starting point: since she was seven."},
 {j:"pilih",t:"They have lived here ____ three months.",p:["for","since","at","by"],b:0,u:"Three months is a period of time, so we use for."},
 {j:"pilih",t:"Which sentence means the same? 'He started playing football in 2020. It is 2025 now.'",p:["He has played football for five years.","He has played football since five years.","He plays football for five years.","He has played football five years ago."],b:0,u:"From 2020 to 2025 is five years. Present perfect + for + a period: has played for five years."},
 {j:"pilih",t:"How long ____ you known your best friend?",p:["have","did","are","do"],b:0,u:"How long + have/has + subject + past participle?"},
 {j:"isi",t:"Type for or since: My team has been in the tournament ____ Monday.",b:["since"],u:"Monday is a starting point, so we use since."},
 {j:"isi",t:"Type for or since: We have waited ____ an hour.",b:["for"],u:"An hour is a period of time, so we use for."}],
 bos:{j:"pilih",t:"Which sentence is correct?",p:["Hasan has been the captain since last year.","Hasan has been the captain for last year.","Hasan is the captain since last year.","Hasan was the captain since last year."],b:0,u:"Last year is a starting point, so use since with the present perfect."}},

{n:3, tempat:"Fan Chat", sk:"Reading 3.1.2 · specific details in a chat", lampiran:"sembangbola",
 kadNama:"semi-final", kadEm:"\u{1F3C5}", kadFakta:"A semi-final is the match before the final. The winners go to the final. The losers go home.",
 bosKadNama:"unlucky", bosKadEm:"\u{1F340}", bosKadFakta:"Unlucky = having bad luck. The opposite is lucky. Example: We were unlucky because the ball hit the post.",
 soalan:[
 {j:"pilih",t:"Look at Figure 1. Which team do Farid and Nina support?",p:["Harimau FC","Singa FC","Burung FC","Naga FC"],b:0,u:"Farid writes: Harimau FC is the best!"},
 {j:"pilih",t:"According to Figure 1, how long has Farid been a supporter?",p:["Since he was six","For six months","Since last year","For a few weeks"],b:0,u:"Farid writes: I've been a supporter since I was six."},
 {j:"pilih",t:"What was the score of the semi-final? (Figure 1)",p:["2-1","1-0","3-3","0-2"],b:0,u:"Nina writes: We won 2-1!"},
 {j:"pilih",t:"Who scored the winning goal? (Figure 1)",p:["Danish","Farid","Nina","Coach Ali"],b:0,u:"Farid writes: Danish scored the winning goal in the last minute."},
 {j:"pilih",t:"When is the final? (Figure 1)",p:["On Saturday","On Friday night","Tomorrow morning","Next month"],b:0,u:"Nina writes: The final is on Saturday."},
 {j:"banyak",t:"Based on Figure 1, choose TWO true sentences.",p:["Harimau FC won the semi-final.","Nina has bought the tickets.","The final was yesterday.","Farid supports Singa FC."],b:[0,1],u:"Nina says: We won the semi-final 2-1! She also says: I've bought the tickets."},
 {j:"pilih",t:"How does Farid feel about the match? (Figure 1)",p:["Very excited","Very bored","Very angry now","Very sleepy"],b:0,u:"Farid says: I couldn't sleep last night! I'm so excited."},
 {j:"pilih",t:"What can we infer about Harimau FC from Figure 1?",p:["They are a good team.","They never win.","They lost the semi-final.","They have no supporters."],b:0,u:"They won the semi-final in the last minute and reached the final, so they are a good team."}],
 bos:{j:"pilih",t:"What should Farid and Nina do before Saturday, according to Figure 1?",p:["Collect the tickets.","Buy some new football shoes.","Practise with the school team.","Ask the coach for a goal."],b:0,u:"Nina writes: Remember to collect the tickets from my uncle before Saturday."}},

{n:4, tempat:"Sports Radio", sk:"Listening 1.2.1 · main ideas and specific details", lampiran:null,
 kadNama:"how long?", kadEm:"\u{1F4FB}", kadFakta:"Listen for for + a period (for two years) and since + a start point (since 2020). They both answer How long?",
 bosKadNama:"commentary", bosKadEm:"\u{1F399}\u{FE0F}", bosKadFakta:"A commentary is a live description of a match. Commentators speak quickly and use verbs of movement: run, pass, kick, drop, pick up.",
 soalan:[
 {j:"pilih",t:"Listen. How long has Ben played badminton?",dengar:"I've played badminton for three years. I started when I was ten, and I now train twice a week.",p:["For three years","For ten years","For two weeks","Since last week"],b:0,u:"Ben says: I've played badminton for three years."},
 {j:"pilih",t:"Listen. How often does Ben train?",dengar:"I've played badminton for three years. I started when I was ten, and I now train twice a week.",p:["Twice a week","Every day","Once a month","Three times a year"],b:0,u:"Ben says: I now train twice a week."},
 {j:"pilih",t:"Listen. Since when has the school had a football team?",dengar:"Our school has had a football team since 1998. We've won the state tournament three times, but we haven't won the national tournament yet.",p:["Since 1998","Since 2008","For one year","For three years"],b:0,u:"The speaker says: Our school has had a football team since 1998."},
 {j:"pilih",t:"Listen. What hasn't the team won yet?",dengar:"Our school has had a football team since 1998. We've won the state tournament three times, but we haven't won the national tournament yet.",p:["The national tournament","The state tournament","The school match","The friendly match"],b:0,u:"The speaker says: we haven't won the national tournament yet."},
 {j:"pilih",t:"Listen to the commentary. What did the player do?",dengar:"And he picks up the ball, he runs down the field, he crosses the ball to Aiman and... goal! What a beautiful pass!",p:["He passed to Aiman.","He kicked the ball out of the field.","He dropped the ball on the field.","He fell down on the field."],b:0,u:"The commentator says: he crosses the ball to Aiman and... goal!"},
 {j:"pilih",t:"Listen. Why was the match stopped?",dengar:"The referee has stopped the match because it's raining heavily. Everybody is leaving the stadium, and the players have left the field.",p:["It is raining hard.","A player was badly hurt.","The ball was lost somewhere.","The coach was very late."],b:0,u:"The speaker says: because it's raining heavily."},
 {j:"pilih",t:"Listen. Who is the champion of the race?",dengar:"And the winner of the hundred-metre race is Lina! She has broken the school record. Second place goes to Mei, and third to Aina.",p:["Lina","Mei","Aina","Nora"],b:0,u:"The speaker says: the winner of the hundred-metre race is Lina."},
 {j:"isi",t:"Listen and type the missing word: I've been a supporter ____ I was six.",dengar:"I've been a supporter since I was six.",b:["since"],u:"The speaker says since. I was six is a starting point."}],
 bos:{j:"pilih",t:"Listen. What advice does the coach give?",dengar:"Listen, everyone. We've practised hard for six weeks, so don't be afraid. Pass the ball quickly, help your friends and never give up. Remember, we've worked together as a team since January.",p:["Pass quickly, never give up.","Run away from the opponent.","Play on your own for the team.","Stop practising for this match."],b:0,u:"The coach says: Pass the ball quickly, help your friends and never give up."}},

{n:5, tempat:"Story Stadium", sk:"Reading 3.1.1, 3.1.3 · main idea, inference, vocabulary in context", lampiran:"juara",
 kadNama:"determination", kadEm:"\u{1F4AA}", kadFakta:"determination = the quality of not giving up. Athletes need determination to keep training even when it is difficult.",
 bosKadNama:"injury", bosKadEm:"\u{1FA79}", bosKadFakta:"An injury is damage to the body, for example a broken leg. Many athletes have injuries, but some come back stronger.",
 soalan:[
 {j:"pilih",t:"What is the main idea of Text 1?",p:["Lina won again after an injury.","Lina has never run in a race.","Lina is a famous football coach.","Lina lost her new school bag."],b:0,u:"The text describes how Lina had an injury but came back to win."},
 {j:"pilih",t:"According to Text 1, how long has Lina been a runner?",p:["Since she was nine","For nine months","Since last year","For a few weeks"],b:0,u:"The text says: Lina has been a runner since she was nine."},
 {j:"pilih",t:"What happened to Lina last year? (Text 1)",p:["She hurt her leg.","She lost her shoes.","She changed schools.","She won a medal."],b:0,u:"The text says: Last year, she fell and hurt her leg."},
 {j:"pilih",t:"The word recovered in Text 1 means",p:["got well again","became very angry","stayed in bed all day","moved to a new house"],b:0,u:"Recovered means became well again after being ill or injured."},
 {j:"pilih",t:"Who helped Lina to practise again? (Text 1)",p:["Her coach","Her teacher","Her neighbour","Her cousin"],b:0,u:"The text says: Her coach helped her to practise again slowly."},
 {j:"banyak",t:"Based on Text 1, choose TWO things Lina has won.",p:["a school race","a state medal","a new car","a university prize"],b:[0,1],u:"The text says Lina won the school race and has won a state medal."},
 {j:"pilih",t:"What can we infer about Lina? (Text 1)",p:["She never gives up.","She is afraid of the stadium.","She dislikes running now.","She is always very lucky."],b:0,u:"She did not give up after the injury and came back to win."},
 {j:"susun",t:"Put the events in Text 1 in the correct order.",p:["Lina began running at nine.","She hurt her leg.","Her coach helped her to practise again.","She won a state medal."],b:[0,1,2,3],u:"The text follows the order: starting to run, injury, recovery with the coach, and winning the medal."}],
 bos:{j:"pilih",t:"Which of these is the BEST title for Text 1?",p:["Never Give Up, Lina!","A Day at the Beach","The Best Football Game","How to Buy Shoes"],b:0,u:"The text is about Lina not giving up after her injury."}},

{n:6, tempat:"Editor's Desk", sk:"Writing 4.1.3 · Grammar · write about experiences and how long", lampiran:null,
 kadNama:"for or since", kadEm:"\u{1F4DD}", kadFakta:"Check: is it a period (for three years) or a starting point (since 2023)? Then write: I've been a supporter for three years / since 2023.",
 bosKadNama:"story of a match", bosKadEm:"\u{1F4D6}", bosKadFakta:"To tell a story: use the present perfect for experiences up to now, and the past simple for exact times: I've played for years. Yesterday I scored a goal.",
 soalan:[
 {j:"isi",t:"Type for or since: I've known my best friend ____ five years.",b:["for"],u:"Five years is a period of time."},
 {j:"isi",t:"Type for or since: He has been ill ____ Saturday.",b:["since"],u:"Saturday is a starting point."},
 {j:"susun",t:"Put the words in order to make a correct sentence.",p:["They","have","won","the","tournament","three","times."],b:[0,1,2,3,4,5,6],u:"Subject + have + past participle + object + how many times."},
 {j:"pilih",t:"Which sentence about friendship is correct?",p:["We have been friends since primary school.","We have been friends for primary school.","We are friends since primary school.","We were friends since primary school."],b:0,u:"Primary school is a starting point, so use since with the present perfect."},
 {j:"pilih",t:"Which sentence is a good ending for a match report?",p:["In the end, our team won, and the supporters were delighted.","In the end, our team win, and the supporters is delighted.","In end, our team has win, and supporters delight.","In the end, our team winning and supporters delighted them."],b:0,u:"Use the past simple to tell what happened, with correct agreement: won, were delighted."},
 {j:"pilih",t:"Which sentence uses the present perfect correctly?",p:["I haven't seen my cousin since last year.","I haven't saw my cousin since last year.","I don't seen my cousin since last year.","I hasn't seen my cousin since last year."],b:0,u:"With I, the negative is haven't + past participle: haven't seen."},
 {j:"susun",t:"Put the sentences in order to make a short paragraph.",p:["I have played football since I was seven.","I train with my team three times a week.","Last month, we won the school tournament.","I'm so proud of my team."],b:[0,1,2,3],u:"Start with how long (present perfect), add habits, then a past event and your feeling."},
 {j:"pilih",t:"Which sentence uses punctuation correctly?",p:["Have you been a supporter for long?","have you been a supporter for long","Have you been a supporter, for long.","Have you been a supporter for long!"],b:0,u:"A question starts with a capital letter and ends with a question mark."}],
 bos:{j:"pilih",t:"Choose the best sentence to complete the paragraph: I love badminton. ____",p:["I have played it since I was eight, and I have never lost interest.","I playing it since I eight, and I never lose the interest.","I have play it for I was eight, and I has never lost interest.","I play it since eight years, and I have not never lost interest."],b:0,u:"Present perfect + since + a clause: have played since I was eight."}}
];

module.exports = {
  id:"e2b3", tingkatan:2, kod:"Unit 8 Good luck, bad luck",
  tajuk:"Champion Road", subtajuk:"English Form 2 · Unit 8 Good luck, bad luck",
  spi:SPI_A2,
  ulasan:ulasanBab("sport, competitions and the present perfect with for and since", "Good luck, bad luck"),
  lampiran:{
   sembangbola:sembang(1, "A chat between two football fans", "Harimau FC Supporters", "Nina", [
     {dari:"Farid", teks:"Harimau FC is the best! I've been a supporter since I was six."},
     {dari:"Nina", teks:"I know! We won the semi-final 2-1!"},
     {dari:"Farid", teks:"Danish scored the winning goal in the last minute. I couldn't sleep last night! I'm so excited."},
     {dari:"Nina", teks:"The final is on Saturday. I've bought the tickets. Remember to collect them from my uncle before Saturday."}]),
   juara:teks(1, "A newspaper article about a young runner", "Lina Runs Again",
     ["Lina has been a runner since she was nine. She won her first school race at eleven, and everybody said she was very lucky.",
      "Last year, she fell and hurt her leg. She couldn't run for four months. 'I was very sad,' she said. But Lina never gave up. Her coach helped her to practise again slowly, and she recovered in the end.",
      "This year, she has won the school race again, and she has won a state medal. 'Luck is good,' Lina says, 'but hard work is better.'"],
     "Practice text: invented newspaper article")
  },
  aras:ARAS
};
