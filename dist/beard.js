(function() {
  window.Beard = {
    init: function() {
      return console.log('Beard: init');
    }
  };

}).call(this);

(function() {
  Beard.Dropdown = {
    init: function() {
      console.log('Beard: Dropdown init');
      return this.bindEvents();
    },
    bindEvents: function() {
      return $('.b-dropdown-trigger').on('click', function(e) {
        var menu;
        e.preventDefault();
        console.log($(this).data('trigger'));
        return menu = $('.' + $(this).data('trigger')).toggle();
      });
    }
  };

}).call(this);

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
