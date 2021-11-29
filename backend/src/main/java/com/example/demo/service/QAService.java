package com.example.demo.service;

import com.example.demo.data.Question;
import com.example.demo.dto.AnswerDTO;
import com.example.demo.dto.QuestionDTO;
import com.example.demo.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QAService {

    private final QuestionRepository questionRepository;

    public List<QuestionDTO> getQuestionsAndAnswers(int count) {
        return questionRepository.findAll(PageRequest.of(0, count))
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    QuestionDTO mapToDTO(Question question) {
        var qDTO = new QuestionDTO();
        qDTO.setQuestion(question.getQuestionStr());
        qDTO.setQuestionId(question.getId());

        var answersDTOList = new ArrayList<AnswerDTO>();
        question.getAnswer().forEach(answer -> {
            var aDTO = new AnswerDTO();
            aDTO.setAnswer(answer.getAnswerStr());
            aDTO.setScore(answer.getWeight());
            answersDTOList.add(aDTO);
        });
        qDTO.setAnswers(answersDTOList);

        return qDTO;
    }
}
