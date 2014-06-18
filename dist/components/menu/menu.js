(function() {
  Beard.Menu = {
    init: function() {
      console.log('Beard: Menu init');
      return this.bindEvents();
    },
    bindEvents: function() {
      return $('.b-menu').on('click', function(e) {
        var menu;
        e.preventDefault();
        return menu = $('.' + $(this).data('trigger')).toggle();
      });
    }
  };

}).call(this);
