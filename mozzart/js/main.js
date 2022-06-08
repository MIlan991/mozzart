// FUDBAL BTN
const FdbBtn = document.getElementById('fdb-btn')
// FUDBAL BTN SMALL
const FdbBtnSmall = document.getElementById('fdb-btn-small')
// KOSARKA BTN
const kosBtn = document.getElementById('kos-btn')
// KOSRKA BTN SMALL
const kosBtnSmall = document.getElementById('kos-btn-small')
// TENIS BTN
const tenBtn = document.getElementById('ten-btn')
// TENIS BTN SMALL
const tenBtnSmall = document.getElementById('ten-btn-small')
// HOKEJ BTN
const hokBtn = document.getElementById('hok-btn')
// HOKEJ BTN SMALL
const hokBtnSmall = document.getElementById('hok-btn-small')
// RUKOMET BTN
const rukBtn = document.getElementById('ruk-btn')
// RUKOMET BTN SMALL
const rukBtnSmall = document.getElementById('ruk-btn-small')
// ODBOJKA BTN
const odbBtn = document.getElementById('odb-btn')
// ODBOJKA BTN SMALL
const odbBtnSmall = document.getElementById('odb-btn-small')

let fudbal = [
    {   // FUDBAL PAR 1
        domacin1: "Chelsea",
        gost1: "Manhester Utd",
        igra1: 2.25,
        igraX: 1.40,
        igra2: 3.15,
        vreme1: "Uto. 21:00"
    },
    {   // FUDBAL PAR 2
        domacin2: "Inter Milan",
        gost2: "AC Milan",
        igra1: 2.10,
        igraX: 1.60,
        igra2: 2.90,
        vreme2: "Ned. 20:45"
    },
    {   // FUDBAL PAR 3
        domacin3: "Real Madrid",
        gost3: "Barcelona",
        igra1: 2.15,
        igraX: 1.90,
        igra2: 3.85,
        vreme3: "Ned. 22:00"
    },
    {   // FUDBAL PAR 4
        domacin4: "Arsenal",
        gost4: "Aston Vila",
        igra1: 1.80,
        igraX: 2.40,
        igra2: 4.15,
        vreme4: "Sub. 16:00"
    },
    {   // FUDBAL PAR 5
        domacin5: "Roma",
        gost5: "Juventus",
        igra1: 3.50,
        igraX: 2.80,
        igra2: 1.95,
        vreme5: "Ned: 15:00"
    },
    {   // FUDBAL PAR 6
        domacin6: "Partizan",
        gost6: "Red Star",
        igra1: 2.50,
        igraX: 3.40,
        igra2: 2.50,
        vreme6: "Sub: 19:00"
    },
    {   // FUDBAL PAR 7
        domacin7: "River Plate",
        gost7: "Boca Juniors",
        igra1: 2.20,
        igraX: 2.40,
        igra2: 1.95,
        vreme7: "Sub: 04:00"
    },
    {   // FUDBAL PAR 8
        domacin8: "PSG",
        gost8: "Lyon",
        igra1: 1.50,
        igraX: 2.40,
        igra2: 3.15,
        vreme8: "Sub: 18:00"
    },
    {   // FUDBAL PAR 9
        domacin9: "Lazio",
        gost9: "Napoli",
        igra1: 2.85,
        igraX: 2.40,
        igra2: 2.15,
        vreme9: "Ned. 15:00"
    },
    {   // FUDBAL PAR 10
        domacin10: "Bayern Munich",
        gost10: "Herta Berlin",
        igra1: 1.90,
        igraX: 2.60,
        igra2: 3.60,
        vreme10: "Ned. 19:45"
    },
    {   // FUDBAL PAR 11
        domacin11: "PSV",
        gost11: "Ajax",
        igra1: 2.15,
        igraX: 2.40,
        igra2: 1.90,
        vreme11: "Pet. 20:00"
    },
    {   // FUDBAL PAR 12
        domacin12: "FC Porto",
        gost12: "Sporting CP",
        igra1: 1.80,
        igraX: 2.60,
        igra2: 2.15,
        vreme12: "Sub. 20:00"
    },
    {   // FUDBAL PAR 13
        domacin13: "S.C. Braga",
        gost13: "Boavista",
        igra1: 1.50,
        igraX: 2.30,
        igra2: 2.95,
        vreme13: "Ned: 20:00"
    },
    {   // FUDBAL PAR 14
        domacin14: "CSKA Moscow",
        gost14: "FC Zenit",
        igra1: 2.10,
        igraX: 2.40,
        igra2: 2.90,
        vreme14: "Sub: 16:00"
    },
    {   // FUDBAL PAR 15
        domacin15: "Newcastle Utd",
        gost15: "Everton",
        igra1: 2.30,
        igraX: 2.10,
        igra2: 2.95,
        vreme15: "Sub: 12:00"
    },
    {   // FUDBAL PAR 16
        domacin16: "Lille OSC",
        gost16: "AS Monaco FC",
        igra1: 2.90,
        igraX: 2.40,
        igra2: 1.65,
        vreme16: "Sre: 21:15"
    },
    {   // FUDBAL PAR 17
        domacin17: "Chelsea",
        gost17: "Manhester Utd",
        igra1: 2.25,
        igraX: 1.40,
        igra2: 3.15,
        vreme17: "Uto. 21:00"
    },
    {   // FUDBAL PAR 18
        domacin18: "Inter Milan",
        gost18: "AC Milan",
        igra1: 2.10,
        igraX: 1.60,
        igra2: 2.90,
        vreme18: "Ned. 20:45"
    },
    {   // FUDBAL PAR 19
        domacin19: "Real Madrid",
        gost19: "Barcelona",
        igra1: 2.15,
        igraX: 1.90,
        igra2: 3.85,
        vreme19: "Ned. 22:00"
    },
    {   // FUDBAL PAR 20
        domacin20: "Arsenal",
        gost20: "Aston Vila",
        igra1: 1.80,
        igraX: 2.40,
        igra2: 4.15,
        vreme20: "Sub. 16:00"
    },
    {   // FUDBAL PAR 21
        domacin21: "Roma",
        gost21: "Juventus",
        igra1: 3.50,
        igraX: 2.80,
        igra2: 1.95,
        vreme21: "Ned: 15:00"
    },
    {   // FUDBAL PAR 22
        domacin22: "Partizan",
        gost22: "Red Star",
        igra1: 2.50,
        igraX: 3.40,
        igra2: 2.50,
        vreme22: "Sub: 19:00"
    },
    {   // FUDBAL PAR 23
        domacin23: "River Plate",
        gost23: "Boca Juniors",
        igra1: 2.20,
        igraX: 2.40,
        igra2: 1.95,
        vreme23: "Sub: 04:00"
    },
    {   // FUDBAL PAR 24
        domacin24: "PSG",
        gost24: "Lyon",
        igra1: 1.50,
        igraX: 2.40,
        igra2: 3.15,
        vreme24: "Sub: 18:00"
    },
    {   // FUDBAL PAR 25
        domacin25: "Lazio",
        gost25: "Napoli",
        igra1: 2.85,
        igraX: 2.40,
        igra2: 2.15,
        vreme25: "Ned. 15:00"
    },
    {   // FUDBAL PAR 26
        domacin26: "Bayern Munich",
        gost26: "Herta Berlin",
        igra1: 1.90,
        igraX: 2.60,
        igra2: 3.60,
        vreme26: "Ned. 19:45"
    },
    {   // FUDBAL PAR 27
        domacin27: "PSV",
        gost27: "Ajax",
        igra1: 2.15,
        igraX: 2.40,
        igra2: 1.90,
        vreme27: "Pet. 20:00"
    },
    {   // FUDBAL PAR 28
        domacin28: "FC Porto",
        gost28: "Sporting CP",
        igra1: 1.80,
        igraX: 2.60,
        igra2: 2.15,
        vreme28: "Sub. 20:00"
    },
    {   // FUDBAL PAR 29
        domacin29: "S.C. Braga",
        gost29: "Boavista",
        igra1: 1.50,
        igraX: 2.30,
        igra2: 2.95,
        vreme29: "Ned: 20:00"
    },
    {   // FUDBAL PAR 30
        domacin30: "CSKA Moscow",
        gost30: "FC Zenit",
        igra1: 2.10,
        igraX: 2.40,
        igra2: 2.90,
        vreme30: "Sub: 16:00"
    },
    {   // FUDBAL PAR 31
        domacin31: "Newcastle Utd",
        gost31: "Everton",
        igra1: 2.30,
        igraX: 2.10,
        igra2: 2.95,
        vreme31: "Sub: 12:00"
    },
    {   // FUDBAL PAR 32
        domacin32: "Lille OSC",
        gost32: "AS Monaco FC",
        igra1: 2.90,
        igraX: 2.40,
        igra2: 1.65,
        vreme32: "Sre: 21:15"
    },
    {   // FUDBAL PAR 33
        domacin33: "Chelsea",
        gost33: "Manhester Utd",
        igra1: 2.25,
        igraX: 1.40,
        igra2: 3.15,
        vreme33: "Uto. 21:00"
    },
    {   // FUDBAL PAR 34
        domacin34: "Inter Milan",
        gost34: "AC Milan",
        igra1: 2.10,
        igraX: 1.60,
        igra2: 2.90,
        vreme34: "Ned. 20:45"
    },
    {   // FUDBAL PAR 35
        domacin35: "Real Madrid",
        gost35: "Barcelona",
        igra1: 2.15,
        igraX: 1.90,
        igra2: 3.85,
        vreme35: "Ned. 22:00"
    },
    {   // FUDBAL PAR 36
        domacin36: "Arsenal",
        gost36: "Aston Vila",
        igra1: 1.80,
        igraX: 2.40,
        igra2: 4.15,
        vreme36: "Sub. 16:00"
    },
    {   // FUDBAL PAR 37
        domacin37: "Roma",
        gost37: "Juventus",
        igra1: 3.50,
        igraX: 2.80,
        igra2: 1.95,
        vreme37: "Ned: 15:00"
    },
    {   // FUDBAL PAR 38
        domacin38: "Partizan",
        gost38: "Red Star",
        igra1: 2.50,
        igraX: 3.40,
        igra2: 2.50,
        vreme38: "Sub: 19:00"
    },
    {   // FUDBAL PAR 39
        domacin39: "River Plate",
        gost39: "Boca Juniors",
        igra1: 2.20,
        igraX: 2.40,
        igra2: 1.95,
        vreme39: "Sub: 04:00"
    },
    {   // FUDBAL PAR 40
        domacin40: "PSG",
        gost40: "Lyon",
        igra1: 1.50,
        igraX: 2.40,
        igra2: 3.15,
        vreme40: "Sub: 18:00"
    },
    {   // FUDBAL PAR 41
        domacin41: "Lazio",
        gost41: "Napoli",
        igra1: 2.85,
        igraX: 2.40,
        igra2: 2.15,
        vreme41: "Ned. 15:00"
    },
    {   // FUDBAL PAR 42
        domacin42: "Bayern Munich",
        gost42: "Herta Berlin",
        igra1: 1.90,
        igraX: 2.60,
        igra2: 3.60,
        vreme42: "Ned. 19:45"
    },
    {   // FUDBAL PAR 43
        domacin43: "PSV",
        gost43: "Ajax",
        igra1: 2.15,
        igraX: 2.40,
        igra2: 1.90,
        vreme43: "Pet. 20:00"
    },
    {   // FUDBAL PAR 44
        domacin44: "FC Porto",
        gost44: "Sporting CP",
        igra1: 1.80,
        igraX: 2.60,
        igra2: 2.15,
        vreme44: "Sub. 20:00"
    },
    {   // FUDBAL PAR 45
        domacin45: "S.C. Braga",
        gost45: "Boavista",
        igra1: 1.50,
        igraX: 2.30,
        igra2: 2.95,
        vreme45: "Ned: 20:00"
    },
    {   // FUDBAL PAR 46
        domacin46: "CSKA Moscow",
        gost46: "FC Zenit",
        igra1: 2.10,
        igraX: 2.40,
        igra2: 2.90,
        vreme46: "Sub: 16:00"
    },
    {   // FUDBAL PAR 47
        domacin47: "Newcastle Utd",
        gost47: "Everton",
        igra1: 2.30,
        igraX: 2.10,
        igra2: 2.95,
        vreme47: "Sub: 12:00"
    },
    {   // FUDBAL PAR 48
        domacin48: "Lille OSC",
        gost48: "AS Monaco FC",
        igra1: 2.90,
        igraX: 2.40,
        igra2: 1.65,
        vreme48: "Sre: 21:15"
    },
    {   // FUDBAL PAR 49
        domacin49: "Chelsea",
        gost49: "Manhester Utd",
        igra1: 2.25,
        igraX: 1.40,
        igra2: 3.15,
        vreme49: "Uto. 21:00"
    },
    {   // FUDBAL PAR 50
        domacin50: "Inter Milan",
        gost50: "AC Milan",
        igra1: 2.10,
        igraX: 1.60,
        igra2: 2.90,
        vreme50: "Ned. 20:45"
    },
    {   // FUDBAL PAR 51
        domacin51: "Real Madrid",
        gost51: "Barcelona",
        igra1: 2.15,
        igraX: 1.90,
        igra2: 3.85,
        vreme51: "Ned. 22:00"
    },
    {   // FUDBAL PAR 52
        domacin52: "Arsenal",
        gost52: "Aston Vila",
        igra1: 1.80,
        igraX: 2.40,
        igra2: 4.15,
        vreme52: "Sub. 16:00"
    },
    {   // FUDBAL PAR 53
        domacin53: "Roma",
        gost53: "Juventus",
        igra1: 3.50,
        igraX: 2.80,
        igra2: 1.95,
        vreme53: "Ned: 15:00"
    },
    {   // FUDBAL PAR 54
        domacin54: "Partizan",
        gost54: "Red Star",
        igra1: 2.50,
        igraX: 3.40,
        igra2: 2.50,
        vreme54: "Sub: 19:00"
    },
    {   // FUDBAL PAR 55
        domacin55: "River Plate",
        gost55: "Boca Juniors",
        igra1: 2.20,
        igraX: 2.40,
        igra2: 1.95,
        vreme55: "Sub: 04:00"
    },
    {   // FUDBAL PAR 56
        domacin56: "PSG",
        gost56: "Lyon",
        igra1: 1.50,
        igraX: 2.40,
        igra2: 3.15,
        vreme56: "Sub: 18:00"
    },
]

// FUDBAL BTN FUNCTION
const fudbalBtn = document.querySelectorAll('.fudbal-btn')
for (i = 0; i < fudbalBtn.length; i++) {
    fudbalBtn[i].addEventListener('click', () => {
        fudbalFunction()
    });
}

                                                                            // PAROVI
//  PAR 1
let vreme1El = document.querySelector('.vreme1')
let domacin1El = document.getElementById('domacin1')
let gost1El = document.getElementById('gost1')
let prviPar1 = document.getElementById('igra1-1')
let prviParX = document.getElementById('igrax-1')
let prviPar2 = document.getElementById('igra2-1')
//  PAR 2
let vreme2El = document.querySelector('.vreme2')
let domacin2El = document.getElementById('domacin2')
let gost2El = document.getElementById('gost2')
let drugiPar1 = document.getElementById('igra1-2')
let drugiParX = document.getElementById('igrax-2')
let drugiPar2 = document.getElementById('igra2-2')
//  PAR 3
let vreme3El = document.querySelector('.vreme3')
let domacin3El = document.getElementById('domacin3')
let gost3El = document.getElementById('gost3')
let treciPar1 = document.getElementById('igra1-3')
let treciParX = document.getElementById('igrax-3')
let treciPar2 = document.getElementById('igra2-3')
//  PAR 4
let vreme4El = document.querySelector('.vreme4')
let domacin4El = document.getElementById('domacin4')
let gost4El = document.getElementById('gost4')
let cetvrtiPar1 = document.getElementById('igra1-4')
let cetvrtiParX = document.getElementById('igrax-4')
let cetvrtiPar2 = document.getElementById('igra2-4')
//  PAR 5
let vreme5El = document.querySelector('.vreme5')
let domacin5El = document.getElementById('domacin5')
let gost5El = document.getElementById('gost5')
let petiPar1 = document.getElementById('igra1-5')
let petiParX = document.getElementById('igrax-5')
let petiPar2 = document.getElementById('igra2-5')
//  PAR 6
let vreme6El = document.querySelector('.vreme6')
let domacin6El = document.getElementById('domacin6')
let gost6El = document.getElementById('gost6')
let sestiPar1 = document.getElementById('igra1-6')
let sestiParX = document.getElementById('igrax-6')
let sestiPar2 = document.getElementById('igra2-6')
//  PAR 7
let vreme7El = document.querySelector('.vreme7')
let domacin7El = document.getElementById('domacin7')
let gost7El = document.getElementById('gost7')
let sedmiPar1 = document.getElementById('igra1-7')
let sedmiParX = document.getElementById('igrax-7')
let sedmiPar2 = document.getElementById('igra2-7')
//  PAR 8
let vreme8El = document.querySelector('.vreme8')
let domacin8El = document.getElementById('domacin8')
let gost8El = document.getElementById('gost8')
let osmiPar1 = document.getElementById('igra1-8')
let osmiParX = document.getElementById('igrax-8')
let osmiPar2 = document.getElementById('igra2-8')

// PAR 9
let vreme9El = document.querySelector('.vreme9')
let domacin9El = document.getElementById('domacin9')
let gost9El = document.getElementById('gost9')
let devetiPar1 = document.getElementById('igra1-9')
let devetiParX = document.getElementById('igrax-9')
let devetiPar2 = document.getElementById('igra2-9')
//  PAR 10
let vreme10El = document.querySelector('.vreme10')
let domacin10El = document.getElementById('domacin10')
let gost10El = document.getElementById('gost10')
let desetiPar1 = document.getElementById('igra1-10')
let desetiParX = document.getElementById('igrax-10')
let desetiPar2 = document.getElementById('igra2-10')
//  PAR 11
let vreme11El = document.querySelector('.vreme11')
let domacin11El = document.getElementById('domacin11')
let gost11El = document.getElementById('gost11')
let jedanaestiPar1 = document.getElementById('igra1-11')
let jedanaestiParX = document.getElementById('igrax-11')
let jedanaestiPar2 = document.getElementById('igra2-11')
//  PAR 12
let vreme12El = document.querySelector('.vreme12')
let domacin12El = document.getElementById('domacin12')
let gost12El = document.getElementById('gost12')
let dvanaestiPar1 = document.getElementById('igra1-12')
let dvanaestiParX = document.getElementById('igrax-12')
let dvanaestiPar2 = document.getElementById('igra2-12')
//  PAR 13
let vreme13El = document.querySelector('.vreme13')
let domacin13El = document.getElementById('domacin13')
let gost13El = document.getElementById('gost13')
let trinaestiPar1 = document.getElementById('igra1-13')
let trinaestiParX = document.getElementById('igrax-13')
let trinaestiPar2 = document.getElementById('igra2-13')
//  PAR 14
let vreme14El = document.querySelector('.vreme14')
let domacin14El = document.getElementById('domacin14')
let gost14El = document.getElementById('gost14')
let cetrnaestiPar1 = document.getElementById('igra1-14')
let cetrnaestiParX = document.getElementById('igrax-14')
let cetrnaestiPar2 = document.getElementById('igra2-14')
//  PAR 15
let vreme15El = document.querySelector('.vreme15')
let domacin15El = document.getElementById('domacin15')
let gost15El = document.getElementById('gost15')
let petnaestiPar1 = document.getElementById('igra1-15')
let petnaestiParX = document.getElementById('igrax-15')
let petnaestiPar2 = document.getElementById('igra2-15')
//  PAR 16
let vreme16El = document.querySelector('.vreme16')
let domacin16El = document.getElementById('domacin16')
let gost16El = document.getElementById('gost16')
let sesnaestiPar1 = document.getElementById('igra1-16')
let sesnaestiParX = document.getElementById('igrax-16')
let sesnaestiPar2 = document.getElementById('igra2-16')
// PAR 17
let vreme17El = document.querySelector('.vreme17')
let domacin17El = document.getElementById('domacin17')
let gost17El = document.getElementById('gost17')
let sedamnaestiPar1 = document.getElementById('igra1-17')
let sedamnaestiParX = document.getElementById('igrax-17')
let sedamnaestiPar2 = document.getElementById('igra2-17')
//  PAR 18
let vreme18El = document.querySelector('.vreme18')
let domacin18El = document.getElementById('domacin18')
let gost18El = document.getElementById('gost18')
let osamnaestiPar1 = document.getElementById('igra1-18')
let osamnaestiParX = document.getElementById('igrax-18')
let osamnaestiPar2 = document.getElementById('igra2-18')
//  PAR 19
let vreme19El = document.querySelector('.vreme19')
let domacin19El = document.getElementById('domacin19')
let gost19El = document.getElementById('gost19')
let devetnaestiPar1 = document.getElementById('igra1-19')
let devetnaestiParX = document.getElementById('igrax-19')
let devetnaestiPar2 = document.getElementById('igra2-19')
//  PAR 20
let vreme20El = document.querySelector('.vreme20')
let domacin20El = document.getElementById('domacin20')
let gost20El = document.getElementById('gost20')
let dvadesetiPar1 = document.getElementById('igra1-20')
let dvadesetiParX = document.getElementById('igrax-20')
let dvadesetiPar2 = document.getElementById('igra2-20')
//  PAR 21
let vreme21El = document.querySelector('.vreme21')
let domacin21El = document.getElementById('domacin21')
let gost21El = document.getElementById('gost21')
let dvadesetprviPar1 = document.getElementById('igra1-21')
let dvadesetprviParX = document.getElementById('igrax-21')
let dvadesetprviPar2 = document.getElementById('igra2-21')
//  PAR 22
let vreme22El = document.querySelector('.vreme22')
let domacin22El = document.getElementById('domacin22')
let gost22El = document.getElementById('gost22')
let dvadesetdrugiPar1 = document.getElementById('igra1-22')
let dvadesetdrugiParX = document.getElementById('igrax-22')
let dvadesetdrugiPar2 = document.getElementById('igra2-22')
//  PAR 23
let vreme23El = document.querySelector('.vreme23')
let domacin23El = document.getElementById('domacin23')
let gost23El = document.getElementById('gost23')
let dvadesettreciPar1 = document.getElementById('igra1-23')
let dvadesettreciParX = document.getElementById('igrax-23')
let dvadesettreciPar2 = document.getElementById('igra2-23')
//  PAR 24
let vreme24El = document.querySelector('.vreme24')
let domacin24El = document.getElementById('domacin24')
let gost24El = document.getElementById('gost24')
let dvadesetcetvrtiPar1 = document.getElementById('igra1-24')
let dvadesetcetvrtiParX = document.getElementById('igrax-24')
let dvadesetcetvrtiPar2 = document.getElementById('igra2-24')
//  PAR 25
let vreme25El = document.querySelector('.vreme25')
let domacin25El = document.getElementById('domacin25')
let gost25El = document.getElementById('gost25')
let dvadesetpetiPar1 = document.getElementById('igra1-25')
let dvadesetpetiParX = document.getElementById('igrax-25')
let dvadesetpetiPar2 = document.getElementById('igra2-25')
//  PAR 26
let vreme26El = document.querySelector('.vreme26')
let domacin26El = document.getElementById('domacin26')
let gost26El = document.getElementById('gost26')
let dvadesetsestiPar1 = document.getElementById('igra1-26')
let dvadesetsestiParX = document.getElementById('igrax-26')
let dvadesetsestiPar2 = document.getElementById('igra2-26')
//  PAR 27
let vreme27El = document.querySelector('.vreme27')
let domacin27El = document.getElementById('domacin27')
let gost27El = document.getElementById('gost27')
let dvadesetsedmiPar1 = document.getElementById('igra1-27')
let dvadesetsedmiParX = document.getElementById('igrax-27')
let dvadesetsedmiPar2 = document.getElementById('igra2-27')
//  PAR 28
let vreme28El = document.querySelector('.vreme28')
let domacin28El = document.getElementById('domacin28')
let gost28El = document.getElementById('gost28')
let dvadesetosmiPar1 = document.getElementById('igra1-28')
let dvadesetosmiParX = document.getElementById('igrax-28')
let dvadesetosmiPar2 = document.getElementById('igra2-28')
//  PAR 29
let vreme29El = document.querySelector('.vreme29')
let domacin29El = document.getElementById('domacin29')
let gost29El = document.getElementById('gost29')
let dvadesetdevetiPar1 = document.getElementById('igra1-29')
let dvadesetdevetiParX = document.getElementById('igrax-29')
let dvadesetdevetiPar2 = document.getElementById('igra2-29')
//  PAR 30
let vreme30El = document.querySelector('.vreme30')
let domacin30El = document.getElementById('domacin30')
let gost30El = document.getElementById('gost30')
let tridesetiPar1 = document.getElementById('igra1-30')
let tridesetiParX = document.getElementById('igrax-30')
let tridesetiPar2 = document.getElementById('igra2-30')
//  PAR 31
let vreme31El = document.querySelector('.vreme31')
let domacin31El = document.getElementById('domacin31')
let gost31El = document.getElementById('gost31')
let tridesetprviPar1 = document.getElementById('igra1-31')
let tridesetprviParX = document.getElementById('igrax-31')
let tridesetprviPar2 = document.getElementById('igra2-31')
//  PAR 32
let vreme32El = document.querySelector('.vreme32')
let domacin32El = document.getElementById('domacin32')
let gost32El = document.getElementById('gost32')
let tridesetdrugiPar1 = document.getElementById('igra1-32')
let tridesetdrugiParX = document.getElementById('igrax-32')
let tridesetdrugiPar2 = document.getElementById('igra2-32')
//  PAR 33
let vreme33El = document.querySelector('.vreme33')
let domacin33El = document.getElementById('domacin33')
let gost33El = document.getElementById('gost33')
let tridesettreciPar1 = document.getElementById('igra1-33')
let tridesettreciParX = document.getElementById('igrax-33')
let tridesettreciPar2 = document.getElementById('igra2-33')
//  PAR 34
let vreme34El = document.querySelector('.vreme34')
let domacin34El = document.getElementById('domacin34')
let gost34El = document.getElementById('gost34')
let tridesetcetvrtiPar1 = document.getElementById('igra1-34')
let tridesetcetvrtiParX = document.getElementById('igrax-34')
let tridesetcetvrtiPar2 = document.getElementById('igra2-34')
//  PAR 35
let vreme35El = document.querySelector('.vreme35')
let domacin35El = document.getElementById('domacin35')
let gost35El = document.getElementById('gost35')
let tridesetpetiPar1 = document.getElementById('igra1-35')
let tridesetpetiParX = document.getElementById('igrax-35')
let tridesetpetiPar2 = document.getElementById('igra2-35')
//  PAR 36
let vreme36El = document.querySelector('.vreme36')
let domacin36El = document.getElementById('domacin36')
let gost36El = document.getElementById('gost36')
let tridesetsestiPar1 = document.getElementById('igra1-36')
let tridesetsestiParX = document.getElementById('igrax-36')
let tridesetsestiPar2 = document.getElementById('igra2-36')
//  PAR 37
let vreme37El = document.querySelector('.vreme37')
let domacin37El = document.getElementById('domacin37')
let gost37El = document.getElementById('gost37')
let tridesetsedmiPar1 = document.getElementById('igra1-37')
let tridesetsedmiParX = document.getElementById('igrax-37')
let tridesetsedmiPar2 = document.getElementById('igra2-37')
//  PAR 38
let vreme38El = document.querySelector('.vreme38')
let domacin38El = document.getElementById('domacin38')
let gost38El = document.getElementById('gost38')
let tridesetosmiPar1 = document.getElementById('igra1-38')
let tridesetosmiParX = document.getElementById('igrax-38')
let tridesetosmiPar2 = document.getElementById('igra2-38')
//  PAR 39
let vreme39El = document.querySelector('.vreme39')
let domacin39El = document.getElementById('domacin39')
let gost39El = document.getElementById('gost39')
let tridesetdevetiPar1 = document.getElementById('igra1-39')
let tridesetdevetiParX = document.getElementById('igrax-39')
let tridesetdevetiPar2 = document.getElementById('igra2-39')
//  PAR 40
let vreme40El = document.querySelector('.vreme40')
let domacin40El = document.getElementById('domacin40')
let gost40El = document.getElementById('gost40')
let cetrdesetiPar1 = document.getElementById('igra1-40')
let cetrdesetiParX = document.getElementById('igrax-40')
let cetrdesetiPar2 = document.getElementById('igra2-40')

// PAR 41
let vreme41El = document.querySelector('.vreme41')
let domacin41El = document.getElementById('domacin41')
let gost41El = document.getElementById('gost41')
let cetrdesetprviPar1 = document.getElementById('igra1-41')
let cetrdesetprviParX = document.getElementById('igrax-41')
let cetrdesetprviPar2 = document.getElementById('igra2-41')
//  PAR 42
let vreme42El = document.querySelector('.vreme42')
let domacin42El = document.getElementById('domacin42')
let gost42El = document.getElementById('gost42')
let cetrdesetdrugiPar1 = document.getElementById('igra1-42')
let cetrdesetdrugiParX = document.getElementById('igrax-42')
let cetrdesetdrugiPar2 = document.getElementById('igra2-42')
//  PAR 43
let vreme43El = document.querySelector('.vreme43')
let domacin43El = document.getElementById('domacin43')
let gost43El = document.getElementById('gost43')
let cetrdesettreciPar1 = document.getElementById('igra1-43')
let cetrdesettreciParX = document.getElementById('igrax-43')
let cetrdesettreciPar2 = document.getElementById('igra2-43')
//  PAR 44
let vreme44El = document.querySelector('.vreme44')
let domacin44El = document.getElementById('domacin44')
let gost44El = document.getElementById('gost44')
let cetrdesetcetvrtiPar1 = document.getElementById('igra1-44')
let cetrdesetcetvrtiParX = document.getElementById('igrax-44')
let cetrdesetcetvrtiPar2 = document.getElementById('igra2-44')
//  PAR 45
let vreme45El = document.querySelector('.vreme45')
let domacin45El = document.getElementById('domacin45')
let gost45El = document.getElementById('gost45')
let cetrdesetpetiPar1 = document.getElementById('igra1-45')
let cetrdesetpetiParX = document.getElementById('igrax-45')
let cetrdesetpetiPar2 = document.getElementById('igra2-45')
//  PAR 46
let vreme46El = document.querySelector('.vreme46')
let domacin46El = document.getElementById('domacin46')
let gost46El = document.getElementById('gost46')
let cetrdesetsestiPar1 = document.getElementById('igra1-46')
let cetrdesetsestiParX = document.getElementById('igrax-46')
let cetrdesetsestiPar2 = document.getElementById('igra2-46')
//  PAR 47
let vreme47El = document.querySelector('.vreme47')
let domacin47El = document.getElementById('domacin47')
let gost47El = document.getElementById('gost47')
let cetrdesetsedmiPar1 = document.getElementById('igra1-47')
let cetrdesetsedmiParX = document.getElementById('igrax-47')
let cetrdesetsedmiPar2 = document.getElementById('igra2-47')
//  PAR 48
let vreme48El = document.querySelector('.vreme48')
let domacin48El = document.getElementById('domacin48')
let gost48El = document.getElementById('gost48')
let cetrdesetosmiPar1 = document.getElementById('igra1-48')
let cetrdesetosmiParX = document.getElementById('igrax-48')
let cetrdesetosmiPar2 = document.getElementById('igra2-48')
// PAR 49
let vreme49El = document.querySelector('.vreme49')
let domacin49El = document.getElementById('domacin49')
let gost49El = document.getElementById('gost49')
let cetrdesetdevetiPar1 = document.getElementById('igra1-49')
let cetrdesetdevetiParX = document.getElementById('igrax-49')
let cetrdesetdevetiPar2 = document.getElementById('igra2-49')
//  PAR 50
let vreme50El = document.querySelector('.vreme50')
let domacin50El = document.getElementById('domacin50')
let gost50El = document.getElementById('gost50')
let pedesetiPar1 = document.getElementById('igra1-50')
let pedesetiParX = document.getElementById('igrax-50')
let pedesetiPar2 = document.getElementById('igra2-50')
//  PAR 51
let vreme51El = document.querySelector('.vreme51')
let domacin51El = document.getElementById('domacin51')
let gost51El = document.getElementById('gost51')
let pedesetprviPar1 = document.getElementById('igra1-51')
let pedesetprviParX = document.getElementById('igrax-51')
let pedesetprviPar2 = document.getElementById('igra2-51')
//  PAR 52
let vreme52El = document.querySelector('.vreme52')
let domacin52El = document.getElementById('domacin52')
let gost52El = document.getElementById('gost52')
let pedesetdrugiPar1 = document.getElementById('igra1-52')
let pedesetdrugiParX = document.getElementById('igrax-52')
let pedesetdrugiPar2 = document.getElementById('igra2-52')
//  PAR 53
let vreme53El = document.querySelector('.vreme53')
let domacin53El = document.getElementById('domacin53')
let gost53El = document.getElementById('gost53')
let pedesettreciPar1 = document.getElementById('igra1-53')
let pedesettreciParX = document.getElementById('igrax-53')
let pedesettreciPar2 = document.getElementById('igra2-53')
//  PAR 54
let vreme54El = document.querySelector('.vreme54')
let domacin54El = document.getElementById('domacin54')
let gost54El = document.getElementById('gost54')
let pedesetcetvrtiPar1 = document.getElementById('igra1-54')
let pedesetcetvrtiParX = document.getElementById('igrax-54')
let pedesetcetvrtiPar2 = document.getElementById('igra2-54')
//  PAR 55
let vreme55El = document.querySelector('.vreme55')
let domacin55El = document.getElementById('domacin55')
let gost55El = document.getElementById('gost55')
let pedesetpetiPar1 = document.getElementById('igra1-55')
let pedesetpetiParX = document.getElementById('igrax-55')
let pedesetpetiPar2 = document.getElementById('igra2-55')
//  PAR 56
let vreme56El = document.querySelector('.vreme56')
let domacin56El = document.getElementById('domacin56')
let gost56El = document.getElementById('gost56')
let pedesetsestiPar1 = document.getElementById('igra1-56')
let pedesetsestiParX = document.getElementById('igrax-56')
let pedesetsestiPar2 = document.getElementById('igra2-56')


                                                                            // IGRE 1 X 2
