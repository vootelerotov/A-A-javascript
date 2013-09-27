// Modifitseeritud H. Nestra koodi

// HTML margendid

function html(margend, tekst) {
    "use strict";
    return '<' + margend + '>' + tekst + '</' + margend + '>';
}

function em(tekst) {
    "use strict";
    return html('em', tekst);
}

function par(tekst) {
    "use strict";
    return html('p', tekst) + '\n';
}

function sup(tekst) {
    "use strict";
    return html('sup', tekst);
}

function sub(tekst) {
    "use strict";
    return html('sub', tekst);
}

function pre(tekst) {
    "use strict";
    return html('pre', tekst);
}

function math(tekst) {
    "use strict";
    return em(tekst);
}

// Sumbolid

function teeta() {
    "use strict";
    return "&Theta;";
}

// Pythoni koodinaidised

function tsukkel1() {
    "use strict";
    var kood = "def tsukkel(n):\n    i = 1\n    while i < n:\n        i = i + 1";
    return pre(kood);
}

function tsukkel2() {
    "use strict";
    var kood = "def tsukkel(n):\n    i = 0\n    while i < n:\n        print(i + 1)\n        print(i + 2)\n        i = i + 1";
    return pre(kood);
}

function tsukkel6() {
    "use strict";
    var kood = "def tsukkel(n):\n    i = 0\n    while i < n:\n        print(i)\n        print(i + 0.5)\n        i = i + 3";
    return pre(kood);
}

function tsukkel7() {
    "use strict";
    var kood = "def tsukkel(n):\n    i = 0\n    while i < n:\n        j = 0\n        while j < n:\n            print(i + j)\n            j = j + 1\n        i = i + 1";
    return pre(kood);
}

function tsukkel8() {
    "use strict";
    var kood = "def tsukkel(n):\n    i = 0\n    while i < n:\n        j = i\n        while j < n:\n            print(i + j)\n            j = j + 1\n        i = i + 1";
    return pre(kood);
}

function fibo_rek() {
    "use strict";
    var kood = "def fibo_rek(n):\n    if n < 3:\n        return 1\n    return fibo_rek(n-1) + fibo_rek(n-2)";
    return pre(kood);
}

function fibo_iter() {
    "use strict";
    var kood = "def fibo_iter(n):\n    if n < 3:\n        return 1\n    f1 = 1; f2 = 1\n    for i in range(3, n+1):\n        f3 = f1 + f2\n        f1 = f2; f2 = f3\n    return f3";
    return pre(kood);
}

function fibo_arv() {
    "use strict";
    var kood = "from math import sqrt\n\ndef fibo_arv(n): # Binet' valem\n    phi1 = (1 + sqrt(5)) / 2\n    phi2 = (1 - sqrt(5)) / 2\n    return round((phi1 ** n - phi2 ** n) / sqrt(5))";
    return pre(kood);
}

function otsi_lin_rek_jarjest() {
    "use strict";
    var kood = "def otsi_lin_rek(x, jarjend):\n    if len(jarjend) == 0:\n        return False\n      if x == jarjend[0]:\n        return True\n    elif x < jarjend[0]:\n        return False\n    return otsi_lin_rek(x, jarjend[1:])";
    return pre(kood);
}

function otsi_lin_rek_koik() {
    "use strict";
    var kood = "def otsi_lin_rek(x, jarjend):\n    if len(jarjend) == 0:\n        return False\n      if x == jarjend[0]:\n        return True\n    return otsi_lin_rek(x, jarjend[1:])";
    return pre(kood);
}

function otsi_lin_iter_jarjest() {
    "use strict";
    var kood = "def otsi_lin_iter(x, jarjend):\n    for elem in jarjend:\n        if x == elem:\n            return True\n        elif x < elem:\n            return False\n    return False";
    return pre(kood);
}

function otsi_lin_iter_koik() {
    "use strict";
    var kood = "def otsi_lin_iter(x, jarjend):\n    for elem in jarjend:\n        if x == elem:\n            return True\n    return False";
    return pre(kood);
}

