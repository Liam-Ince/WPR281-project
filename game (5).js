*{
    padding: 0;
    margin: 0;
    border-collapse: collapse;
    box-sizing: border-box;
    
  }

  body {
    font-family: 'Roboto', sans-serif; 
    background: white; 
    color: #333; 
    background-image: url('../Question 1/fitnessPicture.avif'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
}

  .home{
    display: grid;
    max-width: 100vw;
    max-height: 100vh;
    grid-template-columns: repeat(4,auto);
    grid-template-rows:  300px 300px 280px 60px;
    gap: 10px; 
    padding: 20px;
    overflow-x: hidden; 
    
    
    
}

.grid-item {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  background-color: rgb(198, 198, 198);
  padding: 15px;
  border-radius: 20px;
}

.grid-item:hover {
  transform: scale(1.05); 
}


.webname{
 display: inline;
 font-size: 40px;
}




header {
  max-width: 100vw;
  height: 90px;
  border-top-left-radius: 20px;
  background: rgba(0, 123, 255, 0.9); 
  padding: 15px 20px; 
  font-size: 20px; 
  font-weight: 500; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  position: relative; 
}




.nav-menu {
  display: flex; 
}

.nav-menu ul {
  display: flex; 
  gap: 16px; 
}

.nav-menu ul li {
  list-style: none; 
  font-size: 14px; 
  font-weight: 400; 
  cursor: pointer; 
  padding: 8px 12px; 
  color: white;
}

.nav-menu ul a {
  text-decoration: none; 
  color: white; 
}

.nav-menu ul li:hover {
  background: white; 
  color: black;
  border-radius: 4px; 
}

.nav-menu ul li:hover a {
  color: black; 
}




.nav-menu.active {
  display: block; 
}



.burger-menu {
  display: none;
  cursor: pointer;
  z-index: 1000;
}

.burger-icon {
  width: 30px;
  height: 20px;
  position: relative;
}

.burger-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger-icon span:nth-child(1) {
  top: 0px;
}

.burger-icon span:nth-child(2) {
  top: 8px;
}

.burger-icon span:nth-child(3) {
  top: 16px;
}


.burger-icon.active span:nth-child(1) {
  top: 8px;
  transform: rotate(45deg);
}

.burger-icon.active span:nth-child(2) {
  opacity: 0;
}

.burger-icon.active span:nth-child(3) {
  top: 8px;
  transform: rotate(-45deg);
}






#intro{

  grid-row: 1/2;
  grid-column: 1/5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  background-color: rgb(198, 198, 198);
  padding: 15px;
  border-radius: 20px;
}



.fa-fire-flame-curved{
  color: rgb(255, 115, 0);
  font-size: 150px;
  background-color: white;
  width: 153px;
  height: 180px;
  padding: 20px;
  border-radius: 150px;
  position: relative;
  top: 15px;
  left: 60px;

}

#greeting{
  font-size: 70px;
  width: 1000px;
  position: relative;
  left: 300px;
  bottom: 100px;
}

p{
  padding: 5px;
}

#introlvl{
  font-size: 35px;
  position: relative;
  bottom: 50px;
}

.pIntro{
  width: 150px;
  position: relative;
  left: 85px;
  bottom: 100px;
}

#XPlvl{
  grid-row: 2/3;
  grid-column: 1/2;
  font-size: 20px;
}

#xp{
  margin: auto;
  width: 200px;
  position: relative;
  right: 10px;
  top: 40px;
}

#eventform{
  grid-row: 2/3;
  grid-column: 2/3;
  text-align: center;
}


h4{
  text-align: center;
  font-size: 25px;
  margin-bottom: 10px;
}

form ol{
  margin-top: 10px;
  list-style: none;
  position: relative;
  
}

form li{
  position: relative;
  margin-bottom: 1em;
}

.width{
  
  background-color: rgb(192, 191, 191);
  border:0;
  border-bottom: 2px solid rgb(114, 113, 113);
}

.setEvent{
  padding: 1em;
  background: rgba(0, 123, 255, 0.9);
  color: white;
  border-radius: 10%;
  position: relative;
  border: 0;
}

#event-timer{
  grid-row: 2/3;
  grid-column: 3/5;
}

.fa-clock{
  display: inline;
  font-size: 150px;
}

#eventCont{
  position: relative;
  left: 200px;
  bottom: 150px;
}

#timer{
  font-size: 50px;
}

h3{
  font-size: 30px;
}




#Achievements{
  grid-row: 3/4;
  grid-column: 1/5;
}

#achv{
  position: relative;
  right: 555px;
  font-size: 25px;
}

.fa-trophy{
  color: goldenrod;
  font-size: 100px;
  padding: 10px;
  background-color: white;
  width: 130px;
  height: 130px;
  border-radius: 100px;
  margin-top: 10px;
}

#st{
  position: relative;
  left: 100px;
}

