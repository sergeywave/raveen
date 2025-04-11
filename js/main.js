"use strict";

const body = document.body
const header = document.querySelector('.header')
const menuBurger = document.querySelector('.header__burger')
const hmLinks = document.querySelectorAll('.header-nav ul li a')

const contactBtn = document.querySelector('.contacts-btn')
const contactBox = document.querySelector('.contacts-box')

contactBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    contactBox.classList.toggle('show');
    contactBtn.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!contactBox.contains(event.target) && !contactBtn.contains(event.target)) {
        contactBox.classList.remove('show');
        contactBtn.classList.remove('show');
    }
});


const backing = document.querySelector('.backing');
const stopPopup = document.querySelector('#stop-popup');
const stopPopupCloseBtn = document.querySelector('.stop-popup__close-btn');
const musicPopups = document.querySelectorAll('.music-popup');  
const ticketsBtn = document.querySelector('.tickets-btn');
const cardPopup = document.querySelector('#card-popup');
const cardPopupCloseBtn = document.querySelector('.card-popup__close-btn');
const inputs = document.querySelectorAll('.form-box input');



const popupMap = {
  berlin: "#berlin",
  paris: "#paris",
  amsterdam: "#amsterdam",
  prague: "#prague",
  vienna: "#vienna",
  lisbon: "#lisbon",
};


Object.entries(popupMap).forEach(([city, popupSelector]) => {
  const popup = document.querySelector(popupSelector);
  const cityBtns = document.querySelectorAll(`[data-city="${city}"]`);

  cityBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      backing.classList.add("show");
      popup.classList.add("show");
      body.classList.add("no-scroll");

      popup.querySelector(".stop-popup__close-btn").addEventListener(
        "click",
        () => {
          backing.classList.remove("show");
          popup.classList.remove("show");
          body.classList.remove("no-scroll");
        },
        { once: true }
      );
    });
  });
});


backing.addEventListener("click", (e) => {
  if (e.target === backing) {
    backing.classList.remove("show");
    document.body.classList.remove("no-scroll");
    document.querySelectorAll(".popup.show").forEach((popup) => {
      popup.classList.remove("show");
    });
  }
});


// const sanysPopup = document.querySelector('#sanys');
// const sanysBtns = document.querySelectorAll('[data-city="moscow"]');

// sanysBtns.forEach(btn => {

// btn.addEventListener('click', () => {
//     backing.classList.add('show');
//     sanysPopup.classList.add('show');
//     body.classList.add('no-scroll');
    
//     sanysPopup.querySelector('.stop-popup__close-btn').addEventListener('click', () => {
//         backing.classList.remove('show');
//         sanysPopup.classList.remove('show');
//         body.classList.remove('no-scroll');
//     })
    
//     })

// });


// const chizhPopup = document.querySelector('#chizh');
// const chizhBtns = document.querySelectorAll('[data-city="spb"]');

// chizhBtns.forEach(btn => {

// btn.addEventListener('click', () => {
//     backing.classList.add('show');
//     chizhPopup.classList.add('show');
//     body.classList.add('no-scroll');
    
//     chizhPopup.querySelector('.stop-popup__close-btn').addEventListener('click', () => {
//         backing.classList.remove('show');
//         chizhPopup.classList.remove('show');
//         body.classList.remove('no-scroll');
//     })
    
//     })

// });


// const donPopup = document.querySelector('#don');
// const donBtns = document.querySelectorAll('[data-city="don"]');

// donBtns.forEach(btn => {

// btn.addEventListener('click', () => {
//     backing.classList.add('show');
//     donPopup.classList.add('show');
//     body.classList.add('no-scroll');
    
//     donPopup.querySelector('.stop-popup__close-btn').addEventListener('click', () => {
//         backing.classList.remove('show');
//         donPopup.classList.remove('show');
//         body.classList.remove('no-scroll');
//     })
    
//     })

// });


// const omskPopup = document.querySelector('#omsk');
// const omskBtns = document.querySelectorAll('[data-city="omsk"]');

