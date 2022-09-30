import{_ as t}from"./6ab2ff8a.js";import{s as r,i as e}from"./6058d862.js";import{y as o}from"./ca0ac79f.js";class n extends r{constructor(){super(),this.counter=0}render(){return o`
      <button @click=${()=>this.counter-=1}>-</button>
      <span>${this.counter}</span>
      <button @click=${()=>this.counter+=1}>+</button>
    `}}t(n,"styles",e`
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 64px;
      height: 64px;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  `),t(n,"properties",{counter:{type:Number}});export{n as MyCounter};