#cyc{
  position: relative;
  left: 160px;
}

#swim{
  position: relative;
  left: 300px;
}

#run{
  position: relative;
  left: 460px;
}



.workouts{
  display: inline;
  position: relative;
  top: 60px;
  right: 20px;
  

}

#stw{
  position: relative;
  right: 50px;
}

#cycw{
  position: relative;
  left: 40px;
}

#swimw{
  position: relative;
  left:175px;
}

#runw{
  position: relative;
  left:340px;
}




#footer{
  background: rgba(0, 123, 255, 0.9);
  grid-template-rows: 4/5;
  grid-column: 1/5;
  padding: 15px;
  text-align: center;
}



@media screen and (max-width: 768px) {
  
  .home {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    overflow-y: auto;
    grid-template-rows: auto;
    grid-template-columns: auto;
  }
  
  .grid-item {
    width: 100%;
    margin-bottom: 15px;
    transform: none !important; 
  }
  
  
  header {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
  
  .webname {
    font-size: 28px;
    margin-bottom: 10px;
    text-align: center;
  }
  
  
@media screen and (max-width: 768px) {
  .burger-menu {
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: rgba(0, 123, 255, 0.95);
    padding-top: 80px;
    transition: 0.4s;
    z-index: 999;
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .nav-menu ul li {
    width: 80%;
    text-align: center;
    padding: 12px;
    margin: 0;
  }
  
  
  header {
    position: relative;
    justify-content: center;
  }
  
  .webname {
    margin-right: 40px; 
  }
}
  
  
  #intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px 10px;
  }
  
  .fa-fire-flame-curved {
    font-size: 80px;
    width: 100px;
    height: 100px;
    padding: 10px;
    position: static;
    margin-bottom: 15px;
  }
  
  #greeting {
    font-size: 28px;
    width: 100%;
    position: static;
    margin-bottom: 10px;
  }
  
  #introlvl {
    font-size: 24px;
    position: static;
    margin-bottom: 10px;
  }
  
  .pIntro {
    width: 100%;
    position: static;
    margin-bottom: 5px;
    text-align: center;
  }
  
  
  #XPlvl {
    text-align: center;
  }
  
  #xp {
    position: static;
    width: 100%;
    margin: 0;
    padding: 10px 0;
  }
  
  
  #eventform {
    padding: 10px;
  }
  
  .width {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  
  #event-timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .fa-clock {
    font-size: 80px;
    margin-bottom: 10px;
  }
  
  #eventCont {
    position: static;
    width: 100%;
  }
  
  
  #Achievements {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  #achv {
    position: static;
    margin-bottom: 15px;
  }
  
  .fa-trophy {
    font-size: 60px;
    width: 80px;
    height: 80px;
    position: static;
    margin: 10px auto;
    padding: 10px;
    display: block;
  }
  
  
  #Achievements {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 15px;
  }
  
  #achv {
    grid-column: 1 / 3;
    width: 100%;
    text-align: center;
  }
  
  
  #st, #stw, #cyc, #cycw, #swim, #swimw, #run, #runw {
    position: static;
    margin: 0;
    justify-self: center;
  }
  
  #st, #cyc {
    grid-row: 2;
  }
  
  #stw, #cycw {
    grid-row: 3;
  }
  
  #swim, #run {
    grid-row: 4;
  }
  
  #swimw, #runw {
    grid-row: 5;
  }
  
  #st, #stw {
    grid-column: 1;
  }
  
  #cyc, #cycw {
    grid-column: 2;
  }
  
  #swim, #swimw {
    grid-column: 1;
  }
  
  #run, #runw {
    grid-column: 2;
  }
  
  .workouts {
    position: static;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 5px;
  }
  
  
  #footer {
    padding: 10px;
    font-size: 12px;
  }
}


@media screen and (max-width: 480px) {
  
@media screen and (max-width: 768px) {
  .burger-menu {
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: rgba(0, 123, 255, 0.95);
    padding-top: 80px;
    transition: 0.4s;
    z-index: 999;
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .nav-menu ul li {
    width: 80%;
    text-align: center;
    padding: 12px;
    margin: 0;
  }
  
  
  header {
    position: relative;
    justify-content: center;
  }
  
  .webname {
    margin-right: 40px; 
  }
}
  
  #greeting {
    font-size: 24px;
  }
  
  
  #Achievements {
    grid-template-columns: 1fr;
  }
  
  #achv {
    grid-column: 1;
  }
  
  #st, #stw, #cyc, #cycw, #swim, #swimw, #run, #runw {
    grid-column: 1;
  }
  
  #st { grid-row: 2; }
  #stw { grid-row: 3; }
  #cyc { grid-row: 4; }
  #cycw { grid-row: 5; }
  #swim { grid-row: 6; }
  #swimw { grid-row: 7; }
  #run { grid-row: 8; }
  #runw { grid-row: 9; }
}