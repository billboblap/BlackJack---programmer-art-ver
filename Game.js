var CardCount = 0;
var oppcardcount = 0;
var cardDrawn = [];
var hand = [];
var oppcards = [];
var rounds = 1;
var opprounds = 0;

function draw(){   
    if(rounds <= 7){
        var card = "";
        tempcard = Math.floor(Math.random() * 12);
        tempsuit = Math.floor(Math.random() * 3);
        if(tempcard == 0){
            card = "1";
            CardCount++;
        }
        else{
            if(tempcard == 1){
                card = "A";
                tempinp = window.prompt("1 - 11?")
                if(tempinp == "1"){
                    CardCount += 1;
                }
                if(tempinp == "11"){
                    CardCount += 11;
                }
            }
            if(tempcard > 1 & tempcard <= 10){
                card = tempcard; 
                CardCount += tempcard;   
            }
            if(tempcard > 10){
                if(tempcard == 11){
                    card = "J";
                    CardCount += 10;
                }
                if(tempcard == 12){
                    card = "Q";
                    CardCount += 10;
                }
                if(tempcard == 13){
                    card = "K";
                    CardCount += 10;
                }
            }
    
            
            switch(tempsuit){
                case 0:
                    card += "C";
                    break;
                case 1:
                    card += "D";
                    break;
                case 2:
                    card += "H";
                    break;
                case 3:
                    card += "S";
                    break;
            }
    
            if(cardDrawn.includes(card)){
                draw();
            }
            else{
                cardDrawn.push(card);
                switch(rounds){
                    case 1:
                        document.getElementById("hand-item1").innerHTML = card;
                        break;
                    case 2:
                        document.getElementById("hand-item2").innerHTML = card;
                        break;
                    case 3:
                        document.getElementById("hand-item3").innerHTML = card;
                        break;
                    case 4:
                        document.getElementById("hand-item4").innerHTML = card;
                        break;
                    case 5:
                        document.getElementById("hand-item5").innerHTML = card;
                        break;
                    case 6:
                        document.getElementById("hand-item6").innerHTML = card;
                        break;
                    case 7:
                        document.getElementById("hand-item7").innerHTML = card;
                        break;
                }
            } 
            rounds++;
            oppturn();


        }
        //generated card, now have to get data and put into a hand value. 
    }
}
function pass(){
    switch(rounds){
        case 1:
            document.getElementById("hand-item1").innerHTML = "P";
            break;
        case 2:
            document.getElementById("hand-item2").innerHTML = "P";
            break;
        case 3:
            document.getElementById("hand-item3").innerHTML = "P";
            break;
        case 4:
            document.getElementById("hand-item4").innerHTML = "P";
            break;
        case 5:
            document.getElementById("hand-item5").innerHTML = "P";
            break;
        case 6:
            document.getElementById("hand-item6").innerHTML = "P";
            break;
        case 7:
            document.getElementById("hand-item7").innerHTML = "P";
            break;
    }

    rounds++;
    oppturn();
}
function oppturn(){
    var oppcard = "";
    if(opprounds => 7){
        if(oppcardcount == 21){
            oppcards.push("P");
        }
        else if(oppcardcount == 20 | oppcardcount == 19){
            oppcards.push("P");
        }
        else if(oppcardcount > 21){
            oppcards.push("P");
        }
        else if(oppcardcount < 19){ //draw a card and add value
            tempoppnum = Math.floor(Math.random() * 13);
            tempoppsuit = Math.floor(Math.random() * 3);
            if(tempoppnum == 0){
                oppturn();
            }
            if(tempoppnum == 1){
                oppcard = "A";
                if(oppcardcount == 10){
                    oppcardcount += 11;
                }
                if(oppcardcount == 20){
                    oppcardcount += 1;
                }
                else{
                    oppcardcount += 1;
                }
            }
            if(tempoppnum > 1 & tempoppnum <= 10){
                oppcard = tempoppnum;
                oppcardcount += tempoppnum;
            }
            if(tempoppnum > 10){
                oppcardcount += 10;
                if(tempoppnum == 11){
                    oppcard = "J";
                }
                if(tempoppnum == 12){
                    oppcard = "Q";
                }
                if(tempoppnum == 13){
                    oppcard = "K";
                }
            }

            if(tempoppsuit == 0){
                oppcard += "C";
            }
            if(tempoppsuit == 1){
                oppcard += "S";
            }
            if(tempoppsuit == 2){
                oppcard += "H";
            }
            if(tempoppsuit == 3){
                oppcard += "D";
            }

            if(oppcards.includes(oppcard)){
                oppturn();
            }
            else{
                oppcards.push(oppcard);
            }
        }

        opprounds++;
        if(opprounds == 7){
            document.getElementById("opp=item1").innerHTML = oppcards[0];
            document.getElementById("opp=item2").innerHTML = oppcards[1];
            document.getElementById("opp=item3").innerHTML = oppcards[2];
            document.getElementById("opp=item4").innerHTML = oppcards[3];
            document.getElementById("opp=item5").innerHTML = oppcards[4];
            document.getElementById("opp=item6").innerHTML = oppcards[5];
            document.getElementById("opp=item7").innerHTML = oppcards[6];
            document.getElementById("opp=item1").style.backgroundColor = "white";
            document.getElementById("opp=item2").style.backgroundColor = "white";
            document.getElementById("opp=item3").style.backgroundColor = "white";
            document.getElementById("opp=item4").style.backgroundColor = "white";
            document.getElementById("opp=item5").style.backgroundColor = "white";
            document.getElementById("opp=item6").style.backgroundColor = "white";
            document.getElementById("opp=item7").style.backgroundColor = "white";
            winnerdetermine();
        }
    }


}
function refresh(){
    window.location.reload();
}
function winnerdetermine(){
    if(oppcardcount > 21){
        window.alert("player wins")
        return;
    }
    if(CardCount == 21 & oppcardcount != 21){
        window.alert("player wins")
        return;
    }
    if(CardCount == oppcardcount){
        window.alert("draw")
        return;
    }

    playerscore = 21 - CardCount;
    oppscore = 21 - oppcardcount;

    if(oppscore < playerscore){
        window.alert("opponent wins")
        return;
    }
    if(playerscore < oppscore){
        window.alert("player wins")
        return;
    }
}