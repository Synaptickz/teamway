INSERT INTO question (id, question_str) VALUES (1, 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:');
INSERT INTO answer (id, answer_str, weight) VALUES (1, 'Don’t dare to interrupt them', -2);
INSERT INTO answer (id, answer_str, weight) VALUES (2, 'Think it’s more important to give them some of your time; work can wait', -1);
INSERT INTO answer (id, answer_str, weight) VALUES (3, 'Listen, but with only with half an ear', 1);
INSERT INTO answer (id, answer_str, weight) VALUES (4, 'Interrupt and explain that you are really busy at the moment', 2);
INSERT INTO question_answer (question_id, answer_id) VALUES (1, 1);
INSERT INTO question_answer (question_id, answer_id) VALUES (1, 2);
INSERT INTO question_answer (question_id, answer_id) VALUES (1, 3);
INSERT INTO question_answer (question_id, answer_id) VALUES (1, 4);

INSERT INTO question (id, question_str) VALUES (2, 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:');
INSERT INTO answer (id, answer_str, weight) VALUES (5, 'Look at your watch every two minutes', -1);
INSERT INTO answer (id, answer_str, weight) VALUES (6, 'Bubble with inner anger, but keep quiet', -2);
INSERT INTO answer (id, answer_str, weight) VALUES (7, 'Explain to other equally impatient people in the room that the doctor is always running late', 1);
INSERT INTO answer (id, answer_str, weight) VALUES (8, 'Complain in a loud voice, while tapping your foot impatiently', 2);
INSERT INTO question_answer (question_id, answer_id) VALUES (2, 5);
INSERT INTO question_answer (question_id, answer_id) VALUES (2, 6);
INSERT INTO question_answer (question_id, answer_id) VALUES (2, 7);
INSERT INTO question_answer (question_id, answer_id) VALUES (2, 8);

INSERT INTO question (id, question_str) VALUES (3, 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:');
INSERT INTO answer (id, answer_str, weight) VALUES (9, 'Don’t dare contradict them', -2);
INSERT INTO answer (id, answer_str, weight) VALUES (10, 'Think that they are obviously right', -1);
INSERT INTO answer (id, answer_str, weight) VALUES (11, 'Defend your own point of view, tooth and nail', 1);
INSERT INTO answer (id, answer_str, weight) VALUES (12, 'Continuously interrupt your colleague', 2);
INSERT INTO question_answer (question_id, answer_id) VALUES (3, 9);
INSERT INTO question_answer (question_id, answer_id) VALUES (3, 10);
INSERT INTO question_answer (question_id, answer_id) VALUES (3, 11);
INSERT INTO question_answer (question_id, answer_id) VALUES (3, 12);

INSERT INTO question (id, question_str) VALUES (4, 'You are taking part in a guided tour of a museum. You:');
INSERT INTO answer (id, answer_str, weight) VALUES (13, 'Are a bit too far towards the back so don’t really hear what the guide is saying', -2);
INSERT INTO answer (id, answer_str, weight) VALUES (14, 'Follow the group without question', -1);
INSERT INTO answer (id, answer_str, weight) VALUES (15, 'Make sure that everyone is able to hear properly', 1);
INSERT INTO answer (id, answer_str, weight) VALUES (16, 'Are right up the front, adding your own comments in a loud voice', 2);
INSERT INTO question_answer (question_id, answer_id) VALUES (4, 13);
INSERT INTO question_answer (question_id, answer_id) VALUES (4, 14);
INSERT INTO question_answer (question_id, answer_id) VALUES (4, 15);
INSERT INTO question_answer (question_id, answer_id) VALUES (4, 16);

INSERT INTO question (id, question_str) VALUES (5, 'During dinner parties at your home, you have a hard time with people who:');
INSERT INTO answer (id, answer_str, weight) VALUES (17, 'Ask you to tell a story in front of everyone else', -2);
INSERT INTO answer (id, answer_str, weight) VALUES (18, 'Talk privately between themselves', -1);
INSERT INTO answer (id, answer_str, weight) VALUES (19, 'Hang around you all evening', 1);
INSERT INTO answer (id, answer_str, weight) VALUES (20, 'Always drag the conversation back to themselves', 2);
INSERT INTO question_answer (question_id, answer_id) VALUES (5, 17);
INSERT INTO question_answer (question_id, answer_id) VALUES (5, 18);
INSERT INTO question_answer (question_id, answer_id) VALUES (5, 19);
INSERT INTO question_answer (question_id, answer_id) VALUES (5, 20);