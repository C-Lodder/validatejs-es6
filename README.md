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

### Create a simple input field:
```
<input type="text" id="name">
```

### Basic usage:
```
const Validator = new Validator({
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
const isValid = Validator.validate(document.getElementById('name'));

// Returns true or false
```
