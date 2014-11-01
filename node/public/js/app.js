require(['config', 'jquery', 'modules/helpers'], function(config, $, helpers) {
    helpers.init();

    require([
        'modules/navigation',
        'socketio',
        'modules/ajaxify',
        'modernizr',
        'fastclick',
        'placeholder',
        'foundation',
        'nicescroll',
        'easypiechart'

    ], function(nav, io) {
        //Start App
        $(document).foundation();
        nav.init();
        helpers.fadeOutLoader(300);
    });
});