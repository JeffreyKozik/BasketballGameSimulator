//press a
//line 166






var Club = function(pointGuard, shootingGuard, smallForward, powerForward, center, score, name, lettering, uniform, G){
    this.pointGuard = pointGuard;
    this.shootingGuard = shootingGuard;
    this.smallForward = smallForward;
    this.powerForward = powerForward;
    this.center = center;
    this.score = score;
    this.name = name;
    this.lettering = lettering;
    this.uniform = uniform;
    this.G = G;
};

var Player = function(scoring, rebounding, assisting, name, points, position, rebounds, assists){
    this.scoring = scoring;
    this.rebounding = rebounding;
    this.assisting = assisting;
    this.name = name;
    this.points = points || 0;
    this.position = position;
    //this.rebounds = rebounds || 0;
    //this.assists = assists || 0;
};

var Button = function(config){
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 50;
    this.height = config.height || 50;
    this.message = config.message || "Hi";
    this.lettering = config.lettering || color(0, 0, 0);
    this.uniform = config.uniform || color(255, 0, 0);
    this.onClick = config.onClick || function() {};
    this.homes = config.homes || 0;
    this.aways = config.aways || 0;
};
Button.prototype.draw = function() {
    fill(this.uniform);
    rect(this.x, this.y, this.width, this.height);
    fill(this.lettering);
    textSize(10);
    text(this.message, this.x + (this.width)/2 - 20, this.y + (this.height)/ 2);
};
Button.prototype.handleKlick = function(){
    return mouseX > this.x &&
           mouseX < this.x + this.width &&
           mouseY > this.y &&
           mouseY < this.y + this.height;
};
Button.prototype.whatToDo = function(){
    if(this.handleKlick()){
        this.onClick();
    }
};


var lebronJames = new Player(12, 3, 3, "James", 0, 2);
var kyrieIrving = new Player(10, 2, 2, "Irving", 0, 0);
var kevinLove = new Player(8,  5, 1, "Love", 0, 3);
var timofeyMozgov = new Player(5,  3, 0, "Mozgov", 0, 4);
var jrSmith = new Player(6,  2, 1, "Smith", 0, 1);
var stephenCurry = new Player(13,  2, 3, "Curry", 0, 0);
var klayThompson = new Player(12, 2, 1, "Thompson", 0, 1);
var draymondGreen = new Player(6,  5, 1, "Green", 0, 3);
var andrewBogut = new Player(5,  6, 1, "Bogut", 0, 4);
var harrisonBarnes = new Player(6,  4, 1, "Barnes", 0, 2);
var jimmyButler = new Player(10, 3, 1, "Butler", 0, 2);
var pauGasol = new Player(9, 6, 1, "Gasol", 0, 4);
var joakhimNoah = new Player(4, 5, 2, "Noah", 0, 3);
var derrickRose = new Player(10, 2, 2, "Rose", 0, 0);
var aaronBrooks = new Player(9, 1, 1, "Brooks", 0, 1);
var chrisBosh = new Player(10, 3, 1, "Bosh", 0, 3);
var dwayneWade = new Player(10, 2, 2, "Wade", 0, 0);
var goranDragic = new Player(8, 2, 2, "Dragic", 0, 1);
var luolDeng = new Player(7, 2, 1, "Deng", 0, 2);
var hassanWhiteside = new Player(5, 5, 0, "Whiteside", 0, 4);
var rayAllen = new Player(13, 2, 2, "Allen", 0, 0);
var rashardLewis = new Player(11, 3, 1, "Lewis", 0, 2);
var chrisWilcox = new Player(6, 3, 1, "Wilcox", 0, 4);
var nickCollison = new Player(5, 1, 1, "Collison", 0, 3);
var earlWatson = new Player(4, 1, 3, "Watson", 0, 1);
var paulPierce = new Player(10, 2, 1, "Pierce", 0, 2);
var kevinGarnett = new Player(9, 4, 1, "Garnett", 0, 3);
var kendrickPerkins = new Player(3, 3, 1, "Perkins", 0, 4);
var rajonRondo = new Player(5, 2, 5, "Rondo", 0, 1);
var isaiahThomas = new Player(8, 2, 1, "Thomas", 0, 0);
var kobeBryant = new Player(14, 3, 3, "Bryant", 0, 1);
var steveNash = new Player(6, 1, 5, "Nash", 0, 0);
var mettaWorldPeace = new Player(6, 2, 1, "World Peace", 0, 2);
var dwightHoward = new Player(8, 6, 1, "Howard", 0, 4);
var antawnJamison = new Player(5, 1, 2, "Jamison", 0, 3);
var blakeGriffin = new Player(10, 4, 2, "Griffin", 0, 3);
var chrisPaul = new Player(9, 2, 5, "Paul", 0, 0);
var jamalCrawford = new Player(8, 1, 1, "Crawford", 0, 1);
var deandreJordan = new Player(5, 7, 0, "Jordan", 0, 4);
var jjRedick = new Player(8, 1, 1, "Reddick", 0, 2);
var carmeloAnthony = new Player(11, 1, 3, "Melo", 0, 2);
var imanShumpert = new Player(5, 1, 1, "Shump", 0, 1);
var tysonChandler = new Player(5, 5, 0, "Chandler", 0, 4);
var amareStoudemire = new Player(8, 4, 1, "Stoudemire", 0, 3);
var jeremyLin = new Player(7, 1, 3, "Lin", 0, 0);
var bench1 = new Player(4, 1, 1, "", 0, 0);
var bench2 = new Player(4, 1, 1,  "", 0, 1);
var bench3 = new Player(5, 2, 1, "", 0, 2);
var bench4 = new Player(3, 2, 0, "", 0, 3);
var bench5 = new Player(3, 3, 0, "", 0, 4);
var benchCity = [bench1, bench2, bench3, bench4, bench5];
var Bench = new Club(bench1, bench2, bench3, bench4, bench5, 0, "Bench", color(255, 0, 0), color(255, 0, 0), benchCity);
var Boston = [isaiahThomas, rajonRondo, paulPierce, kevinGarnett, kendrickPerkins];
var Celtics = new Club(isaiahThomas, rajonRondo, paulPierce, kevinGarnett, kendrickPerkins, 0, "Celtics", color(0, 255, 111), color(0, 0, 0), Boston);
var Seattle = [rayAllen, earlWatson, rashardLewis, nickCollison, chrisWilcox];
var SuperSonics = new Club(rayAllen, earlWatson, rashardLewis, nickCollison, chrisWilcox, 0, "SuperSonics", color(0, 255, 0), color(255, 255, 0), Seattle);
var Miami = [dwayneWade, goranDragic, luolDeng, chrisBosh, hassanWhiteside];
var Heat = new Club(dwayneWade, goranDragic, luolDeng, chrisBosh, hassanWhiteside, 0, "Heat", color(255, 0, 0), color(255, 162, 0), Miami);
var Chicago = [derrickRose, aaronBrooks, jimmyButler, joakhimNoah, pauGasol];
var Bulls = new Club(derrickRose, aaronBrooks, jimmyButler, joakhimNoah, pauGasol, 0, "Bulls", color(255, 0, 0), color(0, 0, 0), Chicago);
var Cleveland = [kyrieIrving, jrSmith, lebronJames, kevinLove, timofeyMozgov];
var Cavaliers = new Club(kyrieIrving, jrSmith, lebronJames, kevinLove, timofeyMozgov, 0, "Cavaliers", color(255, 0, 0), color(255, 255, 0), Cleveland);
var GoldenState = [stephenCurry, klayThompson, harrisonBarnes, draymondGreen, andrewBogut];
var Warriors = new Club(stephenCurry, harrisonBarnes, klayThompson, draymondGreen, andrewBogut, 0, "Warriors", color(255, 255, 0), color(0, 0, 0), GoldenState);
var NewYork = [jeremyLin, imanShumpert, carmeloAnthony, amareStoudemire, tysonChandler];
var Knicks = new Club(jeremyLin, imanShumpert, carmeloAnthony, amareStoudemire, tysonChandler, 0, "Knicks", color(0, 0, 255), color(255, 100, 0), NewYork);
var LA = [chrisPaul, jamalCrawford, jjRedick, blakeGriffin, deandreJordan];
var Clippers = new Club(chrisPaul, jamalCrawford, jjRedick, blakeGriffin, deandreJordan, 0, "Clippers", color(255, 0, 0), color(0, 0, 255), LA);
var LosAngeles = [steveNash, kobeBryant, mettaWorldPeace, antawnJamison, dwightHoward];
var Lakers = new Club(steveNash, kobeBryant, mettaWorldPeace, antawnJamison, dwightHoward, 0, "Lakers", color(213, 255, 0), color(0, 106, 255), LosAngeles);




