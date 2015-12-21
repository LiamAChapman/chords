$(function(){
  $("#card-1").flip({
                    axis: "y",
                    reverse: false,
                    trigger: "click"
                    });
});


var intervalID = setInterval(function(){
                             var chords = ['A','C','D','E'];
                             var randIndex = 0 + Math.floor(Math.random() * chords.length)
                             $("#frontCard").attr("src","./img/chord" + chords[randIndex] + "Text.svg");
                             $("#backCard").attr("src","./img/chord" + chords[randIndex] + "Shape.svg");
}, 10000 + Math.floor(Math.random() * 25000));
