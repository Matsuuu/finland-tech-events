import{_ as t}from"./6ab2ff8a.js";import{s as e,i as r}from"./6058d862.js";import{y as o}from"./ca0ac79f.js";let s=0;const n=[..."to this wonderful world of progressive hydration 🤯"];class i extends e{constructor(){super(),this.msg=" ",this.counter=0}updated(t){super.updated(t),s<n.length&&setTimeout((()=>{this.msg+=n[s],s+=1}),Math.floor(50*Math.random())+40)}render(){return o`
      <p>🤔 Hello <span>${this.msg}</span>${"🤯".repeat(this.counter)}</p>
      <button @click=${this._inc}>+</button>
    `}_inc(){s>=n.length&&(this.counter+=1)}}t(i,"properties",{msg:{type:String},counter:{type:Number}}),t(i,"styles",[r`
      button {
        font-size: 200%;
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `]);export{i as HelloTyper};
