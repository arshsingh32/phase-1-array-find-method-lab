function superbowlWin(array) {
 const footBall = array.find (game => game.result === "W")
//    if (footBall){
//     return footBall.year
//    } else {
//        return footBall
//    }

 return footBall ?  footBall.year : footBall

}