const uplataKvotaEl = document.querySelector('.uplata-kvota')
const uplataEl = document.querySelector('.uplata')
let izabranaKvotaEl = document.getElementById('kvote-el')

uplataKvotaEl.addEventListener('click', () => {
    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
})

// IGRA PAR 1
const prviParIgra1 = document.getElementById('par1-1')
prviParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = prviPar1.innerText
})

const prviParIgraX = document.getElementById('par1-x')
prviParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = prviParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const prviParIgra2 = document.getElementById('par1-2')
prviParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = prviPar2.innerText
})

// IGRA PAR 2
const drugiParIgra1 = document.getElementById('par2-1')
drugiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = drugiPar1.innerText
})

const drugiParIgraX = document.getElementById('par2-x')
drugiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = drugiParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const drugiParIgra2 = document.getElementById('par2-2')
drugiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = drugiPar2.innerText
})

// IGRA PAR 3
const treciParIgra1 = document.getElementById('par3-1')
treciParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = treciPar1.innerText
})

const treciParIgraX = document.getElementById('par3-x')
treciParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = treciParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const treciParIgra2 = document.getElementById('par3-2')
treciParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = treciPar2.innerText
})

// IGRA PAR 4
const cetvrtiParIgra1 = document.getElementById('par4-1')
cetvrtiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetvrtiPar1.innerText
})

const cetvrtiParIgraX = document.getElementById('par4-x')
cetvrtiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetvrtiParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetvrtiParIgra2 = document.getElementById('par4-2')
cetvrtiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetvrtiPar2.innerText
})

// IGRA PAR 5
const petiParIgra1 = document.getElementById('par5-1')
petiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = petiPar1.innerText
})

const petiParIgraX = document.getElementById('par5-x')
petiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = petiParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const petiParIgra2 = document.getElementById('par5-2')
petiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = petiPar2.innerText
})

// IGRA PAR 6
const sestiParIgra1 = document.getElementById('par6-1')
sestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sestiPar1.innerText
})

const sestiParIgraX = document.getElementById('par6-x')
sestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sestiParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const sestiParIgra2 = document.getElementById('par6-2')
sestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sestiPar2.innerText
})

// IGRA PAR 7
const sedmiParIgra1 = document.getElementById('par7-1')
sedmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sedmiPar1.innerText
})

const sedmiParIgraX = document.getElementById('par7-x')
sedmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sedmiParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const sedmiParIgra2 = document.getElementById('par7-2')
sedmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sedmiPar2.innerText
})

// IGRA PAR 8
const osmiParIgra1 = document.getElementById('par8-1')
osmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = osmiPar1.innerText
})

const osmiParIgraX = document.getElementById('par8-x')
osmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = osmiParX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const osmiParIgra2 = document.getElementById('par8-2')
osmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = osmiPar2.innerText
})

// IGRA PAR 9
const devetiParIgra1 = document.getElementById('par9-1')
devetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = devetiParIgra1.innerText
})

const devetiParIgraX = document.getElementById('par9-x')
devetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = devetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const devetiParIgra2 = document.getElementById('par9-2')
devetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = devetiParIgra2.innerText
})

// IGRA PAR 10
const desetiParIgra1 = document.getElementById('par10-1')
desetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = desetiParIgra1.innerText
})

const desetiParIgraX = document.getElementById('par10-x')
desetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = desetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const desetiParIgra2 = document.getElementById('par10-2')
desetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = desetiParIgra2.innerText
})

// IGRA PAR 11
const jedanaestiParIgra1 = document.getElementById('par11-1')
jedanaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = jedanaestiParIgra1.innerText
})

const jedanaestiParIgraX = document.getElementById('par11-x')
jedanaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = jedanaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const jedanaestiParIgra2 = document.getElementById('par11-2')
jedanaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = jedanaestiParIgra2.innerText
})

// IGRA PAR 12
const dvanaestiParIgra1 = document.getElementById('par12-1')
dvanaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvanaestiParIgra1.innerText
})

const dvanaestiParIgraX = document.getElementById('par12-x')
dvanaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvanaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvanaestiParIgra2 = document.getElementById('par12-2')
dvanaestiParIgra2.addEventListener('click', () =>{
    dvanaestiParIgra2.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetvrtiPar2.innerText
})

// IGRA PAR 13
const trinaestiParIgra1 = document.getElementById('par13-1')
trinaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = trinaestiParIgra1.innerText
})

const trinaestiParIgraX = document.getElementById('par13-x')
trinaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = trinaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const trinaestiParIgra2 = document.getElementById('par13-2')
trinaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = trinaestiParIgra2.innerText
})

// IGRA PAR 14
const cetrnaestiParIgra1 = document.getElementById('par14-1')
cetrnaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrnaestiParIgra1.innerText
})

const cetrnaestiParIgraX = document.getElementById('par14-x')
cetrnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrnaestiParIgra2 = document.getElementById('par14-2')
cetrnaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrnaestiParIgra2.innerText
})

// IGRA PAR 15
const petnaestiParIgra1 = document.getElementById('par15-1')
petnaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = petnaestiParIgra1.innerText
})

const petnaestiParIgraX = document.getElementById('par15-x')
petnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = petnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const petnaestiParIgra2 = document.getElementById('par15-2')
petnaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = petnaestiParIgra2.innerText
})

// IGRA PAR 16
const sesnaestiParIgra1 = document.getElementById('par16-1')
sesnaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sesnaestiParIgra1.innerText
})

const sesnaestiParIgraX = document.getElementById('par16-x')
sesnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sesnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const sesnaestiParIgra2 = document.getElementById('par16-2')
sesnaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sesnaestiParIgra2.innerText
})

// IGRA PAR 17
const sedamnaestiParIgra1 = document.getElementById('par17-1')
sedamnaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sedamnaestiParIgra1.innerText
})

const sedamnaestiParIgraX = document.getElementById('par17-x')
sedamnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sedamnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const sedamnaestiParIgra2 = document.getElementById('par17-2')
sedamnaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sedamnaestiParIgra2.innerText
})

// IGRA PAR 18
const osamnaestiParIgra1 = document.getElementById('par18-1')
osamnaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = osamnaestiParIgra1.innerText
})

const osamnaestiParIgraX = document.getElementById('par18-x')
osamnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = osamnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const osamnaestiParIgra2 = document.getElementById('par18-2')
osamnaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = osamnaestiParIgra2.innerText
})

// IGRA PAR 19
const devetnaestiParIgra1 = document.getElementById('par19-1')
devetnaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = devetnaestiParIgra1.innerText
})

const devetnaestiParIgraX = document.getElementById('par19-x')
devetnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = devetnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const devetnaestiParIgra2 = document.getElementById('par19-2')
devetnaestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = devetnaestiParIgra2.innerText
})

// IGRA PAR 20
const dvadesetiParIgra1 = document.getElementById('par20-1')
dvanaestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvanaestiParIgra1.innerText
})

const dvadesetiParIgraX = document.getElementById('par20-x')
dvadesetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetiParIgra2 = document.getElementById('par20-2')
dvadesetiParIgra2.addEventListener('click', () =>{
    dvadesetiParIgra2.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetvrtiPar2.innerText
})

// IGRA PAR 21
const dvadesetprvaParIgra1 = document.getElementById('par21-1')
dvadesetprvaParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetprvaParIgra1.innerText
})

const dvadesetprvaParIgraX = document.getElementById('par21-x')
dvadesetprvaParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetprvaParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetprvaParIgra2 = document.getElementById('par21-2')
dvadesetprvaParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetprvaParIgra2.innerText
})

// IGRA PAR 22
const dvadesetdrugiParIgra1 = document.getElementById('par22-1')
dvadesetdrugiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetdrugiParIgra1.innerText
})

const dvadesetdrugiParIgraX = document.getElementById('par22-x')
dvadesetdrugiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetdrugiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetdrugiParIgra2 = document.getElementById('par22-2')
dvadesetdrugiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetdrugiParIgra2.innerText
})

// IGRA PAR 23
const dvadesettreciParIgra1 = document.getElementById('par23-1')
dvadesettreciParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesettreciParIgra1.innerText
})

const dvadesettreciParIgraX = document.getElementById('par23-x')
dvadesettreciParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesettreciParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesettreciParIgra2 = document.getElementById('par23-2')
dvadesettreciParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesettreciParIgra2.innerText
})

// IGRA PAR 24
const dvadesetcetvrtiParIgra1 = document.getElementById('par24-1')
dvadesetcetvrtiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetcetvrtiParIgra1.innerText
})

const dvadesetcetvrtiParIgraX = document.getElementById('par24-x')
dvadesetcetvrtiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetcetvrtiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetcetvrtiParIgra2 = document.getElementById('par24-2')
dvadesetcetvrtiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetcetvrtiParIgra2.innerText
})

// IGRA PAR 25
const dvadesetpetiParIgra1 = document.getElementById('par25-1')
dvadesetpetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetpetiParIgra1.innerText
})

const dvadesetpetiParIgraX = document.getElementById('par25-x')
dvadesetpetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetpetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetpetiParIgra2 = document.getElementById('par25-2')
dvadesetpetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetpetiParIgra2.innerText
})

// IGRA PAR 26
const dvadesetsestiParIgra1 = document.getElementById('par26-1')
dvadesetsestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetsestiParIgra1.innerText
})

const dvadesetsestiParIgraX = document.getElementById('par26-x')
dvadesetsestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetsestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetsestiParIgra2 = document.getElementById('par26-2')
dvadesetsestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetsestiParIgra2.innerText
})

// IGRA PAR 27
const dvadesetsedmiParIgra1 = document.getElementById('par27-1')
dvadesetsedmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetsedmiParIgra1.innerText
})

const dvadesetsedmiParIgraX = document.getElementById('par27-x')
dvadesetsedmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetsedmiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetsedmiParIgra2 = document.getElementById('par27-2')
dvadesetsedmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetsedmiParIgra2.innerText
})

// IGRA PAR 28
const dvadesetosmiParIgra1 = document.getElementById('par28-1')
dvadesetosmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetosmiParIgra1.innerText
})

const dvadesetosmiParIgraX = document.getElementById('par28-x')
dvadesetosmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetosmiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetosmiParIgra2 = document.getElementById('par28-2')
dvadesetosmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetosmiParIgra2.innerText
})

// IGRA PAR 29
const dvadesetdevetiParIgra1 = document.getElementById('par29-1')
dvadesetdevetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetdevetiParIgra1.innerText
})

const dvadesetdevetiParIgraX = document.getElementById('par29-x')
dvadesetdevetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetdevetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const dvadesetdevetiParIgra2 = document.getElementById('par29-2')
dvadesetdevetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = dvadesetdevetiParIgra2.innerText
})

// IGRA PAR 30
const tridesetiParIgra1 = document.getElementById('par30-1')
tridesetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetiParIgra1.innerText
})

const tridesetiParIgraX = document.getElementById('par30-x')
tridesetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetiParIgra2 = document.getElementById('par30-2')
tridesetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetiParIgra2.innerText
})

// IGRA PAR 31
const tridesetprviParIgra1 = document.getElementById('par31-1')
tridesetprviParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetprviParIgra1.innerText
})

const tridesetprviParIgraX = document.getElementById('par31-x')
tridesetprviParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetprviParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetprviParIgra2 = document.getElementById('par31-2')
tridesetprviParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetprviParIgra2.innerText
})

// IGRA PAR 32
const tridesetdrugiParIgra1 = document.getElementById('par32-1')
tridesetdrugiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetdrugiParIgra1.innerText
})

const tridesetdrugiParIgraX = document.getElementById('par8-x')
tridesetdrugiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetdrugiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetdrugiParIgra2 = document.getElementById('par32-2')
tridesetdrugiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetdrugiParIgra2.innerText
})

// IGRA PAR 33
const tridesettreciParIgra1 = document.getElementById('par33-1')
tridesettreciParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesettreciParIgra1.innerText
})

const tridesettreciParIgraX = document.getElementById('par33-x')
tridesettreciParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesettreciParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesettreciParIgra2 = document.getElementById('par33-2')
tridesettreciParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesettreciParIgra2.innerText
})

// IGRA PAR 34
const tridesetcetvrtiParIgra1 = document.getElementById('par34-1')
tridesetcetvrtiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetcetvrtiParIgra1.innerText
})

const tridesetcetvrtiParIgraX = document.getElementById('par34-x')
tridesetcetvrtiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetcetvrtiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetcetvrtiParIgra2 = document.getElementById('par34-2')
tridesetcetvrtiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetcetvrtiParIgra2.innerText
})

// IGRA PAR 35
const tridesetpetiParIgra1 = document.getElementById('par35-1')
tridesetpetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetpetiParIgra1.innerText
})

const tridesetpetiParIgraX = document.getElementById('par35-x')
tridesetpetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetpetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetpetiParIgra2 = document.getElementById('par35-2')
tridesetpetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetpetiParIgra2.innerText
})

// IGRA PAR 36
const tridesetsestiParIgra1 = document.getElementById('par36-1')
tridesetsestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetsestiParIgra1.innerText
})

const tridesetsestiParIgraX = document.getElementById('par36-x')
tridesetsestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetsestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetsestiParIgra2 = document.getElementById('par36-2')
tridesetsestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetsestiParIgra2.innerText
})

// IGRA PAR 37
const tridesetsedmiParIgra1 = document.getElementById('par37-1')
tridesetsedmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetsedmiParIgra1.innerText
})

const tridesetsedmiParIgraX = document.getElementById('par37-x')
tridesetsedmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetsedmiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetsedmiParIgra2 = document.getElementById('par37-2')
tridesetsedmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetsedmiParIgra2.innerText
})

// IGRA PAR 38
const tridesetosmiParIgra1 = document.getElementById('par38-1')
tridesetosmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetosmiParIgra1.innerText
})

const tridesetosmiParIgraX = document.getElementById('par38-x')
tridesetosmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetosmiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetosmiParIgra2 = document.getElementById('par38-2')
tridesetosmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetosmiParIgra2.innerText
})

// IGRA PAR 39
const tridesetdevetiParIgra1 = document.getElementById('par39-1')
tridesetdevetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetdevetiParIgra1.innerText
})

const tridesetdevetiParIgraX = document.getElementById('par39-x')
tridesetdevetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetdevetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const tridesetdevetiParIgra2 = document.getElementById('par39-2')
tridesetdevetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = tridesetdevetiParIgra2.innerText
})

// IGRA PAR 40
const cetrdesetiParIgra1 = document.getElementById('par40-1')
cetrdesetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetiParIgra1.innerText
})

const cetrdesetiParIgraX = document.getElementById('par40-x')
cetrdesetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetiParIgra2 = document.getElementById('par40-2')
cetrdesetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetiParIgra2.innerText
})

// IGRA PAR 41
const cetrdesetprviParIgra1 = document.getElementById('par41-1')
cetrdesetprviParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetprviParIgra1.innerText
})

const cetrdesetprviParIgraX = document.getElementById('par41-x')
cetrdesetprviParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetprviParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetprviParIgra2 = document.getElementById('par41-2')
cetrdesetprviParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetprviParIgra2.innerText
})

// IGRA PAR 42
const cetrdesetdrugiParIgra1 = document.getElementById('par42-1')
cetrdesetdrugiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetdrugiParIgra1.innerText
})

const cetrdesetdrugiParIgraX = document.getElementById('par42-x')
cetrdesetdrugiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetdrugiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetdrugiParIgra2 = document.getElementById('par42-2')
cetrdesetdrugiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetdrugiParIgra2.innerText
})

// IGRA PAR 43
const cetrdesettreciParIgra1 = document.getElementById('par43-1')
cetrdesettreciParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesettreciParIgra1.innerText
})

const cetrdesettreciParIgraX = document.getElementById('par43-x')
cetrdesettreciParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesettreciParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesettreciParIgra2 = document.getElementById('par43-2')
cetrdesettreciParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesettreciParIgra2.innerText
})

// IGRA PAR 44
const cetrdesetcetvrtiParIgra1 = document.getElementById('par44-1')
cetrdesetcetvrtiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetcetvrtiParIgra1.innerText
})

const cetrdesetcetvrtiParIgraX = document.getElementById('par44-x')
cetrdesetcetvrtiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetcetvrtiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetcetvrtiParIgra2 = document.getElementById('par44-2')
cetrdesetcetvrtiParIgra2.addEventListener('click', () =>{
    dvanaestiParIgra2.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetcetvrtiParIgra2.innerText
})

// IGRA PAR 45
const cetrdesetpetiParIgra1 = document.getElementById('par45-1')
cetrdesetpetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetpetiParIgra1.innerText
})

const cetrdesetpetiParIgraX = document.getElementById('par45-x')
cetrdesetpetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetpetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetpetiParIgra2 = document.getElementById('par45-2')
cetrdesetpetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetpetiParIgra2.innerText
})

// IGRA PAR 46
const cetrdesetsestiParIgra1 = document.getElementById('par46-1')
cetrdesetsestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetsestiParIgra1.innerText
})

const cetrdesetsestiParIgraX = document.getElementById('par46-x')
cetrdesetsestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetsestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetsestiParIgra2 = document.getElementById('par46-2')
cetrdesetsestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetsestiParIgra2.innerText
})

// IGRA PAR 47
const cetrdesetsedmiParIgra1 = document.getElementById('par47-1')
cetrdesetsedmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetsedmiParIgra1.innerText
})

const cetrdesetsedmiParIgraX = document.getElementById('par47-x')
cetrdesetsedmiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetsedmiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetsedmiParIgra2 = document.getElementById('par47-2')
cetrdesetsedmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetsedmiParIgra2.innerText
})

// IGRA PAR 48
const cetrdesetosmiParIgra1 = document.getElementById('par48-1')
cetrdesetosmiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetosmiParIgra1.innerText
})

const cetrdesetosmiParIgraX = document.getElementById('par48-x')
sesnaestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = sesnaestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetosmiParIgra2 = document.getElementById('par48-2')
cetrdesetosmiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetosmiParIgra2.innerText
})

// IGRA PAR 49
const cetrdesetdevetiParIgra1 = document.getElementById('par49-1')
cetrdesetdevetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetdevetiParIgra1.innerText
})

const cetrdesetdevetiParIgraX = document.getElementById('par49-x')
cetrdesetdevetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetdevetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const cetrdesetdevetiParIgra2 = document.getElementById('par49-2')
cetrdesetdevetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = cetrdesetdevetiParIgra2.innerText
})

// IGRA PAR 50
const pedesetiParIgra1 = document.getElementById('par50-1')
pedesetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetiParIgra1.innerText
})

const pedesetiParIgraX = document.getElementById('par50-x')
pedesetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesetiParIgra2 = document.getElementById('par50-2')
pedesetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetiParIgra2.innerText
})

// IGRA PAR 51
const pedesetprviParIgra1 = document.getElementById('par51-1')
pedesetprviParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetprviParIgra1.innerText
})

const pedesetprviParIgraX = document.getElementById('par51-x')
pedesetprviParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetprviParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesetprviParIgra2 = document.getElementById('par51-2')
pedesetprviParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetprviParIgra2.innerText
})

// IGRA PAR 52
const pedesetdrugiParIgra1 = document.getElementById('par52-1')
pedesetdrugiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetdrugiParIgra1.innerText
})

const pedesetdrugiParIgraX = document.getElementById('par52-x')
pedesetdrugiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetdrugiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesetdrugiParIgra2 = document.getElementById('par52-2')
pedesetdrugiParIgra2.addEventListener('click', () =>{
    dvadesetiParIgra2.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetdrugiParIgra2.innerText
})

// IGRA PAR 53
const pedesettreciParIgra1 = document.getElementById('par53-1')
pedesettreciParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesettreciParIgra1.innerText
})

const pedesettreciParIgraX = document.getElementById('par53-x')
pedesettreciParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesettreciParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesettreciParIgra2 = document.getElementById('par53-2')
pedesettreciParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesettreciParIgra2.innerText
})

// IGRA PAR 54
const pedesetcetvrtiParIgra1 = document.getElementById('par54-1')
pedesetcetvrtiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetcetvrtiParIgra1.innerText
})

const pedesetcetvrtiParIgraX = document.getElementById('par54-x')
pedesetcetvrtiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetcetvrtiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesetcetvrtiParIgra2 = document.getElementById('par54-2')
pedesetcetvrtiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetcetvrtiParIgra2.innerText
})

// IGRA PAR 55
const pedesetpetiParIgra1 = document.getElementById('par55-1')
pedesetpetiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetpetiParIgra1.innerText
})

const pedesetpetiParIgraX = document.getElementById('par55-x')
pedesetpetiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetpetiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesetpetiParIgra2 = document.getElementById('par55-2')
pedesetpetiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetpetiParIgra2.innerText
})

// IGRA PAR 56
const pedesetsestiParIgra1 = document.getElementById('par56-1')
pedesetsestiParIgra1.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetsestiParIgra1.innerText
})

const pedesetsestiParIgraX = document.getElementById('par56-x')
pedesetsestiParIgraX.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetsestiParIgraX.innerText
    if(izabranaKvotaEl.textContent === "-"){
        uplataKvotaEl.style.display = "none";
        uplataEl.style.display = "flex";
    }
})

const pedesetsestiParIgra2 = document.getElementById('par56-2')
pedesetsestiParIgra2.addEventListener('click', () =>{
    uplataKvotaEl.style.display = "flex";
    uplataEl.style.display = "none";
    izabranaKvotaEl.textContent = pedesetsestiParIgra2.innerText
})



                                                    // FUDBAL FUNCTION