var Charlotte = [stephenCurry, klayThompson, jimmyButler, chrisBosh, pauGasol];
var Rainbows = new Club(stephenCurry, klayThompson, jimmyButler, chrisBosh, pauGasol, 0, "Rainbows", color(37, 127, 230), color(255, 0, 213), Charlotte);
var SanFrancisco = [kyrieIrving, jrSmith, luolDeng, kevinGarnett, kendrickPerkins];
var BioMedicals = new Club(kyrieIrving, jrSmith, luolDeng, kevinGarnett, kendrickPerkins, 0, "BioMedicals", color(0, 255, 86), color(255, 77, 0), SanFrancisco);
var Ontario = [rayAllen, rajonRondo, lebronJames, kevinLove, chrisWilcox];
var IcePirates = new Club(rayAllen, rajonRondo, lebronJames, kevinLove, chrisWilcox, 0, "Ice Pirates", color(255, 150, 150), color(46, 43, 51), Ontario);
var Tulsa = [dwayneWade, goranDragic, rashardLewis, draymondGreen, andrewBogut];
var BurningOxen = new Club(dwayneWade, goranDragic, rashardLewis, draymondGreen, andrewBogut, 0, "Burning Oxen", color(176, 14, 14), color(255, 136, 0), Tulsa);








//var Rivals = new Club(stephenCurry, klayThompson, jimmyButler, chrisBosh, hassanWhiteside, 0, "Rivals");
//var City = [rayAllen, klayThompson, lebronJames, chrisBosh, hassanWhiteside];
//var Raptors = new Club(bench1, rajonRondo, bench3, chrisBosh, bench5, 0 , "Raptors");
//var Toronto = [bench1, rajonRondo, bench3, chrisBosh, bench5];
//var Suns = new Club(rayAllen, goranDragic, lebronJames, kevinGarnett, bench5, 0, "Suns");
//var Phoenix = [rayAllen, goranDragic, lebronJames, kevinGarnett, bench5];






var homeTeam = {team: SuperSonics, group: 0};
var awayTeam = {team: Warriors, group: 0};
homeTeam.group = homeTeam.team.G;
awayTeam.group = awayTeam.team.G;
















var homeBasket = 31245;
var awayBasket = 56472;

var ballPosition = awayTeam.team.pointGuard.name;


