import{r as N,a as x,b as R,g as q}from"./index-DWXRZJdJ.js";function K(l,a){for(var p=0;p<a.length;p++){const n=a[p];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in l)){const u=Object.getOwnPropertyDescriptor(n,s);u&&Object.defineProperty(l,s,u.get?u:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var f,D;function B(){if(D)return f;D=1;var l=Object.create,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,b=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,M=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},g=(t,e,r,h)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of n(e))!u.call(t,i)&&i!==r&&a(t,i,{get:()=>e[i],enumerable:!(h=p(e,i))||h.enumerable});return t},w=(t,e,r)=>(r=t!=null?l(s(t)):{},g(!t||!t.__esModule?a(r,"default",{value:t,enumerable:!0}):r,t)),S=t=>g(a({},"__esModule",{value:!0}),t),o=(t,e,r)=>(b(t,typeof e!="symbol"?e+"":e,r),r),m={};M(m,{default:()=>y}),f=S(m);var d=w(N()),c=x(),P=R();const j="https://api.dmcdn.net/all.js",T="DM",E="dmAsyncInit";class y extends d.Component{constructor(){super(...arguments),o(this,"callPlayer",c.callPlayer),o(this,"onDurationChange",()=>{const e=this.getDuration();this.props.onDuration(e)}),o(this,"mute",()=>{this.callPlayer("setMuted",!0)}),o(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),o(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:r,config:h,onError:i,playing:A}=this.props,[,v]=e.match(P.MATCH_URL_DAILYMOTION);if(this.player){this.player.load(v,{start:(0,c.parseStartTime)(e),autoplay:A});return}(0,c.getSDK)(j,T,E,_=>_.player).then(_=>{if(!this.container)return;const L=_.player;this.player=new L(this.container,{width:"100%",height:"100%",video:v,params:{controls:r,autoplay:this.props.playing,mute:this.props.muted,start:(0,c.parseStartTime)(e),origin:window.location.origin,...h.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:C=>i(C)}})},i)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:r},d.default.createElement("div",{ref:this.ref}))}}return o(y,"displayName","DailyMotion"),o(y,"canPlay",P.canPlay.dailymotion),o(y,"loopOnEnded",!0),f}var O=B();const I=q(O),k=K({__proto__:null,default:I},[O]);export{k as D};
//# sourceMappingURL=DailyMotion-tL-dHAcl.js.map
