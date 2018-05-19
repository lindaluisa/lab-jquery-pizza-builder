  $(function() {
    // Button
  var $pepBtn = $('.btn-pepperonni');
  var $mushBtn = $('.btn-mushrooms');
  var $greenPepBtn = $('.btn-green-peppers');
  
    // Toppings
  var $pepperonni = $('.pep');
  var $mushroom = $('.mushroom');
  var $greenPeppers = $('.green-pepper');

    // Price
    var basicPizza = 10;
    var $pizzaTotal = $('strong');
    $('strong').text('$ 13');

  $pepBtn.on('click', function(){
    $pepperonni.toggle();
    $pepBtn.toggleClass('active');
    $('li:contains("pepperonni")').toggle();
    if ($pepBtn.hasClass('active')) {
      basicPizza += 1;
    } else {
      basicPizza -=1;
    }
    updateTotal();
  });

  $mushBtn.on('click', function(){
    $mushroom.toggle();
    $mushBtn.toggleClass('active');
    $('li:contains("mushrooms")').toggle();
    if ($mushBtn.hasClass('active')) {
      basicPizza += 1;
    } else {
      basicPizza -=1;
    }
    updateTotal();

  });

  $greenPepBtn.on('click', function(){
    $greenPeppers.toggle();
    $greenPepBtn.toggleClass('active');
    $('li:contains("green peppers")').toggle();
    if ($greenPepBtn.hasClass('active')){
          basicPizza+=1;
      } else {
          basicPizza-=1;
      }
      updateTotal();
  });

// White Sauce & Gluten Free Crust

var $sauce = $('.sauce');
var $sauceBtn = $('.btn-sauce');

  $sauce.removeClass('sauce-white');
  $sauceBtn.removeClass('active');

  $('li:contains("white sauce")').hide();
  $sauceBtn.on('click', function() {
  $sauce.toggleClass('sauce-white');
  $sauceBtn.toggleClass('active');
  $('li:contains("white sauce")').toggle();

})

var $crust = $('.crust');
var $crustBtn = $('.btn-crust');

  $crust.removeClass('crust-gluten-free');
  $crustBtn.removeClass('active');


  $('li:contains("gluten-free crust")').hide();
  $crustBtn.on('click', function(){
    $crust.toggleClass('crust-gluten-free');
    $crustBtn.toggleClass('active');
    $('li:contains("gluten-free crust")').toggle();
  })


  function updateTotal() {
       console.log($pizzaTotal);
       $('strong').text(function() {
        return $pizzaTotal = '$' + basicPizza;
       }
   )}

});
