
let buttons = document.querySelectorAll(".btn-switch");
for (let button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('active-switch'));
   	 this.classList.toggle('active-switch');
   });
};
$(document).ready(function() {
	$('.btn-monthly').click(function(){
		$('.box-annually:visible').hide();
		$('.box-monthly:not(:visible)')
			.css('display', 'flex')
			.hide()
			.fadeIn(500);
	});
	$('.btn-annually').click(function(){
		$('.box-monthly:visible').hide();
		$('.box-annually:not(:visible)')
			.css('display', 'flex')
			.hide()
			.fadeIn(500);
	})
});
$('#accordionExample').on('show.bs.collapse', function(e) {
	$(e.target).closest('.card').addClass('open');
}).on('hide.bs.collapse', function(e) {
	$(e.target).closest('.card').removeClass('open');
});
$(document).ready(function(){
    $("#navbarSupportedContent").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$('.button-up').click(function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 500);
	return false;
});
$(document).scroll(function(){
	let y = $(this).scrollTop();
	if(y > 800){
		$('.button-up').removeClass('hidden');
	}else{
		$('.button-up').addClass('hidden');
	}
});