function fudbalFunction(){
    // FUDBAL PAR 1
    vreme1El.textContent = fudbal[0].vreme1
    domacin1El.textContent = fudbal[0].domacin1
    gost1El.textContent = fudbal[0].gost1
    prviPar1.textContent = fudbal[0].igra1
    prviParX.textContent = fudbal[0].igraX
    prviPar2.textContent = fudbal[0].igra2
    // FUDBAL PAR 2
    vreme2El.textContent = fudbal[1].vreme2
    domacin2El.textContent = fudbal[1].domacin2
    gost2El.textContent = fudbal[1].gost2
    drugiPar1.textContent = fudbal[1].igra1
    drugiParX.textContent = fudbal[1].igraX
    drugiPar2.textContent = fudbal[1].igra2
    // FUDBAL PAR 3
    vreme3El.textContent = fudbal[2].vreme3
    domacin3El.textContent = fudbal[2].domacin3
    gost3El.textContent = fudbal[2].gost3
    treciPar1.textContent = fudbal[2].igra1
    treciParX.textContent = fudbal[2].igraX
    treciPar2.textContent = fudbal[2].igra2
    // FUDBAL PAR 4
    vreme4El.textContent = fudbal[3].vreme4
    domacin4El.textContent = fudbal[3].domacin4
    gost4El.textContent = fudbal[3].gost4
    cetvrtiPar1.textContent = fudbal[3].igra1
    cetvrtiParX.textContent = fudbal[3].igraX
    cetvrtiPar2.textContent = fudbal[3].igra2
    // FUDBAL PAR 5
    vreme5El.textContent = fudbal[4].vreme5
    domacin5El.textContent = fudbal[4].domacin5
    gost5El.textContent = fudbal[4].gost5
    petiPar1.textContent = fudbal[4].igra1
    petiParX.textContent = fudbal[4].igraX
    petiPar2.textContent = fudbal[4].igra2
    // FUDBAL PAR 6
    vreme6El.textContent = fudbal[5].vreme6
    domacin6El.textContent = fudbal[5].domacin6
    gost6El.textContent = fudbal[5].gost6
    sestiPar1.textContent = fudbal[5].igra1
    sestiParX.textContent = fudbal[5].igraX
    sestiPar2.textContent = fudbal[5].igra2
    // FUDBAL PAR 7
    vreme7El.textContent = fudbal[6].vreme7
    domacin7El.textContent = fudbal[6].domacin7
    gost7El.textContent = fudbal[6].gost7
    sedmiPar1.textContent = fudbal[6].igra1
    sedmiParX.textContent = fudbal[6].igraX
    sedmiPar2.textContent = fudbal[6].igra2
    // FUDBAL PAR 8
    vreme8El.textContent = fudbal[7].vreme8
    domacin8El.textContent = fudbal[7].domacin8
    gost8El.textContent = fudbal[7].gost8
    osmiPar1.textContent = fudbal[7].igra1
    osmiParX.textContent = fudbal[7].igraX
    osmiPar2.textContent = fudbal[7].igra2
    // FUDBAL PAR 9
    vreme9El.textContent = fudbal[8].vreme9
    domacin9El.textContent = fudbal[8].domacin9
    gost9El.textContent = fudbal[8].gost9
    devetiPar1.textContent = fudbal[8].igra1
    devetiParX.textContent = fudbal[8].igraX
    devetiPar2.textContent = fudbal[8].igra2
    // FUDBAL PAR 10
    vreme10El.textContent = fudbal[9].vreme10
    domacin10El.textContent = fudbal[9].domacin10
    gost10El.textContent = fudbal[9].gost10
    desetiPar1.textContent = fudbal[9].igra1
    desetiParX.textContent = fudbal[9].igraX
    desetiPar2.textContent = fudbal[9].igra2
    // FUDBAL PAR 11
    vreme11El.textContent = fudbal[10].vreme11
    domacin11El.textContent = fudbal[10].domacin11
    gost11El.textContent = fudbal[10].gost11
    jedanaestiPar1.textContent = fudbal[10].igra1
    jedanaestiParX.textContent = fudbal[10].igraX
    jedanaestiPar2.textContent = fudbal[10].igra2
    // FUDBAL PAR 12
    vreme12El.textContent = fudbal[11].vreme12
    domacin12El.textContent = fudbal[11].domacin12
    gost12El.textContent = fudbal[11].gost12
    dvanaestiPar1.textContent = fudbal[11].igra1
    dvanaestiParX.textContent = fudbal[11].igraX
    dvanaestiPar2.textContent = fudbal[11].igra2
    // FUDBAL PAR 13
    vreme13El.textContent = fudbal[12].vreme13
    domacin13El.textContent = fudbal[12].domacin13
    gost13El.textContent = fudbal[12].gost13
    trinaestiPar1.textContent = fudbal[12].igra1
    trinaestiParX.textContent = fudbal[12].igraX
    trinaestiPar2.textContent = fudbal[12].igra2
    // FUDBAL PAR 14
    vreme14El.textContent = fudbal[13].vreme14
    domacin14El.textContent = fudbal[13].domacin14
    gost14El.textContent = fudbal[13].gost14
    cetrnaestiPar1.textContent = fudbal[13].igra1
    cetrnaestiParX.textContent = fudbal[13].igraX
    cetrnaestiPar2.textContent = fudbal[13].igra2
    // FUDBAL PAR 15
    vreme15El.textContent = fudbal[14].vreme15
    domacin15El.textContent = fudbal[14].domacin15
    gost15El.textContent = fudbal[14].gost15
    petnaestiPar1.textContent = fudbal[14].igra1
    petnaestiParX.textContent = fudbal[14].igraX
    petnaestiPar2.textContent = fudbal[14].igra2
    // FUDBAL PAR 16
    vreme16El.textContent = fudbal[15].vreme16
    domacin16El.textContent = fudbal[15].domacin16
    gost16El.textContent = fudbal[15].gost16
    sesnaestiPar1.textContent = fudbal[15].igra1
    sesnaestiParX.textContent = fudbal[15].igraX
    sesnaestiPar2.textContent = fudbal[15].igra2
    // FUDBAL PAR 17
    vreme17El.textContent = fudbal[16].vreme17
    domacin17El.textContent = fudbal[16].domacin17
    gost17El.textContent = fudbal[16].gost17
    sedamnaestiPar1.textContent = fudbal[16].igra1
    sedamnaestiParX.textContent = fudbal[16].igraX
    sedamnaestiPar2.textContent = fudbal[16].igra2
    // FUDBAL PAR 18
    vreme18El.textContent = fudbal[17].vreme18
    domacin18El.textContent = fudbal[17].domacin18
    gost18El.textContent = fudbal[17].gost18
    osamnaestiPar1.textContent = fudbal[17].igra1
    osamnaestiParX.textContent = fudbal[17].igraX
    osamnaestiPar2.textContent = fudbal[17].igra2
    // FUDBAL PAR 19
    vreme19El.textContent = fudbal[18].vreme19
    domacin19El.textContent = fudbal[18].domacin19
    gost19El.textContent = fudbal[18].gost19
    devetnaestiPar1.textContent = fudbal[18].igra1
    devetnaestiParX.textContent = fudbal[18].igraX
    devetnaestiPar2.textContent = fudbal[18].igra2
    // FUDBAL PAR 20
    vreme20El.textContent = fudbal[19].vreme20
    domacin20El.textContent = fudbal[19].domacin20
    gost20El.textContent = fudbal[19].gost20
    dvadesetiPar1.textContent = fudbal[19].igra1
    dvadesetiParX.textContent = fudbal[19].igraX
    dvadesetiPar2.textContent = fudbal[19].igra2
    // FUDBAL PAR 21
    vreme21El.textContent = fudbal[20].vreme21
    domacin21El.textContent = fudbal[20].domacin21
    gost21El.textContent = fudbal[20].gost21
    dvadesetprviPar1.textContent = fudbal[20].igra1
    dvadesetprviParX.textContent = fudbal[20].igraX
    dvadesetprviPar2.textContent = fudbal[20].igra2
    // FUDBAL PAR 22
    vreme22El.textContent = fudbal[21].vreme22
    domacin22El.textContent = fudbal[21].domacin22
    gost22El.textContent = fudbal[21].gost22
    dvadesetdrugiPar1.textContent = fudbal[21].igra1
    dvadesetdrugiParX.textContent = fudbal[21].igraX
    dvadesetdrugiPar2.textContent = fudbal[21].igra2
    // FUDBAL PAR 23
    vreme23El.textContent = fudbal[22].vreme23
    domacin23El.textContent = fudbal[22].domacin23
    gost23El.textContent = fudbal[22].gost23
    dvadesettreciPar1.textContent = fudbal[22].igra1
    dvadesettreciParX.textContent = fudbal[22].igraX
    dvadesettreciPar2.textContent = fudbal[22].igra2
    // FUDBAL PAR 24
    vreme24El.textContent = fudbal[23].vreme24
    domacin24El.textContent = fudbal[23].domacin24
    gost24El.textContent = fudbal[23].gost24
    dvadesetcetvrtiPar1.textContent = fudbal[23].igra1
    dvadesetcetvrtiParX.textContent = fudbal[23].igraX
    dvadesetcetvrtiPar2.textContent = fudbal[23].igra2
    // FUDBAL PAR 25
    vreme25El.textContent = fudbal[24].vreme25
    domacin25El.textContent = fudbal[24].domacin25
    gost25El.textContent = fudbal[24].gost25
    dvadesetpetiPar1.textContent = fudbal[24].igra1
    dvadesetpetiParX.textContent = fudbal[24].igraX
    dvadesetpetiPar2.textContent = fudbal[24].igra2
    // FUDBAL PAR 26
    vreme26El.textContent = fudbal[25].vreme26
    domacin26El.textContent = fudbal[25].domacin26
    gost26El.textContent = fudbal[25].gost26
    dvadesetsestiPar1.textContent = fudbal[25].igra1
    dvadesetsestiParX.textContent = fudbal[25].igraX
    dvadesetsestiPar2.textContent = fudbal[25].igra2
    // FUDBAL PAR 27
    vreme27El.textContent = fudbal[26].vreme27
    domacin27El.textContent = fudbal[26].domacin27
    gost27El.textContent = fudbal[26].gost27
    dvadesetsedmiPar1.textContent = fudbal[26].igra1
    dvadesetsedmiParX.textContent = fudbal[26].igraX
    dvadesetsedmiPar2.textContent = fudbal[26].igra2
    // FUDBAL PAR 28
    vreme28El.textContent = fudbal[27].vreme28
    domacin28El.textContent = fudbal[27].domacin28
    gost28El.textContent = fudbal[27].gost28
    dvadesetosmiPar1.textContent = fudbal[27].igra1
    dvadesetosmiParX.textContent = fudbal[27].igraX
    dvadesetosmiPar2.textContent = fudbal[27].igra2
    // FUDBAL PAR 29
    vreme29El.textContent = fudbal[28].vreme29
    domacin29El.textContent = fudbal[28].domacin29
    gost29El.textContent = fudbal[28].gost29
    dvadesetdevetiPar1.textContent = fudbal[28].igra1
    dvadesetdevetiParX.textContent = fudbal[28].igraX
    dvadesetdevetiPar2.textContent = fudbal[28].igra2
    // FUDBAL PAR 30
    vreme30El.textContent = fudbal[29].vreme30
    domacin30El.textContent = fudbal[29].domacin30
    gost30El.textContent = fudbal[29].gost6
    tridesetiPar1.textContent = fudbal[29].igra1
    tridesetiParX.textContent = fudbal[29].igraX
    tridesetiPar2.textContent = fudbal[29].igra2
    // FUDBAL PAR 31
    vreme31El.textContent = fudbal[30].vreme31
    domacin31El.textContent = fudbal[30].domacin31
    gost31El.textContent = fudbal[30].gost31
    tridesetprviPar1.textContent = fudbal[30].igra1
    tridesetprviParX.textContent = fudbal[30].igraX
    tridesetprviPar2.textContent = fudbal[30].igra2
    // FUDBAL PAR 32
    vreme32El.textContent = fudbal[31].vreme32
    domacin32El.textContent = fudbal[31].domacin32
    gost32El.textContent = fudbal[31].gost32
    tridesetdrugiPar1.textContent = fudbal[31].igra1
    tridesetdrugiParX.textContent = fudbal[31].igraX
    tridesetdrugiPar2.textContent = fudbal[31].igra2
    // FUDBAL PAR 33
    vreme33El.textContent = fudbal[32].vreme33
    domacin33El.textContent = fudbal[32].domacin33
    gost33El.textContent = fudbal[32].gost33
    tridesettreciPar1.textContent = fudbal[32].igra1
    tridesettreciParX.textContent = fudbal[32].igraX
    tridesettreciPar2.textContent = fudbal[32].igra2
    // FUDBAL PAR 34
    vreme34El.textContent = fudbal[33].vreme34
    domacin34El.textContent = fudbal[33].domacin34
    gost34El.textContent = fudbal[33].gost34
    tridesetcetvrtiPar1.textContent = fudbal[33].igra1
    tridesetcetvrtiParX.textContent = fudbal[33].igraX
    tridesetcetvrtiPar2.textContent = fudbal[33].igra2
    // FUDBAL PAR 35
    vreme35El.textContent = fudbal[34].vreme35
    domacin35El.textContent = fudbal[34].domacin35
    gost35El.textContent = fudbal[34].gost35
    tridesetpetiPar1.textContent = fudbal[34].igra1
    tridesetpetiParX.textContent = fudbal[34].igraX
    tridesetpetiPar2.textContent = fudbal[34].igra2
    // FUDBAL PAR 36
    vreme36El.textContent = fudbal[35].vreme36
    domacin36El.textContent = fudbal[35].domacin36
    gost36El.textContent = fudbal[35].gost36
    tridesetsestiPar1.textContent = fudbal[35].igra1
    tridesetsestiParX.textContent = fudbal[35].igraX
    tridesetsestiPar2.textContent = fudbal[35].igra2
    // FUDBAL PAR 37
    vreme37El.textContent = fudbal[36].vreme37
    domacin37El.textContent = fudbal[36].domacin37
    gost37El.textContent = fudbal[36].gost37
    tridesetsedmiPar1.textContent = fudbal[36].igra1
    tridesetsedmiParX.textContent = fudbal[36].igraX
    tridesetsedmiPar2.textContent = fudbal[36].igra2
    // FUDBAL PAR 38
    vreme38El.textContent = fudbal[37].vreme38
    domacin38El.textContent = fudbal[37].domacin38
    gost38El.textContent = fudbal[37].gost38
    tridesetosmiPar1.textContent = fudbal[37].igra1
    tridesetosmiParX.textContent = fudbal[37].igraX
    tridesetosmiPar2.textContent = fudbal[37].igra2
    // FUDBAL PAR 39
    vreme39El.textContent = fudbal[38].vreme39
    domacin39El.textContent = fudbal[38].domacin39
    gost39El.textContent = fudbal[38].gost39
    tridesetdevetiPar1.textContent = fudbal[38].igra1
    tridesetdevetiParX.textContent = fudbal[38].igraX
    tridesetdevetiPar2.textContent = fudbal[38].igra2
    // FUDBAL PAR 40
    vreme40El.textContent = fudbal[39].vreme40
    domacin40El.textContent = fudbal[39].domacin40
    gost40El.textContent = fudbal[39].gost40
    cetrdesetiPar1.textContent = fudbal[39].igra1
    cetrdesetiParX.textContent = fudbal[39].igraX
    cetrdesetiPar2.textContent = fudbal[39].igra2
    // FUDBAL PAR 41
    vreme41El.textContent = fudbal[40].vreme41
    domacin41El.textContent = fudbal[40].domacin41
    gost41El.textContent = fudbal[40].gost41
    cetrdesetprviPar1.textContent = fudbal[40].igra1
    cetrdesetprviParX.textContent = fudbal[40].igraX
    cetrdesetprviPar2.textContent = fudbal[40].igra2
    // FUDBAL PAR 42
    vreme42El.textContent = fudbal[41].vreme42
    domacin42El.textContent = fudbal[41].domacin42
    gost42El.textContent = fudbal[41].gost42
    cetrdesetdrugiPar1.textContent = fudbal[41].igra1
    cetrdesetdrugiParX.textContent = fudbal[41].igraX
    cetrdesetdrugiPar2.textContent = fudbal[41].igra2
    // FUDBAL PAR 43
    vreme43El.textContent = fudbal[42].vreme43
    domacin43El.textContent = fudbal[42].domacin43
    gost43El.textContent = fudbal[42].gost43
    cetrdesettreciPar1.textContent = fudbal[42].igra1
    cetrdesettreciParX.textContent = fudbal[42].igraX
    cetrdesettreciPar2.textContent = fudbal[42].igra2
    // FUDBAL PAR 44
    vreme44El.textContent = fudbal[43].vreme44
    domacin44El.textContent = fudbal[43].domacin44
    gost44El.textContent = fudbal[43].gost44
    cetrdesetcetvrtiPar1.textContent = fudbal[43].igra1
    cetrdesetcetvrtiParX.textContent = fudbal[43].igraX
    cetrdesetcetvrtiPar2.textContent = fudbal[43].igra2
    // FUDBAL PAR 45
    vreme45El.textContent = fudbal[44].vreme45
    domacin45El.textContent = fudbal[44].domacin45
    gost45El.textContent = fudbal[44].gost45
    cetrdesetpetiPar1.textContent = fudbal[44].igra1
    cetrdesetpetiParX.textContent = fudbal[44].igraX
    cetrdesetpetiPar2.textContent = fudbal[44].igra2
    // FUDBAL PAR 46
    vreme46El.textContent = fudbal[45].vreme46
    domacin46El.textContent = fudbal[45].domacin46
    gost46El.textContent = fudbal[45].gost46
    cetrdesetsestiPar1.textContent = fudbal[45].igra1
    cetrdesetsestiParX.textContent = fudbal[45].igraX
    cetrdesetsestiPar2.textContent = fudbal[45].igra2
    // FUDBAL PAR 47
    vreme47El.textContent = fudbal[46].vreme47
    domacin47El.textContent = fudbal[46].domacin47
    gost47El.textContent = fudbal[46].gost47
    cetrdesetsedmiPar1.textContent = fudbal[46].igra1
    cetrdesetsedmiParX.textContent = fudbal[46].igraX
    cetrdesetsedmiPar2.textContent = fudbal[46].igra2
    // FUDBAL PAR 48
    vreme48El.textContent = fudbal[47].vreme48
    domacin48El.textContent = fudbal[47].domacin48
    gost48El.textContent = fudbal[47].gost48
    cetrdesetosmiPar1.textContent = fudbal[47].igra1
    cetrdesetosmiParX.textContent = fudbal[47].igraX
    cetrdesetosmiPar2.textContent = fudbal[47].igra2
    // FUDBAL PAR 49
    vreme49El.textContent = fudbal[48].vreme49
    domacin49El.textContent = fudbal[48].domacin49
    gost49El.textContent = fudbal[48].gost49
    cetrdesetdevetiPar1.textContent = fudbal[48].igra1
    cetrdesetdevetiParX.textContent = fudbal[48].igraX
    cetrdesetdevetiPar2.textContent = fudbal[48].igra2
    // FUDBAL PAR 50
    vreme50El.textContent = fudbal[49].vreme50
    domacin50El.textContent = fudbal[49].domacin50
    gost50El.textContent = fudbal[49].gost50
    pedesetiPar1.textContent = fudbal[49].igra1
    pedesetiParX.textContent = fudbal[49].igraX
    pedesetiPar2.textContent = fudbal[49].igra2
    // FUDBAL PAR 51
    vreme51El.textContent = fudbal[50].vreme51
    domacin51El.textContent = fudbal[50].domacin51
    gost51El.textContent = fudbal[50].gost51
    pedesetprviPar1.textContent = fudbal[50].igra1
    pedesetprviParX.textContent = fudbal[50].igraX
    pedesetprviPar2.textContent = fudbal[50].igra2
    // FUDBAL PAR 52
    vreme52El.textContent = fudbal[51].vreme52
    domacin52El.textContent = fudbal[51].domacin52
    gost52El.textContent = fudbal[51].gost52
    pedesetdrugiPar1.textContent = fudbal[51].igra1
    pedesetdrugiParX.textContent = fudbal[51].igraX
    pedesetdrugiPar2.textContent = fudbal[51].igra2
    // FUDBAL PAR 53
    vreme53El.textContent = fudbal[52].vreme53
    domacin53El.textContent = fudbal[52].domacin53
    gost53El.textContent = fudbal[52].gost53
    pedesettreciPar1.textContent = fudbal[52].igra1
    pedesettreciParX.textContent = fudbal[52].igraX
    pedesettreciPar2.textContent = fudbal[52].igra2
    // FUDBAL PAR 54
    vreme54El.textContent = fudbal[53].vreme54
    domacin54El.textContent = fudbal[53].domacin54
    gost54El.textContent = fudbal[53].gost54
    pedesetcetvrtiPar1.textContent = fudbal[53].igra1
    pedesetcetvrtiParX.textContent = fudbal[53].igraX
    pedesetcetvrtiPar2.textContent = fudbal[53].igra2
    // FUDBAL PAR 55
    vreme55El.textContent = fudbal[54].vreme55
    domacin55El.textContent = fudbal[54].domacin55
    gost55El.textContent = fudbal[54].gost55
    pedesetpetiPar1.textContent = fudbal[54].igra1
    pedesetpetiParX.textContent = fudbal[54].igraX
    pedesetpetiPar2.textContent = fudbal[54].igra2
    // FUDBAL PAR 56
    vreme56El.textContent = fudbal[55].vreme56
    domacin56El.textContent = fudbal[55].domacin56
    gost56El.textContent = fudbal[55].gost56
    pedesetsestiPar1.textContent = fudbal[55].igra1
    pedesetsestiParX.textContent = fudbal[55].igraX
    pedesetsestiPar2.textContent = fudbal[55].igra2
    FdbBtn.classList.add('active-btn')
    FdbBtn.style.border = "3px solid #40A3FF"
    FdbBtn.style.opacity = "1"

    FdbBtnSmall.classList.add('active-btn')
    FdbBtnSmall.style.border = "3px solid #40A3FF"
    FdbBtnSmall.style.opacity = "1"

    kosBtn.classList.remove('active-btn')
    kosBtn.style.border = "0px solid #40A3FF"
    kosBtn.style.opacity = ".7"

    kosBtnSmall.classList.remove('active-btn')
    kosBtnSmall.style.border = "0px solid #40A3FF"
    kosBtnSmall.style.opacity = ".7"

    tenBtn.classList.remove('active-btn')
    tenBtn.style.border = "0px solid #40A3FF"
    tenBtn.style.opacity = ".7"

    tenBtnSmall.classList.remove('active-btn')
    tenBtnSmall.style.border = "0px solid #40A3FF"
    tenBtnSmall.style.opacity = ".7"

    hokBtn.classList.remove('active-btn')
    hokBtn.style.border = "0px solid #40A3FF"
    hokBtn.style.opacity = ".7"

    hokBtnSmall.classList.remove('active-btn')
    hokBtnSmall.style.border = "0px solid #40A3FF"
    hokBtnSmall.style.opacity = ".7"

    rukBtn.classList.remove('active-btn')
    rukBtn.style.border = "0px solid #40A3FF"
    rukBtn.style.opacity = ".7"
    
    rukBtnSmall.classList.remove('active-btn')
    rukBtnSmall.style.border = "0px solid #40A3FF"
    rukBtnSmall.style.opacity = ".7"

    odbBtn.classList.remove('active-btn')
    odbBtn.style.border = "0px solid #40A3FF"
    odbBtn.style.opacity = ".7"
    
    odbBtnSmall.classList.remove('active-btn')
    odbBtnSmall.style.border = "0px solid #40A3FF"
    odbBtnSmall.style.opacity = ".7"

    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
}
fudbalFunction()

                                                                                        //KOSARKA

let kosarka = [
    {   // KOSARKA PAR 1
        domacin1: "Miami Heat",
        gost1: "LA Lakers",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 1.85,
        vreme1: "Uto. 03:00"
    },
    {   // KOSARKA PAR 2
        domacin2: "Sacramento Kings",
        gost2: "Utah Jazz",
        igra1: 2.25,
        igraX: 5.40,
        igra2: 3.85,
        vreme2: "Uto. 03:00"
    },
    {   // KOSARKA PAR 3
        domacin3: "Chicago Bulls",
        gost3: "Denver Nuggets",
        igra1: 2.95,
        igraX: 5.40,
        igra2: 2.05,
        vreme3: "Uto. 03:00"
    },
    {   // KOSARKA PAR 4
        domacin4: "Golden Gate",
        gost4: "Huston Rockets",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 2.35,
        vreme4: "Uto. 03:00"
    },
    {   // KOSARKA PAR 5
        domacin5: "Anadolu Efes",
        gost5: "Virtus Bologna",
        igra1: 1.45,
        igraX: 8.40,
        igra2: 3.85,
        vreme5: "Sre. 19:00"
    },
    {   // KOSARKA PAR 6
        domacin6: "Red Star",
        gost6: "Real Madrid",
        igra1: 2.35,
        igraX: 8.40,
        igra2: 2.85,
        vreme6: "Uto. 20:00"
    },
    {   // KOSARKA PAR 7
        domacin7: "Barcelona",
        gost7: "Partizan",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme7: "Uto. 20:00"
    },
    {   // KOSARKA PAR 8
        domacin8: "CSKA Moscow",
        gost8: "Fenerbahche",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.85,
        vreme8: "Uto. 18:00"
    },
    {   // KOSARKA PAR 9
        domacin9: "Boston Celtics",
        gost9: "Golden State Warriors",
        igra1: 2.25,
        igraX: 8.40,
        igra2: 3.45,
        vreme9: "Uto. 03:00"
    },
    {   // KOSARKA PAR 10
        domacin10: "Sacramento Kings",
        gost10: "Utah Jazz",
        igra1: 2.25,
        igraX: 9.40,
        igra2: 3.85,
        vreme10: "Uto. 03:00"
    },
    {   // KOSARKA PAR 11
        domacin11: "LA Clippers",
        gost11: "Oklahoma City",
        igra1: 3.95,
        igraX: 8.20,
        igra2: 1.65,
        vreme11: "Uto. 03:00"
    },
    {   // KOSARKA PAR 12
        domacin12: "New Orleans Pelicans",
        gost12: "Phoenix Suns",
        igra1: 3.15,
        igraX: 8.10,
        igra2: 3.25,
        vreme12: "Uto. 03:00"
    },
    {   // KOSARKA PAR 13
        domacin13: "Memphis Grizzlies",
        gost13: "Boston Celtics",
        igra1: 3.25,
        igraX: 4.30,
        igra2: 2.65,
        vreme13: "Sre. 09:00"
    },
    {   // KOSARKA PAR 14
        domacin14: "Orlando Magic",
        gost14: "Miami Heat",
        igra1: 3.65,
        igraX: 12.40,
        igra2: 1.85,
        vreme14: "Uto. 05:00"
    },
    {   // KOSARKA PAR 15
        domacin15: "New York Knicks",
        gost15: "Toronto Raptors",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.45,
        vreme15: "Uto. 05:00"
    },
    {   // KOSARKA PAR 16
        domacin16: "Detroit Pistons",
        gost16: "Philadelphia 76ers",
        igra1: 2.65,
        igraX: 12.40,
        igra2: 1.95,
        vreme16: "Uto. 05:00"
    },
    {   // KOSARKA PAR 17
        domacin17: "Bayern Munich",
        gost17: "Fenerbahçe Beko",
        igra1: 2.65,
        igraX: 13.40,
        igra2: 1.55,
        vreme17: "Sre. 19:30"
    },
    {   // KOSARKA PAR 18
        domacin18: "Valencia Basket",
        gost18: "Baskonia",
        igra1: 2.35,
        igraX: 7.40,
        igra2: 3.45,
        vreme18: "Sre. 19:30"
    },
    {   // KOSARKA PAR 19
        domacin19: "Žalgiris",
        gost19: "Olympiacos",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.25,
        vreme19: "Sre. 20:00"
    },
    {   // KOSARKA PAR 20
        domacin20: "Maccabi Tel Aviv",
        gost20: "LDLC ASVEL",
        igra1: 4.25,
        igraX: 13.40,
        igra2: 1.65,
        vreme20: "Sre. 20:00"
    },
    {   // KOSARKA PAR 21
        domacin21: "ALBA Berlin",
        gost21: "Panathinaikos",
        igra1: 3.45,
        igraX: 12.40,
        igra2: 1.85,
        vreme21: "Sre. 21:00"
    },
    {   // KOSARKA PAR 22
        domacin22: "Khimki",
        gost22: "UNICS",
        igra1: 2.75,
        igraX: 8.80,
        igra2: 2.15,
        vreme22: "Sre. 20:00"
    },
    {   // KOSARKA PAR 23
        domacin23: "Armani Milan",
        gost23: "Budućnost",
        igra1: 2.05,
        igraX: 12.10,
        igra2: 3.15,
        vreme23: "Sre. 20:00"
    },
    {   // KOSARKA PAR 24
        domacin24: "Unicaja",
        gost24: "Brose Bamberg",
        igra1: 2.85,
        igraX: 12.40,
        igra2: 1.95,
        vreme24: "Sre. 18:00"
    },
    {   // KOSARKA PAR 25
        domacin25: "Miami Heat",
        gost25: "LA Lakers",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 1.85,
        vreme25: "Uto. 03:00"
    },
    {   // KOSARKA PAR 26
        domacin26: "Sacramento Kings",
        gost26: "Utah Jazz",
        igra1: 2.25,
        igraX: 5.40,
        igra2: 3.85,
        vreme26: "Uto. 03:00"
    },
    {   // KOSARKA PAR 27
        domacin27: "Chicago Bulls",
        gost27: "Denver Nuggets",
        igra1: 2.95,
        igraX: 5.40,
        igra2: 2.05,
        vreme27: "Uto. 03:00"
    },
    {   // KOSARKA PAR 28
        domacin28: "Golden Gate",
        gost28: "Huston Rockets",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 2.35,
        vreme28: "Uto. 03:00"
    },
    {   // KOSARKA PAR 29
        domacin29: "Anadolu Efes",
        gost29: "Virtus Bologna",
        igra1: 1.45,
        igraX: 8.40,
        igra2: 3.85,
        vreme29: "Sre. 19:00"
    },
    {   // KOSARKA PAR 30
        domacin30: "Red Star",
        gost30: "Real Madrid",
        igra1: 2.35,
        igraX: 8.40,
        igra2: 2.85,
        vreme30: "Uto. 20:00"
    },
    {   // KOSARKA PAR 31
        domacin31: "Barcelona",
        gost31: "Partizan",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme31: "Uto. 20:00"
    },
    {   // KOSARKA PAR 32
        domacin32: "CSKA Moscow",
        gost32: "Fenerbahche",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.85,
        vreme32: "Uto. 18:00"
    },
    {   // KOSARKA PAR 33
        domacin33: "Boston Celtics",
        gost33: "Golden State Warriors",
        igra1: 2.25,
        igraX: 8.40,
        igra2: 3.45,
        vreme33: "Uto. 03:00"
    },
    {   // KOSARKA PAR 34
        domacin34: "Sacramento Kings",
        gost34: "Utah Jazz",
        igra1: 2.25,
        igraX: 9.40,
        igra2: 3.85,
        vreme34: "Uto. 03:00"
    },
    {   // KOSARKA PAR 35
        domacin35: "LA Clippers",
        gost35: "Oklahoma City",
        igra1: 3.95,
        igraX: 8.20,
        igra2: 1.65,
        vreme35: "Uto. 03:00"
    },
    {   // KOSARKA PAR 36
        domacin36: "New Orleans Pelicans",
        gost36: "Phoenix Suns",
        igra1: 3.15,
        igraX: 8.10,
        igra2: 3.25,
        vreme36: "Uto. 03:00"
    },
    {   // KOSARKA PAR 37
        domacin37: "Memphis Grizzlies",
        gost37: "Boston Celtics",
        igra1: 3.25,
        igraX: 4.30,
        igra2: 2.65,
        vreme37: "Sre. 09:00"
    },
    {   // KOSARKA PAR 38
        domacin38: "Orlando Magic",
        gost38: "Miami Heat",
        igra1: 3.65,
        igraX: 12.40,
        igra2: 1.85,
        vreme38: "Uto. 05:00"
    },
    {   // KOSARKA PAR 39
        domacin39: "New York Knicks",
        gost39: "Toronto Raptors",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.45,
        vreme39: "Uto. 05:00"
    },
    {   // KOSARKA PAR 40
        domacin40: "Detroit Pistons",
        gost40: "Philadelphia 76ers",
        igra1: 2.65,
        igraX: 12.40,
        igra2: 1.95,
        vreme40: "Uto. 05:00"
    },
    {   // KOSARKA PAR 41
        domacin41: "Bayern Munich",
        gost41: "Fenerbahçe Beko",
        igra1: 2.65,
        igraX: 13.40,
        igra2: 1.55,
        vreme41: "Sre. 19:30"
    },
    {   // KOSARKA PAR 42
        domacin42: "Valencia Basket",
        gost42: "Baskonia",
        igra1: 2.35,
        igraX: 7.40,
        igra2: 3.45,
        vreme42: "Sre. 19:30"
    },
    {   // KOSARKA PAR 43
        domacin43: "Žalgiris",
        gost43: "Olympiacos",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.25,
        vreme43: "Sre. 20:00"
    },
    {   // KOSARKA PAR 44
        domacin44: "Maccabi Tel Aviv",
        gost44: "LDLC ASVEL",
        igra1: 4.25,
        igraX: 13.40,
        igra2: 1.65,
        vreme44: "Sre. 20:00"
    },
    {   // KOSARKA PAR 45
        domacin45: "ALBA Berlin",
        gost45: "Panathinaikos",
        igra1: 3.45,
        igraX: 12.40,
        igra2: 1.85,
        vreme45: "Sre. 21:00"
    },
    {   // KOSARKA PAR 46
        domacin46: "Khimki",
        gost46: "UNICS",
        igra1: 2.75,
        igraX: 8.80,
        igra2: 2.15,
        vreme46: "Sre. 20:00"
    },
    {   // KOSARKA PAR 47
        domacin47: "Armani Milan",
        gost47: "Budućnost",
        igra1: 2.05,
        igraX: 12.10,
        igra2: 3.15,
        vreme47: "Sre. 20:00"
    },
    {   // KOSARKA PAR 48
        domacin48: "Unicaja",
        gost48: "Brose Bamberg",
        igra1: 2.85,
        igraX: 12.40,
        igra2: 1.95,
        vreme48: "Sre. 18:00"
    },
    {   // KOSARKA PAR 49
        domacin49: "Miami Heat",
        gost49: "LA Lakers",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 1.85,
        vreme49: "Uto. 03:00"
    },
    {   // KOSARKA PAR 50
        domacin50: "Sacramento Kings",
        gost50: "Utah Jazz",
        igra1: 2.25,
        igraX: 5.40,
        igra2: 3.85,
        vreme50: "Uto. 03:00"
    },
    {   // KOSARKA PAR 51
        domacin51: "Chicago Bulls",
        gost51: "Denver Nuggets",
        igra1: 2.95,
        igraX: 5.40,
        igra2: 2.05,
        vreme51: "Uto. 03:00"
    },
    {   // KOSARKA PAR 52
        domacin52: "Golden Gate",
        gost52: "Huston Rockets",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 2.35,
        vreme52: "Uto. 03:00"
    },
    {   // KOSARKA PAR 53
        domacin53: "Anadolu Efes",
        gost53: "Virtus Bologna",
        igra1: 1.45,
        igraX: 8.40,
        igra2: 3.85,
        vreme53: "Sre. 19:00"
    },
    {   // KOSARKA PAR 54
        domacin54: "Red Star",
        gost54: "Real Madrid",
        igra1: 2.35,
        igraX: 8.40,
        igra2: 2.85,
        vreme54: "Uto. 20:00"
    },
    {   // KOSARKA PAR 55
        domacin55: "Barcelona",
        gost55: "Partizan",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme55: "Uto. 20:00"
    },
    {   // KOSARKA PAR 56
        domacin56: "CSKA Moscow",
        gost56: "Fenerbahche",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.85,
        vreme56: "Uto. 18:00"
    },
]    

