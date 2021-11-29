import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { QuestionAnswer } from './models/qa.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QaService } from './qa.service';

describe('QaService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: QaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ QaService ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(QaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getQA', () => {
    let expectedQaArr: QuestionAnswer[];

    beforeEach(() => {
      service = TestBed.inject(QaService);
      expectedQaArr = [
        {
          question: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
          questionId: 1,
          answers: [
            {
              answer: 'Don’t dare to interrupt them',
              score: 1
            },
            {
              answer: 'Think it’s more important to give them some of your time; work can wait',
              score: 2
            },
            {
              answer: 'Listen, but with only with half an ear',
              score: 3
            },
            {
              answer: 'Interrupt and explain that you are really busy at the moment',
              score: 4
            },
          ],
        },
        {
          question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
          questionId: 2,
          answers: [
            {
              answer: 'Look at your watch every two minutes',
              score: 1
            },
            {
              answer: 'Bubble with inner anger, but keep quiet',
              score: 2
            },
            {
              answer: 'Explain to other equally impatient people in the room that the doctor is always running late',
              score: 3
            },
            {
              answer: 'Complain in a loud voice, while tapping your foot impatiently',
              score: 4
            },
          ],
        }
      ];
    });

    it('should return expected qa (called once)', () => {
      service.getQA().subscribe(
        qaArr => expect(qaArr).withContext('should return expected qa').toEqual(expectedQaArr),
        fail
      );

      const req = httpTestingController.expectOne(service.baseURL);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedQaArr);
    });

    it('should be OK returning no qa', () => {
      service.getQA().subscribe(
        qaArr => expect(qaArr.length).withContext('should have empty qa array').toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(service.baseURL);
      req.flush([]); // Respond with no results
    });

    it('should return expected qa (called multiple times)', () => {
      service.getQA().subscribe();
      service.getQA().subscribe();
      service.getQA().subscribe(
        qaArr => expect(qaArr).withContext('should return expected qa').toEqual(expectedQaArr),
        fail
      );

      const requests = httpTestingController.match(service.baseURL);
      expect(requests.length).withContext('calls to getQA()').toEqual(3);

      // Respond to each request with different results
      requests[0].flush([]);
      requests[1].flush(expectedQaArr.slice(1));
      requests[2].flush(expectedQaArr);
    });

    it('should alert user on http errors', () => {
      spyOn(window, 'alert');

      service.getQA().subscribe(
        qaArr => fail('expected to fail'),
        error => expect(error.message).toContain('Server Error')
      );

      const req = httpTestingController.expectOne(service.baseURL);
      // respond with a 500
      req.flush("Internal Server Error ", {status: 500, statusText: 'Internal Server Error'});

      expect(window.alert).toHaveBeenCalled();
    });

  });

});
