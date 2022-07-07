class Operation{
constructor(fNum,Snum){
    this.fNum = fNum;
    this.Snum = Snum;

}
getInfo(){
    return `The numbers are ${this.fNum} and  ${this.Snum}`;
}
 Multiply(){
    let answer = parseFloat(this.Snum) * parseFloat(this.fNum);
    return `The product is : ${parseFloat(answer)}`;
 }

 Divide(){
    let answer = parseFloat(this.fNum)/ parseFloat(this.Snum) ;
    return `The quotient is :  ${answer}`;
 }

 Add(){
    let answer =  parseFloat(this.Snum) + parseFloat(this.fNum) ;
    return `The sum is :  ${answer}`;
 }

 Subtract(){
    let answer =  parseFloat(this.fNum) -  parseFloat(this.Snum)  ;
    return `The difference is :  ${answer}`;
 }


}

const buttons = document.querySelectorAll("button");
const label = document.querySelector('#answerLabel');
buttons.forEach( function(button){
let operator = button.value;
button.addEventListener("click",()=>{
    let fnum = document.getElementById('fnum').value;
    let snum = document.getElementById('snum').value;

    if(Number(fnum) == 0 || Number(snum) == 0){
        label.classList.add('text-danger');
        label.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> Please input a number.`;
        return false;
    }
    const operate = new Operation(fnum,snum);
    let answer = null;
   switch (operator) {
    case 'Add':
        answer = operate.Add();
    break;
    case 'Subtract':
        answer = operate.Subtract();
    break;
    case 'Divide':
        answer = operate.Divide();
    break;
    case 'Multiply':
        answer = operate.Multiply();
    break;
    default:
    console.log('Operator not found');
    break;
   }

   label.classList.remove('text-danger');
   label.innerHTML=answer;

})
});

// ParticlesJS Config.
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

