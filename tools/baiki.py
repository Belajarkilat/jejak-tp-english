"""Pembantu audit: baiki(fail, [(lama, baru), ...]). Setiap 'lama' mesti wujud tepat sekali."""
import sys
def baiki(fail, pasangan):
    s = open(fail, encoding='utf-8').read()
    for a, b in pasangan:
        n = s.count(a)
        if n != 1:
            print(f'  GAGAL ({n}x): {fail}: {a[:80]}'); continue
        s = s.replace(a, b)
    open(fail, 'w', encoding='utf-8', newline='\n').write(s)
