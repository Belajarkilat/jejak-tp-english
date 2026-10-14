r"""Tetapkan objek DUNIA (warna, ikon hentian, misi) bab English dalam index.html.
Jalankan semula setiap kali bab baharu ditambah: python tools/dunia-english.py"""
import re

DUNIA = r'''var DUNIA={
  e1b1:{warna:"#D14D72",lembut:"#FBE3EA",gelap:"#93304F",ikon:"\u{1F3A8}",
        hentian:["\u{1F3D0}","\u{1F527}","\u{1F3AA}","\u{1F4FB}","\u{1F4DD}","\u{270F}\u{FE0F}"],
        misi:"Explore Hobby Street: learn free-time words, talk about habits and what is happening now."},
  e1b2:{warna:"#6B4BB0",lembut:"#EBE5F8",gelap:"#4A337A",ikon:"\u{1F4DA}",
        hentian:["\u{1F4D6}","\u{23EA}","\u{1F3AD}","\u{1F3A7}","\u{1F50D}","\u{270F}\u{FE0F}"],
        misi:"Become a story hunter: meet famous people from the past and talk about books and films."},
  e1b3:{warna:"#1B6E9C",lembut:"#DCEEF8",gelap:"#124B6B",ikon:"\u{26C8}\u{FE0F}",
        hentian:["\u{1F326}\u{FE0F}","\u{1F32C}\u{FE0F}","\u{1F4F0}","\u{1F4FB}","\u{1F30A}","\u{270F}\u{FE0F}"],
        misi:"Chase the storm: describe wild weather and tell what was happening when it hit."},
  e1b4:{warna:"#0F7B5F",lembut:"#D8F2EA",gelap:"#0A5442",ikon:"\u{1F30D}",
        hentian:["\u{1F418}","\u{1F3D4}\u{FE0F}","\u{1F5FA}\u{FE0F}","\u{1F3A7}","\u{1F30B}","\u{270F}\u{FE0F}"],
        misi:"Travel across Planet Earth: compare amazing places, animals and natural disasters."},
  e1b5:{warna:"#B07A10",lembut:"#FBF0D6",gelap:"#7A540A",ikon:"\u{1F9EA}",
        hentian:["\u{1F52C}","\u{1F9EE}","\u{1F4CB}","\u{1F3A7}","\u{1F680}","\u{270F}\u{FE0F}"],
        misi:"Step into the science lab: predict the future and say what will happen if..."},
  e1b6:{warna:"#B3261E",lembut:"#FBE2E0",gelap:"#7D1A15",ikon:"\u{1F6A6}",
        hentian:["\u{1F4CC}","\u{2696}\u{FE0F}","\u{1F4E2}","\u{1F3A7}","\u{1F4C5}","\u{270F}\u{FE0F}"],
        misi:"Rules, advice and plans: learn when to say must, should, might and going to."},
  e1b7:{warna:"#1F5FBF",lembut:"#DFE8FA",gelap:"#154285",ikon:"\u{1F9F1}",
        hentian:["\u{1F4CD}","\u{1F517}","\u{1F3ED}","\u{1F3A7}","\u{1F4DC}","\u{270F}\u{FE0F}"],
        misi:"Build better sentences with who, which, that, prepositions and the passive."},
  e2b1:{warna:"#0F7B5F",lembut:"#D8F2EA",gelap:"#0A5442",ikon:"\u{1F4B0}",
        hentian:["\u{1F9F9}","\u{1F52E}","\u{1F697}","\u{1F4FB}","\u{1F4B5}","\u{270F}\u{FE0F}"],
        misi:"Become a Money Master: earn, save and plan what you are going to buy."},
  e2b2:{warna:"#1B6E9C",lembut:"#DCEEF8",gelap:"#124B6B",ikon:"\u{1F6EB}",
        hentian:["\u{1F68B}","\u{1F9F3}","\u{26F4}\u{FE0F}","\u{1F3A7}","\u{1F4D3}","\u{270F}\u{FE0F}"],
        misi:"Take a journey around the world and tell what you have seen and done."},
  e2b3:{warna:"#B3261E",lembut:"#FBE2E0",gelap:"#7D1A15",ikon:"\u{1F3C6}",
        hentian:["\u{26BD}","\u{23F3}","\u{1F4AC}","\u{1F399}\u{FE0F}","\u{1F3C3}","\u{270F}\u{FE0F}"],
        misi:"Follow the road to the final: how long have you been a fan, and who has won?"},
  e2b4:{warna:"#D14D72",lembut:"#FBE3EA",gelap:"#93304F",ikon:"\u{1FA7A}",
        hentian:["\u{1F915}","\u{2696}\u{FE0F}","\u{1F3E5}","\u{1F442}","\u{1F4DA}","\u{270F}\u{FE0F}"],
        misi:"Look after yourself and your friends: health problems, advice and what you should do."},
  e2b5:{warna:"#6B4BB0",lembut:"#EBE5F8",gelap:"#4A337A",ikon:"\u{1F3AD}",
        hentian:["\u{1F971}","\u{1F465}","\u{1F4CA}","\u{1F3B6}","\u{1F3AC}","\u{270F}\u{FE0F}"],
        misi:"Describe how you feel and what you think: boring or bored, much or many, isn't it?"},
  e2b6:{warna:"#B07A10",lembut:"#FBF0D6",gelap:"#7A540A",ikon:"\u{23F3}",
        hentian:["\u{1F4CB}","\u{1F527}","\u{1F3DA}\u{FE0F}","\u{1F4FB}","\u{1F474}","\u{270F}\u{FE0F}"],
        misi:"Travel in time: rules then and now, what people had to do and what is done today."}
};'''
# --- Tingkatan 3-5 (dijana daripada jadual ringkas) ---
WARNA = [("#D14D72","#FBE3EA","#93304F"),("#6B4BB0","#EBE5F8","#4A337A"),("#1B6E9C","#DCEEF8","#124B6B"),
         ("#0F7B5F","#D8F2EA","#0A5442"),("#B07A10","#FBF0D6","#7A540A"),("#B3261E","#FBE2E0","#7D1A15"),("#1F5FBF","#DFE8FA","#154285")]
