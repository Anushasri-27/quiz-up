/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/start.css";
import { Button, MenuItem, TextField } from "@mui/material";
import banner from "../image/quiz-banner.jpg";
import Categories from "../data/Categories";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";




const QuizSetting = ({name ,setName ,fetchQuestion}) => {

  const history = useHistory();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  
 

  const handleSubmit = () =>{
    if(!category ||!difficulty || !name){
      setError(true);
      return;
    }else{
      setError(false);
      fetchQuestion(category,difficulty);
      history.push("/quiz");
    }
  };
  return (
    <div className="container">
      <div className="setting">
        <span className="quiz-setting-title">
          <h2>Quiz Setting</h2>
        </span>
        <div className="setting_select">
          {error && <ErrorMessage>Please Fill All The Fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 30 }}
            label="ENTER YOUR NAME"
            varient="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}

          />

          <TextField
            select
            style={{ marginBottom: 30 }}
            label="SELECT CATEGORY"
            varient="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="SELECT DIFFICULTY"
            varient="outlined"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="Medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="Hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>

      <img src={banner} className="banner" alt="quizimg" />
    </div>
  );
};

export default QuizSetting;
