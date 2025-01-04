module.exports = {
  path: '/tournament/bracket',
  code: `
  $send[200;other;<!DOCTYPE html>
  <html>
  
  <div id="tournament-bracket">
  <form autocomplete="off" aria-labelledby="tournament-label">
    <h1 id="tournament-label">16-Teams Tournament Bracket</h1> 

    <!-- Input Fields for Round 1-->
    <fieldset name="fieldset0">
    <fieldset name="fieldset1">
     <div> <legend>Round 1</legend> </div>

      <div class="round1">

        <!-- Repeat this block 16 times -->
        <div class="team">
          <label for="team1">Match 1</label>
          <input id="team1" type="text">   <label for="team2">       vs   </label> <input id="team2" type="text"> <label for="match1">       winner:   </label> <input id="match1" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team3">Match 2</label>
          <input id="team3" type="text">
          <label for="team4"> vs </label>
          <input id="team4" type="text"> <label for="match2">       winner:   </label> <input id="match2" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team5">Match 3</label>
          <input id="team5" type="text">
          <label for="team6">  vs </label>
          <input id="team6" type="text"> <label for="match3">       winner:   </label> <input id="match3" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team7">Match 4</label>
          <input id="team7" type="text">
          <label for="team8"> vs </label>
          <input id="team8" type="text"> <label for="match4">       winner:   </label> <input id="match4" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team9">Match 5</label>
          <input id="team9" type="text">
          <label for="team10">  vs </label>
          <input id="team10" type="text"> <label for="match5">       winner:   </label> <input id="match5" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team11">Match 6</label>
          <input id="team11" type="text">
         <label for="team12">  vs </label>
          <input id="team12" type="text"> <label for="match6">       winner:   </label> <input id="match6" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team13">Match 7</label>
          <input id="team13" type="text">
          <label for="team14">  vs </label>
          <input id="team14" type="text"> <label for="match7">       winner:   </label> <input id="match7" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team15">Match 8</label>
          <input id="team15" type="text">
          <label for="team16">  vs </label>
          <input id="team16" type="text"> <label for="match8">       winner:   </label> <input id="match8" type="text">
        </div> 
        <!-- Block End -->

      </div>
    
    <br>
      
    <!--Tournament Tree structure (to be filled when the Round 1 is over)-->
    <fieldset name="fieldset5">
      <legend>Round 2</legend>
      <div class="round2">
      
        <div class="team">
          <label for="team1">Match 1</label>
          <input id="team1" type="text">   <label for="team2">       vs   </label> <input id="team2" type="text"> <label for="match1">       winner:   </label> <input id="match1" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team3">Match 2</label>
          <input id="team3" type="text">
          <label for="team4"> vs </label>
          <input id="team4" type="text"> <label for="match2">       winner:   </label> <input id="match2" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team5">Match 3</label>
          <input id="team5" type="text">
          <label for="team6">  vs </label>
          <input id="team6" type="text"> <label for="match3">       winner:   </label> <input id="match3" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team7">Match 4</label>
          <input id="team7" type="text">
          <label for="team8"> vs </label>
          <input id="team8" type="text"> <label for="match4">       winner:   </label> <input id="match4" type="text">
        </div> 
      </div>
    
<br>
    
    <fieldset name="fieldset3">
      <legend>Semifinals</legend>
      <div class="semifinals">

        <div class="team">
          <label for="team1">Semifinal 1</label>
          <input id="team1" type="text">   <label for="team2">       vs   </label> <input id="team2" type="text"> <label for="match1">       winner:   </label> <input id="match1" type="text">
        </div> 
        <br>
        <div class="team">
          <label for="team3">Semifinal 2</label>
          <input id="team3" type="text">
          <label for="team4"> vs </label>
          <input id="team4" type="text"> <label for="match2">       winner:   </label> <input id="match2" type="text">
        </div> 
      </div>
<br>


    <fieldset name="fieldset4">
      <legend>Finals</legend>
      <div class="finals">
            <div class="team">
          <label for="team1">Final Match</label>
          <input id="team1" type="text">   <label for="team2">       vs   </label> <input id="team2" type="text"> 
          <br>
          <label for="match1">       Chanpion:   </label> <input id="match1" type="text">
        </div> 
      </div>
      
    </fieldset>
      </fieldset>
    </fieldset>
     </fieldset>
      </fieldset>
      </fieldset>
  </form>
</div>
<style>

fieldset[name="fieldset0"] {
  background:black
}
fieldset[name="fieldset1"] {
  background:beige
}
fieldset[name="fieldset02"] {
  background:#1700fb
}
fieldset[name="fieldset5"] {
  background:#a97142
}
fieldset[name="fieldset3"] {
  background:#aaa9ad
}
fieldset[name="fieldset4"] {
  background:gold
}
.legend {
 top: 0; left: -1.5em;
  width: 0.5em;
  text-align: right;
  word-wrap: break-word;
  line-height: 1;
  text-transform: uppercase;
}

input {
  margin: 5px;
}
</style>

</hmtl>]
`
}