// omskBtns.forEach(btn => {

// btn.addEventListener('click', () => {
//     backing.classList.add('show');
//     body.classList.add('no-scroll');
//     omskPopup.classList.add('show');
    
//     omskPopup.querySelector('.stop-popup__close-btn').addEventListener('click', () => {
//         backing.classList.remove('show');
//         body.classList.remove('no-scroll');
//         omskPopup.classList.remove('show');
//     })
    
//     })

// });


// const kazanPopup = document.querySelector('#kazan');
// const kazanBtns = document.querySelectorAll('[data-city="kazan"]');

// kazanBtns.forEach(btn => {

// btn.addEventListener('click', () => {
//     backing.classList.add('show');
//     body.classList.add('no-scroll');
//     kazanPopup.classList.add('show');
    
//     kazanPopup.querySelector('.stop-popup__close-btn').addEventListener('click', () => {
//         backing.classList.remove('show');
//         body.classList.remove('no-scroll');
//         kazanPopup.classList.remove('show');
//     })
    
//     })

// });


// const tumenPopup = document.querySelector('#tumen');
// const tumenBtns = document.querySelectorAll('[data-city="tumen"]');

// tumenBtns.forEach(btn => {

// btn.addEventListener('click', () => {
//     backing.classList.add('show');
//     body.classList.add('no-scroll');
//     tumenPopup.classList.add('show');
    
//     tumenPopup.querySelector('.stop-popup__close-btn').addEventListener('click', () => {
//         backing.classList.remove('show');
//         body.classList.remove('no-scroll');
//         tumenPopup.classList.remove('show');
//     })
    
//     })

// });











for (let musicPopup of musicPopups) {
    musicPopup.addEventListener('click', (evt) => {
        evt.stopPropagation();
    });
};


ticketsBtn.addEventListener('click', () => {
  backing.classList.add('show');
  cardPopup.classList.add('show');
  body.classList.add('no-scroll');
})

inputs.forEach(input => {
    input.addEventListener('click', (evt) => {
        evt.stopPropagation();
        backing.classList.add('show');
        stopPopup.classList.add('show');
        body.classList.add('no-scroll');
    });
});

backing.addEventListener('click', (evt) => {
    evt.stopPropagation();
    backing.classList.remove('show');
    stopPopup.classList.remove('show');
    cardPopup.classList.remove('show');
    sanysPopup.classList.remove('show');
    chizhPopup.classList.remove('show');
    donPopup.classList.remove('show');
    omskPopup.classList.remove('show');
    kazanPopup.classList.remove('show');
    tumenPopup.classList.remove('show');
    body.classList.remove('no-scroll');
});

stopPopup.addEventListener('click', (evt) => {
    evt.stopPropagation();
});

cardPopup.addEventListener('click', (evt) => {
    evt.stopPropagation();
});



stopPopupCloseBtn.addEventListener('click', () => {
    backing.classList.remove('show');
    stopPopup.classList.remove('show');
    cardPopup.classList.remove('show');
    body.classList.remove('no-scroll');
});

cardPopupCloseBtn.addEventListener('click', () => {
    backing.classList.remove('show');
    cardPopup.classList.remove('show');
    body.classList.remove('no-scroll');
});








// music 

document.addEventListener('DOMContentLoaded', () => {
    const musicButtons = document.querySelectorAll('.music-button');

    musicButtons.forEach(button => {
        const popup = button.closest('.music-popup'); 
        const audio = popup.querySelector('.music-audio');

        button.addEventListener('click', () => {
            if (audio.paused) {
                document.querySelectorAll('.music-audio').forEach(otherAudio => {
                    if (!otherAudio.paused) {
                        otherAudio.pause();
                        const otherButton = otherAudio.closest('.music-popup').querySelector('.music-button');
                        otherButton.textContent = 'Слушать';
                        otherButton.classList.remove('playing');
                    }
                });

                audio.play();
                button.textContent = 'Остановить';
                button.classList.add('playing');
            } else {
                audio.pause();
                button.textContent = 'Слушать';
                button.classList.remove('playing');
            }
        });

        audio.addEventListener('ended', () => {
            button.textContent = 'Слушать';
            button.classList.remove('playing');
        });
    });
});