function kosarkaFunction() {

    // KOSARKA PAR 1
    vreme1El.textContent = kosarka[0].vreme1
    domacin1El.textContent = kosarka[0].domacin1
    gost1El.textContent = kosarka[0].gost1
    prviPar1.textContent = kosarka[0].igra1
    prviParX.textContent = kosarka[0].igraX
    prviPar2.textContent = kosarka[0].igra2
    // KOSARKA PAR 2
    vreme2El.textContent = kosarka[1].vreme2
    domacin2El.textContent = kosarka[1].domacin2
    gost2El.textContent = kosarka[1].gost2
    drugiPar1.textContent = kosarka[1].igra1
    drugiParX.textContent = kosarka[1].igraX
    drugiPar2.textContent = kosarka[1].igra2
    // KOSARKA PAR 3
    vreme3El.textContent = kosarka[2].vreme3
    domacin3El.textContent = kosarka[2].domacin3
    gost3El.textContent = kosarka[2].gost3
    treciPar1.textContent = kosarka[2].igra1
    treciParX.textContent = kosarka[2].igraX
    treciPar2.textContent = kosarka[2].igra2
    // KOSARKA PAR 4
    vreme4El.textContent = kosarka[3].vreme4
    domacin4El.textContent = kosarka[3].domacin4
    gost4El.textContent = kosarka[3].gost4
    cetvrtiPar1.textContent = kosarka[3].igra1
    cetvrtiParX.textContent = kosarka[3].igraX
    cetvrtiPar2.textContent = kosarka[3].igra2
    // KOSARKA PAR 5
    vreme5El.textContent = kosarka[4].vreme5
    domacin5El.textContent = kosarka[4].domacin5
    gost5El.textContent = kosarka[4].gost5
    petiPar1.textContent = kosarka[4].igra1
    petiParX.textContent = kosarka[4].igraX
    petiPar2.textContent = kosarka[4].igra2
    // KOSARKA PAR 6
    vreme6El.textContent = kosarka[5].vreme6
    domacin6El.textContent = kosarka[5].domacin6
    gost6El.textContent = kosarka[5].gost6
    sestiPar1.textContent = kosarka[5].igra1
    sestiParX.textContent = kosarka[5].igraX
    sestiPar2.textContent = kosarka[5].igra2
    // KOSARKA PAR 7
    vreme7El.textContent = kosarka[6].vreme7
    domacin7El.textContent = kosarka[6].domacin7
    gost7El.textContent = kosarka[6].gost7
    sedmiPar1.textContent = kosarka[6].igra1
    sedmiParX.textContent = kosarka[6].igraX
    sedmiPar2.textContent = kosarka[6].igra2
    // KOSARKA PAR 8
    vreme8El.textContent = kosarka[7].vreme8
    domacin8El.textContent = kosarka[7].domacin8
    gost8El.textContent = kosarka[7].gost8
    osmiPar1.textContent = kosarka[7].igra1
    osmiParX.textContent = kosarka[7].igraX
    osmiPar2.textContent = kosarka[7].igra2
    // KOSARKA PAR 9
    vreme9El.textContent = kosarka[8].vreme9
    domacin9El.textContent = kosarka[8].domacin9
    gost9El.textContent = kosarka[8].gost9
    devetiPar1.textContent = kosarka[8].igra1
    devetiParX.textContent = kosarka[8].igraX
    devetiPar2.textContent = kosarka[8].igra2
    // KOSARKA PAR 10
    vreme10El.textContent = kosarka[9].vreme10
    domacin10El.textContent = kosarka[9].domacin10
    gost10El.textContent = kosarka[9].gost10
    desetiPar1.textContent = kosarka[9].igra1
    desetiParX.textContent = kosarka[9].igraX
    desetiPar2.textContent = kosarka[9].igra2
    // KOSARKA PAR 11
    vreme11El.textContent = kosarka[10].vreme11
    domacin11El.textContent = kosarka[10].domacin11
    gost11El.textContent = kosarka[10].gost11
    desetiPar1.textContent = kosarka[10].igra1
    desetiParX.textContent = kosarka[10].igraX
    desetiPar2.textContent = kosarka[10].igra2
    // KOSARKA PAR 12
    vreme12El.textContent = kosarka[11].vreme12
    domacin12El.textContent = kosarka[11].domacin12
    gost12El.textContent = kosarka[11].gost12
    dvanaestiPar1.textContent = kosarka[11].igra1
    dvanaestiParX.textContent = kosarka[11].igraX
    dvanaestiPar2.textContent = kosarka[11].igra2
    // KOSARKA PAR 13
    vreme13El.textContent = kosarka[12].vreme13
    domacin13El.textContent = kosarka[12].domacin13
    gost13El.textContent = kosarka[12].gost13
    trinaestiPar1.textContent = kosarka[12].igra1
    trinaestiParX.textContent = kosarka[12].igraX
    trinaestiPar2.textContent = kosarka[12].igra2
    // KOSARKA PAR 14
    vreme14El.textContent = kosarka[13].vreme14
    domacin14El.textContent = kosarka[13].domacin14
    gost14El.textContent = kosarka[13].gost14
    cetrnaestiPar1.textContent = kosarka[13].igra1
    cetrnaestiParX.textContent = kosarka[13].igraX
    cetrnaestiPar2.textContent = kosarka[13].igra2
    // KOSARKA PAR 15
    vreme15El.textContent = kosarka[14].vreme15
    domacin15El.textContent = kosarka[14].domacin15
    gost15El.textContent = kosarka[14].gost15
    petnaestiPar1.textContent = kosarka[14].igra1
    petnaestiParX.textContent = kosarka[14].igraX
    petnaestiPar2.textContent = kosarka[14].igra2
    // KOSARKA PAR 16
    vreme16El.textContent = kosarka[15].vreme16
    domacin16El.textContent = kosarka[15].domacin16
    gost16El.textContent = kosarka[15].gost16
    sesnaestiPar1.textContent = kosarka[15].igra1
    sesnaestiParX.textContent = kosarka[15].igraX
    sesnaestiPar2.textContent = kosarka[15].igra2
    // KOSARKA PAR 17
    vreme17El.textContent = kosarka[16].vreme17
    domacin17El.textContent = kosarka[16].domacin17
    gost17El.textContent = kosarka[16].gost17
    sedamnaestiPar1.textContent = kosarka[16].igra1
    sedamnaestiParX.textContent = kosarka[16].igraX
    sedamnaestiPar2.textContent = kosarka[16].igra2
    // KOSARKA PAR 18
    vreme18El.textContent = kosarka[17].vreme18
    domacin18El.textContent = kosarka[17].domacin18
    gost18El.textContent = kosarka[17].gost18
    osamnaestiPar1.textContent = kosarka[17].igra1
    osamnaestiParX.textContent = kosarka[17].igraX
    osamnaestiPar2.textContent = kosarka[17].igra2
    // KOSARKA PAR 19
    vreme19El.textContent = kosarka[18].vreme19
    domacin19El.textContent = kosarka[18].domacin19
    gost19El.textContent = kosarka[18].gost19
    devetnaestiPar1.textContent = kosarka[18].igra1
    devetnaestiParX.textContent = kosarka[18].igraX
    devetnaestiPar2.textContent = kosarka[18].igra2
    // KOSARKA PAR 20
    vreme20El.textContent = kosarka[19].vreme20
    domacin20El.textContent = kosarka[19].domacin20
    gost20El.textContent = kosarka[19].gost20
    dvadesetiPar1.textContent = kosarka[19].igra1
    dvadesetiParX.textContent = kosarka[19].igraX
    dvadesetiPar2.textContent = kosarka[19].igra2
    // KOSARKA PAR 21
    vreme21El.textContent = kosarka[20].vreme21
    domacin21El.textContent = kosarka[20].domacin21
    gost21El.textContent = kosarka[20].gost21
    dvadesetprviPar1.textContent = kosarka[20].igra1
    dvadesetprviParX.textContent = kosarka[20].igraX
    dvadesetprviPar2.textContent = kosarka[20].igra2
    // KOSARKA PAR 22
    vreme22El.textContent = kosarka[21].vreme22
    domacin22El.textContent = kosarka[21].domacin22
    gost22El.textContent = kosarka[21].gost22
    dvadesetdrugiPar1.textContent = kosarka[21].igra1
    dvadesetdrugiParX.textContent = kosarka[21].igraX
    dvadesetdrugiPar2.textContent = kosarka[21].igra2
    // KOSARKA PAR 23
    vreme23El.textContent = kosarka[22].vreme23
    domacin23El.textContent = kosarka[22].domacin23
    gost23El.textContent = kosarka[22].gost23
    dvadesettreciPar1.textContent = kosarka[22].igra1
    dvadesettreciParX.textContent = kosarka[22].igraX
    dvadesettreciPar2.textContent = kosarka[22].igra2
    // KOSARKA PAR 24
    vreme24El.textContent = kosarka[23].vreme24
    domacin24El.textContent = kosarka[23].domacin24
    gost24El.textContent = kosarka[23].gost24
    dvadesetcetvrtiPar1.textContent = kosarka[23].igra1
    dvadesetcetvrtiParX.textContent = kosarka[23].igraX
    dvadesetcetvrtiPar2.textContent = kosarka[23].igra2
    // KOSARKA PAR 25
    vreme25El.textContent = kosarka[24].vreme25
    domacin25El.textContent = kosarka[24].domacin25
    gost25El.textContent = kosarka[24].gost25
    dvadesetpetiPar1.textContent = kosarka[24].igra1
    dvadesetpetiParX.textContent = kosarka[24].igraX
    dvadesetpetiPar2.textContent = kosarka[24].igra2
    // KOSARKA PAR 26
    vreme26El.textContent = kosarka[25].vreme26
    domacin26El.textContent = kosarka[25].domacin26
    gost26El.textContent = kosarka[25].gost26
    dvadesetsestiPar1.textContent = kosarka[25].igra1
    dvadesetsestiParX.textContent = kosarka[25].igraX
    dvadesetsestiPar2.textContent = kosarka[25].igra2
    // KOSARKA PAR 27
    vreme27El.textContent = kosarka[26].vreme27
    domacin27El.textContent = kosarka[26].domacin27
    gost27El.textContent = kosarka[26].gost27
    dvadesetsedmiPar1.textContent = kosarka[26].igra1
    dvadesetsedmiParX.textContent = kosarka[26].igraX
    dvadesetsedmiPar2.textContent = kosarka[26].igra2
    // KOSARKA PAR 28
    vreme28El.textContent = kosarka[27].vreme28
    domacin28El.textContent = kosarka[27].domacin28
    gost28El.textContent = kosarka[27].gost28
    dvadesetosmiPar1.textContent = kosarka[27].igra1
    dvadesetosmiParX.textContent = kosarka[27].igraX
    dvadesetosmiPar2.textContent = kosarka[27].igra2
    // KOSARKA PAR 29
    vreme29El.textContent = kosarka[28].vreme29
    domacin29El.textContent = kosarka[28].domacin29
    gost29El.textContent = kosarka[28].gost29
    dvadesetdevetiPar1.textContent = kosarka[28].igra1
    dvadesetdevetiParX.textContent = kosarka[28].igraX
    dvadesetdevetiPar2.textContent = kosarka[28].igra2
    // KOSARKA PAR 30
    vreme30El.textContent = kosarka[29].vreme30
    domacin30El.textContent = kosarka[29].domacin30
    gost30El.textContent = kosarka[29].gost30
    tridesetiPar1.textContent = kosarka[29].igra1
    tridesetiParX.textContent = kosarka[29].igraX
    tridesetiPar2.textContent = kosarka[29].igra2
    // KOSARKA PAR 31
    vreme31El.textContent = kosarka[30].vreme31
    domacin31El.textContent = kosarka[30].domacin31
    gost31El.textContent = kosarka[30].gost31
    tridesetprviPar1.textContent = kosarka[30].igra1
    tridesetprviParX.textContent = kosarka[30].igraX
    tridesetprviPar2.textContent = kosarka[30].igra2
    // KOSARKA PAR 32
    vreme32El.textContent = kosarka[31].vreme32
    domacin32El.textContent = kosarka[31].domacin32
    gost32El.textContent = kosarka[31].gost32
    tridesetdrugiPar1.textContent = kosarka[31].igra1
    tridesetdrugiParX.textContent = kosarka[31].igraX
    tridesetdrugiPar2.textContent = kosarka[31].igra2
    // KOSARKA PAR 33
    vreme33El.textContent = kosarka[32].vreme33
    domacin33El.textContent = kosarka[32].domacin33
    gost33El.textContent = kosarka[32].gost33
    tridesettreciPar1.textContent = kosarka[32].igra1
    tridesettreciParX.textContent = kosarka[32].igraX
    tridesettreciPar2.textContent = kosarka[32].igra2
    // KOSARKA PAR 34
    vreme34El.textContent = kosarka[33].vreme34
    domacin34El.textContent = kosarka[33].domacin34
    gost34El.textContent = kosarka[33].gost34
    tridesetcetvrtiPar1.textContent = kosarka[33].igra1
    tridesetcetvrtiParX.textContent = kosarka[33].igraX
    tridesetcetvrtiPar2.textContent = kosarka[33].igra2
    // KOSARKA PAR 35
    vreme35El.textContent = kosarka[34].vreme35
    domacin35El.textContent = kosarka[34].domacin35
    gost35El.textContent = kosarka[34].gost35
    tridesetpetiPar1.textContent = kosarka[34].igra1
    tridesetpetiParX.textContent = kosarka[34].igraX
    tridesetpetiPar2.textContent = kosarka[34].igra2
    // KOSARKA PAR 36
    vreme36El.textContent = kosarka[35].vreme36
    domacin36El.textContent = kosarka[35].domacin36
    gost36El.textContent = kosarka[35].gost36
    tridesetsestiPar1.textContent = kosarka[35].igra1
    tridesetsestiParX.textContent = kosarka[35].igraX
    tridesetsestiPar2.textContent = kosarka[35].igra2
    // KOSARKA PAR 37
    vreme37El.textContent = kosarka[36].vreme37
    domacin37El.textContent = kosarka[36].domacin37
    gost37El.textContent = kosarka[36].gost37
    tridesetsedmiPar1.textContent = kosarka[36].igra1
    tridesetsedmiParX.textContent = kosarka[36].igraX
    tridesetsedmiPar2.textContent = kosarka[36].igra2
    // KOSARKA PAR 38
    vreme38El.textContent = kosarka[37].vreme38
    domacin38El.textContent = kosarka[37].domacin38
    gost38El.textContent = kosarka[37].gost38
    tridesetosmiPar1.textContent = kosarka[37].igra1
    tridesetosmiParX.textContent = kosarka[37].igraX
    tridesetosmiPar2.textContent = kosarka[37].igra2
    // KOSARKA PAR 39
    vreme39El.textContent = kosarka[38].vreme39
    domacin39El.textContent = kosarka[38].domacin39
    gost39El.textContent = kosarka[38].gost39
    tridesetdevetiPar1.textContent = kosarka[38].igra1
    tridesetdevetiParX.textContent = kosarka[38].igraX
    tridesetdevetiPar2.textContent = kosarka[38].igra2
    // KOSARKA PAR 40
    vreme40El.textContent = kosarka[39].vreme40
    domacin40El.textContent = kosarka[39].domacin40
    gost40El.textContent = kosarka[39].gost40
    cetrdesetiPar1.textContent = kosarka[39].igra1
    cetrdesetiParX.textContent = kosarka[39].igraX
    cetrdesetiPar2.textContent = kosarka[39].igra2
    // KOSARKA PAR 41
    vreme41El.textContent = kosarka[40].vreme41
    domacin41El.textContent = kosarka[40].domacin41
    gost41El.textContent = kosarka[40].gost41
    cetrdesetprviPar1.textContent = kosarka[40].igra1
    cetrdesetprviParX.textContent = kosarka[40].igraX
    cetrdesetprviPar2.textContent = kosarka[40].igra2
    // KOSARKA PAR 42
    vreme42El.textContent = kosarka[41].vreme42
    domacin42El.textContent = kosarka[41].domacin42
    gost42El.textContent = kosarka[41].gost42
    cetrdesetdrugiPar1.textContent = kosarka[41].igra1
    cetrdesetdrugiParX.textContent = kosarka[41].igraX
    cetrdesetdrugiPar2.textContent = kosarka[41].igra2
    // KOSARKA PAR 43
    vreme43El.textContent = kosarka[42].vreme43
    domacin43El.textContent = kosarka[42].domacin43
    gost43El.textContent = kosarka[42].gost43
    cetrdesettreciPar1.textContent = kosarka[42].igra1
    cetrdesettreciParX.textContent = kosarka[42].igraX
    cetrdesettreciPar2.textContent = kosarka[42].igra2
    // KOSARKA PAR 44
    vreme44El.textContent = kosarka[43].vreme44
    domacin44El.textContent = kosarka[43].domacin44
    gost44El.textContent = kosarka[43].gost44
    cetrdesetcetvrtiPar1.textContent = kosarka[43].igra1
    cetrdesetcetvrtiParX.textContent = kosarka[43].igraX
    cetrdesetcetvrtiPar2.textContent = kosarka[43].igra2
    // KOSARKA PAR 45
    vreme45El.textContent = kosarka[44].vreme45
    domacin45El.textContent = kosarka[44].domacin45
    gost45El.textContent = kosarka[44].gost45
    cetrdesetpetiPar1.textContent = kosarka[44].igra1
    cetrdesetpetiParX.textContent = kosarka[44].igraX
    cetrdesetpetiPar2.textContent = kosarka[44].igra2
    // KOSARKA PAR 46
    vreme46El.textContent = kosarka[45].vreme46
    domacin46El.textContent = kosarka[45].domacin46
    gost46El.textContent = kosarka[45].gost46
    cetrdesetsestiPar1.textContent = kosarka[45].igra1
    cetrdesetsestiParX.textContent = kosarka[45].igraX
    cetrdesetsestiPar2.textContent = kosarka[45].igra2
    // KOSARKA PAR 47
    vreme47El.textContent = kosarka[46].vreme47
    domacin47El.textContent = kosarka[46].domacin47
    gost47El.textContent = kosarka[46].gost47
    cetrdesetsedmiPar1.textContent = kosarka[46].igra1
    cetrdesetsedmiParX.textContent = kosarka[46].igraX
    cetrdesetsedmiPar2.textContent = kosarka[46].igra2
    // KOSARKA PAR 48
    vreme48El.textContent = kosarka[47].vreme48
    domacin48El.textContent = kosarka[47].domacin48
    gost48El.textContent = kosarka[47].gost48
    cetrdesetosmiPar1.textContent = kosarka[47].igra1
    cetrdesetosmiParX.textContent = kosarka[47].igraX
    cetrdesetosmiPar2.textContent = kosarka[47].igra2
    // KOSARKA PAR 49
    vreme49El.textContent = kosarka[48].vreme49
    domacin49El.textContent = kosarka[48].domacin49
    gost49El.textContent = kosarka[48].gost49
    cetrdesetdevetiPar1.textContent = kosarka[48].igra1
    cetrdesetdevetiParX.textContent = kosarka[48].igraX
    cetrdesetdevetiPar2.textContent = kosarka[48].igra2
    // KOSARKA PAR 50
    vreme50El.textContent = kosarka[49].vreme50
    domacin50El.textContent = kosarka[49].domacin50
    gost50El.textContent = kosarka[49].gost50
    drugiPar1.textContent = kosarka[49].igra1
    drugiParX.textContent = kosarka[49].igraX
    drugiPar2.textContent = kosarka[49].igra2
    // KOSARKA PAR 51
    vreme51El.textContent = kosarka[50].vreme51
    domacin51El.textContent = kosarka[50].domacin51
    gost51El.textContent = kosarka[50].gost51
    pedesetprviPar1.textContent = kosarka[50].igra1
    pedesetprviParX.textContent = kosarka[50].igraX
    pedesetprviPar2.textContent = kosarka[50].igra2
    // KOSARKA PAR 52
    vreme52El.textContent = kosarka[51].vreme52
    domacin52El.textContent = kosarka[51].domacin52
    gost52El.textContent = kosarka[51].gost52
    pedesetdrugiPar1.textContent = kosarka[51].igra1
    pedesetdrugiParX.textContent = kosarka[51].igraX
    pedesetdrugiPar2.textContent = kosarka[51].igra2
    // KOSARKA PAR 53
    vreme53El.textContent = kosarka[52].vreme53
    domacin53El.textContent = kosarka[52].domacin53
    gost53El.textContent = kosarka[52].gost53
    pedesettreciPar1.textContent = kosarka[52].igra1
    pedesettreciParX.textContent = kosarka[52].igraX
    pedesettreciPar2.textContent = kosarka[52].igra2
    // KOSARKA PAR 54
    vreme54El.textContent = kosarka[53].vreme54
    domacin54El.textContent = kosarka[53].domacin54
    gost54El.textContent = kosarka[53].gost54
    pedesetcetvrtiPar1.textContent = kosarka[53].igra1
    pedesetcetvrtiParX.textContent = kosarka[53].igraX
    pedesetcetvrtiPar2.textContent = kosarka[53].igra2
    // KOSARKA PAR 55
    vreme55El.textContent = kosarka[54].vreme55
    domacin55El.textContent = kosarka[54].domacin55
    gost55El.textContent = kosarka[54].gost55
    pedesetpetiPar1.textContent = kosarka[54].igra1
    pedesetpetiParX.textContent = kosarka[54].igraX
    pedesetpetiPar2.textContent = kosarka[54].igra2
    // KOSARKA PAR 56
    vreme56El.textContent = kosarka[55].vreme56
    domacin56El.textContent = kosarka[55].domacin56
    gost56El.textContent = kosarka[55].gost56
    pedesetsestiPar1.textContent = kosarka[55].igra1
    pedesetsestiParX.textContent = kosarka[55].igraX
    pedesetsestiPar2.textContent = kosarka[55].igra2

    FdbBtn.classList.remove('active-btn')
    FdbBtn.style.border = "0px solid #40A3FF"
    FdbBtn.style.opacity = ".7"

    FdbBtnSmall.classList.remove('active-btn')
    FdbBtnSmall.style.border = "0px solid #40A3FF"
    FdbBtnSmall.style.opacity = ".7"

    kosBtn.classList.add('active-btn')
    kosBtn.style.border = "3px solid #40A3FF"
    kosBtn.style.opacity = "1"

    kosBtnSmall.classList.add('active-btn')
    kosBtnSmall.style.border = "3px solid #40A3FF"
    kosBtnSmall.style.opacity = "1"

    tenBtn.classList.remove('active-btn')
    tenBtn.style.border = "0px solid #40A3FF"
    tenBtn.style.opacity = ".7"

    tenBtnSmall.classList.remove('active-btn')
    tenBtnSmall.style.border = "0px solid #40A3FF"
    tenBtnSmall.style.opacity = ".7"

    hokBtn.classList.remove('active-btn')
    hokBtn.style.border = "0px solid #40A3FF"
    hokBtn.style.opacity = ".7"

    hokBtnSmall.classList.remove('active-btn')
    hokBtnSmall.style.border = "0px solid #40A3FF"
    hokBtnSmall.style.opacity = ".7"

    rukBtn.classList.remove('active-btn')
    rukBtn.style.border = "0px solid #40A3FF"
    rukBtn.style.opacity = ".7"
    
    rukBtnSmall.classList.remove('active-btn')
    rukBtnSmall.style.border = "0px solid #40A3FF"
    rukBtnSmall.style.opacity = ".7"

    odbBtn.classList.remove('active-btn')
    odbBtn.style.border = "0px solid #40A3FF"
    odbBtn.style.opacity = ".7"
    
    odbBtnSmall.classList.remove('active-btn')
    odbBtnSmall.style.border = "0px solid #40A3FF"
    odbBtnSmall.style.opacity = ".7"
    
    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
}

// KOSARKA BTN FUNCTION
const kosarkaBtn = document.querySelectorAll('.kosarka-btn')
for (i = 0; i < kosarkaBtn.length; i++) {
    kosarkaBtn[i].addEventListener('click', () => {
        kosarkaFunction()
    });
}

                                                                        // TENIS

let tenis = [
    {   // TENIS PAR 1
        domacin1: "Novak Djokovic",
        gost1: "Rafael Nadal",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.45,
        vreme1: "Sub. 13:00"
    },
    {   // TENIS PAR 2
        domacin2: "Rafael Nadal",
        gost2: "Andy Murray",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme2: "Uto. 16:00"
    },
    {   // TENIS PAR 3
        domacin3: "Daniili Medvedev",
        gost3: "Alexander Zverev",
        igra1: 2.75,
        igraX: "-",
        igra2: 2.15,
        vreme3: "Uto. 19:00"
    },
    {   // TENIS PAR 4
        domacin4: "Stefanos Tsitsipas",
        gost4: "Carlos Alcaraz",
        igra1: 3.25,
        igraX: "-",
        igra2: 2.35,
        vreme4: "Sre. 13:00"
    },
    {   // TENIS PAR 5
        domacin5: "Andrey Rublev",
        gost5: "Casper Ruud",
        igra1: 1.95,
        igraX: "-",
        igra2: 3.45,
        vreme5: "Sre. 16:00"
    },
    {   // TENIS PAR 6
        domacin6: "Matteo Berrettini",
        gost6: "Auger-Aliassime",
        igra1: 2.05,
        igraX: "-",
        igra2: 3.35,
        vreme6: "Sre. 19:00"
    },
    {   // TENIS PAR 7
        domacin7: "Cameron Norrie",
        gost7: "Jannik Sinner",
        igra1: 1.85,
        igraX: "-",
        igra2: 3.95,
        vreme7: "Cet. 16:00"
    },
    {   // TENIS PAR 8
        domacin8: "Hubert Hurkacz",
        gost8: "Taylor Fritz",
        igra1: 2.25,
        igraX: "-",
        igra2: 2.45,
        vreme8: "Cet. 19:00"
    },
    {   // TENIS PAR 9
        domacin9: "Diego Schwartzman",
        gost9: "Denis Shapovalov",
        igra1: 1.25,
        igraX: "-",
        igra2: 4.55,
        vreme9: "Sub. 16:00"
    },
    {   // TENIS PAR 10
        domacin10: "Reilly Opelka",
        gost10: "Pablo Carreno Busta",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme10: "Sub. 18:00"
    },
    {   // TENIS PAR 11
        domacin11: "Roberto Bautista Agut",
        gost11: "Grigor Dimitrov",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme11: "Uto. 19:00"
    },
    {   // TENIS PAR 12
        domacin12: "Alex de Minaur",
        gost12: "Karen Khachanov",
        igra1: 5.25,
        igraX: "-",
        igra2: 1.45,
        vreme12: "Pet. 00:00"
    },
    {   // TENIS PAR 13
        domacin13: "Gael Monfils",
        gost13: "John Isner",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme13: "Sre. 16:00"
    },
    {   // TENIS PAR 14
        domacin14: "Nikoloz Basilashvili",
        gost14: "Frances Tiafoe",
        igra1: 3.15,
        igraX: "-",
        igra2: 1.65,
        vreme14: "Pon. 19:00"
    },
    {   // TENIS PAR 15
        domacin15: "Holger Rune",
        gost15: "Alejandro Davidovich",
        igra1: 1.95,
        igraX: "-",
        igra2: 2.25,
        vreme15: "Pon. 16:00"
    },
    {   // TENIS PAR 16
        domacin16: "Miomir Kecmanovic",
        gost16: "Lorenzo Sonego",
        igra1: 2.15,
        igraX: "-",
        igra2: 2.25,
        vreme16: "Cet. 19:00"
    },
    {   // TENIS PAR 17
        domacin17: "Cristian Garin",
        gost17: "Jenson Brooksby",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.55,
        vreme17: "Cet. 14:30"
    },
    {   // TENIS PAR 18
        domacin18: "Daniel Evans",
        gost18: "Sebastian Baez",
        igra1: 2.35,
        igraX: "-",
        igra2: 3.45,
        vreme18: "Sre. 20:15"
    },
    {   // TENIS PAR 19
        domacin19: "Lloyd Harris",
        gost19: "Tommy Paul",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.25,
        vreme19: "Sre. 20:00"
    },
    {   // TENIS PAR 20
        domacin20: "Sebastian Korda",
        gost20: "Aslan Karatsev",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme20: "Pon. 13:00"
    },
    {   // TENIS PAR 21
        domacin21: "David Goffin",
        gost21: "Alexander Bublik",
        igra1: 2.35,
        igraX: "-",
        igra2: 1.55,
        vreme21: "Sre. 21:00"
    },
    {   // TENIS PAR 22
        domacin22: "Albert Ramos",
        gost22: "Francisco Cerundolo",
        igra1: 2.15,
        igraX: "-",
        igra2: 1.85,
        vreme22: "Sre. 13:30"
    },
    {   // TENIS PAR 23
        domacin23: "Pedro Martinez",
        gost23: "Alex Molcan",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.15,
        vreme23: "Uto. 10:00"
    },
    {   // TENIS PAR 24
        domacin24: "Filip Krajinovic",
        gost24: "Ugo Humbert",
        igra1: 2.05,
        igraX: "-",
        igra2: 1.85,
        vreme24: "Uto. 13:00"
    },
    {   // TENIS PAR 25
        domacin25: "Ilya Ivashka",
        gost25: "Mackenzie McDonald",
        igra1: 1.85,
        igraX: "-",
        igra2: 2.35,
        vreme25: "Uto. 16:00"
    },
    {   // TENIS PAR 26
        domacin26: "Fabio Fognini",
        gost26: "Marcos Giron",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.85,
        vreme26: "Uto. 23:00"
    },
    {   // TENIS PAR 27
        domacin27: "Laslo Djere",
        gost27: "Marton Fucsovics",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.65,
        vreme27: "Uto. 23:00"
    },
    {   // TENIS PAR 28
        domacin28: "Tallon Griekspoor",
        gost28: "Lorenzo Musetti",
        igra1: 1.45,
        igraX: "-",
        igra2: 4.35,
        vreme28: "Uto. 23:00"
    },
    {   // TENIS PAR 29
        domacin29: "Benjamin Bonzi",
        gost29: "Daniel Altmaier",
        igra1: 1.75,
        igraX: "-",
        igra2: 2.25,
        vreme29: "Sre. 13:00"
    },
    {   // TENIS PAR 30
        domacin30: "Arthur Rinderknech",
        gost30: "Oscar Otte",
        igra1: 2.15,
        igraX: "-",
        igra2: 2.45,
        vreme30: "Sre. 20:00"
    },
    {   // TENIS PAR 31
        domacin31: "Emil Ruusuvuori",
        gost31: "Joao Sousa",
        igra1: 2.45,
        igraX: "-",
        igra2: 2.15,
        vreme31: "Sre. 20:00"
    },
    {   // TENIS PAR 32
        domacin32: "Brandon Nakashima",
        gost32: "Federico Coria",
        igra1: 1.65,
        igraX: "-",
        igra2: 3.85,
        vreme32: "Uto. 18:00"
    },
    {   // KOSARKA PAR 33
        domacin33: "Iga Świątek",
        gost33: "Anett Kontaveit",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.45,
        vreme33: "Uto. 03:00"
    },
    {   // TENIS PAR 34
        domacin34: "Paula Badosa",
        gost34: "Ons Jabeur",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.85,
        vreme34: "Uto. 03:00"
    },
    {   // TENIS PAR 35
        domacin35: "Maria Sakkari",
        gost35: "Aryna Sabalenka",
        igra1: 3.95,
        igraX: "-",
        igra2: 1.65,
        vreme35: "Uto. 03:00"
    },
    {   // TENIS PAR 36
        domacin36: "Karolína Plíšková",
        gost36: "Jessica Pegula",
        igra1: 3.15,
        igraX: "-",
        igra2: 3.25,
        vreme36: "Uto. 03:00"
    },
    {   // TENIS PAR 37
        domacin37: "Danielle Collins",
        gost37: "Garbiñe Muguruza",
        igra1: 3.25,
        igraX: "-",
        igra2: 2.65,
        vreme37: "Sre. 09:00"
    },
    {   // TENIS PAR 38
        domacin38: "Emma Raducanu",
        gost38: "Daria Kasatkina",
        igra1: 3.65,
        igraX: "-",
        igra2: 1.85,
        vreme38: "Uto. 05:00"
    },
    {   // TENIS PAR 39
        domacin39: "Cori Gauff",
        gost39: "Barbora Krejčíková",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.45,
        vreme39: "Uto. 05:00"
    },
    {   // TENIS PAR 40
        domacin40: "Leylah Fernandez",
        gost40: "Jeļena Ostapenko",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.95,
        vreme40: "Uto. 05:00"
    },
    {   // TENIS PAR 41
        domacin41: "Belinda Bencic",
        gost41: "Angelique Kerber",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.55,
        vreme41: "Sre. 19:30"
    },
    {   // TENIS PAR 42
        domacin42: "Victoria Azarenka",
        gost42: "Simona Halep",
        igra1: 2.35,
        igraX: "-",
        igra2: 3.45,
        vreme42: "Sre. 19:30"
    },
    {   // TENIS PAR 43
        domacin43: "Elena Rybakina",
        gost43: "Jil Teichmann",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.25,
        vreme43: "Sre. 20:00"
    },
    {   // TENIS PAR 44
        domacin44: "Madison Keys",
        gost44: "Veronika Kudermetova",
        igra1: 4.25,
        igraX: "-",
        igra2: 1.65,
        vreme44: "Sre. 20:00"
    },
    {   // TENIS PAR 45
        domacin45: "Amanda Anisimova",
        gost45: "Camila Giorgi",
        igra1: 3.45,
        igraX: "-",
        igra2: 1.85,
        vreme45: "Sre. 21:00"
    },
    {   // TENIS PAR 46
        domacin46: "Martina Trevisan",
        gost46: "Ludmilla Samsonova",
        igra1: 2.75,
        igraX: "-",
        igra2: 2.15,
        vreme46: "Sre. 20:00"
    },
    {   // TENIS PAR 47
        domacin47: "Elise Mertens",
        gost47: "Ekaterina Alexandrova",
        igra1: 2.05,
        igraX: "-",
        igra2: 3.15,
        vreme47: "Sre. 20:00"
    },
    {   // TENIS PAR 48
        domacin48: "Petra Kvitová",
        gost48: "Yulia Putintseva",
        igra1: 2.85,
        igraX: "-",
        igra2: 1.95,
        vreme48: "Sre. 18:00"
    },
    {   // TENIS PAR 49
        domacin49: "Alizé Cornet",
        gost49: "Sorana Cîrstea",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme49: "Uto. 03:00"
    },
    {   // TENIS PAR 50
        domacin50: "Aliaksandra Sasnovich",
        gost50: "Anhelina Kalinina",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.85,
        vreme50: "Uto. 03:00"
    },
    {   // TENIS PAR 51
        domacin51: "Chicago Bulls",
        gost51: "Denver Nuggets",
        igra1: 2.95,
        igraX: "-",
        igra2: 2.05,
        vreme51: "Uto. 03:00"
    },
    {   // TENIS PAR 52
        domacin52: "Elina Svitolina",
        gost52: "Kaia Kanepi",
        igra1: 3.25,
        igraX: "-",
        igra2: 2.35,
        vreme52: "Uto. 03:00"
    },
    {   // TENIS PAR 53
        domacin53: "Sara Sorribes",
        gost53: "Alison Riske",
        igra1: 1.45,
        igraX: "-",
        igra2: 3.85,
        vreme53: "Sre. 19:00"
    },
    {   // TENIS PAR 54
        domacin54: "Shuai Zhang",
        gost54: "Shelby Rogers",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.85,
        vreme54: "Uto. 20:00"
    },
    {   // TENIS PAR 55
        domacin55: "Naomi Osaka",
        gost55: "Mayar Sherif",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.45,
        vreme55: "Uto. 20:00"
    },
    {   // TENIS PAR 56
        domacin56: "Ajla Tomljanović",
        gost56: "Sloane Stephens",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.85,
        vreme56: "Uto. 18:00"
    },
]  

