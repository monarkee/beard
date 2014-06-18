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
        menu = $('.' + $(this).data('trigger')).toggle();
        return console.log(menu);
      });
    }
  };

}).call(this);