function otsi_kahend_iter() {
    "use strict";
    var kood = "def otsi_kahend_iter(x, jarjend):\n    alumine = 0\n    ylemine = len(jarjend) - 1\n    while alumine <= ylemine:\n        keskmine = (alumine + ylemine) // 2\n        if x == jarjend[keskmine]:\n            return True\n        elif x < jarjend[keskmine]:\n            ylemine = keskmine - 1\n        else:\n            alumine = keskmine + 1\n    return False";
    return pre(kood);
}

function otsi_kahend_rek() {
    "use strict";
    var kood = "def otsi_kahend_rek(x, jarjend):\n    if len(jarjend) == 0:\n        return False\n    keskmine = len(jarjend) // 2\n    if x == jarjend[keskmine]:\n        return True\n    elif x < jarjend[keskmine]:\n        return otsi_kahend_rek(x, jarjend[:keskmine])\n    else:\n       return otsi_kahend_rek(x, jarjend[keskmine+1:])";
    return pre(kood);
}

function algarv_koik() {
    "use strict";
    var kood = "def algarv_koik(n):\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True";
    return pre(kood);
}

function algarv_ruutjuur() {
    "use strict";
    var kood = "from math import sqrt\n\ndef algarv_ruutjuur(n):\n    for i in range(2, round(sqrt(n)):\n        if n % i == 0:\n            return False\n    return True";
    return pre(kood);
}

function astenda_lihtne_rek() {
    "use strict";
    var kood = "def astenda_lihtne_rek(a, n):\n    if n == 0:\n        return 1\n    return a * astenda_lihtne_rek(a, n-1)";
    return pre(kood);
}

function astenda_lihtne_iter() {
    "use strict";
    var kood = "def astenda_lihtne_iter(a, n):\n    tulemus = 1\n    for i in range(n):\n        tulemus = tulemus * a\n    return tulemus";
    return pre(kood);
}

function astenda_kahend_rek1() {
    "use strict";
    var kood = "def astenda_kahend_rek1(a, n):\n    if n == 0:\n        return 1\n    if n % 2 == 0:\n        return astenda_kahend_rek1(a, n // 2) * astenda_kahend_rek1(a, n // 2)\n    return astenda_kahend_rek1(a, n // 2) * astenda_kahend_rek1(a, n // 2) * a";
    return pre(kood);
}

function astenda_kahend_rek2() {
    "use strict";
    var kood = "def astenda_kahend_rek2(a, n):\n    if n == 0:\n        return 1\n    pool_aste = astenda_kahend_rek2(a, n // 2)\n    if n % 2 == 0:\n        return pool_aste * pool_aste\n    return pool_aste * pool_aste * a";
    return pre(kood);
}

function kiirsort() {
    // Ülesviimistega variant, mis on (ilmselt) lihtsamini loetav
    "use strict";
    var kood = "def kiirsort(jarj):\n    if len(jarj) <= 1:\n        return jarj\n    vordne = [jarj[0]]\n    vaiksem = []\n    suurem = []\n    for elem in jarj[1:]:\n        if elem < vordne[0]:\n            vaiksem.append(elem)\n        elif elem == vordne[0]:\n            vordne.append(elem)\n        else:\n            suurem.append(elem)\n    return kiirsort(vaiksem) + vordne + kiirsort(suurem)";
    return pre(kood);
}

function poimesort() {
    "use strict";
    var kood = "def poimi(esimene, teine):\n    uus = []\n    i = 0\n    j = 0\n    while len(uus) < len(esimene)+len(teine): #ebaefektiivne\n        if j >= len(teine) or i < len(esimene) and esimene[i] <= teine[j]:\n            uus.append(esimene[i])\n            i += 1\n        else:\n            uus.append(teine[j])\n            j += 1\n    return uus\n\ndef poimesort(jarj):\n    if len(jarj) <= 1:\n        return jarj\n    keskmine = len(jarj) // 2\n    esimene = poimesort(jarj[:keskmine])\n    teine = poimesort(jarj[keskmine:])\n    uus = poimi(esimene, teine)\n    return uus";
    return pre(kood);
}