function tenisFunction() {

    // TENIS PAR 1
    vreme1El.textContent = tenis[0].vreme1
    domacin1El.textContent = tenis[0].domacin1
    gost1El.textContent = tenis[0].gost1
    prviPar1.textContent = tenis[0].igra1
    prviParX.textContent = tenis[0].igraX
    prviPar2.textContent = tenis[0].igra2
    // TENIS PAR 2
    vreme2El.textContent = tenis[1].vreme2
    domacin2El.textContent = tenis[1].domacin2
    gost2El.textContent = tenis[1].gost2
    drugiPar1.textContent = tenis[1].igra1
    drugiParX.textContent = tenis[1].igraX
    drugiPar2.textContent = tenis[1].igra2
    // TENIS PAR 3
    vreme3El.textContent = tenis[2].vreme3
    domacin3El.textContent = tenis[2].domacin3
    gost3El.textContent = tenis[2].gost3
    treciPar1.textContent = tenis[2].igra1
    treciParX.textContent = tenis[2].igraX
    treciPar2.textContent = tenis[2].igra2
    // TENIS PAR 4
    vreme4El.textContent = tenis[3].vreme4
    domacin4El.textContent = tenis[3].domacin4
    gost4El.textContent = tenis[3].gost4
    cetvrtiPar1.textContent = tenis[3].igra1
    cetvrtiParX.textContent = tenis[3].igraX
    cetvrtiPar2.textContent = tenis[3].igra2
    // TENIS PAR 5
    vreme5El.textContent = tenis[4].vreme5
    domacin5El.textContent = tenis[4].domacin5
    gost5El.textContent = tenis[4].gost5
    petiPar1.textContent = tenis[4].igra1
    petiParX.textContent = tenis[4].igraX
    petiPar2.textContent = tenis[4].igra2
    // TENIS PAR 6
    vreme6El.textContent = tenis[5].vreme6
    domacin6El.textContent = tenis[5].domacin6
    gost6El.textContent = tenis[5].gost6
    sestiPar1.textContent = tenis[5].igra1
    sestiParX.textContent = tenis[5].igraX
    sestiPar2.textContent = tenis[5].igra2
    // TENIS PAR 7
    vreme7El.textContent = tenis[6].vreme7
    domacin7El.textContent = tenis[6].domacin7
    gost7El.textContent = tenis[6].gost7
    sedmiPar1.textContent = tenis[6].igra1
    sedmiParX.textContent = tenis[6].igraX
    sedmiPar2.textContent = tenis[6].igra2
    // TENIS PAR 8
    vreme8El.textContent = tenis[7].vreme8
    domacin8El.textContent = tenis[7].domacin8
    gost8El.textContent = tenis[7].gost8
    osmiPar1.textContent = tenis[7].igra1
    osmiParX.textContent = tenis[7].igraX
    osmiPar2.textContent = tenis[7].igra2
    // TENIS PAR 9
    vreme9El.textContent = tenis[8].vreme9
    domacin9El.textContent = tenis[8].domacin9
    gost9El.textContent = tenis[8].gost9
    devetiPar1.textContent = tenis[8].igra1
    devetiParX.textContent = tenis[8].igraX
    devetiPar2.textContent = tenis[8].igra2
    // TENIS PAR 10
    vreme10El.textContent = tenis[9].vreme10
    domacin10El.textContent = tenis[9].domacin10
    gost10El.textContent = tenis[9].gost10
    desetiPar1.textContent = tenis[9].igra1
    desetiParX.textContent = tenis[9].igraX
    desetiPar2.textContent = tenis[9].igra2
    // TENIS PAR 11
    vreme11El.textContent = tenis[10].vreme11
    domacin11El.textContent = tenis[10].domacin11
    gost11El.textContent = tenis[10].gost11
    desetiPar1.textContent = tenis[10].igra1
    desetiParX.textContent = tenis[10].igraX
    desetiPar2.textContent = tenis[10].igra2
    // TENIS PAR 12
    vreme12El.textContent = tenis[11].vreme12
    domacin12El.textContent = tenis[11].domacin12
    gost12El.textContent = tenis[11].gost12
    dvanaestiPar1.textContent = tenis[11].igra1
    dvanaestiParX.textContent = tenis[11].igraX
    dvanaestiPar2.textContent = tenis[11].igra2
    // TENIS PAR 13
    vreme13El.textContent = tenis[12].vreme13
    domacin13El.textContent = tenis[12].domacin13
    gost13El.textContent = tenis[12].gost13
    trinaestiPar1.textContent = tenis[12].igra1
    trinaestiParX.textContent = tenis[12].igraX
    trinaestiPar2.textContent = tenis[12].igra2
    // TENIS PAR 14
    vreme14El.textContent = tenis[13].vreme14
    domacin14El.textContent = tenis[13].domacin14
    gost14El.textContent = tenis[13].gost14
    cetrnaestiPar1.textContent = tenis[13].igra1
    cetrnaestiParX.textContent = tenis[13].igraX
    cetrnaestiPar2.textContent = tenis[13].igra2
    // TENIS PAR 15
    vreme15El.textContent = tenis[14].vreme15
    domacin15El.textContent = tenis[14].domacin15
    gost15El.textContent = tenis[14].gost15
    petnaestiPar1.textContent = tenis[14].igra1
    petnaestiParX.textContent = tenis[14].igraX
    petnaestiPar2.textContent = tenis[14].igra2
    // TENIS PAR 16
    vreme16El.textContent = tenis[15].vreme16
    domacin16El.textContent = tenis[15].domacin16
    gost16El.textContent = tenis[15].gost16
    sesnaestiPar1.textContent = tenis[15].igra1
    sesnaestiParX.textContent = tenis[15].igraX
    sesnaestiPar2.textContent = tenis[15].igra2
    // TENIS PAR 17
    vreme17El.textContent = tenis[16].vreme17
    domacin17El.textContent = tenis[16].domacin17
    gost17El.textContent = tenis[16].gost17
    sedamnaestiPar1.textContent = tenis[16].igra1
    sedamnaestiParX.textContent = tenis[16].igraX
    sedamnaestiPar2.textContent = tenis[16].igra2
    // TENIS PAR 18
    vreme18El.textContent = tenis[17].vreme18
    domacin18El.textContent = tenis[17].domacin18
    gost18El.textContent = tenis[17].gost18
    osamnaestiPar1.textContent = tenis[17].igra1
    osamnaestiParX.textContent = tenis[17].igraX
    osamnaestiPar2.textContent = tenis[17].igra2
    // TENIS PAR 19
    vreme19El.textContent = tenis[18].vreme19
    domacin19El.textContent = tenis[18].domacin19
    gost19El.textContent = tenis[18].gost19
    devetnaestiPar1.textContent = tenis[18].igra1
    devetnaestiParX.textContent = tenis[18].igraX
    devetnaestiPar2.textContent = tenis[18].igra2
    // TENIS PAR 20
    vreme20El.textContent = tenis[19].vreme20
    domacin20El.textContent = tenis[19].domacin20
    gost20El.textContent = tenis[19].gost20
    dvadesetiPar1.textContent = tenis[19].igra1
    dvadesetiParX.textContent = tenis[19].igraX
    dvadesetiPar2.textContent = tenis[19].igra2
    // TENIS PAR 21
    vreme21El.textContent = tenis[20].vreme21
    domacin21El.textContent = tenis[20].domacin21
    gost21El.textContent = tenis[20].gost21
    dvadesetprviPar1.textContent = tenis[20].igra1
    dvadesetprviParX.textContent = tenis[20].igraX
    dvadesetprviPar2.textContent = tenis[20].igra2
    // TENIS PAR 22
    vreme22El.textContent = tenis[21].vreme22
    domacin22El.textContent = tenis[21].domacin22
    gost22El.textContent = tenis[21].gost22
    dvadesetdrugiPar1.textContent = tenis[21].igra1
    dvadesetdrugiParX.textContent = tenis[21].igraX
    dvadesetdrugiPar2.textContent = tenis[21].igra2
    // TENIS PAR 23
    vreme23El.textContent = tenis[22].vreme23
    domacin23El.textContent = tenis[22].domacin23
    gost23El.textContent = tenis[22].gost23
    dvadesettreciPar1.textContent = tenis[22].igra1
    dvadesettreciParX.textContent = tenis[22].igraX
    dvadesettreciPar2.textContent = tenis[22].igra2
    // TENIS PAR 24
    vreme24El.textContent = tenis[23].vreme24
    domacin24El.textContent = tenis[23].domacin24
    gost24El.textContent = tenis[23].gost24
    dvadesetcetvrtiPar1.textContent = tenis[23].igra1
    dvadesetcetvrtiParX.textContent = tenis[23].igraX
    dvadesetcetvrtiPar2.textContent = tenis[23].igra2
    // TENIS PAR 25
    vreme25El.textContent = tenis[24].vreme25
    domacin25El.textContent = tenis[24].domacin25
    gost25El.textContent = tenis[24].gost25
    dvadesetpetiPar1.textContent = tenis[24].igra1
    dvadesetpetiParX.textContent = tenis[24].igraX
    dvadesetpetiPar2.textContent = tenis[24].igra2
    // TENIS PAR 26
    vreme26El.textContent = tenis[25].vreme26
    domacin26El.textContent = tenis[25].domacin26
    gost26El.textContent = kosarka[25].gost26
    dvadesetsestiPar1.textContent = tenis[25].igra1
    dvadesetsestiParX.textContent = tenis[25].igraX
    dvadesetsestiPar2.textContent = tenis[25].igra2
    // TENIS PAR 27
    vreme27El.textContent = tenis[26].vreme27
    domacin27El.textContent = tenis[26].domacin27
    gost27El.textContent = tenis[26].gost27
    dvadesetsedmiPar1.textContent = tenis[26].igra1
    dvadesetsedmiParX.textContent = tenis[26].igraX
    dvadesetsedmiPar2.textContent = tenis[26].igra2
    // TENIS PAR 28
    vreme28El.textContent = tenis[27].vreme28
    domacin28El.textContent = tenis[27].domacin28
    gost28El.textContent = tenis[27].gost28
    dvadesetosmiPar1.textContent = tenis[27].igra1
    dvadesetosmiParX.textContent = tenis[27].igraX
    dvadesetosmiPar2.textContent = tenis[27].igra2
    // TENIS PAR 29
    vreme29El.textContent = tenis[28].vreme29
    domacin29El.textContent = tenis[28].domacin29
    gost29El.textContent = tenis[28].gost29
    dvadesetdevetiPar1.textContent = tenis[28].igra1
    dvadesetdevetiParX.textContent = tenis[28].igraX
    dvadesetdevetiPar2.textContent = tenis[28].igra2
    // TENIS PAR 30
    vreme30El.textContent = tenis[29].vreme30
    domacin30El.textContent = tenis[29].domacin30
    gost30El.textContent = tenis[29].gost30
    tridesetiPar1.textContent = tenis[29].igra1
    tridesetiParX.textContent = tenis[29].igraX
    tridesetiPar2.textContent = tenis[29].igra2
    // TENIS PAR 31
    vreme31El.textContent = tenis[30].vreme31
    domacin31El.textContent = tenis[30].domacin31
    gost31El.textContent = tenis[30].gost31
    tridesetprviPar1.textContent = tenis[30].igra1
    tridesetprviParX.textContent = tenis[30].igraX
    tridesetprviPar2.textContent = tenis[30].igra2
    // TENIS PAR 32
    vreme32El.textContent = tenis[31].vreme32
    domacin32El.textContent = tenis[31].domacin32
    gost32El.textContent = tenis[31].gost32
    tridesetdrugiPar1.textContent = tenis[31].igra1
    tridesetdrugiParX.textContent = tenis[31].igraX
    tridesetdrugiPar2.textContent = tenis[31].igra2
    // TENIS PAR 33
    vreme33El.textContent = tenis[32].vreme33
    domacin33El.textContent = tenis[32].domacin33
    gost33El.textContent = tenis[32].gost33
    tridesettreciPar1.textContent = tenis[32].igra1
    tridesettreciParX.textContent = tenis[32].igraX
    tridesettreciPar2.textContent = tenis[32].igra2
    // TENIS PAR 34
    vreme34El.textContent = tenis[33].vreme34
    domacin34El.textContent = tenis[33].domacin34
    gost34El.textContent = tenis[33].gost34
    tridesetcetvrtiPar1.textContent = tenis[33].igra1
    tridesetcetvrtiParX.textContent = tenis[33].igraX
    tridesetcetvrtiPar2.textContent = tenis[33].igra2
    // TENIS PAR 35
    vreme35El.textContent = tenis[34].vreme35
    domacin35El.textContent = tenis[34].domacin35
    gost35El.textContent = tenis[34].gost35
    tridesetpetiPar1.textContent = tenis[34].igra1
    tridesetpetiPar2.textContent = tenis[34].igra2
    // TENIS PAR 36
    vreme36El.textContent = tenis[35].vreme36
    domacin36El.textContent = tenis[35].domacin36
    gost36El.textContent = tenis[35].gost36
    tridesetsestiPar1.textContent = tenis[35].igra1
    tridesetsestiParX.textContent = tenis[35].igraX
    tridesetsestiPar2.textContent = tenis[35].igra2
    // TENIS PAR 37
    vreme37El.textContent = tenis[36].vreme37
    domacin37El.textContent = tenis[36].domacin37
    gost37El.textContent = tenis[36].gost37
    tridesetsedmiPar1.textContent = tenis[36].igra1
    tridesetsedmiParX.textContent = tenis[36].igraX
    tridesetsedmiPar2.textContent = tenis[36].igra2
    // TENIS PAR 38
    vreme38El.textContent = tenis[37].vreme38
    domacin38El.textContent = tenis[37].domacin38
    gost38El.textContent = tenis[37].gost38
    tridesetosmiPar1.textContent = tenis[37].igra1
    tridesetosmiParX.textContent = tenis[37].igraX
    tridesetosmiPar2.textContent = tenis[37].igra2
    // TENIS PAR 39
    vreme39El.textContent = tenis[38].vreme39
    domacin39El.textContent = tenis[38].domacin39
    gost39El.textContent = tenis[38].gost39
    tridesetdevetiPar1.textContent = tenis[38].igra1
    tridesetdevetiParX.textContent = tenis[38].igraX
    tridesetdevetiPar2.textContent = tenis[38].igra2
    // TENIS PAR 40
    vreme40El.textContent = tenis[39].vreme40
    domacin40El.textContent = tenis[39].domacin40
    gost40El.textContent = tenis[39].gost40
    cetrdesetiPar1.textContent = tenis[39].igra1
    cetrdesetiParX.textContent = tenis[39].igraX
    cetrdesetiPar2.textContent = tenis[39].igra2
    // TENIS PAR 41
    vreme41El.textContent = tenis[40].vreme41
    domacin41El.textContent = tenis[40].domacin41
    gost41El.textContent = tenis[40].gost41
    cetrdesetprviPar1.textContent = tenis[40].igra1
    cetrdesetprviParX.textContent = tenis[40].igraX
    cetrdesetprviPar2.textContent = tenis[40].igra2
    // TENIS PAR 42
    vreme42El.textContent = tenis[41].vreme42
    domacin42El.textContent = tenis[41].domacin42
    gost42El.textContent = tenis[41].gost42
    cetrdesetdrugiPar1.textContent = tenis[41].igra1
    cetrdesetdrugiParX.textContent = tenis[41].igraX
    cetrdesetdrugiPar2.textContent = tenis[41].igra2
    // TENIS PAR 43
    vreme43El.textContent = tenis[42].vreme43
    domacin43El.textContent = tenis[42].domacin43
    gost43El.textContent = tenis[42].gost43
    cetrdesettreciPar1.textContent = tenis[42].igra1
    cetrdesettreciParX.textContent = tenis[42].igraX
    cetrdesettreciPar2.textContent = tenis[42].igra2
    // TENIS PAR 44
    vreme44El.textContent = tenis[43].vreme44
    domacin44El.textContent = tenis[43].domacin44
    gost44El.textContent = tenis[43].gost44
    cetrdesetcetvrtiPar1.textContent = tenis[43].igra1
    cetrdesetcetvrtiParX.textContent = tenis[43].igraX
    cetrdesetcetvrtiPar2.textContent = tenis[43].igra2
    // TENIS PAR 45
    vreme45El.textContent = tenis[44].vreme45
    domacin45El.textContent = tenis[44].domacin45
    gost45El.textContent = tenis[44].gost45
    cetrdesetpetiPar1.textContent = tenis[44].igra1
    cetrdesetpetiParX.textContent = tenis[44].igraX
    cetrdesetpetiPar2.textContent = tenis[44].igra2
    // TENIS PAR 46
    vreme46El.textContent = tenis[45].vreme46
    domacin46El.textContent = tenis[45].domacin46
    gost46El.textContent = tenis[45].gost46
    cetrdesetsestiPar1.textContent = tenis[45].igra1
    cetrdesetsestiParX.textContent = tenis[45].igraX
    cetrdesetsestiPar2.textContent = tenis[45].igra2
    // TENIS PAR 47
    vreme47El.textContent = tenis[46].vreme47
    domacin47El.textContent = tenis[46].domacin47
    gost47El.textContent = tenis[46].gost47
    cetrdesetsedmiPar1.textContent = tenis[46].igra1
    cetrdesetsedmiParX.textContent = tenis[46].igraX
    cetrdesetsedmiPar2.textContent = tenis[46].igra2
    // TENIS PAR 48
    vreme48El.textContent = tenis[47].vreme48
    domacin48El.textContent = tenis[47].domacin48
    gost48El.textContent = tenis[47].gost48
    cetrdesetosmiPar1.textContent = tenis[47].igra1
    cetrdesetosmiParX.textContent = tenis[47].igraX
    cetrdesetosmiPar2.textContent = tenis[47].igra2
    // TENIS PAR 49
    vreme49El.textContent = tenis[48].vreme49
    domacin49El.textContent = tenis[48].domacin49
    gost49El.textContent = tenis[48].gost49
    cetrdesetdevetiPar1.textContent = tenis[48].igra1
    cetrdesetdevetiParX.textContent = tenis[48].igraX
    cetrdesetdevetiPar2.textContent = tenis[48].igra2
    // TENIS PAR 50
    vreme50El.textContent = tenis[49].vreme50
    domacin50El.textContent = tenis[49].domacin50
    gost50El.textContent = tenis[49].gost50
    drugiPar1.textContent = tenis[49].igra1
    drugiParX.textContent = tenis[49].igraX
    drugiPar2.textContent = tenis[49].igra2
    // TENIS PAR 51
    vreme51El.textContent = tenis[50].vreme51
    domacin51El.textContent = tenis[50].domacin51
    gost51El.textContent = tenis[50].gost51
    pedesetprviPar1.textContent = tenis[50].igra1
    pedesetprviParX.textContent = tenis[50].igraX
    pedesetprviPar2.textContent = tenis[50].igra2
    // TENIS PAR 52
    vreme52El.textContent = tenis[51].vreme52
    domacin52El.textContent = tenis[51].domacin52
    gost52El.textContent = tenis[51].gost52
    pedesetdrugiPar1.textContent = tenis[51].igra1
    pedesetdrugiParX.textContent = tenis[51].igraX
    pedesetdrugiPar2.textContent = tenis[51].igra2
    // TENIS PAR 53
    vreme53El.textContent = tenis[52].vreme53
    domacin53El.textContent = tenis[52].domacin53
    gost53El.textContent = tenis[52].gost53
    pedesettreciPar1.textContent = tenis[52].igra1
    pedesettreciParX.textContent = tenis[52].igraX
    pedesettreciPar2.textContent = tenis[52].igra2
    // TENIS PAR 54
    vreme54El.textContent = tenis[53].vreme54
    domacin54El.textContent = tenis[53].domacin54
    gost54El.textContent = tenis[53].gost54
    pedesetcetvrtiPar1.textContent = tenis[53].igra1
    pedesetcetvrtiParX.textContent = tenis[53].igraX
    pedesetcetvrtiPar2.textContent = tenis[53].igra2
    // TENIS PAR 55
    vreme55El.textContent = tenis[54].vreme55
    domacin55El.textContent = tenis[54].domacin55
    gost55El.textContent = tenis[54].gost55
    pedesetpetiPar1.textContent = tenis[54].igra1
    pedesetpetiParX.textContent = tenis[54].igraX
    pedesetpetiPar2.textContent = tenis[54].igra2
    // TENIS PAR 56
    vreme56El.textContent = tenis[55].vreme56
    domacin56El.textContent = tenis[55].domacin56
    gost56El.textContent = tenis[55].gost56
    pedesetsestiPar1.textContent = tenis[55].igra1
    pedesetsestiParX.textContent = tenis[55].igraX
    pedesetsestiPar2.textContent = tenis[55].igra2

    FdbBtn.classList.remove('active-btn')
    FdbBtn.style.border = "0px solid #40A3FF"
    FdbBtn.style.opacity = ".7"

    FdbBtnSmall.classList.remove('active-btn')
    FdbBtnSmall.style.border = "0px solid #40A3FF"
    FdbBtnSmall.style.opacity = ".7"

    kosBtn.classList.remove('active-btn')
    kosBtn.style.border = "0px solid #40A3FF"
    kosBtn.style.opacity = ".7"

    kosBtnSmall.classList.remove('active-btn')
    kosBtnSmall.style.border = "0px solid #40A3FF"
    kosBtnSmall.style.opacity = ".7"

    tenBtn.classList.add('active-btn')
    tenBtn.style.border = "3px solid #40A3FF"
    tenBtn.style.opacity = "1"

    tenBtnSmall.classList.add('active-btn')
    tenBtnSmall.style.border = "3px solid #40A3FF"
    tenBtnSmall.style.opacity = "1"

    hokBtn.classList.remove('active-btn')
    hokBtn.style.border = "0px solid #40A3FF"
    hokBtn.style.opacity = ".7"

    hokBtnSmall.classList.remove('active-btn')
    hokBtnSmall.style.border = "0px solid #40A3FF"
    hokBtnSmall.style.opacity = ".7"

    rukBtn.classList.remove('active-btn')
    rukBtn.style.border = "0px solid #40A3FF"
    rukBtn.style.opacity = ".7"
    
    rukBtnSmall.classList.remove('active-btn')
    rukBtnSmall.style.border = "0px solid #40A3FF"
    rukBtnSmall.style.opacity = ".7"

    odbBtn.classList.remove('active-btn')
    odbBtn.style.border = "0px solid #40A3FF"
    odbBtn.style.opacity = ".7"
    
    odbBtnSmall.classList.remove('active-btn')
    odbBtnSmall.style.border = "0px solid #40A3FF"
    odbBtnSmall.style.opacity = ".7"
    
    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
}

// TENIS BTN FUNCTION
const tenisBtn = document.querySelectorAll('.tenis-btn')
for (i = 0; i < tenisBtn.length; i++) {
    tenisBtn[i].addEventListener('click', () => {
        tenisFunction()
    });
}

                                                                        // HOKEJ

let hokej = [
    {   // HOKEJ PAR 1
        domacin1: "Buffalo Bills",
        gost1: "Miami Dolphins",
        igra1: 1.65,
        igraX: 4.80,
        igra2: 2.85,
        vreme1: "Cet. 03:00"
    },
    {   // HOKEJ PAR 2
        domacin2: "New England",
        gost2: "New York Jets",
        igra1: 5.25,
        igraX: 9.40,
        igra2: 1.45,
        vreme2: "Cet. 03:00"
    },
    {   // HOKEJ PAR 3
        domacin3: "Baltimore Ravens",
        gost3: "Cincinnati Bengals",
        igra1: 2.05,
        igraX: 7.70,
        igra2: 3.15,
        vreme3: "Cet. 03:00"
    },
    {   // HOKEJ PAR 4
        domacin4: "Cleveland Browns",
        gost4: "Pittsburgh Steelers",
        igra1: 2.25,
        igraX: 6.10,
        igra2: 3.05,
        vreme4: "Cet. 03:00"
    },
    {   // HOKEJ PAR 5
        domacin5: "Houston Texans",
        gost5: "Indianapolis Colts",
        igra1: 2.45,
        igraX: 8.10,
        igra2: 2.85,
        vreme5: "Sre. 06:00"
    },
    {   // HOKEJ PAR 6
        domacin6: "Jacksonville Jaguars",
        gost6: "Tennessee Titans",
        igra1: 1.95,
        igraX: 6.60,
        igra2: 2.95,
        vreme6: "Sre. 06:00"
    },
    {   // HOKEJ PAR 7
        domacin7: "Carolina Hurricanes",
        gost7: "Columbus Blue Jackets",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme7: "Sre. 06:00"
    },
    {   // HOKEJ PAR 8
        domacin8: "Denver Broncos",
        gost8: "Kansas City Chiefs",
        igra1: 2.55,
        igraX: 8.60,
        igra2: 2.55,
        vreme8: "Sre. 08:00"
    },
    {   // HOKEJ PAR 9
        domacin9: "New Jersey Devils",
        gost9: "New York Islanders",
        igra1: 1.25,
        igraX: 8.60,
        igra2: 4.55,
        vreme9: "Sub. 16:00"
    },
    {   // HOKEJ PAR 10
        domacin10: "New York Rangers",
        gost10: "Philadelphia Flyers",
        igra1: 2.05,
        igraX: 9.30,
        igra2: 2.85,
        vreme10: "Sub. 18:00"
    },
    {   // HOKEJ PAR 11
        domacin11: "Pittsburgh Penguins",
        gost11: "Washington Capitals",
        igra1: 3.25,
        igraX: 11.10,
        igra2: 1.85,
        vreme11: "Uto. 19:00"
    },
    {   // HOKEJ PAR 12
        domacin12: "Boston Bruins",
        gost12: "Buffalo Sabres",
        igra1: 5.25,
        igraX: 8.50,
        igra2: 1.45,
        vreme12: "Pet. 00:00"
    },
    {   // HOKEJ PAR 13
        domacin13: "Detroit Red Wings",
        gost13: "Florida Panthers",
        igra1: 2.05,
        igraX: 12.20,
        igra2: 2.85,
        vreme13: "Sre. 16:00"
    },
    {   // HOKEJ PAR 14
        domacin14: "Montréal Canadiens",
        gost14: "Ottawa Senators",
        igra1: 3.15,
        igraX: 10.40,
        igra2: 1.65,
        vreme14: "Pon. 19:00"
    },
    {   // HOKEJ PAR 15
        domacin15: "Tampa Bay Lightning",
        gost15: "Toronto Maple Leafs",
        igra1: 1.95,
        igraX: 8.90,
        igra2: 2.25,
        vreme15: "Pon. 16:00"
    },
    {   // HOKEJ PAR 16
        domacin16: "Arizona Coyotes",
        gost16: "Chicago Blackhawks",
        igra1: 2.15,
        igraX: 11.40,
        igra2: 2.25,
        vreme16: "Cet. 19:00"
    },
    {   // HOKEJ PAR 17
        domacin17: "Colorado Avalanche",
        gost17: "Dallas Stars",
        igra1: 2.45,
        igraX: 11.40,
        igra2: 2.15,
        vreme17: "Sre. 01:00"
    },
    {   // HOKEJ PAR 18
        domacin18: "Minnesota Wild",
        gost18: "Nashville Predators",
        igra1: 3.10,
        igraX: 9.60,
        igra2: 2.10,
        vreme18: "Ned. 01:45"
    },
    {   // HOKEJ PAR 19
        domacin19: "St. Louis Blues",
        gost19: "Winnipeg Jets",
        igra1: 2.45,
        igraX: 8.90,
        igra2: 2.15,
        vreme19: "Ned. 02:00"
    },
    {   // HOKEJ PAR 20
        domacin20: "Anaheim Ducks",
        gost20: "Calgary Flames",
        igra1: 2.80,
        igraX: 12.40,
        igra2: 2.15,
        vreme20: "Sub. 06:00"
    },
    {   // HOKEJ PAR 21
        domacin21: "Edmonton Oilers",
        gost21: "Los Angeles Kings",
        igra1: 1.50,
        igraX: 8.80,
        igra2: 2.55,
        vreme21: "Ned: 05:00"
    },
    {   // HOKEJ PAR 22
        domacin22: "San Jose Sharks",
        gost22: "Seattle Kraken",
        igra1: 1.50,
        igraX: 8.10,
        igra2: 3.10,
        vreme22: "Sub: 03:00"
    },
    {   // HOKEJ PAR 23
        domacin23: "Vancouver Canucks",
        gost23: "Vegas Golden Knights",
        igra1: 2.20,
        igraX: 9.40,
        igra2: 1.95,
        vreme23: "Sub: 04:00"
    },
    {   // HOKEJ PAR 24
        domacin24: "San Jose Sharks",
        gost24: "Nashville Predators",
        igra1: 1.50,
        igraX: 6.90,
        igra2: 3.15,
        vreme24: "Sub: 08:00"
    },
    {   // HOKEJ PAR 25
        domacin25: "Buffalo Bills",
        gost25: "Miami Dolphins",
        igra1: 1.65,
        igraX: 4.80,
        igra2: 2.85,
        vreme25: "Cet. 03:00"
    },
    {   // HOKEJ PAR 26
        domacin26: "New England",
        gost26: "New York Jets",
        igra1: 5.25,
        igraX: 9.40,
        igra2: 1.45,
        vreme26: "Cet. 03:00"
    },
    {   // HOKEJ PAR 27
        domacin27: "Baltimore Ravens",
        gost27: "Cincinnati Bengals",
        igra1: 2.05,
        igraX: 7.70,
        igra2: 3.15,
        vreme27: "Cet. 03:00"
    },
    {   // HOKEJ PAR 28
        domacin28: "Cleveland Browns",
        gost28: "Pittsburgh Steelers",
        igra1: 2.25,
        igraX: 6.10,
        igra2: 3.05,
        vreme28: "Cet. 03:00"
    },
    {   // HOKEJ PAR 29
        domacin29: "Houston Texans",
        gost29: "Indianapolis Colts",
        igra1: 2.45,
        igraX: 8.10,
        igra2: 2.85,
        vreme29: "Sre. 06:00"
    },
    {   // HOKEJ PAR 30
        domacin30: "Jacksonville Jaguars",
        gost30: "Tennessee Titans",
        igra1: 1.95,
        igraX: 6.60,
        igra2: 2.95,
        vreme30: "Sre. 06:00"
    },
    {   // HOKEJ PAR 31
        domacin31: "Carolina Hurricanes",
        gost31: "Columbus Blue Jackets",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme31: "Sre. 06:00"
    },
    {   // HOKEJ PAR 32
        domacin32: "Denver Broncos",
        gost32: "Kansas City Chiefs",
        igra1: 2.55,
        igraX: 8.60,
        igra2: 2.55,
        vreme32: "Sre. 08:00"
    },
    {   // HOKEJ PAR 33
        domacin33: "New Jersey Devils",
        gost33: "New York Islanders",
        igra1: 1.25,
        igraX: 8.60,
        igra2: 4.55,
        vreme33: "Sub. 16:00"
    },
    {   // HOKEJ PAR 34
        domacin34: "New York Rangers",
        gost34: "Philadelphia Flyers",
        igra1: 2.05,
        igraX: 9.30,
        igra2: 2.85,
        vreme34: "Sub. 18:00"
    },
    {   // HOKEJ PAR 35
        domacin35: "Pittsburgh Penguins",
        gost35: "Washington Capitals",
        igra1: 3.25,
        igraX: 11.10,
        igra2: 1.85,
        vreme35: "Uto. 19:00"
    },
    {   // HOKEJ PAR 36
        domacin36: "Boston Bruins",
        gost36: "Buffalo Sabres",
        igra1: 5.25,
        igraX: 8.50,
        igra2: 1.45,
        vreme36: "Pet. 00:00"
    },
    {   // HOKEJ PAR 37
        domacin37: "Detroit Red Wings",
        gost37: "Florida Panthers",
        igra1: 2.05,
        igraX: 12.20,
        igra2: 2.85,
        vreme37: "Sre. 16:00"
    },
    {   // HOKEJ PAR 38
        domacin38: "Montréal Canadiens",
        gost38: "Ottawa Senators",
        igra1: 3.15,
        igraX: 10.40,
        igra2: 1.65,
        vreme38: "Pon. 19:00"
    },
    {   // HOKEJ PAR 39
        domacin39: "Tampa Bay Lightning",
        gost39: "Toronto Maple Leafs",
        igra1: 1.95,
        igraX: 8.90,
        igra2: 2.25,
        vreme39: "Pon. 16:00"
    },
    {   // HOKEJ PAR 40
        domacin40: "Colorado Avalanche",
        gost40: "Dallas Stars",
        igra1: 2.45,
        igraX: 11.40,
        igra2: 2.15,
        vreme40: "Sre. 01:00"
    },
    {   // HOKEJ PAR 41
        domacin41: "Minnesota Wild",
        gost41: "Nashville Predators",
        igra1: 3.10,
        igraX: 9.60,
        igra2: 2.10,
        vreme41: "Ned. 01:45"
    },
    {   // HOKEJ PAR 42
        domacin42: "St. Louis Blues",
        gost42: "Winnipeg Jets",
        igra1: 2.45,
        igraX: 8.90,
        igra2: 2.15,
        vreme42: "Ned. 02:00"
    },
    {   // HOKEJ PAR 43
        domacin43: "Anaheim Ducks",
        gost43: "Calgary Flames",
        igra1: 2.80,
        igraX: 12.40,
        igra2: 2.15,
        vreme43: "Sub. 06:00"
    },
    {   // HOKEJ PAR 44
        domacin44: "Edmonton Oilers",
        gost44: "Los Angeles Kings",
        igra1: 1.50,
        igraX: 8.80,
        igra2: 2.55,
        vreme44: "Ned: 05:00"
    },
    {   // HOKEJ PAR 45
        domacin45: "San Jose Sharks",
        gost45: "Seattle Kraken",
        igra1: 1.50,
        igraX: 8.10,
        igra2: 3.10,
        vreme45: "Sub: 03:00"
    },
    {   // HOKEJ PAR 46
        domacin46: "Vancouver Canucks",
        gost46: "Vegas Golden Knights",
        igra1: 2.20,
        igraX: 9.40,
        igra2: 1.95,
        vreme46: "Sub: 04:00"
    },
    {   // HOKEJ PAR 47
        domacin47: "San Jose Sharks",
        gost47: "Nashville Predators",
        igra1: 1.50,
        igraX: 6.90,
        igra2: 3.15,
        vreme47: "Sub: 08:00"
    },
    {   // HOKEJ PAR 48
        domacin48: "Buffalo Bills",
        gost48: "Miami Dolphins",
        igra1: 1.65,
        igraX: 4.80,
        igra2: 2.85,
        vreme48: "Cet. 03:00"
    },
    {   // HOKEJ PAR 49
        domacin49: "New England",
        gost49: "New York Jets",
        igra1: 5.25,
        igraX: 9.40,
        igra2: 1.45,
        vreme49: "Cet. 03:00"
    },
    {   // HOKEJ PAR 50
        domacin50: "Baltimore Ravens",
        gost50: "Cincinnati Bengals",
        igra1: 2.05,
        igraX: 7.70,
        igra2: 3.15,
        vreme50: "Cet. 03:00"
    },
    {   // HOKEJ PAR 51
        domacin51: "Cleveland Browns",
        gost51: "Pittsburgh Steelers",
        igra1: 2.25,
        igraX: 6.10,
        igra2: 3.05,
        vreme51: "Cet. 03:00"
    },
    {   // HOKEJ PAR 52
        domacin52: "Houston Texans",
        gost52: "Indianapolis Colts",
        igra1: 2.45,
        igraX: 8.10,
        igra2: 2.85,
        vreme52: "Sre. 06:00"
    },
    {   // HOKEJ PAR 53
        domacin53: "Jacksonville Jaguars",
        gost53: "Tennessee Titans",
        igra1: 1.95,
        igraX: 6.60,
        igra2: 2.95,
        vreme53: "Sre. 06:00"
    },
    {   // HOKEJ PAR 54
        domacin54: "Carolina Hurricanes",
        gost54: "Columbus Blue Jackets",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme54: "Sre. 06:00"
    },
    {   // HOKEJ PAR 55
        domacin55: "Denver Broncos",
        gost55: "Kansas City Chiefs",
        igra1: 2.55,
        igraX: 8.60,
        igra2: 2.55,
        vreme55: "Sre. 08:00"
    },
    {   // HOKEJ PAR 56
        domacin56: "New Jersey Devils",
        gost56: "New York Islanders",
        igra1: 1.25,
        igraX: 8.60,
        igra2: 4.55,
        vreme56: "Sub. 16:00"
    },
]  

