r"""Tampalan enjin (14 Okt 2026): jenis soalan 'isi' (taip jawapan) dan medan 'dengar'
(listening melalui suara pelayar) untuk Jejak TP English. Jalankan sekali: python tools/tampal-enjin-english.py"""
p = 'index.html'
s = open(p, encoding='utf-8').read()

def g(a, b, n=1):
    global s
    c = s.count(a)
    assert c == n, (a[:70], c)
    s = s.replace(a, b)

g(r'''  if(q.j==="nombor")return S.pilihan!==null&&S.pilihan!=="";''',
  r'''  if(q.j==="nombor"||q.j==="isi")return S.pilihan!==null&&String(S.pilihan).trim()!=="";''')
g(r'''    else if(q.j==="nombor")b2=Math.abs(nomJawapan(S.pilihan)-q.b)<=(q.tol||0.05);''',
  r'''    else if(q.j==="nombor")b2=Math.abs(nomJawapan(S.pilihan)-q.b)<=(q.tol||0.05);
    else if(q.j==="isi")b2=isiBetul(q,S.pilihan);''')
g(r'''    else if(q.j==="nombor")betul=Math.abs(nomJawapan(S.pilihan)-q.b)<=(q.tol||0.05);''',
  r'''    else if(q.j==="nombor")betul=Math.abs(nomJawapan(S.pilihan)-q.b)<=(q.tol||0.05);
    else if(q.j==="isi")betul=isiBetul(q,S.pilihan);''')
g(r'''function adaJawapan(q){''', r'''/* Jawapan bertaip (English): huruf besar/kecil, ruang berlebihan, tanda petikan
   melengkung dan noktah di hujung tidak dikira. Ejaan dikira, jadi kotak input
   mematikan autocorrect dan semakan ejaan pelayar. q.b = senarai jawapan diterima. */
function isiNorm(v){
  return String(v==null?"":v).toLowerCase().replace(/[‘’ʼ`]/g,"'").replace(/[“”]/g,'"')
    .replace(/\s+/g," ").replace(/\s+([,.!?;:])/g,"$1").trim().replace(/[.!?]+$/,"").trim();
}
function isiBetul(q,v){
  var t=isiNorm(v); return !!t && (q.b||[]).some(function(x){ return isiNorm(x)===t; });
}
/* Soalan dengar (listening): q.dengar dibaca oleh suara pelayar (en-GB jika ada).
   Skrip disorok sehingga jawapan disemak, kecuali peranti tiada suara langsung. */
var SUARA=null;
function pilihSuara(){
  try{
    var v=window.speechSynthesis?speechSynthesis.getVoices():[];
    SUARA=v.filter(function(x){return /^en-GB/i.test(x.lang);})[0]||v.filter(function(x){return /^en/i.test(x.lang);})[0]||null;
  }catch(e){ SUARA=null; }
}
if(window.speechSynthesis){ pilihSuara(); try{ speechSynthesis.onvoiceschanged=pilihSuara; }catch(e){} }
function bolehDengar(){ return !!(window.speechSynthesis&&window.SpeechSynthesisUtterance); }
function sebut(teks,laju){
  if(!bolehDengar()) return;
  try{
    speechSynthesis.cancel();
    var u=new SpeechSynthesisUtterance(String(teks).replace(/<[^>]*>/g," "));
    u.lang=SUARA?SUARA.lang:"en-GB"; if(SUARA) u.voice=SUARA; u.rate=laju||0.95;
    speechSynthesis.speak(u);
  }catch(e){}
}
function adaJawapan(q){''')
g(r'''  var n=bilPerkataan(q.t)+bilPerkataan(q.arahan);''',
  r'''  var n=bilPerkataan(q.t)+bilPerkataan(q.arahan)+bilPerkataan(q.dengar);''')
g(r'''  bd.appendChild(el("p","qtext",q.t));
  if(q.arahan) bd.appendChild(el("p","qnote",q.arahan));''', r'''  bd.appendChild(el("p","qtext",q.t));
  if(q.arahan) bd.appendChild(el("p","qnote",q.arahan));
  if(q.dengar){
    var dg=el("div","dengar");
    if(bolehDengar()){
      var b1=el("button","btn dengar-btn");b1.type="button";b1.setAttribute("data-f","dengar");
      b1.innerHTML='<span aria-hidden="true">\u{1F50A}</span> Dengar';
      b1.onclick=function(){ sebut(q.dengar,0.95); };
      var b2=el("button","btn ghost sm");b2.type="button";
      b2.innerHTML='<span aria-hidden="true">\u{1F422}</span> Perlahan';
      b2.onclick=function(){ sebut(q.dengar,0.7); };
      dg.appendChild(b1); dg.appendChild(b2);
      if(S.disemak) dg.appendChild(el("p","qnote dengar-skrip","<b>Skrip:</b> "+esc(q.dengar)));
    } else {
      dg.appendChild(el("p","qnote","Peranti ini tiada suara. Baca skrip ini:"));
      dg.appendChild(el("p","dengar-skrip",esc(q.dengar)));
    }
    bd.appendChild(dg);
  }''')
g(r'''  else if(q.j==="buka"){
    var ta=el("textarea","free");''', r'''  else if(q.j==="isi"){
    var rowI=el("div","numrow isirow");
    var inI=el("input");inI.type="text";inI.id="isiJwp";inI.placeholder="Taip jawapan";
    ["autocomplete","autocorrect","autocapitalize","spellcheck"].forEach(function(k){ inI.setAttribute(k,k==="spellcheck"?"false":"off"); });
    inI.setAttribute("data-f","isi"); inI.setAttribute("aria-label","Jawapan awak");
    inI.value=(S.pilihan===null)?"":S.pilihan;
    inI.disabled=S.disemak;
    inI.oninput=function(){S.pilihan=inI.value;var b=$("btnSemak");if(b)b.disabled=inI.value.trim()==="";};
    inI.onkeydown=function(e){ if(e.key==="Enter"&&inI.value.trim()){ e.preventDefault(); var b=$("btnSemak"); if(b&&!b.disabled) b.click(); } };
    rowI.appendChild(inI);
    body.appendChild(rowI);
    if(S.disemak&&!(S.retry?S.retryOk:q._betul)) body.appendChild(el("p","qnote isi-betul","Jawapan betul: <b>"+esc(q.b[0])+"</b>"));
  }
  else if(q.j==="buka"){
    var ta=el("textarea","free");''')
g(r'''.numrow input{font-family:"DM Mono",monospace;font-size:22px;width:130px;''',
  r'''.isirow input{font-family:inherit !important;font-size:19px !important;width:100% !important;max-width:420px}
.dengar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:12px 0 4px}
.dengar-btn{font-size:17px}
.dengar-skrip{flex-basis:100%;font-style:italic}
.numrow input{font-family:"DM Mono",monospace;font-size:22px;width:130px;''')
open(p, 'w', encoding='utf-8', newline='\n').write(s)
print('enjin English ditampal')