// animations 

document.addEventListener( 'DOMContentLoaded', () => {
    const heroSection = document.querySelector( '.hero-section' );

    const observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            if ( entry.isIntersecting ) {
                heroSection.classList.add( 'visible' );
            }
        });
    }, { threshold: 0.3 });

    if ( heroSection ) {
        observer.observe( heroSection );
    }
});


document.addEventListener( 'DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll( '.grid-item' );

    const observer = new IntersectionObserver( entries => {
        entries.forEach( ( entry, index ) => {
            if ( entry.isIntersecting ) {
                setTimeout( () => {
                    entry.target.classList.add( 'visible' );
                }, index % 2 === 0 ? 200 : 400 );
            }
        });
    }, { threshold: 0.05 });

    gridItems.forEach( item => observer.observe( item ) );
});



document.addEventListener( 'DOMContentLoaded', () => {
    const lineUpItems = document.querySelectorAll( '.line-up-item' );

    const observer = new IntersectionObserver( entries => {
        entries.forEach( ( entry, index ) => {
            if ( entry.isIntersecting ) {
                setTimeout( () => {
                    entry.target.classList.add( 'visible' );
                }, index * 300 );
            }
        });
    }, { threshold: 0.2 });

    lineUpItems.forEach( item => observer.observe( item ) );
});


document.addEventListener( 'DOMContentLoaded', () => {
    const bagSection = document.querySelector( '.bag-section' );

    const observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            if ( entry.isIntersecting ) {
                bagSection.classList.add( 'visible' );
            }
        });
    }, { threshold: 0.3 });

    if ( bagSection ) {
        observer.observe( bagSection );
    }
});



document.addEventListener( 'DOMContentLoaded', () => {
    const authorItems = document.querySelectorAll( '.authors-item' );

    const observer = new IntersectionObserver( entries => {
        entries.forEach( ( entry, index ) => {
            if ( entry.isIntersecting ) {
                setTimeout( () => {
                    entry.target.classList.add( 'visible' );
                }, index * 200 );
            }
        });
    }, { threshold: 0.2 });

    authorItems.forEach( item => observer.observe( item ) );
});



// bird 

class Bird {
  constructor(options) {
      this.canvas = options.canvas;
      this.gl = this.canvas.getContext("webgl", { alpha: true });

      this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      this.shaders = {
          bird: {
              vertex: this.compileShader(
                  this.gl.VERTEX_SHADER,
                  options.shaders.bird.vertex
              ),
              fragment: this.compileShader(
                  this.gl.FRAGMENT_SHADER,
                  options.shaders.bird.fragment
              )
          },
          dots: {
              vertex: this.compileShader(
                  this.gl.VERTEX_SHADER,
                  options.shaders.dots.vertex
              ),
              fragment: this.compileShader(
                  this.gl.FRAGMENT_SHADER,
                  options.shaders.dots.fragment
              )
          },
          trackdots: {
              vertex: this.compileShader(
                  this.gl.VERTEX_SHADER,
                  options.shaders.trackdots.vertex
              ),
              fragment: this.compileShader(
                  this.gl.FRAGMENT_SHADER,
                  options.shaders.trackdots.fragment
              )
          },
          trackdots2: {
              vertex: this.compileShader(
                  this.gl.VERTEX_SHADER,
                  options.shaders.trackdots2.vertex
              ),
              fragment: this.compileShader(
                  this.gl.FRAGMENT_SHADER,
                  options.shaders.trackdots2.fragment
              )
          }
      };

      this.cameraOptions = {
          zoom: 0.3,
          angleY: Math.PI * 0.4,
          angleX: 0.0
      };

      this.programs = {
          bird: null,
          dots: null
      };

      this.calculateMatrices();
      this.createBirdGeometry();
      this.createPrograms();
      this.updateCanvasUniforms();
      this.updateMatrixUniforms();
      this.initEventListeners();
      this.updateCanvasSize();

      requestAnimationFrame(this.animate.bind(this));
  }

