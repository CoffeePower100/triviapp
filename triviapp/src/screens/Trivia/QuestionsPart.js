import React, {useEffect, useCallback, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import Style from '../../utilis/AppStyle';




const QuestionsPart = ({navigation}) => {

  const [questionsArr, setQuestionsArr] = useState([])
  const [answersArr, setAnswersArr] = useState([]);
  const [isTriviaLoading, setIsTriviaLoading] = useState(true);


  // fetch questions and prepare api:

  const prepareQuestions = useCallback(() => {
  let i, j = 0;
  let currAnswersArr = [];
  /*{id: 1, questionText: "QUESTION number 1"}*/
  const url = "https://opentdb.com/api.php?amount=20&category=18";
  fetch(url, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
  .then(response => {
    response.json()
    .then(questionsData => {
    console.log(questionsData.results);
    const questionsRes = questionsData.results; 
    const createdQuestionsArr = [];
      for (i = 0; i < questionsRes.length; i++)
      {
          // create answers array:
          for (j = 0; j < questionsRes[i].incorrect_answers.length; j++)
          {
            // add incorrect answers:
            currAnswersArr.push({id : j, answerText: questionsRes[i].incorrect_answers[j]});
          }

          // add correct answer: 
          // (TODO - random index for correct answer)
          currAnswersArr.push({id: j, answerText: questionsRes[i].correct_answer});
          


          // add question with its text and created
          // answers array:
          createdQuestionsArr.push({questionText: questionsRes[i].question, answersArr: currAnswersArr});
      }
      setQuestionsArr(createdQuestionsArr);
      setAnswersArr((questionsArr.length) ? (questionsArr[0].answersArr) : ([{id: 0, answerText: "No questions found"}]));
      setIsTriviaLoading(false);
    })
  })
}, []);

  
  useEffect(() => { 
  }, [prepareQuestions])

  prepareQuestions();
  
  return(
    isTriviaLoading ? 
    (<View> 
      <Text>Loading...</Text>
    </View>) :
    (<View style={Style.container}>
            <FlatList
              data={answersArr}
              keyExtractor={item => item.id}
              renderItem={rowItem => 
              <TouchableOpacity style = {Style.answer_button}>
                <Text>{rowItem.item.answerText}</Text>
              </TouchableOpacity>}
            />
        </View>)
  )}


export default QuestionsPart;
