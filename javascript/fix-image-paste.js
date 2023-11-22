// fix-image-paste.js

(function(){
  var old_target = null;
  var old_timeout = null;
  document.addEventListener('paste',function(e){
    var clipboardData = e.clipboardData;
    var items = clipboardData && clipboardData.items;
    if(items){
      var dataTransfer = null;
      var length = items.length;
      for(var i=0; i<length; i++){
        var item = items[i];
        if(item && (''+item.type).indexOf('image')!==-1 && item.getAsFile){
          if(!dataTransfer){
            if((typeof DataTransfer)!=='undefined'){
              dataTransfer = new DataTransfer();
            }else{
              dataTransfer = {
                files: [],
              };
            }
          }
          if(dataTransfer.items){
            dataTransfer.items.add(item.getAsFile());
          }else{
            dataTransfer.files.push(item.getAsFile());
          }
        }
      }
      if(dataTransfer){
        e.preventDefault();
        var target = document;        
        while(true){
          var targets = target.querySelectorAll(':hover');
          target = targets && targets[targets.length-1];
          if(target && target.shadowRoot){
            target = target.shadowRoot;
          }else{
            break;
          }
        }
        if(target){
          if(old_timeout){
            clearTimeout(old_timeout);
          }
          if(target!==old_target){
            e.stopPropagation();
            old_target = target;
            old_timeout = setTimeout(function(){
              old_target = null;
            },500);
          }else{
            old_target = null;
          }
          var buggy = target.getRootNode().querySelectorAll('div.image-container[data-testid="image"] div:first-child *');
          while(Array.prototype.indexOf.call(buggy,target)>=0){
            target = target.parentElement;
          }
          target.dispatchEvent(new DragEvent('drop',{
            dataTransfer: dataTransfer,
          }));
        }
      }
    }
  });
})();

//EOF
