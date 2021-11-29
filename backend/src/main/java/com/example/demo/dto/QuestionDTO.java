package com.example.demo.dto;

import lombok.Data;

import java.util.List;

@Data
public class QuestionDTO {

    private Long questionId;

    private String question;

    private List<AnswerDTO> answers;
}
