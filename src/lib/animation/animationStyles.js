
export default function animationStyles(animation) {

    let style = {};
    let transitions = [];
    for (let name in animation) {
        style[name] = animation[name].value;
        transitions.push(animation[name].transition);
    }
    if (transitions) {
        style.transition = transitions.join(',');
    }

    return style;
}