function hanoi() {
    "use strict";
    var kood = "def hanoi(n):\n    def tosta(n, kust, kuhu, ajutine):\n        if n == 1:\n            print(\"Tõsta ketas tornist\", kust, \"torni\", kuhu + \".\")\n        else:\n            tosta(n-1, kust, ajutine, kuhu)\n            tosta(1, kust, kuhu, ajutine)\n            tosta(n-1, ajutine, kuhu, kust)\n    tosta(n, \"A\", \"B\", \"C\")";
    return pre(kood);
}

function perm() {
    "use strict";
    var kood = "def perm_koik(sone):\n    def perm(algus,veel):\n        if len(veel) == 0:\n            print(algus)\n        else:\n            for i in range(0, len(veel)):\n                perm(algus+veel[i], veel[:i]+veel[i+1:])\n    perm(\"\", sone)";
    return pre(kood);
}

function samm3() {
    // Mitu võimalust on trepist üles minekuks (n>=4), kui korraga võib teha 1, 2 või 3 sammu
    "use strict";
    var kood = "def samm(n):\n    if n == 1:\n        return 1\n    if n == 2:\n        return 2\n    if n == 3:\n        return 4\n    return samm(n-1) + samm(n-2) + samm(n-3)";
    return pre(kood);
}


function bit() {
    "use strict";
    var kood = "def bit(n, k, yhtesid=0, tee=\"\"):\n    # n - vektori pikkus\n    # k - lubatud '1'-de arv\n    if yhtesid == k: # meil on t&auml;pselt k '1'-e\n        lisaks = (n-len(tee)) * '0'\n        print(tee + lisaks)\n        return\n    if len(tee) == n:\n        return\n    bit(n, k, yhtesid, tee+'0') # juhtumid, kus järgmisena '0'\n    bit(n, k, yhtesid+1, tee+'1') # juhtumid, kus järgmisena '1'";
    return pre(kood);
}

function bit_lootusetu() {
    "use strict";
    var kood = "def bit(n, k, yhtesid=0, tee=\"\"):\n    # n - vektori pikkus\n    # k - lubatud '1'-de arv\n    if len(tee) == n:\n        if yhtesid == k:\n            print(tee)\n        return\n    bit(n, k, yhtesid, tee+'0') # juhtumid, kus järgmisena '0'\n    bit(n, k, yhtesid+1, tee+'1') # juhtumid, kus järgmisena '1'";
    return pre(kood);
}

function seljakott() {
    "use strict";
    var kood = "def maht(esemed):\n    summa = 0\n    for ese in esemed:\n        summa += ese[1]\n    return summa\n# esemed on järjestatud järjend esemete paaridega (nimi, kaal)\ndef seljakott(esemed, kandevoime):\n    if len(esemed) == 0 or kandevoime <= 0:\n        return []\n    else:\n        esimene = esemed[0]\n        saba = esemed[1:]\n        if esimene[1] > kandevoime: \n            return []\n        else:\n            koos_esimesega = [esimene] + seljakott(saba, kandevoime - esimene[1])\n            ilma_esimeseta = seljakott(saba, kandevoime)\n            if maht(koos_esimesega) >= maht(ilma_esimeseta):\n                return koos_esimesega\n            else:\n                return ilma_esimeseta";
    return pre(kood);
}

function tag1() {
    "use strict";
    var kood = "def tag(sone):\n    if len(sone) == 0:\n        return\n    print(sone[0]),\n    tag(sone[1:])";
    return pre(kood);
}

function tag2() {
    "use strict";
    var kood = "def tag(sone):\n    if len(sone) == 0:\n        return\n    tag(sone[1:])\n    print(sone[0]),";
    return pre(kood);
}

function tag3() {
    "use strict";
    var kood = "def tag(sone):\n    if len(sone) == 0:\n        return\n    print(sone[0]),\n    tag(sone[1:])\n    print(sone[0]),";
    return pre(kood);
}

