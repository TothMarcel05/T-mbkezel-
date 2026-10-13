const szamok = [4, 9, 16, 7, 12, 3];
const nevek = ['Anna', 'béla', 'Csilla', 'dávid'];
const termekek = [
{ id: 1, nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' },
{ id: 2, nev: 'Billentyűzet', ar: 14990, keszlet: 0, kategoria: 'periféria' },
{ id: 3, nev: 'Monitor', ar: 54990, keszlet: 3, kategoria: 'kijelző' },
{ id: 4, nev: 'HDMI-kábel', ar: 1990, keszlet: 40, kategoria: 'kábel' },
{ id: 5, nev: 'Webkamera', ar: 12990, keszlet: 0, kategoria: 'periféria' },
{ id: 6, nev: 'USB-C kábel', ar: 2490, keszlet: 25, kategoria: 'kábel' }
];


//1. feladat
console.log("\n1. feladat\n");

szamok.forEach(szam => console.log(szam));

//2. feladat
console.log("\n2. feladat\n");

// termekek.forEach((termek, index) => {
//     console.log(index + 1 + ". " + termek.nev);
// });

nevek.forEach((nev, i) => {
    console.log(i + 1 + ". " + nev);
});

//3. feladat
console.log("\n3. feladat\n");

const duplak = szamok.map(szam => szam * 2);
console.log(szamok);
console.log(duplak);

//4. feladat
console.log("\n4. feladat\n");

const nagybetu = nevek.map(nev => nev.toUpperCase());
console.log(nevek);
console.log(nagybetu);

//5. feladat
console.log("\n5. feladat\n");

const nev = termekek.map(termek => termek.nev);
console.log(nev);

//6. feladat
console.log("\n6. feladat\n");

const termekkiiras = termekek.map(termek => termek.nev + " - " + termek.ar + " Ft");
console.log(termekkiiras);

//7. feladat
console.log("\n7. feladat\n");

const tiznelnagyobb = szamok.filter(szam => szam > 10);
console.log(tiznelnagyobb);

//8. feladat
console.log("\n8. feladat\n");

const paros = szamok.filter(szam => szam % 2 === 0);
console.log(paros);

//9. feladat
console.log("\n9. feladat\n");

const keszletennincs = termekek.filter(termek => termek.keszlet === 0);
console.log("Mennyiség: " + keszletennincs.length);
console.log(keszletennincs);

//10. feladat
console.log("\n10. feladat\n");

const tiznelnagyobbszam = szamok.find(szam => szam > 10);
console.log(tiznelnagyobbszam);

//11. feladat
console.log("\n11. feladat\n");

const harmasid = termekek.find(termek => termek.id === 3);
const kilencesid = termekek.find(termek => termek.id === 99);
console.log(harmasid);
console.log(kilencesid);

//12. feladat
console.log("\n12. feladat\n");

const webindex = termekek.findIndex(termek => termek.nev === "Webkamera");
const nyomindex = termekek.findIndex(termek => termek.nev === "Nyomtató");
console.log(webindex);
console.log(nyomindex);

//13. feladat
console.log("\n13. feladat\n");

const nagyobb = szamok.some(szam => szam > 15);
const negativ = szamok.some(szam => szam > 15 && szam % 2 !== 0);
console.log(nagyobb);
console.log(negativ);

//14. feladat
console.log("\n14. feladat\n");

const pozitiv = szamok.every(szam => szam > 0);
const paross = szamok.every(szam => szam % 2 === 0);
console.log(pozitiv);
console.log(paross);

//15. feladat
console.log("\n15. feladat\n");

const keszeletenvane = termekek.some(termek => termek.keszlet === 0);
const ezerfelett = termekek.every(termek => termek.ar > 1000);
console.log(keszeletenvane);
console.log(ezerfelett);

//16. feladat
console.log("\n16. feladat\n");

const osszeg = szamok.reduce((akk, szam) => szam + akk, 0);
console.log(osszeg);

//17. feladat
console.log("\n17. feladat\n");

const max = szamok.reduce((akk, szam) => akk > szam ? akk : szam, 0);
console.log(max);

//18. feladat
console.log("\n18. feladat\n");

const raktar = termekek.reduce((akk, termek) => termek.ar * termek.keszlet + akk, 0);
console.log(raktar);

//19. feladat
console.log("\n19. feladat\n");

console.log(szamok);
console.log(szamok.sort((a, b) => a - b));
console.log(szamok.sort((a, b) => b - a));

//20. feladat
console.log("\n20. feladat\n");

console.log(nevek.sort((a, b) => a.localeCompare(b, "hu")));


//21. feladat
console.log("\n21. feladat\n");

const termekekRendezes = termekek.sort((a, b) => a.ar - b.ar);
termekekRendezes.forEach(termek => console.log(termek.nev));

//22. feladat
console.log("\n22. feladat\n");

const termekekKeszleten = termekek.filter(termek => termek.keszlet > 0);
const termekekNevei = termekekKeszleten.map(termek => termek.nev);
console.log(termekekNevei.join(", "));

//23. feladat
console.log("\n23. feladat\n");