var homeTeamOffense = function(){
background(255, 0, 0);
fill(0, 0, 0);
text(homeTeam.team.name + ": " + homeTeam.team.score, 300, 200);
text(awayTeam.team.name + ": " + awayTeam.team.score, 100, 200);
fill(207, 145, 0);
ellipse(200, 25 , 50, 50);
ellipse(200, 375, 50, 50);
fill(0, 0, 0);
line(0, 200, 400, 200);
fill(homeTeam.team.uniform);
ellipse(200, 175, 50, 50);
ellipse(25, 25, 50, 50);
ellipse(375, 25, 50, 50);
ellipse(375, 100, 50, 50);
ellipse(25, 100, 50, 50);
fill(awayTeam.team.uniform);
ellipse(200, 125, 50, 50);
ellipse(75, 25, 50, 50);
ellipse(325, 25, 50, 50);
ellipse(325, 100, 50, 50);
ellipse(75, 100, 50, 50);
fill(homeTeam.team.lettering);
text(homeTeam.team.pointGuard.name, 185, 175);
text(homeTeam.team.powerForward.name, 10, 25);
text(homeTeam.team.center.name, 360, 25);
text(homeTeam.team.shootingGuard.name, 360, 100);
text(homeTeam.team.smallForward.name, 10, 100);
fill(awayTeam.team.lettering);
text(awayTeam.team.pointGuard.name, 185, 125);
text(awayTeam.team.powerForward.name, 60, 25);
text(awayTeam.team.center.name, 310, 25);
text(awayTeam.team.smallForward.name, 310, 100);
text(awayTeam.team.shootingGuard.name, 60, 100);
};
var awayTeamOffense = function(){
background(255, 0, 0);
fill(0, 0, 0);
text(awayTeam.team.name + ": " + awayTeam.team.score, 100, 200);
text(homeTeam.team.name + ": " + homeTeam.team.score, 300, 200);
fill(207, 145, 0);
ellipse(200, 25 , 50, 50);
ellipse(200, 375, 50, 50);
fill(0, 0, 0);
line(0, 200, 400, 200);
fill(awayTeam.team.uniform);
ellipse(200, 225, 50, 50);
ellipse(25, 375, 50, 50);
ellipse(375, 375, 50, 50);
ellipse(375, 300, 50, 50);
ellipse(25, 300, 50, 50);
fill(homeTeam.team.uniform);
ellipse(200, 275, 50, 50);
ellipse(75, 375, 50, 50);
ellipse(325, 375, 50, 50);
ellipse(325, 300, 50, 50);
ellipse(75, 300, 50, 50);
fill(homeTeam.team.lettering);
text(homeTeam.team.pointGuard.name, 185, 275);
text(homeTeam.team.powerForward.name, 60, 375);
text(homeTeam.team.center.name, 310, 375);
text(homeTeam.team.smallForward.name, 310, 300);
text(homeTeam.team.shootingGuard.name, 60, 300);
fill(awayTeam.team.lettering);
text(awayTeam.team.pointGuard.name, 185, 225);
text(awayTeam.team.powerForward.name, 10, 375);
text(awayTeam.team.center.name, 360, 375);
text(awayTeam.team.shootingGuard.name, 360, 300);
text(awayTeam.team.smallForward.name, 10, 300);
};
var a = function(){
if(ballPosition === homeTeam.team.pointGuard.name){
    homeTeamOffense();
    ellipse(200, 175, 20, 20);
            println(homeTeam.team.pointGuard.name);

}
if(ballPosition === homeTeam.team.shootingGuard.name){
    homeTeamOffense();
    ellipse(25, 100, 20, 20);

    println(homeTeam.team.shootingGuard.name);

}
if(ballPosition === homeTeam.team.smallForward.name){
    homeTeamOffense();
        ellipse(375, 100, 20, 20);

    println(homeTeam.team.smallForward.name);


}
if(ballPosition === homeTeam.team.powerForward.name){
    homeTeamOffense();
        ellipse(25, 25, 20, 20);


    println(homeTeam.team.powerForward.name);

}
if(ballPosition === homeTeam.team.center.name){
    homeTeamOffense();
        ellipse(375, 25, 20, 20);


    println(homeTeam.team.center.name);

}
if(ballPosition === awayTeam.team.pointGuard.name){
    awayTeamOffense();
        ellipse(200, 225, 20, 20);

    println(awayTeam.team.pointGuard.name);

}
if(ballPosition === awayTeam.team.shootingGuard.name){
    awayTeamOffense();
    ellipse(375, 300, 20, 20);

    println(awayTeam.team.shootingGuard.name);

}
if(ballPosition === awayTeam.team.smallForward.name){
    awayTeamOffense();
    ellipse(25, 300, 20, 20);

    println(awayTeam.team.smallForward.name);

}
if(ballPosition === awayTeam.team.powerForward.name){
    awayTeamOffense();
        ellipse(25, 375, 20, 20);

    println(awayTeam.team.powerForward.name);


}
if(ballPosition === awayTeam.team.center.name){
    awayTeamOffense();
        ellipse(375, 375, 20, 20);

    println(awayTeam.team.center.name);


}
if(ballPosition === homeBasket){
    homeTeamOffense();
    fill(0,0,0);
    ellipse(200, 25, 20, 20);
        println("Home Basket");


}
if(ballPosition === awayBasket){
    awayTeamOffense();
    fill(0,0,0);
    ellipse(200, 375, 20, 20);
            println("Away Basket");


}
};
var ballPerson = awayTeam.team.pointGuard;
var ballPosition = awayTeam.team.pointGuard.name;

/*var resetHome = function(){
    homeTeamOffense();
    ballPosition = homeTeam.team.pointGaurd.name;
    ballPerson = homeTeam.team.pointGuard;
    a();

};
var resetAway = function(){
    awayTeamOffense();
    ballPosition = awayTeam.team.pointGuard.name;
    ballPerson = awayTeam.team.pointGuard;
    a();
};*/





