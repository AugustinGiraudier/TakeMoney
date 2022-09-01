var prices=[
    '1',
    '2',
    '5',
    '10',
    '20',
    '40',
    '50',
    '70',
    '100',
    '150',
    '200',
    '300',
    '500',
    '1 000',
    '2 000',
    '10 000',
    '30 000',
    '50 000',
    '100 000',
    '200 000',
    '400 000',
    '500 000',
    '800 000',
    '1M',
]
var selected = null;
var ticketList;
var billetList;
var lastOffer = 0;

function start(){
    billetList = document.getElementsByClassName("billet");
    let cpt=1;
    for (let item of billetList) {
        item.innerHTML = getBillet(cpt);
        item.id=cpt;
        item.classList.add('grow');
        item.addEventListener('click', event => {
            select(item);
          });

        cpt+=1;
    }
    ticketList = document.getElementsByClassName("ticket");
    cpt = 0;
    for (let item of ticketList) {
        item.innerHTML = getTicket(prices[cpt]);
        item.id=prices[cpt];
        cpt+=1;
    }
    startGame();
}

function startGame(){

    // shuffle the prices
    prices.sort(() => (Math.random() > .5) ? 1 : -1);
    console.log(prices);
}

function select(billet){
    if(billet.classList.contains('billet') || billet.classList.contains('billet-end')){
        if(selected != null)
            selected.classList.remove('selected');
        selected = billet;
        selected.classList.add('selected');
    }
}

function getTicketPrice(ticketNumber){
    return prices[ticketNumber-1];
}

function validate(end=false){
    if(selected == null)
        return;

    if(end)
        for(elem of billetList)
            if((!elem.classList.contains('billetDis')) && elem.id != selected.id){
                lastOffer = getTicketPrice(selected.id);
                document.getElementById('txtBilletVide').innerHTML = getTicketPrice(selected.id);
                selected = elem;
                hide(getTicketPrice(selected.id));
                changeView('pop-up');
                selected=null;
                return;
            }

    selected.innerHTML = getDisBillet();
    selected.classList.add('billetDis');
    selected.classList.remove('billet');
    selected.classList.remove('grow');
    selected.classList.remove('selected');
    hide(getTicketPrice(selected.id));
    document.getElementById('txtBilletVide').innerHTML = getTicketPrice(selected.id);
    changeView('pop-up');
    selected=null;
}


function changeView(name){
    document.getElementById('pop-up').classList.add('invisible');
    document.getElementById('billets').classList.add('invisible');
    document.getElementById('bank').classList.add('invisible');
    document.getElementById('endChoice').classList.add('invisible');
    switch (name) {
        case "bank":
            document.getElementById('bank').classList.remove('invisible');
            break;
        case "pop-up":
            document.getElementById('pop-up').classList.remove('invisible');
            break;
        case 'endChoice':
            document.getElementById('endChoice').classList.remove('invisible');
            break;
        default:
            document.getElementById('billets').classList.remove('invisible');
            break;
    }
}

function hide(value){
    for (let item of ticketList) {
        if(item.id==value){
            item.innerHTML = getDisTicket(value);
            item.id="Disabled";
        }
    }
}

function step(){
    if(SetUpBank()==2){
        PrepareEndChoice();
        changeView('endChoice');
        return;
    }
    let rd = Math.random();
    if(rd > 0.75){ // une chance sur 4 de faire une proposition
        changeView('bank');
        return;
    }
    changeView();
}

function SetUpBank(){ // mise en place de la proposition du banquier + renvoie le nombre de billets restants

    let sum = 0;
    let nbPrices = 0;

    for (let element of ticketList) {
        if(element.id !="Disabled"){
            sum+=getTicketValue(element);
            nbPrices++;
        }
    }

    let esperence = sum/nbPrices;
    if(esperence == NaN)
        esperence = 0;

    let percent;
    if(Math.random() >0.33){
        percent = Math.random() * (35 - 20) + 20; // pourcentage entre 35 et 45
        document.getElementById('img-bank').src = "Assets/Bank.svg";
    }
    else{
        percent = 8; // pourcentage de 18
        document.getElementById('img-bank').src = "Assets/BankMiel.svg";
    }

    lastOffer = parseInt(esperence * (percent/100));

    document.getElementById('bank-dialog').innerHTML = `
    Je te propose de t'offrir de l'argent en échange de la fin de la partie...<br><br>
    Accepterais tu de partir avec cette somme ?<br><br>
    <p class='green'><b>`+ lastOffer +` €</b></p>
    `
    return nbPrices;
}

function launchGame(){
    changeView();
    document.getElementById('btn-start').classList.add('invisible');
    document.getElementById('bank-prop').classList.remove('invisible');
}

function getTicketValue(ticketDiv){ // retourne la valeur en int d'un ticket
    return getRealValue(ticketDiv.id);
}

function EndWith(amount = null){
    if(amount == null)
        amount = lastOffer;

    if(getRealValue(amount) >= 50000){ // gros prix
        document.getElementById('bank-dialog').innerHTML = `
        Tiens, prends donc ces
        <p class='green'><b>`+ amount +` €</b></p>
        J'arrete définitivement ce jeu idiot !!`;
        document.getElementById('img-bank').src = "Assets/BankRage.svg";
    }
    else{ // petit prix
        document.getElementById('bank-dialog').innerHTML = `
        Tiens, prends donc ces
        <p class='green'><b>`+ amount +` €</b></p>
        Au plaisir de te revoir !`;
        document.getElementById('img-bank').src = "Assets/BankGentil.svg";
        document.getElementById('btn-replay').classList.remove('invisible');
    }


    document.getElementById('bank-prop').classList.add('invisible');
    changeView('bank');
}

function PrepareEndChoice(){
    let billet1;
    let billet2;

    for (let element of billetList) {
        if(!element.classList.contains('billetDis')){
            if(billet1 == null)
                billet1 = element;
            else{
                billet2 = element;
                break;
            }
        }
    }

    let bills = document.getElementsByClassName('billet-end');
    bills[0].innerHTML = getBillet(billet1.id);
    bills[0].id = billet1.id;
    bills[1].innerHTML = getBillet(billet2.id);
    bills[1].id = billet2.id;

    document.getElementById('btn-continue').onclick = null;
    document.getElementById('btn-continue').addEventListener('click', event => {
        EndWith();
    });


    bills[0].addEventListener('click', event => {
        select(bills[0]);
      });
    bills[1].addEventListener('click', event => {
        select(bills[1]);
    });
}

function refresh(){
    location.reload();
}

function getRealValue(str){
    return parseInt(str.replace(' ','').replace('M','000000'));
}