  calculateMatrices() {
      const x = -4;
      const y = -0.5;

      this.modelMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, 0, 1];

      const z = this.cameraOptions.zoom;
      const a = this.cameraOptions.angleY;
      const b = this.cameraOptions.angleX;

      this.viewMatrix = [
          z * Math.cos(b),
          0,
          z * -Math.sin(b),
          0,
          z * -Math.sin(a) * Math.sin(b),
          z * Math.cos(a),
          z * -Math.sin(a) * Math.cos(b),
          0,
          z * Math.cos(a) * Math.sin(b),
          z * Math.sin(a),
          z * Math.cos(a) * Math.cos(b),
          0,
          0,
          0,
          0,
          1
      ];

      const s = 1 / Math.tan((90 * Math.PI) / 360);
      const n = -1;
      const f = 10.0;

      this.projectionMatrix = [
          s,
          0,
          0,
          0,
          0,
          s,
          0,
          0,
          0,
          0,
          -f / (f - n),
          -1,
          0,
          0,
          (-f * n) / (f - n),
          1
      ];
  }

  createBirdGeometry() {
      const points = [];

      const stepX = 0.4;
      const stepY = 0.2;

      for (let x = 0; x <= 8; x += stepX) {
          for (let y = 0; y <= 1; y += stepY) {
              if (y === 0) {
                  points.push(x);
                  points.push(y);
                  points.push(x + stepX);
                  points.push(y);
              }

              points.push(x + stepX);
              points.push(y);
              points.push(x + stepX);
              points.push(y + stepY);
              points.push(x + stepX);
              points.push(y + stepY);
              points.push(x);
              points.push(y + stepY);
              points.push(x);
              points.push(y + stepY);
              points.push(x);
              points.push(y);
              points.push(x);
              points.push(y);
              points.push(x + stepX);
              points.push(y + stepY);
          }
      }

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.gl.createBuffer());
      this.gl.bufferData(
          this.gl.ARRAY_BUFFER,
          new Float32Array(points),
          this.gl.STATIC_DRAW
      );
  }

  compileShader(type, source) {
      const shader = this.gl.createShader(type);

      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);

      return shader;
  }

  createPrograms() {
      this.createProgramByName("bird");
      this.createProgramByName("dots");
      this.createProgramByName("trackdots");
      this.createProgramByName("trackdots2");
  }

  createProgramByName(name) {
      this.programs[name] = this.gl.createProgram();

      this.gl.attachShader(this.programs[name], this.shaders[name].vertex);
      this.gl.attachShader(this.programs[name], this.shaders[name].fragment);
      this.gl.linkProgram(this.programs[name]);

      const vertexPositionAttribute = this.gl.getAttribLocation(
          this.programs[name],
          "a_position"
      );

      this.gl.enableVertexAttribArray(vertexPositionAttribute);
      this.gl.vertexAttribPointer(
          vertexPositionAttribute,
          2,
          this.gl.FLOAT,
          false,
          0,
          0
      );
  }

  updateMatrixUniforms() {
      this.updateMatrixUniformsForProgram(this.programs.bird);
      this.updateMatrixUniformsForProgram(this.programs.dots);
      this.updateMatrixUniformsForProgram(this.programs.trackdots);
      this.updateMatrixUniformsForProgram(this.programs.trackdots2);
  }

  updateMatrixUniformsForProgram(program) {
      this.gl.useProgram(program);
      this.gl.uniformMatrix4fv(
          this.gl.getUniformLocation(program, "u_model_matrix"),
          false,
          this.modelMatrix
      );
      this.gl.uniformMatrix4fv(
          this.gl.getUniformLocation(program, "u_view_matrix"),
          false,
          this.viewMatrix
      );
      this.gl.uniformMatrix4fv(
          this.gl.getUniformLocation(program, "u_projection_matrix"),
          false,
          this.projectionMatrix
      );
  }

  updateCanvasUniforms() {
      this.updateCanvasUniformsForProgram(this.programs.bird);
      this.updateCanvasUniformsForProgram(this.programs.dots);
      this.updateCanvasUniformsForProgram(this.programs.trackdots);
      this.updateCanvasUniformsForProgram(this.programs.trackdots2);
  }

  updateCanvasUniformsForProgram(program) {
      this.gl.useProgram(program);
      this.gl.uniform1f(
          this.gl.getUniformLocation(program, "u_canvas_height"),
          this.canvas.height
      );
      this.gl.uniform1f(
          this.gl.getUniformLocation(program, "u_canvas_width"),
          this.canvas.width
      );
  }

  updateTimeUniform(timeStamp) {
      this.updateTimeUniformForProgram(this.programs.bird, timeStamp);
      this.updateTimeUniformForProgram(this.programs.dots, timeStamp);
      this.updateTimeUniformForProgram(this.programs.trackdots, timeStamp);
      this.updateTimeUniformForProgram(this.programs.trackdots2, timeStamp);
  }

  updateTimeUniformForProgram(program, timeStamp) {
      this.gl.useProgram(program);
      this.gl.uniform1f(
          this.gl.getUniformLocation(program, "u_time"),
          timeStamp / 1000.0
      );
  }

  updateCanvasSize() {
    const aspectRatio = 12 / 9;
    
    if (window.innerWidth / window.innerHeight > aspectRatio) {
        this.canvas.width = Math.ceil(window.innerHeight * aspectRatio);
        this.canvas.height = Math.ceil(window.innerHeight);
    } else {
        this.canvas.width = Math.ceil(window.innerWidth);
        this.canvas.height = Math.ceil(window.innerWidth / aspectRatio);
    }

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.updateCanvasUniforms();
}


  updateCameraAngles(mouseX, mouseY) {
      const modX = (mouseX - window.innerWidth / 2) / window.innerWidth;
      const modY = (mouseY - window.innerHeight / 2) / window.innerHeight;

      this.cameraOptions.angleY = Math.PI * 0.4 + modY / 4;
      this.cameraOptions.angleX = modX;

      this.calculateMatrices();
      this.updateMatrixUniforms();
  }

  initEventListeners() {
      window.addEventListener("resize", this.updateCanvasSize.bind(this));

      document.body.addEventListener("mousemove", (e) => {
          this.updateCameraAngles(e.clientX, e.clientY);
      });
  }

  animate(timeStamp) {
    this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      this.updateTimeUniform(timeStamp);

      this.gl.useProgram(this.programs.trackdots);
      this.gl.drawArrays(this.gl.POINTS, 0, 1000);

      this.gl.useProgram(this.programs.bird);
      this.gl.drawArrays(this.gl.LINES, 0, 1000);

      this.gl.useProgram(this.programs.dots);
      this.gl.drawArrays(this.gl.POINTS, 0, 1000);

      this.gl.useProgram(this.programs.trackdots2);
      this.gl.drawArrays(this.gl.POINTS, 0, 1000);

      requestAnimationFrame(this.animate.bind(this));
  }
}

const myBird = new Bird({
  canvas: document.getElementById("bird-canvas"),
  shaders: {
      bird: {
          vertex: document.getElementById("bird-vertex-shader").textContent,
          fragment: document.getElementById("bird-fragment-shader")
              .textContent
      },
      dots: {
          vertex: document.getElementById("bird-dots-vertex-shader")
              .textContent,
          fragment: document.getElementById("bird-dots-fragment-shader")
              .textContent
      },
      trackdots: {
          vertex: document.getElementById("bird-trackdots-vertex-shader")
              .textContent,
          fragment: document.getElementById("bird-trackdots-fragment-shader")
              .textContent
      },
      trackdots2: {
          vertex: document.getElementById("bird-trackdots2-vertex-shader")
              .textContent,
          fragment: document.getElementById("bird-trackdots2-fragment-shader")
              .textContent
      }
  }
});