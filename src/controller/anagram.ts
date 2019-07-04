import { Response, Request, NextFunction } from "express-serve-static-core";
import * as es from 'event-stream';
import * as fs from 'fs';
import * as path from 'path';
import { isAnagram } from '../lib/utils';


export const getAnagram = (request: Request, response: Response,  next: NextFunction): void => {
  try {
    const { params } = request;
    const { q } = params;
    const anagramsArray = q.split(',');
    let anagrams: { string: [] }[] = anagramsArray.reduce((acc: [], item: string) => { acc[`${item}`] = []; return acc;} , {});
    const readStream: any = fs.createReadStream(path.join(`${__dirname}../../data/wordlist.txt`), {
      encoding: 'utf8', 
      highWaterMark: 1024
    })
    .pipe(es.split())
    .pipe(es.mapSync((line: string) => anagramsArray.map((item: string) => {
      anagrams[item] =  line.toLowerCase() !== item.toLowerCase() && isAnagram(line, item) ? [...anagrams[item],...[line]] : anagrams[item];
    })))
    readStream.on('end', () => {
      response
        .status(200)
        .json(anagrams);
    });
    readStream.on('error', (error: Error) => {
      throw new Error(error.message);
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};