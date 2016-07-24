(function(){
    var Earcon = {
        bar: true
    };

    if (typeof module === 'object' && module.exports){
        module.exports = Earcon;
    } else if (typeof window === 'object'){
        window.Earcon = Earcon;
    }
})();