function tag4() {
    "use strict";
    var kood = "def tag_a(sone):\n    if len(sone) == 0:\n        return\n    print(sone[0]),\n    tag_b(sone[1:])\n\ndef tag_b(sone):\n    if len(sone) == 0:\n        return\n    tag_a(sone[1:])\n    print(sone[0]),";
    return pre(kood);
}

function perm1() {
    "use strict";
    var kood = "def perm(sone, olemas=\"\"):\n    if len(sone) == 0:\n       print(olemas)\n    for i in range(len(sone)):\n        perm(sone[:i]+sone[i+1:], olemas+sone[i])";
    return pre(kood);
}

function perm2() {
    "use strict";
    var kood = "def perm(sone, olemas=\"\"):\n    if len(sone) == 0:\n        print(olemas)\n    for i in range(len(sone)):\n        perm(sone[:i]+sone[i+1:], sone[i]+olemas)";
    return pre(kood);
}

function perm3() {
    "use strict";       
    var kood = "def perm(sone, olemas=\"\"):\n    if len(sone) == 0:\n       print(olemas)\n    for i in range(len(sone)):\n        perm(sone[i+1:]+sone[:i], olemas+sone[i])";
    return pre(kood);
}

function perm4() {
    "use strict";
    var kood = "def perm(sone, olemas=\"\"):\n    if len(sone) == 0:\n        print(olemas)\n    for i in range(len(sone)):\n        perm(sone[i+1:]+sone[:i], sone[i]+olemas)";
    return pre(kood);
}
// Tekstioperatsioonid

function oigetpidi(sone) {
    "use strict";
    var vahe, uus, i;
    vahe = " ";
    uus = "";
    for (i = 0; i < sone.length; i += 1) {
        uus = uus + sone.charAt(i) + vahe;
    }
    return uus;
}

function tagurpidi(sone, vahe) {
    "use strict";
    var uus, i;
    if (typeof vahe === 'undefined') { vahe = " "; }
    uus = "";
    for (i = sone.length - 1; i >= 0; i -= 1) {
        uus = uus + sone.charAt(i) + vahe;
    }
    return uus;
}

function esimesed_tahed(sone, n) {
    "use strict";
    var vahe, uus, i;
    if (typeof n === 'undefined') { n = 1; }
    vahe = " ";
    uus = "";
    for (i = 0; i < n; i += 1) {
        uus = uus + sone.charAt(i) + vahe;
    }
    return uus;
}

function viimased_tahed(sone, n) {
    "use strict";
    var vahe, uus, i;
    if (typeof(n) === 'undefined') { n = 1; }
    vahe = " ";
    uus = "";
    for (i = 0; i < n; i += 1) {
        uus = uus + sone.charAt(sone.length - 1 - i) + vahe;
    }
    return uus;
}

function topelt_tahed(sone) {
    "use strict";
    var vahe, uus, i;
    vahe = " ";
    uus = "";
    for (i = 0; i < sone.length; i += 1) {
        uus = uus + sone.charAt(i) + vahe + sone.charAt(i) + vahe;
    }
    return uus;
}

function yle_ni(sone, n) {
    "use strict";
    var vahe, uus, i;
    vahe = " ";
    uus = "";
    if (typeof n === 'undefined') { n = 2; }
    for (i = 0; i < sone.length; i += n) {
        uus = uus + sone.charAt(i) + vahe;
    }
    return uus;
}

//// Ulesanded

// 1 - Keerukus

function elem_sammud(ulObj) {
    "use strict";
    var juhis = par("Mitu " + ulObj.tegevus + " antud funktsiooni t&auml;itmisel etteantud " + math("n") + " korral?") + par("Funktsioon:<br />" + ulObj.funktsioon);
    return juhis;
}

function algo_tookiirus(ulObj) {
    "use strict";
    var eeldused, juhis;
    eeldused = ulObj.kasEeldused ? " Eeldada, et " + ulObj.eeldused + "." : "";
    juhis = par("Mille j&auml;rgi tuleks hinnata t&ouml;&ouml;kiirust algoritmil, mis kirjeldab " + ulObj.tegevus + "?" + eeldused);
    return juhis;
}


