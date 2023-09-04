var skinsAvailable = [], beardsAvailable = [], mouthsAvailable = [], hairsAvailable = [], eyesAvailable = [], bodytraitsAvailable = [], topdressAvailable = [], bottomdressAvailable = [], accessoiresAvailable = [], shoesAvailable = [], hatsAvailable = [], glassesAvailable = [], lefthandAvailable = [], righthandAvailable = [];

var removedTraits;

var accounts;

var baseLayer = [],
    shoes = [],
    mouth = [],
    hair = [],
    beard = [],
    layer = [],
    eye = [],
    dressBottomLayer = [],
    skinLayer = [],
    bodyLayer = [],
    accessoireLayer = [];
    leftHandLayer = [];
    rightHandLayer = [];
    hatLayer = [];
    glassesLayer = [];    

function layerByType(type) {
    if (type === "bodytrait") {
        return bodyLayer;
    } else if (type === "dress") {
        return layer;
    } else if (type === "accessoire") {
        return accessoireLayer;
    } else if (type === "leftHand") {
        return leftHandLayer;        
    } else if (type === "rightHand") {
        return rightHandLayer;           
    } else if (type === "dressBottom") {
        return dressBottomLayer;
    } else if (type === "shoes") {
        return shoes;
    } else if (type === "mouth") {
        return mouth;
    } else if (type === "hair") {
        return hair;
    } else if (type === "beard") {
        return beard;
    } else if (type === "skin") {
        return skinLayer;
    } else if (type === "eye") {
        return eye;
    } else if (type === "hat") {
        return hatLayer;
    } else if (type === "glasses") {
        return glassesLayer;
    }
}

function availableTraitsByType(type) {
    if (type === "bodytrait") {
        return bodytraitsAvailable;
    } else if (type === "dress") {
        return topdressAvailable;
    } else if (type === "accessoire") {
        return accessoiresAvailable;
    } else if (type === "leftHand") {
        return lefthandAvailable;        
    } else if (type === "rightHand") {
        return righthandAvailable;           
    } else if (type === "dressBottom") {
        return bottomdressAvailable;
    } else if (type === "shoes") {
        return shoesAvailable;
    } else if (type === "mouth") {
        return mouthsAvailable;
    } else if (type === "hair") {
        return hairsAvailable;
    } else if (type === "beard") {
        return beardsAvailable;
    } else if (type === "skin") {
        return skinsAvailable;
    } else if (type === "eye") {
        return eyesAvailable;
    } else if (type === "hat") {
        return hatsAvailable;
    } else if (type === "glasses") {
        return glassesAvailable;
    }
}

function fillAvailableTraits(type) {
    var minTrait = parseInt($("div[traittype='" + type + "']").attr("minTrait"));        
    var maxTrait = parseInt($("div[traittype='" + type + "']").attr("maxTrait"));

    var traitArray = availableTraitsByType(type);
    for(var i = minTrait; i <= maxTrait; i++){
      traitArray.push(i);
    }
}

function removeFromArray(array, value) {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
}

