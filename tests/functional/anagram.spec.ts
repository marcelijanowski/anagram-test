import * as request from 'supertest';
import { baseUrl } from './global';

describe('Anagram', () => {
  it('should retrun proper value for one value pass for which anagram exists in dictonary', async () => {
    const response = await request(baseUrl)
      .get('/crepitus')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({
      "crepitus": [
        "cuprites",
        "pictures",
        "piecrust"
      ]
    });
  });
  it('should return proper value with multiple comma seperated for which anagram exists in dictonary', async () => {
    const response = await request(baseUrl)
      .get('/crepitus,paste,kinship,enlist,boaster,fresher,sinks,knits,sort')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({
      "crepitus": [
        "cuprites",
        "pictures",
        "piecrust"
      ],
      "paste": [
        "pates",
        "peats",
        "septa",
        "spate",
        "tapes",
        "tepas"
      ],
      "kinship": [
        "pinkish"
      ],
      "enlist": [
        "elints",
        "inlets",
        "listen",
        "silent",
        "tinsel"
      ],
      "boaster": [
        "Barotse",
        "boaters",
        "borates",
        "rebatos",
        "sorbate"
      ],
      "fresher": [
        "refresh"
      ],
      "sinks": [
        "skins"
      ],
      "knits": [
        "skint",
        "stink",
        "tinks"
      ],
      "sort": [
        "orts",
        "rots",
        "stor",
        "tors"
      ]
    });
  });
  it('should return empty value for non existing anagram', async () => {
    const response = await request(baseUrl)
      .get('/sdfwehrtgegfg')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).toEqual([]);
  });
})