<script>
export default {
  data () {
    return {
      shapeMove: 0,
      timer: null,
    };
  },
  mounted () {
    this.intervalMove();
  },
  beforeDestroy () {
    window.clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    intervalMove () {
      let dotStep = 1;
      this.timer = window.setInterval(() => {
        if (Math.abs(this.shapeMove) === 50) dotStep = dotStep > 0 ? -1 : 1;
        this.shapeMove += dotStep;
      }, 50);
    },
  },
  render () {
    const { shapeMove } = this;
    return (
      <div class="home-banner-background">
        <svg viewBox="0 0 1440 448">
          <g
            transform={`translate(${408.8787372617875 + shapeMove}, ${
              30.651553033787422 + shapeMove
            })`}
            opacity="1"
            frame="392"
          >
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 170, 170)">
                <svg>
                  <defs>
                    <filter id="banner-circle-shadow-1">
                     
                    </filter>
                    <linearGradient
                      id="banner-circle-fill-1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: rgb(250, 252, 254);"
                      ></stop>
                      <stop
                        offset="100%"
                        style="stop-color: rgb(249, 252, 254);"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <circle
                    cx="170"
                    cy="170"
                    r="140"
                    fill="url(#banner-circle-fill-1)"
                    filter="url(#banner-circle-shadow-1)"
                  ></circle>
                </svg>
              </g>
            </g>
          </g>
          <g
            transform={`translate(${-202.96396131283856 - shapeMove}, ${
              245.83952012759022 - shapeMove
            })`}
            opacity="1"
            frame="392"
          >
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 230, 230)">
                <svg>
                  <defs>
                    <filter id="banner-circle-shadow-2">
                      
                    </filter>
                    <linearGradient
                      id="banner-circle-fill-2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: rgb(250, 252, 254);"
                      ></stop>
                      <stop
                        offset="50%"
                        style="stop-color: rgb(243, 249, 252);"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <circle
                    cx="230"
                    cy="230"
                    r="200"
                    fill="url(#banner-circle-fill-2)"
                    filter="url(#banner-circle-shadow-2)"
                  ></circle>
                </svg>
              </g>
            </g>
          </g>
          <g
            transform={`translate(${1304.825345524851 - shapeMove}, ${
              217.87111971799635 - shapeMove
            })`}
            opacity="1"
            frame="392"
          >
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 120, 120)">
                <svg>
                  <defs>
                    <filter id="banner-rect-shadow-1">
                     
                    </filter>
                    <linearGradient
                      id="banner-rect-fill-1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="25%"
                        style="stop-color: rgb(248, 252, 255);"
                      ></stop>
                      <stop
                        offset="100%"
                        style="stop-color: rgb(248, 251, 255);"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <rect
                    x="30"
                    y="30"
                    width="180"
                    height="180"
                    fill="url(#banner-rect-fill-1)"
                    filter="url(#banner-rect-shadow-1)"
                  ></rect>
                </svg>
              </g>
            </g>
          </g>
          <g
            transform={`translate(${690.3922386386771 + shapeMove}, ${
              -677.7843738212265 - shapeMove
            })`}
            opacity="1"
            frame="392"
          >
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 430, 430)">
                <svg width="860" height="860">
                  <defs>
                    <filter id="banner-diamond-shadow-1">
                      
                    </filter>
                    <linearGradient
                      id="banner-diamond-fill-1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="60%"
                        style="stop-color: rgb(252, 253, 255);"
                      ></stop>
                      <stop
                        offset="100%"
                        style="stop-color: rgb(252, 253, 254);"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M 30 430 430 30 830 430 430 830 Z"
                    fill="url(#banner-diamond-fill-1)"
                    filter="url(#banner-diamond-shadow-1)"
                  ></path>
                </svg>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  },
};
</script>

<style lang="less">
.home-banner-background {
  height: 100%;
  @keyframes animateShape {
    0% {
      transform: translate(100, 100);
    }
    50% {
      transform: translate(120, 120);
    }
    75% {
      transform: translate(180, 180);
    }
  }
  g {
    animation: animateShape infinite 2s;
  }
}
.home-banner-background > * {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
</style>