IKON = {"e3b1":r"\u{1F9ED}","e3b2":r"\u{1F331}","e3b3":r"\u{1F916}","e3b4":r"\u{1F3ED}","e3b5":r"\u{1F3EE}","e3b6":r"\u{1F957}",
        "e4b1":r"\u{1F4F7}","e4b2":r"\u{1F320}","e4b3":r"\u{1F30D}","e4b4":r"\u{1F4F0}","e4b5":r"\u{1F4F1}","e4b6":r"\u{1F91D}",
        "e5b1":r"\u{23EA}","e5b2":r"\u{1F4BC}","e5b3":r"\u{1F50D}","e5b4":r"\u{1F6D2}","e5b5":r"\u{1F3DD}\u{FE0F}","e5b6":r"\u{1F4DD}"}
HENTIAN = r'"\u{1F4DA}","\u{1F527}","\u{1F4DD}","\u{1F3A7}","\u{1F4D6}","\u{270F}\u{FE0F}"'
MISI = {
 "e3b1":"Join the expedition: say what you have just done, already done and not done yet.",
 "e3b2":"Become an Eco Warrior: report what the school has done so far and what you have been doing.",
 "e3b3":"Step into the future: plans, predictions and what might happen.",
 "e3b4":"Follow a product from raw material to the shop with the passive.",
 "e3b5":"Celebrate with friends: describe festivals with adverbs, articles and word families.",
 "e3b6":"Win the debate: give opinions, agree, disagree and say what is allowed.",
 "e4b1":"Walk down memory lane: used to, would and strong intensifiers.",
 "e4b2":"Dream big: say what you would do if... and what you wish.",
 "e4b3":"Save the planet: zero, first and second conditionals, and unless.",
 "e4b4":"Report the news: say what people said, asked, suggested and refused.",
 "e4b5":"Link causes and effects: because of, therefore, although and despite.",
 "e4b6":"Lend a helping hand: polite requests, offers and reflexive pronouns.",
 "e5b1":"Rewind the day: third conditional and regrets about the past.",
 "e5b2":"Ace the interview: report questions and answers with correct backshift.",
 "e5b3":"Solve the case: deduce what must, might or can't have happened.",
 "e5b4":"Be a smart consumer: complaints, refunds and the passive with modals.",
 "e5b5":"Discover Malaysia: describe places with relative and participle clauses.",
 "e5b6":"Make your case: formal writing, linking words and for-and-against essays."}
_tambahan = ""
for _i, _id in enumerate(MISI):
    _w = WARNA[_i % 7]
    _tambahan += f',\n  {_id}:{{warna:"{_w[0]}",lembut:"{_w[1]}",gelap:"{_w[2]}",ikon:"{IKON[_id]}",\n        hentian:[{HENTIAN}],\n        misi:"{MISI[_id]}"}}'
DUNIA = DUNIA[:-len("\n};")] + _tambahan + "\n};"

ASAS = r'var DUNIA_ASAS={warna:"#D14D72",lembut:"#FBE3EA",gelap:"#93304F",ikon:"\u{1F4AC}"'

s = open('index.html', encoding='utf-8').read()
m = re.search(r'var DUNIA=\{\n.*?\n\};', s, re.S)
assert m, 'DUNIA tidak dijumpai'
s = s[:m.start()] + DUNIA + s[m.end():]
m = re.search(r'var DUNIA_ASAS=\{warna:"[^"]*",lembut:"[^"]*",gelap:"[^"]*",ikon:"[^"]*"', s)
assert m, 'DUNIA_ASAS tidak dijumpai'
s = s[:m.start()] + ASAS + s[m.end():]
open('index.html', 'w', encoding='utf-8', newline='\n').write(s)
print('DUNIA dikemas kini')
