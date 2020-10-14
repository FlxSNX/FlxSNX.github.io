"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BkmPlayer = /*#__PURE__*/function () {
  function BkmPlayer(config) {
    var _this = this;

    _classCallCheck(this, BkmPlayer);

    this.version = '1.00';
    this.isMove = false;
    this.container = document.querySelector('.bkmplayer'), //放置播放器的容器
    this.autoplay = false, //自动播放,默认未false,因为部分播放器不支持自动播放视频.
    this.video = {
      url: '' //视频地址

    }, this.logo = 'https://ae01.alicdn.com/kf/U08a490c77627402bad9d204db5d663afA.jpg',
    /* 多集模式 可播放完自动播放下一集 */
    this.nextpartmode = false;
    this.playIndex = 0;
    /* 
        默认playlist传入为视频地址,如何从playlist内获取videourl
        此方法可以自定义
        例如传入的playlist为视频id 如何通过id向后端请求获取视频地址
        *可以通过pushState、replaceState改变地址栏地址 而不刷新
    */

    this.nextpart_geturl = function () {
      _this.video.url = _this.playlist[_this.playIndex];
    };
    /* this.danIndex = 0;
    this.dan = [];
    this.danTunnel = {
        right: {},
        top: {},
        bottom: {},
    }; */


    Object.assign(this, config);
    $(function () {
      _this.Init();
      /* 下个版本再加入弹幕 */
      // this.danmu_load();

    });
  }
  /* 
      初始化播放器
  */


  _createClass(BkmPlayer, [{
    key: "Init",
    value: function Init() {
      var _this2 = this;

      console.log("%cBkmPlayer%c Version 1.00 Copyright © 2019-2020 哔咔萌 bikamoe.com Powered by FlxSNX <211154860@qq.com>", 'font-family:"微软雅黑";color:#1E9FFF;font-size:36px;text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);', 'font-size:12px;color:#666;font-family: "微软雅黑";');
      this.container.innerHTML = '<div id="bkmplayer"><div class="danmuku"></div><div class="loading"><div class="info"></div></div><div class="loading_2"><svg x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(338.83 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg></div><div class="playicon"></div><div class="logo"><img></div><div class="tips"><span></span></div><video></video><div class="control"><div class="action"><div class="btn-play"><span></span></div><div class="btn-next"><span></span></div><div class="time"><span>00:00</span> / <span>00:00</span></div><div class="fullscreen"><span></span></div></div><div class="progress"><div class="current"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_25"><rect width="18" height="18" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_25)"><g transform="matrix(1,0,0,1,8.937000274658203,8.25)" opacity="0.14" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0.07500000298023224,1.2130000591278076)"><path fill="rgb(251,114,153)" fill-opacity="1" d=" M9,-3.5 C9,-3.5 9,3.5 9,3.5 C9,5.707600116729736 7.207600116729736,7.5 5,7.5 C5,7.5 -5,7.5 -5,7.5 C-7.207600116729736,7.5 -9,5.707600116729736 -9,3.5 C-9,3.5 -9,-3.5 -9,-3.5 C-9,-5.707600116729736 -7.207600116729736,-7.5 -5,-7.5 C-5,-7.5 5,-7.5 5,-7.5 C7.207600116729736,-7.5 9,-5.707600116729736 9,-3.5z"></path></g></g><g transform="matrix(1,0,0,1,9.140999794006348,8.67199993133545)" opacity="0.28" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-0.1509999930858612,0.7990000247955322)"><path fill="rgb(251,114,153)" fill-opacity="1" d=" M8,-3 C8,-3 8,3 8,3 C8,4.931650161743164 6.431650161743164,6.5 4.5,6.5 C4.5,6.5 -4.5,6.5 -4.5,6.5 C-6.431650161743164,6.5 -8,4.931650161743164 -8,3 C-8,3 -8,-3 -8,-3 C-8,-4.931650161743164 -6.431650161743164,-6.5 -4.5,-6.5 C-4.5,-6.5 4.5,-6.5 4.5,-6.5 C6.431650161743164,-6.5 8,-4.931650161743164 8,-3z"></path></g></g><g transform="matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(0,0,0)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"></path></g></g><g transform="matrix(1.1436611413955688,0.7535901665687561,-0.6317168474197388,0.9587040543556213,16.0070743560791,2.902894973754883)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(0.992861807346344,0.1192704513669014,-0.1192704513669014,0.992861807346344,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(0,0,0)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"></path></g></g><g transform="matrix(1,0,0,1,8.890999794006348,8.406000137329102)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0.09099999815225601,1.1009999513626099)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="1.5" d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"></path></g></g><g transform="matrix(1,0,0,1,8.89900016784668,8.083999633789062)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(0,0,0)" fill-opacity="1" d=" M0.875,-1.125 C0.875,-1.125 0.875,1.125 0.875,1.125 C0.875,1.607912540435791 0.48291251063346863,2 0,2 C0,2 0,2 0,2 C-0.48291251063346863,2 -0.875,1.607912540435791 -0.875,1.125 C-0.875,1.125 -0.875,-1.125 -0.875,-1.125 C-0.875,-1.607912540435791 -0.48291251063346863,-2 0,-2 C0,-2 0,-2 0,-2 C0.48291251063346863,-2 0.875,-1.607912540435791 0.875,-1.125z"></path></g></g><g transform="matrix(1,0,0,1,14.008999824523926,8.083999633789062)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(0,0,0)" fill-opacity="1" d=" M0.8999999761581421,-1.100000023841858 C0.8999999761581421,-1.100000023841858 0.8999999761581421,1.100000023841858 0.8999999761581421,1.100000023841858 C0.8999999761581421,1.596709966659546 0.4967099726200104,2 0,2 C0,2 0,2 0,2 C-0.4967099726200104,2 -0.8999999761581421,1.596709966659546 -0.8999999761581421,1.100000023841858 C-0.8999999761581421,1.100000023841858 -0.8999999761581421,-1.100000023841858 -0.8999999761581421,-1.100000023841858 C-0.8999999761581421,-1.596709966659546 -0.4967099726200104,-2 0,-2 C0,-2 0,-2 0,-2 C0.4967099726200104,-2 0.8999999761581421,-1.596709966659546 0.8999999761581421,-1.100000023841858z"></path></g></g></g></svg></div></div><div class="duration"></div></div></div><div class="right"><ul><li><a target="_blank" href="https://www.bikamoe.com">哔咔萌动漫</a></li><li><a target="_blank" href="https://github.com/FlxSNX">BkmPlayer V1.00</a></li></ul></div></div>';
      this.bkmplayer = $('#bkmplayer'); //获取Video对象

      this.BkmVideo = $('#bkmplayer>video');
      this.Video = this.BkmVideo[0];
      this.ActionFunction();
      $('#bkmplayer .logo>img').attr('src', this.logo);
      this.bkmplayer.find('.loading>.info').append('<span>BkmPlayer载入成功!</sapn>'); //开启多集模式时从playlist获取地址

      if (this.nextpartmode == true) this.nextpart_geturl();
      this.LoadVideoUrl();
      /* 开始加载视频数据事件 */

      this.Video.onloadstart = function () {
        setTimeout(function () {
          _this2.bkmplayer.find('.loading>.info').append('<span>视频连接中...</sapn>');
        }, 500);
      };
      /* 当获取视频失败时 */


      if (this.videotype == 'hls') {
        this.hls.on(Hls.Events.ERROR, function () {
          setTimeout(function () {
            _this2.bkmplayer.find('.loading>.info').append('<span>视频连接失败!</sapn>');
          }, 1500);
        });
      } else {
        this.Video.onerror = function () {
          setTimeout(function () {
            _this2.bkmplayer.find('.loading>.info').append('<span>视频连接失败!</sapn>');
          }, 1500);
        };
      }
      /* 视频可以播放时事件 */


      this.Video.oncanplay = function () {
        if (!_this2.FirstPlaySuccess) {
          setTimeout(function () {
            _this2.bkmplayer.find('.loading>.info').append('<span>视频连接成功!</sapn>');

            setTimeout(function () {
              $('#bkmplayer .loading').hide();

              if (_this2.autoplay == true) {
                _this2.Video.play()["catch"](function () {
                  console.log('浏览器不支持自动播放');
                });
              }

              _this2.FirstPlaySuccess = true;
              /* 清空加载信息 */

              _this2.bkmplayer.find('.loading>.info').html('');
            }, 1000);
          }, 1500);
        }
      };
      /* 开始加载视频数据事件 */


      this.Video.onloadeddata = function () {
        $('.control .time span:nth-child(2)').text(_this2.formatTime(_this2.Video.duration));
        $('#bkmplayer .control').attr('style', 'opacity: 1');
      };
      /* 视频时间改变事件 */


      this.Video.ontimeupdate = function () {
        $('.control .time span:nth-child(1)').text(_this2.formatTime(_this2.Video.currentTime));
        if (_this2.isMove == false) $('#bkmplayer .current').css('width', _this2.Video.currentTime / _this2.Video.duration * 100 + '%');
      };
      /* 视频播放事件 */


      this.Video.onplay = function () {
        $('.control .btn-play').addClass('pause');
        $('#bkmplayer .playicon').addClass('hide');
      };
      /* 视频暂停事件 */


      this.Video.onpause = function () {
        $('.control .btn-play').removeClass('pause');
        $('#bkmplayer .playicon').removeClass('hide');
        $('#bkmplayer').attr('style', 'cursor: auto');
        $('#bkmplayer .control').attr('style', '');
      };

      this.Video.onwaiting = function () {
        $('#bkmplayer .loading_2').show();
      };

      this.Video.onplaying = function () {
        $('#bkmplayer .loading_2').hide();
      };
      /* Video右键菜单 */


      this.Video.oncontextmenu = function (e) {
        e.preventDefault();
        $('#bkmplayer>.right').css({
          'left': e.offsetX + 'px',
          'top': e.offsetY + 'px'
        });
        $('#bkmplayer>.right').show();
      };

      $('#bkmplayer')[0].oncontextmenu = function (e) {
        e.preventDefault();
        $('#bkmplayer>.right').css({
          'left': e.offsetX + 'px',
          'top': e.offsetY + 'px'
        });
        $('#bkmplayer>.right').show();
      };

      $(window).click(function () {
        $('#bkmplayer>.right').hide();
      });

      this.Video.onended = function () {
        if (_this2.nextpartmode) _this2.NextPart();
      };
    }
  }, {
    key: "LoadVideoUrl",
    value: function LoadVideoUrl() {
      if (this.video.url != '') {
        this.Video.src = this.video.url; //判断是否为hls

        if (this.Video.src.indexOf('.m3u8') != -1) {
          this.videotype = 'hls';

          if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(this.Video.src);
            hls.attachMedia(this.Video);
            this.hls = hls;
          }
        }
      }
    }
  }, {
    key: "NextPart",
    value: function NextPart() {
      this.playIndex++;

      if (this.playIndex < this.playlist.length) {
        if (this.playIndex == this.playlist.length - 1) $('#bkmplayer .btn-next').hide();
        this.nextpart_geturl();
        this.LoadVideoUrl();
        this.FirstPlaySuccess = false;
        $('#bkmplayer .loading').show();
        this.bkmplayer.find('.loading>.info').append('<span>正在加载下一集...</sapn>');
      } else {
        /* 这里放播放完毕提示 */
      }
    }
    /* 
        播放器交互函数
    */

  }, {
    key: "ActionFunction",
    value: function ActionFunction() {
      var _this3 = this;

      /* 播放暂停按钮功能 */
      $('#bkmplayer .control .btn-play,#bkmplayer video,#bkmplayer .playicon').click(function () {
        if ($('#bkmplayer>.right').css('display') == 'none') {
          if (_this3.Video.paused) {
            _this3.Video.play();
          } else {
            _this3.Video.pause();
          }
        }
      });
      $('#bkmplayer .control .btn-next').click(function () {
        if (_this3.nextpartmode) _this3.NextPart();
      });
      /* 鼠标在3秒内无任何操作自动隐藏播放器控件 */

      var hidecontrol;
      $('#bkmplayer video,#bkmplayer .loading').mousemove(function () {
        if (_this3.Video.paused == false) {
          if (hidecontrol) clearTimeout(hidecontrol);
          $('#bkmplayer').attr('style', 'cursor: auto');
          $('#bkmplayer .control').attr('style', '');
          hidecontrol = setTimeout(function () {
            $('#bkmplayer').attr('style', 'cursor: none!important');
            $('#bkmplayer .control').attr('style', 'opacity: 0');
          }, 3000);
        } else {
          if (hidecontrol) clearTimeout(hidecontrol);
        }
      });
      /* 鼠标停在控件上时一直显示控件 移出后3秒隐藏 */

      $('#bkmplayer .control').hover(function () {
        if (hidecontrol) clearTimeout(hidecontrol);
        $('#bkmplayer').attr('style', 'cursor: auto');
        $('#bkmplayer .control').attr('style', '');
      }, function () {
        if (_this3.Video.paused == false) {
          hidecontrol = setTimeout(function () {
            $('#bkmplayer').attr('style', 'cursor: none!important');
            $('#bkmplayer .control').attr('style', 'opacity: 0');
          }, 3000);
        } else {
          if (hidecontrol) clearTimeout(hidecontrol);
        }
      });
      /* 鼠标停在播放器时显示控件 移出隐藏控件 */

      $('#bkmplayer').hover(function () {
        $('#bkmplayer').attr('style', 'cursor: auto');
        $('#bkmplayer .control').attr('style', '');
      }, function () {
        if (_this3.Video.paused == false) {
          $('#bkmplayer .control').attr('style', 'opacity: 0');
        }
      });
      /* 全屏按钮事件 */

      $('.control .fullscreen').click(function () {
        if ($(this).attr('full') == 'true') {
          document.exitFullscreen();
          $(this).attr('full', 'false');
          $(this).removeClass('full');
        } else {
          $('#bkmplayer')[0].requestFullscreen();
          $(this).attr('full', 'true');
          $(this).addClass('full');
        }
      });
      /* 用于Esc退出全屏时切换全屏按钮 */

      $('#bkmplayer').on('fullscreenchange', function () {
        if (!document.fullscreenElement) {
          $('.control .fullscreen').attr('full', 'false');
          $('.control .fullscreen').removeClass('full');
        }
      });
      /* 鼠标在进度条的时候时间tips */

      $('#bkmplayer .progress').mousemove(function (e) {
        $('#bkmplayer .tips').show();
        /* 时间字符串 */

        var x = e.clientX - $('#bkmplayer').offset().left - 10;

        if (x <= 0) {
          x = 0;
        } else if (x > $('#bkmplayer .progress').width()) {
          x = $('#bkmplayer .progress').width();
        }

        $('#bkmplayer .tips>span').text(_this3.formatTime(x / $('#bkmplayer .progress').width() * _this3.Video.duration));
        /* tips x轴位置 */

        x = e.clientX - $('#bkmplayer').offset().left - $('#bkmplayer .tips').width() / 2;

        if (x >= $('#bkmplayer .progress').width() - $('#bkmplayer .tips').width() + 20) {
          $('#bkmplayer .tips').css('left', $('#bkmplayer .progress').width() - $('#bkmplayer .tips').width() + 20);
        } else if (x <= 0) {
          $('#bkmplayer .tips').css('left', 0);
        } else {
          $('#bkmplayer .tips').css('left', x);
        }
      });
      /* 鼠标移出进度条时隐藏时间tips */

      $('#bkmplayer .progress').mouseout(function (e) {
        $('#bkmplayer .tips').hide();
      });
      /* 通过进度条改变视频播放进度 */

      $('#bkmplayer .progress').mousedown(function (e) {
        var x;
        _this3.isMove = true;
        x = e.clientX - $('#bkmplayer').offset().left - 10;
        $('#bkmplayer').mousemove(function (e) {
          if (_this3.isMove == true) {
            x = e.clientX - $('#bkmplayer').offset().left - 10;

            if (x >= $('#bkmplayer .progress').width()) {
              $('#bkmplayer .current').css("width", '100%');
            } else if (x <= 0) {
              $('#bkmplayer .current').css("width", 0);
            } else {
              $('#bkmplayer .current').css("width", x / $('#bkmplayer .progress').width() * 100 + '%');
            }
          }
        });
        $('#bkmplayer .current').css("width", x + 'px');
        $(document).mouseup(function (e) {
          if (_this3.isMove == true) {
            _this3.isMove = false;
            _this3.Video.currentTime = $('#bkmplayer .current').width() / $('#bkmplayer .progress').width() * _this3.Video.duration;
            console.log(_this3.Video.currentTime, _this3.Video.duration);
          }
        });
      });
      /* 点击播放器后获取焦点 点击其他元素后失去焦点 */

      document.addEventListener('click', function () {
        _this3.focus = false;
      }, true);
      $('#bkmplayer')[0].addEventListener('click', function () {
        _this3.focus = true;
      }, true);
      /* 按下空格切换播放状态 */

      $(document).keydown(function (e) {
        if (_this3.focus == true) {
          if (e.keyCode == 32) {
            if (_this3.Video.paused) {
              _this3.Video.play();
            } else {
              _this3.Video.pause();
            }
          }
        }
      });
    }
    /* 
        格式化时间
    */

  }, {
    key: "formatTime",
    value: function formatTime(time) {
      time = Math.round(time);
      var ss = time % 60,
          m = (time - ss) / 60,
          s = time - m * 60;
      if (m < 10) m = '0' + m;
      if (s < 10) s = '0' + s;
      return m + ':' + s;
    }
  }, {
    key: "danmu_load",
    value: function danmu_load() {
      var _this4 = this;

      var result = [{
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "1",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "2",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "3",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "4",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "5",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "6",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "7",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "8",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "9",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "10",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "11",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "12",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "13",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "14",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "15",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "16",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "17",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "18",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "19",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "20",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "21",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "22",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "23",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "24",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "25",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "26",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "27",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "28",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "29",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "30",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }, {
        "did": "1012",
        "vid": "19812",
        "uid": "0",
        "msg": "31",
        "time": "11",
        "datatime": "2020-07-08 00:40:14"
      }];
      this.dan = result.sort(function (a, b) {
        return a.time - b.time;
      });
      window.requestAnimationFrame(function () {
        _this4.danmu_frame();
      });
    }
  }, {
    key: "danmu_frame",
    value: function danmu_frame() {
      var _this5 = this;

      if (this.dan.length && !this.Video.paused) {
        var item = this.dan[this.danIndex];
        var dan = [];

        while (item && this.Video.currentTime > parseFloat(item.time)) {
          dan.push(item);
          item = this.dan[++this.danIndex];
        }

        this.danmu_draw(dan);
      }

      window.requestAnimationFrame(function () {
        _this5.danmu_frame();
      });
    }
  }, {
    key: "danmu_draw",
    value: function danmu_draw(dan) {
      var _this6 = this;

      var itemHeight = 30;
      var danWidth = $('#bkmplayer .danmuku')[0].offsetWidth;
      var danHeight = $('#bkmplayer .danmuku')[0].offsetHeight;
      var itemY = parseInt(danHeight / itemHeight);
      if (dan.length) console.log(dan);

      var danItemRight = function danItemRight(ele) {
        var eleWidth = ele.offsetWidth || parseInt(ele[0].style.width);
        var eleRight = ele[0].getBoundingClientRect().right || _this6.container.getBoundingClientRect().right + eleWidth;
        return $('#bkmplayer .danmuku')[0].getBoundingClientRect().right - eleRight;
      };

      var danSpeed = function danSpeed(width) {
        return (danWidth + width) / 5;
      };

      var getTunnel = function getTunnel(ele, type, width) {
        var tmp = danWidth / danSpeed(width);

        var _loop = function _loop(i) {
          var item = _this6.danTunnel[type][i + ''];

          if (item && item.length) {
            if (type !== 'right') {
              return "continue";
            }

            for (var j = 0; j < item.length; j++) {
              var danRight = danItemRight(item[j]) - 10;

              if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j][0].style.width)) || danRight <= 0) {
                break;
              }

              if (j === item.length - 1) {
                _this6.danTunnel[type][i + ''].push(ele);

                ele[0].addEventListener('animationend', function () {
                  _this6.danTunnel[type][i + ''].splice(0, 1);
                });
                return {
                  v: i % itemY
                };
              }
            }
          } else {
            _this6.danTunnel[type][i + ''] = [ele];
            ele[0].addEventListener('animationend', function () {
              _this6.danTunnel[type][i + ''].splice(0, 1);
            });
            return {
              v: i % itemY
            };
          }
        };

        for (var i = 0; _this6.unlimited || i < itemY; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
          if (_typeof(_ret) === "object") return _ret.v;
        }

        return -1;
      };

      for (var i in dan) {
        $('#bkmplayer .danmuku').append('<div class="danmu">' + dan[i].msg + '</div>');
        var line = getTunnel($('#bkmplayer .danmuku>.danmu:last-child'), 'right', $('#bkmplayer .danmuku>.danmu:last-child').width());
        var dantop = void 0;
        dantop = 35 * line;
        console.log(dantop);
        $('#bkmplayer .danmuku>.danmu:last-child').css({
          "right": "-" + $('#bkmplayer .danmuku>.danmu:last-child').width() + "px",
          "top": dantop + "px",
          "transform": "translateX(-" + ($('#bkmplayer .danmuku').width() + $('#bkmplayer .danmuku>.danmu:last-child').width() * 2) + "px)",
          "margin-right": "-" + $('#bkmplayer .danmuku>.danmu:last-child').width() + "px"
        });
        $('#bkmplayer .danmuku>.danmu:last-child').hover(function () {
          $(this).css('color', '#f00');
        });
      }
    }
  }]);

  return BkmPlayer;
}();
