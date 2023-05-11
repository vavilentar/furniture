$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "../../mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");


		$('form').trigger('reset');
		document.querySelector('.form-call').style = 'text-align: center;'
		document.querySelector('.form-call').innerHTML = `Спасибо за оставленную заявку! <br> Мы обязательно с Вами свяжемся!`
	});

	return false;
});