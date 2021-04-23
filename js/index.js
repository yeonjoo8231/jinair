// 스크롤이벤트
var elheader = document.querySelector('#header')
var elfooter = document.querySelector('#footer')
var elffirst = document.querySelector('#footer .first')
var elarti4 = document.querySelector('#article4')

document.addEventListener('scroll',function(){
    var wh = document.documentElement.scrollTop;
    var fot = elarti4.offsetTop - 500;
    // var fot = elfooter.offsetTop;
    // var foh = elarti4.offsetHeight;
    // var fh = fot + foh;
    console.log(fot)
    if ( wh < 100 ) {
        elheader.classList.remove('on')

    } else if (wh > 100) {
        elheader.classList.add('on')
    } 
    if ( wh < fot ) {
        
        elfooter.classList.remove('on')
        // elffirst.style.position = 'static'
    } else if (wh > fot ) {
        elfooter.classList.add('on')
        // elffirst.style.position = 'fixed' 
    }
})



// #header 구역
var elmenu = document.querySelector('#header .menu')
var eldep3BG = document.querySelector('#header .dep3BG')
elmenu.addEventListener('click', function(){
    this.classList.toggle('on');
    eldep3BG.classList.toggle('on');
    elheader.classList.toggle('on');
})


//slide 구역
var indexes = {current: 0};
var slides = document.getElementsByClassName('slide');
slidePictures();

function slidePictures() {
    if (indexes.last) {
    	slides[indexes.last].classList.remove('visible');
    }
    slides[0].classList.remove('visible');
    slides[indexes.current].classList.add('visible');
   
    // document.getElementById('indicator').innerHTML = (indexes.current + 1) + '/' + slides.length;
    
    indexes.last = indexes.current;
    indexes.current++;
    if (indexes.current >= slides.length) {
        indexes.current = 0;
    }
    
    setTimeout(slidePictures, 3000);
}


// 예약 https://ts2ree.tistory.com/5
var elbtn = document.querySelectorAll('.btn')

function clickmenu() {
    for (var i = 0; i < elbtn.length; i++) {
        elbtn[i].classList.remove('on')
        
    }
    this.classList.add('on')
}
for ( var i=0; i < elbtn.length; i++){
    elbtn[i].addEventListener('click', clickmenu);
} 
 


// 여행지 선택
var eltogo = document.querySelectorAll('#article1 .togo')
var elcountry = document.querySelectorAll('#article1 .plan .country')
var elcityli =  document.querySelectorAll('#article1 .city>li > a')

// 여행지 오픈
var eltogoi
for ( let i=0; i<eltogo.length; i++) {
    eltogo[i].addEventListener('click',function(){
        eltogoi = i // 아래 클릭에 연결해주기 위해서 
        elcountry[i].classList.toggle('on')
        if (i==0) { elcountry[1].classList.remove('on')} 
        else if (i==1) { elcountry[0].classList.remove('on')}         
    })
}
// 여행지 클릭
for (let a=0; a<elcityli.length; a++) {
    elcityli[a].addEventListener('click',function(e){
        e.preventDefault()
        let inTxt = this.innerText;
        if ( eltogoi == 0 ) {
            var eltogotxt = eltogo[0].innerText; 
            var elsub = eltogotxt.substring(0,20);
            var clicktxt = eltogotxt.replace(elsub, inTxt);
            eltogo[0].innerText = clicktxt; 
            elcountry[0].classList.remove('on');
        } else if ( eltogoi == 1 ) {
            var eltogotxt = eltogo[1].innerText; 
            var elsub = eltogotxt.substring(0,20);
            var clicktxt = eltogotxt.replace(elsub, inTxt);
            eltogo[1].innerText = clicktxt; 
            elcountry[1].classList.remove('on');
        }
    })
}


// 데이트픽커
// https://euny0356.tistory.com/9 달력을 만들지 제이쿼리로 쓸지...
$('#from, #to').datepicker({
    dateFormat:"yy/mm/dd",
    dayNamesMin:["일","월","화","수","목","금","토"],
    monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    minDate: 0,
    onSelect: function(d){
           
        var arr=d.split("/");
        var year=arr[0];
        var month=arr[1];
        var date=arr[2];
        
        var ndate = new Date($("#datepicker").datepicker({dateFormat:"yy/mm/dd"}).val());
        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        var day = week[ndate.getDay()];
        $(".date .input").text(year+'년 '+month+'월 '+date+'일 '+day+'요일 ');

        $('#from').datepicker("option", "maxDate", $("#to").val());
        $('#from').datepicker("option", "onClose", function (selectedDate){
            $("#to").datepicker( "option", "minDate", selectedDate );
            });
        
        $('#to').datepicker();
        $('#to').datepicker("option", "minDate", $("#from").val());
        $('#to').datepicker("option", "onClose", function (selectedDate){
            $("#from").datepicker( "option", "maxDate", selectedDate );
           });
        
    }
});



// 인원 https://ddorang-d.tistory.com/110
var elplus = document.querySelectorAll('#article1 .icon-arrows_plus')
var elminus = document.querySelectorAll('#article1 .icon-arrows_minus')
var elspan = document.querySelectorAll('#article1 .plan span')

for (let i=0; i<elplus.length; i++) {
    elplus[i].addEventListener('click',function(){
        var target = this.previousSibling
        var num = target.innerText
        num = parseInt(num) 
        target.innerText = num +1
    })
    elminus[i].addEventListener('click',function(){
        var target = this.nextSibling
        var num = target.innerText
        num = parseInt(num) 
        if (num==0) { return false }
        target.innerText = num -1
    })
}


// article2 슬라이드
var elslidebox2 = document.querySelector('#article2 .slidebox2')
var elminis = document.querySelectorAll('#article2 .minis')
var elcurrentIdx = 0
var elPrev = document.querySelector('#article2 .goL')
var elNext = document.querySelector('#article2 .goR')
var elcount = elminis.length

elNext.addEventListener('click', function(e){
    e.preventDefault()
    elslidebox2.style.marginLeft = '-272.5px'
   
})
elPrev.addEventListener('click', function(e){
    e.preventDefault()
    elslidebox2.style.marginLeft = '0px'
})

// article3 슬라이드
var elslidebox3 = document.querySelector('#article3 .slidebox3')
var elminiIMG = document.querySelectorAll('#article3 .miniIMG')
var elcIdx = 0
var elPrev3 = document.querySelector('#article3 .goL')
var elNext3 = document.querySelector('#article3 .goR')
var elcount3 = elminiIMG.length
elNext3.addEventListener('click', function(e){
    e.preventDefault()
    elslidebox3.style.marginLeft = '-360px'
   
})
elPrev3.addEventListener('click', function(e){
    e.preventDefault()
    elslidebox3.style.marginLeft = '0px'
})