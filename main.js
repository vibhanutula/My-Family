var Images = [
    "http://www.eac.nsw.edu.au/wp-content/uploads/2018/08/Farmer-Boy-cartoon.png",
    "https://openclipart.org/image/2400px/svg_to_png/286681/Cartoon-Girl-With-Glasses.png",
    "https://clipground.com/images/cutest-baby-boy-clipart-5.jpg",
    "https://clipartstation.com/wp-content/uploads/2017/11/mother-clipart-png-7.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Cartoon_Businessman_Ready_For_Work.svg/1200px-Cartoon_Businessman_Ready_For_Work.svg.png",
    "http://www.clker.com/cliparts/t/v/S/8/W/P/grandma-hi.png",
    "https://clipartstation.com/wp-content/uploads/2018/09/grandfather-clipart-1.png",
    "https://pluspng.com/img-png/animated-dog-png-hd-free-hd-anime-clipart-3402.png",
    "https://st3.depositphotos.com/10968552/13929/v/950/depositphotos_139297894-stock-illustration-three-generation-family-and-pet.jpg",
    "https://i.pinimg.com/originals/c3/87/c2/c387c268bf53f2b5b35498c078649795.png",
];

var names = [
    "Dick Wilson",
    "Lily Wilson",
    "Harry Wilson",
    "Mary Wilson",
    "John Wilson",
    "Sarah Johnson",
    "Tom Johnson",
    "Jacky",
    "My Family",
    "Kitty",
];

var i = 0;

function Next() {
    i++;
    var Family_Members = 10;
    if(i > Family_Members)
    {
        i = 0;
    }
    var Updiated = Images[i];
    var Upnated = names[i];
    document.getElementById("Famiage").src = Updiated;
    document.getElementById("Names_Members").innerHTML = Upnated;

}