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
        misi:"Build better sentences with who, which, that, prepositions and the passive."}
};'''
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
