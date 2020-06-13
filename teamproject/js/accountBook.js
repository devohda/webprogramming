$(document).ready(function(){

    var selectDay;
    var price;
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

    $(function(){
        $("#inputbox").draggable();
        $("#summitbox").draggable();    
        $("#inputbox").hide();
        $("#summitbox").hide();
    });

    $(".day").click(function(){
        $("#inputbox").show();
        selectDay = this;
    });

    $("#Btn_Food").click(function(){
        option = 1;
    });

    $("#Btn_Trans").click(function(){
        option = 2;
    });

    $("#Btn_Cult").click(function(){
        option = 3;
    });

    $("#Btn_Fash").click(function(){
        option = 4;
    });

    $("#Btn_Mart").click(function(){
        option = 5;
    });

    $("#Btn_Confirm").click(function(){
        price = $("#Label_Money").val();
        date=$(selectDay).find('div').attr('id')
        dict[option][date] = price;
        var htext ="";
        var sum = 0;

        for(var i =0; i<5; i++){
            var p = dict[i+1][date];
            if(p>0){
                sum += Number(p)
                htext+="<div class=\"money\">"+dictOptionKR[i+1]+" : "+p+"원</div>"
            }
        }

        if(sum>0){
            htext += "<div class=\"expenses\">합계 : "+sum+"원</div>"
        }
        $(selectDay).find('.event').html(htext);
        $("#Label_Money").val("");
        $("#inputbox").hide();
    });

    $("#Btn_Reset").click(function(){
        $("#Label_Money").val("");
    })

    $("#Btn_Summit").click(function(){
        $("#summitbox").show();
        var totalPrice=0;
        var htext="";
        var dictOptionPrice={
            식비 : 0,
            교통 : 0,
            문화 : 0,
            의류 : 0,
            잡화 : 0,
        };
        
        for(var i=0;i<5;i++){
            var price = 0;
            for(var j=1;j<=30;j++){
                var p = dict[i+1][j.toString()];
                if(p>0){
                    totalPrice+=Number(p);
                    price+=Number(p);
                }
            }
            dictOptionPrice[dictOptionKR[i+1]]=price;
        }

        htext+= "<div><button class=\"exit\"><img src=\"../../src/close.png\"></button></div>"
        htext+= "<div id=\"box\" class=\"total\"><h1>이번달 총 사용금액 : "+totalPrice+"원</h1></div>"
        htext+= "<div id=\"box\" class=\"average\">하루 평균 사용금액 : "+(totalPrice/30).toFixed(0)+"원</div>"
        htext+= "<div id=\"box\" class=\"expensesNum\"><table><tr><th>식비</th><th>교통</th><th>문화</th><th>의류</th><th>잡화</th></tr><tr>"
        for(var i=0; i<5; i++){
            htext+= "<td>"+dictOptionPrice[dictOptionKR[i+1]]+"원</td>"
        }
        htext+= "</tr></table></div>"
        htext+= "<div id=\"box\" class=\"cardRecommend\"><div><a href=\""+findCard(totalPrice,dictOptionPrice)+"\"><img src=\"../../src/checkcard.png\"></a></div></div>"
        $('#summitbox').html(htext);

        $(".exit").click(function(){
            htext="";
            $("#summitbox").hide();
        })
    })

    function findCard(totalPrice, dictOptionPrice)
    {
        var text="";

        if(totalPrice<=200000){
            text="../card20/card20.html";
        }
        else if(totalPrice<=400000){
            text="../card340/card30-40.html";
        }
        else{
            text="../card50/card50.html";
        }

        return text;
    }
    
});