$(document).ready(function() {
    
    fillAvailableTraits("bodytrait");
    fillAvailableTraits("dress");
    fillAvailableTraits("accessoire");
    fillAvailableTraits("leftHand");
    fillAvailableTraits("rightHand");
    fillAvailableTraits("dressBottom");
    fillAvailableTraits("shoes");
    fillAvailableTraits("mouth");
    fillAvailableTraits("hair");
    fillAvailableTraits("beard");
    fillAvailableTraits("skin");
    fillAvailableTraits("eye");
    fillAvailableTraits("hat");
    fillAvailableTraits("glasses");


    $("#mint").click(function() {
        mint();
    });

    $("#randomize").click(function() {
        randomize();
    });

    $("#clear").click(function() {
        clearAll();
    });    

    $("#priceHelp").click(function() {
        $("#priceInfo").toggleClass("d-none");
    });        

    setNrMinted();

    var can = document.getElementById('canvas0');
    var ctx = can.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    baseLayer.push({
        can: can,
        img: new Image(),
        ctx: ctx,
        current: 1,
        active: true
    });

    baseLayer[0].img.onload = function() {
        baseLayer[0].ctx.drawImage(baseLayer[0].img, 0, 0, 300, 600);
    };

    var can8 = document.getElementById('skinCan0');
    var ctx8 = can8.getContext('2d');
    ctx8.imageSmoothingEnabled = false;

    skinLayer.push({
        can: can8,
        img: new Image(),
        ctx: ctx8,
        current: 623,
        active: true
    });

    skinLayer[0].img.onload = function() {
        skinLayer[0].ctx.drawImage(skinLayer[0].img, 0, 0, 300, 600);
    };

    var can9 = document.getElementById('beardCan0');
    var ctx9 = can9.getContext('2d');
    ctx9.imageSmoothingEnabled = false;

    beard.push({
        can: can9,
        img: new Image(),
        ctx: ctx9,
        current: 999,
        active: true
    });

    beard[0].img.onload = function() {
        beard[0].ctx.drawImage(beard[0].img, 0, 0, 300, 600);
    };

    var can10 = document.getElementById('mouthCan0');
    var ctx10 = can10.getContext('2d');
    ctx10.imageSmoothingEnabled = false;

    mouth.push({
        can: can10,
        img: new Image(),
        ctx: ctx10,
        current: 999,
        active: true
    });

    mouth[0].img.onload = function() {
        mouth[0].ctx.drawImage(mouth[0].img, 0, 0, 300, 600);
    };

    var can11 = document.getElementById('hairCan0');
    var ctx11 = can11.getContext('2d');
    ctx11.imageSmoothingEnabled = false;

    hair.push({
        can: can11,
        img: new Image(),
        ctx: ctx11,
        current: 999,
        active: true
    });

    hair[0].img.onload = function() {
        hair[0].ctx.drawImage(hair[0].img, 0, 0, 300, 600);
    };

    var can12 = document.getElementById('eyeCan0');
    var ctx12 = can12.getContext('2d');
    ctx12.imageSmoothingEnabled = false;

    eye.push({
        can: can12,
        img: new Image(),
        ctx: ctx12,
        current: 999,
        active: true
    });

    eye[0].img.onload = function() {
        eye[0].ctx.drawImage(eye[0].img, 0, 0, 300, 600);
    };

    var can14 = document.getElementById('hatCan0');
    var ctx14 = can14.getContext('2d');
    ctx14.imageSmoothingEnabled = false;

    hatLayer.push({
        can: can14,
        img: new Image(),
        ctx: ctx14,
        current: 999,
        active: true
    });

    hatLayer[0].img.onload = function() {
        hatLayer[0].ctx.drawImage(hatLayer[0].img, 0, 0, 300, 600);
    };

    var can15 = document.getElementById('glassesCan0');
    var ctx15 = can15.getContext('2d');
    ctx15.imageSmoothingEnabled = false;

    glassesLayer.push({
        can: can15,
        img: new Image(),
        ctx: ctx15,
        current: 999,
        active: true
    });

    glassesLayer[0].img.onload = function() {
        glassesLayer[0].ctx.drawImage(glassesLayer[0].img, 0, 0, 300, 600);
    };        

    var can3 = document.getElementById('bodytraitCan0');
    var ctx3 = can3.getContext('2d');
    ctx3.imageSmoothingEnabled = false;

    bodyLayer.push({
        can: can3,
        img: new Image(),
        ctx: ctx3,
        current: 999,
        active: true
    });

    bodyLayer[0].img.onload = function() {
        bodyLayer[0].ctx.drawImage(bodyLayer[0].img, 0, 0, 300, 600);
    };


    var can4 = document.getElementById('dressCan0');
    var ctx4 = can4.getContext('2d');
    ctx4.imageSmoothingEnabled = false;

    layer.push({
        can: can4,
        img: new Image(),
        ctx: ctx4,
        current: 999,
        active: true
    });

    layer[0].img.onload = function() {
        layer[0].ctx.drawImage(layer[0].img, 0, 0, 300, 600);
    };

    var can7 = document.getElementById('dressBottomCan0');
    var ctx7 = can7.getContext('2d');
    ctx7.imageSmoothingEnabled = false;

    dressBottomLayer.push({
        can: can7,
        img: new Image(),
        ctx: ctx7,
        current: 999,
        active: true
    });

    dressBottomLayer[0].img.onload = function() {
        dressBottomLayer[0].ctx.drawImage(dressBottomLayer[0].img, 0, 0, 300, 600);
    };

    var can5 = document.getElementById('accessoireCan0');
    var ctx5 = can5.getContext('2d');
    ctx5.imageSmoothingEnabled = false;

    accessoireLayer.push({
        can: can5,
        img: new Image(),
        ctx: ctx5,
        current: 999,
        active: true
    });

    accessoireLayer[0].img.onload = function() {
        accessoireLayer[0].ctx.drawImage(accessoireLayer[0].img, 0, 0, 300, 600);
    };

    var can13 = document.getElementById('leftHandCan0');
    var ctx13 = can13.getContext('2d');
    ctx13.imageSmoothingEnabled = false;

    leftHandLayer.push({
        can: can13,
        img: new Image(),
        ctx: ctx13,
        current: 999,
        active: true
    });

    leftHandLayer[0].img.onload = function() {
        leftHandLayer[0].ctx.drawImage(leftHandLayer[0].img, 0, 0, 300, 600);
    };

    var can16 = document.getElementById('rightHandCan0');
    var ctx16 = can16.getContext('2d');
    ctx16.imageSmoothingEnabled = false;

    rightHandLayer.push({
        can: can16,
        img: new Image(),
        ctx: ctx16,
        current: 999,
        active: true
    });

    rightHandLayer[0].img.onload = function() {
        rightHandLayer[0].ctx.drawImage(rightHandLayer[0].img, 0, 0, 300, 600);
    };    

    var can6 = document.getElementById('shoesCan0');
    var ctx6 = can6.getContext('2d');
    ctx6.imageSmoothingEnabled = false;

    shoes.push({
        can: can6,
        img: new Image(),
        ctx: ctx6,
        current: 999,
        active: true
    });

    shoes[0].img.onload = function() {
        shoes[0].ctx.drawImage(shoes[0].img, 0, 0, 300, 600);
    };

    baseLayer[0].img.src = "dudes/img/outline.png";
    skinLayer[0].img.src = "dudes/img/data/" + skinLayer[0].current + ".png";
     $("div[traittype='skin']").find(".traitDesc").text(traitDescs[523]);

    beard[0].img.src = "dudes/img/data/" + beard[0].current + ".png";
    mouth[0].img.src = "dudes/img/data/" + mouth[0].current + ".png";
    hair[0].img.src = "dudes/img/data/" + hair[0].current + ".png";
    hatLayer[0].img.src = "dudes/img/data/" + hatLayer[0].current + ".png";
    glassesLayer[0].img.src = "dudes/img/data/" + glassesLayer[0].current + ".png";

    bodyLayer[0].img.src = "dudes/img/data/" + bodyLayer[0].current + ".png";
    layer[0].img.src = "dudes/img/data/" + layer[0].current + ".png";
    dressBottomLayer[0].img.src = "dudes/img/data/" + dressBottomLayer[0].current + ".png";
    accessoireLayer[0].img.src = "dudes/img/data/" + accessoireLayer[0].current + ".png";
    leftHandLayer[0].img.src = "dudes/img/data/" + leftHandLayer[0].current + ".png";
    rightHandLayer[0].img.src = "dudes/img/data/" + rightHandLayer[0].current + ".png";

    shoes[0].img.src = "dudes/img/data/" + shoes[0].current + ".png";
    eye[0].img.src = "dudes/img/data/" + eye[0].current + ".png";

    Contract.methods.getRemovedTraits().call().then(function(result) {
      $("#nrRemoved").text(result.length + "/524 traits removed");
      removedTraits = result;

      // for(var i=0; i<removedTraits.length;i++) {
      //   removeFromArray(availableTraitsByType("bodytrait"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("dress"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("accessoire"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("leftHand"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("rightHand"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("dressBottom"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("shoes"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("mouth"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("hair"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("beard"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("skin"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("eye"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("hat"), parseInt(removedTraits[i]));
      //   removeFromArray(availableTraitsByType("glasses"), parseInt(removedTraits[i]));
      // }
      // randomize();
    });

    randomize();

    $('.traitSelection').on('click', '.next', function() {
        var traitnr = parseInt($(this).parent().attr("traitnr"));
        var traitType = $(this).parent().attr("traitType");
        var traits = availableTraitsByType(traitType);

        var nextTraitUsed = false;

        var layerObj = layerByType(traitType).filter(obj => {
            return obj.can.id === traitType + 'Can' + traitnr;
        })[0];

        while (layerObj.current <= traits[traits.length-1] || layerObj.current == 999) {
            if(layerObj.current == 999) {
              layerObj.current = traits.length > 0 ? traits[0] : 999;
            } else if(layerObj.current == traits[traits.length-1]) {
              layerObj.current = 999;
            } else {
              layerObj.current = traits[traits.indexOf(layerObj.current) + 1];  
            }
            
            nextTraitUsed = false;
            for (var i = 0; i < layerByType(traitType).length; i++) {
                if (layerByType(traitType)[i].current == layerObj.current && layerByType(traitType)[i].can.id != layerObj.can.id) {
                    nextTraitUsed = true;
                    break;
                }
            }
            if (!nextTraitUsed) break;
        }


        layerObj.ctx.clearRect(0, 0, 300, 650);
        layerObj.img.src = "dudes/img/data/" + layerObj.current + ".png";

        if(layerObj.current != 999) {
            $(this).siblings(".traitDesc").text(traitDescs[layerObj.current-100]);
        } else {
            $(this).siblings(".traitDesc").text("none");
        }
        calcPrice();
    });

    // add round run + 999 empty
    $(".traitSelection").on('click', '.previous', function() {
        var traitnr = parseInt($(this).parent().attr("traitnr"));
        var traitType = $(this).parent().attr("traitType");
        var traits = availableTraitsByType(traitType);

        var nextTraitUsed = false;

        var layerObj = layerByType(traitType).filter(obj => {
            return obj.can.id === traitType + 'Can' + traitnr;
        })[0];


        while (layerObj.current >= traits[0]) {
            if(layerObj.current == traits[0]) {
              layerObj.current = 999;
            } else if(layerObj.current == 999) {
              layerObj.current = traits.length > 0 ? traits[traits.length-1] : 999;
            } else {
              layerObj.current = traits[traits.indexOf(layerObj.current) - 1];
            }
            
            nextTraitUsed = false;
            for (var i = 0; i < layerByType(traitType).length; i++) {
                if (layerByType(traitType)[i].current == layerObj.current && layerByType(traitType)[i].can.id != layerObj.can.id) {
                    nextTraitUsed = true;
                    break;
                }
            }
            if (!nextTraitUsed) break;
        }

        layerObj.ctx.clearRect(0, 0, 300, 650);
        layerObj.img.src = "dudes/img/data/" + layerObj.current + ".png";

        if(layerObj.current != 999) {
            $(this).siblings(".traitDesc").text(traitDescs[layerObj.current-100]);
        } else {
            $(this).siblings(".traitDesc").text("none");
        }

        calcPrice();
    });

    $(".singlePrevious").click(function() {
        var traitnr = parseInt($(this).parent().attr("traitnr"));      
        var traitType = $(this).parent().attr("traitType");

        var traits = availableTraitsByType(traitType);

        var layerObj = layerByType(traitType).filter(obj => {
            return obj.can.id === traitType + 'Can' + traitnr;
        })[0];

        if(layerObj.current == 999 || (traitType === "skin" && layerObj.current == traits[0])) {
          layerObj.current = traits.length > 0 ? traits[traits.length - 1] : 999;
        } else if(layerObj.current > traits[0]) {
          layerObj.current = traits[traits.indexOf(layerObj.current) - 1];
        } else if(traitType !== "skin"){
          layerObj.current = 999;
        }

        if(layerObj.current != 999) {
            $(this).siblings(".traitDesc").text(traitDescs[layerObj.current-100]);
        } else {
            $(this).siblings(".traitDesc").text("none");
        }

        layerObj.ctx.clearRect(0, 0, 300, 650);
        layerObj.img.src = "dudes/img/data/" + layerObj.current + ".png";

        calcPrice();

    });

    $(".singleNext").click(function() {
        var traitnr = parseInt($(this).parent().attr("traitnr"));      
        var traitType = $(this).parent().attr("traitType");

        var traits = availableTraitsByType(traitType);

        var layerObj = layerByType(traitType).filter(obj => {
            return obj.can.id === traitType + 'Can' + traitnr;
        })[0];        
        
        if(layerObj.current < traits[traits.length-1]) {
          layerObj.current = traits[traits.indexOf(layerObj.current) + 1];
        } else if(layerObj.current == 999 || (traitType === "skin" && layerObj.current == traits[traits.length-1])) {
          layerObj.current = traits.length > 0 ? traits[0] : 999 ;
        } else if(traitType !== "skin"){
          layerObj.current = 999;
        }

        if(layerObj.current != 999) {
            $(this).siblings(".traitDesc").text(traitDescs[layerObj.current-100]);
        } else {
            $(this).siblings(".traitDesc").text("none");
        }
        layerObj.ctx.clearRect(0, 0, 300, 650);
        layerObj.img.src = "dudes/img/data/" + layerObj.current + ".png";

        calcPrice();

    });


    $(".traitSelection").on('click', '.removeTrait', function() {
        var traitnr = parseInt($(this).parent().attr("traitnr"));
        var traitType = $(this).parent().attr("traitType");
        //$(this).parent().parent().children('div').first().append('<button class="btn btn-secondary btn-sm addTrait"><i class="fas fa-plus"></i></button>');

        var layerToRemove = layerByType(traitType);

        var parent = $(this).parent().parent();
        $(this).parent().remove();

        //if(parent.find('.addTrait').length == 0) {
          parent.children().find(".addTrait").css("visibility", "visible");;
        //}

        layerToRemove.splice(traitnr, 1);
        // layerToRemove = layerToRemove.filter(obj => {
        //     return obj.can.id !== traitType + 'Can' + traitnr;
        // })

        $("#" + traitType + "Can" + traitnr).remove();

        calcPrice();
    });

    $(".traitSelection").on('click', '.addTrait', function() {
        var traitnr = parseInt($(this).parent().attr("traitnr")) + 1;
        var traitType = $(this).parent().attr("traitType");
        var traits = availableTraitsByType(traitType);

        var minTrait = traits[0];
        var maxTrait = traits[traits.length-1];

        var newCanvas = $('<canvas/>', {
            'class': 'body',
            'id': traitType + 'Can' + traitnr,
            'Width': 300,
            'Height': 650
        });

        $("." + traitType + "Area").append(newCanvas);

        var img = new Image();
        var can = document.getElementById(traitType + 'Can' + traitnr);
        var ctx = can.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        var nextTraitUsed = false;

        while (minTrait < maxTrait) {
            minTrait = traits[traits.indexOf(minTrait) + 1];
            nextTraitUsed = false;
            for (var i = 0; i < layerByType(traitType).length; i++) {
                if (layerByType(traitType)[i].current == minTrait) {
                    nextTraitUsed = true;
                    break;
                }
            }
            if (!nextTraitUsed) break;
        }

        layerByType(traitType).push({
            can: can,
            img: img,
            ctx: ctx,
            current: minTrait,
            active: true
        });

        $(img).on('load', function() {
            ctx.drawImage(img, 0, 0, 300, 600);
        });
        img.src = "dudes/img/data/" + minTrait + ".png";
        $(this).parent().parent().append('<div minTrait="' + minTrait + '" maxTrait=' + maxTrait + ' traitType="' + traitType + '" traitnr=' + traitnr + ' class="form-group traittype"><div class="d-none d-md-block" style="width:30%;float:left;color: #85a2c9;">.</div><button class="btn btn-secondary btn-sm previous" style="float: left"><i class="fas fa-arrow-left"></i></button><button style="float:right" class="btn btn-secondary btn-sm removeTrait"><i class="fas fa-minus"></i></button><button style="float:right" class="btn btn-secondary btn-sm addTrait"><i class="fas fa-plus"></i></button><button class="btn btn-secondary btn-sm next" style="float: right"><i class="fas fa-arrow-right"></i></button><div class="traitDesc">' + (traitDescs[minTrait] != 999 ? traitDescs[minTrait-100] : "none") + '</div></div>');

        $(this).css("visibility", "hidden");


        calcPrice();

    });
});

