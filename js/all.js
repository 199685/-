$(document).ready(function() {
    var body = document.body

    function gorock(e) {
        var key = e.keyCode
        console.log(key)
        switch (key) {
            case 97:
                document.querySelector('.rock.a').style.bottom = '2000px';
                document.querySelector('body').style.background = 'linear-gradient(30deg, #fa0303, #e4f30b)';
                break
            case 98:
                document.querySelector('.rock.b').style.bottom = '2000px';
                document.querySelector('body').style.background = 'linear-gradient(30deg, #fa0303, #2ee455)';
                break
            case 99:
                document.querySelector('.rock.c').style.bottom = '2000px';
                document.querySelector('body').style.background = 'linear-gradient(30deg, #fa0303, #abd9f3)';
                break
            case 100:
                document.querySelector('.rock.a').style.bottom = '0';
                document.querySelector('body').style.background = 'linear-gradient(30deg, #fa0303, #e7b4a0)';
                break
            case 101:
                document.querySelector('.rock.b').style.bottom = '0';
                document.querySelector('body').style.background = 'linear-gradient(30deg, #fa0303, #e7b4a0)';
                break
            case 102:
                document.querySelector('.rock.c').style.bottom = '0';
                document.querySelector('body').style.background = 'linear-gradient(30deg, #fa0303, #e7b4a0)';
        }


    }
    body.addEventListener('keydown', gorock, false)
});