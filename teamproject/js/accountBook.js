$(document).ready(function(){

    var selectDay;              //클릭한 날짜를 저장하는 변수
    var price;                  //금액을 저장하는 변수
    var option;                 //사용 목적을 저장하는 변수
    var dict={};                //소비 내역을 전부 저장할 딕셔너리
    for(var i =0; i<5; i++){
        a = {}
        for(var j=1; j<=30; j++){
            a[j.toString()]=0;      //["1" : 0, "2" : 0...]
        }
        dict[i+1]=a                 //["식비":["1" : 0, "2" : 0...],"교통":["1" : 0, "2" : 0...]..]
    }
    var dictOptionKR = {        //소비 목적을 숫자로 접근할수 있게 하는 딕셔너리
        1: "식비",
        2: "교통",
        3: "문화",
        4: "의류",
        5: "잡화",
    }

    $(function(){                          //시작할 때
        $("#inputbox").draggable();        //inputbox 모달이 드래그로 움직일 수 있게 함
        $("#summitbox").draggable();       //summitbox 모달이 드래그로 움직일 수 있게 함
        $("#inputbox").hide();             //inputbox 모달 숨겨져 있음
        $("#summitbox").hide();            //summitbox 모달이 숨겨져 있음
    });

    $(".day").click(function(){            //날짜 클릭시
        $("#inputbox").show();             //inputbox 모달 보이기
        selectDay = this;                  //selectDay에 자기 자신을 담음
    });

<<<<<<< HEAD
    $("#Btn_Food").click(function(){
        option = 1;
    })
=======
    $("#Btn_Food").click(function(){       //inputbox 안 각각의 사용 목적을 정하는 버튼을 눌렸을 때
        option = 1;                        //각 option 값을 줌
    });
>>>>>>> ae5581330a10e0f0ff52ca6be37414ea3a500357

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

    $("#Btn_Confirm").click(function(){          //입력 버튼을 눌렀을 때
        price = $("#Label_Money").val();         //입력한 금액을 price에 담음
        date=$(selectDay).find('div').attr('id') //date에 선택날 날짜의 id 값을 담음
        dict[option][date] = price;              //dick[사용목적][날짜]=금액
        var htext ="";                           //html 파일에 적을 내용을 저장하는 변수
        var sum = 0;                             //일 총 금액을 저장하는 변수

        for(var i =0; i<5; i++){                 //모든 사용 목적을 다 돌면서
            var p = dict[i+1][date];             //p에다가 dict에 저장된 금액을 초기화
            if(p>0){                             //금액이 0원 이상일 경우
                sum += Number(p)                 //sum에 p를 더함
                htext+="<div class=\"money\">"+dictOptionKR[i+1]+" : "+p+"원</div>"     //htext에 소비 목적 : 금액을 저장
            }
        }

        if(sum>0){                                 //만약 합계가 0원 이상일 경우
            htext += "<div class=\"expenses\">합계 : "+sum+"원</div>"                    //htext에 합계를 저장
        }
        $(selectDay).find('.event').html(htext);    //자기 자신 날짜에 event 클래스를 찾아서 안에 htext입력
        $("#Label_Money").val("");                  //입력한 금액 초기화
        $("#inputbox").hide();                      //inputbox 모달 숨김
    });

    $("#Btn_Reset").click(function(){               //초기화 버튼을 누를경우
        $("#Label_Money").val("");                  //입력한 금액 초기화
    })

    $("#Btn_Summit").click(function(){              //분석하기 버튼을 누른경우
        $("#summitbox").show();                     //summitbox 모달이 보여짐
        var totalPrice=0;                           //월 총 금액을 저장하는 변수
        var htext="";                               //html 파일에 적을 내용을 저장하는 변수
        var dictOptionPrice={                       //사용 목적별 월 총 금액을 저장하는 딕셔너리
            식비 : 0,
            교통 : 0,
            문화 : 0,
            의류 : 0,
            잡화 : 0,
        };
        
        for(var i=0;i<5;i++){
            var price = 0;                          //사용 목적별 월 총 금액을 저장할 변수
            for(var j=1;j<=30;j++){                 //모든 사용 목적에 모든 날짜를 다 돌면서
                var p = dict[i+1][j.toString()];    //p에 금액을 넣고
                if(p>0){                            //p가 0보다 큰 경우
                    totalPrice+=Number(p);          //월 총 금액에 p를 더함
                    price+=Number(p);               //pricd에 p를 더함
                }
            }
            dictOptionPrice[dictOptionKR[i+1]]=price;   //딕셔너리에 price 저장
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
        //이번달 총 사용금액 : 원
        //하루 평균 사용금액 : 원
        //식비 교통 문화 의류 잡화
        // 원   원   원   원  원
        //    체크카드 추천
        $('#summitbox').html(htext);            //summitbox안에 htext 입력

        $(".exit").click(function(){            //닫기 버튼을 클릭시
            htext="";                           //htext 초기화
            $("#summitbox").hide();             //summitbox 숨김
        })
    })

    function findCard(totalPrice, dictOptionPrice)      //월 총 금액별 추천할 체크카드 페이지를 달리하는 함수
    {
        var text="";

        if(totalPrice<=200000){                 //20만원 이하일 경우
            text="../card20/card20.html";
        }
        else if(totalPrice<=400000){
            text="../card340/card30-40.html";   //40만원 이하일 경우
        }
        else{
            text="../card50/card50.html";       //40만원을 넘을 경우
        }

        return text;
    }
    
});