function hokejFunction() {

    // HOKEJ PAR 1
    vreme1El.textContent = hokej[0].vreme1
    domacin1El.textContent = hokej[0].domacin1
    gost1El.textContent = hokej[0].gost1
    prviPar1.textContent = hokej[0].igra1
    prviParX.textContent = hokej[0].igraX
    prviPar2.textContent = hokej[0].igra2
    // HOKEJ PAR 2
    vreme2El.textContent = hokej[1].vreme2
    domacin2El.textContent = hokej[1].domacin2
    gost2El.textContent = hokej[1].gost2
    drugiPar1.textContent = hokej[1].igra1
    drugiParX.textContent = hokej[1].igraX
    drugiPar2.textContent = hokej[1].igra2
    // HOKEJ PAR 3
    vreme3El.textContent = hokej[2].vreme3
    domacin3El.textContent = hokej[2].domacin3
    gost3El.textContent = hokej[2].gost3
    treciPar1.textContent = hokej[2].igra1
    treciParX.textContent = hokej[2].igraX
    treciPar2.textContent = hokej[2].igra2
    // HOKEJ PAR 4
    vreme4El.textContent = hokej[3].vreme4
    domacin4El.textContent = hokej[3].domacin4
    gost4El.textContent = hokej[3].gost4
    cetvrtiPar1.textContent = hokej[3].igra1
    cetvrtiParX.textContent = hokej[3].igraX
    cetvrtiPar2.textContent = hokej[3].igra2
    // HOKEJ PAR 5
    vreme5El.textContent = hokej[4].vreme5
    domacin5El.textContent = hokej[4].domacin5
    gost5El.textContent = hokej[4].gost5
    petiPar1.textContent = hokej[4].igra1
    petiParX.textContent = hokej[4].igraX
    petiPar2.textContent = hokej[4].igra2
    // HOKEJ PAR 6
    vreme6El.textContent = hokej[5].vreme6
    domacin6El.textContent = hokej[5].domacin6
    gost6El.textContent = hokej[5].gost6
    sestiPar1.textContent = hokej[5].igra1
    sestiParX.textContent = hokej[5].igraX
    sestiPar2.textContent = hokej[5].igra2
    // HOKEJ PAR 7
    vreme7El.textContent = hokej[6].vreme7
    domacin7El.textContent = hokej[6].domacin7
    gost7El.textContent = hokej[6].gost7
    sedmiPar1.textContent = hokej[6].igra1
    sedmiParX.textContent = hokej[6].igraX
    sedmiPar2.textContent = hokej[6].igra2
    // HOKEJ PAR 8
    vreme8El.textContent = hokej[7].vreme8
    domacin8El.textContent = hokej[7].domacin8
    gost8El.textContent = hokej[7].gost8
    osmiPar1.textContent = hokej[7].igra1
    osmiParX.textContent = hokej[7].igraX
    osmiPar2.textContent = hokej[7].igra2
    // HOKEJ PAR 9
    vreme9El.textContent = hokej[8].vreme9
    domacin9El.textContent = hokej[8].domacin9
    gost9El.textContent = hokej[8].gost9
    devetiPar1.textContent = hokej[8].igra1
    devetiParX.textContent = hokej[8].igraX
    devetiPar2.textContent = hokej[8].igra2
    // HOKEJ PAR 10
    vreme10El.textContent = hokej[9].vreme10
    domacin10El.textContent = hokej[9].domacin10
    gost10El.textContent = hokej[9].gost10
    desetiPar1.textContent = hokej[9].igra1
    desetiParX.textContent = hokej[9].igraX
    desetiPar2.textContent = hokej[9].igra2
    // HOKEJ PAR 11
    vreme11El.textContent = hokej[10].vreme11
    domacin11El.textContent = hokej[10].domacin11
    gost11El.textContent = hokej[10].gost11
    desetiPar1.textContent = hokej[10].igra1
    desetiParX.textContent = hokej[10].igraX
    desetiPar2.textContent = hokej[10].igra2
    // HOKEJ PAR 12
    vreme12El.textContent = hokej[11].vreme12
    domacin12El.textContent = hokej[11].domacin12
    gost12El.textContent = hokej[11].gost12
    dvanaestiPar1.textContent = hokej[11].igra1
    dvanaestiParX.textContent = hokej[11].igraX
    dvanaestiPar2.textContent = hokej[11].igra2
    // HOKEJ PAR 13
    vreme13El.textContent = hokej[12].vreme13
    domacin13El.textContent = hokej[12].domacin13
    gost13El.textContent = hokej[12].gost13
    trinaestiPar1.textContent = hokej[12].igra1
    trinaestiParX.textContent = hokej[12].igraX
    trinaestiPar2.textContent = hokej[12].igra2
    // HOKEJ PAR 14
    vreme14El.textContent = hokej[13].vreme14
    domacin14El.textContent = hokej[13].domacin14
    gost14El.textContent = hokej[13].gost14
    cetrnaestiPar1.textContent = hokej[13].igra1
    cetrnaestiParX.textContent = hokej[13].igraX
    cetrnaestiPar2.textContent = hokej[13].igra2
    // HOKEJ PAR 15
    vreme15El.textContent = hokej[14].vreme15
    domacin15El.textContent = hokej[14].domacin15
    gost15El.textContent = hokej[14].gost15
    petnaestiPar1.textContent = hokej[14].igra1
    petnaestiParX.textContent = hokej[14].igraX
    petnaestiPar2.textContent = hokej[14].igra2
    // HOKEJ PAR 16
    vreme16El.textContent = hokej[15].vreme16
    domacin16El.textContent = hokej[15].domacin16
    gost16El.textContent = hokej[15].gost16
    sesnaestiPar1.textContent = hokej[15].igra1
    sesnaestiParX.textContent = hokej[15].igraX
    sesnaestiPar2.textContent = hokej[15].igra2
    // HOKEJ PAR 17
    vreme17El.textContent = hokej[16].vreme17
    domacin17El.textContent = hokej[16].domacin17
    gost17El.textContent = hokej[16].gost17
    sedamnaestiPar1.textContent = hokej[16].igra1
    sedamnaestiParX.textContent = hokej[16].igraX
    sedamnaestiPar2.textContent = hokej[16].igra2
    // HOKEJ PAR 18
    vreme18El.textContent = hokej[17].vreme18
    domacin18El.textContent = hokej[17].domacin18
    gost18El.textContent = hokej[17].gost18
    osamnaestiPar1.textContent = hokej[17].igra1
    osamnaestiParX.textContent = hokej[17].igraX
    osamnaestiPar2.textContent = hokej[17].igra2
    // HOKEJ PAR 19
    vreme19El.textContent = fudbal[18].vreme19
    domacin19El.textContent = fudbal[18].domacin19
    gost19El.textContent = fudbal[18].gost19
    devetnaestiPar1.textContent = fudbal[18].igra1
    devetnaestiParX.textContent = fudbal[18].igraX
    devetnaestiPar2.textContent = fudbal[18].igra2
    // HOKEJ PAR 20
    vreme20El.textContent = hokej[19].vreme20
    domacin20El.textContent = hokej[19].domacin20
    gost20El.textContent = hokej[19].gost20
    dvadesetiPar1.textContent = hokej[19].igra1
    dvadesetiParX.textContent = hokej[19].igraX
    dvadesetiPar2.textContent = hokej[19].igra2
    // HOKEJ PAR 21
    vreme21El.textContent = hokej[20].vreme21
    domacin21El.textContent = hokej[20].domacin21
    gost21El.textContent = hokej[20].gost21
    dvadesetprviPar1.textContent = hokej[20].igra1
    dvadesetprviParX.textContent = hokej[20].igraX
    dvadesetprviPar2.textContent = hokej[20].igra2
    // HOKEJ PAR 22
    vreme22El.textContent = hokej[21].vreme22
    domacin22El.textContent = hokej[21].domacin22
    gost22El.textContent = hokej[21].gost22
    dvadesetdrugiPar1.textContent = hokej[21].igra1
    dvadesetdrugiParX.textContent = hokej[21].igraX
    dvadesetdrugiPar2.textContent = hokej[21].igra2
    // HOKEJ PAR 23
    vreme23El.textContent = hokej[22].vreme23
    domacin23El.textContent = hokej[22].domacin23
    gost23El.textContent = hokej[22].gost23
    dvadesettreciPar1.textContent = hokej[22].igra1
    dvadesettreciParX.textContent = hokej[22].igraX
    dvadesettreciPar2.textContent = hokej[22].igra2
    // HOKEJ PAR 24
    vreme24El.textContent = hokej[23].vreme24
    domacin24El.textContent = hokej[23].domacin24
    gost24El.textContent = hokej[23].gost24
    dvadesetcetvrtiPar1.textContent = hokej[23].igra1
    dvadesetcetvrtiParX.textContent = hokej[23].igraX
    dvadesetcetvrtiPar2.textContent = hokej[23].igra2
    // HOKEJ PAR 25
    vreme26El.textContent = hokej[25].vreme26
    domacin26El.textContent = hokej[25].domacin26
    gost26El.textContent = hokej[25].gost26
    dvadesetsestiPar1.textContent = hokej[25].igra1
    dvadesetsestiParX.textContent = hokej[25].igraX
    dvadesetsestiPar2.textContent = hokej[25].igra2
    // HOKEJ PAR 26
    vreme26El.textContent = hokej[25].vreme26
    domacin26El.textContent = hokej[25].domacin26
    gost26El.textContent = hokej[25].gost26
    dvadesetsestiPar1.textContent = hokej[25].igra1
    dvadesetsestiParX.textContent = hokej[25].igraX
    dvadesetsestiPar2.textContent = hokej[25].igra2
    // HOKEJ PAR 27
    vreme27El.textContent = hokej[26].vreme27
    domacin27El.textContent = hokej[26].domacin27
    gost27El.textContent = hokej[26].gost27
    dvadesetsedmiPar1.textContent = hokej[26].igra1
    dvadesetsedmiParX.textContent = hokej[26].igraX
    dvadesetsedmiPar2.textContent = hokej[26].igra2
    // HOKEJ PAR 28
    vreme28El.textContent = hokej[27].vreme28
    domacin28El.textContent = hokej[27].domacin28
    gost28El.textContent = hokej[27].gost28
    dvadesetosmiPar1.textContent = hokej[27].igra1
    dvadesetosmiParX.textContent = hokej[27].igraX
    dvadesetosmiPar2.textContent = hokej[27].igra2
    // HOKEJ PAR 29
    vreme29El.textContent = hokej[28].vreme29
    domacin29El.textContent = hokej[28].domacin29
    gost29El.textContent = hokej[28].gost29
    dvadesetdevetiPar1.textContent = hokej[28].igra1
    dvadesetdevetiParX.textContent = hokej[28].igraX
    dvadesetdevetiPar2.textContent = hokej[28].igra2
    // HOKEJ PAR 30
    vreme30El.textContent = hokej[29].vreme30
    domacin30El.textContent = hokej[29].domacin30
    gost30El.textContent = hokej[29].gost30
    tridesetiPar1.textContent = hokej[29].igra1
    tridesetiParX.textContent = hokej[29].igraX
    tridesetiPar2.textContent = hokej[29].igra2
    // HOKEJ PAR 31
    vreme31El.textContent = hokej[30].vreme31
    domacin31El.textContent = hokej[30].domacin31
    gost31El.textContent = hokej[30].gost31
    tridesetprviPar1.textContent = hokej[30].igra1
    tridesetprviParX.textContent = hokej[30].igraX
    tridesetprviPar2.textContent = hokej[30].igra2
    // HOKEJ PAR 32
    vreme32El.textContent = hokej[31].vreme32
    domacin32El.textContent = hokej[31].domacin32
    gost32El.textContent = hokej[31].gost32
    tridesetdrugiPar1.textContent = hokej[31].igra1
    tridesetdrugiParX.textContent = hokej[31].igraX
    tridesetdrugiPar2.textContent = hokej[31].igra2
    // HOKEJ PAR 33
    vreme33El.textContent = hokej[32].vreme33
    domacin33El.textContent = hokej[32].domacin33
    gost33El.textContent = hokej[32].gost33
    tridesettreciPar1.textContent = hokej[32].igra1
    tridesettreciParX.textContent = hokej[32].igraX
    tridesettreciPar2.textContent = hokej[32].igra2
    // HOKEJ PAR 34
    vreme34El.textContent = hokej[33].vreme34
    domacin34El.textContent = hokej[33].domacin34
    gost34El.textContent = hokej[33].gost34
    tridesetcetvrtiPar1.textContent = hokej[33].igra1
    tridesetcetvrtiParX.textContent = hokej[33].igraX
    tridesetcetvrtiPar2.textContent = hokej[33].igra2
    // HOKEJ PAR 35
    vreme35El.textContent = hokej[34].vreme35
    domacin35El.textContent = hokej[34].domacin35
    gost35El.textContent = hokej[34].gost35
    tridesetpetiPar1.textContent = hokej[34].igra1
    tridesetpetiParX.textContent = hokej[34].igraX
    tridesetpetiPar2.textContent = hokej[34].igra2
    // HOKEJ PAR 36
    vreme36El.textContent = hokej[35].vreme36
    domacin36El.textContent = hokej[35].domacin36
    gost36El.textContent = hokej[35].gost36
    tridesetsestiPar1.textContent = hokej[35].igra1
    tridesetsestiParX.textContent = hokej[35].igraX
    tridesetsestiPar2.textContent = hokej[35].igra2
    // HOKEJ PAR 37
    vreme37El.textContent = hokej[36].vreme37
    domacin37El.textContent = hokej[36].domacin37
    gost37El.textContent = hokej[36].gost37
    tridesetsedmiPar1.textContent = hokej[36].igra1
    tridesetsedmiParX.textContent = hokej[36].igraX
    tridesetsedmiPar2.textContent = hokej[36].igra2
    // HOKEJ PAR 38
    vreme38El.textContent = hokej[37].vreme38
    domacin38El.textContent = hokej[37].domacin38
    gost38El.textContent = hokej[37].gost38
    tridesetosmiPar1.textContent = hokej[37].igra1
    tridesetosmiParX.textContent = hokej[37].igraX
    tridesetosmiPar2.textContent = hokej[37].igra2
    // HOKEJ PAR 39
    vreme39El.textContent = hokej[38].vreme39
    domacin39El.textContent = hokej[38].domacin39
    gost39El.textContent = hokej[38].gost39
    tridesetdevetiPar1.textContent = hokej[38].igra1
    tridesetdevetiParX.textContent = hokej[38].igraX
    tridesetdevetiPar2.textContent = hokej[38].igra2
    // HOKEJ PAR 40
    vreme40El.textContent = hokej[39].vreme40
    domacin40El.textContent = hokej[39].domacin40
    gost40El.textContent = hokej[39].gost40
    cetrdesetiPar1.textContent = hokej[39].igra1
    cetrdesetiParX.textContent = hokej[39].igraX
    cetrdesetiPar2.textContent = hokej[39].igra2
    // HOKEJ PAR 41
    vreme41El.textContent = hokej[40].vreme41
    domacin41El.textContent = hokej[40].domacin41
    gost41El.textContent = hokej[40].gost41
    cetrdesetprviPar1.textContent = hokej[40].igra1
    cetrdesetprviParX.textContent = hokej[40].igraX
    cetrdesetprviPar2.textContent = hokej[40].igra2
    // HOKEJ PAR 42
    vreme42El.textContent = hokej[41].vreme42
    domacin42El.textContent = hokej[41].domacin42
    gost42El.textContent = hokej[41].gost42
    cetrdesetdrugiPar1.textContent = hokej[41].igra1
    cetrdesetdrugiParX.textContent = hokej[41].igraX
    cetrdesetdrugiPar2.textContent = hokej[41].igra2
    // HOKEJ PAR 43
    vreme43El.textContent = hokej[42].vreme43
    domacin43El.textContent = hokej[42].domacin43
    gost43El.textContent = hokej[42].gost43
    cetrdesettreciPar1.textContent = hokej[42].igra1
    cetrdesettreciParX.textContent = hokej[42].igraX
    cetrdesettreciPar2.textContent = hokej[42].igra2
    // HOKEJ PAR 44
    vreme44El.textContent = hokej[43].vreme44
    domacin44El.textContent = hokej[43].domacin44
    gost44El.textContent = hokej[43].gost44
    cetrdesetcetvrtiPar1.textContent = hokej[43].igra1
    cetrdesetcetvrtiParX.textContent = hokej[43].igraX
    cetrdesetcetvrtiPar2.textContent = hokej[43].igra2
    // HOKEJ PAR 45
    vreme45El.textContent = hokej[44].vreme45
    domacin45El.textContent = hokej[44].domacin45
    gost45El.textContent = hokej[44].gost45
    cetrdesetpetiPar1.textContent = hokej[44].igra1
    cetrdesetpetiParX.textContent = hokej[44].igraX
    cetrdesetpetiPar2.textContent = hokej[44].igra2
    // HOKEJ PAR 46
    vreme46El.textContent = hokej[45].vreme46
    domacin46El.textContent = hokej[45].domacin46
    gost46El.textContent = hokej[45].gost46
    cetrdesetsestiPar1.textContent = hokej[45].igra1
    cetrdesetsestiParX.textContent = hokej[45].igraX
    cetrdesetsestiPar2.textContent = hokej[45].igra2
    // HOKEJ PAR 47
    vreme47El.textContent = hokej[46].vreme47
    domacin47El.textContent = hokej[46].domacin47
    gost47El.textContent = hokej[46].gost47
    cetrdesetsedmiPar1.textContent = hokej[46].igra1
    cetrdesetsedmiParX.textContent = hokej[46].igraX
    cetrdesetsedmiPar2.textContent = hokej[46].igra2
    // HOKEJ PAR 48
    vreme48El.textContent = hokej[47].vreme48
    domacin48El.textContent = hokej[47].domacin48
    gost48El.textContent = hokej[47].gost48
    cetrdesetosmiPar1.textContent = hokej[47].igra1
    cetrdesetosmiParX.textContent = hokej[47].igraX
    cetrdesetosmiPar2.textContent = hokej[47].igra2
    // HOKEJ PAR 49
    vreme49El.textContent = hokej[48].vreme49
    domacin49El.textContent = hokej[48].domacin49
    gost49El.textContent = hokej[48].gost49
    cetrdesetdevetiPar1.textContent = hokej[48].igra1
    cetrdesetdevetiParX.textContent = hokej[48].igraX
    cetrdesetdevetiPar2.textContent = hokej[48].igra2
    // HOKEJ PAR 50
    vreme50El.textContent = hokej[49].vreme50
    domacin50El.textContent = hokej[49].domacin50
    gost50El.textContent = hokej[49].gost50
    drugiPar1.textContent = hokej[49].igra1
    drugiParX.textContent = hokej[49].igraX
    drugiPar2.textContent = hokej[49].igra2
    // HOKEJ PAR 51
    vreme51El.textContent = hokej[50].vreme51
    domacin51El.textContent = hokej[50].domacin51
    gost51El.textContent = hokej[50].gost51
    pedesetprviPar1.textContent = hokej[50].igra1
    pedesetprviParX.textContent = hokej[50].igraX
    pedesetprviPar2.textContent = hokej[50].igra2
    // HOKEJ PAR 52
    vreme52El.textContent = hokej[51].vreme52
    domacin52El.textContent = hokej[51].domacin52
    gost52El.textContent = hokej[51].gost52
    pedesetdrugiPar1.textContent = hokej[51].igra1
    pedesetdrugiParX.textContent = hokej[51].igraX
    pedesetdrugiPar2.textContent = hokej[51].igra2
    // HOKEJ PAR 53
    vreme53El.textContent = hokej[52].vreme53
    domacin53El.textContent = hokej[52].domacin53
    gost53El.textContent = hokej[52].gost53
    pedesettreciPar1.textContent = hokej[52].igra1
    pedesettreciParX.textContent = hokej[52].igraX
    pedesettreciPar2.textContent = hokej[52].igra2
    // HOKEJ PAR 54
    vreme54El.textContent = hokej[53].vreme54
    domacin54El.textContent = hokej[53].domacin54
    gost54El.textContent = hokej[53].gost54
    pedesetcetvrtiPar1.textContent = hokej[53].igra1
    pedesetcetvrtiParX.textContent = hokej[53].igraX
    pedesetcetvrtiPar2.textContent = hokej[53].igra2
    // HOKEJ PAR 55
    vreme55El.textContent = hokej[54].vreme55
    domacin55El.textContent = hokej[54].domacin55
    gost55El.textContent = hokej[54].gost55
    pedesetpetiPar1.textContent = hokej[54].igra1
    pedesetpetiParX.textContent = hokej[54].igraX
    pedesetpetiPar2.textContent = hokej[54].igra2
    // HOKEJ PAR 56
    vreme56El.textContent = hokej[55].vreme56
    domacin56El.textContent = hokej[55].domacin56
    gost56El.textContent = hokej[55].gost56
    pedesetsestiPar1.textContent = hokej[55].igra1
    pedesetsestiParX.textContent = hokej[55].igraX
    pedesetsestiPar2.textContent = hokej[55].igra2

    FdbBtn.classList.remove('active-btn')
    FdbBtn.style.border = "0px solid #40A3FF"
    FdbBtn.style.opacity = ".7"

    FdbBtnSmall.classList.remove('active-btn')
    FdbBtnSmall.style.border = "0px solid #40A3FF"
    FdbBtnSmall.style.opacity = ".7"

    kosBtn.classList.remove('active-btn')
    kosBtn.style.border = "0px solid #40A3FF"
    kosBtn.style.opacity = ".7"

    kosBtnSmall.classList.remove('active-btn')
    kosBtnSmall.style.border = "0px solid #40A3FF"
    kosBtnSmall.style.opacity = ".7"

    tenBtn.classList.remove('active-btn')
    tenBtn.style.border = "0px solid #40A3FF"
    tenBtn.style.opacity = ".7"

    tenBtnSmall.classList.remove('active-btn')
    tenBtnSmall.style.border = "0px solid #40A3FF"
    tenBtnSmall.style.opacity = ".7"

    hokBtn.classList.add('active-btn')
    hokBtn.style.border = "3px solid #40A3FF"
    hokBtn.style.opacity = "1"

    hokBtnSmall.classList.add('active-btn')
    hokBtnSmall.style.border = "3px solid #40A3FF"
    hokBtnSmall.style.opacity = "1"

    rukBtn.classList.remove('active-btn')
    rukBtn.style.border = "0px solid #40A3FF"
    rukBtn.style.opacity = ".7"
    
    rukBtnSmall.classList.remove('active-btn')
    rukBtnSmall.style.border = "0px solid #40A3FF"
    rukBtnSmall.style.opacity = ".7"

    odbBtn.classList.remove('active-btn')
    odbBtn.style.border = "0px solid #40A3FF"
    odbBtn.style.opacity = ".7"
    
    odbBtnSmall.classList.remove('active-btn')
    odbBtnSmall.style.border = "0px solid #40A3FF"
    odbBtnSmall.style.opacity = ".7"
    
    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
}

// HOKEJ BTN FUNCTION
const hokejBtn = document.querySelectorAll('.hokej-btn')
for (i = 0; i < hokejBtn.length; i++) {
    hokejBtn[i].addEventListener('click', () => {
        hokejFunction()
    });
}

                                                                        // RUKOMET

let rukomet = [
    {   // RUKOMET PAR 1
        domacin1: "Srbija",
        gost1: "Austria",
        igra1: 2.20,
        igraX: 8.15,
        igra2: 3.35,
        vreme1: "Uto. 18:00"
    },
    {   // RUKOMET PAR 2
        domacin2: "Danska",
        gost2: "Hrvatska",
        igra1: 2.25,
        igraX: 7.40,
        igra2: 2.25,
        vreme2: "Uto. 18:00"
    },
    {   // RUKOMET PAR 3
        domacin3: "Rusija",
        gost3: "Belgija",
        igra1: 1.75,
        igraX: 8.40,
        igra2: 2.55,
        vreme3: "Uto. 21:00"
    },
    {   // RUKOMET PAR 4
        domacin4: "Portugal",
        gost4: "Island",
        igra1: 4.15,
        igraX: 8.20,
        igra2: 1.65,
        vreme4: "Uto. 21:00"
    },
    {   // RUKOMET PAR 5
        domacin5: "SAD",
        gost5: "Italija",
        igra1: 1.85,
        igraX: 7.60,
        igra2: 2.95,
        vreme5: "Sre. 18:00"
    },
    {   // RUKOMET PAR 6
        domacin6: "Gvatemala",
        gost6: "Rumunija",
        igra1: 1.15,
        igraX: 9.20,
        igra2: 5.95,
        vreme6: "Sre. 18:00"
    },
    {   // RUKOMET PAR 7
        domacin7: "Australija",
        gost7: "Poljska",
        igra1: 1.55,
        igraX: 8.40,
        igra2: 3.85,
        vreme7: "Sre. 21:00"
    },
    {   // RUKOMET PAR 8
        domacin8: "Japan",
        gost8: "Turska",
        igra1: 3.85,
        igraX: 8.90,
        igra2: 1.65,
        vreme8: "Sre. 21:00"
    },
    {   // RUKOMET PAR 9
        domacin9: "Bergischer HC",
        gost9: "Füchse Berlin",
        igra1: 2.25,
        igraX: 8.40,
        igra2: 3.45,
        vreme9: "Uto. 03:00"
    },
    {   // RUKOMET PAR 10
        domacin10: "HBW",
        gost10: "TVB 1898 Stuttgart",
        igra1: 2.25,
        igraX: 9.40,
        igra2: 3.85,
        vreme10: "Uto. 03:00"
    },
    {   // RUKOMET PAR 11
        domacin11: "HC Erlangen",
        gost11: "SG Flensburg",
        igra1: 3.95,
        igraX: 8.20,
        igra2: 1.65,
        vreme11: "Uto. 03:00"
    },
    {   // RUKOMET PAR 12
        domacin12: "Frisch Auf Göppingen",
        gost12: "HSV Hamburg",
        igra1: 3.15,
        igraX: 8.10,
        igra2: 3.25,
        vreme12: "Uto. 03:00"
    },
    {   // RUKOMET PAR 13
        domacin13: "TSV Hannover",
        gost13: "THW Kiel",
        igra1: 3.25,
        igraX: 4.30,
        igra2: 2.65,
        vreme13: "Sre. 09:00"
    },
    {   // RUKOMET PAR 14
        domacin14: "SC Leipzig",
        gost14: "TBV Lemgo",
        igra1: 3.65,
        igraX: 12.40,
        igra2: 1.85,
        vreme14: "Uto. 05:00"
    },
    {   // RUKOMET PAR 15
        domacin15: "SC Magdeburg",
        gost15: "MT Melsungen",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.45,
        vreme15: "Uto. 05:00"
    },
    {   // RUKOMET PAR 16
        domacin16: "GWD Minden",
        gost16: "TuS Nettelstedt",
        igra1: 2.65,
        igraX: 12.40,
        igra2: 1.95,
        vreme16: "Uto. 05:00"
    },
    {   // RUKOMET PAR 17
        domacin17: "Rhein-Neckar",
        gost17: "HSG Wetzlar",
        igra1: 2.65,
        igraX: 13.40,
        igra2: 1.55,
        vreme17: "Sre. 19:30"
    },
    {   // RUKOMET PAR 18
        domacin18: "Alingsås HK",
        gost18: "Eskilstuna Guif",
        igra1: 2.35,
        igraX: 7.40,
        igra2: 3.45,
        vreme18: "Sre. 19:30"
    },
    {   // RUKOMET PAR 19
        domacin19: "Hammarby IF",
        gost19: "HK Aranäs",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.25,
        vreme19: "Sre. 20:00"
    },
    {   // RUKOMET PAR 20
        domacin20: "HK Malmö",
        gost20: "IF Hallby",
        igra1: 4.25,
        igraX: 13.40,
        igra2: 1.65,
        vreme20: "Sre. 20:00"
    },
    {   // RUKOMET PAR 21
        domacin21: "IFK Kristianstad",
        gost21: "IFK Skövde",
        igra1: 3.45,
        igraX: 12.40,
        igra2: 1.85,
        vreme21: "Sre. 21:00"
    },
    {   // RUKOMET PAR 22
        domacin22: "IK Sävehof",
        gost22: "Lugi HF",
        igra1: 2.75,
        igraX: 8.80,
        igra2: 2.15,
        vreme22: "Sre. 20:00"
    },
    {   // RUKOMET PAR 23
        domacin23: "OV Helsingborg",
        gost23: "Redbergslids IK",
        igra1: 2.05,
        igraX: 12.10,
        igra2: 3.15,
        vreme23: "Sre. 20:00"
    },
    {   // RUKOMET PAR 24
        domacin24: "Ystads IF HF",
        gost24: "Önnereds HK",
        igra1: 2.85,
        igraX: 12.40,
        igra2: 1.95,
        vreme24: "Sre. 18:00"
    },
    {   // RUKOMET PAR 25
        domacin25: "Barcelona",
        gost25: "Bidasoa Irún",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 1.85,
        vreme25: "Uto. 03:00"
    },
    {   // RUKOMET PAR 26
        domacin26: "BM Logroño",
        gost26: "Fraikin BM Granollers",
        igra1: 2.25,
        igraX: 5.40,
        igra2: 3.85,
        vreme26: "Uto. 03:00"
    },
    {   // RUKOMET PAR 27
        domacin27: "Bada Huesca",
        gost27: "Incarlopsa Cuenca",
        igra1: 2.95,
        igraX: 5.40,
        igra2: 2.05,
        vreme27: "Uto. 03:00"
    },
    {   // RUKOMET PAR 28
        domacin28: "Ademar León",
        gost28: "Ángel Ximénez",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 2.35,
        vreme28: "Uto. 03:00"
    },
    {   // RUKOMET PAR 29
        domacin29: "Recoletas Atlético",
        gost29: "Helvetia Anaitasuna",
        igra1: 1.45,
        igraX: 8.40,
        igra2: 3.85,
        vreme29: "Sre. 19:00"
    },
    {   // RUKOMET PAR 30
        domacin30: "BM Benidorm",
        gost30: "Club Balonmano Nava",
        igra1: 2.35,
        igraX: 8.40,
        igra2: 2.85,
        vreme30: "Uto. 20:00"
    },
    {   // RUKOMET PAR 31
        domacin31: "Unicaja Banco Sinfín",
        gost31: "Frigoríficos Morrazo",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme31: "Uto. 20:00"
    },
    {   // RUKOMET PAR 32
        domacin32: "Pays d'Aix Univ",
        gost32: "Chartres Métropole",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.85,
        vreme32: "Uto. 18:00"
    },
    {   // RUKOMET PAR 33
        domacin33: "Chambéry",
        gost33: "Dunkerque",
        igra1: 2.25,
        igraX: 8.40,
        igra2: 3.45,
        vreme33: "Uto. 03:00"
    },
    {   // RUKOMET PAR 34
        domacin34: "US Ivry",
        gost34: "US Créteil",
        igra1: 2.25,
        igraX: 9.40,
        igra2: 3.85,
        vreme34: "Uto. 03:00"
    },
    {   // RUKOMET PAR 35
        domacin35: "Montpellier",
        gost35: "Nantes",
        igra1: 3.95,
        igraX: 8.20,
        igra2: 1.65,
        vreme35: "Uto. 03:00"
    },
    {   // RUKOMET PAR 36
        domacin36: "USAM Nîmes",
        gost36: "PSG",
        igra1: 3.15,
        igraX: 8.10,
        igra2: 3.25,
        vreme36: "Uto. 03:00"
    },
    {   // RUKOMET PAR 37
        domacin37: "Saint Raphaël",
        gost37: "Istres Provence",
        igra1: 3.25,
        igraX: 4.30,
        igra2: 2.65,
        vreme37: "Sre. 09:00"
    },
    {   // RUKOMET PAR 38
        domacin38: "Fenix Toulouse",
        gost38: "Tremblay Handball",
        igra1: 3.65,
        igraX: 12.40,
        igra2: 1.85,
        vreme38: "Uto. 05:00"
    },
    {   // RUKOMET PAR 39
        domacin39: "Limoges Handball",
        gost39: "Cesson Rennes",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.45,
        vreme39: "Uto. 05:00"
    },
    {   // RUKOMET PAR 40
        domacin40: "Paris UC",
        gost40: "AS Mulhouse",
        igra1: 2.65,
        igraX: 12.40,
        igra2: 1.95,
        vreme40: "Uto. 05:00"
    },
    {   // RUKOMET PAR 41
        domacin41: "Bregenz Handball",
        gost41: "HC Linz AG",
        igra1: 2.65,
        igraX: 13.40,
        igra2: 1.55,
        vreme41: "Sre. 19:30"
    },
    {   // RUKOMET PAR 42
        domacin42: "Alpla HC Hard",
        gost42: "ATSE Waagner",
        igra1: 2.35,
        igraX: 7.40,
        igra2: 3.45,
        vreme42: "Sre. 19:30"
    },
    {   // RUKOMET PAR 43
        domacin43: "SG Handball",
        gost43: "HSG Raiffeisen",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.25,
        vreme43: "Sre. 20:00"
    },
    {   // RUKOMET PAR 44
        domacin44: "UHK Krems",
        gost44: "Rapid Wien",
        igra1: 4.25,
        igraX: 13.40,
        igra2: 1.65,
        vreme44: "Sre. 20:00"
    },
    {   // RUKOMET PAR 45
        domacin45: "UHC Salzburg",
        gost45: "HC Fivers",
        igra1: 3.45,
        igraX: 12.40,
        igra2: 1.85,
        vreme45: "Sre. 21:00"
    },
    {   // RUKOMET PAR 46
        domacin46: "HC Bruck",
        gost46: "ATSV Linz",
        igra1: 2.75,
        igraX: 8.80,
        igra2: 2.15,
        vreme46: "Sre. 20:00"
    },
    {   // RUKOMET PAR 47
        domacin47: "WAT Atzgersdorf",
        gost47: "Union  Stockerau",
        igra1: 2.05,
        igraX: 12.10,
        igra2: 3.15,
        vreme47: "Sre. 20:00"
    },
    {   // RUKOMET PAR 48
        domacin48: "Union Edelweiß",
        gost48: "Salzburger 1914",
        igra1: 2.85,
        igraX: 12.40,
        igra2: 1.95,
        vreme48: "Sre. 18:00"
    },
    {   // RUKOMET PAR 49
        domacin49: "SV Polizei",
        gost49: "Berliner",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 1.85,
        vreme49: "Uto. 03:00"
    },
    {   // RUKOMET PAR 50
        domacin50: "Lübbecke",
        gost50: "Wetzlar",
        igra1: 2.25,
        igraX: 5.40,
        igra2: 3.85,
        vreme50: "Uto. 03:00"
    },
    {   // RUKOMET PAR 51
        domacin51: "Lipperlandhalle",
        gost51: "Denver Nuggets",
        igra1: 2.95,
        igraX: 5.40,
        igra2: 2.05,
        vreme51: "Uto. 03:00"
    },
    {   // RUKOMET PAR 52
        domacin52: "THW Kiel",
        gost52: "Leipzig",
        igra1: 3.25,
        igraX: 4.40,
        igra2: 2.35,
        vreme52: "Uto. 03:00"
    },
    {   // RUKOMET PAR 53
        domacin53: "HSV",
        gost53: "TSV",
        igra1: 1.45,
        igraX: 8.40,
        igra2: 3.85,
        vreme53: "Sre. 19:00"
    },
    {   // RUKOMET PAR 54
        domacin54: "Erlangen",
        gost54: "SG Flensburg",
        igra1: 2.35,
        igraX: 8.40,
        igra2: 2.85,
        vreme54: "Uto. 20:00"
    },
    {   // RUKOMET PAR 55
        domacin55: "HBW",
        gost55: "1898 Stuttgart",
        igra1: 2.15,
        igraX: 9.40,
        igra2: 3.45,
        vreme55: "Uto. 20:00"
    },
    {   // RUKOMET PAR 56
        domacin56: "Bergischer HC",
        gost56: "Füchse Berlin",
        igra1: 2.35,
        igraX: 12.40,
        igra2: 2.85,
        vreme56: "Uto. 18:00"
    },
]  

