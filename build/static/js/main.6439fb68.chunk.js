(this.webpackJsonpresize=this.webpackJsonpresize||[]).push([[0],{187:function(e,t,a){e.exports=a(397)},385:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);a(188),a(197);var n=a(1),i=a.n(n),o=a(185),l=a.n(o),c=(a(385),a(86)),r=a(87),s=a(89),m=a(88),d=(a(386),a(388),a(70)),u=(a(389),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={highlight:!1},n.fileInputRef=i.a.createRef(),n.onFilesAdded=n.onFilesAdded.bind(Object(d.a)(n)),n.openFileDialog=n.openFileDialog.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("dragover",(function(t){t.preventDefault(),e.setState({highlight:!0}),document.body.style.pointerEvents="none"})),document.addEventListener("dragleave",(function(t){t.preventDefault(),e.setState({highlight:!1})})),document.addEventListener("drop",(function(t){t.preventDefault(),e.onFilesAdded(t),e.setState({highlight:!1}),document.body.style.pointerEvents="auto"})),document.addEventListener("mouseover",(function(){e.state.highlight||(document.body.style.pointerEvents="auto")}))}},{key:"onFilesAdded",value:function(e){if(void 0===e.dataTransfer){var t=e.target.files;this.fileListToArray(t)}else{var a=e.dataTransfer.files;this.fileListToArray(a)}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"openFileDialog",value:function(){this.fileInputRef.current.click()}},{key:"render",value:function(){return i.a.createElement("div",{className:"card main-work"},i.a.createElement("div",{className:"whole ".concat(this.state.highlight?"whole-show":"")},"\uc5ec\uae30\uc5d0 \ud30c\uc77c\uc744 \uc62c\ub824 \uc8fc\uc138\uc694"),i.a.createElement("div",{className:"dropzone-dummy ".concat(this.state.highlight?"Highlight":"")},i.a.createElement("img",{alt:"upload",className:"Icon",src:"./img/cloud.png"}),i.a.createElement("input",{ref:this.fileInputRef,className:"FileInput",type:"file",multiple:!0,onChange:this.onFilesAdded}),i.a.createElement("span",null,"\uc5ec\uae30\uc5d0 \ud30c\uc77c\uc744 \uc62c\ub824 \uc8fc\uc138\uc694."),i.a.createElement("button",{className:"upload-button",onClick:this.openFileDialog},"\ub610\ub294 \ud30c\uc77c \uc120\ud0dd\ud558\uae30")),i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"details-left"},i.a.createElement("div",{className:"details-text"},i.a.createElement("span",{clssName:"details-dimension"},"1620 x 1320"),i.a.createElement("span",{className:"details-name"},"\ucea1\ucc98.png")),i.a.createElement("div",{className:"details-thumbnail-wrapper"},i.a.createElement("img",{className:"details-thumbnail",src:""}))),i.a.createElement("div",{className:"details-middle"}),i.a.createElement("div",{className:"details-right"})))}}]),a}(n.Component)),p=(a(390),a(49));var h=function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(p.b,{to:"/"},i.a.createElement("img",{id:"logo",src:"logo.png",alt:"logo"}))))};window.mobileAndTabletCheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};var v=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("section",null,i.a.createElement("div",{className:"card ad-card-1"}),window.mobileAndTabletCheck()?i.a.createElement("button",{id:"home-button",className:"add-button favorites"},"\ud648 \ud654\uba74\uc5d0 \ucd94\uac00"):i.a.createElement("button",{id:"favorite-button",className:"add-button favorites"},"\uc990\uaca8\ucc3e\uae30\uc5d0 \ucd94\uac00"),i.a.createElement(u,null),i.a.createElement("div",{className:"card ad-card-2"})))))};a(395);var g=function(){return i.a.createElement("footer",null,i.a.createElement("span",{className:"copyright"},"\xa9 2020 fweasy"),i.a.createElement("ul",{className:"footer-link"},i.a.createElement("li",null,i.a.createElement(p.b,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(p.b,{to:"/tos"},"Terms of Service"))))},b=(a(396),a(13));var f=function(){return i.a.createElement("div",{className:"card middle static"},"This is About page")};var E=function(){return i.a.createElement("div",{className:"card static middle"},"This is tos page")},w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(b.c,null,i.a.createElement(b.a,{path:"/",exact:!0,component:v}),i.a.createElement(b.a,{path:"/About",exact:!0,component:f}),i.a.createElement(b.a,{path:"/tos",exact:!0,component:E})),i.a.createElement(g,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.6439fb68.chunk.js.map