async function verifyAvailableTraits() {
    var allAvailable = Contract.methods.getRemovedTraits().call().then(function(result) {
        if(result.includes("" + skinLayer[0].current)) return false;
        if(result.includes("" + beard[0].current)) return false;
        if(result.includes("" + mouth[0].current)) return false;
        if(result.includes("" + hair[0]).current) return false;
        if(result.includes("" + eye[0]).current) return false;
        if(result.includes("" + hatLayer[0]).current) return false;
        if(result.includes("" + glassesLayer[0]).current) return false;
        if(result.includes("" + leftHandLayer[0]).current) return false;
        if(result.includes("" + rightHandLayer[0]).current) return false;
        if(result.includes("" + shoes[0]).current) return false;

        if(result.filter(value => layerArrayToCurrentArray(bodyLayer).includes(value)).length > 0) return false;
        if(result.filter(value => layerArrayToCurrentArray(layer).includes(value)).length > 0) return false;
        if(result.filter(value => layerArrayToCurrentArray(dressBottomLayer).includes(value)).length > 0) return false;
        if(result.filter(value => layerArrayToCurrentArray(accessoireLayer).includes(value)).length > 0) return false;

        return true;
    });
    return allAvailable;
}

async function setNrMinted() {
  Contract.methods.totalSupply().call().then(function(result) {
     $("#nrMinted").text(result + "/1024 minted");
  });

}