function rukometFunction() {

    // RUKOMET PAR 1
    vreme1El.textContent = rukomet[0].vreme1
    domacin1El.textContent = rukomet[0].domacin1
    gost1El.textContent = rukomet[0].gost1
    prviPar1.textContent = rukomet[0].igra1
    prviParX.textContent = rukomet[0].igraX
    prviPar2.textContent = rukomet[0].igra2
    // RUKOMET PAR 2
    vreme2El.textContent = rukomet[1].vreme2
    domacin2El.textContent = rukomet[1].domacin2
    gost2El.textContent = rukomet[1].gost2
    drugiPar1.textContent = rukomet[1].igra1
    drugiParX.textContent = rukomet[1].igraX
    drugiPar2.textContent = rukomet[1].igra2
    // RUKOMET PAR 3
    vreme3El.textContent = rukomet[2].vreme3
    domacin3El.textContent = rukomet[2].domacin3
    gost3El.textContent = rukomet[2].gost3
    treciPar1.textContent = rukomet[2].igra1
    treciParX.textContent = rukomet[2].igraX
    treciPar2.textContent = rukomet[2].igra2
    // RUKOMET PAR 4
    vreme4El.textContent = rukomet[3].vreme4
    domacin4El.textContent = rukomet[3].domacin4
    gost4El.textContent = rukomet[3].gost4
    cetvrtiPar1.textContent = rukomet[3].igra1
    cetvrtiParX.textContent = rukomet[3].igraX
    cetvrtiPar2.textContent = rukomet[3].igra2
    // RUKOMET PAR 5
    vreme5El.textContent = rukomet[4].vreme5
    domacin5El.textContent = rukomet[4].domacin5
    gost5El.textContent = rukomet[4].gost5
    petiPar1.textContent = rukomet[4].igra1
    petiParX.textContent = rukomet[4].igraX
    petiPar2.textContent = rukomet[4].igra2
    // RUKOMET PAR 6
    vreme6El.textContent = rukomet[5].vreme6
    domacin6El.textContent = rukomet[5].domacin6
    gost6El.textContent = rukomet[5].gost6
    sestiPar1.textContent = rukomet[5].igra1
    sestiParX.textContent = rukomet[5].igraX
    sestiPar2.textContent = rukomet[5].igra2
    // RUKOMET PAR 7
    vreme7El.textContent = rukomet[6].vreme7
    domacin7El.textContent = rukomet[6].domacin7
    gost7El.textContent = rukomet[6].gost7
    sedmiPar1.textContent = rukomet[6].igra1
    sedmiParX.textContent = rukomet[6].igraX
    sedmiPar2.textContent = rukomet[6].igra2
    // RUKOMET PAR 8
    vreme8El.textContent = rukomet[7].vreme8
    domacin8El.textContent = rukomet[7].domacin8
    gost8El.textContent = rukomet[7].gost8
    osmiPar1.textContent = rukomet[7].igra1
    osmiParX.textContent = rukomet[7].igraX
    osmiPar2.textContent = rukomet[7].igra2
    // RUKOMET PAR 9
    vreme9El.textContent = rukomet[8].vreme9
    domacin9El.textContent = rukomet[8].domacin9
    gost9El.textContent = rukomet[8].gost9
    devetiPar1.textContent = rukomet[8].igra1
    devetiParX.textContent = rukomet[8].igraX
    devetiPar2.textContent = rukomet[8].igra2
    // RUKOMET PAR 10
    vreme10El.textContent = rukomet[9].vreme10
    domacin10El.textContent = rukomet[9].domacin10
    gost10El.textContent = rukomet[9].gost10
    desetiPar1.textContent = rukomet[9].igra1
    desetiParX.textContent = rukomet[9].igraX
    desetiPar2.textContent = rukomet[9].igra2
    // RUKOMET PAR 11
    vreme11El.textContent = rukomet[10].vreme11
    domacin11El.textContent = rukomet[10].domacin11
    gost11El.textContent = rukomet[10].gost11
    jedanaestiPar1.textContent = rukomet[10].igra1
    jedanaestiParX.textContent = rukomet[10].igraX
    jedanaestiPar2.textContent = rukomet[10].igra2
    // RUKOMET PAR 12
    vreme12El.textContent = rukomet[11].vreme12
    domacin12El.textContent = rukomet[11].domacin12
    gost12El.textContent = rukomet[11].gost12
    dvanaestiPar1.textContent = rukomet[11].igra1
    dvanaestiParX.textContent = rukomet[11].igraX
    dvanaestiPar2.textContent = rukomet[11].igra2
    // RUKOMET PAR 13
    vreme13El.textContent = rukomet[12].vreme13
    domacin13El.textContent = rukomet[12].domacin13
    gost13El.textContent = rukomet[12].gost13
    trinaestiPar1.textContent = rukomet[12].igra1
    trinaestiParX.textContent = rukomet[12].igraX
    trinaestiPar2.textContent = rukomet[12].igra2
    // RUKOMET PAR 14
    vreme14El.textContent = rukomet[13].vreme14
    domacin14El.textContent = rukomet[13].domacin14
    gost14El.textContent = rukomet[13].gost14
    cetrnaestiPar1.textContent = rukomet[13].igra1
    cetrnaestiParX.textContent = rukomet[13].igraX
    cetrnaestiPar2.textContent = rukomet[13].igra2
    // RUKOMET PAR 15
    vreme15El.textContent = rukomet[14].vreme15
    domacin15El.textContent = rukomet[14].domacin15
    gost15El.textContent = rukomet[14].gost15
    petnaestiPar1.textContent = rukomet[14].igra1
    petnaestiParX.textContent = rukomet[14].igraX
    petnaestiPar2.textContent = rukomet[14].igra2
    // RUKOMET PAR 16
    vreme16El.textContent = rukomet[15].vreme16
    domacin16El.textContent = rukomet[15].domacin16
    gost16El.textContent = rukomet[15].gost16
    sesnaestiPar1.textContent = rukomet[15].igra1
    sesnaestiParX.textContent = rukomet[15].igraX
    sesnaestiPar2.textContent = rukomet[15].igra2
    // RUKOMET PAR 17
    vreme17El.textContent = rukomet[16].vreme17
    domacin17El.textContent = rukomet[16].domacin17
    gost17El.textContent = rukomet[16].gost17
    sedamnaestiPar1.textContent = rukomet[16].igra1
    sedamnaestiParX.textContent = rukomet[16].igraX
    sedamnaestiPar2.textContent = rukomet[16].igra2
    // RUKOMET PAR 18
    vreme18El.textContent = rukomet[17].vreme18
    domacin18El.textContent = rukomet[17].domacin18
    gost18El.textContent = rukomet[17].gost18
    osamnaestiPar1.textContent = rukomet[17].igra1
    osamnaestiParX.textContent = rukomet[17].igraX
    osamnaestiPar2.textContent = rukomet[17].igra2
    // RUKOMET PAR 19
    vreme19El.textContent = rukomet[18].vreme19
    domacin19El.textContent = rukomet[18].domacin19
    gost19El.textContent = rukomet[18].gost19
    devetnaestiPar1.textContent = rukomet[18].igra1
    devetnaestiParX.textContent = rukomet[18].igraX
    devetnaestiPar2.textContent = rukomet[18].igra2
    // RUKOMET PAR 20
    vreme20El.textContent = rukomet[19].vreme20
    domacin20El.textContent = rukomet[19].domacin20
    gost20El.textContent = rukomet[19].gost20
    dvadesetiPar1.textContent = rukomet[19].igra1
    dvadesetiParX.textContent = rukomet[19].igraX
    dvadesetiPar2.textContent = rukomet[19].igra2
    // RUKOMET PAR 21
    vreme21El.textContent = rukomet[20].vreme21
    domacin21El.textContent = rukomet[20].domacin21
    gost21El.textContent = rukomet[20].gost21
    dvadesetprviPar1.textContent = rukomet[20].igra1
    dvadesetprviParX.textContent = rukomet[20].igraX
    dvadesetprviPar2.textContent = rukomet[20].igra2
    // RUKOMET PAR 22
    vreme22El.textContent = rukomet[21].vreme22
    domacin22El.textContent = rukomet[21].domacin22
    gost22El.textContent = rukomet[21].gost22
    dvadesetdrugiPar1.textContent = rukomet[21].igra1
    dvadesetdrugiParX.textContent = rukomet[21].igraX
    dvadesetdrugiPar2.textContent = rukomet[21].igra2
    // RUKOMET PAR 23
    vreme23El.textContent = rukomet[22].vreme23
    domacin23El.textContent = rukomet[22].domacin23
    gost23El.textContent = rukomet[22].gost23
    dvadesettreciPar1.textContent = rukomet[22].igra1
    dvadesettreciParX.textContent = rukomet[22].igraX
    dvadesettreciPar2.textContent = rukomet[22].igra2
    // RUKOMET PAR 24
    vreme24El.textContent = rukomet[23].vreme24
    domacin24El.textContent = rukomet[23].domacin24
    gost24El.textContent = rukomet[23].gost24
    dvadesetcetvrtiPar1.textContent = rukomet[23].igra1
    dvadesetcetvrtiParX.textContent = rukomet[23].igraX
    dvadesetcetvrtiPar2.textContent = rukomet[23].igra2
    // RUKOMET PAR 25
    vreme25El.textContent = rukomet[24].vreme25
    domacin25El.textContent = rukomet[24].domacin25
    gost25El.textContent = rukomet[24].gost25
    dvadesetpetiPar1.textContent = rukomet[24].igra1
    dvadesetpetiParX.textContent = rukomet[24].igraX
    dvadesetpetiPar2.textContent = rukomet[24].igra2
    // RUKOMET PAR 26
    vreme26El.textContent = rukomet[25].vreme26
    domacin26El.textContent = rukomet[25].domacin26
    gost26El.textContent = rukomet[25].gost26
    dvadesetsestiPar1.textContent = rukomet[25].igra1
    dvadesetsestiParX.textContent = rukomet[25].igraX
    dvadesetsestiPar2.textContent = rukomet[25].igra2
    // RUKOMET PAR 27
    vreme27El.textContent = rukomet[26].vreme27
    domacin27El.textContent = rukomet[26].domacin27
    gost27El.textContent = rukomet[26].gost27
    dvadesetsedmiPar1.textContent = rukomet[26].igra1
    dvadesetsedmiParX.textContent = rukomet[26].igraX
    dvadesetsedmiPar2.textContent = rukomet[26].igra2
    // RUKOMET PAR 28
    vreme28El.textContent = rukomet[27].vreme28
    domacin28El.textContent = rukomet[27].domacin28
    gost28El.textContent = rukomet[27].gost28
    dvadesetosmiPar1.textContent = rukomet[27].igra1
    dvadesetosmiParX.textContent = rukomet[27].igraX
    dvadesetosmiPar2.textContent = rukomet[27].igra2
    // RUKOMET PAR 29
    vreme29El.textContent = rukomet[28].vreme29
    domacin29El.textContent = rukomet[28].domacin29
    gost29El.textContent = rukomet[28].gost29
    dvadesetdevetiPar1.textContent = rukomet[28].igra1
    dvadesetdevetiParX.textContent = rukomet[28].igraX
    dvadesetdevetiPar2.textContent = rukomet[28].igra2
    // RUKOMET PAR 30
    vreme30El.textContent = rukomet[29].vreme30
    domacin30El.textContent = rukomet[29].domacin30
    gost30El.textContent = rukomet[29].gost6
    tridesetiPar1.textContent = rukomet[29].igra1
    tridesetiParX.textContent = rukomet[29].igraX
    tridesetiPar2.textContent = rukomet[29].igra2
    // RUKOMET PAR 31
    vreme31El.textContent = rukomet[30].vreme31
    domacin31El.textContent = rukomet[30].domacin31
    gost31El.textContent = rukomet[30].gost31
    tridesetprviPar1.textContent = rukomet[30].igra1
    tridesetprviParX.textContent = rukomet[30].igraX
    tridesetprviPar2.textContent = rukomet[30].igra2
    // RUKOMET PAR 32
    vreme32El.textContent = rukomet[31].vreme32
    domacin32El.textContent = rukomet[31].domacin32
    gost32El.textContent = rukomet[31].gost32
    tridesetdrugiPar1.textContent = rukomet[31].igra1
    tridesetdrugiParX.textContent = rukomet[31].igraX
    tridesetdrugiPar2.textContent = rukomet[31].igra2
    // RUKOMET PAR 33
    vreme33El.textContent = rukomet[32].vreme33
    domacin33El.textContent = rukomet[32].domacin33
    gost33El.textContent = rukomet[32].gost33
    tridesettreciPar1.textContent = rukomet[32].igra1
    tridesettreciParX.textContent = rukomet[32].igraX
    tridesettreciPar2.textContent = rukomet[32].igra2
    // RUKOMET PAR 34
    vreme34El.textContent = rukomet[33].vreme34
    domacin34El.textContent = rukomet[33].domacin34
    gost34El.textContent = rukomet[33].gost34
    tridesetcetvrtiPar1.textContent = rukomet[33].igra1
    tridesetcetvrtiParX.textContent = rukomet[33].igraX
    tridesetcetvrtiPar2.textContent = rukomet[33].igra2
    // RUKOMET PAR 35
    vreme35El.textContent = rukomet[34].vreme35
    domacin35El.textContent = rukomet[34].domacin35
    gost35El.textContent = rukomet[34].gost35
    tridesetpetiPar1.textContent = rukomet[34].igra1
    tridesetpetiParX.textContent = rukomet[34].igraX
    tridesetpetiPar2.textContent = rukomet[34].igra2
    // RUKOMET PAR 36
    vreme36El.textContent = rukomet[35].vreme36
    domacin36El.textContent = rukomet[35].domacin36
    gost36El.textContent = rukomet[35].gost36
    tridesetsestiPar1.textContent = rukomet[35].igra1
    tridesetsestiParX.textContent = rukomet[35].igraX
    tridesetsestiPar2.textContent = rukomet[35].igra2
    // RUKOMET PAR 37
    vreme37El.textContent = rukomet[36].vreme37
    domacin37El.textContent = rukomet[36].domacin37
    gost37El.textContent = rukomet[36].gost37
    tridesetsedmiPar1.textContent = rukomet[36].igra1
    tridesetsedmiParX.textContent = rukomet[36].igraX
    tridesetsedmiPar2.textContent = rukomet[36].igra2
    // RUKOMET PAR 38
    vreme38El.textContent = rukomet[37].vreme38
    domacin38El.textContent = rukomet[37].domacin38
    gost38El.textContent = rukomet[37].gost38
    tridesetosmiPar1.textContent = rukomet[37].igra1
    tridesetosmiParX.textContent = rukomet[37].igraX
    tridesetosmiPar2.textContent = rukomet[37].igra2
    // RUKOMET PAR 39
    vreme39El.textContent = rukomet[38].vreme39
    domacin39El.textContent = rukomet[38].domacin39
    gost39El.textContent = rukomet[38].gost39
    tridesetdevetiPar1.textContent = rukomet[38].igra1
    tridesetdevetiParX.textContent = rukomet[38].igraX
    tridesetdevetiPar2.textContent = rukomet[38].igra2
    // RUKOMET PAR 40
    vreme40El.textContent = rukomet[39].vreme40
    domacin40El.textContent = rukomet[39].domacin40
    gost40El.textContent = rukomet[39].gost40
    cetrdesetiPar1.textContent = rukomet[39].igra1
    cetrdesetiParX.textContent = rukomet[39].igraX
    cetrdesetiPar2.textContent = rukomet[39].igra2
    // RUKOMET PAR 41
    vreme41El.textContent = rukomet[40].vreme41
    domacin41El.textContent = rukomet[40].domacin41
    gost41El.textContent = rukomet[40].gost41
    cetrdesetprviPar1.textContent = rukomet[40].igra1
    cetrdesetprviParX.textContent = rukomet[40].igraX
    cetrdesetprviPar2.textContent = rukomet[40].igra2
    // RUKOMET PAR 42
    vreme42El.textContent = rukomet[41].vreme42
    domacin42El.textContent = rukomet[41].domacin42
    gost42El.textContent = rukomet[41].gost42
    cetrdesetdrugiPar1.textContent = rukomet[41].igra1
    cetrdesetdrugiParX.textContent = rukomet[41].igraX
    cetrdesetdrugiPar2.textContent = rukomet[41].igra2
    // RUKOMET PAR 43
    vreme43El.textContent = rukomet[42].vreme43
    domacin43El.textContent = rukomet[42].domacin43
    gost43El.textContent = rukomet[42].gost43
    cetrdesettreciPar1.textContent = rukomet[42].igra1
    cetrdesettreciParX.textContent = rukomet[42].igraX
    cetrdesettreciPar2.textContent = rukomet[42].igra2
    // RUKOMET PAR 44
    vreme44El.textContent = rukomet[43].vreme44
    domacin44El.textContent = rukomet[43].domacin44
    gost44El.textContent = rukomet[43].gost44
    cetrdesetcetvrtiPar1.textContent = rukomet[43].igra1
    cetrdesetcetvrtiParX.textContent = rukomet[43].igraX
    cetrdesetcetvrtiPar2.textContent = rukomet[43].igra2
    // RUKOMET PAR 45
    vreme45El.textContent = rukomet[44].vreme45
    domacin45El.textContent = rukomet[44].domacin45
    gost45El.textContent = rukomet[44].gost45
    cetrdesetpetiPar1.textContent = rukomet[44].igra1
    cetrdesetpetiParX.textContent = rukomet[44].igraX
    cetrdesetpetiPar2.textContent = rukomet[44].igra2
    // RUKOMET PAR 46
    vreme46El.textContent = rukomet[45].vreme46
    domacin46El.textContent = rukomet[45].domacin46
    gost46El.textContent = rukomet[45].gost46
    cetrdesetsestiPar1.textContent = rukomet[45].igra1
    cetrdesetsestiParX.textContent = rukomet[45].igraX
    cetrdesetsestiPar2.textContent = rukomet[45].igra2
    // RUKOMET PAR 47
    vreme47El.textContent = rukomet[46].vreme47
    domacin47El.textContent = rukomet[46].domacin47
    gost47El.textContent = rukomet[46].gost47
    cetrdesetsedmiPar1.textContent = rukomet[46].igra1
    cetrdesetsedmiParX.textContent = rukomet[46].igraX
    cetrdesetsedmiPar2.textContent = rukomet[46].igra2
    // RUKOMET PAR 48
    vreme48El.textContent = rukomet[47].vreme48
    domacin48El.textContent = rukomet[47].domacin48
    gost48El.textContent = rukomet[47].gost48
    cetrdesetosmiPar1.textContent = rukomet[47].igra1
    cetrdesetosmiParX.textContent = rukomet[47].igraX
    cetrdesetosmiPar2.textContent = rukomet[47].igra2
    // RUKOMET PAR 49
    vreme49El.textContent = rukomet[48].vreme49
    domacin49El.textContent = rukomet[48].domacin49
    gost49El.textContent = rukomet[48].gost49
    cetrdesetdevetiPar1.textContent = rukomet[48].igra1
    cetrdesetdevetiParX.textContent = rukomet[48].igraX
    cetrdesetdevetiPar2.textContent = rukomet[48].igra2
    // RUKOMET PAR 50
    vreme50El.textContent = rukomet[49].vreme50
    domacin50El.textContent = rukomet[49].domacin50
    gost50El.textContent = rukomet[49].gost50
    pedesetiPar1.textContent = rukomet[49].igra1
    pedesetiParX.textContent = rukomet[49].igraX
    pedesetiPar2.textContent = rukomet[49].igra2
    // RUKOMET PAR 51
    vreme51El.textContent = rukomet[50].vreme51
    domacin51El.textContent = rukomet[50].domacin51
    gost51El.textContent = rukomet[50].gost51
    pedesetprviPar1.textContent = rukomet[50].igra1
    pedesetprviParX.textContent = rukomet[50].igraX
    pedesetprviPar2.textContent = rukomet[50].igra2
    // RUKOMET PAR 52
    vreme52El.textContent = rukomet[51].vreme52
    domacin52El.textContent = rukomet[51].domacin52
    gost52El.textContent = rukomet[51].gost52
    pedesetdrugiPar1.textContent = rukomet[51].igra1
    pedesetdrugiParX.textContent = rukomet[51].igraX
    pedesetdrugiPar2.textContent = rukomet[51].igra2
    // RUKOMET PAR 53
    vreme53El.textContent = rukomet[52].vreme53
    domacin53El.textContent = rukomet[52].domacin53
    gost53El.textContent = rukomet[52].gost53
    pedesettreciPar1.textContent = rukomet[52].igra1
    pedesettreciParX.textContent = rukomet[52].igraX
    pedesettreciPar2.textContent = rukomet[52].igra2
    // RUKOMET PAR 54
    vreme54El.textContent = rukomet[53].vreme54
    domacin54El.textContent = rukomet[53].domacin54
    gost54El.textContent = rukomet[53].gost54
    pedesetcetvrtiPar1.textContent = rukomet[53].igra1
    pedesetcetvrtiParX.textContent = rukomet[53].igraX
    pedesetcetvrtiPar2.textContent = rukomet[53].igra2
    // RUKOMET PAR 55
    vreme55El.textContent = rukomet[54].vreme55
    domacin55El.textContent = rukomet[54].domacin55
    gost55El.textContent = rukomet[54].gost55
    pedesetpetiPar1.textContent = rukomet[54].igra1
    pedesetpetiParX.textContent = rukomet[54].igraX
    pedesetpetiPar2.textContent = rukomet[54].igra2
    // RUKOMET PAR 56
    vreme56El.textContent = rukomet[55].vreme56
    domacin56El.textContent = rukomet[55].domacin56
    gost56El.textContent = rukomet[55].gost56
    pedesetsestiPar1.textContent = rukomet[55].igra1
    pedesetsestiParX.textContent = rukomet[55].igraX
    pedesetsestiPar2.textContent = rukomet[55].igra2

    FdbBtn.classList.remove('active-btn')
    FdbBtn.style.border = "0px solid #40A3FF"
    FdbBtn.style.opacity = ".7"

    FdbBtnSmall.classList.remove('active-btn')
    FdbBtnSmall.style.border = "0px solid #40A3FF"
    FdbBtnSmall.style.opacity = ".7"

    kosBtn.classList.remove('active-btn')
    kosBtn.style.border = "0px solid #40A3FF"
    kosBtn.style.opacity = ".7"

    kosBtnSmall.classList.remove('active-btn')
    kosBtnSmall.style.border = "0px solid #40A3FF"
    kosBtnSmall.style.opacity = ".7"

    tenBtn.classList.remove('active-btn')
    tenBtn.style.border = "0px solid #40A3FF"
    tenBtn.style.opacity = ".7"

    tenBtnSmall.classList.remove('active-btn')
    tenBtnSmall.style.border = "0px solid #40A3FF"
    tenBtnSmall.style.opacity = ".7"

    hokBtn.classList.remove('active-btn')
    hokBtn.style.border = "0px solid #40A3FF"
    hokBtn.style.opacity = ".7"

    hokBtnSmall.classList.remove('active-btn')
    hokBtnSmall.style.border = "0px solid #40A3FF"
    hokBtnSmall.style.opacity = ".7"

    rukBtn.classList.add('active-btn')
    rukBtn.style.border = "3px solid #40A3FF"
    rukBtn.style.opacity = "1"

    rukBtnSmall.classList.add('active-btn')
    rukBtnSmall.style.border = "3px solid #40A3FF"
    rukBtnSmall.style.opacity = "1"

    odbBtn.classList.remove('active-btn')
    odbBtn.style.border = "0px solid #40A3FF"
    odbBtn.style.opacity = ".7"
    
    odbBtnSmall.classList.remove('active-btn')
    odbBtnSmall.style.border = "0px solid #40A3FF"
    odbBtnSmall.style.opacity = ".7"
    
    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
}

// RUKOMET BTN FUNCTION
const rukometBtn = document.querySelectorAll('.rukomet-btn')
for (i = 0; i < rukometBtn.length; i++) {
    rukometBtn[i].addEventListener('click', () => {
        rukometFunction()
    });
}

                                                                        // ODBOJKA

