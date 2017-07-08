(function() {
    'use strict';

    angular
        .module('app.sections.views', [
            'app.sections.home',
            'app.sections.films',
            'app.sections.people',
            'app.sections.planets',
            'app.sections.species',
            'app.sections.starships',
            'app.sections.vehicles',
            'ne.swapi',
            'ngLoadingSpinner'
        ]);
})();
