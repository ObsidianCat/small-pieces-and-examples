const validationRules = {
  isNotEmpty: function(val){
    "use strict";
    if(!val.trim()){
      return false;
    }
    return true;
  },
  isChecked: function(el){
    "use strict";
    if(el.checked){
      return true;
    }
    return false;
  },
};

function appendErrorMessage(elSelector, validationResults){
  "use strict";
  removeErrorMessage(elSelector);
  validationResults.forEach((item)=>{
    elSelector.parent().append(`<p class="valid-error-message">${item}</p>`);
  });
}

function removeErrorMessage(elSelector){
  "use strict";
  elSelector.siblings('.valid-error-message').remove();
}
function validateElement(el){
  "use strict";
  const elSelector = $(el);
  const validationResults = [];
  if(elSelector.hasClass('valid-required')){
    let result = true;
    if(el.type === 'text' || el.type === 'email' || el.type === 'textarea'){
      result = validationRules.isNotEmpty(el.value);
      if(!result){
        validationResults.push("This input cannot be empty");
      }
    }
    else if(el.type === 'checkbox' ){
      result = validationRules.isChecked(el);
      if(!result){
        validationResults.push("This checkbox is required");
      }
    }
  }
  if(validationResults.length>0){
    appendErrorMessage(elSelector, validationResults);
  }
  else{
    removeErrorMessage(elSelector);
  }

}

$( document ).ready(function() {
  $('form').find(':input').not('.submit').on('blur', function(event){
    validateElement(this);
  });

  $('form .submit').on('click', function(event){
    event.preventDefault();
    $(this).closest('form').find(':input').not('.submit').each(function(){
      "use strict";
      validateElement(this);
    });
    console.log('submit clicked')
  })
});