function clearEmptyTrait(trait) {
    if(trait!=999) {
        return trait;
    } else {
        return "";
    }
}

function clearEmptyTraitArray(items) {
    var result = items.map(function(item) {
        return item['current'];
    });
    result = result.filter(trait => trait != 999);
    return result;
}

function layerArrayToCurrentArray(layerArray) {
    return layerArray.map(function(item) {
        return "" + item['current'];
    });    
}


function traitCombinationString() {
    var traitCombiString = "" + skinLayer[0].current + clearEmptyTrait(beard[0].current) + clearEmptyTrait(mouth[0].current) + clearEmptyTrait(hair[0].current) + clearEmptyTrait(eye[0].current);

    clearEmptyTraitArray(bodyLayer).forEach(function (value) {
      traitCombiString += value;
    });
    clearEmptyTraitArray(layer).forEach(function (value) {
      traitCombiString += value;
    });
    clearEmptyTraitArray(dressBottomLayer).forEach(function (value) {
      traitCombiString += value;
    });
    clearEmptyTraitArray(accessoireLayer).forEach(function (value) {
      traitCombiString += value;
    });    

    traitCombiString += "" + clearEmptyTrait(hatLayer[0].current) + clearEmptyTrait(glassesLayer[0].current) + clearEmptyTrait(leftHandLayer[0].current) + clearEmptyTrait(rightHandLayer[0].current) + clearEmptyTrait(shoes[0].current);

    return traitCombiString;
}

