$(document).ready(function(){
    
    // 관계사이트 바로가기 
    // #direct에 마우스를 올리면
        //#direct_cont가 나타난다.
    // #direct에서 마우스를 치우면 
        //#direct_cont가 사라진다.
    
    $("#direct").mouseover(function(){
        $("#direct_cont").show();
        
    });
    
    $("#direct").mouseout(function(){
        $("#direct_cont").hide();
        
    });
    
    // #direct_cont안에 있는 a를 누르면
        // 그 누른다라는 이벤트에 대해 응당 해야할 일을 일단 멈추고
        // 방금 눌린 그것(a중에 하나)이 가지고 있는 속성중
        // href라는 속성의 값이 무엇인지 알아낸다.
        // 방금 눌린 그것(a중에 하나 ) 안에 들어있는 글씨를 알아낸다.
        // #direct_title>span에 그 글씨를 집어넣는다.
    // #direct_go를 누르면
        // 만약 아까 알아뒀던 눌린a의 bref속성 값이 공백이 아니라면
        // 아까 알아뒀던 눌린a의 bref속성 값으로 이동!
    

    
    
    var href;
    $("#direct_cont>a").click(function(e){
        e.preventDefault();
        href=$(this).attr("href");
        var TEXT=$(this).text();
        $("#direct_title>span").text(TEXT);
        
        
        
    });
    
    
    $("#direct_go").click(function(){
        
        if(href){
            window.open(href,"new");    
        }
        
        
        
        // 모바일버전에서 메뉴바 숨기기/보이기
        // #ham이 눌리면
            //#header_bot을 보여주기
        // #close가 눌리면
            // #header_bot을 숨겨주기
      
        
     });
   
     $("#ham").click(function(){
            
         $("#header_bot").show();
            
     });
    
     $("#close").click(function(){
            
          $("#header_bot").hide();
     });
        
     // 화면크기가 바뀌고 있을떄(마다)
        //화면 크기를 재서
        //그 크기가 720초과가 되었을때
            //#header_bot을 show()
     $(window).resize(function(){
         var winW = $(this).width();
         if(winW>720)
             {
                 $("#header_bot").show();
             }else{
                 $("#header_bot").hide();
             }
            
     });
    
    
    //tab 버튼 사이즈 지정하기
    var tablen = $(".tabbtn").length;
    $(".tabbtn").width("calc(100% / "+tablen+")");
    
    
    //tab 버튼에 tactive 옮겨주기
    // .tabbtn을 눌렀을떄
        // .tabbtn으로 부터 tactive라는 클래스를 뺏기
        // 방금눌린 그것에게는 tactive라는 클래스를 주기 
    $(".tabbtn").click(function(){
        var th = $(this).index();
        
        $(".tabbtn").removeClass("tactive");
        $(this).addClass("tactive");
        $(".tabcont").hide();
        $(".tabcont").eq(th).show();
        
    });
        
    
    // tab 버튼에 따라 tabcont 보여주기
    // .tabbtn을 눌렀을떄  
        // 방금 눌린 그것이 몇번쨰 인가 알아내서 th라고 부르자 
        // 모든 .tabcont를 모조리 숨겨줌
        // 이번에 보여줘야할 .tabcont(탭콘트중에 th번째)를 보여줌
        
    
    
    // list-db 안에 있는 li 안쪽에 넘버링 하기 
    
    // 각각의 list-db에게 다음과 같이 하겠다.
        // li가 몇개가 있는지 개수를 파악.
        // 그 개수만큼 반복 
            // 각 li안쪽 처음부분에 <span>태그를 만든다.
            // i가 9이하면 앞에 "0"을 붙이고
            // i가 9초과하면 아무일도 안하고 
            // 그 span태그의 내용으로 그 숫자를 넣는다.
    
    $(".list-db").each(function(){
        var lilen = $(this).children("li").length;
        $(this).children("li").prepend("<span></span>");
        for(i=0; i<lilen; i++){
            
            var num= i+1;
            if(num <= 9){num = "0"+num}
                $(this).children("li").eq(i).children("span").text(num);
                
        }   
        
    });
    
    
    //each 함수 
    //.each()는 선택한 요소가 여러 개일 때 각각에 대하여 반복하여 함수를 실행시킵니다.
    $(".list-circle").each(function(){
        
        var lilen = $(this).children("li").length;
        
        $(this).children("li").prepend("<span></span>");
        
        for(i=0; i<lilen; i++){
            $(this).children("li").eq(i).children("span").text(i+1);
            
        }
        
        
    });
    
    
    
    // 리스트로 만든 표 안쪽에 셀들 높이 가장큰놈으로 통일하기
    //각 .listtable>li>span들이 몇개인가 개수를 알아냄. =>num;
    
    //그 개수만큼 반복
        //그 안에있는 span들을 한놈씩 불러서 높이가 얼마인지 알아내고 기록
    //그 기록중에 제일 큰값이 얼마인가?
    //그 가장 큰 값으로 나머지 모든 span들에게 그 값으로 높이를 지정 
    
    
    
    function setheight(){
       $(".listtable>li").each(function(){
            if($(this).is(":visible")){
                $(this).children("span").height("auto");
                var num = $(this).children("span").length;
                var champion=0;
                var challenger;
                for(i=0; i<num; i++){
                    challenger = $(this).children("span").eq(i).height();
                    if(challenger >= champion){
                        champion= challenger;
                    }
                } 
                $(this).children("span").height(champion);
            }
        });    
        
    }
    
    
    
    $(".tabbtn").click(function(){
        setheight();
    });
    
     
    $(window).resize(function(){
        setheight();
    });
    
     setheight();
    
    // section table들에게 [각각] 다음과 같이 이야기하겠다.
        // 그녀석의 바로 위부분에 "<div class='tablebox'>" 추가
        // 그녀석의 바로 아랫부분에 "</div>" 추가
    
    $("section table").each(function(){
        $(this).before("<div class='tablebox'><table></table></div>");    
        var content = $(this).html();
        $(this).prev(".tablebox").children("table").html(content);
        this.remove();
        
    });
    
    
    
    
    //breadcrumb의 depth메뉴 표시하기
    //처음 페이지가 열렸을때 or .tabbtn이 눌렸을때 아래 내용을 실행한다.
        // d1 <= h2의 내용을 갈무리.  
        // d2 <= .tactive의 내용을 갈무리. 
        // .depth1에 d1의 내용을 넣기.
        // .depth2에 d2의 내용을 넣기.
        // .만약 d2의 내용이 비어있으면
            //.depth2를 아예 숨겨버리기
        
    
    function viewbc(){
        var d1 = $("h2").text();
        var d2 = $(".tactive").text();
        
        $(".depth1").text(d1);
        $(".depth2").text(d2);
        
        if(d2==""){
            $(".depth2").hide();
        }
    }
        viewbc();
        
    $(".tabbtn").click(function(){
       
        viewbc();
        
        
    });
    
    
    
    
    
//    //이중 배열
//    
//    var struct = ["포럼소개","포럼활동","활동소식","공지사항","자료실"];
//    var struct1 = [
//        
//        "포럼소개",
//        "포럼활동",
//        "활동소식",
//        "공지사항",
//        "자료실"
//    ];
//    
//    var struct2 = [
//        
//        ["사업 및 연혁","조직 및 운영위원","정관"],
//        "",
//        ["사업 및 연혁","조직 및 운영위원","규약","회원가입"],
//        "",
//        ""
//    ];
//    
//////  주소를 가져온다 #뒤도 아니고 ? 뒤를 가져온다
////    var query = location.search;
////    
////// .repeat() – 문자열을 교체 값을 반환하는 메서드입니다
////    query = query.replace("?","");
////// .split()은 문자열을 분할하는 메서드입니다.
////    query = query.split("_");
////    
////    var depth1 = query[0];
////    var depth2 = query[1];
////    
////    
////    var depth1text = struct1[depth1];
////    var depth2text = struct2[depth1][depth2];
////    
////    
////    
////    $(".depth1").text(depth1text);
////    $(".depth2").text(depth2text);
////    
////    
////    if(depth2text == undefined){
////        $(".depth2").hide();
////        
////        
////    }
////    
////    var tabnum = location.search;
////    tabnum = tabnum.replace("?","");
////    $(".tabbtn").eq(tabnum).trigger("click");
////    
////    
////    
//    
//    var query = location.search;
//    // tabnum=4&depth=0_2
//    query = query.replace("?","");
//    // ["tabnum=4". "depth=0,2"]
//    query = query.split("&");
//    
//    //4
//    query[0] = query[0].replace("tabnum=","");
//    $(".tabbtn").eq(query[0]).trigger("click");
//    
//    //0_2
//    query[1] = query[1].replace("depth=","");
//    query[1] = query[1].split("_");
//    
//    var depth1 = query[1][0];
//    var depth2 = query[1][1];
//    
//    var depth1text = struct1[depth1];
//    var depth2text = struct2[depth1][depth2];
//    
//    $(".depth1").text(depth1text);
//    $(".depth2").text(depth2text);
//    
//    
//    if(depth2text == undefined)
//        {
//            $(".depth2").hide();
//        }
//    
//    
//    
    
    //문서에서 select태그를 찾아서 각각 다음과 같이 이야기하겠다.
    
        // 그것의 속성중에 "name" 이라는 속성의 값을 알아낸다. =>bajiname
    
        // 그것의 다음에 <div class="baji" data='"+bajiname+"'></div>을 만든다 
    
        //그것의 바로 다음에 있는 .baji를 선택해서 그 안에 
    
        //"<div class='baji-mark'>"</div> <div class='baji-p['opt] </div>
    
        //그것이 안쪽에 있는 option들의 개수를 알아낸다. sellen 
        
        //sellen개 만큼 반복!   
            //i 번째 option의 value속성의 값을 알아내서
            //.baji-opt 안쪽에 "<span>"+opttxt+"</span>"을 추가하는것
        //그 .baji-opt>span 중에 첫번쨰 span의 내용을 갈무리해서
        //그 .baji-mark의 내용으로 넣어준다.
    
        // 원본 그것(select)을 숨겨준다.
        // 챔피언 = 0 ; 
        // 첫번쨰 도전자가 vs 챔피언(숫자가 더 큰 사람이 이김)
        // 두번쨰 도전자 vs 챔피언(첫번째 도전자)
        // 세번째 도전자 vs 챔피언()
        // 마지막에 최종 챔피언이(숫자가 가장큰사람)
    
    
    
    $("select").each(function(){
        //attr("name")값이 뭐냐?
        //attr("name","zzzz") 뭐뭐뭐에 값을 바꿔라
        var bajiname = $(this).attr("name");
        $(this).after("<div class='baji' data='"+bajiname+"'></div>");
        //next() 바로 밑에 동생만 선택함 
        $(this).next(".baji").append("<div class='baji-mark'></div>");
        $(this).next(".baji").append("<div class='baji-opt'></div>");
        
        var sellen = $(this).children("option").length;
        
        for(i=0; i<sellen;i++){
            
            var opttxt = $(this).children("option").eq(i).text();
            $(this).next(".baji").children(".baji-opt").append("<span>"+opttxt+"</span>");
        }
            var firstspan = $(this).next(".baji").children(".baji-opt").children("span").eq(0).text(); //갈무리 ?
            
        $(this).next(".baji").children(".baji-mark").text(firstspan);
        $(this).hide();

        var Champ = 0;
        var chall = []; 
        
        for(i=0; i<sellen; i++){
            
            chall[i] = $(this).next(".baji").children(".baji-opt").children("span").eq(i).outerWidth();
            chall[i] = Math.ceil(chall[i]) + 25 ;
        }    
        
        for(i=0; i<sellen; i++){
            
            if(chall[i] > Champ ){
                
                Champ = chall[i];
            }
        }
        
        $(this).next(".baji").width(Champ);
        $(this).next(".baji").find("span").css("display","block");
        $(".baji-opt").hide();
        
        
    });   
 
    //.baji를 누르면 
        // 그것 안쪽에 들어있는 .baji-opt을 보였다가 안보였다.
    $(".baji").click(function(){
        $(this).children(".baji-opt").toggle();
        
    });
    
    
    $(".baji").click(function(){
        if(document.selection && document.selection.empty) {
        document.selection.empty();
        } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        }
     });
    
    // .baji-opt>span을 눌렀을떄 
        // 방금누른그것 안에 있는 내용을 갈무리=>spantxt
        // 방금누른그것의 부모의 형에게 그 내용을 써준다.
        
        // 방금누른 그것이 span중에서 몇번쨰 였던가? =>th
        // 방금 누른 그것의 부모의 형(select)의
        // 자식중에 option중에서 th번쨰를 강제로 선택한것처럼 만듦.
   
    
    $(".baji-opt>span").click(function(){
        var spantxt = $(this).text();
        
        $(this).parent().prev(".baji-mark").text(spantxt);
        
        var th = $(this).index("span");
        
        $(this).parent().parent().prev("select").children("option").removeAttr("selected");
        
         $(this).parent().parent().prev("select").children("option").eq(th).attr("selected","true");
        
        
        
    });
    
});

