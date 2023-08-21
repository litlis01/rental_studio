$(function() {
    $(".vegas").vegas({
        slides: [
            { src: "images/room5min.jpg" },
            { src: "images/room3min.jpg" },
            { src: "images/room4min.jpg" },
            { src: "images/room7min.jpg" },
        ]    
    });

    $(".vegas2").vegas({
        slides: [
            { src: "images/room1.jpg" },
            { src: "images/room2.jpg" },
            { src: "images/room6.jpg" },
        ]    
    });

});

$(function(){
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('.page-start'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
  });

//   https://tryncatch.tistory.com/10


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    initialDate: '2022-07-18',
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: true,
    selectable: true,
    events: [
      {
        title: 'Room A',
        start: '2022-07-03T13:00:00',
        constraint: 'businessHours'
      },
      {
        title: 'Room B',
        start: '2022-07-13T11:00:00',
        constraint: 'availableForMeeting', // defined below
        color: '#257e4a'
      },
      {
        title: 'Room C',
        start: '2022-07-18',
        end: '2022-07-18'
      },
      {
        title: 'Room A',
        start: '2022-07-29T20:00:00'
      },

      // areas where "Meeting" must be dropped
      {
        groupId: 'availableForMeeting',
        start: '2022-07-11T10:00:00',
        end: '2022-07-11T16:00:00',
        display: 'background'
      },
      {
        groupId: 'availableForMeeting',
        start: '2022-07-13T10:00:00',
        end: '2022-07-13T16:00:00',
        display: 'background'
      },

      // red areas where no events can be dropped
      {
        start: '2022-07-24',
        end: '2022-07-28',
        overlap: false,
        display: 'background',
        color: '#ff9f89'
      },
      {
        start: '2022-08-06',
        end: '2022-08-08',
        overlap: false,
        display: 'background',
        color: '#ff9f89'
      }
    ]
  });

  calendar.render();
});
