/* Képek listája */
var imagesData = [
    {
        photo: "images/SIMSON-MANIFESTO.jpg",
        thumb: "images/thumbnails/SIMSON-MANIFESTO_thumbnail.jpg",
        title: "Simson: A kezdetek",
        description: "1854-ben Lőb és Moses Simson megvásárolta a suhli hengermű 1/3-át, 1856-tól már Simson és Társa néven. A motorok fejlesztése 1934-ben indult a közben új néven futó Berlin-Shuler Waffen-ben (Berlin-Shuli fegyvergyár), de az első motorkerékpár csak 1936-ban gördült le a futószalagról."
    },
    {
        photo: "images/simsonsr2.jpg",
        thumb: "images/thumbnails/simsonsr2_thumbnail.jpg",
        title: "Simson Sr2",
        description: "Az Sr2 volt az első igazán 'megbízható' motorizált bicikli. Könnyen karbantartható, egyszerű működése révén a vásárlók hamar megkedvelték.Kedvelt munkába járó eszköz lett."
    },
    {
        photo: "images/KR51per2.jpg",
        thumb: "images/thumbnails/KR51per2_thumbnail.jpg",
        title: "Schwalbe",
        description: " A legnagyobb darabszámban eladott kismortor a 'Fecske' 1986 végéig folyt a gyártása. Napjainkban még fut néhány darab belőle az utakon. Igazi ikonná érett mára."
    },
    {
        photo: "images/simsonenduro.jpg",
        thumb: "images/thumbnails/simsonenduro_thumbnail.jpg",
        title: "Simson Enduro",
        description: "Az Enduro a fiatalok nagy kedvence lett. Műszaki alapjai ugyanazok, mint a B51-es típusé de a felhúzott kipufogó és a magas kormány terepmotoros kinézetet kölcsönzött neki."
    },
    {
        photo: "images/Simsonsr50.jpg",
        thumb: "images/thumbnails/Simsonsr50_thumbnail.jpg",
        title: "Simson robogó",
        description: "A modern idők Simsonja a fal leomlása körüli időkben jött létre és felvette a versenyt az akkori olasz robogókkal, ahhonan a dizájnt is kölcsönözte."
    },
    {
        photo: "images/SimsonSR53.jpg",
        thumb: "images/thumbnails/SimsonSR53_thumbnail.jpg",
        title: "Simson SR53",
        description: "Az SR53 a gyár utolsó próbálkozásai közé tartozott, de már nem mentette meg a bezárástól. Kevés készült belőle ezért a nehezen fel lelhető darabok igen magas áron cserélnek gazdát."
    },
    {
        photo: "images/Simsonstar.jpg",
        thumb: "images/thumbnails/Simsonstar_thumbnail.jpg",
        title: "Simson Star",
        description: "A Star volt az első igazán népszerű és megfizethető kismotor. Viszonylagos megbízhatósága miatt sokan kedvelték. Mind a mai napig használható egy- egy jól karbantartott példány."
    },
   
]

/* A nagy és kis képek indexeit tartalmazó változók deklarálása */
var currentPhoto = 0
var activeIndex = currentPhoto

/* A nagy képek változóba történő beolvasásának függvénye */
var loadImageContainer = function(currentPhoto) {
    $("#photo").attr("src", imagesData[currentPhoto].photo)
    $("#image-title").text(imagesData[currentPhoto].title)
    $("#image-description").text(imagesData[currentPhoto].description)
}

/* A kis képek beolvasása és html tag-jeinek létrehozása */ 
function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

/* Betölti az első fotót és a thumbnail-eket. */
loadImageContainer(currentPhoto)
imagesData.forEach(loadThumbnails)
$(`.thumbnail[data-idx="${activeIndex}"]`).css({"box-shadow": "0 4px 8px black"})

/* A balra és jobbra nyilakkal történő navigálás lekezelése */
$("#arrow-left").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = imagesData.length - 1
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$("#arrow-right").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++
    } else {
        currentPhoto = 0
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

/* A kiválasztott kis képeknek megfelelő nagy fotóra váltás */
$(".thumbnail").click(function(event) {
    activeIndex = currentPhoto
    var idxClicked = $(event.target).attr("data-idx")
    var idxNumber = parseInt(idxClicked)
    currentPhoto = idxNumber
    activeThumbnail(activeIndex)
    loadImageContainer(currentPhoto)
})

function activeThumbnail (activeIndex) {
    $(`.thumbnail[data-idx="${activeIndex}"]`).removeAttr("style")
    activeIndex = currentPhoto
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("box-shadow", "0 4px 8px black")
}