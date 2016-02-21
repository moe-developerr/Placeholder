<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="js/vendor/jquery-2.1.4.min.js"></script>
	<script src="js/placeholder.js"></script>
	<script>
		$(function () {
			$.fixPlaceholders()
		});
	</script>
</head>
<body>
	<form action="" method="GET">
		<input type="text" class="input" placeholder="Full name">
		<input type="text" class="input" placeholder="Age">
		<input type="text" class="input" placeholder="Job position">
		<textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
		<button type="submit">Submit Form</button>
	</form>
</body>
</html>