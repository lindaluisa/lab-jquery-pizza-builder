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
    var basicPizza = 13;
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

  var $saucePrice = $('li:contains("white sauce")');
  $saucePrice.hide();
  $sauceBtn.on('click', function() {
  $sauce.toggleClass('sauce-white');
  $sauceBtn.toggleClass('active');
  $saucePrice.toggle();
  // $saucePrice.toggle();
  if ($sauceBtn.hasClass('active')) {
    basicPizza += 3;
  } else {
    basicPizza -=3;
  }
  updateTotal();


})

var $crust = $('.crust');
var $crustBtn = $('.btn-crust');

  $crust.removeClass('crust-gluten-free');
  $crustBtn.removeClass('active');

  var $crustPrice = $('li:contains("gluten-free crust")');
  $crustPrice.hide();
  $crustBtn.on('click', function(){
    $crust.toggleClass('crust-gluten-free');
    $crustBtn.toggleClass('active');
    $crustPrice.toggle();
    if ($crustBtn.hasClass('active')) {
      basicPizza += 5;
    } else {
      basicPizza -= 5;
    }
    updateTotal();
  })


  function updateTotal() {
       console.log($pizzaTotal);
       $('strong').text('$ 13');
       $('strong').text(function() {
        return $pizzaTotal = '$' + basicPizza;
       }
   )}

});
