package com.example.demo.service;

import com.example.demo.data.Answer;
import com.example.demo.data.Question;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

public class QAServiceTest {

    private QAService qaService;

    @BeforeEach
    public void setUp() {
        qaService = new QAService(null);
    }

    @ParameterizedTest
    @CsvSource({"a?,1", "b?,2", "foo,3"})
    public void mapQuestionToDTO(String questionStrP, long questionIdP) {
        final var question = new Question();
        question.setId(questionIdP);
        question.setQuestionStr(questionStrP);
        final var answer = new Answer();
        answer.setWeight(1);
        answer.setAnswerStr("first answer");
        question.setAnswer(Arrays.asList(answer));

        final var questionDTO = qaService.mapToDTO(question);
        assertThat(questionIdP).isEqualTo(questionDTO.getQuestionId());
        assertThat(questionStrP).isEqualTo(questionDTO.getQuestion());
        final var answerDTOList = questionDTO.getAnswers();
        assertThat(answerDTOList).isNotNull();
        final var answerDTO = answerDTOList.get(0);
        assertThat(answerDTO).isNotNull();
        assertThat(1).isEqualTo(answerDTO.getScore());
        assertThat("first answer").isEqualTo(answerDTO.getAnswer());

    }
}
