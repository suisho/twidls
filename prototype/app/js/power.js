(function($){
  /*if (!Modernizr.draganddrop) {
    console.log("やばいよやばいよ")
  }*/
  var dragged = undefined;
  // drag & drop
  $(document).on("dragover", function(e){
    e.preventDefault();
  }).on('dragenter', function(e){
    $(e.target).addClass("dragenter")
  }).on('dragleave', function(e){
    $(e.target).removeClass("dragenter")
  }).on('dragstart', function(e){
    dragged = e.target
  }).on('drop', function(e){
    e.preventDefault();
    
    var $target = $(e.target)
    if(!$target.hasClass("dropzone")){
      return false
    }

    var $append = $(dragged)
    if($(dragged).parent().hasClass("item_master")){
      $append = $(dragged).clone()
    }
    $target.append($append)
    $(e.target).removeClass("dragenter")
    return false
  })
})(jQuery)