(function(){"use strict";var l={7451:function(l,a,e){var t=e(9242),o=e(3396);function i(l,a,e,t,i,n){const s=(0,o.up)("MainPage");return(0,o.wg)(),(0,o.j4)(s,{msg:"Welcome to Your Vue.js App"})}const n=(0,o._)("nav",{class:"navbar",role:"navigation","aria-label":"main navigation"},[(0,o._)("div",{class:"navbar-brand"})],-1),s={class:"main-cont columns is-desktop"},r={class:"column is-two-fifths"},u={class:"column"},d=(0,o._)("footer",{class:"footer"},[(0,o._)("div",{class:"content has-text-centered"})],-1);function c(l,a,e,t,i,c){const v=(0,o.up)("MainForm"),p=(0,o.up)("ModalForm");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("div",s,[(0,o._)("div",r,[(0,o.Wm)(v,{mainComputed:i.computed,onComputed:c.onClick},null,8,["mainComputed","onComputed"])]),(0,o._)("div",u,[(0,o.Wm)(p,{computed:i.computed},null,8,["computed"])])]),d],64)}var v=e(7139);const p={class:"box"},y={class:"field"},h=(0,o._)("label",{class:"label"},"Gross Pay",-1),m={class:"control"},f=(0,o._)("option",{value:"MONTHLY"},"Monthly",-1),g=(0,o._)("option",{value:"SEMI-MONTHLY"},"Semi-Monthly",-1),b=(0,o._)("option",{value:"DAILY"},"Daily",-1),_=[f,g,b],W={key:0,class:"field"},w={class:"control has-icons-right"},C={key:1,class:"field"},P={class:"control"},x={class:"field"},T={key:0,class:"control"},N={class:"field"},k={class:"control"},D={class:"field"},M=(0,o._)("label",{class:"label"},"Allowances",-1),O={class:"control"},H={class:"field"},S={class:"control"},V={class:"field"},q=(0,o._)("label",{class:"label"},"Holiday (Total days)",-1),A={class:"control"},R={class:"field"},I={class:"control"},G={class:"field"},Y=(0,o._)("label",{class:"label"},"Overtime (Total hours)",-1),U={class:"control"},L={class:"field"},z={class:"control"},j={class:"field"},B={class:"control"},F={class:"field"},E=(0,o._)("label",{class:"label"},"Night-Diff",-1),Z={class:"control"},$={class:"field"},J={class:"control"};function K(l,a,e,i,n,s){const r=(0,o.up)("vue-collapsible-panel"),u=(0,o.up)("vue-collapsible-panel-group");return(0,o.wg)(),(0,o.iD)("form",p,[(0,o._)("div",y,[h,(0,o._)("div",m,[(0,o._)("div",{class:(0,v.C_)("select "+s.getValidationClass(n.validation.grossPay.frequency))},[(0,o.wy)((0,o._)("select",{class:"select","onUpdate:modelValue":a[0]||(a[0]=l=>n.value.grossPay.frequency=l),onChange:a[1]||(a[1]=l=>s.frequencyOnChange(l))},_,544),[[t.bM,n.value.grossPay.frequency]])],2)])]),0==n.showDailyAttributes?((0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("div",w,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.grossPay.salary)),type:"number","onUpdate:modelValue":a[2]||(a[2]=l=>n.value.grossPay.salary=l),placeholder:"Your Basic Salary"},null,2),[[t.nr,n.value.grossPay.salary]])])])):(0,o.kq)("",!0),1==n.showDailyAttributes?((0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",P,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.grossPay.dailyRate)),type:"number","onUpdate:modelValue":a[3]||(a[3]=l=>n.value.grossPay.dailyRate=l),placeholder:"Daily Rate"},null,2),[[t.nr,n.value.grossPay.dailyRate]])])])):(0,o.kq)("",!0),(0,o._)("div",x,[1==n.showDailyAttributes?((0,o.wg)(),(0,o.iD)("div",T,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.grossPay.days)),type:"number","onUpdate:modelValue":a[4]||(a[4]=l=>n.value.grossPay.days=l),placeholder:"Num of days"},null,2),[[t.nr,n.value.grossPay.days]])])):(0,o.kq)("",!0)]),(0,o._)("div",N,[(0,o._)("div",k,[(0,o.Wm)(u,{"base-color":"#363636",accordion:""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{onClick:a[13]||(a[13]=l=>s.expand()),expanded:n.expandAddPayments},{title:(0,o.w5)((()=>[(0,o.Uk)(" Additional Payments ")])),content:(0,o.w5)((()=>[(0,o._)("div",D,[M,(0,o._)("div",O,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.allowance.nonTaxable)),type:"number",placeholder:"Non-Taxable Allowance","onUpdate:modelValue":a[5]||(a[5]=l=>n.value.allowance.nonTaxable=l)},null,2),[[t.nr,n.value.allowance.nonTaxable]])])]),(0,o._)("div",H,[(0,o._)("div",S,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.allowance.taxable)),type:"number",placeholder:"Taxable Allowance","onUpdate:modelValue":a[6]||(a[6]=l=>n.value.allowance.taxable=l)},null,2),[[t.nr,n.value.allowance.taxable]])])]),(0,o._)("div",V,[q,(0,o._)("div",A,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.holiday.regular)),type:"number",placeholder:"Regular Holiday","onUpdate:modelValue":a[7]||(a[7]=l=>n.value.holiday.regular=l)},null,2),[[t.nr,n.value.holiday.regular]])])]),(0,o._)("div",R,[(0,o._)("div",I,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.holiday.specialNonWorking)),type:"number",placeholder:"Special Non-working Holiday","onUpdate:modelValue":a[8]||(a[8]=l=>n.value.holiday.specialNonWorking=l)},null,2),[[t.nr,n.value.holiday.specialNonWorking]])])]),(0,o._)("div",G,[Y,(0,o._)("div",U,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.overtime.regular)),type:"number",placeholder:"Regular OT","onUpdate:modelValue":a[9]||(a[9]=l=>n.value.overtime.regular=l)},null,2),[[t.nr,n.value.overtime.regular]])])]),(0,o._)("div",L,[(0,o._)("div",z,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.overtime.regularHoliday)),type:"number",placeholder:"Regular holiday OT","onUpdate:modelValue":a[10]||(a[10]=l=>n.value.overtime.regularHoliday=l)},null,2),[[t.nr,n.value.overtime.regularHoliday]])])]),(0,o._)("div",j,[(0,o._)("div",B,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.overtime.specialNonWorking)),type:"number",placeholder:"Special Non-working Holiday OT","onUpdate:modelValue":a[11]||(a[11]=l=>n.value.overtime.specialNonWorking=l)},null,2),[[t.nr,n.value.overtime.specialNonWorking]])])]),(0,o._)("div",F,[E,(0,o._)("div",Z,[(0,o.wy)((0,o._)("input",{class:(0,v.C_)("input "+s.getValidationClass(n.validation.nightDiff)),type:"number",placeholder:"Total Hours","onUpdate:modelValue":a[12]||(a[12]=l=>n.value.nightDiff=l)},null,2),[[t.nr,n.value.nightDiff]])])])])),_:1},8,["expanded"])])),_:1})])]),(0,o._)("div",$,[(0,o._)("div",J,[(0,o._)("button",{type:"button",class:"button is-dark compute-btn",onClick:a[14]||(a[14]=l=>s.openModal())},"Compute")])])])}var Q=e(4806),X=e.n(Q),ll={props:["mainComputed","onComputed"],name:"MainForm",data(){return{isModalActive:!1,expandAddPayments:!1,grossPay:{frequency:null,salary:null},value:{grossPay:{frequency:null,salary:null,dailyRate:null,days:null},allowance:{nonTaxable:null,taxable:null},holiday:{regular:null,specialNonWorking:null},overtime:{regular:null,regularHoliday:null,specialNonWorking:null},nightDiff:null},showDailyAttributes:!1,computed:this.mainComputed,validation:{grossPay:{frequency:!0,salary:!0,dailyRate:!0,days:!0},allowance:{nonTaxable:!0,taxable:!0},holiday:{regular:!0,specialNonWorking:!0},overtime:{regular:!0,regularHoliday:!0,specialNonWorking:!0}}}},methods:{clickMe(){alert(this.frequency)},frequencyOnChange(l){"DAILY"===l.target.value?this.showDailyAttributes=!0:this.showDailyAttributes=!1},expand(){return this.expandAddPayments=!this.expandAddPayments},closeModal(){this.isModalActive=!1},validateForm(){let l=!0;return X().isNil(this.value.grossPay.frequency)?(this.validation.grossPay.frequency=!1,l=!1):(this.validation.grossPay.frequency=!0,"MONTHLY"===this.value.grossPay.frequency||"SEMI-MONTHLY"===this.value.grossPay.frequency?X().isNil(this.value.grossPay.salary)?(this.validation.grossPay.salary=!1,l=!1):this.validation.grossPay.salary=!0:(!X().isNil(this.value.grossPay.dailyRate)||this.value.grossPay.dailyRate>=1?this.validation.grossPay.dailyRate=!0:(this.validation.grossPay.dailyRate=!1,l=!1),!X().isNil(this.value.grossPay.days)||this.value.grossPay.days>=1?this.validation.grossPay.days=!0:(this.validation.grossPay.days=!1,l=!1))),this.value.allowance.nonTaxable>=0?this.validation.allowance.nonTaxable=!0:(this.validation.allowance.nonTaxable=!1,l=!1),this.value.allowance.taxable>=0?this.validation.allowance.taxable=!0:(this.validation.allowance.taxable=!1,l=!1),this.value.holiday.regular>=0?this.validation.holiday.regular=!0:(this.validation.holiday.regular=!1,l=!1),this.value.holiday.specialNonWorking>=0?this.validation.holiday.specialNonWorking=!0:(this.validation.holiday.specialNonWorking=!1,l=!1),this.value.overtime.regular>=0?this.validation.overtime.regular=!0:(this.validation.overtime.regular=!1,l=!1),this.value.overtime.regularHoliday>=0?this.validation.overtime.regularHoliday=!0:(this.validation.overtime.regularHoliday=!1,l=!1),this.value.overtime.specialNonWorking>=0?this.validation.overtime.specialNonWorking=!0:(this.validation.overtime.specialNonWorking=!1,l=!1),this.value.overtime.specialNonWorking>=0?this.validation.overtime.specialNonWorking=!0:(this.validation.overtime.specialNonWorking=!1,l=!1),this.value.nightDiff>=0?this.validation.nightDiff=!0:(this.validation.nightDiff=!1,l=!1),l},openModal(){1==this.validateForm()&&this.onComputed(X().cloneDeep(this.value))},getValidationClass(l){return 1==l?"is-dark":"is-danger"},resetValues(){this.value={grossPay:{frequency:null,salary:null,dailyRate:null,days:null},allowance:{nonTaxable:null,taxable:null},holiday:{regular:null,specialNonWorking:null},overtime:{regular:null,regularHoliday:null,specialNonWorking:null},nightDiff:null}}}},al=e(89);const el=(0,al.Z)(ll,[["render",K]]);var tl=el;const ol={class:"table is-bordered my-table"},il=(0,o._)("tr",{class:"table-header"},[(0,o._)("td",{colspan:"3"},"Payment")],-1),nl=(0,o._)("td",null,"Basic Salary",-1),sl=(0,o._)("td",null,null,-1),rl=(0,o._)("td",null,"Holidays",-1),ul=(0,o._)("td",null,null,-1),dl=(0,o._)("td",null,"Overtime",-1),cl=(0,o._)("td",null,null,-1),vl=(0,o._)("td",null,"Night Diff",-1),pl=(0,o._)("td",null,null,-1),yl=(0,o._)("td",null,"Gross Pay",-1),hl=(0,o._)("td",null,null,-1),ml=(0,o._)("td",null,"Total Taxable Gross",-1),fl=(0,o._)("td",null,null,-1),gl=(0,o._)("tr",{class:"table-header"},[(0,o._)("td",{colspan:"3"},"Deductions")],-1),bl=(0,o._)("td",null,"Witholding Tax",-1),_l=(0,o._)("td",null,null,-1),Wl=(0,o._)("td",null,"SSS Contribution",-1),wl=(0,o._)("td",null,null,-1),Cl=(0,o._)("td",null,"Philhealth Contribution",-1),Pl=(0,o._)("td",null,null,-1),xl=(0,o._)("td",null,"PAG-IBIG Contribution",-1),Tl=(0,o._)("td",null,null,-1),Nl=(0,o._)("tr",{class:"table-header"},[(0,o._)("td",{colspan:"3"},"Netpay")],-1),kl={class:"table-header",ref:"net-pay"},Dl={class:"net-pay",style:{"text-align":"center"},colspan:"3"};function Ml(l,a,e,t,i,n){return(0,o.wg)(),(0,o.iD)("table",ol,[il,(0,o._)("tr",null,[nl,(0,o._)("td",null,(0,v.zw)(n.toCurrency(i.thisSalary)),1),sl]),(0,o._)("tr",null,[rl,(0,o._)("td",null,(0,v.zw)(n.toCurrency(i.totalHoliday)),1),ul]),(0,o._)("tr",null,[dl,(0,o._)("td",null,(0,v.zw)(n.toCurrency(i.totalOvertime)),1),cl]),(0,o._)("tr",null,[vl,(0,o._)("td",null,(0,v.zw)(n.toCurrency(i.nightDiff)),1),pl]),(0,o._)("tr",null,[yl,(0,o._)("td",null,(0,v.zw)(n.toCurrency(i.totalGrossPay)),1),hl]),(0,o._)("tr",null,[ml,(0,o._)("td",null,(0,v.zw)(n.toCurrency(i.totalTaxableGross)),1),fl]),gl,(0,o._)("tr",null,[bl,_l,(0,o._)("td",null,"("+(0,v.zw)(n.toCurrency(i.withholdingTax))+")",1)]),(0,o._)("tr",null,[Wl,wl,(0,o._)("td",null,"("+(0,v.zw)(n.toCurrency(i.sssContribution))+")",1)]),(0,o._)("tr",null,[Cl,Pl,(0,o._)("td",null,"("+(0,v.zw)(n.toCurrency(i.phContribution))+")",1)]),(0,o._)("tr",null,[xl,Tl,(0,o._)("td",null,"("+(0,v.zw)(n.toCurrency(i.pagIbigContribution))+")",1)]),Nl,(0,o._)("tr",kl,[(0,o._)("td",Dl,(0,v.zw)(n.toCurrency(i.netPay)),1)],512)])}const Ol=[{from:0,to:4249.99,value:180},{from:4250,to:4749.99,value:202.5,valueWisp:0},{from:4750,to:5249.99,value:225,valueWisp:0},{from:5250,to:5749.99,value:247.5,valueWisp:0},{from:5750,to:6249.99,value:270,valueWisp:0},{from:6250,to:6749.99,value:292.5,valueWisp:0},{from:6750,to:7249.99,value:315,valueWisp:0},{from:7250,to:7749.99,value:337.5,valueWisp:0},{from:7750,to:8249.99,value:360,valueWisp:0},{from:8250,to:8749.99,value:382.5,valueWisp:0},{from:8750,to:9249.99,value:405,valueWisp:0},{from:9250,to:9749.99,value:427.5,valueWisp:0},{from:9750,to:10249.99,value:450,valueWisp:0},{from:10250,to:10749.99,value:472.5,valueWisp:0},{from:10750,to:11249.99,value:495,valueWisp:0},{from:11250,to:11749.99,value:517.5,valueWisp:0},{from:11750,to:12249.99,value:540,valueWisp:0},{from:12250,to:12749.99,value:562.5,valueWisp:0},{from:12750,to:13249.99,value:585,valueWisp:0},{from:13250,to:13749.99,value:607.5,valueWisp:0},{from:13750,to:14249.99,value:630,valueWisp:0},{from:14250,to:14749.99,value:652.5,valueWisp:0},{from:14750,to:15249.99,value:675,valueWisp:0},{from:15250,to:15749.99,value:697.5,valueWisp:0},{from:15750,to:16249.99,value:720,valueWisp:0},{from:16250,to:16749.99,value:742.5,valueWisp:0},{from:16750,to:17249.99,value:765,valueWisp:0},{from:17250,to:17749.99,value:787.5,valueWisp:0},{from:17750,to:18249.99,value:810,valueWisp:0},{from:18250,to:18749.99,value:832.5,valueWisp:0},{from:18750,to:19249.99,value:855,valueWisp:0},{from:19250,to:19749.99,value:855,valueWisp:0},{from:19750,to:20249.99,value:900,valueWisp:0},{from:20250,to:20749.99,value:900,valueWisp:22.5},{from:20750,to:21249.99,value:900,valueWisp:45},{from:21250,to:21749.99,value:900,valueWisp:67.5},{from:21750,to:22249.99,value:900,valueWisp:90},{from:22250,to:22749.99,value:900,valueWisp:112.5},{from:22750,to:23249.99,value:900,valueWisp:135},{from:23250,to:23749.99,value:900,valueWisp:157.5},{from:23750,to:24249.99,value:900,valueWisp:180},{from:24250,to:24749.99,value:900,valueWisp:202.5},{from:24750,to:25249.99,value:900,valueWisp:225},{from:25250,to:25749.99,value:900,valueWisp:247.5},{from:25750,to:26249.99,value:900,valueWisp:270},{from:26250,to:26749.99,value:900,valueWisp:292.5},{from:26750,to:27249.99,value:900,valueWisp:315},{from:27250,to:27749.99,value:900,valueWisp:337.5},{from:27750,to:28249.99,value:900,valueWisp:360},{from:28250,to:28749.99,value:900,valueWisp:382.5},{from:28750,to:29249.99,value:900,valueWisp:405},{from:29250,to:29749.99,value:900,valueWisp:427.5},{from:29750,to:99999999999999,value:900,valueWisp:450}];var Hl={props:["computed"],name:"ModalForm",data(){return{newComputed:this.computed,totalGrossPay:0,totalHoliday:0,totalTaxableGross:0,withholdingTax:0,sssTableContribution:Ol,sssContribution:0,phContribution:0,pagIbigContribution:0,netPay:0,nightDiff:0,totalOvertime:0,thisSalary:0}},methods:{recompute:function(l){let a=l.grossPay,e=l.allowance,t=l.holiday,o=l.overtime;this.computeTotalGrossPay(a,e,t,o,l.nightDiff)},computeTotalGrossPay:function(l,a,e,t,o){let i=this.computeDaily(l);this.thisSalary=this.computeBasicSalary(l);let n=this.computeRegularHoliday(l,e.regular),s=this.computeNonWorkingHoliday(l,e.specialNonWorking);this.totalHoliday=n+s;let r=this.computeOvertime(i,t.regular,1.25),u=this.computeOvertime(2*i,t.regularHoliday,1.3),d=this.computeOvertime(1.3*i,t.specialNonWorking,1.3);this.totalOvertime=r+u+d,this.nightDiff=this.computeNightDiff(i,o),this.totalGrossPay=this.thisSalary+(a.nonTaxable+a.taxable)+(n+s)+(r+u+d)+this.nightDiff,this.totalTaxableGross=this.thisSalary+a.taxable+(n+s)+(r+u+d)+this.nightDiff,this.withholdingTax=this.computeTax(this.totalTaxableGross,l.frequency,l),this.sssContribution=this.computeSSS(this.getMonthlyBasic(l)),this.phContribution=this.computePhilhealth(this.getMonthlyBasic(l)),this.pagIbigContribution=this.computePagIbig(this.getMonthlyBasic(l));let c=this.withholdingTax+this.sssContribution+this.phContribution+this.pagIbigContribution;this.netPay=this.totalTaxableGross-c+a.nonTaxable,this.$refs["net-pay"].scrollIntoView({behavior:"smooth"})},computeRegularHoliday(l,a){let e=this.computeDaily(l);return e*a},computeNonWorkingHoliday(l,a){let e=this.computeDaily(l);return.3*e*a},computeOvertime(l,a,e){let t=this.computeHourly(l);return t*e*a},getMonthlyBasic(l){return"MONTHLY"==l.frequency?l.salary:"SEMI-MONTHLY"==l.frequency?2*l.salary:l.dailyRate*l.days},computeBasicSalary(l){return"DAILY"==l.frequency?l.dailyRate*l.days:l.salary},computeDaily:function(l){return"MONTHLY"==l.frequency?12*l.salary/261:"SEMI-MONTHLY"==l.frequency?2*l.salary*12/261:l.dailyRate},computeHourly:function(l){return l/8},computeNightDiff(l,a){return.1*this.computeHourly(l)*a},computeTax(l,a,e){return"MONTHLY"==a?this.computeTaxMonthly(l):"SEMI-MONTHLY"==a?this.computeTaxSemiMonthly(l):this.computeTaxDaily(e.dailyRate,e.days)},computeTaxMonthly(l){return l<20833?0:l>=20834&&l<=33332?.15*(l-20833):l>=33333&&l<=66666?.2*(l-33333)+1875:l>=66667&&l<=166666?.25*(l-66667)+8541.8:l>=166667&&l<=666666?.3*(l-166667)+33541.8:l>=666667?.35*(l-666666)+183541.8:void 0},computeTaxSemiMonthly(l){return l<10417?0:l>=10417&&l<=16666?.15*(l-10417):l>=16667&&l<=33332?.2*(l-16667)+937.5:l>=33333&&l<=83332?.25*(l-33333)+4270.7:l>=83333&&l<=333332?.3*(l-83332)+16770.7:l>=333333?.35*(l-333333)+91770.7:void 0},computeTaxDaily(l,a){return l<685?0:l>=685&&l<=1095?.15*(l-685)*a:l>=1096&&l<=2912?(.2*(l-1096)+61.65)*a:l>=2192&&l<=5478?(.25*(l-2192)+280.85)*a:l>=5479&&l<=21917?(.3*(l-5479)+1102.6)*a:l>=21918?(.35*(l-21918)+6034.3)*a:void 0},computeSSS(l){let a=0;return this.sssTableContribution.some((e=>l>=e.from&&l<=e.to&&(a=e.value+e.valueWisp,!0))),a},computePhilhealth(l){return 1e4==l?400:l>1e4&&l<8e4?.04*l:l>=8e4?3200:0},computePagIbig(l){return l<=1500?.01*l:l>=1501&&l<=4999.99?.02*l:150},toCurrency(l){return(Math.round(100*l)/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")},reset(){this.totalGrossPay=0,this.totalTaxableGross=0,this.withholdingTax=0,this.sssContribution=0,this.phContribution=0,this.pagIbigContribution=0,this.netPay=0,this.nightDiff=0,this.totalOvertime=0,this.thisSalary=0}},watch:{computed:{immidiate:!0,handler(l){null!=l&&(this.reset(),this.recompute(l))}}}};const Sl=(0,al.Z)(Hl,[["render",Ml]]);var Vl=Sl,ql={name:"MainPage",props:{msg:String},data(){return{computed:null,modalComputed:null}},components:{MainForm:tl,ModalForm:Vl},methods:{onClick:function(l){this.computed=l}}};const Al=(0,al.Z)(ql,[["render",c]]);var Rl=Al,Il={name:"App",components:{MainPage:Rl}};const Gl=(0,al.Z)(Il,[["render",i]]);var Yl=Gl,Ul=(e(387),e(2962)),Ll=e.n(Ul);const zl=(0,t.ri)(Yl);zl.use(Ll()).mount("#app"),zl.config.globalProperties.$filters={currencyUSD(l){return"$"+l}}}},a={};function e(t){var o=a[t];if(void 0!==o)return o.exports;var i=a[t]={id:t,loaded:!1,exports:{}};return l[t].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.m=l,function(){var l=[];e.O=function(a,t,o,i){if(!t){var n=1/0;for(d=0;d<l.length;d++){t=l[d][0],o=l[d][1],i=l[d][2];for(var s=!0,r=0;r<t.length;r++)(!1&i||n>=i)&&Object.keys(e.O).every((function(l){return e.O[l](t[r])}))?t.splice(r--,1):(s=!1,i<n&&(n=i));if(s){l.splice(d--,1);var u=o();void 0!==u&&(a=u)}}return a}i=i||0;for(var d=l.length;d>0&&l[d-1][2]>i;d--)l[d]=l[d-1];l[d]=[t,o,i]}}(),function(){e.n=function(l){var a=l&&l.__esModule?function(){return l["default"]}:function(){return l};return e.d(a,{a:a}),a}}(),function(){e.d=function(l,a){for(var t in a)e.o(a,t)&&!e.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:a[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(l){if("object"===typeof window)return window}}()}(),function(){e.o=function(l,a){return Object.prototype.hasOwnProperty.call(l,a)}}(),function(){e.r=function(l){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})}}(),function(){e.nmd=function(l){return l.paths=[],l.children||(l.children=[]),l}}(),function(){var l={143:0};e.O.j=function(a){return 0===l[a]};var a=function(a,t){var o,i,n=t[0],s=t[1],r=t[2],u=0;if(n.some((function(a){return 0!==l[a]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(r)var d=r(e)}for(a&&a(t);u<n.length;u++)i=n[u],e.o(l,i)&&l[i]&&l[i][0](),l[i]=0;return e.O(d)},t=self["webpackChunksweldoph"]=self["webpackChunksweldoph"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(7451)}));t=e.O(t)})();
//# sourceMappingURL=app.0762b284.js.map