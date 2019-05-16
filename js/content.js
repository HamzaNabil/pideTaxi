i18next.init();
function loadLanguage(lang) {
    
  $.ajax({
    url: './js/' + lang + '.json',
    dataType: 'json',
    success: function(res) {
        i18next.addResourceBundle(lang, 'translation' , res.translation)
        updateContent(res.lng)
    }

  })
}

// function for run Language 
function runLang(language) {
    loadLanguage(language)
    i18next.changeLanguage(language)
}

// Call runLang Function 
runLang('en')
  
// For Change Direction of Content and Load Content 
function updateContent(lng) {
    if(lng == 'en') {
        $('html').attr('dir','ltr')
        $('body').css('font-family','Roboto')
    } else if ( lng == 'ar') {
        $('html').attr('dir','rtl') 
        $('body').css('font-family','MarkaziText')
    }
    var transItems = document.getElementsByClassName('translate-data');
    var transbtns = document.getElementsByClassName('translate-btn');
     
    for(i = 0 ; i < transItems.length ; i++ ) {
        transItems[i].innerHTML = 
        i18next.t(transItems[i].getAttribute('data-translate'));
    }
    for(i = 0 ; i < transbtns.length ; i++ ) {
        transbtns[i].value = 
        i18next.t(transbtns[i].getAttribute('data-translate'));
    }
    
}
