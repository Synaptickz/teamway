package com.example.demo;

import com.example.demo.repository.QuestionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class QuestionRepositoryTest {

    @Autowired
    private QuestionRepository questionRepository;

    @Test
    public void findAllEntities() {
        final var searchResult = questionRepository.findAll();
        assertThat(searchResult).isNotNull();
        assertThat(searchResult.size()).isEqualTo(5);
    }
}