//var assistsU = 0;
//var assistPerson = 0;
var rebound = function(){
    var randBound = round(random(1,15));
    var homeRebounding = random(1,5);
    var awayRebounding = random(1,5);
    var reboundingArray = [0, 1, 3, 6, 10, 15];
    for(var q = 0; q <= 4; q++){
        if((randBound > reboundingArray[q]) && (randBound <= reboundingArray[q+1])){
            if((homeTeam.group[q].rebounding + homeRebounding) > (awayTeam.group[q].rebounding + awayRebounding)){
                ballPosition = homeTeam.group[q].name;
                ballPerson = homeTeam.group[q];
                println(ballPosition + "rebound");
                a();
            }
            else{
                ballPosition = awayTeam.group[q].name;
                ballPerson = awayTeam.group[q];
                println(ballPosition + "rebound");
                a();
            }
        }
    }
};
/*Player.prototype.asisstsR = function(){
    assistsU = this.assisting - round(random(1,5));
    if(assistsU > 0){
        assistsU = this.assisting - round(random(1,5));
    } else {
        assistsU = 0;
    }
};*/
Player.prototype.assistAway = function(){
    var prottype = ballPerson.position;
    if(prottype < 4){
        ballPosition = awayTeam.group[prottype+1].name;
        ballPerson = awayTeam.group[prottype+1];
                a();
    }
    if(prottype === 4){
                ballPosition = awayTeam.group[0].name;

        ballPerson = awayTeam.group[0];
        a();
    }

};
Player.prototype.assistHome = function(){
    var gottype = ballPerson.position;
    if(gottype < 4){
        ballPosition = homeTeam.group[gottype+1].name;
        ballPerson = homeTeam.group[gottype+1];
                a();

    }
    if(gottype === 4){
                ballPosition = homeTeam.group[0].name;

        ballPerson = homeTeam.group[0];
        a();
    }

};
Player.prototype.passHome = function(){
    var evil = random(1,20);
    var assistR = 0;
    if((this.position - 1) > -1){
        assistR = homeTeam.group[this.position - 1].assisting;
            println("homeTeamAssists" + assistR);

    }
    if((this.position - 1) === -1){
        assistR = homeTeam.group[4].assisting;
            println("homeTeamAssists" + assistR);

    }
    if(this.scoring + assistR > evil){
        println(ballPosition + "scored");
        ballPosition = homeBasket;
        homeTeam.team.score++;
        a();
        ballPosition = awayTeam.team.pointGuard.name;
        ballPerson = awayTeam.team.pointGuard;
        a();
        this.points++;
        println(this.name + this.points);
}
    if(this.scoring + assistR <= evil){
        println(ballPosition + "missed");
        rebound();
    }
};
Player.prototype.passAway = function(){
    var evilAway = random(1,20);
    var assistR = 0;
    if((this.position - 1) > -1){
        assistR = awayTeam.group[this.position - 1].assisting;
            println("awayTeamAssists" + assistR);

    }
    if((this.position - 1) === -1){
        assistR = awayTeam.group[4].assisting;
            println("awayTeamAssists" + assistR);

    }
    if(this.scoring + assistR > evilAway){
        println(ballPosition + "scored");
        ballPosition = awayBasket;
        awayTeam.team.score++;
        a();
        ballPosition = homeTeam.team.pointGuard.name;
        ballPerson = homeTeam.team.pointGuard;
        a();
        this.points++;
        println(this.name + this.points);

    }
    if(this.scoring + assistR <= evilAway){
        println(ballPosition + "missed");
        rebound();
    }

};

var actionAway = function(){
    var awayVar = round(random(1,7));
    for(var z = 0; z <= awayVar; z++){
        ballPerson.assistAway();
        a();
    }
    ballPerson.passAway();
};
var actionHome = function(){
    var homeVar = round(random(1,7));
    for(var qi = 0; qi <= homeVar; qi++){
        ballPerson.assistHome();
        a();
    }
    ballPerson.passHome();
};


awayTeamOffense();

keyPressed = function(){
    if(key.toString() === "a"){
        if((ballPosition = homeTeam.team.pointGuard.name) || (ballPosition = homeTeam.team.shootingGuard.name) || (ballPosition = homeTeam.team.smallForward.name) || (ballPosition = homeTeam.team.powerForward.name) || (ballPosition = homeTeam.team.center.name) || (ballPerson = homeTeam.team.pointGuard) || (ballPerson = homeTeam.team.shootingGuard) || (ballPerson = homeTeam.team.smallForward) || (ballPerson = homeTeam.team.powerForward) || (ballPerson = homeTeam.team.center)){
        actionHome();

        }
        if((ballPosition = awayTeam.team.pointGuard.name) || (ballPosition = awayTeam.team.shootingGuard.name) || (ballPosition = awayTeam.team.smallForward.name) || (ballPosition = awayTeam.team.powerForward.name) || (ballPosition = awayTeam.team.center.name) || (ballPerson = awayTeam.team.pointGuard) || (ballPerson = awayTeam.team.shootingGuard) || (ballPerson = awayTeam.team.smallForward) || (ballPerson = awayTeam.team.powerForward) || (ballPerson = awayTeam.team.center)){
        actionAway();
        }}
if(key.toString() === "b"){
    for(var n = 0; n <=4; n++){
            println(homeTeam.group[n].name + homeTeam.group[n].points);
            println(awayTeam.group[n].name + awayTeam.group[n].points);
        }}};





