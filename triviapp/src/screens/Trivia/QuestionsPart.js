import React, {useEffect,useCallback, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import Style from '../../utilis/AppStyle';


// fetch questions from api:

/*
const prepare_questions =  () => {
  let i, j = 0;
  let currAnswersArr = [];
      questionsData => {
      console.log(JSON.stringify(questionsData));
      console.log("getched");
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
          currAnswersArr.push({id: j, answerText: questionsRes[i].correctAnswers});
          


          // add question with its text and created
          // answers array:
          createdQuestionsArr.push({questionText: questionsRes[i].question, answersArr: currAnswersArr});
      }
      console.log(createdQuestionsArr);
      console.log(createdQuestionsArr[0]);
      setQuestionsArr(createdQuestionsArr);
      setAnswersArr((questionsArr.length) ? (questionsArr[0].answersArr) : ([{id: 0, answerText: "No questions found"}]));
    }
  }*/

const QuestionsPart = ({navigation}) => {
  const [questionsArr, setQuestionsArr] = useState([])
  const [answersArr, setAnswersArr] = useState([]);
  /*{id: 1, questionText: "QUESTION number 1"}*/
  
  const fetchQuestions = async() => {
    const url = "https://opentdb.com/api.php?amount=20&category=18";
    const response = await fetch(url, {
        method: 'get',
        headers: {
          "Content-Type": "application/json"
        }
    })
    
  setQuestionsArr(await response.json());
  }

  fetchQuestions();

  return(
        <View style={Style.container}>
            <Text>{questionsArr}</Text>
            <FlatList
              data={answersArr}
              keyExtractor={item => item.id}
              renderItem={rowItem => <Text>{rowItem.item.answerText}</Text>}
            />
        </View>
    )
}


export default QuestionsPart;