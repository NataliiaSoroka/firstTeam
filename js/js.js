var clicks = 0;

$('.button').click(function() {
    if (clicks == 0){
        $('.hide').removeClass('hide');
        $('.position').animate({'top':'0px'}, "slow");
    } else{
        $('.hide1').removeClass('hide1');
        $('.position1').animate({'top':'0px'}, "slow");
    }
    ++clicks;
});