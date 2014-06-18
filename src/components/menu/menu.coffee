Beard.Menu =
  init: ->
    console.log 'Beard: Menu init'
    @bindEvents()
  bindEvents: ->
    $('.b-menu').on 'click', (e) ->
      e.preventDefault()

      menu = $('.' + $(this).data('trigger')).toggle()