class Question{
    constructor(code, textQuestion,number, score)
    {
        this.code=code;
        this.textQuestion=textQuestion;
        this.textAnswer=null;
        this.number=number;
        this.score=score;
    }
    isAnswered() {
        if(this.textAnswer===null){
            return false;
        }
        else{
            return true;
        }
    }
    getScore(){
        if (isAnswered(this.textAnswer)) {
            return this.score;
        }
        return 0;
    }
}
let question1=  new Question(1111, "Give examples of three countries in Europe", 1, 34);
let question2=  new Question(2222, "On what continent is Cuba?", 2, 30);
let question3=  new Question(3333, "Which countries are around Germany?", 3, 36);

class Test{
    constructor(codeTest, arr, time)
    {
        this.codeTest=codeTest;
        this.arr=arr;
        this.name="";
        this.start=null;
        this.time=time;
    }
    startTest(name) {
        this.name=name;
        this.start=Date();
    }
    getOrderredQuestions(){
        for (let i = 1; i < this.arr.length; i++){
            let temp= this.arr[i];
            let j=i-1;
            while (j>=0 && this.arr[j].number>temp.number) {
                this.arr[j+1]=this.arr[j];
                j=j-1;
            }
            this.arr[j+1]=temp;
        }
        return this.arr;
    }
}
let test1= new Test(10000, [question2, question1, question3], 1);               
test1.getOrderredQuestions();
console.log(test1);






//המערך הוא this.questions
//המספר של העצם שנמצא במיקום הנוכחי במערך הוא this.questions[i].number
