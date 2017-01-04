		
			
			var silverTouche0 = document.getElementById("TouchesBlanchesConteneur0");
			var silverTouche1 = document.getElementById("TouchesBlanchesConteneur1");
			var silverTouche2 = document.getElementById("TouchesBlanchesConteneur2");
			var silverTouche3 = document.getElementById("TouchesBlanchesConteneur3");
			var silverTouche4 = document.getElementById("TouchesBlanchesConteneur4");
			var silverTouche5 = document.getElementById("TouchesBlanchesConteneur5");
			var silverTouche6 = document.getElementById("TouchesBlanchesConteneur6");
			
			function play00(){
				if (audio00.paused) {audio00.play();}else{audio00.currentTime = 0;}
			}
			function play00x(){
				if (audio00x.paused) {audio00x.play();}else{audio00x.currentTime = 0;}
			}
			function play01(){
				if (audio01.paused) {audio01.play();}else{audio01.currentTime = 0;}
			}
			function play0(){
				if (audio0.paused) {audio0.play();}else{audio0.currentTime = 0;}
			}
			function play0x(){
				if (audio0x.paused) {audio0x.play();}else{audio0x.currentTime = 0;}
			}
			function play1(){
				if (audio1.paused) {audio1.play();}else{audio1.currentTime = 0;}
			}
			function play1x(){
				if (audio1x.paused) {audio1x.play();}else{audio1x.currentTime = 0;}
			}
			function play2(){
				if (audio2.paused) {audio2.play();}else{audio2.currentTime = 0;}
			}
			function play2x(){
				if (audio2x.paused) {audio2x.play();}else{audio2x.currentTime = 0;}
			}
			function play3(){
				if (audio3.paused) {audio3.play();}else{audio3.currentTime = 0;}
			}
			function play3x(){
				if (audio3x.paused) {audio3x.play();}else{audio3x.currentTime = 0;}
			}
			function play4(){
				if (audio4.paused) {audio4.play();}else{audio4.currentTime = 0;}
			}
			function play4x(){
				if (audio4x.paused) {audio4x.play();}else{audio4x.currentTime = 0;}
			}
			function play5(){
				if (audio5.paused) {audio5.play();}else{audio5.currentTime = 0;}
			}
			function play6(){
				if (audio6.paused) {audio6.play();}else{audio6.currentTime = 0;}
			}
			
			//--------------------------------------------
			function play7(){
				if (audio7.paused) {audio7.play();}else{audio7.currentTime = 0;}
			}
			function play8(){
				if (audio8.paused) {audio8.play();}else{audio8.currentTime = 0;}
			}
			function play5x(){
				if (audio5x.paused) {audio5x.play();}else{audio5x.currentTime = 0;}
			}
			function play9(){
				if (audio9.paused) {audio9.play();}else{audio9.currentTime = 0;}
			}
			function play6x(){
				if (audio6x.paused) {audio6x.play();}else{audio6x.currentTime = 0;}
			}
			function play10(){
				if (audio10.paused) {audio10.play();}else{audio10.currentTime = 0;}
			}
			function play7x(){
				if (audio7x.paused) {audio7x.play();}else{audio7x.currentTime = 0;}
			}
			function play11(){
				if (audio11.paused) {audio11.play();}else{audio11.currentTime = 0;}
			}
			function play8x(){
				if (audio8x.paused) {audio8x.play();}else{audio8x.currentTime = 0;}
			}
			function play12(){
				if (audio12.paused) {audio12.play();}else{audio12.currentTime = 0;}
				}function play9x(){
				if (audio9x.paused) {audio9x.play();}else{audio9x.currentTime = 0;}
				}function play13(){
				if (audio13.paused) {audio13.play();}else{audio13.currentTime = 0;}
			}
			//--------------------------------------------
			function play14(){
				if (audio14.paused) {audio14.play();}else{audio14.currentTime = 0;}
			}
			function play15(){
				if (audio15.paused) {audio15.play();}else{audio15.currentTime = 0;}
			}
			function play10x(){
				if (audio10x.paused) {audio10x.play();}else{audio10x.currentTime = 0;}
			}
			function play16(){
				if (audio16.paused) {audio16.play();}else{audio16.currentTime = 0;}
			}
			function play11x(){
				if (audio11x.paused) {audio11x.play();}else{audio11x.currentTime = 0;}
			}
			function play17(){
				if (audio17.paused) {audio17.play();}else{audio17.currentTime = 0;}
			}
			function play12x(){
				if (audio12x.paused) {audio12x.play();}else{audio12x.currentTime = 0;}
			}
			function play18(){
				if (audio18.paused) {audio18.play();}else{audio18.currentTime = 0;}
			}
			function play13x(){
				if (audio13x.paused) {audio13x.play();}else{audio13x.currentTime = 0;}
			}
			function play19(){
				if (audio19.paused) {audio19.play();}else{audio19.currentTime = 0;}
				}function play14x(){
				if (audio14x.paused) {audio14x.play();}else{audio14x.currentTime = 0;}
				}function play20(){
				if (audio20.paused) {audio20.play();}else{audio20.currentTime = 0;}
			}
			var down = {};
			
			$(document).keydown(function(event){
				var keycode = (event.keyCode ? event.keyCode : event.which);
				if(keycode == '90'){// z
					if (down['90'] == null) { // first press
						if(currentPiano == 0){play00x();}
						else if(currentPiano == 1){play5x();}
						else if(currentPiano == 2){play10x();}
						down['90'] = true; // record that the key's down
					}
				}
				if(keycode == '69'){// e
					if (down['69'] == null) { // first press
						if(currentPiano == 0){play0x();}
						else if(currentPiano == 1){play6x();}
						else if(currentPiano == 2){play11x();}
						down['69'] = true; // record that the key's down
					}
				}
				if(keycode == '84'){// t
					if (down['84'] == null) { // first press
						if(currentPiano == 0){play1x();}
						else if(currentPiano == 1){play7x();}
						else if(currentPiano == 2){play12x();}
						down['84'] = true; // record that the key's down
					}
				}
				if(keycode == '89'){// y
					if (down['89'] == null) { // first press
						if(currentPiano == 0){play2x();}
						else if(currentPiano == 1){play8x();}
						else if(currentPiano == 2){play13x();}
						down['89'] = true; // record that the key's down
					}
				}
				if(keycode == '85'){// u
					if (down['85'] == null) { // first press
						if(currentPiano == 0){play3x();}
						else if(currentPiano == 1){play9x();}
						else if(currentPiano == 2){play14x();}
						down['85'] = true; // record that the key's down
					}
				}
				if(keycode == '81'){// q
					if (down['81'] == null) { // first press
						if(currentPiano == 0){play00();}
						else if(currentPiano == 1){play7();}
						else if(currentPiano == 2){play14();}
						down['81'] = true; // record that the key's down
					}
				}
				if(keycode == '83'){// s
					if (down['83'] == null) { // first press
						if(currentPiano == 0){play01();}
						else if(currentPiano == 1){play8();}
						else if(currentPiano == 2){play15();}
						down['83'] = true; // record that the key's down
					}
				}
				if(keycode == '68'){// d
					if (down['68'] == null) { // first press
						if(currentPiano == 0){play0();}
						else if(currentPiano == 1){play9();}
						else if(currentPiano == 2){play16();}
						down['68'] = true; // record that the key's down
					}
				}
				if(keycode == '70'){// f
					if (down['70'] == null) { // first press
						if(currentPiano == 0){play1();}
						else if(currentPiano == 1){play10();}
						else if(currentPiano == 2){play17();}
						down['70'] = true;// record that the key's down
					}
				}
				if(keycode == '71'){// g
					if (down['71'] == null) { // first press
						if(currentPiano == 0){play2();}
						else if(currentPiano == 1){play11();}
						else if(currentPiano == 2){play18();}
						down['71'] = true;// record that the key's down
					}
				}
				if(keycode == '72'){// h
					if (down['72'] == null) { // first press
						if(currentPiano == 0){play3();}
						else if(currentPiano == 1){play12();}
						else if(currentPiano == 2){play19();}
						down['72'] = true; // record that the key's down
					}
				}
				if(keycode == '74'){// j
					if (down['74'] == null) { // first press
						if(currentPiano == 0){play4();}
						else if(currentPiano == 1){play13();}
						else if(currentPiano == 2){play20();}
						down['74'] = true; // record that the key's down
					}
					}
					if(keycode == '75'){// k
					if (down['75'] == null) { // first press
					//play5();down['75'] = true; // record that the key's down
					}
					}
					if(keycode == '76'){// l
					if (down['76'] == null) { // first press
					//play6();down['76'] = true; // record that the key's down
					}
					}
					if(keycode == '77'){// m
					if (down['77'] == null) { // first press
					//play7();down['77'] = true; // record that the key's down
					}
					}
					
					});
					
					$(document).keyup(function(event) {
					var keycode = (event.keyCode ? event.keyCode : event.which);
					down[keycode] = null;
					
					});
					