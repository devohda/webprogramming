$(document).ready(function(){

    var selectDay;
    var price;
    var totalPrice=0;
    var option;
    var dict={};
    for(var i =0; i<5; i++){
        a = {}
        for(var j=1; j<=30; j++){
            a[j.toString()]=0;
        }
        dict[i+1]=a
    }
    var dictOptionKR = {
        1: "식비",
        2: "교통",
        3: "문화",
        4: "의류",
        5: "잡화",
    }
    var dicOptionCnt = {
        "식비" : 0,
        "교통" : 0,
        "문화" : 0,
        "의류" : 0,
        "잡화" : 0,
    }

    $(function(){
        $("#inputbox").draggable();
        $("#summitbox").draggable();
        $("#inputbox").hide();
    });

    $(".day").click(function(){
        $("#inputbox").show();
        selectDay = this;
    });

    $("#Btn_Food").click(function(){
        option = 1;
    })

    $("#Btn_Trans").click(function(){
        option = 2;
    })

    $("#Btn_Cult").click(function(){
        option = 3;
    })

    $("#Btn_Fash").click(function(){
        option = 4;
    })

    $("#Btn_Mart").click(function(){
        option = 5;
    })

    $("#Btn_Confirm").click(function(){
        price = $("#Label_Money").val();
        date=$(selectDay).find('div').attr('id')
        dict[option][date] = price;
        var htext ="";
        sum = 0;

        for(var i =0; i<5; i++){
            p = dict[i+1][date];
            if(p>0){
                sum += Number(p)
                htext+="<div class=\"money\">"+dictOptionKR[i+1]+" : "+p+"원</div>"
                dictOptionCnt[dictOptionKR[i+1]]++;
            }
        }

        htext += "<div class=\"expenses\">합계 : "+sum+"원</div>"
        $(selectDay).find('.event').html(htext)
        totalPrice += sum;
        $("#Label_Money").val("");
        $("#inputbox").hide();
    });

    $("#Btn_Reset").click(function(){
        $("#Label_Money").val("");
    })

    $("#Btn_Summit").click(function(){
        var htext="";

    })
});

