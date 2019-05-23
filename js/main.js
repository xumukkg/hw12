	$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
});

jQuery(function($){
	$('#ordersform').on('submit', function(event){
		event.preventDefault();
	})

	$('#btn-2').on('click', function() {
		if ($('.parol2').val() !== $('.parol1').val() ) {
			$('.parol1').addClass('border-danger');
			$('.parol2').addClass('border-danger');
		} else {
			$('#containers').css('display','none');
			$('.success').css('display','block');
		}
});



 });