/*
var pair = function(a, b){
    homeTeam.team = a;
    awayTeam.team = b;
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;
};


var homeTeams = [Bench, Bench, Bench, Bench, Bench, Bench, Bench, Bench, Bench, Celtics, Celtics, Celtics, Celtics, Celtics, Celtics, Celtics, Celtics, SuperSonics,SuperSonics, SuperSonics, SuperSonics, SuperSonics, SuperSonics, SuperSonics, Heat, Heat, Heat, Heat, Heat, Heat, Bulls, Bulls, Bulls, Bulls, Bulls, Cavaliers, Cavaliers, Cavaliers, Cavaliers, Warriors, Warriors, Warriors, Knicks, Knicks, Clippers];
var awayTeams = [Celtics, SuperSonics, Heat, Bulls, Cavaliers, Warriors, Knicks, Clippers, Lakers, SuperSonics, Heat, Bulls, Cavaliers, Warriors, Knicks, Clippers, Lakers, Heat, Bulls, Cavaliers, Warriors, Knicks, Clippers, Lakers, Bulls, Cavaliers, Warriors, Knicks, Clippers, Lakers, Cavaliers, Warriors, Knicks, Clippers, Lakers, Warriors, Knicks, Clippers, Lakers, Knicks, Clippers, Lakers, Clippers, Lakers, Lakers,];

var aa = new Button({whatToDo: function(){pair(Bench, Celtics);}});
var ab = new Button({});
var ac = new Button({});
var ad = new Button({});
var ae = new Button({});
var af = new Button({});
var ag = new Button({});
var ah = new Button({});
var ai = new Button({});
var aj = new Button({});
var ak = new Button({});
var al = new Button({});
var am = new Button({});
var an = new Button({});
var ao = new Button({});
var ap = new Button({});
var ar = new Button({});
var as = new Button({});
var at = new Button({});
var au = new Button({});
var av = new Button({});
var aw = new Button({});
var ax = new Button({});
var ay = new Button({});
var az = new Button({});
var aaa = new Button({});
var aab = new Button({});
var aac = new Button({});
var aad = new Button({});
var aae = new Button({});
var aaf = new Button({});
var aag = new Button({});
var aah = new Button({});
var aai = new Button({});
var aaj = new Button({});
var aak = new Button({});
var aal = new Button({});
var aam = new Button({});
var aan = new Button({});
var aao = new Button({});
var aap = new Button({});
var aaq = new Button({});
var aar = new Button({});
var aas = new Button({});
var aat = new Button({});

var solution = [aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, ar, as, at, au, av, aw, ax, ay, az, aaa, aab, aac, aad, aae, aaf, aag, aah, aai, aaj, aak, aal, aam, aan, aao, aap, aaq, aar, aas, aat];
Button.prototype.orange = function(){
    this.onClick = function(){
        pair(this.homes, this.aways);
};

};

for(var i = 0; i <= (solution.length - 1); i++){
    solution[i].message = homeTeams[i].name + awayTeams[i].name;
    solution[i].homes = homeTeams[i];
    solution[i].aways = awayTeams[i];
    solution[i].orange();
    solution[i].x = 50 * i;
    solution[i].draw();
}

mouseClicked = function(){
    solution[i].whatToDo();
};




pair(Cavaliers, Lakers);




pair(Cavaliers, Clippers);
/*



















/*keyPressed = function(){
if(key.toString() === "a"){
    if((ballPosition = homeTeam.team.pointGuard.name) || (ballPosition = homeTeam.team.shootingGuard.name) || (ballPosition = homeTeam.team.smallForward.name) || (ballPosition = homeTeam.team.powerForward.name) || (ballPosition = homeTeam.team.center.name) || (ballPerson = homeTeam.team.pointGuard) || (ballPerson = homeTeam.team.shootingGuard) || (ballPerson = homeTeam.team.smallForward) || (ballPerson = homeTeam.team.powerForward) || (ballPerson = homeTeam.team.center)){
    actionHome();
    }
    if((ballPosition = awayTeam.team.pointGuard.name) || (ballPosition = awayTeam.team.shootingGuard.name) || (ballPosition = awayTeam.team.smallForward.name) || (ballPosition = awayTeam.team.powerForward.name) || (ballPosition = awayTeam.team.center.name) || (ballPerson = awayTeam.team.pointGuard) || (ballPerson = awayTeam.team.shootingGuard) || (ballPerson = awayTeam.team.smallForward) || (ballPerson = awayTeam.team.powerForward) || (ballPerson = awayTeam.team.center)){
    actionAway();
    }
    /*if(homeTeam.team.score + awayTeam.team.score === 50){
        homeTeam.lettering = awayTeam.lettering;
        homeTeam.uniform = awayTeam.uniform;
        homeTeam.team = awayTeam.team;
        homeTeam.group = awayTeam.group;
        awayTeam.lettering = homeTeam.lettering;
        awayTeam.uniform = homeTeam.uniform;
        awayTeam.team = homeTeam.team;
        awayTeam.group = homeTeam.group;
    }
}
if(key.toString() === "b"){
    for(var n = 0; n <=4; n++){
        println(homeTeam.group[n].name + homeTeam.group[n].points);
        println(awayTeam.group[n].name + awayTeam.group[n].points);
    }
}
};*/
/*var Scrimmage = new Button({
    x: 30,
    y: 230,
    message: "Play",
    lettering: color(255, 242, 0),
    uniform: color(0, 102, 255),
});
var BostonCeltics = new Button({team: Celtics});
var MiamiHeat = new Button({team: Heat});
var ClevelandCavaliers = new Button({team: Cavaliers});
var SeattleSupersonics = new Button({team: SuperSonics});
var GoldenStateWarriors = new Button({team: Warriors});
var ChicagoBulls = new Button({team: Bulls});
var BenchCityBench = new Button({team: Bench});
var LAClippers = new Button({team: Clippers});
var NewYorkKnicks = new Button({team: Knicks});
var LosAngelesLakers = new Button({team: Lakers});

var teams = [BostonCeltics, MiamiHeat, ClevelandCavaliers, SeattleSupersonics, GoldenStateWarriors, ChicagoBulls, LAClippers, NewYorkKnicks, LosAngelesLakers, BenchCityBench];





var x = 40;
var scene = 0;
Button.prototype.teamIsHome = function(){
    this.onClick = function(){
       homeTeam.team = this.team;
       println(homeTeam.team.name);
    };
};
Button.prototype.teamIsAway = function(){
    this.onClick = function(){
        awayTeam.team = this.team;
        println(awayTeam.team.name);
    };
};
for(var u = 0; u <= (teams.length - 1); u++){
    teams[u].x = (x * u);
    teams[u].y = x * u;
    teams[u].width = x;
    teams[u].height = x;
    teams[u].message = teams[u].team.name;
    teams[u].lettering = teams[u].team.lettering;
    teams[u].uniform = teams[u].team.uniform;
}
var SceneHomeTeamSelect = function(){
    background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsHome();
    }


};
var SceneAwayTeamSelect = function(){
    background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var KnicksHome = function(){scene = 0;
    var homeTeam = {team: Knicks, group: 0};
    var awayTeam = {team: Knicks, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }

};
var CelticsHome = function(){scene = 1;
    var homeTeam = {team: Celtics, group: 0};
    var awayTeam = {team: Celtics, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var HeatHome = function(){scene = 2;
    var homeTeam = {team: Heat, group: 0};
    var awayTeam = {team: Heat, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var CavaliersHome = function(){scene = 3;
    var homeTeam = {team: Cavaliers, group: 0};
    var awayTeam = {team: Cavaliers, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var LakersHome = function(){scene = 4;
    var homeTeam = {team: Lakers, group: 0};
    var awayTeam = {team: Lakers, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var ClippersHome = function(){scene = 5;
    var homeTeam = {team: Clippers, group: 0};
    var awayTeam = {team: Clippers, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var SuperSonicsHome = function(){scene = 6;
    var homeTeam = {team: SuperSonics, group: 0};
    var awayTeam = {team: SuperSonics, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var BullsHome = function(){scene = 7;
    var homeTeam = {team: Bulls, group: 0};
    var awayTeam = {team: Bulls, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};
var WarriorsHome = function(){scene = 8;
    var homeTeam = {team: Warriors, group: 0};
    var awayTeam = {team: Warriors, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }};
var BenchHome = function(){scene = 9;
    var homeTeam = {team: Bench, group: 0};
    var awayTeam = {team: Bench, group: 0};
    homeTeam.group = homeTeam.team.G;
    awayTeam.group = awayTeam.team.G;background(255, 255, 255);
    for(var t = 0; t <= teams.length - 1; t++){
        teams[t].draw();
    }
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].teamIsAway();
    }
};

var ScenePlay = function(){
    awayTeamOffense();
       keyPressed = function(){
    if(key.toString() === "a"){
        if((ballPosition = homeTeam.team.pointGuard.name) || (ballPosition = homeTeam.team.shootingGuard.name) || (ballPosition = homeTeam.team.smallForward.name) || (ballPosition = homeTeam.team.powerForward.name) || (ballPosition = homeTeam.team.center.name) || (ballPerson = homeTeam.team.pointGuard) || (ballPerson = homeTeam.team.shootingGuard) || (ballPerson = homeTeam.team.smallForward) || (ballPerson = homeTeam.team.powerForward) || (ballPerson = homeTeam.team.center)){
        actionHome();
        }
        if((ballPosition = awayTeam.team.pointGuard.name) || (ballPosition = awayTeam.team.shootingGuard.name) || (ballPosition = awayTeam.team.smallForward.name) || (ballPosition = awayTeam.team.powerForward.name) || (ballPosition = awayTeam.team.center.name) || (ballPerson = awayTeam.team.pointGuard) || (ballPerson = awayTeam.team.shootingGuard) || (ballPerson = awayTeam.team.smallForward) || (ballPerson = awayTeam.team.powerForward) || (ballPerson = awayTeam.team.center)){
        actionAway();
        }
        /*if(homeTeam.team.score + awayTeam.team.score === 50){
            homeTeam.lettering = awayTeam.lettering;
            homeTeam.uniform = awayTeam.uniform;
            homeTeam.team = awayTeam.team;
            homeTeam.group = awayTeam.group;
            awayTeam.lettering = homeTeam.lettering;
            awayTeam.uniform = homeTeam.uniform;
            awayTeam.team = homeTeam.team;
            awayTeam.group = homeTeam.group;
        }
    }
    if(key.toString() === "b"){
        for(var n = 0; n <=4; n++){
            println(homeTeam.group[n].name + homeTeam.group[n].points);
            println(awayTeam.group[n].name + awayTeam.group[n].points);
        }
    }
    };


};
println(homeTeam.team.name);
println(awayTeam.team.name);*/
/*var a = function(){
if(ballPosition === homeTeam.team.pointGuard.name){
    homeTeamOffense();
    ellipse(200, 175, 20, 20);
}
if(ballPosition === homeTeam.team.shootingGuard.name){    homeTeamOffense();


    ellipse(25, 100, 20, 20);
}
if(ballPosition === homeTeam.team.smallForward.name){    homeTeamOffense();


    ellipse(375, 100, 20, 20);
}
if(ballPosition === homeTeam.team.powerForward.name){    homeTeamOffense();


    ellipse(25, 25, 20, 20);
}
if(ballPosition === homeTeam.team.center.name){    homeTeamOffense();


    ellipse(375, 25, 20, 20);
}
if(ballPosition === awayTeam.team.pointGuard.name){awayTeamOffense();


    ellipse(200, 225, 20, 20);
}
if(ballPosition === awayTeam.team.shootingGuard.name){awayTeamOffense();


    ellipse(375, 300, 20, 20);
}
if(ballPosition === awayTeam.team.smallForward.name){awayTeamOffense();


    ellipse(25, 300, 20, 20);
}
if(ballPosition === awayTeam.team.powerForward.name){awayTeamOffense();


    ellipse(25, 375, 20, 20);
}
if(ballPosition === awayTeam.team.center.name){awayTeamOffense();


    ellipse(375, 375, 20, 20);
}
if(ballPosition === homeBasket){
    homeTeamOffense();
    ellipse(200, 25, 20, 20);

}
if(ballPosition === awayBasket){
    awayTeamOffense();
    ellipse(200, 375, 20, 20);

}
};













/*var action = function(){
    whereIsTheBall();
        if((ballPerson.person.scoring + random(1,5)) >= (ballPerson.person.assisting + random(1,5))){
            if((random(1,20)) < (ballPerson.person.scoring)){
                whereIsTheBall();

                if((ballPerson = homeTeam.team.pointGuard.person) || (ballPerson = homeTeam.team.shootingGuard.person) || (ballPerson = homeTeam.team.smallForward.person) || (ballPerson = homeTeam.team.powerForward.person) || (ballPerson = homeTeam.team.center.person)){
                                    whereIsTheBall();
                resetAway();

                ballPosition = homeBasket;}
                 if((ballPerson = awayTeam.team.pointGuard.person) || (ballPerson = awayTeam.team.shootingGuard.person) || (ballPerson = awayTeam.team.smallForward.person) || (ballPerson = awayTeam.team.powerForward.person) || (ballPerson = awayTeam.team.center.person)){
                                     whereIsTheBall();
                resetHome();

                     ballPosition = awayBasket;}
                whereIsTheBall();



            }else{
                whereIsTheBall();
                if(round(random(1,2)) === 1){
        if((homeTeam.team.powerForward.rebounding + random(1,5)) >= (awayTeam.team.powerForward.rebounding + random(1,5))){
            ballPosition = homeTeam.team.powerForward.name;
            whereIsTheBall();
            action();
        }
        if((homeTeam.team.powerForward.rebounding + random(1,5)) < (awayTeam.team.powerForward.rebounding + random(1,5))){
            ballPosition = awayTeam.team.powerForward.name;
            whereIsTheBall();
            action();
        }
    }
    if(round(random(1,2)) === 2){
        if((homeTeam.team.center.rebounding + random(1,5)) >= (awayTeam.team.center.rebounding + random(1,5))){
            ballPosition = homeTeam.team.center.name;
            whereIsTheBall();
            action();
        }
        if((homeTeam.team.center.rebounding + random(1,5)) < (awayTeam.team.center.rebounding + random(1,5))){
            ballPosition = awayTeam.team.center.name;
            whereIsTheBall();
            action();
        }
    }
            }
        if((ballPerson.person.scoring + random(1,5)) < (ballPerson.person.assisting + random(1,5))){
    if(ballPosition === homeTeam.team.pointGuard.name){
        ballPosition = homeTeam.team.shootingGuard.name;
        whereIsTheBall();
        action();
    }
    if(ballPosition === homeTeam.team.shootingGuard.name){
        ballPosition = homeTeam.team.smallForward.name;
        whereIsTheBall();
        action();
    }
     if(ballPosition === homeTeam.team.smallForward.name){
        ballPosition = homeTeam.team.powerForward.name;
        whereIsTheBall();
        action();
    }
    if(ballPosition === homeTeam.team.powerForward.name){
        ballPosition = homeTeam.team.center.name;
        whereIsTheBall();
        action();
    }
     if(ballPosition === homeTeam.team.center.name){
        ballPosition = homeTeam.team.pointGuard.name;
        whereIsTheBall();
        action();
    }
    if(ballPosition === awayTeam.team.pointGuard.name){
        ballPosition = awayTeam.team.shootingGuard.name;
        whereIsTheBall();
        action();
    }
    if(ballPosition === awayTeam.team.shootingGuard.name){
        ballPosition = awayTeam.team.smallForward.name;
        whereIsTheBall();
        action();
    }
     if(ballPosition === awayTeam.team.smallForward.name){
        ballPosition = awayTeam.team.powerForward.name;
        whereIsTheBall();
        action();
    }
    if(ballPosition === awayTeam.team.powerForward.name){
        ballPosition = awayTeam.team.center.name;
        whereIsTheBall();
        action();
    }
     if(ballPosition === awayTeam.team.center.name){
        ballPosition = awayTeam.team.pointGuard.name;
        whereIsTheBall();
        action();
    }
        }}
};

keyPressed = function(){
    action();
    score();
    println(ballPosition);
};


















/*var action = function(){
    if((ballPosition.person = homeTeam.team.pointGuard) || (ballPosition.person = homeTeam.team.shootingGuard) || (ballPosition.person = homeTeam.team.smallForward) || (ballPosition.person = homeTeam.team.powerForward) || (ballPosition.person = homeTeam.team.center)){
    if((ballPosition.person.scoring + round(random(1,5))) > ballPosition.person.assisting + round(random(1,5))){
        if(round(random(1,20)) < ballPosition.person.scoring){
            ballPosition.x = 200;
            ballPosition.y = 25;
            homeTeamOffense();
            fill(255, 162, 0);
            ellipse(ballPosition.x, ballPosition.y, 20, 20);
            ballPosition.person.points = ballPosition.person.points + 2;
            score();
            resetAway();

        }
        if(round(random(1,20)) >= ballPosition.person.scoring){
           if(round(random(1,2)) === 1){
    if(homeTeam.team.powerForward.rebounding + round(random(1,5)) > awayTeam.team.powerForward.rebounding){
        ballPosition.x = 25;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.powerForward;
        resetHome();
    }
    if(homeTeam.team.powerForward.rebounding + round(random(1,5)) <= awayTeam.team.powerForward.rebounding){
        ballPosition.x = 25;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.powerForward;
        resetAway();
    }
}else
        if(homeTeam.team.center.rebounding + round(random(1,5)) > awayTeam.team.center.rebounding){
        ballPosition.x = 375;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.center;
        resetHome();
    }
    if(homeTeam.team.center.rebounding + round(random(1,5)) <= awayTeam.team.center.rebounding){
        ballPosition.x = 375;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.center;
        resetAway();
    }
        }
    }else{
        if(ballPosition.person === homeTeam.team.pointGuard){
        ballPosition.x = 25;
        ballPosition.y = 100;
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.shootingGuard;
    }
    if(ballPosition.person === homeTeam.team.shootingGuard){
        ballPosition.x = 375;
        ballPosition.y = 100;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.smallForward;
        action();
    }
    if(ballPosition.person === homeTeam.team.smallForward){
        ballPosition.x = 25;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.powerForward;
                action();

    }
    if(ballPosition.person === homeTeam.team.powerForward){
        ballPosition.x = 375;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.Center;
                action();

    }
     if(ballPosition.person === homeTeam.team.Center){
        ballPosition.x = 200;
        ballPosition.y = 175;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.pointGuard;
                action();

    }

    //

    if(ballPosition.person === awayTeam.team.pointGuard){
        ballPosition.x = 375;
        ballPosition.y = 300;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.shootingGuard;
                action();

    }
    if(ballPosition.person === awayTeam.team.shootingGuard){
        ballPosition.x = 25;
        ballPosition.y = 300;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.smallForward;
                action();

    }
    if(ballPosition.person === awayTeam.team.smallForward){
        ballPosition.x = 25;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.powerForward;
                action();

    }

    if(ballPosition.person === awayTeam.team.powerForward){
        ballPosition.x = 375;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.Center;
                action();

    }
     if(ballPosition.person === awayTeam.team.Center){
        ballPosition.x = 200;
        ballPosition.y = 225;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.pointGuard;
                action();

    }

}
    }  if((ballPosition.person = awayTeam.team.pointGuard) || (ballPosition.person = awayTeam.team.shootingGuard) || (ballPosition.person = awayTeam.team.smallForward) || (ballPosition.person = awayTeam.team.powerForward) || (ballPosition.person = awayTeam.team.center)){if(round(random(1,20)) < ballPosition.person.scoring){
            ballPosition.x = 200;
            ballPosition.y = 375;
            awayTeamOffense();
            fill(255, 162, 0);
            ellipse(ballPosition.x, ballPosition.y, 20, 20);
            ballPosition.person.points = ballPosition.person.points + 2;
            score();
            resetHome();

        }
        if(round(random(1,20)) >= ballPosition.person.scoring){
            if(round(random(1,2)) === 1){
    if(homeTeam.team.powerForward.rebounding + round(random(1,5)) > awayTeam.team.powerForward.rebounding){
        ballPosition.x = 25;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.powerForward;
        resetHome();
    }
    if(homeTeam.team.powerForward.rebounding + round(random(1,5)) <= awayTeam.team.powerForward.rebounding){
        ballPosition.x = 25;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.powerForward;
        resetAway();
    }
}else
        if(homeTeam.team.center.rebounding + round(random(1,5)) > awayTeam.team.center.rebounding){
        ballPosition.x = 375;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.center;
        resetHome();
    }
    if(homeTeam.team.center.rebounding + round(random(1,5)) <= awayTeam.team.center.rebounding){
        ballPosition.x = 375;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.center;
        resetAway();
    }
        }
    }else{
        if(ballPosition.person === homeTeam.team.pointGuard){
        ballPosition.x = 25;
        ballPosition.y = 100;
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.shootingGuard;
    }
    if(ballPosition.person === homeTeam.team.shootingGuard){
        ballPosition.x = 375;
        ballPosition.y = 100;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.smallForward;
        action();
    }
    if(ballPosition.person === homeTeam.team.smallForward){
        ballPosition.x = 25;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.powerForward;
                action();

    }
    if(ballPosition.person === homeTeam.team.powerForward){
        ballPosition.x = 375;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.Center;
                action();

    }
     if(ballPosition.person === homeTeam.team.Center){
        ballPosition.x = 200;
        ballPosition.y = 175;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.pointGuard;
                action();

    }

    //

    if(ballPosition.person === awayTeam.team.pointGuard){
        ballPosition.x = 375;
        ballPosition.y = 300;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.shootingGuard;
                action();

    }
    if(ballPosition.person === awayTeam.team.shootingGuard){
        ballPosition.x = 25;
        ballPosition.y = 300;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.smallForward;
                action();

    }
    if(ballPosition.person === awayTeam.team.smallForward){
        ballPosition.x = 25;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.powerForward;
                action();

    }

    if(ballPosition.person === awayTeam.team.powerForward){
        ballPosition.x = 375;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.Center;
                action();

    }
     if(ballPosition.person === awayTeam.team.Center){
        ballPosition.x = 200;
        ballPosition.y = 225;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.pointGuard;
                action();

    }}

};

var assisting = function(){
    if(ballPosition.person === homeTeam.team.pointGuard){
        ballPosition.x = 25;
        ballPosition.y = 100;
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.shootingGuard;
    }
    if(ballPosition.person === homeTeam.team.shootingGuard){
        ballPosition.x = 375;
        ballPosition.y = 100;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.smallForward;
        action();
    }
    if(ballPosition.person === homeTeam.team.smallForward){
        ballPosition.x = 25;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.powerForward;
                action();

    }
    if(ballPosition.person === homeTeam.team.powerForward){
        ballPosition.x = 375;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.Center;
                action();

    }
     if(ballPosition.person === homeTeam.team.Center){
        ballPosition.x = 200;
        ballPosition.y = 175;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.pointGuard;
                action();

    }

    //

    if(ballPosition.person === awayTeam.team.pointGuard){
        ballPosition.x = 375;
        ballPosition.y = 300;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.shootingGuard;
                action();

    }
    if(ballPosition.person === awayTeam.team.shootingGuard){
        ballPosition.x = 25;
        ballPosition.y = 300;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.smallForward;
                action();

    }
    if(ballPosition.person === awayTeam.team.smallForward){
        ballPosition.x = 25;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.powerForward;
                action();

    }

    if(ballPosition.person === awayTeam.team.powerForward){
        ballPosition.x = 375;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.Center;
                action();

    }
     if(ballPosition.person === awayTeam.team.Center){
        ballPosition.x = 200;
        ballPosition.y = 225;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.pointGuard;
                action();

    }

};
var rebounding = function(){
    if(round(random(1,2)) === 1){
    if(homeTeam.team.powerForward.rebounding + round(random(1,5)) > awayTeam.team.powerForward.rebounding){
        ballPosition.x = 25;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.powerForward;
        resetHome();
    }
    if(homeTeam.team.powerForward.rebounding + round(random(1,5)) <= awayTeam.team.powerForward.rebounding){
        ballPosition.x = 25;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.powerForward;
        resetAway();
    }
}else
        if(homeTeam.team.center.rebounding + round(random(1,5)) > awayTeam.team.center.rebounding){
        ballPosition.x = 375;
        ballPosition.y = 25;
        homeTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = homeTeam.team.center;
        resetHome();
    }
    if(homeTeam.team.center.rebounding + round(random(1,5)) <= awayTeam.team.center.rebounding){
        ballPosition.x = 375;
        ballPosition.y = 375;
        awayTeamOffense();
        fill(255, 162, 0);
        ellipse(ballPosition.x, ballPosition.y, 20, 20);
        ballPosition.person = awayTeam.team.center;
        resetAway();
    }

};

resetHome();
keyPressed = function(){
    action();
    text(homeTeam.team.score, 0, 200);
    text(awayTeam.team.score, 350, 200);

};
ellipse(ballPosition.x, ballPosition.y, 20, 20);*/
/*
WarriorsHome();


var Home = new Button({x: 300, lettering: color(250, 0, 0), y: 100, message: "Home", onClick: function(){
    SceneHomeTeamSelect();
}});
var Away = new Button({x: 100, lettering: color(250, 0, 0), y: 300, message: "Away", onClick: function(){
    SceneAwayTeamSelect();
}});
var Play = new Button({x: 100, lettering: color(250, 0, 0), y: 200, width: 50, height: 50, message: "Play", onClick: function(){
    ScenePlay();
}});
var Next = new Button({x: 200, lettering: color(250, 0, 0), y: 100, width: 50, height: 50, message: "Nect", onClick: function(){
    if(scene === 0){
        CelticsHome();
    }if(scene === 1){
        HeatHome();
    }if(scene === 2){
        CavaliersHome();
    }if(scene === 3){
        LakersHome();
    }if(scene === 4){
        ClippersHome();
    }if(scene === 5){
        SuperSonicsHome();
    }if(scene === 6){
        BullsHome();
    }if(scene === 7){
        WarriorsHome();
    }if(scene === 8){
        BenchHome();
    }if(scene === 9){
        KnicksHome();
    }
}});

Home.draw();
Away.draw();
Play.draw();


mouseClicked = function(){
    for(var i = 0; i <= (teams.length - 1); i++){
        teams[i].whatToDo();
    }
    Play.whatToDo();
    Next.whatToDo();

};*/
