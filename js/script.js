"use strict"

setTimeout(()=>{
    document.getElementById('timer').innerHTML = '10'
    setTimeout(function(){
        document.getElementById('timer').innerHTML = '9'
        setTimeout(function(){
            document.getElementById('timer').innerHTML = '8'
            setTimeout(function(){
                document.getElementById('timer').innerHTML = '7'
                setTimeout(function(){
                    document.getElementById('timer').innerHTML = '6'
                    setTimeout(function(){
                        document.getElementById('timer').innerHTML = '5'
                        setTimeout(function(){
                            document.getElementById('timer').innerHTML = '4'
                            setTimeout(function(){
                                document.getElementById('timer').innerHTML = '3'
                                setTimeout(function(){
                                    document.getElementById('timer').innerHTML = '2'
                                    setTimeout(function(){
                                        document.getElementById('timer').innerHTML = '1'
                                        setTimeout(function(){
                                            document.getElementById('timer').innerHTML = 'HAPPY INDEPENDENCE DAY!!'
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
});