async function mint() {
    var unique = await isUnique(traitCombinationString());
    if(!unique) { 
        $("#notUniqueAlert").removeClass("d-none");  
        return;
    } else {
        $("#notUniqueAlert").addClass("d-none"); 
    }

    var allAvailable = await verifyAvailableTraits();
    if(!allAvailable) {
        $("#notAllTraitsAvailableAlert").removeClass("d-none");  
        return;
    } else {
        $("#notAllTraitsAvailableAlert").addClass("d-none"); 
    }

    if (window.web3.currentProvider.selectedAddress == null) {
      await login();
    }



    var singleTraits = [skinLayer[0].current, beard[0].current, mouth[0].current, hair[0].current, eye[0].current, hatLayer[0].current, glassesLayer[0].current, leftHandLayer[0].current, rightHandLayer[0].current, shoes[0].current];
    Contract.methods.purchase(
      singleTraits, 
      clearEmptyTraitArray(bodyLayer), 
      clearEmptyTraitArray(layer), 
      clearEmptyTraitArray(dressBottomLayer), 
      clearEmptyTraitArray(accessoireLayer)
    ).send({
        from: window.web3.currentProvider.selectedAddress,
        value: calcPrice()
    }).then(function(result) {
        console.log(result);
    });
}


function calcPrice() {
  var result = 300000000000000000;
  var nrOfTraits = 1; // skin always exists
  var traitsToBill = 0;

  nrOfTraits += clearEmptyTraitArray(bodyLayer).length;
  nrOfTraits += clearEmptyTraitArray(layer).length;
  nrOfTraits += clearEmptyTraitArray(dressBottomLayer).length;
  nrOfTraits += clearEmptyTraitArray(accessoireLayer).length;

  if(beard[0].current != 999) { nrOfTraits++ };
  if(mouth[0].current != 999) { nrOfTraits++ };
  if(hair[0].current != 999) { nrOfTraits++ };
  if(eye[0].current != 999) { nrOfTraits++ };
  if(hatLayer[0].current != 999) { nrOfTraits++ };
  if(glassesLayer[0].current != 999) { nrOfTraits++ };
  if(leftHandLayer[0].current != 999) { nrOfTraits++ };
  if(rightHandLayer[0].current != 999) { nrOfTraits++ };
  if(shoes[0].current != 999) { nrOfTraits++ };

  if(nrOfTraits > 14) {
    result += 50000000000000000 * (nrOfTraits - 14);
  }
  $("#priceText").text(nrOfTraits + " TRAITS, PRICE: " + result/1000000000000000000 + " ETH");

  if(nrOfTraits > 25) {
    $("#tooManyTraitsAlert").removeClass("d-none");   
    $("#mint").prop("disabled",true); 
  } else {
    $("#tooManyTraitsAlert").addClass("d-none");  
    $("#mint").prop("disabled",false);  
  }

  return result;

}

