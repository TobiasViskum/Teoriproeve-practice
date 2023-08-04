const questions: Question[] = [
  {
    question:
      "Hvor tæt må man standse og parkere foran et fodgængerfelt? (meter)",
    answer: [5],
  },
  {
    question: "Må man standse eller parkere på en bro over en motorvej?",
    answer: [false],
  },
  {
    question: "Må man standse eller parkere i et uoverskueligt vejsving?",
    answer: [false],
  },
  {
    question: "Hvor bred må en bil højst være? (meter)",
    answer: [2.55],
  },
  {
    question: "Hvor høj må en bil højst være? (meter)",
    answer: [4],
  },
  {
    question: "Hvor lang må en bil højst være? (meter)",
    answer: [12],
  },
  {
    question:
      "Hvis børn under ___ år ikke anvender sikkerhedssele under kørsel får man et klip i kørekortet",
    answer: [15],
  },
  {
    question:
      "Førstegangserhververe af kørekort får ved ___ klip inden for de første ___ år et kørselsforbud",
    answer: [2, 3],
  },
  {
    question: "Bremsen skal virke på alle fire hjul",
    answer: [true],
  },
  {
    question: "Hvor mange hjul skal håndbremsen mindst virke på?",
    answer: [2],
  },
  {
    question:
      "Fra hvor stor en afstand skal positionslygterne kunne ses fra? (meter)",
    answer: [300],
  },
  {
    question: "Hvor langt skal nærlygterne kunne oplyse vejen? (meter)",
    answer: [30],
  },
  {
    question: "Hvor langt skal fjernlygterne kunne oplyse vejen? (meter)",
    answer: [100],
  },
  {
    question: "Det eneste lys på bilen der må virke blændende er fjernlyset",
    answer: [true],
  },
  {
    question: "Det eneste lys på bilen der må virke blændende er fjernlyset",
    answer: [true],
  },
  {
    question: "Ejeren er eneansvarlig for bilens stand?",
    answer: [false],
  },
  {
    question: "Ejeren er ansvarlig for at bilen er i lovlig stand?",
    answer: [true],
  },
  {
    question:
      "Det påhviler ejeren, at der er lovpligtig ansvarsforsikring på bilen?",
    answer: [true],
  },
  {
    question: "Det påhviler ejeren, at tvungen syn på bilen bliver overholdt?",
    answer: [true],
  },
  {
    question:
      "Dæk skal være pumpet op til et lufttryk efter bilfabrikantens forskrifter",
    answer: [true],
  },
  {
    question: "Må man parkere i et vejkryds?",
    answer: [false],
  },

  {
    question:
      "En standsning er når man frivilligt holder stille under ___ minutter",
    answer: [3],
  },
  {
    question:
      "På større befærdede veje må man standse og parkere i modsatte side af kørselsretningen",
    answer: [false],
  },
  {
    question:
      "Må man standse eller parkere på reseverede parkeringspladser (taxi, handicap mm.)",
    answer: [false],
  },
  {
    question:
      "Må man standse eller parkere, hvis der er en ubrudt gul linje på kantstenen?",
    answer: [false],
  },
  {
    question: "Må man standse eller parkere på cykelstier?",
    answer: [false],
  },
  {
    question:
      "Må man standse eller parkere på motorveje, i nødsporet, i frakørsler/tilkørsler eller i rabatten i forlængelse med til fra- eller tilkørsel?",
    answer: [false],
  },
  {
    question: "Man må gerne standse foran en indkørsel, men ikke parkere der",
    answer: [true],
  },
  {
    question:
      "Hvor tæt må man standse og parkere før udkørslen for en cykelsti? (meter)",
    answer: [5],
  },
  {
    question:
      "Hvor tæt må man standse og parkere fra den nærmest tværgående kørebane (vejkryds)? (meter)",
    answer: [10],
  },
  {
    question:
      "Hvor tæt må man standse og parkere før en spærrelinje i et vejkryds? (meter)",
    answer: [5],
  },
  {
    question:
      "Det er forbudt at standse og parkere, hvis afstanden mellem bilen og spærrelinjen er mindre end 3 meter",
    answer: [true],
  },
  {
    question: "Det er forbudt både at standse og parkere i tunneler",
    answer: [true],
  },
  {
    question:
      "Det er forbudt at standse og parkere på eller i nærheden af bakketoppe",
    answer: [true],
  },
  {
    question: "Standsning og parkering er forbudt i krybespor",
    answer: [true],
  },
  {
    question: "Man må gerne standse og parkere foran en færdselstavle",
    answer: [false],
  },
  {
    question:
      "Hvor tæt må man maksimalt standse og parkere før og efter et bustoppested? (meter)",
    answer: [12],
  },
  {
    question: "Må man standse og parkere på en jernbane?",
    answer: [false],
  },
  {
    question:
      "Man må gerne standse, hvis der på kantstenen er en punkteret gul linje",
    answer: [true],
  },
  {
    question:
      "En standsning indebærer også af- og pålæsning af vare eller personer",
    answer: [true],
  },
  {
    question:
      "Standsning er tilladt nærmere end ___ meter før eller efter en jernbane",
    answer: [30],
  },
  {
    question:
      "Er parkering forbudt på kørebanen på hovedveje udenfor tættere bebygget område?",
    answer: [true],
  },
  {
    question:
      "Parkering er forbudt ved siden af et anden køretøj der allerede holder parkeret i vejkantent",
    answer: [true],
  },
  {
    question: "Skal bilen have asymmetrisk fjernlys?",
    answer: [false],
  },
  {
    question: "Skal bilen have asymmetrisk nærlys?",
    answer: [true],
  },
  {
    question:
      "Nærlyset skal have et fald på ___%, dvs. ___ centimeter pr. meter",
    answer: [1, 1],
  },
  {
    question:
      "Man må krydse en spærreflade såfremt, at skraveringen peger mod kørselsretningen, og at spærrefladen er begrænset af en punkteret linje",
    answer: [true],
  },
  {
    question:
      "Hvis kørsel er tilladt i en gågade er den normalt anbefalede hasighed ___ km/t",
    answer: [15],
  },
  {
    question: "Biler må gerne køre i en gågade",
    answer: [false],
  },
  {
    question:
      "Hvis hastigheden fordobles bliver bremselængden ___ gange så høj",
    answer: [4],
  },
  {
    question: "Der skal være to lygter med baglys",
    answer: [true],
  },
  {
    question: "Der skal være to lygter med stoplys",
    answer: [false],
  },
  {
    question: "Der skal være ___ lygter med stoplys",
    answer: [3],
  },
  {
    question:
      "Der skal være to røde godkendte og mærkede bagud vendte reflekser, som ikke må være trekantede",
    answer: [2],
  },
  {
    question: "Baglygternes lys skal være rødt",
    answer: [true],
  },
  {
    question:
      "Baglygterne skal kunne ses fra ___ meters afstand uden at blænde",
    answer: [300],
  },
  {
    question:
      "De mest udsatte i en rundkørsel er fodgængere, cyklister og små køretøjer som knallerter",
    answer: [true],
  },
  {
    question:
      "Det er en god idé at sætte hastigheden ned inden man kører ind i en tunnel, for at øjnene kan vænne sig til det nye lys",
    answer: [true],
  },
  {
    question:
      "Hvis et lyssignal kun viser gult, er det i gang med at blive rødt",
    answer: [true],
  },
  {
    question:
      "Hvis et lyssignal kun viser gult, er det i gang med at blive grønt",
    answer: [false],
  },
  {
    question: "Skal man bruge nærlys under kørsel i tunnel?",
    answer: [true],
  },
  {
    question:
      "En passende hastighed på en lige landevej med sne på vil være ___ km/t",
    answer: [40],
  },
  {
    question:
      "Hvis jeg er med i et uheld, skal jeg oplyse navn og adresse til alle involverede",
    answer: [true],
  },
  {
    question:
      "Advarselstrekanten skal placeres ___ meter fra bilen på motorvejen",
    answer: [100],
  },
  {
    question:
      "Advarselstrekanten skal placeres minimum ___ meter fra bilen på alle veje udover motorvejen",
    answer: [50],
  },
];

export default questions;