function tookiirus(ulObj) {
    "use strict";
    var juhis = "Algoritmi t&ouml;&ouml;kiiruse s&otilde;ltuvust sisendi suurusest v&auml;ljendab funktsioon T(n) = " + ulObj.tn + ". Millistesse keerukusklassidesse see kuulub? Valida k&otilde;ik sobivad vastused.";
    return par(juhis);
}

function tookiirus_programm(ulObj) {
    "use strict";
    var eeldused, lisainfo, juhis;
    eeldused = ulObj.kasEeldused ? " Eeldada, et " + ulObj.eeldused + "." : "";
    lisainfo = par(ulObj.kasLisainfo ? ulObj.lisainfo : "");
    juhis = par("Millistesse keerukusklassidesse kuulub funktsioon " + em(ulObj.nimi) + ", mis " + ulObj.kirjeldus + "?" + eeldused + " Valida k&otilde;ik sobivad vastused.") + par("Keeles Python esitatud funktsioon: " + ulObj.programm);
    return juhis + lisainfo;
}

function tookiirus_kasitsi_teeta(ulObj) {
    "use strict";
    var juhis = "Milline on kahe " + math("n") + " numbrist koosneva arvu käsitsi " + ulObj.tegevus + " tavaalgoritmi ajaline keerukus kujul " + teeta() + "(" + math("f") + "(" + math("n") + "))?";
    return par(juhis);
}

function massiivi_labimine(ulObj) {
    "use strict";
    var juhis = "L&auml;bides massiivi A m&otilde;&otilde;tmetega n × n, t&ouml;&ouml;tleb algoritm iga elementi A[i, j] ajaga " + teeta() + "(" + ulObj.elAeg + "). Milline on kogu tabeli t&ouml;&ouml;tlemise algoritmi ajaline keerukus kujul " + ulObj.kuju + "?";
    return par(juhis);
}

function hinnangule_vastav(ulObj) {
    "use strict";
    var eeldused, juhis;
    eeldused = ulObj.kasEeldused ? " Eeldada, et " + ulObj.eeldused + "." : "";
    juhis = "Millised j&auml;rgnevatest " + ulObj.objektityyp + " on " + ulObj.tyyp + " ajalise keerukusega " + ulObj.keerukus + "?" + eeldused + " M&auml;rkida k&otilde;ik sobivad vastused.";
    return par(juhis);
}

// 2 - Rekursioon

var rekursioon_soned = ["REKURSIOON","ALGORITM","STRUKTUUR","MATEMAATIKA"];

function elem_sammud_tapsem(ulObj) {
    "use strict";
    var juhis = par("Mitu " + ulObj.tegevus + ulObj.kirjeldus + " etteantud " + math("n") + " korral?") + par("Funktsioon:<br />" + ulObj.funktsioon);
    return juhis;
}

function elem_sammud_jarjend(ulObj) {
    "use strict";
    var juhis = par("Vaatame " + ulObj.meetod + ulObj.tapsustus + ". Milline on" + ulObj.tyyp + " meetodi v&auml;ljakutsete arv j&auml;rjendi puhul, milles on " + math("n") + " elementi?");
    return juhis;
}

function kutsete_ahela_pikkus(ulObj) {
    "use strict";
    var juhis = par("Leida " + ulObj.tyyp + " v&auml;ljakutsete ahela pikkus " + ulObj.meetod + " etteantud " + math("n") + " jaoks.");
    return juhis;
}

function mis_ekraanil(ulObj) {
    "use strict";
    var juhis = par("Mis tr&uuml;kitakse ekraanile j&auml;rgneva funktsiooni v&auml;ljakutsumisel argumendiga " + ulObj.arg + "? Funktsioon:<br />" + ulObj.funktsioon);
    return juhis;
}

function rekursiooni_baas(ulObj) {
    "use strict";
    var juhis = par("Kui rekursioon toimub &uuml;le " + ulObj.mille + ", siis on tavaliselt baasjuhuks...");
    return juhis;
}
