# validate-vanillajs

Small, fast and flexible Javascript validation library

# Usage

### Import the validation script on your page:
```
<script src="validate-vanillajs.js">
```

### Create a simple input field:
```
<input type="text" id="name">
```

### Basic usage:
```
Validator = new semafoneValidator({
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
	errorPlacement: function(error, element) {
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
