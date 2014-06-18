Beard.Dropdown =
  init: ->
    console.log 'Beard: Dropdown init'
    @bindEvents()
  bindEvents: ->
    $('.b-dropdown-trigger').on 'click', (e) ->
      e.preventDefault()

      console.log($(this).data('trigger'))

      menu = $('.' + $(this).data('trigger')).toggle()
      console.log menu