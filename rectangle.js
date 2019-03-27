$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $widthValidation=$('#$widthValidation')
        $heightValidation=$('#$heightValidation')
        $perimeter = $('#perimeter'),
        $area = $('#area');
    
$width.focusout(function(){
  var w=$width.val();
  if(w===''){
    $widthValidation.html('宽度不能为空！');
    $width.select();
  }
})
$height.focusout(function(){
  var h=$height.val();
  if(h===''){
    $heightValidation.html('高度不能为空！');
    $height.select();
  }
})
    $btnCal.click(function(){
          var w = $width.val(),
              h = $height.val();

          var r = new Rectangle(w, h);

                $perimeter.val(r.perimeter());
                $area.val(r.area());
                  
    });

});
