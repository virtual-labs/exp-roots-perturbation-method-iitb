let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
		<div class='divide'>
   			<div style='margin-top: 2vw;'>
   				<h4 class="center-text fs-28px fb-600">Perturbation Method</h4>
				<br>
				<p>Objective: To find the root of equation using Perturbation Method</p>
				<br>
   				<button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
   			</div>
   		</div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    internal_calculation();
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
    	${btn_text}
    	<div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
        	<div id='act1-data-div'>
            	<div class="row justify-content-center " style="align-items:center;">
               		<div class="col-12 fs-18px fb-500"> 
						$$ x^2 + \\epsilon x - 1 = 0 $$ 
						$$ where \\ \\epsilon << 1 $$
					</div>
					<div class="col-12 fs-18px fb-500"> 
						<p style='font-size: 16px;'>Unperturbed <span style='display: inline-block;' >$$ (\\epsilon = 0)  $$</span></p>
						$$ x^2 - 1 = 0 $$
						$$ x_0 = \\pm 1 $$
					</div>
					<div class="col-12 fs-18px fb-500"> 
						<p style='font-size: 16px;'>For perturbation, assume, <span style='display: inline-block;' >$$ (\\epsilon = 0)  $$</span></p>
						$$ x = x_0 + \\epsilon x_1 $$
						<p style='font-size: 16px;'>Substituting into <span style='display: inline-block;' >$$ x^2 + \\epsilon x -1 = 0 $$</span> yields</p>
						$$ (\\pm 1 + \\epsilon x_1)^2 + \\epsilon(\\pm 1 + \\epsilon x_1) - 1 = 0 $$
						<p style='font-size: 16px;'>Neglecting higher order terms</p>
						<p style='font-size: 16px;'>Take <span style='display: inline-block;' >$$ \\epsilon = ${epsilon}  $$</span></p>
					</div>
					<div class="col-12" style="display:flex; justify-content:center;">
						<table>
							<tbody>
								<tr>
									<td> $$ x=1 - \\frac{\\epsilon}{2} + \\frac{\\epsilon^2}{8}$$ </td>
									<td> $$ = $$ </td>
									<td>
										<input type='text' style="margin:0 auto;" id='act1-inp1-inp' class='form-control fs-16px' />
										<span id='act1-val1-sp'></span>
									</td>
									<td></td>
									<td>
										<button class='btn btn-info btn-sm std-btn' onclick='act1_verify_inp1();' id='act1-vf-inp1'>Verify</button>
									</td>
								</tr>
								<tr id='disp-row' style="visibility:collapse">
									<td> $$ f(x)=x^2 + \\epsilon x -1 $$ </td>
									<td> $$ = $$ </td>
									<td>
										<span>${fx1.toFixed(8)}</span>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr id='val2-row' style="visibility:collapse">
									<td> $$ x=x-\\alpha f^{'}(x) $$ </td>
									<td> $$ = $$ </td>
									<td>
										<input type='text' style="margin:0 auto;" id='act1-inp2-inp' class='form-control fs-16px' />
									</td>
									<td></td>
									<td>
										<button class='btn btn-info btn-sm std-btn' onclick='act1_verify_inp2();' id='act1-vf-inp2'>Verify</button>
									</td>
								</tr>
								<tr id='disp2-row' style="visibility:collapse">
									<td> $$ f(x)=x^2 + \\epsilon x -1 $$ </td>
									<td> $$ = $$ </td>
									<td>
										<span>${fx2.toFixed(8)}</span>
									</td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-sm-12" style="display:flex; justify-content:center;">
						<button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn-5' onclick='exp_complete();' >Next</button>
					</div>
            	</div>
         	</div>
      	</div>
   	`;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation() {
    epsilon = parseFloat((Math.random() * 0.05 + 0.05).toFixed(2));
    x1 = 1 - (epsilon / 2) + (Math.pow(epsilon, 2) / 8);
    x2 = -1 - (epsilon / 2) - (Math.pow(epsilon, 2) / 8);
    console.log("x1= ", x1);
    console.log("x2= ", x2);
    fx1 = (Math.pow(x1, 2)) + (epsilon * x1) - 1;
    console.log("fx1= ", fx1.toFixed(8));
    fx2 = (Math.pow(x2, 2)) + (epsilon * x2) - 1;
    console.log("fx2= ", fx2.toFixed(8));
}
function act1_verify_inp1() {
    console.log("fx1new= ", fx1);
    let inp = (document.getElementById('act1-inp1-inp'));
    let sp = document.getElementById('act1-val1-sp');
    if (!verify_values(parseFloat(parseFloat(inp.value).toFixed(4)), parseFloat(x1.toFixed(4)))) {
        inp.style.border = '1px solid red';
        alert("Incorrect value of x2");
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
        inp.value = x1.toFixed(4);
    }
    let btn = (document.getElementById('act1-vf-inp1'));
    btn && btn.remove();
    let tr = (document.getElementById('disp-row'));
    tr.style.visibility = 'visible';
    let tr1 = (document.getElementById('val2-row'));
    tr1.style.visibility = 'visible';
}
function act1_verify_inp2() {
    let inp = (document.getElementById('act1-inp2-inp'));
    let sp = document.getElementById('act1-val2-sp');
    if (!verify_values(parseFloat(parseFloat(inp.value).toFixed(4)), parseFloat(x2.toFixed(4)))) {
        inp.style.border = '1px solid red';
        alert("Incorrect value of x2");
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
        inp.value = x2.toFixed(4);
    }
    let tr = (document.getElementById('disp2-row'));
    tr.style.visibility = 'visible';
    let btn = (document.getElementById('act1-vf-inp2'));
    btn && btn.remove();
    let btn1 = (document.getElementById('act1-btn-5'));
    btn1.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn-5'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map