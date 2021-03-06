# ValidateJS-ES6

Blazing fast Javascript validation library

# Usage

### Include the validation script on your page:
```
<script src="validate.min.js"></script>
```
or import it:
```
import Validator from "./validate.min.js"
```

Should you require support for Internet Explorer, use `validate-es5.min.js` intead

### Create a simple input field:
```
<input type="text" id="name">
```

### Basic usage:
```
const Validation = new Validator({
	rules: {
		// Ensure the property matches that of the input ID
		name: {
			required: true,
		},
	},
	messages: {
		name: {
			required: 'Please enter your name',
		},
	},
	errorPlacement: (error, element) => {
		alert(error);
		// You can append the error to an element below the input or anything else to your liking
	}
});
```

### Validate an element
```
const isValid = Validation.validate(document.getElementById('name'));

// Returns true or false
```
