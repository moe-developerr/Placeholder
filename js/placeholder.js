$(function () {
	function fixPlaceholders() {
		var testElement = document.createElement('input'),
				isPlaceholderSupported = 'placeholder' in testElement;

		if(!isPlaceholderSupported) {
			$('input, textarea').each(function () {
				var $this = $(this);
				$this.val($this.attr('placeholder'));
			}).on('focus', function () {
				var $this = $(this);
				if(!$this.val()) { //if empty
					$this.val($this.attr('placeholder'));
				} else if($this.val() == $this.attr('placeholder')) { //if value didn't change
					$this.val('');
				}
			}).on('blur', function () {
				var $this = $(this);
				if(!$this.val()) { //if empty
					$this.val($this.attr('placeholder'));
				}
			});
		}
	}

	$.fixPlaceholders = fixPlaceholders;
});