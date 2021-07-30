function(properties, context) {
  
	var sha1 = require('js-sha1');
    return { encoded_text: properties.input_string ? sha1(properties.input_string) : null }



}