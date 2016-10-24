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
	addStyleString('.primary-text {color:'+color+' !important;}');
	addStyleString('.primary-fill {background-color:'+color+' !important; color: white;}');
	addStyleString('.primary-border {border-color:'+color+' !important;}');
	addStyleString('.primary-fill-hover:hover {background-color:'+color+' !important; color: white;}');

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