var random = Math.random();
var hp = 100;
var start = 100;
var hp_message = document.createElement('h5');
hp_message.style.color = 'white';
var start_message = document.createElement('h5');
start_message.style.color = 'white';
var button = document.createElement('button');
button.style.display = 'none';
var h1 = document.createElement('h1');
// input_btn.style.display = 'none';
var start_message_2 = document.createElement('h5');
start_message_2.style.color = 'white';



$('#btn').click(function(){
	start_message.textContent = `あなたのスタミナ${start}`;
	hp_message.textContent = `あなたのHP${hp}`;
	$('#btn').fadeOut('slow');
	$('body').css('background','black');
	$('#btn2').fadeIn('slow');
	$('.btn3').fadeIn('slow');
	$('.center').fadeIn('slow');
	$('.white').text('オレンジが現れた！');

});

$('#btn2').click(function(){
	var div = document.createElement('div');
	div.style.color = 'white';
	div.classList.add('text_box');
	$('.center').css('background','red').fadeIn('slow');
	$('.white').text('オレンジを攻撃した！');
	setTimeout(
		function(){
			$('.center').css('background','orange');
		},200);

	setTimeout(
		function(){
			$('div').css('background','orange');
			$('.white').text('まさかのオレンジが大きくなった！');
		}
		,1000);

	setTimeout(
		function(){
			$('.white').text('オレンジの攻撃！');
		},1900);
	setTimeout(
		function(){
			for(var i = 0; i<100; i++){
				start--;
			}
			start_message.textContent = `あなたのスタミナ${start}`;
			$('.white').text(`あなたは必死に回避したが、スタミナが${start}になってしまった！`);
			if(start <= 0){
				$('.white').text(`あなたは最後の抵抗をする....`);
				$('#btn2').click(function(){
					$('.white').css('display','none');
					$('.white2').css('display','flex');
					$('.white2').text('オレンジ「君はもう何もできない！スタミナが！なくなったぜ？」');
					start_message.style.display = 'none';
					hp_message.style.display = 'none';
					hp_message.style.display = 'flex';
					hp_message.textContent = 'あなたのHP100';

				});
				$('div').click(function(){
					$('.white2').css('display','flex');
					$('.white2').text('オレンジ「おい。元気か？　君は負けそうだねぇ。　私を倒すには.. いややめてくださいお願いします」');
					$('#text').fadeIn('slow');
					$('#btn4').fadeIn('slow');
					$('#btn4').css('display','flex');
				$('#btn4').click(function(){
		$('.white2').text('オレンジ「ぐえぇっぇぇ....おまえ、、そのぼたんどこで。。？」');
		setTimeout(
			function(){
				$('body').fadeOut('slow');
			},1000);
	});
				});
			}
		},3000);


	document.body.appendChild(div);
});

$('.btn3').click(function(){
	$('.white2').fadeOut('slow');
	$('#text').fadeOut('slow');
	$('.white').text('あなたは逃げきった...');
	$('.btn3').fadeOut('slow');
	$('#btn2').fadeOut('slow');
	$('div').fadeOut('slow');
	setTimeout(function(){

		$('h1').text('たたかえ..おぬしは勇者であろう..').css('color','white');
		var button = document.createElement('button');
		button.textContent = '最初から';
		button.addEventListener('click',function(){
			location.reload();
		});
		document.body.appendChild(button);

	},1000);
});
document.body.appendChild(start_message_2)
document.body.appendChild(h1);
document.body.appendChild(hp_message);
document.body.appendChild(button);
document.body.appendChild(start_message);
