# Fighting-Game

Game Base Requirements
- There are 4 characters
- Each characters has 
    Health Point (HP)
    Attack Power (AP)
    Counter Attack Power (CAP)
- Each character has a different assigned HP...just one assigned HP
- Each charactor has AP that will increase in an increment when used...even with with a new defender
- Each charactor has CAP that will not increase when used...static number


User 
- User sees all 4 and each of their HP
- user is able to pick one charecter to be self (or SF)
- self character is moved to self area
- there are three left for user to pick
- user is required to pick a defender 
- user is able to pick a defender
- picked defender is moved to picked defender area (picked defender or PD)
- there are two character left
- user can now starting to attack the PD
- when user clicks attack, HP of SC and PD both change 

---------------------------------------------------------------
SAMPLE
            cat                 dog             fish        zebra
HP          100                 120             200         100
AP          20                   10              2          90
CAP         15                   25              50         2
-------------
Round One
SF = Cat
PD = Dog
            cat                            dog
Attack 1:   100-25 (CAP of dog) = 75       120-20(AP of cat)=100
Attack 2:   75-25=50                       100-40 (AP of cat *2)=60
Attack 3:   50-25 = 25                     60-60 (Ap of cat *3)= 0

CAT Won Round 1

------------------
Round Two Scenario One (Ther is only fish, no zebra)
            Cat                             Fish
Attack 1:   25-50 (CAP of fish) = -25       200 - 80 (AP of cat *4) = 120

GAME OVER : Team Defender Won
-------------------------
Round Two Scenario Two (there is only zebra, no fish)
            Cat                             Zebra
Attack 1:   25-2 (CAP of zebra) = 23        100-80 (AP of cat* 4) = 20
Attack 2:   23-2                            20-100 (AP of cat*5) = -80

GAME OVER : CAT WINS!
----------------------------------------------------------------


Logic of "Attack"
- when attack is clicked, 
    HP of SF - CAP of PD  = HPSF1       &&       HP of PD - APSF*1 = HPPD1
    HPSF1 - CAP of PD  = HPSF2          &&       HPPD1 - APSF*2    = HPPD2
    HPSF2 - CAP of PD  = HPSF3          &&       HPPD2 - APSF*2    = HPPD3



Game Progression to Winning or Losing Scenarios
- if HP of PD becomes zero or less, PD loses; meaning PD will disappear from the screen and user can pick a new PD and restart the process 
- User cannot click attack if there is no PD selected


Winning/Losing Scenarios
- if HP of SF becomes zero or less, when there are still PD left, user losses the game
- if HP of all PD becomes zero or less, when there is stil HP left in SF, user wins the game
- if user won game 1, there is a store of 1 recorded to winning score
- if user loses game 1, no score is recorded

Game Reset
- after the first game is over, user is able to start playing again
- if user won game 1, there is a store of 1 recorded and anywinning frome game 2, 3, 4 will add to user's winning scores
