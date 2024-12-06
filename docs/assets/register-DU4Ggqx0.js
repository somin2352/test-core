import{r as p,i as h,n as c,b as u,p as b,S as d,x as v,t as w}from"./Header-BVLvJ84H.js";import{g}from"./index-DjKJqAo0.js";var f=Object.defineProperty,m=Object.getOwnPropertyDescriptor,s=(e,t,r,l)=>{for(var i=l>1?void 0:l?m(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(i=(l?a(t,r,i):a(i))||i);return l&&i&&f(t,r,i),i};let o=class extends u{constructor(){super(...arguments),this.valid={step1:!1,step2:!1}}get idInput(){return this.renderRoot.querySelector("#idField")}get pwInput(){return this.renderRoot.querySelector("#pwField")}handleValidation(e){const t=e.currentTarget,r=t.id==="idField"?"step1":"step2";this.valid[r]=t.value.length>5,t.value.length>5&&this.requestUpdate()}handleStep1(){const e=this.renderRoot.querySelector(".wrapper");g.to(e,{x:-460})}handleStep2(){const e={email:this.idInput.value,password:this.pwInput.value,passwordConfirm:this.pwInput.value};b.collection("users").create(e).then(()=>{d.fire({text:"회원가입 완료! 로그인 페이지로 이동합니다!"}).then(()=>{location.href="/index.js"})}).catch(()=>{d.fire({text:"잘못된 정보를 입력하셨습니다."}).then(()=>{location.reload()})})}render(){return v`
      <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 <br />
              아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input type="email" id="idField" placeholder="아이디(이메일)입력" @input=${this.handleValidation} />
            <button ?disabled=${!this.valid.step1} type="button" class="next-1" @click=${this.handleStep1}>다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 <br />
              비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호 입력" @input=${this.handleValidation} />
            <button ?disabled=${!this.valid.step2} type="button" class="next-2" @click=${this.handleStep2}>회원가입</button>
          </div>
        </div>
      </div>
    `}};o.styles=[p,h`
      .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 440px;
        /* border: 1px solid red; */
        overflow: hidden;
        padding: 1rem;

        & h2 {
          font-size: 3rem;
          font-weight: bold;
        }

        .line {
          height: 4px;
          background-color: white;
          margin-bottom: 1rem;

          & div {
            width: 30%;
            height: 100%;
            background: orange;
          }
        }

        .wrapper {
          width: 900px;
          display: flex;
          justify-content: space-between;

          & > div {
            width: 440px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          & input {
            border: 1px solid white;
            padding: 1rem;
            min-width: 200px;
            margin: 0.5rem 0;
            outline: none;
          }

          & button {
            margin-top: 1.5rem;
            background-color: dodgerblue;
            color: white;
            border: none;
            padding: 1rem;
            cursor: pointer;

            &:disabled {
              background-color: #848484;
              color: black;
              cursor: not-allowed;
            }
          }
        }
      }
    `];s([c({type:Object})],o.prototype,"valid",2);o=s([w("register-element")],o);
