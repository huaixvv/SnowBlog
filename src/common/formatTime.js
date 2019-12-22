
//毫秒转00：00
export function MillisecondToTime(msd) {
  let time = parseFloat(msd) / 1000;
  if (null != time && "" != time) {
      if (time > 60 && time < 60 * 60) {
          let a = parseInt(time / 60.0) < 10 ? ('0' + parseInt(time / 60.0)) : parseInt(time / 60.0);
          let ms = parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60);
          let b = (ms < 10) ? ('0' + ms) : ms;
          time = '00:' + a + ':' + b;
      }
      else if (time >= 60 * 60 && time < 60 * 60 * 24) {
          let H = parseInt(time / 3600.0) < 10 ? ('0' + parseInt(time / 3600.0)) : parseInt(time / 3600.0);
          let ms = parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60);
          let M = (ms < 10) ? ('0' + ms) : ms;
          let ss = parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
              parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60);
          let S = (ss < 10) ? ('0' + ss) : ss;
          time = H + ':' + M + ':' + S;
      }
      else {
          let d = parseInt(time) < 10 ? ('0' + parseInt(time)) : parseInt(time);
          time = '00:00:' + d;
      }
  }
    // console.log(typeof(time));
  return time;
};