function randomize() {
 getRandom("skin");
 getRandom("mouth");
 getRandom("hair");
 getRandom("eye");
 getRandom("hat");
 getRandom("beard");
 getRandom("glasses");
 getRandom("leftHand");
 getRandom("rightHand");
 getRandom("shoes");

 getRandom("bodytrait");
 getRandom("dress");
 getRandom("dressBottom");
 getRandom("accessoire");
}

function getRandom(trait) {
 var rn, min, max;
 
 var traits = availableTraitsByType(trait);

 if(traits.length == 0) {
	layerByType(trait)[0].current = 999;
 } else {
	max = traits.length-1;
	var rn = Math.floor(Math.random() * max); 	
	layerByType(trait)[0].current = traits[rn];
 }

 layerByType(trait)[0].ctx.clearRect(0, 0, 300, 650);
 layerByType(trait)[0].img.src = "dudes/img/data/" + layerByType(trait)[0].current + ".png";
 $("div[traittype='" + trait + "']").find(".traitDesc").text(layerByType(trait)[0].current==999 ? "none" : traitDescs[layerByType(trait)[0].current-100]);

 calcPrice();

}


function clearAll() {
 clear("mouth");
 clear("hair");
 clear("eye");
 clear("hat");
 clear("beard");
 clear("glasses");
 clear("leftHand");
 clear("rightHand");
 clear("shoes");

 clear("bodytrait");
 clear("dress");
 clear("dressBottom");
 clear("accessoire");
}

function clear(type) {
 
 //var min = parseInt($("div[traittype='" + type + "']").attr("minTrait"));

 for(var i=0;i<layerByType(type).length;i++) {
   layerByType(type)[i].current = 999;
   layerByType(type)[i].ctx.clearRect(0, 0, 300, 650);
   layerByType(type)[i].img.src = "dudes/img/data/" + layerByType(type)[i].current + ".png";

    if(layerByType(type)[i].current != 999) {
        $("div[traittype='" + type + "']").find(".traitDesc").text(traitDescs[layerByType(type)[i].current-100]); 
    } else {
        $("div[traittype='" + type + "']").find(".traitDesc").text("none");
    }
 }


 calcPrice();

}