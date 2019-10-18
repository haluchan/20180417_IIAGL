$(document).ready(function(){
    let page = 1 ,
        page1 = $('.page1'),
        page2 = $('.page2'),
        page3  = $('.page3');



    $('.finger-1').on('click', page ,function (){
        // GEvent('指紋按壓');
        FirstPage().then(delay().then(sec()));

    });

    function FirstPage(){

        return new Promise(function (resolve, reject){

            $('.finger-1').css('visibility',"hidden");
            $('.finger').append('<img class="finger-2" src="../img/finger-2.png" alt="厄夢娃娃屋">');
            resolve(true);
        })
    }

    function delay(){

        return new Promise(function(resolve, reject){
            setTimeout(function () {
                let audio = $('#audio');
                page1.fadeOut(10);
                page2.fadeIn();
                $('.screw').append('<img src="../img/trans.png" alt="厄夢娃娃屋">');
                setTimeout(function () {
                    audio[0].play();
                },100);
            }, 300);
            resolve(true);
        })
    }

    function sec(){

        setTimeout(function(){
            page2.fadeOut(200);
            $('.screw').empty();
            page3.fadeIn(100);
        },2200);

        state();
    }

    function state(){

        // let maxNum = 3;
        // let minNum = 1;
        // let stateN = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

        let stateN = 1 ;

        let shareImg =$('#share img');

        switch(stateN) {
            case 1:
                shareImg.attr('src','../img/BTN_01.png');
                break;
            // case 2:
            //     shareImg.attr('src','img/BTN_02.png');
            //     break;
            // case 3:
            //     shareImg.attr('src','img/BTN_03.png');
            //     break;
        }

    }




    $('#share').on('click',function(){
        GEvent('觀看完整預告');
        // shareFb();
        PV();

    });


    // function shareFb(){
    //     let myUrl = 'http://www.facebook.com/share.php?u=' + encodeURIComponent('https://www.youtube.com/watch?v=uhv_3CnOt8w');
    //     window.open(myUrl, 'window', 'width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1'); return false;
    // }

    function PV() {

        window.open('https://youtu.be/uhv_3CnOt8w')

    }

});



function GEvent(action) {

    console.log(action);
    gtag('event', 'event_name', {
        'event_label': action,
        'event_action': action
    });
}
