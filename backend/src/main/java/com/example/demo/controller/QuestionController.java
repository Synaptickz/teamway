package com.example.demo.controller;

import com.example.demo.dto.QuestionDTO;
import com.example.demo.service.QAService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuestionController {

    private final QAService qaService;

    @GetMapping("/api/qa")
    List<QuestionDTO> getAllQuestionAnswer(@RequestParam(defaultValue = "5") Integer n) {
        return qaService.getQuestionsAndAnswers(n);
    }
}
