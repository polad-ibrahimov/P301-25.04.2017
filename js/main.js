 $.fn.changeColor = function(options = {}) {

     var settings = $.extend({
         color: "green",
         width: "300px",
         height: "300px"
     }, options);

     this.css("background-color", settings.color);
     this.css('width', settings.width);
     this.css('height', settings.height);
     return this;
 }
 $.fn.createBootstrapList = function() {
     this.addClass('list-group');
     this.find('li').addClass('list-group-item');
     this.find('li').click(function() {
         $(this).css('background', 'red');
     });
 }
 $.fn.slider = function() {

 }
 $(document).ready(function() {
     $('.sozler').createBootstrapList();

     $('.gallery').slder();
     //  $('.list').changeColor({
     //      color: 'red',
     //      height: '150px',
     //      width: '150px'
     //  });

     //  $('.list2').changeColor({
     //      height: '150px',
     //      width: '150px'
     //  });

 });