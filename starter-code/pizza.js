// Write your Pizza Builder JavaScript in this file.

  
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
  var $pepPrice = $('li:contains("pepperonni")')


  // $pepperonni.toggle()
  // $pepBtn.removeClass('active');
  $pepBtn.on('click', function(){
    $pepperonni.toggle();
    $pepBtn.toggleClass('active');
    $('li:contains("pepperonni")').toggle();
  });

  // $mushroom.toggle();
  // $mushBtn.removeClass('active');
  $mushBtn.on('click', function(){
    $mushroom.toggle();
    $mushBtn.toggleClass('active');
    $('li:contains("mushrooms")').toggle();
  });

  // $greenPeppers.toggle();
  // $greenPepBtn.removeClass('active');
  $greenPepBtn.on('click', function(){
    $greenPeppers.toggle();
    $greenPepBtn.toggleClass('active');
    $('li:contains("green peppers")').toggle();
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




});
