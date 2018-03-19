let ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Animating Multiple Properties", "/ui/animations/animating-properties/animating-properties-page"),
    new link("Chaining Animations", "/ui/animations/chaining-animations/chaining-animations-page"),
    new link("Animating Multiple Views", "/ui/animations/multiple-views/multiple-views-page"),
];

// >> animations-imports
// Main Animation class
const Animation = require("tns-core-modules/ui/animation").Animation;

// Full list of animating properties at https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition 
const AnimationDefinition = require("tns-core-modules/ui/animation").AnimationDefinition;

// Defines a pair of values (horizontal and vertical) for translate and scale animations.
const Pair = require("tns-core-modules/ui/animation").Pair;

// AnimationCurveEnum: ease, easeIn, easeInOut, easeOut, linear, spring
const AnimationCurveEnum = require("tns-core-modules/ui/enums").AnimationCurve;
// << animations-imports

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
