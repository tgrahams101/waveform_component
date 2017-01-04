(function() {

    var Waveform;

    window.Waveform = Waveform = (function() {

        Waveform.name = 'Waveform';

        function Waveform(options) {
            this.container = options.container;
            this.canvas = this.createCanvas(this.container, this.container.clientWidth, this.container.clientHeight);
            this.context = this.canvas.getContext("2d");
            this.width = parseInt(this.context.canvas.width, 10);
            this.height = parseInt(this.context.canvas.height, 10);
            this.makeRect();
        };

        Waveform.prototype.createCanvas = function(container, width, height) {
          var canvas;
          canvas = document.createElement("canvas");
          canvas.setAttribute("id", "wfCanvas");
          container.appendChild(canvas);
          canvas.width = width;
          canvas.height = height;
          return canvas;
        };

        Waveform.prototype.makeRect = function() {
          var wfCanvas = document.getElementById("wfCanvas");
          var ctx = wfCanvas.getContext("2d");
          ctx.fillRect(20,20,50,100);
        }

        return Waveform;

    })();

}).call(this);
