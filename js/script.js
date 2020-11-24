
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
