class Interview{
    constructor(candidate){
        let __candidate__ = candidate;
        
        this.setCandidate = function(c){
            __candidate__ = c;
        }

        this.getCandidate = function(){
            return __candidate__;
        }
    }

    scheduleInterview(date){
        console.log(`An interview was scheduled with ${this.getCandidate().getFullName()} at ${date}`)
    }
}

class Candidate{
    constructor(fullName, email){
        let __fullName__ = fullName;
        let __email__ = email;

        this.setFullName = function(fN){
            __fullName__ = fN;
        }
        this.setEmail = function(e){
            __email__ = e;
        }
        this.getFullName = function(){
            return __fullName__;
        }
        this.getEmail = function(){
            return __email__;
        }
    }
}



class TechnecialInterview extends Interview{
    constructor(candidate,platform){
        super(candidate);
        let __platform__ = platform;

        this.setPlatform = function(p){
            __platform__ = p;
        }
    
        this.getPlatform = function(){
            return __platform__;
        }
    }

    scheduleInterview(date){
        super.scheduleInterview(date);
        console.log(`Interview platform ${this.getPlatform()} is configured`)
    }
}

class HRInterview extends Interview{
    constructor(candidate,questionnaire){
        super(candidate);
        let __questionnaire__ = questionnaire;

        this.setQuestionnaire = function(q){
            __questionnaire__ = q;
        }
    
        this.getQuestionnaire = function(){
            return __questionnaire__;
        }
    }  
    scheduleInterview(date){
        super.scheduleInterview(date);
        console.log(`Interview questionnaire ${this.getQuestionnaire()} will be sent to ${this.getCandidate().getEmail()}`);
    } 
}

const candidateOne = new Candidate("John Smith", "jonhn@gmail.com");
const candidateTwo = new Candidate("Alice Wonder", "alice@gmail.com");

const hrInt = new HRInterview(candidateOne,["Q1","Q2","Q3"]);
const techInt = new TechnecialInterview(candidateOne,"HackerRank");

hrInt.scheduleInterview("Jan. 1st");
techInt.scheduleInterview("Feb. 1st");

hrInt.setCandidate(candidateTwo);
techInt.setCandidate(candidateTwo);

hrInt.scheduleInterview("March 1st");
techInt.scheduleInterview("April 1st");