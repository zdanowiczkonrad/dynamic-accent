const colors = [
	'#E91E63',
	'#F44336',
	'#AB47BC',
	'#7E57C2',
	'#5C6BC0',
	'#039BE5',
	'#039BE5',
	'#827717',
	'#FF5722',
	'#8D6E63',
	'#607D8B'
];

let currentColor = 0;

function getColor() {
 	return colors[(++currentColor) % colors.length];
}
function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function overrideCurrentColor(color) {
	addStyleString('.custom-primary-color {color:'+color+';}');
}

function overrideClassNames(color) {
	var fill = '{background-color:'+color+' !important; color: white;}';
	var textColor =  '{color:'+color+' !important;}';
	var border = '{border-color:'+color+' !important;}';

	addStyleString('.primary-text '+textColor);
	addStyleString('.primary-fill ' + fill);
	addStyleString('.primary-fill-hover:hover ' + fill);
	addStyleString('.primary-before-fill:before ' + fill);
	addStyleString('.primary-after-fill:after ' + fill);
	addStyleString('.primary-border ' + border);
	addStyleString('.primary-border-focus:focus ' + border);
	addStyleString('.primary-before-border:before ' + border);
	addStyleString('.primary-after-border:after ' + border);
}

const actions = {
	'shuffle-primary-currentcolor': function(event) {
		const color = getColor();
		overrideCurrentColor(color);
	},
	'shuffle-primary-classnames': function(event) {
		const color = getColor();
		overrideClassNames(color);
	}
};

function bindActions() {
	Object.keys(actions).forEach(function(action) {
		const el = document.getElementById(action);
		if (el) {
			el.addEventListener('click', actions[action]);
		}
	});
}

bindActions();