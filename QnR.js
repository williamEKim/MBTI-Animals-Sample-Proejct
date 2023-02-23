var q = {
    //When you're in a group, do you tend to be the one leading the conversation, or do you prefer to listen?
    1: {"title":"문제 1번", "explain":"모임에 있을때, 나는...", "type":"EI", "A":"대화를 주도한다", "B":"듣는 것을 선호한다"},
    //Do you feel energized by being around people, or do you prefer to be alone?
    2: {"title":"문제 2번", "explain":"사람들과 함께 있을때 나는...", "type":"EI", "A":"에너지를 얻는다", "B":"혼자 있는 걸 선호한다"},
    //Do you enjoy being the center of attention, or do you prefer to blend in with the crowd?
    3: {"title":"문제 3번", "explain":"많은 사람들과 함께할때 나는...", "type":"EI", "A":"모두의 주목을 즐긴다", "B":"사람들 사이에 섞이는게 좋다"},

    //Do you prefer to focus on the present and the concrete, or on possibilities for the future?
    4: {"title":"문제 4번", "explain":"나는...", "type":"SN", "A":"현실주의자다", "B":"몽상가다"},
    //Do you trust your instincts and gut feelings, or do you rely more on logic and reason?
    5: {"title":"문제 5번", "explain":"나는...", "type":"SN", "A":"나의 직관을 믿는다", "B":"이성과 논리를 믿는다"},
    //Are you more likely to notice details and facts, or patterns and connections?
    6: {"title":"문제 6번", "explain":"나는...", "type":"SN", "A":"사실과 디테일이 중요하다", "B":"패턴과 연관성이 중요하다"},

    //Do you make decisions based on what you think is logical, or what you feel is right?
    7: {"title":"문제 7번", "explain":"나는 결정을 내릴때...", "type":"TF", "A":"논리적인 것을 중요하게 생각한다", "B":"기분을 중요하게 생각한다"},
    //Are you more comfortable with objective analysis, or with subjective interpretation?
    8: {"title":"문제 8번", "explain":"나는...", "type":"TF", "A":"객관적인 분석을 선호한다", "B":"주관적인 해석을 선호한다"},
    //Do you tend to be more critical and analytical, or more empathetic and compassionate?
    9: {"title":"문제 9번", "explain":"나는 조금 더...", "type":"TF", "A":"비판적이고 분석적인 경향이 있다", "B":"감정적이고 공감적인 경향이 있다"},

    //Do you prefer to have things settled and decided, or do you prefer to keep your options open?
    10: {"title":"문제 10번", "explain":"나는 일을 할때...", "type":"JP", "A":"모든 것이 정해진 것이 좋다", "B":"여러가지 가능성이 열려있는 것이 좋다"},
    //Are you more organized and planned, or more spontaneous and adaptable?
    11: {"title":"문제 11번", "explain":"나는...", "type":"JP", "A":"체계적이고 계획적이다", "B":"즉흥적이고 융통성이 있다"},
    //Do you prefer to work according to a schedule or set of rules, or do you prefer to work as the mood strikes you?
    12: {"title":"문제 12번", "explain":"나는 일을 할때...", "type":"JP", "A":"정해진 일정이 있어야 한다", "B":"즉흥적으로 해야 한다"}
}

var result = {
    //Reference: https://blog.naver.com/finezoos/222053116606
    "ISTJ": {"animal":"코뿔소", "explain":"재빠르지만 또 신중한 당신! 코뿔소와 같은 강인함을 가졌네요!", "img":"./images/rhino.jpg"},
    "INTJ": {"animal":"호랑이", "explain":"호기심이 많고 용의주도한 당신! 호랑이가 어울리네요!", "img":"./images/tiger.jpg"},
    "INFJ": {"animal":"레서판다", "explain":"상대방의 심장에 치명적인 타격을 줄 수 있는 귀여움을 가진 당신! 랫서판다가 어울려용~", "img":"./images/panda.jpg"},
    "ISTP": {"animal":"곰", "explain":"무뚝뚝해 보이지만 반전매력인 귀여움을 구비한 당신! 곰과 같은 호기심쟁이가 아닐까요~?", "img":"./images/bear.jpg"},
    "INTP": {"animal":"부엉이", "explain":"사색에 잠기기를 즐기는 당신! 뛰어나고 지혜로운 몽상가의 기질이 돋보여요!", "img":"./images/owl.jpg"},
    "INFP": {"animal":"앵무새", "explain":"언어적 소질이 뛰어난 당신! 앵무새가 어울린다앵무!", "img":"./images/parrot.jpg"},
    "ISFJ": {"animal":"사슴", "explain":"조용하지만 사랑하는 사람에게는 엄청난 애정을 보여주는 당신! 사슴과 같은 따듯함과 순수함을 지녔네요!", "img":"./images/deer.jpg"},
    "ISFP": {"animal":"고양이", "explain":"호기심이 많아 탐험을 즐기는 당신! 혹시, 낭만적인 고양이가 아닐까요?", "img":"./images/cat.jpg"},
    "ENTJ": {"animal":"사자", "explain":"어흥! 카리스마와 자신감으로 무장한 당신! 훌륭한 리더의 기질이 돋보여요!", "img":"./images/lion.jpg"},
    "ENFJ": {"animal":"코끼리", "explain":"사이좋은 공동체를 만드는 것에 열심인 당신! 코끼리처럼 넒은 아량을 가졌네요!", "img":"./images/elephant.jpg"},
    "ESTJ": {"animal":"보더콜리", "explain":"질서를 중요하게 여기며 군중을 단결시키는 카리스마를 지닌 당신! 보더콜리와 같은 관리자의 재능이 돋보여요!", "img":"./images/dog.jpg"},
    "ESTP": {"animal":"공작새", "explain":"주변의 이목을 끄는 화려함을 지닌 당신! 공작새처럼 매력적이시네요!", "img":"./images/bird.jpg"},
    "ENTP": {"animal":"여우", "explain":"눈치가 빠르고 뛰어난 사고로 주변을 아군으로 만드는 당신! 여우와 같은 총명함과 교활함을 지녔네요!", "img":"./images/fox.jpg"},
    "ENFP": {"animal":"원숭이", "explain":"자유를 사랑하고 타인을 즐겁게 하는 것을 즐기는 당신! 원숭이가 어울리네요, 우끼!", "img":"./images/monkey.jpg"},
    "ESFJ": {"animal":"말", "explain":"주위 사람들과 잘 어울리는 인기쟁이 당신! 말과 같은 자유로움과 매력을 가졌네요!", "img":"./images/horse.jpg"},
    "ESFP": {"animal":"돌고래", "explain":"타고난 흥과 스타성을 지닌 당신! 돌고래처럼 자유로운 영혼을 가지고 계시네요!", "img":"./images/dolphin.jpg"}
};