class electricScooter{
    constructor(fullycharged,broken,remainingRange){

        this.fullycharged = fullycharged
        this.broken = broken
        this.remainingRange = remainingRange
    }

    isFullyCharged(){
        if (this.remainingRange== 35)
        return true

        else {
            return "Scooter is not fully charged please select other"
        }
    }

    isBroken(){
        if (this.broken==true)
        return "Mark as broken"

        else {
            return "Scooter is not broken"
        }
    }



}
let s1 = new electricScooter(true,false,35);
console.log(s1.isFullyCharged())