let odbojka = [
    {   // ODBOJKA PAR 1
        domacin1: "Italija",
        gost1: "Danska",
        igra1: 1.70,
        igraX: "-",
        igra2: 3.05,
        vreme1: "Pet. 18:00"
    },
    {   // ODBOJKA PAR 2
        domacin2: "Srbija",
        gost2: "SAD",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.45,
        vreme2: "Pet. 18:00"
    },
    {   // ODBOJKA PAR 3
        domacin3: "Brazil",
        gost3: "Francuska",
        igra1: 1.95,
        igraX: "-",
        igra2: 2.45,
        vreme3: "Pet. 21:00"
    },
    {   // ODBOJKA PAR 4
        domacin4: "Rusija",
        gost4: "Kina",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.15,
        vreme4: "Pet. 21:00"
    },
    {   // ODBOJKA PAR 5
        domacin5: "Kuba",
        gost5: "Poljska",
        igra1: 4.45,
        igraX: "-",
        igra2: 1.85,
        vreme5: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 6
        domacin6: "Kanada",
        gost6: "Tunis",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.95,
        vreme6: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 7
        domacin7: "Japan",
        gost7: "Kolumbija",
        igra1: 2.25,
        igraX: "-",
        igra2: 2.55,
        vreme7: "Sub. 21:00"
    },
    {   // ODBOJKA PAR 8
        domacin8: "Izrael",
        gost8: "Turska",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.85,
        vreme8: "Sub. 21:00"
    },
    {   // ODBOJKA PAR 9
        domacin9: "Španija",
        gost9: "Norveška",
        igra1: 1.25,
        igraX: "-",
        igra2: 4.55,
        vreme9: "Sub. 16:00"
    },
    {   // ODBOJKA PAR 10
        domacin10: "Švedska",
        gost10: "Mađarska",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme10: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 11
        domacin11: "Rumunija",
        gost11: "Engleska",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme11: "Uto. 19:00"
    },
    {   // ODBOJKA PAR 12
        domacin12: "Kostarika",
        gost12: "India",
        igra1: 5.25,
        igraX: "-",
        igra2: 1.45,
        vreme12: "Pet. 00:00"
    },
    {   // ODBOJKA PAR 13
        domacin13: "Argentina",
        gost13: "Portugal",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme13: "Sre. 16:00"
    },
    {   // ODBOJKA PAR 14
        domacin14: "Holandija",
        gost14: "Belgija",
        igra1: 3.15,
        igraX: "-",
        igra2: 1.65,
        vreme14: "Pon. 19:00"
    },
    {   // ODBOJKA PAR 15
        domacin15: "San Marino",
        gost15: "Alejandro Davidovich",
        igra1: 1.95,
        igraX: "-",
        igra2: 2.25,
        vreme15: "Pon. 16:00"
    },
    {   // ODBOJKA PAR 16
        domacin16: "BiH",
        gost16: "Hrvatska",
        igra1: 2.15,
        igraX: "-",
        igra2: 2.25,
        vreme16: "Cet. 19:00"
    },
    {   // ODBOJKA PAR 17
        domacin17: "Makedonija",
        gost17: "Bugarska",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.55,
        vreme17: "Cet. 14:30"
    },
    {   // ODBOJKA PAR 18
        domacin18: "Azerbejdžan",
        gost18: "Honduras",
        igra1: 2.35,
        igraX: "-",
        igra2: 3.45,
        vreme18: "Sre. 20:15"
    },
    {   // ODBOJKA PAR 19
        domacin19: "Čile",
        gost19: "Kanada",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.25,
        vreme19: "Sre. 20:00"
    },
    {   // ODBOJKA PAR 20
        domacin20: "Švajcerska",
        gost20: "Belorusija",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme20: "Pon. 13:00"
    },
    {   // ODBOJKA PAR 21
        domacin21: "Meksiko",
        gost21: "Bolivija",
        igra1: 2.35,
        igraX: "-",
        igra2: 1.55,
        vreme21: "Sre. 21:00"
    },
    {   // ODBOJKA PAR 22
        domacin22: "Škotska",
        gost22: "Vels",
        igra1: 2.15,
        igraX: "-",
        igra2: 1.85,
        vreme22: "Sre. 13:30"
    },
    {   // ODBOJKA PAR 23
        domacin23: "Indonezija",
        gost23: "Albanija",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.15,
        vreme23: "Uto. 10:00"
    },
    {   // ODBOJKA PAR 24
        domacin24: "Slovenija",
        gost24: "Grčka",
        igra1: 2.05,
        igraX: "-",
        igra2: 1.85,
        vreme24: "Uto. 13:00"
    },
    {   // ODBOJKA PAR 25
        domacin25: "Italija",
        gost25: "Danska",
        igra1: 1.70,
        igraX: "-",
        igra2: 3.05,
        vreme25: "Pet. 18:00"
    },
    {   // ODBOJKA PAR 26
        domacin26: "Srbija",
        gost26: "SAD",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.45,
        vreme26: "Pet. 18:00"
    },
    {   // ODBOJKA PAR 27
        domacin27: "Brazil",
        gost27: "Francuska",
        igra1: 1.95,
        igraX: "-",
        igra2: 2.45,
        vreme27: "Pet. 21:00"
    },
    {   // ODBOJKA PAR 28
        domacin28: "Rusija",
        gost28: "Kina",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.15,
        vreme28: "Pet. 21:00"
    },
    {   // ODBOJKA PAR 29
        domacin29: "Kuba",
        gost29: "Poljska",
        igra1: 4.45,
        igraX: "-",
        igra2: 1.85,
        vreme29: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 30
        domacin30: "Kanada",
        gost30: "Tunis",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.95,
        vreme30: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 31
        domacin31: "Japan",
        gost31: "Kolumbija",
        igra1: 2.25,
        igraX: "-",
        igra2: 2.55,
        vreme31: "Sub. 21:00"
    },
    {   // ODBOJKA PAR 32
        domacin32: "Izrael",
        gost32: "Turska",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.85,
        vreme32: "Sub. 21:00"
    },
    {   // ODBOJKA PAR 33
        domacin33: "Španija",
        gost33: "Norveška",
        igra1: 1.25,
        igraX: "-",
        igra2: 4.55,
        vreme33: "Sub. 16:00"
    },
    {   // ODBOJKA PAR 34
        domacin34: "Švedska",
        gost34: "Mađarska",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme34: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 35
        domacin35: "Rumunija",
        gost35: "Engleska",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme35: "Uto. 19:00"
    },
    {   // ODBOJKA PAR 36
        domacin36: "Kostarika",
        gost36: "India",
        igra1: 5.25,
        igraX: "-",
        igra2: 1.45,
        vreme36: "Pet. 00:00"
    },
    {   // ODBOJKA PAR 37
        domacin37: "Argentina",
        gost37: "Portugal",
        igra1: 2.05,
        igraX: "-",
        igra2: 2.85,
        vreme37: "Sre. 16:00"
    },
    {   // ODBOJKA PAR 38
        domacin38: "Holandija",
        gost38: "Belgija",
        igra1: 3.15,
        igraX: "-",
        igra2: 1.65,
        vreme38: "Pon. 19:00"
    },
    {   // ODBOJKA PAR 39
        domacin39: "San Marino",
        gost39: "Alejandro Davidovich",
        igra1: 1.95,
        igraX: "-",
        igra2: 2.25,
        vreme39: "Pon. 16:00"
    },
    {   // ODBOJKA PAR 40
        domacin40: "BiH",
        gost40: "Hrvatska",
        igra1: 2.15,
        igraX: "-",
        igra2: 2.25,
        vreme40: "Cet. 19:00"
    },
    {   // ODBOJKA PAR 41
        domacin41: "Makedonija",
        gost41: "Bugarska",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.55,
        vreme41: "Cet. 14:30"
    },
    {   // ODBOJKA PAR 42
        domacin42: "Azerbejdžan",
        gost42: "Honduras",
        igra1: 2.35,
        igraX: "-",
        igra2: 3.45,
        vreme42: "Sre. 20:15"
    },
    {   // ODBOJKA PAR 43
        domacin43: "Čile",
        gost43: "Kanada",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.25,
        vreme43: "Sre. 20:00"
    },
    {   // ODBOJKA PAR 44
        domacin44: "Švajcerska",
        gost44: "Belorusija",
        igra1: 3.25,
        igraX: "-",
        igra2: 1.85,
        vreme44: "Pon. 13:00"
    },
    {   // ODBOJKA PAR 45
        domacin45: "Meksiko",
        gost45: "Bolivija",
        igra1: 2.35,
        igraX: "-",
        igra2: 1.55,
        vreme45: "Sre. 21:00"
    },
    {   // ODBOJKA PAR 46
        domacin46: "Škotska",
        gost46: "Vels",
        igra1: 2.15,
        igraX: "-",
        igra2: 1.85,
        vreme46: "Sre. 13:30"
    },
    {   // ODBOJKA PAR 47
        domacin47: "Indonezija",
        gost47: "Albanija",
        igra1: 2.65,
        igraX: "-",
        igra2: 1.15,
        vreme47: "Uto. 10:00"
    },
    {   // ODBOJKA PAR 48
        domacin48: "Slovenija",
        gost48: "Grčka",
        igra1: 2.05,
        igraX: "-",
        igra2: 1.85,
        vreme48: "Uto. 13:00"
    },
    {   // ODBOJKA PAR 49
        domacin49: "Italija",
        gost49: "Danska",
        igra1: 1.70,
        igraX: "-",
        igra2: 3.05,
        vreme49: "Pet. 18:00"
    },
    {   // ODBOJKA PAR 50
        domacin50: "Srbija",
        gost50: "SAD",
        igra1: 2.25,
        igraX: "-",
        igra2: 3.45,
        vreme50: "Pet. 18:00"
    },
    {   // ODBOJKA PAR 51
        domacin51: "Brazil",
        gost51: "Francuska",
        igra1: 1.95,
        igraX: "-",
        igra2: 2.45,
        vreme51: "Pet. 21:00"
    },
    {   // ODBOJKA PAR 52
        domacin52: "Rusija",
        gost52: "Kina",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.15,
        vreme52: "Pet. 21:00"
    },
    {   // ODBOJKA PAR 53
        domacin53: "Kuba",
        gost53: "Poljska",
        igra1: 4.45,
        igraX: "-",
        igra2: 1.85,
        vreme53: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 54
        domacin54: "Kanada",
        gost54: "Tunis",
        igra1: 2.15,
        igraX: "-",
        igra2: 3.95,
        vreme54: "Sub. 18:00"
    },
    {   // ODBOJKA PAR 55
        domacin55: "Japan",
        gost55: "Kolumbija",
        igra1: 2.25,
        igraX: "-",
        igra2: 2.55,
        vreme55: "Sub. 21:00"
    },
    {   // ODBOJKA PAR 56
        domacin56: "Izrael",
        gost56: "Turska",
        igra1: 2.35,
        igraX: "-",
        igra2: 2.85,
        vreme56: "Sub. 21:00"
    },
]  

function odbojkaFunction() {

    // ODBOJKA PAR 1
    vreme1El.textContent = odbojka[0].vreme1
    domacin1El.textContent = odbojka[0].domacin1
    gost1El.textContent = odbojka[0].gost1
    prviPar1.textContent = odbojka[0].igra1
    prviParX.textContent = odbojka[0].igraX
    prviPar2.textContent = odbojka[0].igra2
    // ODBOJKA PAR 2
    vreme2El.textContent = odbojka[1].vreme2
    domacin2El.textContent = odbojka[1].domacin2
    gost2El.textContent = odbojka[1].gost2
    drugiPar1.textContent = odbojka[1].igra1
    drugiParX.textContent = odbojka[1].igraX
    drugiPar2.textContent = odbojka[1].igra2
    // ODBOJKA PAR 3
    vreme3El.textContent = odbojka[2].vreme3
    domacin3El.textContent = odbojka[2].domacin3
    gost3El.textContent = odbojka[2].gost3
    treciPar1.textContent = odbojka[2].igra1
    treciParX.textContent = odbojka[2].igraX
    treciPar2.textContent = odbojka[2].igra2
    // ODBOJKA PAR 4
    vreme4El.textContent = odbojka[3].vreme4
    domacin4El.textContent = odbojka[3].domacin4
    gost4El.textContent = odbojka[3].gost4
    cetvrtiPar1.textContent = odbojka[3].igra1
    cetvrtiParX.textContent = odbojka[3].igraX
    cetvrtiPar2.textContent = odbojka[3].igra2
    // ODBOJKA PAR 5
    vreme5El.textContent = odbojka[4].vreme5
    domacin5El.textContent = odbojka[4].domacin5
    gost5El.textContent = odbojka[4].gost5
    petiPar1.textContent = odbojka[4].igra1
    petiParX.textContent = odbojka[4].igraX
    petiPar2.textContent = odbojka[4].igra2
    // ODBOJKA PAR 6
    vreme6El.textContent = odbojka[5].vreme6
    domacin6El.textContent = odbojka[5].domacin6
    gost6El.textContent = odbojka[5].gost6
    sestiPar1.textContent = odbojka[5].igra1
    sestiParX.textContent = odbojka[5].igraX
    sestiPar2.textContent = odbojka[5].igra2
    // ODBOJKA PAR 7
    vreme7El.textContent = odbojka[6].vreme7
    domacin7El.textContent = odbojka[6].domacin7
    gost7El.textContent = odbojka[6].gost7
    sedmiPar1.textContent = odbojka[6].igra1
    sedmiParX.textContent = odbojka[6].igraX
    sedmiPar2.textContent = odbojka[6].igra2
    // ODBOJKA PAR 8
    vreme8El.textContent = odbojka[7].vreme8
    domacin8El.textContent = odbojka[7].domacin8
    gost8El.textContent = odbojka[7].gost8
    osmiPar1.textContent = odbojka[7].igra1
    osmiParX.textContent = odbojka[7].igraX
    osmiPar2.textContent = odbojka[7].igra2
    // RUKOMET PAR 9
    vreme9El.textContent = odbojka[8].vreme9
    domacin9El.textContent = odbojka[8].domacin9
    gost9El.textContent = odbojka[8].gost9
    devetiPar1.textContent = odbojka[8].igra1
    devetiParX.textContent = odbojka[8].igraX
    devetiPar2.textContent = odbojka[8].igra2
    // RUKOMET PAR 10
    vreme10El.textContent = odbojka[9].vreme10
    domacin10El.textContent = odbojka[9].domacin10
    gost10El.textContent = odbojka[9].gost10
    desetiPar1.textContent = odbojka[9].igra1
    desetiParX.textContent = odbojka[9].igraX
    desetiPar2.textContent = odbojka[9].igra2
    // RUKOMET PAR 11
    vreme11El.textContent = odbojka[10].vreme11
    domacin11El.textContent = odbojka[10].domacin11
    gost11El.textContent = odbojka[10].gost11
    jedanaestiPar1.textContent = odbojka[10].igra1
    jedanaestiParX.textContent = odbojka[10].igraX
    jedanaestiPar2.textContent = odbojka[10].igra2
    // RUKOMET PAR 12
    vreme12El.textContent = odbojka[11].vreme12
    domacin12El.textContent = odbojka[11].domacin12
    gost12El.textContent = odbojka[11].gost12
    dvanaestiPar1.textContent = odbojka[11].igra1
    dvanaestiParX.textContent = odbojka[11].igraX
    dvanaestiPar2.textContent = odbojka[11].igra2
    // RUKOMET PAR 13
    vreme13El.textContent = odbojka[12].vreme13
    domacin13El.textContent = odbojka[12].domacin13
    gost13El.textContent = odbojka[12].gost13
    trinaestiPar1.textContent = odbojka[12].igra1
    trinaestiParX.textContent = odbojka[12].igraX
    trinaestiPar2.textContent = odbojka[12].igra2
    // RUKOMET PAR 14
    vreme14El.textContent = odbojka[13].vreme14
    domacin14El.textContent = odbojka[13].domacin14
    gost14El.textContent = odbojka[13].gost14
    cetrnaestiPar1.textContent = odbojka[13].igra1
    cetrnaestiParX.textContent = odbojka[13].igraX
    cetrnaestiPar2.textContent = odbojka[13].igra2
    // RUKOMET PAR 15
    vreme15El.textContent = odbojka[14].vreme15
    domacin15El.textContent = odbojka[14].domacin15
    gost15El.textContent = odbojka[14].gost15
    petnaestiPar1.textContent = odbojka[14].igra1
    petnaestiParX.textContent = odbojka[14].igraX
    petnaestiPar2.textContent = odbojka[14].igra2
    // RUKOMET PAR 16
    vreme16El.textContent = odbojka[15].vreme16
    domacin16El.textContent = odbojka[15].domacin16
    gost16El.textContent = odbojka[15].gost16
    sesnaestiPar1.textContent = odbojka[15].igra1
    sesnaestiParX.textContent = odbojka[15].igraX
    sesnaestiPar2.textContent = odbojka[15].igra2
    // RUKOMET PAR 17
    vreme17El.textContent = odbojka[16].vreme17
    domacin17El.textContent = odbojka[16].domacin17
    gost17El.textContent = odbojka[16].gost17
    sedamnaestiPar1.textContent = odbojka[16].igra1
    sedamnaestiParX.textContent = odbojka[16].igraX
    sedamnaestiPar2.textContent = odbojka[16].igra2
    // RUKOMET PAR 18
    vreme18El.textContent = odbojka[17].vreme18
    domacin18El.textContent = odbojka[17].domacin18
    gost18El.textContent = odbojka[17].gost18
    osamnaestiPar1.textContent = odbojka[17].igra1
    osamnaestiParX.textContent = odbojka[17].igraX
    osamnaestiPar2.textContent = odbojka[17].igra2
    // RUKOMET PAR 19
    vreme19El.textContent = odbojka[18].vreme19
    domacin19El.textContent = odbojka[18].domacin19
    gost19El.textContent = odbojka[18].gost19
    devetnaestiPar1.textContent = odbojka[18].igra1
    devetnaestiParX.textContent = odbojka[18].igraX
    devetnaestiPar2.textContent = odbojka[18].igra2
    // RUKOMET PAR 20
    vreme20El.textContent = odbojka[19].vreme20
    domacin20El.textContent = odbojka[19].domacin20
    gost20El.textContent = odbojka[19].gost20
    dvadesetiPar1.textContent = odbojka[19].igra1
    dvadesetiParX.textContent = odbojka[19].igraX
    dvadesetiPar2.textContent = odbojka[19].igra2
    // RUKOMET PAR 21
    vreme21El.textContent = odbojka[20].vreme21
    domacin21El.textContent = odbojka[20].domacin21
    gost21El.textContent = odbojka[20].gost21
    dvadesetprviPar1.textContent = odbojka[20].igra1
    dvadesetprviParX.textContent = odbojka[20].igraX
    dvadesetprviPar2.textContent = odbojka[20].igra2
    // RUKOMET PAR 22
    vreme22El.textContent = odbojka[21].vreme22
    domacin22El.textContent = odbojka[21].domacin22
    gost22El.textContent = odbojka[21].gost22
    dvadesetdrugiPar1.textContent = odbojka[21].igra1
    dvadesetdrugiParX.textContent = odbojka[21].igraX
    dvadesetdrugiPar2.textContent = odbojka[21].igra2
    // RUKOMET PAR 23
    vreme23El.textContent = odbojka[22].vreme23
    domacin23El.textContent = odbojka[22].domacin23
    gost23El.textContent = odbojka[22].gost23
    dvadesettreciPar1.textContent = odbojka[22].igra1
    dvadesettreciParX.textContent = odbojka[22].igraX
    dvadesettreciPar2.textContent = odbojka[22].igra2
    // RUKOMET PAR 24
    vreme24El.textContent = odbojka[23].vreme24
    domacin24El.textContent = odbojka[23].domacin24
    gost24El.textContent = odbojka[23].gost24
    dvadesetcetvrtiPar1.textContent = odbojka[23].igra1
    dvadesetcetvrtiParX.textContent = odbojka[23].igraX
    dvadesetcetvrtiPar2.textContent = odbojka[23].igra2
    // RUKOMET PAR 25
    vreme25El.textContent = odbojka[24].vreme25
    domacin25El.textContent = odbojka[24].domacin25
    gost25El.textContent = odbojka[24].gost25
    dvadesetpetiPar1.textContent = odbojka[24].igra1
    dvadesetpetiParX.textContent = odbojka[24].igraX
    dvadesetpetiPar2.textContent = odbojka[24].igra2
    // RUKOMET PAR 26
    vreme26El.textContent = odbojka[25].vreme26
    domacin26El.textContent = odbojka[25].domacin26
    gost26El.textContent = odbojka[25].gost26
    dvadesetsestiPar1.textContent = odbojka[25].igra1
    dvadesetsestiParX.textContent = odbojka[25].igraX
    dvadesetsestiPar2.textContent = odbojka[25].igra2
    // RUKOMET PAR 27
    vreme27El.textContent = odbojka[26].vreme27
    domacin27El.textContent = odbojka[26].domacin27
    gost27El.textContent = odbojka[26].gost27
    dvadesetsedmiPar1.textContent = odbojka[26].igra1
    dvadesetsedmiParX.textContent = odbojka[26].igraX
    dvadesetsedmiPar2.textContent = odbojka[26].igra2
    // RUKOMET PAR 28
    vreme28El.textContent = odbojka[27].vreme28
    domacin28El.textContent = odbojka[27].domacin28
    gost28El.textContent = odbojka[27].gost28
    dvadesetosmiPar1.textContent = odbojka[27].igra1
    dvadesetosmiParX.textContent = odbojka[27].igraX
    dvadesetosmiPar2.textContent = odbojka[27].igra2
    // RUKOMET PAR 29
    vreme29El.textContent = odbojka[28].vreme29
    domacin29El.textContent = odbojka[28].domacin29
    gost29El.textContent = odbojka[28].gost29
    dvadesetdevetiPar1.textContent = odbojka[28].igra1
    dvadesetdevetiParX.textContent = odbojka[28].igraX
    dvadesetdevetiPar2.textContent = odbojka[28].igra2
    // RUKOMET PAR 30
    vreme30El.textContent = odbojka[29].vreme30
    domacin30El.textContent = odbojka[29].domacin30
    gost30El.textContent = odbojka[29].gost6
    tridesetiPar1.textContent = odbojka[29].igra1
    tridesetiParX.textContent = odbojka[29].igraX
    tridesetiPar2.textContent = odbojka[29].igra2
    // RUKOMET PAR 31
    vreme31El.textContent = odbojka[30].vreme31
    domacin31El.textContent = odbojka[30].domacin31
    gost31El.textContent = odbojka[30].gost31
    tridesetprviPar1.textContent = odbojka[30].igra1
    tridesetprviParX.textContent = odbojka[30].igraX
    tridesetprviPar2.textContent = odbojka[30].igra2
    // RUKOMET PAR 32
    vreme32El.textContent = odbojka[31].vreme32
    domacin32El.textContent = odbojka[31].domacin32
    gost32El.textContent = odbojka[31].gost32
    tridesetdrugiPar1.textContent = odbojka[31].igra1
    tridesetdrugiParX.textContent = odbojka[31].igraX
    tridesetdrugiPar2.textContent = odbojka[31].igra2
    // RUKOMET PAR 33
    vreme33El.textContent = odbojka[32].vreme33
    domacin33El.textContent = odbojka[32].domacin33
    gost33El.textContent = odbojka[32].gost33
    tridesettreciPar1.textContent = odbojka[32].igra1
    tridesettreciParX.textContent = odbojka[32].igraX
    tridesettreciPar2.textContent = odbojka[32].igra2
    // RUKOMET PAR 34
    vreme34El.textContent = odbojka[33].vreme34
    domacin34El.textContent = odbojka[33].domacin34
    gost34El.textContent = odbojka[33].gost34
    tridesetcetvrtiPar1.textContent = odbojka[33].igra1
    tridesetcetvrtiParX.textContent = odbojka[33].igraX
    tridesetcetvrtiPar2.textContent = odbojka[33].igra2
    // RUKOMET PAR 35
    vreme35El.textContent = odbojka[34].vreme35
    domacin35El.textContent = odbojka[34].domacin35
    gost35El.textContent = odbojka[34].gost35
    tridesetpetiPar1.textContent = odbojka[34].igra1
    tridesetpetiParX.textContent = odbojka[34].igraX
    tridesetpetiPar2.textContent = odbojka[34].igra2
    // RUKOMET PAR 36
    vreme36El.textContent = odbojka[35].vreme36
    domacin36El.textContent = odbojka[35].domacin36
    gost36El.textContent = odbojka[35].gost36
    tridesetsestiPar1.textContent = odbojka[35].igra1
    tridesetsestiParX.textContent = odbojka[35].igraX
    tridesetsestiPar2.textContent = odbojka[35].igra2
    // RUKOMET PAR 37
    vreme37El.textContent = odbojka[36].vreme37
    domacin37El.textContent = odbojka[36].domacin37
    gost37El.textContent = odbojka[36].gost37
    tridesetsedmiPar1.textContent = odbojka[36].igra1
    tridesetsedmiParX.textContent = odbojka[36].igraX
    tridesetsedmiPar2.textContent = odbojka[36].igra2
    // RUKOMET PAR 38
    vreme38El.textContent = odbojka[37].vreme38
    domacin38El.textContent = odbojka[37].domacin38
    gost38El.textContent = odbojka[37].gost38
    tridesetosmiPar1.textContent = odbojka[37].igra1
    tridesetosmiParX.textContent = odbojka[37].igraX
    tridesetosmiPar2.textContent = odbojka[37].igra2
    // RUKOMET PAR 39
    vreme39El.textContent = odbojka[38].vreme39
    domacin39El.textContent = odbojka[38].domacin39
    gost39El.textContent = odbojka[38].gost39
    tridesetdevetiPar1.textContent = odbojka[38].igra1
    tridesetdevetiParX.textContent = odbojka[38].igraX
    tridesetdevetiPar2.textContent = odbojka[38].igra2
    // RUKOMET PAR 40
    vreme40El.textContent = odbojka[39].vreme40
    domacin40El.textContent = odbojka[39].domacin40
    gost40El.textContent = odbojka[39].gost40
    cetrdesetiPar1.textContent = odbojka[39].igra1
    cetrdesetiParX.textContent = odbojka[39].igraX
    cetrdesetiPar2.textContent = odbojka[39].igra2
    // RUKOMET PAR 41
    vreme41El.textContent = odbojka[40].vreme41
    domacin41El.textContent = odbojka[40].domacin41
    gost41El.textContent = odbojka[40].gost41
    cetrdesetprviPar1.textContent = odbojka[40].igra1
    cetrdesetprviParX.textContent = odbojka[40].igraX
    cetrdesetprviPar2.textContent = odbojka[40].igra2
    // RUKOMET PAR 42
    vreme42El.textContent = odbojka[41].vreme42
    domacin42El.textContent = odbojka[41].domacin42
    gost42El.textContent = odbojka[41].gost42
    cetrdesetdrugiPar1.textContent = odbojka[41].igra1
    cetrdesetdrugiParX.textContent = odbojka[41].igraX
    cetrdesetdrugiPar2.textContent = odbojka[41].igra2
    // RUKOMET PAR 43
    vreme43El.textContent = odbojka[42].vreme43
    domacin43El.textContent = odbojka[42].domacin43
    gost43El.textContent = odbojka[42].gost43
    cetrdesettreciPar1.textContent = odbojka[42].igra1
    cetrdesettreciParX.textContent = odbojka[42].igraX
    cetrdesettreciPar2.textContent = odbojka[42].igra2
    // RUKOMET PAR 44
    vreme44El.textContent = odbojka[43].vreme44
    domacin44El.textContent = odbojka[43].domacin44
    gost44El.textContent = odbojka[43].gost44
    cetrdesetcetvrtiPar1.textContent = odbojka[43].igra1
    cetrdesetcetvrtiParX.textContent = odbojka[43].igraX
    cetrdesetcetvrtiPar2.textContent = odbojka[43].igra2
    // RUKOMET PAR 45
    vreme45El.textContent = odbojka[44].vreme45
    domacin45El.textContent = odbojka[44].domacin45
    gost45El.textContent = odbojka[44].gost45
    cetrdesetpetiPar1.textContent = odbojka[44].igra1
    cetrdesetpetiParX.textContent = odbojka[44].igraX
    cetrdesetpetiPar2.textContent = odbojka[44].igra2
    // RUKOMET PAR 46
    vreme46El.textContent = odbojka[45].vreme46
    domacin46El.textContent = odbojka[45].domacin46
    gost46El.textContent = odbojka[45].gost46
    cetrdesetsestiPar1.textContent = odbojka[45].igra1
    cetrdesetsestiParX.textContent = odbojka[45].igraX
    cetrdesetsestiPar2.textContent = odbojka[45].igra2
    // RUKOMET PAR 47
    vreme47El.textContent = odbojka[46].vreme47
    domacin47El.textContent = odbojka[46].domacin47
    gost47El.textContent = odbojka[46].gost47
    cetrdesetsedmiPar1.textContent = odbojka[46].igra1
    cetrdesetsedmiParX.textContent = odbojka[46].igraX
    cetrdesetsedmiPar2.textContent = odbojka[46].igra2
    // RUKOMET PAR 48
    vreme48El.textContent = odbojka[47].vreme48
    domacin48El.textContent = odbojka[47].domacin48
    gost48El.textContent = odbojka[47].gost48
    cetrdesetosmiPar1.textContent = odbojka[47].igra1
    cetrdesetosmiParX.textContent = odbojka[47].igraX
    cetrdesetosmiPar2.textContent = odbojka[47].igra2
    // RUKOMET PAR 49
    vreme49El.textContent = odbojka[48].vreme49
    domacin49El.textContent = odbojka[48].domacin49
    gost49El.textContent = odbojka[48].gost49
    cetrdesetdevetiPar1.textContent = odbojka[48].igra1
    cetrdesetdevetiParX.textContent = odbojka[48].igraX
    cetrdesetdevetiPar2.textContent = odbojka[48].igra2
    // RUKOMET PAR 50
    vreme50El.textContent = odbojka[49].vreme50
    domacin50El.textContent = odbojka[49].domacin50
    gost50El.textContent = odbojka[49].gost50
    pedesetiPar1.textContent = odbojka[49].igra1
    pedesetiParX.textContent = odbojka[49].igraX
    pedesetiPar2.textContent = odbojka[49].igra2
    // RUKOMET PAR 51
    vreme51El.textContent = odbojka[50].vreme51
    domacin51El.textContent = odbojka[50].domacin51
    gost51El.textContent = odbojka[50].gost51
    pedesetprviPar1.textContent = odbojka[50].igra1
    pedesetprviParX.textContent = odbojka[50].igraX
    pedesetprviPar2.textContent = odbojka[50].igra2
    // RUKOMET PAR 52
    vreme52El.textContent = odbojka[51].vreme52
    domacin52El.textContent = odbojka[51].domacin52
    gost52El.textContent = odbojka[51].gost52
    pedesetdrugiPar1.textContent = odbojka[51].igra1
    pedesetdrugiParX.textContent = odbojka[51].igraX
    pedesetdrugiPar2.textContent = odbojka[51].igra2
    // RUKOMET PAR 53
    vreme53El.textContent = odbojka[52].vreme53
    domacin53El.textContent = odbojka[52].domacin53
    gost53El.textContent = odbojka[52].gost53
    pedesettreciPar1.textContent = odbojka[52].igra1
    pedesettreciParX.textContent = odbojka[52].igraX
    pedesettreciPar2.textContent = odbojka[52].igra2
    // RUKOMET PAR 54
    vreme54El.textContent = odbojka[53].vreme54
    domacin54El.textContent = odbojka[53].domacin54
    gost54El.textContent = odbojka[53].gost54
    pedesetcetvrtiPar1.textContent = odbojka[53].igra1
    pedesetcetvrtiParX.textContent = odbojka[53].igraX
    pedesetcetvrtiPar2.textContent = odbojka[53].igra2
    // RUKOMET PAR 55
    vreme55El.textContent = odbojka[54].vreme55
    domacin55El.textContent = odbojka[54].domacin55
    gost55El.textContent = odbojka[54].gost55
    pedesetpetiPar1.textContent = odbojka[54].igra1
    pedesetpetiParX.textContent = odbojka[54].igraX
    pedesetpetiPar2.textContent = odbojka[54].igra2
    // RUKOMET PAR 56
    vreme56El.textContent = odbojka[55].vreme56
    domacin56El.textContent = odbojka[55].domacin56
    gost56El.textContent = odbojka[55].gost56
    pedesetsestiPar1.textContent = odbojka[55].igra1
    pedesetsestiParX.textContent = odbojka[55].igraX
    pedesetsestiPar2.textContent = odbojka[55].igra2

    FdbBtn.classList.remove('active-btn')
    FdbBtn.style.border = "0px solid #40A3FF"
    FdbBtn.style.opacity = ".7"

    FdbBtnSmall.classList.remove('active-btn')
    FdbBtnSmall.style.border = "0px solid #40A3FF"
    FdbBtnSmall.style.opacity = ".7"

    kosBtn.classList.remove('active-btn')
    kosBtn.style.border = "0px solid #40A3FF"
    kosBtn.style.opacity = ".7"

    kosBtnSmall.classList.remove('active-btn')
    kosBtnSmall.style.border = "0px solid #40A3FF"
    kosBtnSmall.style.opacity = ".7"

    tenBtn.classList.remove('active-btn')
    tenBtn.style.border = "0px solid #40A3FF"
    tenBtn.style.opacity = ".7"

    tenBtnSmall.classList.remove('active-btn')
    tenBtnSmall.style.border = "0px solid #40A3FF"
    tenBtnSmall.style.opacity = ".7"

    hokBtn.classList.remove('active-btn')
    hokBtn.style.border = "0px solid #40A3FF"
    hokBtn.style.opacity = ".7"

    hokBtnSmall.classList.remove('active-btn')
    hokBtnSmall.style.border = "0px solid #40A3FF"
    hokBtnSmall.style.opacity = ".7"

    rukBtn.classList.remove('active-btn')
    rukBtn.style.border = "0px solid #40A3FF"
    rukBtn.style.opacity = ".7"

    rukBtnSmall.classList.remove('active-btn')
    rukBtnSmall.style.border = "0px solid #40A3FF"
    rukBtnSmall.style.opacity = ".7"

    odbBtn.classList.add('active-btn')
    odbBtn.style.border = "3px solid #40A3FF"
    odbBtn.style.opacity = "1"

    odbBtnSmall.classList.add('active-btn')
    odbBtnSmall.style.border = "3px solid #40A3FF"
    odbBtnSmall.style.opacity = "1"
    
    uplataKvotaEl.style.display = 'none'
    uplataEl.style.display = 'flex'
}

// ODBOJKA BTN FUNCTION
const odbojkaBtn = document.querySelectorAll('.odbojka-btn')
for (i = 0; i < odbojkaBtn.length; i++) {
    odbojkaBtn[i].addEventListener('click', () => {
        odbojkaFunction()
    });
}


// SWIPER JS

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});